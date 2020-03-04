import { storiesOf } from '@storybook/vue';

import Com from './index.vue';

storiesOf('Free', module).add('plain', () => ({
    components: { Com },
    template: '<Com :component="component" :lang="lang" :children="children"></Com>',
    data() {
        const buttonData = require('../Button/index.data').default;
        const freeData = require('./index.data').default;
        return {
            component: freeData,
            lang: 'cn',
            children: [buttonData, freeData]
        };
    }
}));
