import './assets/scss/index.scss';
import './assets/fonts/iconfont.css';
import '@/lib/axios';
// 前缀
export const prefix = 'X';
// 自定义组件
const requireComponents = require.context('./components', true, /\.vue/);
// 自定义样式组件
const requireStyledComponents = require.context('./components', true, /\.styled.js/);
const install = function(Vue) {
    requireComponents.keys().forEach(fileName => {
        if (fileName.split('/')[2] === 'children') return;
        // 组件实例
        const reqCom = requireComponents(fileName);
        const reqComName = reqCom.default.name;
        // 组件挂载
        Vue.component(`${prefix.toUpperCase()}${reqComName}`, reqCom.default || reqCom);
    });
    requireStyledComponents.keys().forEach(fileName => {
        const reqCom = requireStyledComponents(fileName);
        Vue.component(reqCom.default.name, reqCom.default.instance);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const plugin = {
    install
};

export default plugin;
