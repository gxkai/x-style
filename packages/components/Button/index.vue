<template>
    <div class="button-wrap" v-if="component">
        <a
            :href="component[platform].link.path"
            :target="component[platform].target"
            :style="{
                'font-size': component[platform].style.fontSize + 'px',
                color: component[platform].style.color,
                background: component[platform].style.background,
                borderWidth: component[platform].style.borderWidth + 'px',
                borderStyle: component[platform].style.borderStyle,
                borderColor: component[platform].style.borderColor,
                'text-align': component[platform].style.textAlign,
                'border-radius': component[platform].style.borderRadius + 'px'
            }"
        >
            {{ component[platform][`${this.lang}_text`] }}
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
