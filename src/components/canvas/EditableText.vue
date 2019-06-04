<template>
	<div v-on="$listeners.click" @click="edit">
		<div class="pb-px" v-if="!active">{{ value }}</div>
		<div v-if="active">
			<input 
				ref="editable_input" 
				v-model="newValue" 
				class="text-base p-0" 
				type="text" 
				@blur="save" 
				maxlength="50">
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			value: String | Number
		},

		data() {
			return {
				active: false,
				newValue: ''
			}
		},

		methods: {
			edit() {
				this.active = true;
				this.$nextTick(() => this.$refs.editable_input.focus());
				this.newValue = this.value;
			},

			save() {
				this.$emit('input', this.newValue);

				this.active = false;
			}
		}
	}
</script>
<style scoped>
	input {
		@apply bg-transparent border-b outline-none;
	}
</style>