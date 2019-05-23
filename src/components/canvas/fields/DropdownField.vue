<template>
    <div id="dropdown">
         <el-collapse>
            <span class="inputLabel">{{ options.setLabel }}</span><br>
            <el-collapse-item name="1">
                <template slot="title">
                    <el-select placeholder="select" v-model="dropdown"></el-select>
                </template>
                <el-form label-position="top" ref="options" :model="options" @submit.native.prevent>
                     <el-form-item label="Field Label">
                            <el-input v-model="options.setLabel"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-switch v-model="options.required" active-text="Required" inactive-text="Optional"></el-switch>
                    </el-form-item>
                    <el-form-item v-for="(domain, index) in options.dropdownItems.domains" :label="'Option ' + index" :key="domain.key" :prop="'domains.' + index + '.value'"
                        :rules="{ required: true, message: 'Field can not be null', trigger: 'blur' }">
                        <el-input v-model="domain.value" placeholder="Option Title"></el-input>
                        
                        <el-button @click.prevent="removeDomain(domain)">Remove</el-button>
                        <el-button @click="addDomain">New Option</el-button>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropdown: [],
            options: {
                setLabel: 'Dropdown',
                required: false,
                reference: '',
                setLength: 50,
                dropdownItems: {
                domains: [{
                        key: 1,
                        value:''
                    }]
                }
            },
        }
    },
    methods: {
        removeDomain(item) {
            var index = this.options.dropdownItems.domains.indexOf(item);
            if (index !== -1) {
            this.options.dropdownItems.domains.splice(index, 1);
            }
        },
        addDomain() {
            this.options.dropdownItems.domains.push({
            key: Date.now(),
            value: ''
            });
        }
    }
}
</script>

<style>

</style>









        <!-- 
        <el-select placeholder="select" v-model="dropdown"></el-select>

        <div v-for="(domain, index) in options.dropdownItems.domains" :label="'Option ' + index" :key="domain.key" :prop="'domains.' + index + '.value'"
            :rules="{ required: true, message: 'Field can not be null', trigger: 'blur' }">
            <el-input v-model="domain.value" placeholder="Option Title"></el-input>
            
            <el-button @click.prevent="removeDomain(domain)">Remove</el-button>
            <el-button @click="addDomain">New Option</el-button>
        </div>
    </div>
</template> -->


