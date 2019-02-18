<template>
	 <div v-if="data" class="question-wrapper">
				<h4><center>Information on the reporting party</center></h4>
				<br>
				<h4 class="text-center"><i>{{data.description}}</i></h4>

				<div class="table-body">
					<div style="width: 50%" class="container">
      		<b-row class="mb-2" v-for="(field,index) in data.form_fields" :key="index">
						<b-col style="text-align: right">
							<label>{{field.label}}</label>
						</b-col>
						<b-col>
							<input class="form-control" v-model="field.selected" :disabled="field.disabled">							
						</b-col>
      		</b-row>
				</div>
			</div>
    </div>
</template>

<script>
export default {
	props: {
		data: null,
	}
}
</script>

<style lang="scss" scoped>
	.table-body {
		display: block;
		background: #fafafa;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.125);
		padding: 1rem;
	}
	label {
		font-weight: bold;
	}
</style>
