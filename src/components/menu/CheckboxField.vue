<template>
    <div id="checkbox">
        <span class="inputLabel"></span><br>
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="1">{{ option }}</el-checkbox>
            <el-checkbox label="2">{{ option }}</el-checkbox>
            <el-checkbox label="3">{{ option }}</el-checkbox>
            <el-button type="primary" icon="el-icon-plus">add</el-button>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
