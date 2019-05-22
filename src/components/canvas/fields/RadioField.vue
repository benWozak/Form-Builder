<template>
    <div id="radio">
        <span class="inputLabel"></span><br>
        <el-radio-group v-for="radio in radios" :key="radio.text">
            <el-radio v-model="radio.text" label="1">{{ radio.text }}</el-radio>
            <el-radio v-model="radio.text" label="1">{{ radio.text }}</el-radio>
        </el-radio-group>
        <el-button type="primary" icon="el-icon-plus">add</el-button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
