export default {
    type: '',
    name: '',
    // 1:可以作为父组件 2: 只可以作为子组件
    level: 1,
    pc: {
        width: 100,
        height: 35,
        zIndex: 999
    },
    phone: {
        width: 120,
        height: 42,
        zIndex: 999
    },
    options: {
        data: {},
        style: {},
        class: {},
        visible: {}
    },
    // 移动端样式覆盖
    phoneOptions: {
        style: {},
        class: {},
        visible: {}
    }
};
