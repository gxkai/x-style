<template>
    <styled-button
        v-if="component"
        :href="dataObj.link.path"
        :target="dataObj.target"
        :styled="{ ...styleObj, ...unitsObj, position }"
        :hoverStyled="{ ...hoverStyleObj }"
    >
        <span>
            {{ dataObj.text[this.lang] }}
        </span>
    </styled-button>
</template>

<script>
import { parseUnits } from "@/lib/tools";
export default {
    name: "Button",
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
            default: "cn"
        },
        platform: {
            type: String,
            default: "pc"
        },
        position: {
            type: String,
            default: "absolute"
        }
    },
    computed: {
        unitsObj() {
            const result = Object.assign(
                {},
                this.component[this.platform].units
            );
            parseUnits(result, this.platform);
            return result;
        },
        styleObj() {
            return this.component[this.platform].style;
        },
        dataObj() {
            return this.component.data;
        },
        hoverStyleObj() {
            return this.component[this.platform].hoverStyle;
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
