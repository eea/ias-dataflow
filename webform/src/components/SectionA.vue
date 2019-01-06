<template>
  <div v-if="info" v-show="!loading">
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
                @remove-pattern="removePattern" @add-new-pattern="addNewPattern"
                @add-error="addSuberror"
              ></PatternField>

              <PatternField :patternfields="section.depending_on_mandatory.spread_pattterns"
                :scope="'sectiona_' + seckey + '_spread'"
                :ref="'sectiona_' + seckey + '_spread'"
                :multiple="section.depending_on_mandatory.spread_pattterns.multiple"
                @add-new-pattern="addNewPattern" @remove-pattern="removePattern"
                @add-error="addSuberror"
              ></PatternField>

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
                  Add population
                </b-btn>

                <!-- TODO : fix validation -->
                <div v-for="(population, popkey) in section.tables.table_2.tables" style="margin-bottom: 1rem;">
                  <b-card v-if="section.tables.table_2.question.selected === true">
                    <b-row>
                      <b-col>
                        <b-btn style="margin-bottom: 1rem;" btn-variant="primary" v-b-toggle="'collapse' + seckey  + '2' + popkey">
                          <span class="when-opened">Minimize
                            <font-awesome-icon v-bind:icon="'chevron-down'"></font-awesome-icon>
                          </span>
                          <span class="when-closed">Maximize
                            <font-awesome-icon v-bind:icon="'chevron-right'"></font-awesome-icon>
                          </span>
                        </b-btn>
                      </b-col>
                    </b-row>

                    <b-row>

                      <b-col v-if="errors.has('population' + '_' + popkey,'sectiona_'+ seckey + '_' +'table_2_' + popkey + '_' + 'population')">
                        <b-badge variant="danger" style="padding: 0.5rem;line-height: 1.2rem;">
                        {{ errors.collect('population' + '_' + popkey , 'sectiona_'+ seckey + '_' +'table_2_' + popkey + '_' + 'population').join("\n")
                        }}</b-badge>
                      </b-col>

                      <b-col col lg="10">
                        <b-input-group :prepend="'Population'">
                          <b-input v-model="population.name"
                                   v-bind:key="'population' + '_' + popkey"
                                   v-bind:name="'population' + '_' + popkey"
                                   :ref="'sectiona_'+ seckey + '_' +'table_2_' + popkey + '_' + 'population'"
                                   :data-vv-as="'population name'"
                                   v-bind:data-vv-scope="'sectiona_'+ seckey + '_' +'table_2_' + popkey + '_' + 'population'"
                                   v-validate ="'required'"
                          ></b-input>
                        </b-input-group>
                      </b-col>

                      <b-col>
                        <b-btn variant="danger" v-if="popkey !== 0"
                               @click="removePopulation(section.tables.table_2.tables, popkey)">Remove Population</b-btn>
                      </b-col>

                    </b-row>

                    <b-collapse :id="'collapse' + seckey  + '2' + popkey" visible>
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

                              <td v-if="sub_section.type !== 'add' && !row.addoption">
                                <b-badge variant="danger" class="error-badge"
                                         v-if="errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
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
                                <b-col lg="12">
                                  <fieldGenerator
                                    :field="row" :fieldkey="rowkey"
                                    :validation="row.required ? row.required : 'false'"
                                    :vname="row.name + '_' + rowkey"
                                    :sub_section="sub_section"
                                    :vkey="row.name + '_' + rowkey"
                                    :ref="'sectiona_' + seckey + '_' +'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                                    :vscope="'sectiona_'+ seckey + '_' +'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                                    @change="row.name === 'starting_date' ? validateDate(row, sub_section,
                              'sectiona_' + seckey + '_' +'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey , {
                          field: row.name + '_' + rowkey,
                          scope:'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                        } ) : null"
                                  ></fieldGenerator>
                                </b-col>
                              </td>

                              <td v-else-if="row.addoption">
                                  <b-col lg="12">
                                    <b-badge variant="danger" class="error-badge" v-if="errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                                      && item.scope === 'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                                      && item.field === row.name + '_' + rowkey;}).length > 0">
                                      {{
                                      errors.items.filter((item)=>{ return 'undefined' !== typeof item.scope
                                      && item.scope === 'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                                      && item.field === row.name + '_' + rowkey;}).map((item)=> {
                                      return item.msg;
                                      }).join('\n')
                                      }}
                                    </b-badge>
                                    <fieldGenerator
                                      style="display: inline-block; width: 88%;"
                                      :field="row" :fieldkey="rowkey"
                                      :validation="row.required ? row.required : 'false'"
                                      :vname="row.name + '_' + rowkey"
                                      :sub_section="sub_section"
                                      :vkey="row.name + '_' + rowkey"
                                      :ref="'sectiona_' + seckey + '_' +'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                                      :vscope="'sectiona_'+ seckey + '_' +'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                                      @change="row.name === 'starting_date' ? validateDate(row, sub_section,
                                        'sectiona_' + seckey + '_' +'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey , {
                                          field: row.name + '_' + rowkey,
                                          scope:'sectiona_'+ seckey + '_' +'table_2_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                                      } ) : null"
                                    ></fieldGenerator>
                                    <b-btn v-if="row.addoption"
                                           style="display: inline-block; margin-left: 5px;margin-top: -1px;"
                                           @click="addCustomField(row)"
                                    >Add Option</b-btn>
                                  </b-col>

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
                                      :ref="'sectiona_'  + seckey + '_' + 'table_2_' +  table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
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
                                      :ref="'sectiona_'  + seckey + '_' + 'table_2_' +  table_key  + '_' + popkey + '_' + row.inner_field.name + '_' + rowkey"
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
                    </b-collapse>

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
                  Add population
                </b-btn>

                <!-- TODO : fix validation -->
                <div v-for="(population, popkey) in section.tables.table_3.tables" style="margin-bottom: 1rem;">

                  <b-card v-if="section.tables.table_3.question.selected === true">

                    <b-row>
                      <b-col>
                        <b-btn style="margin-bottom: 1rem;" btn-variant="primary" v-b-toggle="'collapse' + seckey  + '3' + popkey">
                          <span class="when-opened">Minimize
                            <font-awesome-icon v-bind:icon="'chevron-down'"></font-awesome-icon>
                          </span>

                          <span class="when-closed">Maximize
                            <font-awesome-icon v-bind:icon="'chevron-right'"></font-awesome-icon>
                          </span>
                        </b-btn>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col v-if="errors.has('population' + '_' + popkey, 'sectiona_'+ seckey + '_' +'table_3_' + popkey + '_' + 'population')">
                        <b-badge variant="danger" style="padding: 0.5rem;line-height: 1.2rem;">
                          {{ errors.first('population' + '_' + popkey,'sectiona_'+ seckey + '_' +'table_3_' + popkey + '_' + 'population')
                          }}</b-badge>
                      </b-col>
                      <b-col col lg="10">
                        <b-input-group :prepend="'Population'">
                          <b-input v-model="population.name"
                                   v-bind:key="'population' + '_' + popkey"
                                   v-bind:name="'population' + '_' + popkey"
                                   :ref="'sectiona_'+ seckey + '_' +'table_3_' + popkey + '_' + 'population'"
                                   :data-vv-as="'population name'"
                                   v-bind:data-vv-scope="'sectiona_'+ seckey + '_' +'table_3_' + popkey + '_' + 'population'"
                                   v-validate ="'required'"
                          ></b-input>
                        </b-input-group>
                      </b-col>

                      <b-col>
                        <b-btn variant="danger" v-if="popkey !== 0" @click="removePopulation(section.tables.table_3.tables, popkey)">Remove Population</b-btn>
                      </b-col>

                    </b-row>
                    <b-collapse :id="'collapse' + seckey  + '3' + popkey" visible>
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

                            <td v-if="sub_section.type !== 'add' && !row.addoption">

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
                                :ref="'sectiona_'+ seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                                :vscope="'sectiona_'+ seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                                @change="row.name === 'starting_date' ? validateDate(row, sub_section,
                            'sectiona_'+ seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey , {
                          field: row.name + '_' + rowkey,
                          scope:'sectiona_'+ seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey
                        } ) : null"
                              ></fieldGenerator>

                            </td>

                            <td v-else-if="row.addoption">
                              <b-col lg="12">

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
                                  style="display: inline-block; width: 88%;"
                                  :field="row"
                                  :fieldkey="rowkey"
                                  :vname="row.name + '_' + rowkey"
                                  :vkey="row.name + '_' + rowkey"
                                  :data-vv-as="row.label"
                                  :validation="'false'"
                                  :ref="'sectiona_'  + seckey + '_' +  seckey + '_' + row.name + '_' + rowkey"
                                  :vscope="'sectiona_'  + seckey + '_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.name + '_' + rowkey"
                                ></fieldGenerator>


                                <b-btn v-if="row.addoption"
                                       style="display: inline-block; margin-left: 5px;margin-top: -1px;"
                                       @click="addCustomField(row)"
                                >Add Option</b-btn>
                              </b-col>
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
                                    :ref="'sectiona_'  + seckey + '_' +  seckey + '_' + row.name + '_' + rowkey"
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
                                    :ref="'sectiona_'  + seckey + '_' + 'table_3_' + 'table_3_' + table_key  + '_' + popkey + '_' + row.inner_field.name + '_' + rowkey"
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
                    </b-collapse>

                  </b-card>

                </div>



              </div>
            </b-card>

          </div>

        </b-collapse>
      </b-card>

    </div>

    <b-modal hide-footer ref="customFieldModal">
      <div v-if="customField" slot="modal-title">{{customField.label}}</div>
      <div v-if="customField">
        <b-input-group class="mb-3" prepend="Name">
          <b-form-input v-model="addCustom.text"></b-form-input>
        </b-input-group>
        <b-input-group prepend="Code">
          <b-form-input v-model="addCustom.value"></b-form-input>
        </b-input-group>
        <b-btn class="mt-3" variant="outline-primary" @click="saveCustomField" block>Add</b-btn>
      </div>
    </b-modal>

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

  //inject: ["$validator" ],
  props: {
    info: null,
    tabId:null,
    jsondata: null,
  },
  data () {
    return {
      expanded: [],
      loading: false,

      customField: null,
      addCustom: {
        text: null,
        value: null,
      },
      files: [],
      dateErrors: [],
      tableErrors: {},
      popErrors: [],
    }
  },
  created (){
    this.fetchData();
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

    popErrors(errors, oldErrors){
      let self = this;

      if(errors.length === 0){
        /*oldErrors.map((item)=> {
          let name = item.ref.$el.getAttribute("name");
          let scope = item.ref.$el.getAttribute("data-vv-scope");

          if('undefined' !== typeof self.$validator){
            let field = self.$validator.items.filter((field) => { return field.name === name && field.scope === scope });

            let foundP = this.errors.items.filter((item) => {
              return item.field === field.name && item.scope === field.scope;
            });
            foundP.map((err)=> {
              self.$validator.errors.removeById(err.id);
            });
          }
        });*/
      } else {
        errors.map((item) => {
          let name = item.ref.$el.getAttribute("name");
          let scope = item.ref.$el.getAttribute("data-vv-scope");

          let field = self.$validator.fields.items.filter((field) => { return field.name === name && field.scope === scope })[0];

          let error = {
            field: field.name,
            msg: "Same population name",
            scope: field.scope,
            rule: 'required',
            //vmId: field.vmId
          };

          /*console.log(field.name);
          console.log(field.scope);*/

          self.$validator.errors.add(error);

          self.$forceUpdate();
        });
      }

    }
  },

  methods: {
    fetchData(){
      let self = this;
      this.loading = true
      let measurement_units = [
        {
          text: 'kg',
          value: 'kg'
        },{
          text: 'pcs',
          value: 'pcs',
        }
      ];

      let years = [
        { text: '2015', value: 2015 },
        { text: '2016', value: 2016 },
        { text: '2017', value: 2017 },
        { text: '2018', value: 2018 },
      ];

      let regionOptions = [
        {
          text: 'Romania', value: 'RO',
        },
        {
          text: 'France', value: 'FR',
        },
      ];

      let tab_1_section = {
        scientific_name: {
          label: 'Species scientific name',
          selected: '',
          type: 'text',
          disabled: true,
          name: 'scientific_name',
          index: 1,
        },
        common_name: {
          label: "Common name of the species",
          selected: '',
          disabled: true,
          name: 'common_name',
          type: 'text',
          index: 2,
        },

        species_code: {
          label: "EASIN identifier",
          selected: '',
          disabled: true,
          name: 'species_code',
          type: 'text',
          index: 2,
        },
        mandatory_item: {
          label: 'Is the species present in the territory of the Member State ?',
          type: 'select',
          selected: 1,
          options: [{ value: true, text: "Yes" }, { value: false, text: "No" }, { value: 'unknown', text: "Currently unknown" }],
          index: 3,
          name: 'mandatory_question',
        },

        depending_on_mandatory: {
          label: 'A distribution map for this species is included in the file which will be uploaded in the \'Distribution map for SECTION A\' field available on \'DISTRIBUTION MAP\' section.',
          index: 4,
          name: 'distribution_of_species',
          fields: [
            {
              label: 'Tick if yes',
              type: 'checkbox',
              name: 'distribution_maps_check',
              selected: false,
            },
          ],
          reproduction_patterns: [
            {
              label: 'Reproduction patterns',
              type: 'select',
              add: true,
              patternType: 'reproduction',
              name: 'reproduction patterns',
              multiple: false,
              selected: {
                region: null,
                pattern: null
              },
              options:[
                {
                  text: 'Sexual', value: 0,
                },
                {
                  text: 'Asexusal', value: 1,
                },
                {
                  text: 'Both (sexual and asexual)', value : 2,
                },
                {
                  text: 'Unclear (sexual or asexual) ', value: 3,
                },
                {
                  text: 'Not reproducing in the Member State', value: 4,
                },
                {
                  text: 'Unknown whether the species reproduces in the Member State', value: 5,
                }
              ],
              //TODO : remove
              regionOptions: regionOptions
            }
          ],
          spread_pattterns:[
            {
              label: 'Spread patterns',
              type: 'select',
              patternType: 'spread',
              name: 'spread_patterns',
              add: true,
              multiple: true,
              selected: {
                region: null,
                pattern: null
              },
              options:[
                {
                  text: 'a) The species was already widely spread before 2015',
                  index: 'a',
                  value: 0,
                },

                {
                  text: 'b) The species predominantly entered through natural dispersal from a neighbouring country',
                  index: 'b',
                  value: 1,
                },

                {
                  text:'c) The species predominantly entered with unintentional human assistance',
                  index: 'c',
                  value : 2,
                },

                {
                  text: 'd) The species predominantly entered with intentional human assistance',
                  index: 'd',
                  value: 3,
                },

                {
                  text: 'e) There is no evidence of new entries into the Member State',
                  index: 'e',
                  value: 4,
                },

                {
                  text: 'f) The species predominantly spread through natural dispersal',
                  index: 'f',
                  value: 5,
                },

                {
                  text: 'g) The species predominantly spread with unintentional human assistance',
                  index: 'g',
                  value: 6,
                },

                {
                  text: 'h) The species predominantly spread with intentional human assistance',
                  index: 'h',
                  value: 7,
                },

                {
                  text: 'i) There is no evidence of spread within the Member State',
                  index: 'i',
                  value: 8,
                },

                {
                  text: 'j) The species spread from the Member State into other Member State(s)',
                  index: 'j',
                  value: 9
                }
              ],
              //TODO : remove
              regionOptions: regionOptions
            },
          ]
        },

        additional_info: {
          label: 'Additional information (optional)',
          type: 'textarea',
          index: 5,
          selected: '',
          name: 'additional_info'
        },

        tables: {
          table_1: {
            label: 'Information on the permits issued for this species to be completed only for invasive alien species of Union concern',
            name: 'permits_info',
            question: {
              label: 'Have permits been issued for this species during the reporting period? ',
              type: 'select',
              index: 6,
              options: [{ value: true, text: "Yes" }, { value: false, text: "No" }],
              selected: '',
            },
            table_sections: [
              {
                label: '',
                name: 'permits_table',
                field: {
                },
                table_fields: {
                  header: 'Purpose of permit',
                  fields: [
                  ],
                  optionsFields:[
                    {
                      label: 'Permits for research',
                      fields: [
                        {
                          label: "Year",
                          tooltip: 'Calendar year',
                          name: "year",
                          type: 'select',
                          selected: '',
                          options: years,
                        },

                        {
                          label: 'Number of permits...',
                          tooltip: 'Number of permits issued in the calendar year',
                          name: 'permits_number_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of permits issued in the calendar year',
                                  name: 'permits_number',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'No. permits valid',
                          tooltip: 'Number of permits valid in the calendar year',
                          name: 'valid_permits_number_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of permits valid in the calendar year',
                                  name: 'valid_permits_number',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'valid_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Permitted specimens - permits issued',
                          tooltip: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                          name: 'total_permited_speciments_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                                  name: 'total_permited_speciments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'total_permited_speciments_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Permitted specimens - valid permits',
                          tooltip: 'Total number or volume of permitted specimens corresponding to the valid permits',
                          name: 'valid_total_permited_speciments_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                                  name: 'valid_total_permited_speciments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'valid_total_permited_speciments_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                      ]
                    },

                    {
                      label: 'Permits for ex situ conservation',
                      fields: [
                        {
                          label: "Year",
                          name: "year",
                          type: 'select',
                          selected: '',
                          options: years,
                        },

                        {
                          label: 'Number of permits issued in the calendar year',
                          name: 'permits_number_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of permits issued in the calendar year',
                                  name: 'permits_number',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Number of permits valid in the calendar year',
                          name: 'valid_permits_number_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of permits valid in the calendar year',
                                  name: 'valid_permits_number',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'valid_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                          name: 'total_permited_speciments_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                                  name: 'total_permited_speciments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'total_permited_speciments_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Total number or volume of permitted specimens corresponding to the valid permits',
                          name: 'valid_total_permited_speciments_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                                  name: 'valid_total_permited_speciments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'valid_total_permited_speciments_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                      ]
                    },

                    {
                      label: 'Permits for scientific production and subsequent medicinal use to advance human health',
                      fields: [
                        {
                          label: "Year",
                          name: "year",
                          type: 'select',
                          selected: '',
                          options: years,
                        },

                        {
                          label: 'Number of permits issued in the calendar year',
                          name: 'permits_number_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of permits issued in the calendar year',
                                  name: 'permits_number',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Number of permits valid in the calendar year',
                          name: 'valid_permits_number_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of permits valid in the calendar year',
                                  name: 'valid_permits_number',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'valid_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                          name: 'total_permited_speciments_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                                  name: 'total_permited_speciments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'total_permited_speciments_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Total number or volume of permitted specimens corresponding to the valid permits',
                          name: 'valid_total_permited_speciments_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                                  name: 'valid_total_permited_speciments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'valid_total_permited_speciments_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                      ]
                    },

                    {
                      label: 'Permits for other activities after authorisation by the Commission (Article 9 of Regulation (EU) No 1143/2014)',
                      fields: [
                        {
                          label: "Year",
                          name: "year",
                          type: 'select',
                          selected: '',
                          options: years,
                        },

                        {
                          label: 'Number of permits issued in the calendar year',
                          name: 'permits_number_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of permits issued in the calendar year',
                                  name: 'permits_number',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Number of permits valid in the calendar year',
                          name: 'valid_permits_number_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of permits valid in the calendar year',
                                  name: 'valid_permits_number',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'valid_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                          name: 'total_permited_speciments_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                                  name: 'total_permited_speciments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'total_permited_speciments_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Total number or volume of permitted specimens corresponding to the valid permits',
                          name: 'valid_total_permited_speciments_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Total number or volume of permitted specimens corresponding to the permits issued in the calendar year',
                                  name: 'valid_total_permited_speciments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'valid_total_permited_speciments_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                      ]
                    },
                  ],
                },
                additional_info: {
                  label: 'Additional information (optional)',
                  name: 'additional_info',
                  selected: '',
                  type: 'textarea'
                },
              },
              {
                label: 'Information on inspections to be completed only for invasive alien species of Union concern and if the answer to question 6 above is ‘Yes’',
                name: 'inspection_table',
                field: {
                },
                table_fields: {
                  header: 'Purpose of permit',
                  fields: [
                  ],
                  optionsFields: [
                    {
                      label: 'Permits for research',
                      fields: [
                        {
                          label: "Year",
                          tooltip: "Calendar year",
                          name: "year",
                          type: 'select',
                          selected: '',
                          options: years,
                        },

                        {
                          label: 'No. establishments',
                          tooltip: 'Number of establishments subjected to the inspections',
                          name: 'number_establishments_inspections_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                                  name: 'number_establishments_inspections',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'inspections_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Permitted specimens - permits held by the inspected est.',
                          tooltip: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                          name: 'number_permitted_specimens_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                                  name: 'number_permitted_specimens',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'number_permitted_specimens_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Inspected establishments non-compliant',
                          tooltip: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                          name: 'establishments_non_compliant_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                                  name: 'establishments_non_compliant',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'establishments_non_compliant_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          //label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                          name: 'number_speciments_held_by_non_compliant_establishments_main',
                          type: 'add',
                          selected: '',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Permitted specimens - permits held by the inspected est. non-compliant',
                                  tooltip: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                                  name: 'number_speciments_held_by_non_compliant_establishments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'measurement_noncompliant',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                      ]
                    },

                    {
                      label: 'Permits for ex situ conservation',
                      fields: [
                        {
                          label: "Year",
                          name: "year",
                          type: 'select',
                          selected: '',
                          options: years,
                        },

                        {
                          label: 'Number of establishments subjected to the inspections',
                          name: 'number_establishments_inspections_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                                  name: 'number_establishments_inspections',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'inspections_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                          name: 'number_permitted_specimens_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                                  name: 'number_permitted_specimens',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'number_permitted_specimens_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                          name: 'establishments_non_compliant_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                                  name: 'establishments_non_compliant',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'establishments_non_compliant_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },

                        {
                          //label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                          name: 'number_speciments_held_by_non_compliant_establishments_main',
                          type: 'add',
                          selected: '',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                                  name: 'number_speciments_held_by_non_compliant_establishments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'measurement_noncompliant',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                      ]
                    },
                    {
                      label: 'Permits for scientific production and subsequent medicinal use to advance human health',
                      fields: [
                        {
                          label: "Year",
                          name: "year",
                          type: 'select',
                          selected: '',
                          options: years,
                        },
                        {
                          label: 'Number of establishments subjected to the inspections',
                          name: 'number_establishments_inspections_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                                  name: 'number_establishments_inspections',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'inspections_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                        {
                          label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                          name: 'number_permitted_specimens_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                                  name: 'number_permitted_specimens',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'number_permitted_specimens_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                        {
                          label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                          name: 'establishments_non_compliant_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                                  name: 'establishments_non_compliant',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'establishments_non_compliant_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                        {
                          //label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                          name: 'number_speciments_held_by_non_compliant_establishments_main',
                          type: 'add',
                          selected: '',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'cccNumber or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                                  name: 'number_speciments_held_by_non_compliant_establishments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'measurement_noncompliant',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                      ]
                    },
                    {
                      label: 'Permits for other activities after authorisation by the Commission (Article 9 of Regulation (EU) No 1143/2014)',
                      fields: [
                        {
                          label: "Year",
                          name: "year",
                          type: 'select',
                          selected: '',
                          options: years,
                        },
                        {
                          label: 'Number of establishments subjected to the inspections',
                          name: 'number_establishments_inspections_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                                  name: 'number_establishments_inspections',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'inspections_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                        {
                          label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                          name: 'number_permitted_specimens_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                                  name: 'number_permitted_specimens',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'number_permitted_specimens_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                        {
                          label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                          name: 'establishments_non_compliant_main',
                          type: 'add',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                                  name: 'establishments_non_compliant',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'establishments_non_compliant_measurement',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                        {
                          //label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                          name: 'number_speciments_held_by_non_compliant_establishments_main',
                          type: 'add',
                          selected: '',
                          fields: [
                            {
                              name: 'subfield',
                              fields:[
                                {
                                  label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                                  name: 'number_speciments_held_by_non_compliant_establishments',
                                  type: 'number',
                                  selected: '',
                                  required: 'required'
                                },
                                {
                                  label: 'Unit of measurement',
                                  name: 'measurement_noncompliant',
                                  type: 'select',
                                  selected: '',
                                  options: measurement_units,
                                },
                              ],
                            }
                          ],
                        },
                      ]
                    },
                  ],
                },
                additional_info: {
                  label: 'Additional information (optional)',
                  name: 'additional_info',
                  selected: '',
                  type: 'textarea',
                  index: 10,
                },
              },
            ]
          },
          table_2: {
            label: 'Information on rapid eradication measure(s) taken for this species (Article 17 of Regulation (EU) No 1143/2014)',
            name: 'eradication_measures_info',
            question: {
              label: 'Has the species been subject to rapid eradication measures during the reporting period?',
              type: 'select',
              name: 'eradicated',
              index: 11,
              options: [{ value: true, text: "Yes" }, { value: false, text: "No" }],
              selected: '',
            },
            tables: [
              {
                name: 'National Population #1',
                table_sections: [
                  {
                    label: '',
                    table_fields: {
                      header: '',
                      fields: [
                        {
                          label: 'Measure(s)',
                          fields: [{
                            label: 'Starting date',
                            name: 'starting_date',
                            type: 'date',
                            selected: '',
                            required: 'required',
                          },
                            {
                              label: 'End date',
                              name: 'duration_or_end',
                              type: 'date',
                              selected: '',
                              required: 'required',
                            },
                            {
                              label: 'Part of the territory',
                              name: 'part_territory',
                              //type: 'file',
                              type: 'select',
                              options: self.jsondata.regions,
                              selected: '',
                              comments:'',
                              addoption: true,
                              //required: true,
                            },
                            {
                              label: 'Biogeographical region(s)',
                              name: 'biogeographical_region',
                              type: 'multiselect',
                              selected: '',
                              options: [
                                {text: 'first option', value: 0},
                                {text: 'second option', value: 1},
                                {text: 'third option', value: 2},
                              ],
                              //required: true,
                            },
                            {
                              label: 'River basin sub-unit(s)',
                              name: 'river_basin_subunits',
                              type: 'select',
                              selected: '',
                              options: [
                                {text: 'first option', value: 0},
                                {text: 'second option', value: 1},
                                {text: 'third option', value: 2},
                              ],
                              //required: true,
                            },
                            {
                              label: 'Marine sub-region(s)',
                              name: 'marine_sub_regions',
                              type: 'select',
                              selected: '',
                              options: self.jsondata.subregions,
                              //required: true,
                            },
                            {
                              label: 'Method(s) used',
                              name: 'methods_used',
                              type: 'multiselect',
                              selected: '',
                              required: 'required',
                              options: [
                                { text: 'Mechanical/Physical', value: 0 },
                                { text: 'Chemical', value: 1 },
                                { text: 'Biological', value: 2 },
                                { text: 'Other', value: 3 },
                              ]
                            },
                          ]
                        },
                        {
                          label: 'Effectiveness of the measure(s)',
                          fields: [{
                            label: '',
                            name: 'effectiveness_measure',
                            type: 'select',
                            selected: '',
                            options: [
                              { text: 'Eradicated', value: 0 },
                              { text: 'Population decreasing', value: 1 },
                              { text: 'Population stable', value: 2 },
                              { text: 'Population still increasing ', value: 3 },
                              { text: 'Unclear population trend', value: 4 }
                            ]
                          }, ]
                        },
                        {
                          label: 'Impacted non-targeted species',
                          type: 'add',
                          description:'Provide the scientific name(s) of non-targeted species impacted negatively by the measure(s)',
                          fields: [
                            {
                              label: 'Impacted non-targeted species',
                              type: 'text',
                              selected: '',
                              validation:'false',
                              name: 'impacted_nontargeted_species',
                              inner_field: {
                                label: 'Impact per species',
                                type: 'text',
                                selected: '',
                                name: 'impact_per_species',
                                validation:'false',
                              }
                            },
                          ]
                        },
                      ]
                    },
                    additional_info: {
                      label: 'Additional information (optional)',
                      name: 'additional_info',
                      selected: '',
                      index: 13,
                      type: 'textarea'
                    },
                  }
                ],
              },
            ],
            //TODO: remove from prefill
            table_sections: [
              {
                label: '',
                table_fields: {
                  header: '',
                  fields: [{
                    label: 'Measure(s)',
                    fields: [{
                      label: 'Starting date',
                      name: 'starting_date',
                      type: 'date',
                      selected: '',
                      required: 'required',
                    },
                      {
                        label: 'End date',
                        name: 'duration_or_end',
                        type: 'date',
                        selected: '',
                        required: 'required',
                      },
                      {
                        label: 'Part of the territory',
                        name: 'part_territory',
                        //type: 'file',
                        type: 'select',
                        //type: 'add',
                        options: self.jsondata.regions,
                        selected: '',
                        comments:'',
                        addoption: true,
                        //required: true,
                      },
                      {
                        label: 'Biogeographical region(s)',
                        name: 'biogeographical_region',
                        type: 'multiselect',
                        selected: '',
                        options: [
                          {text: 'first option', value: 0},
                          {text: 'second option', value: 1},
                          {text: 'third option', value: 2},
                        ],
                        //required: true,
                      },
                      {
                        label: 'River basin sub-unit(s)',
                        name: 'river_basin_subunits',
                        type: 'select',
                        selected: '',
                        options: [
                          {text: 'first option', value: 0},
                          {text: 'second option', value: 1},
                          {text: 'third option', value: 2},
                        ],
                        //required: true,
                      },
                      {
                        label: 'Marine sub-region(s)',
                        name: 'marine_sub_regions',
                        type: 'select',
                        selected: '',
                        options: self.jsondata.subregions,
                        //required: true,
                      },
                      {
                        label: 'Method(s) used',
                        name: 'methods_used',
                        type: 'multiselect',
                        selected: '',
                        required: 'required',
                        options: [
                          { text: 'Mechanical/Physical', value: 0 },
                          { text: 'Chemical', value: 1 },
                          { text: 'Biological', value: 2 },
                          { text: 'Other', value: 3 },
                        ]
                      },
                    ]
                  },
                    {
                      label: 'Effectiveness of the measure(s)',
                      fields: [{
                        label: '',
                        name: 'effectiveness_measure',
                        type: 'select',
                        selected: '',
                        options: [
                          { text: 'Eradicated', value: 0 },
                          { text: 'Population decreasing', value: 1 },
                          { text: 'Population stable', value: 2 },
                          { text: 'Population still increasing ', value: 3 },
                          { text: 'Unclear population trend', value: 4 }
                        ]
                      }, ]
                    },
                    {
                      label: 'Impacted non-targeted species',
                      type: 'add',
                      description:'Provide the scientific name(s) of non-targeted species impacted negatively by the measure(s)',
                      fields: [{
                        label: 'Impacted non-targeted species',
                        type: 'text',
                        selected: '',
                        validation:'false',
                        name: 'impacted_nontargeted_species',
                        inner_field: {
                          label: 'Impact per species',
                          type: 'text',
                          selected: '',
                          name: 'impact_per_species',
                          validation:'false',
                        }
                      }, ]
                    },
                  ]
                },

                additional_info: {
                  label: 'Additional information (optional)',
                  name: 'additional_info',
                  selected: '',
                  index: 13,
                  type: 'textarea'
                },
              }]
          },
          table_3: {
            label: 'Information on management measure(s) taken for this species (Article 19 of Regulation (EU) No 1143/2014)',
            name: 'management_measures_info',
            question: {
              label: 'Has the species been subject to management measures during the reporting period?',
              type: 'select',
              index: 14,
              options: [{ value: true, text: "Yes" }, { value: false, text: "No" }],
            },
            tables: [
              {
                name: 'National Population #1',
                label:'National Population #1',
                table_sections: [{
                  label: '',
                  index: 15,
                  table_fields: {
                    header: '',
                    fields: [{
                      label: 'Measure(s)',
                      fields: [{
                        label: 'Starting date',
                        name: 'starting_date',
                        type: 'date',
                        selected: '',
                        required: 'required',
                      },
                        {
                          label: 'End date',
                          name: 'duration_or_end',
                          type: 'date',
                          selected: '',
                          required: 'required',
                        },
                        {
                          label: 'Objective of the measure(s) ',
                          name: 'measures_objective',
                          type: 'select',
                          selected: '',
                          options: [
                            { text: 'Eradication', value: 0 },
                            { text: 'Control', value: 1 },
                            { text: 'Containment', value: 2 },
                          ]
                        },
                        {
                          label: 'Part of the territory',
                          name: 'part_territory',
                          type: 'select',
                          options: self.jsondata.regions,
                          selected: '',
                          comments:'',
                          addoption: true,
                        },
                        {
                          label: 'Biogeographical region(s)',
                          name: 'biogeographical_region',
                          type: 'multiselect',
                          selected: '',
                          options: [
                            {text: 'first option', value: 0},
                            {text: 'second option', value: 1},
                            {text: 'third option', value: 2},
                          ]
                        },
                        {
                          label: 'River basin sub-unit(s)',
                          name: 'river_basin_subunits',
                          type: 'select',
                          selected: '',
                          options: [
                            {text: 'first option', value: 0},
                            {text: 'second option', value: 1},
                            {text: 'third option', value: 2},
                          ]
                        },
                        {
                          label: 'Marine sub-region(s)',
                          name: 'marine_basin_subunits',
                          type: 'select',
                          selected: '',
                          options: self.jsondata.subregions,
                        },
                        {
                          label: 'Method(s) used',
                          name: 'methods_used',
                          type: 'multiselect',
                          selected: '',
                          required: 'required',
                          options: [
                            { text: 'Mechanical/Physical', value: 0 },
                            { text: 'Chemical', value: 1 },
                            { text: 'Biological', value: 2 },
                            { text: 'Other', value: 3 },
                          ]
                        },
                      ]
                    },
                      {
                        label: 'Effectiveness of the measure(s)',
                        fields: [{
                          label: '',
                          name: 'effectiveness_measure',
                          type: 'select',
                          selected: '',
                          options: [
                            { text: 'Eradicated', value: 0 },
                            { text: 'Population decreasing', value: 1 },
                            { text: 'Population stable', value: 2 },
                            { text: 'Population still increasing ', value: 3 },
                            { text: 'Unclear population trend', value: 4 }
                          ]
                        }, ]
                      },
                      {
                        label: 'Impacted non-targeted species',
                        type: 'add',
                        description:'Provide the scientific name(s) of non-targeted species impacted negatively by the measure(s)',
                        fields: [{
                          label: 'Impacted non-targeted species',
                          type: 'text',
                          selected: '',
                          validation:'false',
                          name: 'impacted_nontargeted_species',
                          inner_field: {
                            label: 'Impact per species',
                            type: 'text',
                            selected: '',
                            name: 'impact_per_species',
                            validation:'false',
                          }
                        }, ]
                      },
                    ]
                  },
                  additional_info: {
                    label: 'Additional information (optional)',
                    name: 'additional_info',
                    selected: '',
                    index: 16,
                    type: 'textarea'
                  },
                }],
              },
            ],
            //TODO: remove from prefill
            table_sections: [{
              label: '',
              index: 15,
              table_fields: {
                header: '',
                fields: [{
                  label: 'Measure(s)',
                  fields: [{
                    label: 'Starting date',
                    name: 'starting_date',
                    type: 'date',
                    selected: '',
                    required: 'required',
                  },
                    {
                      label: 'End date',
                      name: 'duration_or_end',
                      type: 'date',
                      selected: '',
                      required: 'required',
                    },
                    {
                      label: 'Objective of the measure(s) ',
                      name: 'measures_objective',
                      type: 'select',
                      selected: '',
                      options: [
                        { text: 'Eradication', value: 0 },
                        { text: 'Control', value: 1 },
                        { text: 'Containment', value: 2 },
                      ]
                    },
                    {
                      label: 'Part of the territory',
                      name: 'part_territory',
                      type: 'select',
                      options: self.jsondata.regions,
                      selected: '',
                      comments:'',
                      addoption: true,
                    },
                    {
                      label: 'Biogeographical region(s)',
                      name: 'biogeographical_region',
                      type: 'multiselect',
                      selected: '',
                      options: [
                        {text: 'first option', value: 0},
                        {text: 'second option', value: 1},
                        {text: 'third option', value: 2},
                      ]
                    },
                    {
                      label: 'River basin sub-unit(s)',
                      name: 'river_basin_subunits',
                      type: 'select',
                      selected: '',
                      options: [
                        {text: 'first option', value: 0},
                        {text: 'second option', value: 1},
                        {text: 'third option', value: 2},
                      ]
                    },
                    {
                      label: 'Marine sub-region(s)',
                      name: 'marine_basin_subunits ',
                      type: 'select',
                      selected: '',
                      options: self.jsondata.subregions
                    },
                    {
                      label: 'Method(s) used',
                      name: 'methods_used',
                      type: 'multiselect',
                      selected: '',
                      required: 'required',
                      options: [
                        { text: 'Mechanical/Physical', value: 0 },
                        { text: 'Chemical', value: 1 },
                        { text: 'Biological', value: 2 },
                        { text: 'Other', value: 3 },
                      ]
                    },
                  ]
                },
                  {
                    label: 'Effectiveness of the measure(s)',
                    fields: [{
                      label: '',
                      name: 'effectiveness_measure',
                      type: 'select',
                      selected: '',
                      options: [
                        { text: 'Eradicated', value: 0 },
                        { text: 'Population decreasing', value: 1 },
                        { text: 'Population stable', value: 2 },
                        { text: 'Population still increasing ', value: 3 },
                        { text: 'Unclear population trend', value: 4 }
                      ]
                    }, ]
                  },
                  {
                    label: 'Impacted non-targeted species',
                    type: 'add',
                    description:'Provide the scientific name(s) of non-targeted species impacted negatively by the measure(s)',
                    fields: [{
                      label: 'Impacted non-targeted species',
                      type: 'text',
                      selected: '',
                      validation:'false',
                      name: 'impacted_nontargeted_species',
                      inner_field: {
                        label: 'Impact per species',
                        type: 'text',
                        selected: '',
                        name: 'impact_per_species',
                        validation:'false',
                      }
                    }, ]
                  },
                ]
              },
              additional_info: {
                label: 'Additional information (optional)',
                name: 'additional_info',
                selected: '',
                index: 16,
                type: 'textarea'
              },
            }, ]
          }
        }
      };

      const MAX = self.jsondata.species.length -1;
      let mark = 0;

      //TODO: WIP
      for(let i=0; i <= self.jsondata.species.length -1; i++){
        let current_section = JSON.parse(JSON.stringify(tab_1_section));
        let specie = self.jsondata.species[i][0];
        current_section.scientific_name.selected = specie.speciesNameLegi;
        current_section.common_name.selected = specie.speciesCNameEN;
        current_section.species_code.selected = specie.speciesCode;

        mark = i;
        if(i === MAX){
          break;
        }
        self.info.sections.push(current_section);

      }
      self.$forceUpdate();

      this.loading = false;
    },
    addCustomField(row){
      this.customField = row;
      this.$refs.customFieldModal.show();
    },

    saveCustomField(){
      let addField = JSON.parse(JSON.stringify(this.addCustom));

      this.customField.options.unshift(addField);
      this.customField.selected = addField;
      this.addCustom.text = null;
      this.addCustom.value = null;
      this.$refs.customFieldModal.hide();
    },

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
      const reg = /(sectiona_([0-9]*))_table_[0-9]_([0-9]*)_([0-9]*)\w+(part_territory|biogeographical_region|river_basin_subunits|marine_sub_regions)_[0-9]/;

      let temp = {};

      function processTable( table, tablenr, sectionK, tabletype ){
        let found = [];

        let finalResult = [];

        Array.from(table).map((element) => {
          let val = null;

          if(element.el.getAttribute("class") === "multiselect"){
            val = self.$refs[element.item][0].field.selected.length === 0 ? null : self.$refs[element.item][0].field.selected ;
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
              table: tablenr,
              tabletype: tabletype
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
          let population_key = res[3];

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
            let reg2 = /(sectiona_([0-9]*)_(table_[0-9]*)_([0-9]*)_([0-9]*))\w+/;

            let table_res = vscope.match(reg2);

            // TODO :
            if(table_res !== null){
              let table_type = table_res[3]; // table_2 or table_3
              let population = table_res[5];

              if('undefined' === typeof temp[section][table_type]){
                temp[section][table_type] = [];
              }
              if('undefined' === typeof temp[section][table_type][population]){
                temp[section][table_type][population] = new Set();
              }
              temp[section][table_type][population].add({item: item, el: el, scope: vscope, name: vname });
            }
          } else {
            //console.log(ref);
          }
        }

      });

      let result = {};

      Object.keys(temp).map((sectionName) => {
        if('undefined' === typeof result[sectionName]) result[sectionName] = [];

        Object.keys(temp[sectionName]).map((tabletype) => {

          Object.keys(temp[sectionName][tabletype]).map((tablenr) => {
            let table = temp[sectionName][tabletype][tablenr];
            let tableerrors = processTable(table, tablenr, sectionName, tabletype );

            tableerrors.map((err) => {
              result[sectionName].push(err);
            });
          });
        });
      });

      self.tableErrors = result;
    },

    validatePopulation(){
      let self = this;
      const reg = /(sectiona_([0-9]*))_(table_[0-9])_([0-9]*)_population/;

      let temp = {};

      Object.keys(self.$refs).map((item) => {
        let match = item.match(reg);
        if(match !== null){
          let name = match[0];
          let section = match[1];
          let seckey = match[2];
          let table_type = match[3];
          let population_key = match[4];

          if('undefined' === typeof temp[section]){
            temp[section] = [];
          }
          if('undefined' === typeof  temp[section][table_type] ){
            temp[section][table_type] = [];
          }

          let ref = self.$refs[item];
          temp[section][table_type].push({
            ref: ref[0],
            index: population_key,
            val: ref[0].value,
            count: 1
          });
        }
      });

      let result = [];

      Object.keys(temp).map((sectionName) => {
        Object.keys(temp[sectionName]).map((tabletype) => {
          let table = temp[sectionName][tabletype];

          let uniq = table.reduce(( a,b ) => {
            a[ b.val ] = (a[ b.val ] || 0) + b.count;
            if('undefined' === typeof a[ b.val + "_refs"] ){
              a[ b.val + "_refs"] = [];
            }
            a[ b.val + "_refs"].push({
              ref: b.ref,
            });
            return a;
          },{});
          //console.log(uniq);

          let res = [];
          Object.keys(uniq).filter((a) => uniq[a] > 1).map((dup) => {
            res.push( uniq[dup + "_refs"].map((d) => { return { ref: d.ref, errtype:"samepop" };}) );
          });
          res = res.reduce((a,b) => {
            a = a.concat(b);
            return a;
          }, []);
          /*console.log(res instanceof Array);
          console.log(res.length);*/

          if(res.length > 0) result = result.concat(res);
        });
      });


      self.popErrors = result;
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
      self.validatePopulation();

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
      let tablecopy = JSON.parse(JSON.stringify(tableSection.tables[tableSection.tables.length-1]));
      let newname = tablecopy.name.split("#");
      let nr = parseInt(newname[1], 10) + 1;

      tablecopy.name = "National Population #" + nr;

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

  .collapsed > .when-opened,
  :not(.collapsed) > .when-closed {
    display: none;
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
