<template>
  <div>
    <table class="table table-striped">
      <thead class="bg-primary">
      <th>Pathways</th>
      <th>Species</th>
      <th>Actions</th>
      </thead>
      <tbody>
      <tr v-for="(field,fieldkey) in fields.fields">
        {{ field }}
        <!--<td v-if='patternfields[0].patternType !== "spread"'>
          <b-input-group>
            <b-input-group-prepend v-if="errors.has(scope + '_pattern_' + fieldkey,scope)">
              <b-badge class="error-badge"  variant="danger"
                       :title="errors.collect(scope + '_pattern_' + fieldkey, scope).join('\n')"
                       v-b-tooltip.hover
              >{{ errors.first(scope + '_pattern_' + fieldkey, scope) }}</b-badge>
            </b-input-group-prepend>

            <b-form-select :options="field.options" v-model="field.selected.pattern" v-validate="'required'"
                           data-vv-as="pattern"  v-bind:key="scope + '_pattern_' + fieldkey"
                           v-bind:data-vv-scope="scope"
                           v-bind:name="scope + '_pattern_' + fieldkey"
                           :ref="scope + '_pattern_' + fieldkey"
                           @change="validate"
            ></b-form-select>

          </b-input-group>
        </td>

        <td v-if='patternfields[0].patternType === "spread"'>
          <b-col>
            <b-input-group>
              <b-input-group-prepend v-if="errors.has(scope + '_pattern_' + fieldkey, scope)">
                <b-badge class="error-badge"  variant="danger"
                         :title="errors.collect(scope + '_pattern_' + fieldkey, scope).join('\n')"
                         v-b-tooltip.hover
                >{{ errors.first(scope + '_pattern_' + fieldkey, scope) }}</b-badge>
              </b-input-group-prepend>

              <multiselect :options="field.options"
                           v-model="field.selected.pattern"
                           v-validate="'required'"
                           data-vv-as="pattern"
                           v-bind:key="scope + '_pattern_' + fieldkey"
                           v-bind:data-vv-scope="scope"
                           v-bind:name="scope + '_pattern_' + fieldkey"
                           :ref="scope + '_pattern_' + fieldkey"
                           :close-on-select="false"
                           :clear-on-select="false"
                           :hide-selected="true"
                           :preserve-search="true"
                           track-by="value"
                           :multiple=true
                           @select="validate"
                           @input="validate"
                           :class="'spreadmulti'"
                           :allow-empty="true"
                           :selectLabel = "''"
                           :custom-label="customLabel"
              ></multiselect>
            </b-input-group>
          </b-col>
        </td>-->
        <!--<td v-if='patternfields[0].patternType === "spread"'><b-btn variant="danger" @click="removeRow(fieldkey)">X</b-btn></td>-->
      </tr>
      </tbody>
    </table>
    <!--<b-btn variant="primary" @click="addPathway(field)" style="margin-bottom: 1rem;">Add</b-btn>

            <b-row v-for="(addField,fkey) in field.fields" style="margin-bottom: 5px;">
              <b-col md=12>

                <b-input-group :prepend="addField.inner_field.label">
                    <multiselect v-model="speciesModels[fkey]" :options="speciesOptions"
                      style="width: 70%;border-top-left-radius: 0;border-bottom-left-radius: 0;"
                      :multiple="false" :close-on-select="true" :clear-on-select="true" :preserve-search="true" track-by="text"
                      :custom-label="customLabel" @input="changeSpecie($event, field, fkey)"
                    >
                      &lt;!&ndash;<template slot="selection" slot-scope="{ values, search, isOpen }">
                        <span class="multiselect__single" v-if="values.length && !isOpen">{{ values.length }} options selected</span>
                      </template>&ndash;&gt;
                    </multiselect>
                    <b-input-group-append>
                      <b-btn variant="danger" @click="removePathway(field,addField, fkey)">Remove</b-btn>
                    </b-input-group-append>
                </b-input-group>
                <b class="mt-3">{{addField.label}} :  {{addField.selected ? addField.selected : '-'}}</b>
                <hr>
              </b-col>


            </b-row>-->
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    name: "Patways",
    props: ['fields'],
    data(){
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
