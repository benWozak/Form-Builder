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
                        <span class="inputLabel">Department</span><br>
                        <el-select v-model="value" placeholder="Select">
                            <el-option v-for="department in departments" :key="department.value"
                            :label="department.label" :value="department.value">
                            </el-option>
                        </el-select>
                    </el-card>
                        
                    <el-divider></el-divider>
                </el-card>

            <el-card body-style="padding: 10px;" shadow="hover">
                <el-divider content-position="left"><span>{{ sectionHeader }}</span></el-divider>
                    <draggable class="dropArea" v-model="formList" :options='{group: "inputs"}'>
                        <div v-for="(inputType, index) in formList" :item="inputType" :key="index">
                            <el-row type="flex" :gutter="2">
                            <el-col class="float-left" :span="24">
                                <el-popover placement="top-end" width="250" trigger="hover" content="">
                                    <el-button type="info" icon="el-icon-edit" @click="editItem">EDIT</el-button>
                                    <el-button type="warning" icon="el-icon-delete" @click="removeItem">REMOVE</el-button>
                                            
                                    <el-card slot="reference" class="cursor-move" body-style="padding: 10px;" shadow="hover" >
                                        {{ input.name }}
                                        
                                        <!-- <slot :selectedInput="selectedInput"></slot> -->
                                        
                                        <div v-if="input.id === 0"> <!-- textbox -->
                                            <TextBox/>
                                        </div>
                                        <div v-else-if="input.id === 1"> <!-- textArea -->
                                            <TextArea/>
                                        </div>
                                        <div v-else-if="input.id === 2"> <!-- Numeric field -->
                                            <NumericField/>
                                        </div>
                                        <div v-else-if="input.id === 3"> <!-- Dropdown -->
                                            <DropdownField/>
                                        </div>
                                        <div v-else-if="input.id === 4"> <!-- Radio -->
                                            <RadioField/>
                                        </div>
                                        <div v-else-if="input.id === 5"> <!-- Checkbox -->
                                            <CheckboxField/>
                                        </div>
                                        <div v-else-if="input.id === 6"> <!-- Matrix Field -->
                                            <MatrixField/>
                                        </div>
                                        <div v-else-if="input.id === 7"> <!-- Date Field -->
                                            <DateField/>
                                        </div>
                                        <div v-else-if="input.id === 8"> <!-- Email -->
                                            <EmailField/>
                                        </div>
                                        <div v-else-if="input.id === 9"> <!-- Address -->
                                            <AddressField/>
                                        </div>
                                        <div v-else-if="input.id === 10"> <!-- Phone Number -->
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

        <!-- <el-row :gutter="10">
            <el-col class="float-left" :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col class="float-left" :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
        <el-row :gutter="10">
            <el-col class="float-left" :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col class="float-left" :span="8"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col class="float-left" :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        <el-row :gutter="10">
            <el-col class="float-left" :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col class="float-left" :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col class="float-left" :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col class="float-left" :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row> -->
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import SidePanel from '@/components/SidePanel.vue'
import ClickOutside from 'vue-click-outside'

import TextBox from '@/components/menu/TextBox.vue'
import TextArea from '@/components/menu/TextArea.vue'
import EmailField from '@/components/menu/EmailField.vue'
import AddressField from '@/components/menu/AddressField.vue'
import CheckboxField from '@/components/menu/CheckboxField.vue'
import DropdownField from '@/components/menu/DropdownField.vue'
import NumericField from '@/components/menu/NumericField.vue'
import PhoneField from '@/components/menu/PhoneField.vue'
import RadioField from '@/components/menu/RadioField.vue'
import DateField from '@/components/menu/DateField.vue'
import MatrixField from '@/components/menu/MatrixField.vue'

export default {
    data: () => {
        return {
            visible: false,
            clientName: '',
            dateCompleted: '',
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
            form: [],
            //section: []
        }
    },
    props: {
        // value: {}, //placeholder
        newInput: Function
    },
    components: {
        draggable,
        SidePanel,
        TextBox,
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
        formList: {
            get() {
                return this.form
            },
            set(value) {
                this.form = value
            }
        },
        sectionList: {
            get() {
                return this.formList.section
            },
            set(value) {
                this.formList.section = value
            }
        }
    },
    methods: {
        removeItem(index) {
            this.form.splice(index, 1);
        },
        editItem(index) {
            this.$message.error({
          dangerouslyUseHTMLString: true,
          message: '<span style="font-family: Inter UI, sans-serif"><strong>Sike! Edit is not set up yet</strong></span>'
        });
        }
    },
    watch: {
        newInput() {
            this.form.push(this.input.id)
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
