const nanoid = require('nanoid');
export default {
    uuid: nanoid(),
    type: 'button',
    name: '按钮',
    icon: 'icon-x_btn',
    options: {
        originX: 0,
        originY: 0,
        width: 100,
        height: 35,
        left: 50,
        top: 50,
        cn_text: '按钮名称',
        en_text: 'button name',
        link: {
            linkType: 1,
            linkId: null,
            linkTitle: '',
            path: 'javascript:;'
        },
        target: false,
        style: {
            fontSize: 12, // 字体大小 12 - 30
            color: '#ffffff', // 字体颜色
            background: '#48A1EC', // 背景颜色
            borderWidth: 0, // 边框粗细0 - 20
            borderStyle: 'solid', // 边框样式
            borderColor: '#efefef', // 边框颜色
            borderRadius: 35, // 边框弧度 任意数字
            textAlign: 'center' // 文字位置  center/left/right
        },
        class: {
            // 类名
        },
        visible: {
            // 最小单元显示或隐藏
        }
    }
};
