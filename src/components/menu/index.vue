<template>
    <div id="menu">
        <div class="menu-container">
            <!-- <h1>Input Fields Menu</h1> -->
        
            <el-row type="flex" :gutter="4">
                <el-col :span="4">
                    <!-- <draggable v-model="inputList" :options="{group: {name:'inputs', pull:'clone', put:'false'}}" > -->
                    <el-collapse v-model="step" @change="handleChange" accordion>
                        <el-collapse-item title="1 - Select a Field" name="1">
                            <h1>Basic Inputs</h1>
                            <div v-for="input in basicInputs" :key="input.id" @click="selectInput(input)">
                                <el-card class="cursor-pointer" body-style="padding: 5px;" shadow="hover">
                                    {{ input.name }}
                                </el-card>
                            </div>
                        <!-- <el-divider></el-divider> -->
                            <h1>Preset Inputs</h1>
                           <div v-for="input in presetInputs" :key="input.id" @click="selectInput(input)">
                                <el-card class="cursor-pointer" body-style="padding: 5px;" shadow="hover">
                                    {{ input.name }}
                                </el-card>
                            </div>
                        <!-- <el-divider></el-divider> -->
                        </el-collapse-item>
                        <el-collapse-item title="2 - Set Field Requirements" name="2">
                            <InputOptions :inputData="selectedInput" :outputData="setInputOptions"/>
                            <!-- <el-button type="success" @click="setInputOptions">Set</el-button> -->
                        </el-collapse-item>
                        <el-collapse-item title="3 - Add Field" name="3">
                            <el-button type="success" icon="el-icon-plus" @click="addInput">Add</el-button>
                        </el-collapse-item>
                    </el-collapse>

                        <!-- <div v-for="input in inputList" :key="input.id">
                            <el-card class="cursor-move" body-style="padding: 10px;" shadow="hover">{{ input.name }}</el-card>
                        </div> -->
                    <!-- </draggable> -->
                </el-col>
            </el-row>
        </div>
              
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import InputOptions from '@/components/menu/InputOptions.vue' 

export default {
    data: () => {
        return {
            step: '1',
            selectedInput: {id: '', name: '', component: ''},
            // selectedInput: '',
            basicInputs: [
                {id: 0, name: 'Text Box', component: 'TexBox'},
                {id: 1, name: 'Text Area', component: 'TexArea'},
                {id: 2, name: 'Numeric', component: 'NumericField'},
                {id: 3, name: 'Dropdown', component: 'DropdownField'},
                {id: 4, name: 'Radio', component: 'RadioField'},
                {id: 5, name: 'Checkbox', component: 'CheckboxField'},
                {id: 6, name: 'Date Field', component: 'DateField'},
                {id: 7, name: 'Matrix', component: 'MatrixField'},
            ],
            presetInputs: [
                {id: 8, name: 'Email', component: 'EmailField'},
                {id: 9, name: 'Address', component: 'AddressField'},
                {id: 10, name: 'Phone Number', component: 'PhoneField'},
            ],
            others: [
                {id: 11, name: 'Section Divider', icon: ''},
            ],
            options: {} //passed from InputOptions component
        }
    },
    props: {
        outputData: Object
    },
    components: {
        draggable,
        InputOptions
    },
    computed: {
        
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
        selectInput(input) {
            console.log(input.name);
            this.selectedInput = Object.assign({}, input);
            console.log(this.selectedInput.id);

            this.step = '2';
        },
        setInputOptions() {
            // this.options = value;
            this.step = '3';
        },
        addInput() {
            //submit
            this.$emit("inputData", this.input);
        }
    }
}
</script>

<style>
    #menu {
        font-size: 28px;
    }
    .menu-container .el-row .el-col .el-collapse {
        /* margin-left: 5px;
        padding-left: 5px; */
        max-width: 300px;
        min-width: 150px;
        padding-right: 5px;
    }
    .menu-container .el-row {
        margin-left: 5px;
        padding-left: 5px;
    }
    .el-card {
        margin: 5px;
    }
    .cursor-pointer {
        cursor: pointer;
    }
</style>
