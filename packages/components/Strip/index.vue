<template>
    <div
        v-if="component"
        :style="[
            {
                position
            },
            styleObj,
            unitsObj
        ]"
    >
        <div v-for="(list, index) in childrenObj" :key="index">
            <component
                v-for="(com, index) in list"
                :is="`X${com.type}`"
                :key="index"
                :component="com"
                :lang="lang"
                :platform="platform"
                position="absolute"
            />
        </div>
    </div>
</template>

<script>
import { parseUnits } from '@/lib/tools';

export default {
    name: 'Strip',
    components: {},
    mixins: [],
    extends: {},
    filters: {},
    provide: {},
    inject: [],
    props: {
        component: {
            type: Object,
            default: null
        },
        lang: {
            type: String,
            default: 'cn'
        },
        platform: {
            type: String,
            default: 'pc'
        },
        position: {
            type: String,
            default: 'absolute'
        }
    },
    computed: {
        unitsObj() {
            const result = Object.assign({}, this.component[this.platform].units);
            parseUnits(result, this.platform);
            return result;
        },
        styleObj() {
            return this.component[this.platform].style;
        },
        dataObj() {
            return this.component.data;
        },
        childrenObj() {
            return this.component[this.platform].children;
        }
    },
    watch: {},
    data() {
        return {};
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
        document.documentElement.scrollTop = 500;
    },
    beforeUpdate() {},
    updated() {},
    activated() {},
    deactivated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {}
};
</script>

<style lang="scss" scoped></style>
