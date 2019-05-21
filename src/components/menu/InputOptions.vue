<template>
 <div id="inputOptions">
  
  <div>
   <!--------TextBox---------->
   <div v-if="inputData.id === 0">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>
      <el-form-item label="Field Refers To:">
        <el-select v-model="options.reference">
         <el-option label="Itself" value="itself"></el-option>
          <el-option label="A field within this form" value="internalField"></el-option>
          <el-option label="Volunteer" value="volunteer"></el-option>
          <el-option label="Client" value="client"></el-option>
          <el-option label="Staff" value="staff"></el-option>
        </el-select>
        <div v-if="options.reference === 'internalField'">
         <p>Do some stuff</p>
        </div>
        <div v-if="options.reference === 'volunteer'">
         <p>Do some other stuff</p>
        </div>
        <div v-if="options.reference === 'client'">
         <p>Do something else</p>
        </div>
        <div v-if="options.reference === 'staff'">
         <p>What are our references really?</p>
        </div>
      </el-form-item>
      
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>

   <!-------- TextArea ---------->
   <div v-if="inputData.id === 1">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>
      <el-form-item label="Set Character Limit">
       <el-input-number v-model="options.charCount" :step="5" step-strictly></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>

   <!-------- Numeric ---------->
   <div v-if="inputData.id === 2">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>

   <!-------- Dropdown ---------->
   <div v-if="inputData.id === 3">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>

    <el-form-item v-for="(domain, index) in options.dropdownItems.domains" :label="'Option ' + index" :key="domain.key" :prop="'domains.' + index + '.value'"
      :rules="{ required: true, message: 'Field can not be null', trigger: 'blur' }">
      <el-input v-model="domain.value" placeholder="Option Title"></el-input>
    
    <el-button @click.prevent="removeDomain(domain)">Remove</el-button>
    <el-button @click="addDomain">New Option</el-button>
  </el-form-item>
  <el-form-item>
    <!-- <el-button type="primary" @click="submitForm('dropdownItems')">Submit</el-button> --> 
  </el-form-item>

      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>

   <div v-if="inputData.id === 4">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>

   <div v-if="inputData.id === 5">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>

   <div v-if="inputData.id === 6">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>
  
  <div v-if="inputData.id === 7">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>

   <div v-if="inputData.id === 8">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>

   <div v-if="inputData.id === 9">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>

   <div v-if="inputData.id === 10">
    <h1>{{ inputData.name }} Field Options</h1>
     <el-form :label-position="top" ref="options" :model="options">
      <el-form-item label="Field Label">
        <el-input v-model="options.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="options.required"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitOptions">Set</el-button>
      </el-form-item>
    </el-form>
   </div>
  </div>

 </div>
</template>

<script>
export default {
 name: 'inputOptions',
 data: () => {
  return {
   options: {
     title: '',
     required: false,
     reference: '',
     charCount: 50,
     dropdownItems: {
      domains: [{
       key:1,
       value:''
      }]
    }
   },
   step: '3'
  }
 },
 props: {
   inputData: Object,
   // outputData: Object
 },
 methods: {
  removeDomain(item) {
    var index = this.options.dropdownItems.domains.indexOf(item);
    if (index !== -1) {
      this.options.dropdownItems.domains.splice(index, 1);
    }
  },
  addDomain() {
    this.options.dropdownItems.domains.push({
      key: Date.now(),
      value: ''
    });
  },
  submitOptions() {
   this.options = this.outputData;
    this.$emit('submitOptions', this.outputData)
    this.$emit('sumbitOptions', this.step)
  }
 }
}
</script>

<style>

</style>
