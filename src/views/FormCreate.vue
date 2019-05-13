<template>
  <div class="formCreate">
    <h1>Form Builder</h1>
      <el-container>
        <el-aside>
          <FormCreateMenu/>
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
            <FormCreateCanvas/>
          </el-main>
        </el-container>
      </el-container>
    
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import FormCreateCanvas from '@/components/FormCreateCanvas.vue'
import FormCreateMenu from '@/components/FormCreateMenu.vue'

export default {
  name: 'Form',
  components: {
    FormCreateCanvas,
    FormCreateMenu,
    draggable
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
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    background-color: rgb(238, 241, 246);
    flex: 1 100px;
    min-width: 150px;
    max-width: 300px;
  }
</style>

