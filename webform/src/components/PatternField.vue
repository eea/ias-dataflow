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
            <b-form-select :options="field.options" v-model="field.selected.pattern">
            </b-form-select>
          </b-input-group>
        </td>
        <td>
          <b-input-group>
            <b-form-select :options="field.regionOptions" v-model="field.selected.region">
            </b-form-select>
          </b-input-group>
        </td>
        <!-- @click="removeAgreement(index, info.data.question.agreements)" -->
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
    props: ['patternfields'],
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

  .addnew {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
