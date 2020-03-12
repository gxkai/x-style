<template>
    <div
        v-if="component"
        :style="[
            {
                width: component[platform].width + 'px',
                height: component[platform].height + 'px',
                left: component[platform].left + 'px',
                top: component[platform].top + 'px',
                zIndex: component[platform].zIndex,
                position: position ? position : 'absolute'
            }
        ]"
    ></div>
</template>

<script>
export default {
    name: 'Text',
    components: {},
    mixins: [],
    extends: {},
    filters: {},
    provide: {},
    inject: [],
    props: ['component', 'lang', 'platform', 'position'],
    computed: {},
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
