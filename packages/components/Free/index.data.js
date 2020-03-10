const nanoid = require('nanoid');
export default {
    uuid: nanoid(),
    type: 'free',
    name: '自由容器',
    level: 1,
    pc: {
        height: 200,
        width: 375
    },
    phone: {
        width: 280,
        height: 50
    },
    options: {
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
