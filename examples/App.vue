<template>
    <div id="app">
        <XTop :options="component.options" :lang="lang" />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {
            component: require('../packages/components/Top/index.data').default,
            lang: 'cn'
        };
    }
};
</script>
