<template>
    <a
        v-if="component"
        :href="component[platform].link.path"
        :target="component[platform].target"
        :style="[{ position }, styleObj, unitsObj]"
    >
        <span>
            {{ component[platform].text[this.lang] }}
        </span>
    </a>
</template>

<script>
import { parseUnits } from '@/lib/tools';
export default {
    name: 'Button',
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
        }
    },
    watch: {},
    data() {
        return {};
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
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
