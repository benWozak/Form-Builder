<template>
  <div class="formCreate">
    <h1>Form Builder</h1>
      <el-container>
        <el-aside>
          <FormMenu @add="addField"/>
        </el-aside>
  
          <el-container>
            <el-header style="text-align: right">
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span>Edit</span>
            </el-header>
    
          <el-main>
            <FormCanvas :fields="fields"/>
          </el-main>
        </el-container>
      </el-container>
    
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import FormCanvas from '@/components/canvas/index.vue'
import FormMenu from '@/components/menu/index.vue'

export default {
  name: 'Form',
  components: {
    FormCanvas,
    FormMenu,
    draggable
  },
  data: () => {
    return {
      canvasInput: {},
      inputOptions: {},
      fields: []
    }
  },
  methods: {
    addField(field) {
      // append to fields
      this.fields.push(field);
    },

    updateCanvas(data) {
      this.canvasInput = data.input;
      this.inputOptions = data.options;
    }
  }
}
</script>

<style scoped>
  .el-container {
    height: 100%; 
    flex-shrink: inherit;
    border: 1px solid #eee;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 50px;
  }
  .el-aside {
    color: #333;
    background-color: rgb(238, 241, 246);
    flex-shrink: inherit;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    min-width: 180px;
    max-width: 320px;
    max-height: 800px;
    padding-right: 5px;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

