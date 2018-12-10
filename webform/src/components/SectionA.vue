<template>
  <div v-if="info">
    <div class="question-wrapper">
      <h2><center>{{info.question}}</center></h2>
      <br/>
      <h4><i><center>{{info.table_label}}</center></i></h4>

      <b-card class="mt-5 mb-5" v-for="(section,seckey, secindex) in info.sections">

        <div class="panel-heading"
         @click="expanded.indexOf(seckey) === -1 ? expanded.push(seckey) : expanded.splice(expanded.indexOf(seckey), 1)">
          <h4 class="name-easin">
            <font-awesome-icon v-bind:icon="expanded.indexOf(seckey) !== -1 ? 'chevron-down' : 'chevron-right'" />
            <span style="font-size: 1em; font-weight: 600;" class="name" v-html="section.scientific_name.selected">
              {{ section.scientific_name.selected }}
            </span>
            <small class="easin">EASIN identifier: <strong>{{section.species_code.selected}}</strong></small>
            <br>
          </h4>
          <h5>
            {{section.common_name.label}}: {{section.common_name.selected}}
          </h5>
        </div>

        <b-badge variant="danger" v-if="errors.items.filter((err) => {
          return err.scope === 'sectiona_mandatory_item_'+ seckey || err.scope.indexOf('sectiona_' + seckey + '_') !== -1; }).length > 0"
        v-b-tooltip.hover
        style="cursor: pointer;"
        :title="errors.items.filter((err) => { return err.scope.indexOf('sectiona_' + seckey + '_') !== -1;} ).map((err)=> {return err.msg}).join('\n')"
        >
          {{ errors.items.filter((err) => { return err.scope === 'sectiona_' + seckey + '_mandatory_item' || err.scope.indexOf('sectiona_' + seckey + '_') !== -1; })[0].msg
           }}
        </b-badge>

        <b-collapse :id="'collapse' + seckey" :visible="expanded.indexOf(seckey) !== -1">

          <b-row>
            <b-col>
              <b-input-group :prepend="section.mandatory_item.label" class="inputgroup">
                <b-form-select v-model="section.mandatory_item.selected" :options="section.mandatory_item.options"
                   v-validate="'selectRequiredNumber:1'"
                   :data-vv-as="'Species presence for '  + section.scientific_name.selected "
                   v-bind:key="'mandatory_item_' + seckey"
                   v-bind:data-vv-scope="'sectiona_' + seckey + '_mandatory_item'"
                   v-bind:name="'mandatory_item_' + seckey"
                ></b-form-select>
              </b-input-group>
            </b-col>
          </b-row>

          <div class="mt-4" v-if="section.mandatory_item.selected !== 1">
            <div>
              <hr>
              <h6>
                {{section.depending_on_mandatory.label}}
              </h6>

              <PatternField :patternfields="section.depending_on_mandatory.reproduction_patterns"
                :scope="'sectiona_' + seckey + '_reproduction'"
                :ref="'sectiona_' + seckey + '_reproduction'"
                :multiple="section.depending_on_mandatory.reproduction_patterns.multiple"
                @remove-pattern="removePattern" @add-new-pattern="addNewPattern">
              </PatternField>

              <PatternField :patternfields="section.depending_on_mandatory.spread_pattterns"
                :scope="'sectiona_' + seckey + '_spread'"
                :ref="'sectiona_' + seckey + '_spread'"
                :multiple="section.depending_on_mandatory.spread_pattterns.multiple"
                @add-new-pattern="addNewPattern" @remove-pattern="removePattern">
              </PatternField>

              <div class="mb-2" v-for="(field,fieldkey) in section.depending_on_mandatory.fields">
                <div v-if="field.type === 'file'" :prepend="field.label">
                  <FormFileUpload :selected="field.selected" :field="field" :fieldkey="fieldkey"
                    :scope="'sectiona_'+ seckey + '_' + field.name + '_' + fieldkey"
                    @form-file-uploaded="addFilesToSelected"
                    files-allowed="shp, geojson, gml,zip"
                    @form-file-delete="deleteFormFile" :multiple=false>
                  </FormFileUpload>
                </div>
              </div>
            </div>

            <b-row class="mt-3" v-if="">
              <b-col lg="3">
                {{section.additional_info.label}}
              </b-col>
              <b-col lg='12'>
                <textarea class="form-control" v-model="section.additional_info.selected"></textarea>
              </b-col>
            </b-row>

            <hr>

            <b-card class="inner-card">
              <div class="card-section">
                <center><h6>{{section.tables.table_1.label}}</h6></center>
                <hr>
                <b-row>
                  <b-col>
                    <b-badge variant="danger" v-if="errors.has('table_1_question_' + seckey ,'sectiona_'+ seckey + '_table_1' )">
                      {{ errors.first('table_1_question_' + seckey , 'sectiona_'+ seckey + '_table_1' )}}
                    </b-badge>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-input-group :prepend="section.tables.table_1.question.label"  class="inputgroup">
                      <b-form-select v-model="section.tables.table_1.question.selected" :options="section.tables.table_1.question.options"
                                     v-validate.continues="'required'"
                                     :data-vv-as="'permits issued'"
                                     v-bind:key="'table_1_question_' + seckey"
                                     v-bind:data-vv-scope="'sectiona_'+ seckey + '_table_1'"
                                     v-bind:name="'table_1_question_' + seckey"
                      ></b-form-select>
                    </b-input-group>
                  </b-col>
                </b-row>

                <div class="table-section" v-for="(table_section, table_key) in section.tables.table_1.table_sections"
                     v-if="section.tables.table_1.question.selected === true">
                  <h6>{{table_section.label}}</h6>

                  <PermitsTabel :table_section="table_section"
                                :yearoptions="table_section.field.options"
                                :scope="'table_1_' + table_key"
                                :seckey="seckey"
                                :ref="'permits_table_' + table_key"
                                @add-error="addSuberror"
                  ></PermitsTabel>

                  <div>
                    <div>
                      <label>{{table_section.additional_info.label}}</label>
                    </div>
                    <textarea class="form-control" v-model="table_section.additional_info.selected"></textarea>
                  </div>
                </div>
              </div>
            </b-card>

            <b-card class="inner-card">

              <div class="card-section" >
                <center>
                  <h6>{{section.tables.table_2.label}}</h6>
                </center>
                <hr>
                <b-row>
                  <b-col>
                    <b-badge variant="danger" v-if="errors.has('*','sectiona_' + seckey + '_table_2' )">
                      {{ errors.first('table_2_question_' + seckey , 'sectiona_' + seckey + '_table_2' )}}
                    </b-badge>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <b-input-group :prepend="section.tables.table_2.question.label"  class="inputgroup">
                      <b-form-select v-model="section.tables.table_2.question.selected" :options="section.tables.table_2.question.options"
                                     v-validate.continues="'required'"
                                     :data-vv-as="'eradication measures'"
                                     v-bind:key="'table_2_question_' + seckey"
                                     v-bind:data-vv-scope="'sectiona_' + seckey + '_table_2'"
                                     v-bind:name="'table_2_question_' + seckey">
                      </b-form-select>
                    </b-input-group>
                  </b-col>
                </b-row>

                <b-btn variant="primary"  style="margin-bottom: 1rem;margin-top: 1rem;"
                       v-if="section.tables.table_2.question.selected === true"
                       @click="addPopulation(section.tables.table_2)">
                  New Population
                </b-btn>

                <!-- TODO : fix validation -->
                <div v-for="(population, popkey) in section.tables.table_2.tables" style="margin-bottom: 1rem;">
                  <b-card v-if="section.tables.table_2.question.selected === true">

                    <div style="padding-left: 1rem;padding-right: 1rem; margin-bottom: 0.5rem;margin-top: 1rem;">
                      <b-row>
                        <b-badge variant="danger" style="padding: 0.5rem;line-height: 1.2rem;"
                                 v-if="errors.has('population' + '_' + popkey,'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + 'population')">
                          {{ errors.first('population' + '_' + popkey,'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + 'population')
                          }}
                        </b-badge>
                        <b-col>

                          <b-input-group :prepend="'Population'">
                            <b-input v-model="population.name"
                                     v-bind:key="'population' + '_' + popkey"
                                     v-bind:name="'population' + '_' + popkey"
                                     :data-vv-as="'population name'"
                                     v-bind:data-vv-scope="'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + 'population'"
                                     v-validate ="'required'"
                            ></b-input>
                          </b-input-group>
                        </b-col>

                        <b-col>
                          <b-btn variant="danger" v-if="popkey !== 0" @click="removePopulation(section.tables.table_2.tables, popkey)">Remove Population</b-btn>
                        </b-col>
                      </b-row>

                    </div>

                    <div class="table-section" v-for="(table_section,table_key) in population.table_sections">

                      <h6>{{table_section.label}}</h6>

                      <table v-for="sub_section in table_section.table_fields.fields" class="table">
                        <thead>
                        <tr>
                          <th style="max-width: 50px; font-size: 1.2em;" >{{sub_section.label}}</th>
                          <th v-if="sub_section.type === 'add'">
                            <b-btn variant="primary" @click="addSpecies(sub_section)">Add</b-btn>
                          </th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="(row, rowkey, rowindex) in sub_section.fields">

                          <td style="width: 120px" v-if="row.label"><span style="font-size: 1.2em">{{row.label}}</span></td>

                          <td v-if="sub_section.type !== 'add'">
                            <b-badge variant="danger" class="error-badge" v-if="errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                              && item.scope === 'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                              && item.field === row.name + '_' + rowkey;}).length > 0">
                              {{
                              errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                              && item.scope === 'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                              && item.field === row.name + '_' + rowkey;}).map((item)=>{
                              return item.msg;
                              }).join('\n')
                              }}
                            </b-badge>

                            <fieldGenerator
                              :field="row" :fieldkey="rowkey"
                              :validation="row.required ? row.required : 'false'"
                              :vname="row.name + '_' + rowkey"
                              :sub_section="sub_section"
                              :vkey="row.name + '_' + rowkey"
                              :ref="'sectiona_' + seckey + '_' + row.name + '_' + rowkey"
                              :vscope="'sectiona_'+ seckey + '_' +'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                              @change="row.name === 'starting_date' ? validateDate(row, sub_section, 'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey , {
                          field: row.name + '_' + rowkey,
                          scope:'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                        } ) : null"
                            ></fieldGenerator>

                          </td>
                          <td v-else>
                            <b-row>
                              <b-col>

                                <b-badge variant="danger" class="error-badge"
                                         v-if="errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                                && item.scope === 'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                                && item.field === row.name + '_' + rowkey;}).length > 0">
                                  <!-- TODO: refactor, move in method -->
                                  <!-- filtering errors for each field and scope-->
                                  {{ errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                                  && item.scope === 'sectiona_'  + seckey + '_' + 'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                                  && item.field === row.name + '_' + rowkey;}).map((item)=>{
                                  return item.msg;
                                  }).join('\n')  }}
                                </b-badge>

                                <fieldGenerator
                                  :field="row"
                                  :fieldkey="rowkey"
                                  :vname="row.name + '_' + rowkey"
                                  :vkey="row.name + '_' + rowkey"
                                  :data-vv-as="row.label"
                                  :validation="'false'"
                                  :ref="'section_'  + seckey + '_' +  seckey + '_' + row.name + '_' + rowkey"
                                  :vscope="'sectiona_'  + seckey + '_' + 'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                                ></fieldGenerator>

                              </b-col>

                              <b-col lg="2">
                                <label style="font-size: 1.2em;">{{row.inner_field.label}}</label>
                              </b-col>


                              <b-col>
                                <b-badge variant="danger" class="error-badge" v-if="errors.items.filter((item)=>{
                              return 'undefined' !== typeof item.scope
                                && item.scope === 'sectiona_'  + seckey + '_' + 'table_2_' +  table_key  + '_' + popkey + '_' + row.inner_field.name + '_' + rowkey
                                && item.field === row.inner_field.name + '_' + rowkey;}).length > 0">
                                  <!-- TODO: refactor, move in method -->
                                  <!-- filtering errors for each field and scope-->
                                  {{ errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                                  && item.scope === 'sectiona_'  + seckey + '_' + 'table_2_' +  table_key  + '_' + popkey + '_' + row.inner_field.name + '_' + rowkey
                                  && item.field === row.inner_field.name + '_' + rowkey;}).map((item)=>{
                                  return item.msg;
                                  }).join('\n') }}
                                </b-badge>

                                <fieldGenerator
                                  :vname="row.inner_field.name + '_' + rowkey"
                                  :vkey="row.inner_field.name + '_' + rowkey"
                                  :data-vv-as="row.inner_field.label"
                                  :ref="'section_' + seckey + '_' + row.inner_field.name + '_' + rowkey"
                                  :vscope="'sectiona_'  + seckey + '_' + 'table_2_' +  table_key  + '_' + popkey + '_' + row.inner_field.name + '_' + rowkey"
                                  :validation="row.inner_field.validation"
                                  :field="row.inner_field">
                                </fieldGenerator>
                              </b-col>
                              <b-col lg="2">
                                <b-btn variant="danger" @click="removeSpecies(sub_section, row)" v-if="sub_section.type === 'add'">Remove</b-btn>
                              </b-col>
                            </b-row>
                          </td>
                        </tr>
                        </tbody>
                      </table>

                      <div>
                        <div>
                          <label>{{table_section.additional_info.label}}</label>
                        </div>
                        <textarea class="form-control" v-model="table_section.additional_info.selected"></textarea>
                      </div>
                    </div>
                  </b-card>

                </div>
              </div>

            </b-card>

            <b-card class="inner-card">
              <div class="card-section">
                <center>
                  <h6>{{section.tables.table_3.label}}</h6>
                </center>
                <hr>
                <b-row>
                  <b-col>
                    <b-badge variant="danger" v-if="errors.has('*','sectiona_' + seckey + '_table_3' )">
                      {{ errors.first('table_3_question_' + seckey , 'sectiona_' + seckey + '_table_3' )}}
                    </b-badge>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-input-group :prepend="section.tables.table_3.question.label" class="inputgroup">
                      <b-form-select v-model="section.tables.table_3.question.selected" :options="section.tables.table_3.question.options"
                                     v-validate.continues="'required'"
                                     :data-vv-as="'management measures'"
                                     v-bind:key="'table_3_question_' + seckey"
                                     v-bind:data-vv-scope="'sectiona_' + seckey + '_table_3'"
                                     v-bind:name="'table_3_question_' + seckey">
                      </b-form-select>
                    </b-input-group>
                  </b-col>
                </b-row>

                <b-btn variant="primary"  style="margin-bottom: 1rem;margin-top: 1rem;" v-if="section.tables.table_3.question.selected === true"
                       @click="addPopulation(section.tables.table_3)">
                  New Population
                </b-btn>

                <!-- TODO : fix validation -->
                <div v-for="(population, popkey) in section.tables.table_3.tables" style="margin-bottom: 1rem;">

                  <b-card v-if="section.tables.table_3.question.selected === true">

                    <div style="padding-left: 1rem;padding-right: 1rem; margin-bottom: 0.5rem;margin-top: 1rem;">
                      <b-row>
                        <b-badge variant="danger" style="padding: 0.5rem;line-height: 1.2rem;"
                                 v-if="errors.has('population' + '_' + popkey,'sectiona_'+ seckey + '_' +'table_3_' + table_key  + '_' + popkey + '_' + 'population')">
                          {{ errors.first('population' + '_' + popkey,'sectiona_'+ seckey + '_' +'table_3_' + table_key  + '_' + popkey + '_' + 'population')
                          }}
                        </b-badge>
                        <b-col>

                          <b-input-group :prepend="'Population'">
                            <b-input v-model="population.name"
                                     v-bind:key="'population' + '_' + popkey"
                                     v-bind:name="'population' + '_' + popkey"
                                     :data-vv-as="'population name'"
                                     v-bind:data-vv-scope="'sectiona_'+ seckey + '_' +'table_3_' + table_key  + '_' + popkey + '_' + 'population'"
                                     v-validate ="'required'"
                            ></b-input>
                          </b-input-group>
                        </b-col>

                        <b-col>
                          <b-btn variant="danger" v-if="popkey !== 0" @click="removePopulation(section.tables.table_3.tables, popkey)">Remove Population</b-btn>
                        </b-col>
                      </b-row>

                    </div>

                    <div class="table-section" v-for="(table_section,table_key) in population.table_sections" >

                    <h6>{{table_section.label}}</h6>
                    <table  v-for="sub_section in table_section.table_fields.fields" class="table">
                      <thead>
                      <tr>
                        <th style="max-width: 50px; font-size: 1.2em" >{{sub_section.label}}</th>
                        <th v-if="sub_section.type === 'add'">
                          <b-btn variant="primary" @click="addSpecies(sub_section)">Add</b-btn>
                        </th>
                      </tr>
                      </thead>
                      <tbody>

                      <tr v-for="(row, rowkey, rowindex) in sub_section.fields">
                        <td style="width: 120px" v-if="row.label"><span style="font-size: 1.2em">{{row.label}}</span></td>


                        <td v-if="sub_section.type != 'add'">
                          <b-badge variant="danger" class="error-badge" v-if="errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                              && item.scope === 'sectiona_'+ seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                              && item.field === row.name + '_' + rowkey;}).length > 0">
                            {{
                            errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                            && item.scope === 'sectiona_'+ seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                            && item.field === row.name + '_' + rowkey;}).map((item)=>{
                            return item.msg;
                            }).join('\n')
                            }}
                          </b-badge>

                          <fieldGenerator
                            :field="row" :fieldkey="rowkey"
                            :validation="row.required ? row.required : 'false'"
                            :vname="row.name + '_' + rowkey"
                            :sub_section="sub_section"
                            :vkey="row.name + '_' + rowkey"
                            :ref="'sectiona_' + seckey + '_' + row.name + '_' + rowkey"
                            :vscope="'sectiona_'+ seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                            @change="row.name === 'starting_date' ? validateDate(row, sub_section, 'sectiona_' + seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_'+ row.name + '_' + rowkey , {
                          field: row.name + '_' + rowkey,
                          scope:'sectiona_'+ seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                        } ) : null"
                          ></fieldGenerator>

                        </td>
                        <td v-else>
                          <b-row>
                            <b-col>
                              <b-badge variant="danger" class="error-badge"
                                       v-if="errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                                && item.scope === 'sectiona_'  + seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                                && item.field === row.name + '_' + rowkey;}).length > 0">
                                <!-- TODO: refactor, move in method -->
                                <!-- filtering errors for each field and scope-->
                                {{ errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                                && item.scope === 'sectiona_'  + seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                                && item.field === row.name + '_' + rowkey;}).map((item)=>{
                                return item.msg;
                                }).join('\n')  }}
                              </b-badge>

                              <fieldGenerator
                                :field="row"
                                :fieldkey="rowkey"
                                :vname="row.name + '_' + rowkey"
                                :vkey="row.name + '_' + rowkey"
                                :data-vv-as="row.label"
                                :validation="'false'"
                                :ref="'section_'  + seckey + '_' +  seckey + '_' + row.name + '_' + rowkey"
                                :vscope="'sectiona_'  + seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"

                              ></fieldGenerator>

                            </b-col>

                            <b-col lg="2">
                              <label  style="font-size: 1.2em">{{row.inner_field.label}}</label>
                            </b-col>

                            <b-col>
                              <b-badge variant="danger" class="error-badge" v-if="errors.items.filter((item)=>{
                              return 'undefined' !== typeof item.scope
                                && item.scope === 'sectiona_'  + seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.inner_field.name + '_' + rowkey
                                && item.field === row.inner_field.name + '_' + rowkey;}).length > 0">
                                <!-- TODO: refactor, move in method -->
                                <!-- filtering errors for each field and scope-->
                                {{ errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                                && item.scope === 'sectiona_'  + seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.inner_field.name + '_' + rowkey
                                && item.field === row.inner_field.name + '_' + rowkey;}).map((item)=>{
                                return item.msg;
                                }).join('\n') }}
                              </b-badge>

                              <fieldGenerator
                                :vname="row.inner_field.name + '_' + rowkey"
                                :vkey="row.inner_field.name + '_' + rowkey"
                                :data-vv-as="row.inner_field.label"
                                :ref="'section_' + seckey + '_' + row.inner_field.name + '_' + rowkey"
                                :vscope="'sectiona_'  + seckey + '_' + 'table_3_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.inner_field.name + '_' + rowkey"
                                :validation="row.inner_field.validation"
                                :field="row.inner_field">
                              </fieldGenerator>
                            </b-col>
                            <b-col lg="2">
                              <b-btn variant="danger" @click="removeSpecies(sub_section, row)" v-if="sub_section.type === 'add'">Remove</b-btn>
                            </b-col>
                          </b-row>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <div>
                      <div>
                        <label>{{table_section.additional_info.label}}</label>
                      </div>
                      <textarea class="form-control" v-model="table_section.additional_info.selected"></textarea>
                    </div>
                  </div>
                  </b-card>

                </div>



              </div>
            </b-card>

          </div>

        </b-collapse>
      </b-card>

    </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';
import fieldGenerator from './fieldGenerator';
import FormFileUpload from "./FormFileUpload";
import PatternField from "./PatternField";
import PermitsTabel from "./PermitsTabel";

import {getSupportingFiles, envelope} from '../api.js';

export default {
  components: {PermitsTabel, fieldGenerator, FormFileUpload, PatternField},

  props: {
    info: null,
    tabId:null
  },
  data () {
    return {
      expanded: [],
      customField: null,
      addCustom: {
        text: null,
        value: null,
      },
      files: [],
      dateErrors: [],
      tableErrors: {},
    }
  },

  watch: {
    dateErrors(fields, oldFields){
      let self = this;

      if(fields.length > 0){
        oldFields.map((field)=> {
          let errs = field.target.$validator.errors.items.filter((err) => {
            return err.scope === field.scope && err.field === field.name;
          });
          errs.map((err)=> {
            field.target.$validator.errors.removeById(err.id);
          });
        });

        fields.map((field) => {
          let error = {
            field: field.name,
            msg: "The start date bust be lower than the end date",
            scope: field.scope,
            rule: 'required',
            vmId: field.vmId,
            //id: field.id,
          };

          let errs = field.target.$validator.errors.items.filter((err) => {
            return err.scope === field.scope && err.field === field.name;
          });

          if( errs.length === 0 ){
            field.target.$validator.errors.add(error);
          }
          field.target.$forceUpdate();
        });
      } else {
        oldFields.map((field)=> {
          let errs = field.target.$validator.errors.items.filter((err) => {
            return err.scope === field.scope && err.field === field.name;
          });
          errs.map((err)=> {
            field.target.$validator.errors.removeById(err.id);
          });
        });
      }
    },

    tableErrors(errorsSections, oldErrors){
      let self = this;

      Object.keys( errorsSections ).map((section) => {
        let sectionTables = errorsSections[section];

        Object.keys(sectionTables).map((table) => {
          let err =  sectionTables[table];

          let fieldFound = null;
          let refFound = null;

          if('undefined' !== typeof self.$validator){
            self.$validator.fields.items.filter((field) => {
              if(field.name === err.name && field.scope === err.scope){
                fieldFound = field;
              }
            });
            let ref = self.$refs[err.item];

            if(fieldFound === null){
              if("undefined" !== typeof ref[0].$validator){
                ref[0].$validator.fields.items.filter((field) => {

                  if(field.name === err.name  && field.scope === err.scope){
                    refFound = self.$refs[err.item][0];
                    fieldFound = field;
                  }
                });
              }
            }
          }

          if(fieldFound !== null){
            let error = {
              field: fieldFound.name,
              msg: err.msg,
              scope: fieldFound.scope,
              rule: "required",
            };

            if(refFound !== null){
              refFound.$validator.errors.add(error);
            } else {
              self.$validator.errors.add(error);
            }
          } else {

          }
        });
      });
    },
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

    addNewPattern(fields){
      let newField = JSON.parse(JSON.stringify(fields[0]));
      newField.selected.pattern = null;
      newField.selected.region = null;
      fields.push(newField);
    },

    removePattern(fields, fieldkey){
      if(fieldkey !== 0) fields.splice(fieldkey, 1);
    },

    /*addCustomField(field){
      this.customField = field;
      this.$refs.customFieldModal.show();
    },
    saveCustomField(){
      let addField = JSON.parse(JSON.stringify(this.addCustom));

      this.customField.options.push(addField);
      this.customField.selected = addField.value;
      this.addCustom.text = null;
      this.addCustom.value = null;
      this.$refs.customFieldModal.hide();
    },*/

    addSpecies(field){
      let empty_field = {
        label: 'Impacted non-targeted species',
        type: 'text',
        selected: '',
        name: 'impacted_nontargeted_species',
        inner_field: {
          label: 'Impact per species',
          type: 'text',
          selected: '',
          name: 'impact_per_species',
        }
      };
      field.fields.push(empty_field);
    },

    removeSpecies(parent, field){
      parent.fields.splice(parent.fields.indexOf(field), 1);
    },

    addFilesToSelected(fieldkey,index,field){
      let self = this;
      getSupportingFiles().then((response) => {
        field.selected = envelope + '/' + response.data[response.data.length - 1];
        self.$forceUpdate();
      }).catch((error) =>{
        console.error(error);
      });
    },

    deleteFormFile(found, fieldkey, field){
      field.selected = null;
    },

    // geting errors from child component
    addSuberror(error, field){
      let self = this;
      let foundP = this.errors.items.filter((item) => {
        return item.field === field.name && item.scope === field.scope;
      });

      if(error === null){
        self.$validator.errors.removeById(foundP.id);
      }

      if(foundP.length === 0 && error !== null){
        error.rule = 'required';
        self.$validator.errors.add(error);
      }
    },

    validateDate(row, sub_section,ref, obj){
      let self = this;
      let value = row.selected;
      let tover = sub_section.fields.filter((field) => { return field.name==='duration_or_end'})[0];

      let larger = new Date(value).valueOf() > new Date(tover.selected).valueOf();
      if(larger){
        let target = self.$refs[ref][0];

        let name = target.$el.querySelector('[name]').getAttribute('name') ;
        let scope = target.$el.querySelector('[data-vv-scope]').getAttribute('data-vv-scope');

        let field = target.$validator.fields.find({name: name, scope: scope});
        if(field){
          self.dateErrors.push({field: field.name, scope:field.scope, target: target });
        }
      } else {
        self.$set(this,'dateErrors',[] );
      }
    },

    //TODO: fix validation for population
    validateQuestion12(){
      let self = this;

      //let fields = [ 'part_territory' , 'biogeographical_region', 'river_basin_subunits','marine_sub_regions' ];

      const reg = /(sectiona_([0-9]))\w+(part_territory|biogeographical_region|river_basin_subunits|marine_sub_regions)/;

      let temp = {};

      function processTable(table, tablename, sectionK){
        let found = [];

        let finalResult = [];
        Array.from(table).map((element) => {
          let val = null;

          if(element.el.getAttribute("class") === "multiselect"){
            val = self.$refs[element.item][0].field.selected.length === 0 ? null : self.$refs[element.item][0].field.selected ;
            /*console.log("multiselect");
            console.log(val);
            console.log("endmultiselect");*/
          } else if(element.el.getAttribute('value') !== null){
            val = element.el.getAttribute('value');
          } else if(element.el.value !== null){
            val = element.el.value;

            if("undefined" === typeof val){
              let newval = element.el.querySelector("[name]");
              if(newval !== null) val = newval.value;
            }
          } else {
            console.error("not working");
            console.error(element.el);
          }

          if(val !== '' && val !== null){
            found.push(element);
          }
          console.log(found);
        });

        if(found.length > 0){
          //finalResult = false;
        } else {
          finalResult = Array.from(table).map((el2) => {
            return {
              item:el2.item,
              name: el2.name,
              scope: el2.scope,
              msg: "There must be an answer to at least one of the following fields",
              table: tablename,
            }
          });
        }

        return finalResult;
      }

      // find all fields and arrange by tables
      Object.keys(self.$refs).map((item) => {
        let res = item.match(reg);

        if(res !== null){
          let name = res[0];
          let section = res[1];
          let seckey = res[2];

          if('undefined' === typeof temp[section]){
            temp[section] = [];
          }

          self.$set( self.tableErrors , section, []);
          self.$forceUpdate();

          let ref = self.$refs[item];

          let vscope = ref[0].$el.querySelector('[name]').getAttribute('data-vv-scope');
          let el = ref[0].$el.querySelector('[name]');
          let vname = ref[0].$el.querySelector('[name]').getAttribute("name");

          if(null === vscope ) {
            vscope = ref[0].$el.querySelector('[data-vv-scope]').getAttribute('data-vv-scope');
            el = ref[0].$el.querySelector('[data-vv-scope]');
          }

          if(vscope!== null ){
            let reg2 = /(sectiona_([0-9])_table_([0-9]))\w+()/;
            let table_res = vscope.match(reg2);

            if(table_res !== null){
              let table_nr = table_res[3];

              if('undefined' === typeof temp[section]["table_" + table_nr]){
                temp[section]["table_" + table_nr] = new Set();
              }
              temp[section]["table_" + table_nr].add({item: item, el: el, scope: vscope, name: vname });
            }
          }
        }
      });

      let result = {};

      Object.keys(temp).map((sectionName) => {
        if('undefined' === typeof result[sectionName]) result[sectionName] = [];

        Object.keys(temp[sectionName]).map((tablename) => {
          let table = temp[sectionName][tablename];
          let tableerrors = processTable(table, tablename, sectionName );

          tableerrors.map((err) => {
            result[sectionName].push(err);
          });

        });
      });

      self.tableErrors = result;
    },

    validate(){
      let self = this;
      let promises = [];

      for( let child in self.$refs){
        if(self.$refs.hasOwnProperty(child) &&  'undefined' !== typeof self.$refs[child][0]
          && 'undefined' !== typeof self.$refs[child][0].$validator) {
          if('undefined' !== typeof self.$refs[child][0].validate){
            promises.push( self.$refs[child][0].validate());
          }
          promises.push(self.$refs[child][0].$validator.validate());
        }
      }

      self.validateQuestion12();

      return new Promise(function(resolve, reject) {
        Promise.all(promises).then((res) => {
          // if no errors
          if(res.filter((it)=>{ return it === false}).length === 0){
            resolve(res);
          } else {
            reject(res);
          }
        }).catch((e) => {
          console.error(e);
          reject(e);
        });
      }).catch((rej) => {
        console.error(rej);
      });
    },

    addPopulation(tableSection){
      let tablecopy = JSON.parse(JSON.stringify(tableSection.tables[0]));
      tablecopy.name = '';
      tablecopy.table_sections = JSON.parse(JSON.stringify(tableSection.table_sections));

      tableSection.tables.push(tablecopy);
    },

    removePopulation(tables, popkey){
      if(popkey !== 0) {
        this.$delete(tables, popkey);
      }
    }
  },
}
</script>

<style lang="css" scoped>
  .panel-heading {
    cursor: pointer;
  }

  .inner-card {
    background: #eee;
    margin: 1rem 0;
  }

  .table-section {
    background: white;
    border-radius: .25em;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .name-easin .easin {
    position: absolute;
    right: 20px;
  }

  .name-easin .name {
    margin-left: 1rem;
  }

  @media screen and (max-width: 1024px){
    .name-easin {
      display: flex;

      flex-flow: row;
    }
    .name-easin .name {
      display: block;
      width: 50%;
    }
    .name-easin .easin {
      position: relative;
      right: 0;
      width: 40%;
      margin-left: 10%;
      display: block;
    }
  }



</style>

<style>
  .inputgroup .input-group-prepend .input-group-text{
    font-size: 1.2em;
    font-weight: 600;
  }

  @media screen and (max-width: 768px){
    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    .input-group-text {
      white-space: initial;
    }
  }
</style>
