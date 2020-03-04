import { configure } from '@storybook/vue';
import '../packages/assets/scss/index.scss';
import '../packages/assets/storybook/index.scss';
import '@/lib/axios';
import xyui from '../packages/index';
import Vue from 'vue';
Vue.use(xyui);
function loadStories() {
    const req = require.context('../packages/components', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
