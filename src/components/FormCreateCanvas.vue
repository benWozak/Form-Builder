<template>
    <div id="canvas">
        <el-container>
            <el-header><h1>Canvas</h1></el-header>
            <el-main>
                <el-card class="cursor-move" body-style="padding: 10px;" shadow="hover" >
                    <el-divider content-position="left"><span>Required Content</span></el-divider>
                    <el-card body-style="padding: 10px;" shadow="hover">
                        <span class="inputLabel">Client Name</span>
                        <el-input class="inputField" placeholder="Name of client" v-model="input"></el-input>
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

                <draggable class="dropArea" v-model="formList" :options='{group: "inputs"}'>
                    <div v-for="input in formList" :key="input.id">
                        <el-row type="flex" :gutter="2">
                            <el-col class="float-left" :span="24">
                                <el-popover placement="top-end" width="250" trigger="hover" content="">
                                    <el-button type="info" icon="el-icon-edit" @click="editItem">EDIT</el-button>
                                    <el-button type="warning" icon="el-icon-delete" @click="removeItem">REMOVE</el-button>
                                    
                                    <el-card slot="reference" class="cursor-move" body-style="padding: 10px;" shadow="hover" >
                                        {{ input.name }}
                                        
                                        <div v-if="input.id === 0"> <!-- textbox -->
                                            <span class="inputLabel"></span><br>
                                            <el-input type="text" placeholder="Textbox" v-model="customfield"></el-input>
                                        </div>
                                        <div v-else-if="input.id === 1"> <!-- textArea -->
                                            <span class="inputLabel"></span><br>
                                            <el-input type="textarea" :rows="2" placeholder="Your text here" v-model="customArea"></el-input>
                                        </div>
                                        <div v-else-if="input.id === 2"> <!-- email -->
                                            <span class="inputLabel"></span><br>
                                            <el-input type="email" placeholder="example@email.com" v-model="emailfield"></el-input>
                                        </div>
                                        <div v-else-if="input.id === 3"> <!-- address -->
                                            <span class="inputLabel"></span><br>
                                            <el-input type="text" placeholder="123 address" v-model="addressfields"></el-input>
                                        </div>
                                        <div v-else-if="input.id === 4"> <!-- phone number -->
                                            <span class="inputLabel"></span><br>
                                            <el-input type="number" placeholder="123 456 7890" v-model="phonefield"></el-input>
                                        </div>
                                        <div v-else-if="input.id === 5"> <!-- numeric -->
                                            <span class="inputLabel"></span><br>
                                            <el-input-number placeholder="" v-model="numfield"></el-input-number>
                                        </div>
                                        <div v-else-if="input.id === 6"> <!-- dropdown -->
                                            <span class="inputLabel"></span><br>
                                            <el-select placeholder="select" v-model="dropdown"></el-select>
                                        </div>
                                        <div v-else-if="input.id === 7"> <!-- radio -->
                                            <span class="inputLabel"></span><br>
                                            <el-radio-group v-for="radio in radios" :key="radio.text">
                                                <el-radio v-model="radio.text" label="1">{{ radio.text }}</el-radio>
                                                <el-radio v-model="radio.text" label="1">{{ radio.text }}</el-radio>
                                            </el-radio-group>
                                            <el-button type="primary" icon="el-icon-plus">add</el-button>
                                        </div>
                                        <div v-else-if="input.id === 8"> <!-- checkbox list -->
                                            <span class="inputLabel"></span><br>
                                            <el-checkbox-group v-model="checkList">
                                                <el-checkbox label="1">{{ option }}</el-checkbox>
                                                <el-checkbox label="2">{{ option }}</el-checkbox>
                                                <el-checkbox label="3">{{ option }}</el-checkbox>
                                                <el-button type="primary" icon="el-icon-plus">add</el-button>
                                            </el-checkbox-group>
                                            
                                        </div>
                                        <div v-else-if="input.id === 9"> <!-- section divider -->
                                            <el-divider content-position="left"><span>{{ sectionHeader }}</span></el-divider>
                                                <draggable class="dropArea" v-model="sectionList" :options='{group: "inputs"}'>
                                                    <div v-for="input in sectionList" :key="input.id">
                                                    </div>
                                                </draggable>
                                            <el-divider></el-divider>
                                        </div>
                                    </el-card>
                                </el-popover>
                            </el-col>
                        </el-row>
                    </div>
                </draggable>
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

export default {
    data: () => {
        return {
            visible: false,
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
            input: '',
            customfield: '',
            customArea: '',
            phonefield: '',
            emailfield: '',
            addressfields: '',
            numfield: '',
            dropdown: '',
            radios: [
                {index: 1, text: "New Option"}
            ],
            checkbox: '',
            sectionHeader: 'New Section',
            option:  'New Option',
            form: [
                // {section: []}
            ],
            //section: []
        }
    },
    components: {
            draggable,
            SidePanel
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
    }
}
</script>

<style>
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
