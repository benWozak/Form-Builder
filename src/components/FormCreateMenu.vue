<template>
    <div id="menu">
        <h1>Input Fields Menu</h1>
        
        <el-row :gutter="2">
            <el-col :span="4">
                <draggable :id="key" v-model="inputs" :options="{group: {name:'inputs', pull:'clone', put:'false'}}" 
                        @start="drag=true" @end="drag=false" :move="chooseInput">
                    <transition-group>
                        <div v-for="input in inputs" :key="input.id">
                            <el-card class="cursor-move" body-style="padding: 10px;" shadow="hover" >{{ input.name }}</el-card>
                        </div>
                    </transition-group>
            </draggable>
            </el-col>
        </el-row>    
        
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import { mapState } from 'vuex';

export default {
    data: () => {
        return {
            inputs: [
                {id: 0, name: 'Name'},
                {id: 1, name: 'Phone Number'},
                {id: 2, name: 'Email'},
                {id: 3, name: 'Address'},
                {id: 4, name: 'Custom Textbox'},
                {id: 5, name: 'Text Area'},
                {id: 6, name: 'Numeric'},
                {id: 7, name: 'Dropdown'},
                {id: 8, name: 'Radio'},
                {id: 9, name: 'Checkbox'},
            ],
            targetItem: '',
            targetSection: ''
        }
    },
    components: {
        draggable
    },
    computed: mapState({

    }),
    methods: {
        chooseInput: function (e) {
            console.log('chooseInput' + e.from.id);
            this.chooseInput = e.from.id;
        }
    }
}
</script>

<style>
    .el-card {
        margin: 5px;
    }
</style>
