<template>
    <div
        v-if="component"
        :style="[
            component[platform].style,
            {
                position: 'absolute',
                width: component[platform].width + 'px',
                height: component[platform].height + 'px',
                left: component[platform].left + 'px',
                top: component[platform].top + 'px',
                zIndex: component[platform].zIndex
            }
        ]"
    ></div>
</template>

<script>
export default {
    name: 'Box',
    components: {},
    mixins: [],
    extends: {},
    filters: {},
    provide: {},
    props: ['component', 'lang', 'platform'],
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
