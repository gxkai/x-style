import { storiesOf } from '@storybook/vue';

import Com from './index.vue';

storiesOf('Free', module).add('plain', () => ({
    components: { Com },
    template: '<Com :component="component" :lang="lang" :platform="platform"></Com>',
    data() {
        return {
            component: require('./index.data').default,
            lang: 'cn',
            platform: 'pc'
        };
    }
}));
