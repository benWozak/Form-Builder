<template>
    <div id="textbox">
        <el-collapse>
            <span class="inputLabel">{{ options.setLabel }}</span><br>
            <el-collapse-item name="1">
                <template slot="title">
                    <el-input type="text" v-model="customField"></el-input>
                </template>

                    <div><br>
                        <el-form label-position="top" ref="options" :model="options" :rules="rules" @submit.native.prevent>
                        <el-form-item label="Field Label">
                            <el-input v-model="options.setLabel"></el-input>
                        </el-form-item>
                        <el-form-item label="This field is:" prop="customField">
                            <el-switch v-model="options.isRequired" active-text="Required" inactive-text="Optional" 
                                @click="isRequired = !isRequired"></el-switch>
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
                        
                        
                            <!-- <el-button type="info" icon="el-icon-edit" @click="editItem">EDIT</el-button>
                            <el-button type="warning" icon="el-icon-delete" @click="removeItem">REMOVE</el-button> -->
                        </el-form>
                    </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customField: '',
            setLength: 50,
            options: {
                setLabel: 'Text Field',
                isRequired: false,
                reference: '',
                charCount: 50,
                dropdownItems: {
                        domains: [{
                        key:1,
                        value:''
                    }]
                }
            }
        }
    },
    computed: {
      rules() {
        return { 
          customField: [
            {required: this.isRequired, message: 'Please make an entry', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
        // removeItem(index) {
        //     this.fields.splice(index, 1);
        // },
        // editItem(index) {
        //     this.$message.error({
        //     dangerouslyUseHTMLString: true,
        //     message: '<span style="font-family: Inter UI, sans-serif"><strong>Sike! Edit is not set up yet</strong></span>'
        //     });
        // }
    },
}
</script>

<style>

</style>
