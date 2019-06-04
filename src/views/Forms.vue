<template>
  <div>
    <!-- TODO: Integrate into global NavBar -->
    <div id="nav" class="bg-gray-200">
      <router-link to="/">Forms</router-link> |
      <router-link to="/NewForm">New Form</router-link> | 
      <router-link to="/Preview">Preview Form</router-link>  <span><i class="el-icon-back"></i> this will be replaced by the global nav menu</span>
    </div>
    <router-view/>
    <FormList/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormList from '@/components/FormList.vue'
// import OptionsDrawer from '@/components/OptionsDrawer.vue'

export default {
  name: 'Forms',
  components: {
    FormList
  }
}
</script>
