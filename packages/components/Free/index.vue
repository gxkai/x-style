<template>
    <div v-if="component">
        <div
            :style="[
                {
                    position: 'relative',
                    height: component.options.height + 'px',
                    overflow: 'hidden',
                    backgroundColor: component.options.style.backgroundColor
                }
            ]"
        >
            <component v-for="child in children" :key="child.uuid" :is="`x-${child.type}`" :component="child" :lang="lang" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Free',
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
