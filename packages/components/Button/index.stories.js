import { storiesOf } from '@storybook/vue';

import Com from './index.vue';

storiesOf('Button', module).add('plain', () => ({
    components: { Com },
    template: '<Com :component="component" :lang="lang"></Com>',
    data() {
        return {
            component: require('./index.data').default,
            lang: 'cn'
        };
    }
}));
