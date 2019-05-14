<template>
  <div class="FormList">
    <h1>Forms</h1>

    <el-container class="form-list">
      <el-main>
        <el-table 
          :data="tableData.filter(data => !search || data.form.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
          <el-table-column class="text-left" prop="form" label="Enabled Forms" width="180"></el-table-column>
          <el-table-column align="right" prop="date" label="Last Entry" width="180"></el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="{}">
              <span class="search-field">
                <el-input v-model="search" size="small" placeholder="Type to search" prefix-icon="el-icon-search"/>
              </span>
            </template>
            <template slot-scope="{}">
              <!-- Right aligned side panel -->
              <div v-click-outside="hide">
                <SidePanel/>
              </div>
              <!-- <el-button type="text" @click="dialogVisible = true">Options</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

    <!-- <el-dialog title="Form Options" :visible.sync="dialogVisible"> 
      <el-form :model="optionItems">
        <el-row :gutter="10">
          <el-col :xs="16" :sm="16" :md="18" :lg="23" :xl="23">
            <el-form-item label="Export to dashlet">
              <el-radio-group v-model="optionItems.dashlet">
                <el-radio label="Yes"></el-radio>
                <el-radio label="No"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :xs="16" :sm="16" :md="16" :lg="20" :xl="20">
            <el-form-item label="Display on sidebar for Quick Access">  
              <el-radio-group v-model="optionItems.quickAccess">
                <el-radio label="Yes"></el-radio>
                <el-radio label="No" true></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :xs="16" :sm="16" :md="18" :lg="23" :xl="23">
            <el-form-item label="Disable this form">  
              <el-radio-group v-model="optionItems.disable">
                <el-radio label="Yes"></el-radio>
                <el-radio label="No"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog> -->
      
  </div>
</template>

<script>
import SidePanel from '@/components/SidePanel.vue'
import ClickOutside from 'vue-click-outside'

export default {
  name: 'FormList',
  props: {
    status: Boolean
  },
  components: {
    SidePanel
  },
  data() {
        return {
          tableData: [{
            date: '2016-05-03',
            options: '',
            form: 'Demographics'
          }, {
            date: '2016-05-03',
            options: '',
            form: 'MillerDuncan - ORS'
          }, {
            date: '2016-05-03',
            options: '',
            form: 'MillerDuncan - SRS'
          }, {
            date: '2016-05-03',
            options: '',
            form: 'Social Capital'
          }],
          search: '',
          scope: '',
          optionItems: {
            dashlet: '',
            quickAccess: '',
            disable: '',
            opened: false
          }
        }
      },
      methods: {
         hide() {
            this.opened = false
            //document.getElementById("options-menu").style.width = "0";
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-list {
    height: 500px;
    border: 1px solid #eee;
    margin: auto;
    width: 70%;
    padding: 10px;
  }
  .search-field {
    display: inline-block;
    width: 330px;

  }
    .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
