import { configure } from '@storybook/vue';
import '../packages/assets/scss/index.scss';
import '../packages/assets/storybook/index.scss';
import '@/lib/axios';
function loadStories() {
    const req = require.context('../packages/components', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
