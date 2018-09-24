<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>

        <div class="question">
            <p>{{info.data.question}}</p>
        </div>
        <div class="answer">
          <div class="table-head">
            
            <b>{{info.data.table_label}}</b>

          </div>

          <div role="tablist">
          <b-card v-for="(article,index) in info.data.articles" :key="article.article_title" class="mb-1">
            <h5 :id="titleSlugify(article.article_title)" style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
              <span class="text-muted" v-if="article.optional">Optional: </span>
              {{article.article_title}} <span style="float:right">▼</span>
            </h5>
            <b-collapse visible  class="mt-3"  :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
              <div class="form-section" v-for="(item_array,array_index) in article.article_items">
                <h6><b>{{item_array.description}}</b></h6>
                <div class="form-subsection" v-for="item in item_array.items">
                <div class="mt-2">{{item.label}} <small class="muted">({{item.info}})</small></div>
                <div class="form-fields">
                  <div v-if="item.type === 'difficulties' || item.type === 'special'">
                    <b-form-group>
                      <b-form-checkbox-group stacked :id="`checkbox_${tabId}_${index}_${array_index}_${item.type}`" :name="`checkbox_${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options">
                      </b-form-checkbox-group>
                      </b-form-group>
                  </div>
                  <div v-else>
                   <b-form-group>
                      <b-form-radio-group stacked :required="!article.optional" :id="`radio_${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options" :name="`radio_${tabId}_${index}_${array_index}_${item.type}`">
                      </b-form-radio-group>
                    </b-form-group>
                  </div>
                </div>

                
              <b-row>
                 <b-col lg="12" v-if="item.type === 'status' || item.type === 'difficulties'">
                   <textarea 
                      class="form-control"
                      v-model="item.comments"
                      placeholder="additional comments"></textarea>
                  </b-col>
                </b-row>


                <small style="font-style:italic; font-size: .6rem">
                  <p class="mb-0" v-for="option of item.options_description">
                    {{option}}
                  </p>
                </small>
              </div>
              </div>
            </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';

export default {


  props: {
    info: null,
    tabId:null
    
  },

  data () {
    return {

    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    }
  },
}
</script>

<style lang="css" scoped>

</style>