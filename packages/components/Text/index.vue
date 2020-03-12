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
        {{ component[platform].data.text[this.lang] }}
    </div>
</template>

<script>
import { parseUnits } from '@/lib/tools';

export default {
    name: 'Text',
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
            parseUnits(this.component[this.platform].units, this.platform);
            return this.component[this.platform].units;
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
