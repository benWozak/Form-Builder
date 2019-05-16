<template>
    <div id="menu" v-sticky="{ zIndex: 0, stickyTop: 0, disabled: false}">
        <div>
            <h1>Input Fields Menu</h1>
        
        <el-row :gutter="2">
            <el-col :span="4">
                <draggable v-model="inputList" :options="{group: {name:'inputs', pull:'clone', put:'false'}}" >
                        <div v-for="input in inputList" :key="input.id">
                            <el-card class="cursor-move" body-style="padding: 10px;" shadow="hover">{{ input.name }}</el-card>
                        </div>
            </draggable>
            </el-col>
        </el-row>  
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import VueSticky from 'vue-sticky' 

export default {
    data: () => {
        return {
            inputs: [
                {id: 0, name: 'Text Box', icon: ''},
                {id: 1, name: 'Text Area', icon: 'el-icon-s-comment'},
                {id: 2, name: 'Email', icon: ''},
                {id: 3, name: 'Address', icon: 'el-icon-location'},
                {id: 4, name: 'Phone Number', icon: ''},
                {id: 5, name: 'Numeric', icon: ''},
                {id: 6, name: 'Dropdown', icon: 'el-icon-d-caret'},
                {id: 7, name: 'Radio', icon: 'el-icon-s-help'},
                {id: 8, name: 'Checkbox', icon: 'el-icon-success'},
                {id: 9, name: 'Section Divider', icon: ''},
            ],
        }
    },
    components: {
        draggable
    },
    directives: {
        'sticky': VueSticky,
    },
    computed: {
        inputList: {
            get(){
               return this.inputs
            },
            set(value) {
                this.inputs = value
            }
        }
    },
    methods: {
        chooseInput: function (e) {
            console.log('chooseInput' + e.from.id);
            this.chooseInput = e.from.id;
        }
    }
}
</script>

<style>
#menu {
    font-size: 22px;
}
    .el-card {
        margin: 5px;
    }
</style>
