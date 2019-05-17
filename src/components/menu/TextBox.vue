<template>
    <div id="textbox">
        <el-collapse>
            <el-collapse-item name="1">
                <template slot="title">
                    <span class="inputLabel"></span><br>
                    <el-input type="text" placeholder="Textbox" v-model="customfield" disabled></el-input>
                </template>
                    <el-form ref="form" :model="form" label-width="120px">
                        <el-form-item label="Activity name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Activity zone">
                            <el-select v-model="form.region" placeholder="please select your zone">
                            <el-option label="Zone one" value="shanghai"></el-option>
                            <el-option label="Zone two" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Instant delivery">
                            <el-switch v-model="form.delivery"></el-switch>
                        </el-form-item>
                        <el-form-item label="Activity type">
                            <el-checkbox-group v-model="form.type">
                            <el-checkbox label="Online activities" name="type"></el-checkbox>
                            <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                            <el-checkbox label="Offline activities" name="type"></el-checkbox>
                            <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="Resources">
                            <el-radio-group v-model="form.resource">
                            <el-radio label="Sponsor"></el-radio>
                            <el-radio label="Venue"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="Activity form">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">Create</el-button>
                            <el-button>Cancel</el-button>
                        </el-form-item>
                        </el-form>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
