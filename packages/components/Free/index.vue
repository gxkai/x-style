<template>
    <div v-if="component" :style="component.options.style"></div>
</template>

<script>
export default {
    name: 'Box',
    components: {},
    mixins: [],
    extends: {},
    filters: {},
    provide: {},
    props: ['component', 'lang', 'children'],
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
