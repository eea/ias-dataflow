<template>
	<div v-if="species">
		<div class="table-wrapper">
			<table class="table table-striped table-fixed">
				<thead>
					<tr>
						<th v-if="index != 'validation'" v-for="(header, index) in species.permitsIssuedReported.fields[0]" :key="`${index}_${header.name}`">
							{{header.label}}
						</th>
						<th style="width: 80px;">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(row, row_index) in species.permitsIssuedReported.fields" :key="row_index">
						<td v-for="(cell, cell_index) in row" v-if="!['permitedSpecimensIssued', 'permitedSpecimensValid', 'validation'].includes(cell_index)" :key="cell_index">
							<b-badge variant="danger" v-if="['number_issued', 'number_valid'].includes(cell_index) && row.validation" v-b-tooltip :title="row.validation">{{row.validation}}</b-badge>
							<fieldGenerator :field="cell"></fieldGenerator>
						</td>
						<td v-for="(cell, cell_index) in ['permitedSpecimensIssued', 'permitedSpecimensValid']" :key="cell">
							<div v-for="(sub_row, sub_row_index) in row[cell].fields" :key="sub_row_index">
								<div v-for="(field, field_index) in sub_row" :key="field_index">	
									<b-badge variant="danger" v-b-tooltip :title="field.validation" v-if="field.validation">{{field.validation}}</b-badge>			
									<multiselect
										label="text"
										v-if="field.type === 'select'"
										trackBy="value"
										@input="forceValueInSameRow($event, row, sub_row_index, cell, 'permitsIssuedReported')"
										v-model="field.selected"
										:options="field.options" />
									<input v-else class="form-control" v-model="field.selected" :type="field.type">
								</div>
								<b-btn v-if="row[cell].fields.length > 1" @click="$store.commit('RemovePermittedSpecimen',  {section_type: 'permitsIssuedReported', species_index, row_index, type: cell, field_index: sub_row_index})" variant="danger">X</b-btn>
							</div>
							<b-btn @click="$store.commit('AddPermittedSpecimen', {section_type: 'permitsIssuedReported', species_index, row_index, type: cell})" variant="primary">+</b-btn>
						</td>
						<td><b-btn v-if="species.permitsIssuedReported.fields.length > 1" @click="$store.commit('RemovePermitsRow', {section_type: 'permitsIssuedReported', species_index, row_index})" variant="danger">X</b-btn></td>
					</tr>
				</tbody>
			</table>
			<b-btn class="btn-big" @click="$store.commit('AddPermitsRow', {section_type: 'permitsIssuedReported', species_index})" variant="primary">+</b-btn>
		</div>
			<fieldGenerator :field="species.additional_information_permits"></fieldGenerator>

			<div class="table-section">
				Information on inspections to be completed only for invasive alien species of Union concern and if the answer to question 6 above is ‘Yes’
				<div class="table-wrapper">
					<table class="table table-striped table-fixed">
						<thead>
							<tr>
								<th v-if="index != 'validation'" v-for="(header, index) in species.inspectionsPermitsReported.fields[0]" :key="`${index}_${header.name}`">
									{{header.label}}
								</th>
								<th style="width: 80px;">Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(row, row_index) in species.inspectionsPermitsReported.fields" :key="row_index">
								<td v-for="(cell, cell_index) in row" v-if="!['inspectionsPermitsComplient', 'inspectionsPermitsNoncompliant', 'validation'].includes(cell_index)" :key="cell_index">
									<fieldGenerator :field="cell"></fieldGenerator>
								</td>
								<td v-for="(cell, cell_index) in ['inspectionsPermitsComplient', 'inspectionsPermitsNoncompliant']" :key="cell_index">
									<div v-for="(sub_row, sub_row_index) in row[cell].fields" :key="sub_row_index">
										<div v-for="(field, field_index) in sub_row" :key="field_index">	
											<b-badge variant="danger" v-b-tooltip :title="field.validation" v-if="field.validation">{{field.validation}}</b-badge>
											<b-badge variant="danger" 
											v-if="field_index === 'value' && row.validation.length && row.validation.find(message=> message.index ===sub_row_index)"
											v-b-tooltip :title="row.validation.find(message=> message.index ===sub_row_index).error"
											>
												{{row.validation.find(message=> message.index ===sub_row_index).error}}
												</b-badge> 		
											<multiselect
												label="text"
												v-if="field.type === 'select'"
												trackBy="value"
                        :disabled="field.disabled"
												@input="forceValueInSameRow($event, row, sub_row_index, cell, 'inspectionsPermitsReported')"
												v-model="field.selected"
												:options="field.options" />
											<input v-else class="form-control" :disabled="field.disabled"  v-model="field.selected" :type="field.type">
										</div>
										<b-btn  :disabled="noInspections" v-if="row[cell].fields.length > 1" @click="$store.commit('RemovePermittedSpecimen', {section_type: 'inspectionsPermitsReported', species_index, row_index, type: cell, field_index: sub_row_index,})" variant="danger">X</b-btn>
									</div>
									<b-btn :disabled="noInspections" @click="$store.commit('AddPermittedSpecimen', {section_type: 'inspectionsPermitsReported', species_index, row_index, type: cell})" variant="primary">+</b-btn>
								</td>
								<td><b-btn :disabled="noInspections" v-if="species.inspectionsPermitsReported.fields.length > 1" @click="$store.commit('RemovePermitsRow', {section_type: 'inspectionsPermitsReported', species_index, row_index})" variant="danger">X</b-btn></td>
							</tr>
						</tbody>
					</table>
					<b-btn :disabled="noInspections" class="btn-big" @click="$store.commit('AddPermitsRow', {section_type: 'inspectionsPermitsReported', species_index})" variant="primary">+</b-btn>
				</div>	

			</div>
			<label class="mb-2 mt-2" style="display: flex;">	
        <b-form-checkbox @input="disableTable($event, species.inspectionsPermitsReported)" :disabled="species.inspectionsPermitsReported.no_inspections_reported.disabled" v-model="species.inspectionsPermitsReported.no_inspections_reported.selected"></b-form-checkbox>
        {{species.inspectionsPermitsReported.no_inspections_reported.label}}
      </label>
			<fieldGenerator :field="species.additional_information_inspections"></fieldGenerator>
	</div>
</template>
<script>
import FieldGenerator from '@/components/FieldGenerator'
import Multiselect from '@/components/ModifiedMultiselect'
export default {
	props: {
		species: null,
		species_index: null,
	},
	components: {
		FieldGenerator,
		Multiselect
	},
  created(){
    this.noInspections = this.species.inspectionsPermitsReported.no_inspections_reported.selected
    this.disableTable(this.noInspections, this.species.inspectionsPermitsReported)
  },
  data() {
    return {
      noInspections: false
    }
  },
	methods: {
		forceValueInSameRow(e, row, field_index, section, section_type) {
			let	otherSection = {
					permitedSpecimensIssued : 'permitedSpecimensValid',
					permitedSpecimensValid : 'permitedSpecimensIssued'
			}
			if(section_type === 'inspectionsPermitsReported'){
				 otherSection = {
					inspectionsPermitsComplient : 'inspectionsPermitsNoncompliant',
					inspectionsPermitsNoncompliant : 'inspectionsPermitsComplient'
				}
			}
			if(row[otherSection[section]].fields[field_index])
			row[otherSection[section]].fields[field_index].unit.selected = e
		},
    disableTable(event, section){
      this.noInspections = event
      if(event === true) {
        section.fields.forEach(field => {
          Object.keys(field).forEach(key => {
            if(!field[key] || key === 'validation') return
            field[key].disabled = true
            if(field[key].hasOwnProperty('fields')){
              field[key].fields.forEach(innerField => {
                console.log(innerField)
                Object.keys(innerField).forEach(innerKey => {
                  console.log(innerField[innerKey])
                  innerField[innerKey].disabled = true
                })
              })
            }
          })
        })
      } else {
        section.fields.forEach(field => {
          Object.keys(field).forEach(key => {
            if(!field[key] || key === 'validation') return
            field[key].disabled = false
              if(field[key].hasOwnProperty('fields')){
                field[key].fields.forEach(innerField => {
                  Object.keys(innerField).forEach(innerKey => {
                    innerField[innerKey].disabled = false
                  })
                })
            }
          })
        })
      }
    }
	},
}
</script>
