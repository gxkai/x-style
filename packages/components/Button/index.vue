<template>
    <div
        class="button-wrap"
        :style="[
            {
                position: 'absolute',
                width: options.width + 'px',
                height: options.height + 'px',
                left: options.left + 'px',
                top: options.top + 'px',
                'z-index': 11
            }
        ]"
        v-if="options"
    >
        <a
            :href="options.link.path"
            :target="options.target"
            :style="{
                'font-size': options.style.fontSize + 'px',
                color: options.style.color,
                background: options.style.background,
                borderWidth: options.style.borderWidth + 'px',
                borderStyle: options.style.borderStyle,
                borderColor: options.style.borderColor,
                'text-align': options.style.textAlign,
                'border-radius': options.style.borderRadius + 'px'
            }"
        >
            {{ options[`${this.lang}_text`] }}
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
    props: ['options', 'lang'],
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
