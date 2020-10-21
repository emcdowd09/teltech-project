<template>
    <div class="group">
        <h2>{{ title }} {{ total }}</h2>
        <div class="employees-list" v-if="list.length > 0">
            <div class="employee" v-for="employee in list" @click="$emit('employee', employee)">
                <div class="flex">
                    <div class="avatar" :style="{ backgroundImage: 'url(' + getAvatar(employee.image) + ')' }"></div>
                    <div class="employee-data">
                        <span class="employee-name">{{ employee.name }} {{ employee.surname }}</span>
                        <span :class="['employee-department', employee.department]">{{ getDepartmentName(employee.department) }}</span>
                    </div>
                </div>
                <div class="hr"></div>
                <span class="employee-intro">{{ employee.intro }}</span>
            </div>
        </div>
        <div class="no-data" v-else>
            <p>{{ $t('sorry_no_results') }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Group',
    props: {
        list: Array,
        title: String,
        total: String
    },
    methods: {
        getAvatar(img: String) {
            if(img.length > 0) {
                return 'https://teltech.co/images/members/' + img + '.jpg'
            } else {
                return require('@/assets/images/avatar-placeholder.jpeg')
            }
        },
        getDepartmentName(department: String) {
            switch(department) {
                case 'executive_team':
                return 'Executive'
                break;

                case 'operations':
                return 'Operations'
                break;

                case 'marketing':
                return 'Marketing'
                break;

                case 'product_team':
                return 'Product'
                break;

                case 'design_team':
                return 'Design'
                break;

                case 'development_team':
                return 'Development'
                break;

                case 'data_team':
                return 'Data'
                break;

                case 'quality_assurance_team':
                return 'QA'
                break;

                default:
                return 'Teltech'
            }
        },
    }
})
</script>
<style lang="scss" scoped>
</style>
