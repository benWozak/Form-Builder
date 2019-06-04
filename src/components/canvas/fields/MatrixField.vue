<template>
    <div id="textarea">
        
        <span class="inputLabel">{{ options.title }}</span><br>
        <el-table :data="matrix" style="width: 100%; margin-top: 20px; ; z-index: 0" height="250" border show-summary>
            <el-table-column fixed prop="question" label="question" width="500" @click="focusField('question')" v-show="!showField('question')">
                <!-- <span @click="focusField('question')" v-show="!showField('question')"  ></span>
                <el-input v-model="question" v-show="showField('question')" @focus="focusField('question')" @blur="blurField"></el-input> -->
            </el-table-column>
            <el-table-column prop="response" label="response">
                <el-radio-group v-for="item in radioList" :key="item.key" v-model="radio">
                    <el-radio :label="radioList.key"></el-radio>
                </el-radio-group>
            </el-table-column>
        </el-table> 
        <el-collapse>   
            <el-collapse-item name="1">
                <template slot="title">
                    <h1>Matrix Settings</h1>
                </template>
                <div>
                    <el-form label-position="top" ref="options" :model="options" @submit.native.prevent>
                        <el-form-item label="Field Label">
                            <el-input v-model="options.title"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
                        </el-form-item>
                    </el-form>
                     <el-form>
                        <el-form-item label="Matrix Questions"></el-form-item>
                    </el-form>
                    <ul>
                        <li v-for="item in matrix" :key="item.id" >
                            <span v-show="!showField('question')" @click="focusField('question')">{{ item.question }}</span>
                            <el-input v-model="item.question" v-show="showField('question')" @focus="focusField('question')" @blur="blurField"></el-input>
                            <el-button type="text" @click="removeItem(item)">Remove</el-button>
                        </li>
                    </ul>

                    <form @submit.prevent="addItem">
                        <el-form>
                            <el-form-item label="Add Question to List"></el-form-item>
                        </el-form>
                        <el-input v-model="itemText"></el-input>
                        <el-button type="success" @click="addItem">Add</el-button>
                    </form>
                </div>
                <slot></slot>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    data() {
        return {
            matrix: [],
            nextItem: 0,
            radio: 1,
            radioList: [{key: 1}],
            question: '',
            editField: '',
            itemText: '',
        }
    },
    props: {
        options: {
            type: Array | Object,
            default: {
                title: 'Matrix Field',
                required: false,
                reference: '',
                dropdownNum: 2,
                radioNum: 2,
                checkboxNum: 2,
                matrixQuestions: 2,
                matrixChoices: 5,
                setLength: 50,
            }
        }
    },
    mounted: function() {
        this.getMatrixItems(); // calls method upon being rendered in the DOM
        this.getRadioList();
    },
    methods: {
        addItem: function() {
            this.matrix.push({
                id: this.nextItem++, question: this.itemText, response: ''
            })
            this.itemText = ''
        },
        loadItem: function() {
            this.matrix.push({
                id: this.nextItem++, question: 'Question ' + this.nextItem, response: ''
            })
        },
        removeItem(question) {
            var index = this.matrix.indexOf(question);
            if (index !== -1) {
                this.matrix.splice(index, 1);
            }
        },
        getMatrixItems() {
            var i;
            for(i = 0; i < this.options.matrixQuestions; i++) {
                this.loadItem();
            }
        },
        getRadioList() {
            var i;
            for(i = 1; i < this.options.matrixChoices; i++) {
                this.radioList.push({
                    key: i
                })
            }
        },
        focusField(question) {
            this.editField = question;
        },
        blurField(){
            this.editField = '';
        },
        showField(question) {
            return (this.matrix[question] == '' || this.editField == question)
        },
    }
}
</script>

<style>
</style>
