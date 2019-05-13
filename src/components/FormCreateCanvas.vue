<template>
    <div id="canvas">
        <el-container>
            <el-header><h1>Canvas</h1></el-header>
            <el-main>
                <el-row :gutter="2" v-for="selectedInput in selections" :key="selectedInput">
                    <el-col :span="24">
                        <dragable :id="key" v-model="inputs" :options="{group:'inputs'}"
                            @start="drag=true" @end="drag=false" @add="newInput">
                            <transition-group>
                                <el-row :gutter="10">
                                    <el-col class="float-left" :span="24">
                                        <div class="grid-content bg-purple-dark">
                                            <el-card body-style="padding: 10px;" shadow="hover" >
                                                <!-- {{ input[0].name }} -->
                                            </el-card>
                                        </div>
                                    </el-col>
                                </el-row>
                                
                            </transition-group>
                        </dragable>
                    </el-col>
                </el-row>
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
import draggable from 'vuedraggable';

export default {
    data: () => {
        return {
            selections: [],
            inputs: [
                {id: '', name: ''}
            ]
        }
    },
    components: {
            draggable
        },
    computed: {
        newInput: {
            get() {
                return this.$store.state.inputs
            },
            set(value) {
                this.$store.commit('newInput', value)
            }
        }
    },
    methods: {
        
    }
}
</script>

<style>
#canvas {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-row {
    margin-bottom: 20px;
    margin-left: 5px;
    margin-right: 5px;
    /* -webkit-margin-top-collapse: inherit; */
    margin-top: 5px;
  }
  .el-col {
    border-radius: 4px;
    min-width: 300px;
    /* -webkit-margin-top-collapse: inherit; */
    margin-top: 15px;
  }
  .bg-purple-dark {
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
  }
</style>
