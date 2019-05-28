<template>
  <div class="Forms bg-red">
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
