<template>
    <div id="textarea">
        
        <span class="inputLabel">{{ options.title }}</span><br>
        <el-table :data="matrix" style="width: 100%; margin-top: 20px" height="250" border :summary-method="getSummaries" show-summary>
            <el-table-column fixed prop="question" label="question" width="500"></el-table-column>
            <el-table-column prop="response" label="response"></el-table-column>
        </el-table> 
        <el-collapse>   
            <el-collapse-item name="1">
                <template slot="title">
                    <h1>Options</h1>
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
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    data() {
        return {
            matrix: [
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
                { question: 'question', response: 'answer'},
            ],
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
    
    methods: {
        // placeholder method from ElementUI. replace with relevant code if deciding to keep
        getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total Value';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = '$ ' + values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = 'Total Value';
          }
        });

        return sums;
      }
    }
}
</script>

<style>

</style>
