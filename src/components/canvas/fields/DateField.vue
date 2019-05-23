<template>
    <div id="datepciker">
        <span class="inputLabel">{{ dateLabel }}</span><br>
         <div> <!--v-if="dateType.id === 0"> -->
            <el-date-picker v-model="dateSelection" type="date" placeholder="Pick a day">
            </el-date-picker>
        </div>
        <!-- <div v-if="dateType.id === 1">
            <el-date-picker v-model="dateSelection" type="date" placeholder="Pick a day" :picker-options="pastOptions">
            </el-date-picker>
        </div>
        <div v-if="dateType.id === 2">
            <el-date-picker v-model="dateSelection" type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date">
            </el-date-picker>
        </div> -->
        <!-- <div v-if="dateType.id === 0"></div> -->
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            dateLabel: '',
            dateSelection: '',
            dateType: [
                {id: 0, type: 'default', rules: 'none'},
                {id: 1, type: 'pastTense', rules: 'pastOptions'},
                {id: 2, type: 'dateRange', rules: 'rangeOptions'},
                
            ],
            pastOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: 'Today',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: 'Yesterday',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: 'A week ago',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }],
            }
        }
    }
}
</script>

<style>

</style>
