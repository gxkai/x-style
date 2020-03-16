<template>
    <styled-box
        v-if="component"
        :style="{ ...unitsObj }"
        :styled="{ ...styleObj, position }"
    ></styled-box>
</template>
<script>
import { parseUnits } from "@/lib/tools";
export default {
    name: "Box",
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
