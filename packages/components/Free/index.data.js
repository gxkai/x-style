const nanoid = require('nanoid');
export default {
    uuid: nanoid(),
    type: 'free',
    name: '自由容器',
    options: {
        originX: 0,
        originY: 0,
        height: 200,
        width: 375,
        left: 0,
        top: 0,
        style: {
            backgroundColor: '#ffffff'
        },
        class: {
            // 类名
        },
        visible: {
            // 最小单元显示或隐藏
        }
    }
};
