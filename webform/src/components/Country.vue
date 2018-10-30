<template>
  <div v-if="info">
      <div class="question-wrapper">
        <h3>INFORMATION ON THE REPORTING PARTY</h3>
        <div class="question">

        </div>
        <div v-for="(tables,index) in info.tables" class="table table-striped answer">
          <div class="table-head">
            <div v-if="index === 'table_1'">
              <p>
                Please provide information on the reporting Party by completing the following table.
              </p>
            </div>
          </div>
          <div style="padding: 1rem" class="table-body">
            <b-row style="margin-bottom:5px" v-for="table in tables.fields">
              <b-col style="text-align: right; font-weight: bold;" lg="6">
                <label style="cursor: pointer;" :for="table.name">
                  {{table.label}}
                </label>
              </b-col>
              <b-col lg="6">
                <div v-if="table.name ==='partyname'">
                  <b-input required :id="table.name" :type="table.type" v-model="table.selected"></b-input>
                </div>
                <div v-else>
                  <b-input required :disabled="table.disabled" :id="table.name" :type="table.type" v-model="table.selected"></b-input>
                </div>
              </b-col>
            </b-row>

          </div>

        </div>
      </div>


  </div>
</template>

<script>
export default {

  props: {
    info: null,
    tabId:null
  },
  $_veeValidate: {
    validator: 'new' // give me my own validator scope.
  },


  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.table-body {
  display: block;
    background: #fafafa;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
