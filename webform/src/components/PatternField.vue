<template>
  <div style="margin-bottom: 2rem;">
    <table class="table table-striped" style="margin-bottom: 0;">
      <thead class="bg-primary" style="color: white">
      <th><span v-html="patternfields[0].label"></span></th>
      <th>Region</th>
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
    <b-btn
      style="width: 100%;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;"
      variant="default"
      @click="addNewRow">
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
