<template>
    <div class="group">
        <h2>{{ title }}</h2>
        <div class="employees-list">
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
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Group',
    props: {
        list: Array,
        title: String
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
