<template>
    <div id="canvas">
        <el-container>
            <el-header><h1>Canvas</h1></el-header>
            <el-main>
                <el-card class="cursor-move" body-style="padding: 10px;" shadow="hover" >
                    <el-divider content-position="left"><span>Required Content</span></el-divider>

                    <el-card body-style="padding: 10px;" shadow="hover">
                        <span class="inputLabel">Client Name</span>
                        <el-input class="inputField" placeholder="Name of client" v-model="clientName"></el-input>
                    </el-card>
                            
                    <el-card body-style="padding: 10px;" shadow="hover">
                        <!-- <div class="block"> -->
                            <span class="inputLabel">Date Completed</span><br>
                            <el-date-picker v-model="dateCompleted" type="date" placeholder="Pick a day" :picker-options="pickerOptions">
                            </el-date-picker>
                        <!-- </div> -->
                    </el-card>
                            
                    <el-card body-style="padding: 10px;" shadow="hover">
                        <span class="inputLabel">Team</span><br>
                        <el-select value="" placeholder="Select">
                            <el-option v-for="department in departments" :key="department.value"
                            :label="department.label" :value="department.value">
                            </el-option>
                        </el-select>
                    </el-card>
                        
                    <el-divider></el-divider>
                </el-card>

            <el-card body-style="padding: 10px;" shadow="hover">
                <el-divider content-position="left"><span>{{ sectionHeader }}</span></el-divider>
                    <draggable class="dropArea" v-model="fieldList">
                        <div v-for="(inputType, index) in fieldList" :key="index">
                            <el-row type="flex" :gutter="2">
                            <el-col class="float-left" :span="24">
                                <el-popover placement="top-end" width="250" trigger="hover" content="">
                                    <el-button type="info" icon="el-icon-edit" @click="editItem(index)">EDIT</el-button>
                                    <el-button type="warning" icon="el-icon-delete" @click="removeItem(index)">REMOVE</el-button>
                                            
                                    <el-card slot="reference" class="cursor-move" body-style="padding: 10px;" shadow="hover">
                                        <!-- {{ inputType.input.name }} -->
                                        
                                        <!-- <slot :selectedInput="selectedInput"></slot> -->
                                        
                                        <div v-if="inputType.input.id === 0"> <!-- textbox -->
                                            <TextField :options="fields[index].options"/>
                                        </div>
                                        <div v-else-if="inputType.input.id === 1"> <!-- textArea -->
                                            <TextArea/>
                                            <!-- <el-button v-show="visible" type="warning" icon="el-icon-delete" @click="removeItem">REMOVE</el-button> -->
                                        </div>
                                        <div v-else-if="inputType.input.id === 2"> <!-- Numeric field -->
                                            <NumericField/>
                                        </div>
                                        <div v-else-if="inputType.input.id === 3"> <!-- Dropdown -->
                                            <DropdownField/>
                                        </div>
                                        <div v-else-if="inputType.input.id === 4"> <!-- Radio -->
                                            <RadioField/>
                                        </div>
                                        <div v-else-if="inputType.input.id === 5"> <!-- Checkbox -->
                                            <CheckboxField/>
                                        </div>
                                        <div v-else-if="inputType.input.id === 6"> <!-- Matrix Field -->
                                            <DateField/>
                                        </div>
                                        <div v-else-if="inputType.input.id === 7"> <!-- Date Field -->
                                            <MatrixField/>
                                        </div>
                                        <div v-else-if="inputType.input.id === 8"> <!-- Email -->
                                            <EmailField/>
                                        </div>
                                        <div v-else-if="inputType.input.id === 9"> <!-- Address -->
                                            <AddressField/>
                                        </div>
                                        <div v-else-if="inputType.input.id === 10"> <!-- Phone Number -->
                                            <PhoneField/>
                                        </div>
                                        <!-- <div v-if="form.length == 0">
                                            <p>New fields will be placed here</p>
                                        </div> -->

                            <!-- Do something else with this: section Divider -->
                                        <!-- <div v-else-if="input.id === 11"> 
                                            <el-divider content-position="left"><span>{{ sectionHeader }}</span></el-divider>
                                                <draggable class="dropArea" v-model="sectionList" :options='{group: "inputs"}'>
                                                    <div v-for="input in sectionList" :key="input.id">
                                                    </div>
                                                </draggable>
                                            <el-divider></el-divider>
                                        </div> -->
                                    </el-card>
                                </el-popover>
                            </el-col>
                        </el-row>
                    </div>
                </draggable>
                <el-divider></el-divider>
            </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import SidePanel from '@/components/SidePanel.vue'
import ClickOutside from 'vue-click-outside'

import TextField from '@/components/canvas/fields/TextField.vue'
import TextArea from '@/components/canvas/fields/TextArea.vue'
import EmailField from '@/components/canvas/fields/EmailField.vue'
import AddressField from '@/components/canvas/fields/AddressField.vue'
import CheckboxField from '@/components/canvas/fields/CheckboxField.vue'
import DropdownField from '@/components/canvas/fields/DropdownField.vue'
import NumericField from '@/components/canvas/fields/NumericField.vue'
import PhoneField from '@/components/canvas/fields/PhoneField.vue'
import RadioField from '@/components/canvas/fields/RadioField.vue'
import DateField from '@/components/canvas/fields/DateField.vue'
import MatrixField from '@/components/canvas/fields/MatrixField.vue'

export default {
    data: () => {
        return {
            visible: false,
            clientName: '',
            dateCompleted: '',
            fieldList: [],
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: 'Today',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: 'Yesterday',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: 'A week ago',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }],
            },
            departments: [
                { value: 'Counselling', label: 'Counselling'},
                { value: 'Community Programs', label: 'Community Programs'}
            ],
            sectionHeader: 'New Section',
            input: {},
            inputType: {},
            inputOptions: {},
            form: [],
            //section: []
        }
    },
    props: {
        newInput: Function,
        fields: {
            type: Array,
            default: []
        },
        options: Function
    },
    components: {
        draggable,
        SidePanel,
        TextField,
        TextArea,
        EmailField,
        NumericField,
        AddressField,
        CheckboxField,
        DropdownField,
        PhoneField,
        RadioField,
        DateField,
        MatrixField,
    },
    computed: {
        // formList: {
        //     get() {
        //         return this.form
        //     },
        //     set(value) {
        //         this.form = value
        //     }
        // },
        // sectionList: {
        //     get() {
        //         return this.formList.section
        //     },
        //     set(value) {
        //         this.formList.section = value
        //     }
        // }
    },
    methods: {
        removeItem(index) {
            alert(index);

            this.fields.splice(index, 1);
        },
        editItem(index) {
            this.$message.error({
            dangerouslyUseHTMLString: true,
            message: '<span style="font-family: Inter UI, sans-serif"><strong>Sike! Edit is not set up yet</strong></span>'
            });
        }
    },
    watch: {
        mouseOver: function(){
            this.visible = !this.visible;   
        },
        newInput() {
            this.form.push(this.input.id)
        },
        fields: function() {
            this.fieldList = _.clone(this.fields);
        }
    }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#canvas {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
/* .dropArea {
    width: 100%;
    border: 1px solid black;
} */
.el-row {
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
  }
  .el-col {
    border-radius: 4px;
    min-width: 300px;
    margin-top: 15px;
  }
  .el-input {
      font-size: 18px;
  }
  .el-divider span {
      font-size: 18px;
  }


  /* .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 50px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } */
</style>
