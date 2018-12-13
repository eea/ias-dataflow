<template>
  <div v-if="info">
    <div class="question-wrapper">
      <h2><center>{{info.question}}</center></h2>
      <br/>
      <!--<h2><i><center>{{info.table_label}}</center></i></h2>-->
      <div v-for="(tables,index) in info.tables" class="table table-striped answer">
        <h4><i><center>{{info.tables[index].description}}</center></i></h4>
        <br/>
        <div class="table-body" >
          <div class="container" style="max-width: 50%">
            <b-row v-for="(table,tkey) in tables.fields">

              <b-col class="first-col" > <!-- lg="6" -->
                <label style="cursor: pointer;" :for="table.name">
                  {{table.label}}
                </label>
              </b-col>

              <b-col > <!-- lg="6" -->
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
  </div>
</template>

<script>
export default {
  props: {
    info: null,
    tabId:null
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
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 1rem;
}

.first-col {
  text-align: right;
  font-weight: bold;
}
</style>
