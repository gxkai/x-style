<template>
    <div class="button-wrap" v-if="component">
        <a
            :href="component.options.link.path"
            :target="component.options.target"
            :style="{
                'font-size': component.options.style.fontSize + 'px',
                color: component.options.style.color,
                background: component.options.style.background,
                borderWidth: component.options.style.borderWidth + 'px',
                borderStyle: component.options.style.borderStyle,
                borderColor: component.options.style.borderColor,
                'text-align': component.options.style.textAlign,
                'border-radius': component.options.style.borderRadius + 'px'
            }"
        >
            {{ component.options[`${this.lang}_text`] }}
        </a>
    </div>
</template>

<script>
export default {
    name: 'Button',
    components: {},
    mixins: [],
    extends: {},
    filters: {},
    provide: {},
    inject: [],
    props: ['component', 'lang'],
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
