<template>
  <div class="table-wrapper">
    <table class="table table-striped">
      <thead class="bg-primary">
      <th><span v-html="patternfields[0].label"></span></th>
      <th>Biogeographical region</th>
      <th><span>Actions</span></th>
      </thead>
      <tbody>
      <tr v-for="(field,fieldkey) in patternfields">
        <td>
          <b-input-group>
            <b-input-group-prepend v-if="errors.has(scope + '_pattern_' + fieldkey,scope)">
              <b-badge class="error-badge"  variant="danger"
              >{{ errors.first(scope + '_pattern_' + fieldkey, scope) }}</b-badge>
            </b-input-group-prepend>
            <b-form-select :options="field.options" v-model="field.selected.pattern"
               v-validate="'required'" data-vv-as="pattern"  v-bind:key="scope + '_pattern_' + fieldkey"
               v-bind:data-vv-scope="scope"
               v-bind:name="scope + '_pattern_' + fieldkey"
            ></b-form-select>
          </b-input-group>
        </td>
        <td>
          <b-input-group>
            <b-input-group-prepend v-if="errors.has(scope + '_region_' + fieldkey,scope)">
              <b-badge class="error-badge"  variant="danger"
              >{{ errors.first(scope + '_region_' + fieldkey, scope) }}</b-badge>
            </b-input-group-prepend>
            <b-form-select :options="field.regionOptions" v-model="field.selected.region"
              v-validate="'required'" data-vv-as="region" v-bind:name="scope + '_region_' + fieldkey"
              v-bind:key="scope + '_region_' + fieldkey"
              v-bind:data-vv-scope="scope"
            ></b-form-select>
          </b-input-group>
        </td>
        <td><b-btn variant="danger" @click="removeRow(fieldkey)">X</b-btn></td>
      </tr>
      </tbody>
    </table>
    <b-btn variant="default" class="addnew" @click="addNewRow">
      + Add another pattern
    </b-btn>
  </div>
</template>

<script>
  export default {
    name: 'PatternField',
    props: ['patternfields','scope'],
    data(){
      return {
      }
    },
    methods: {
      addNewRow(){
        this.$emit('add-new-pattern', this.patternfields);
      },
      removeRow(fieldkey){
        this.$emit('remove-pattern', this.patternfields, fieldkey);
      }
    }
  }
</script>

<style scoped>
  .table-wrapper {
    margin-bottom: 2rem;
    overflow: auto;
    border-radius: 0.25rem;
  }

  .table {
    margin-bottom: 0;
    border-spacing: 0;
    border-style: hidden;
    width:100%;
    max-width: 100%;
  }

  thead {
    color: white
  }

  .error-badge {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 2rem;
  }

  .addnew {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
