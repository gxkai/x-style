export default [
    {
        type: 'About',
        name: '',
        list: [
            {
                type: 'Strip',
                theme: 'About 1',
                name: '',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 2,
                data: {},
                pc: {
                    units: {
                        width: 1400,
                        height: 500
                    },
                    style: {},
                    class: {},
                    visible: {},
                    children: [
                        [
                            {
                                type: 'Column',
                                theme: 'theme 1',
                                name: '',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {},
                                pc: {
                                    units: {
                                        width: 1400,
                                        height: 500
                                    },
                                    style: {
                                        backgroundColor: '#09F797'
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {},
                                    style: {},
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Text',
                                theme: 'Heading 1',
                                name: '一级标题',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    text: {
                                        cn: '关于我们'
                                    }
                                },
                                pc: {
                                    units: {
                                        width: 200,
                                        height: 40,
                                        fontSize: 40,
                                        left: 500,
                                        top: 100
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 200,
                                        height: 40,
                                        fontSize: 40
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Text',
                                theme: 'Paragraph 1',
                                name: '一级标题',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    text: {
                                        cn: `
                                            一个年轻且富有竞争力的团队
                                            `
                                    }
                                },
                                pc: {
                                    units: {
                                        width: 500,
                                        height: 150,
                                        fontSize: 30,
                                        left: 400,
                                        top: 200
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 300,
                                        height: 220,
                                        fontSize: 30
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Button',
                                theme: 'Theme 1',
                                name: '按钮',
                                level: 2,
                                data: {
                                    text: {
                                        cn: '加入我们'
                                    },
                                    link: {
                                        linkType: 1,
                                        linkId: null,
                                        linkTitle: '',
                                        path: 'javascript:;'
                                    },
                                    target: false
                                },
                                pc: {
                                    units: {
                                        width: 140,
                                        height: 50,
                                        fontSize: 12, // 字体大小 12 - 3
                                        borderWidth: 0, // 边框粗细0 - 20
                                        borderRadius: 0, // 边框弧度 任意数字
                                        left: 500,
                                        top: 400
                                    },
                                    style: {
                                        zIndex: 999,
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#ffffff', // 字体颜色
                                        background: '#000000', // 背景颜色
                                        borderStyle: 'solid', // 边框样式
                                        borderColor: '#efefef', // 边框颜色
                                        justifyContent: 'center' // 文字位置  center/left/right
                                    },
                                    class: {
                                        // 类名
                                    },
                                    visible: {
                                        // 最小单元显示或隐藏
                                    }
                                },
                                phone: {
                                    units: {
                                        width: 200,
                                        height: 50,
                                        fontSize: 12, // 字体大小 12 - 3
                                        borderWidth: 0, // 边框粗细0 - 20
                                        borderRadius: 0 // 边框弧度 任意数字
                                    },
                                    style: {
                                        zIndex: 999,
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#ffffff', // 字体颜色
                                        background: '#000000', // 背景颜色
                                        borderStyle: 'solid', // 边框样式
                                        borderColor: '#efefef', // 边框颜色
                                        justifyContent: 'center' // 文字位置  center/left/right
                                    },
                                    class: {
                                        // 类名
                                    },
                                    visible: {
                                        // 最小单元显示或隐藏
                                    }
                                }
                            }
                        ]
                    ]
                },
                phone: {
                    units: {
                        width: 375,
                        height: 300
                    },
                    style: {},
                    class: {},
                    children: [
                        [
                            {
                                type: 'Column',
                                theme: 'theme 1',
                                name: '',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {},
                                pc: {
                                    units: {
                                        width: 1400,
                                        height: 500
                                    },
                                    style: {
                                        backgroundColor: '#09F797'
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 375,
                                        height: 300
                                    },
                                    style: {
                                        backgroundColor: '#09F797'
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Text',
                                theme: 'Heading 1',
                                name: '一级标题',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    text: {
                                        cn: '关于我们'
                                    }
                                },
                                pc: {
                                    units: {
                                        width: 200,
                                        height: 40,
                                        fontSize: 40,
                                        left: 100,
                                        top: 100
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 200,
                                        height: 40,
                                        fontSize: 40,
                                        left: 50,
                                        top: 20
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Text',
                                theme: 'Paragraph 1',
                                name: '一级标题',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    text: {
                                        cn: `
                                            一个年轻且富有竞争力的团队
                                            `
                                    }
                                },
                                pc: {
                                    units: {
                                        width: 500,
                                        height: 150,
                                        fontSize: 30,
                                        left: 400,
                                        top: 200
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 300,
                                        height: 220,
                                        fontSize: 30,
                                        top: 100,
                                        left: 50
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Button',
                                theme: 'Theme 1',
                                name: '按钮',
                                level: 2,
                                data: {
                                    text: {
                                        cn: '加入我们'
                                    },
                                    link: {
                                        linkType: 1,
                                        linkId: null,
                                        linkTitle: '',
                                        path: 'javascript:;'
                                    },
                                    target: false
                                },
                                pc: {
                                    units: {
                                        width: 140,
                                        height: 50,
                                        fontSize: 12, // 字体大小 12 - 3
                                        borderWidth: 0, // 边框粗细0 - 20
                                        borderRadius: 0, // 边框弧度 任意数字
                                        left: 500,
                                        top: 400
                                    },
                                    style: {
                                        zIndex: 999,
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#ffffff', // 字体颜色
                                        background: '#000000', // 背景颜色
                                        borderStyle: 'solid', // 边框样式
                                        borderColor: '#efefef', // 边框颜色
                                        justifyContent: 'center' // 文字位置  center/left/right
                                    },
                                    class: {
                                        // 类名
                                    },
                                    visible: {
                                        // 最小单元显示或隐藏
                                    }
                                },
                                phone: {
                                    units: {
                                        width: 200,
                                        height: 50,
                                        fontSize: 12, // 字体大小 12 - 3
                                        borderWidth: 0, // 边框粗细0 - 20
                                        borderRadius: 0, // 边框弧度 任意数字
                                        top: 200,
                                        left: 50
                                    },
                                    style: {
                                        zIndex: 999,
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#ffffff', // 字体颜色
                                        background: '#000000', // 背景颜色
                                        borderStyle: 'solid', // 边框样式
                                        borderColor: '#efefef', // 边框颜色
                                        justifyContent: 'center' // 文字位置  center/left/right
                                    },
                                    class: {
                                        // 类名
                                    },
                                    visible: {
                                        // 最小单元显示或隐藏
                                    }
                                }
                            }
                        ]
                    ]
                }
            },
            {
                type: 'Strip',
                theme: 'About 2',
                name: '',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 2,
                data: {},
                pc: {
                    units: {
                        width: 375,
                        height: 500
                    },
                    style: {},
                    class: {},
                    visible: {},
                    children: [
                        [
                            {
                                type: 'Column',
                                theme: 'theme 1',
                                name: '',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {},
                                pc: {
                                    units: {
                                        width: 700,
                                        height: 500,
                                        left: 0
                                    },
                                    style: {
                                        backgroundColor: '#09F797'
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {},
                                    style: {},
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Text',
                                theme: 'Heading 1',
                                name: '一级标题',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    text: {
                                        cn: '关于我们'
                                    }
                                },
                                pc: {
                                    units: {
                                        width: 200,
                                        height: 40,
                                        fontSize: 40,
                                        left: 250,
                                        top: 100
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 200,
                                        height: 40,
                                        fontSize: 40
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Text',
                                theme: 'Paragraph 1',
                                name: '一级标题',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    text: {
                                        cn: `
                                            一个年轻且富有竞争力的团队
                                            `
                                    }
                                },
                                pc: {
                                    units: {
                                        width: 500,
                                        height: 150,
                                        fontSize: 30,
                                        left: 100,
                                        top: 200
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 300,
                                        height: 220,
                                        fontSize: 30
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Button',
                                theme: 'Theme 1',
                                name: '按钮',
                                level: 2,
                                data: {
                                    text: {
                                        cn: '加入我们'
                                    },
                                    link: {
                                        linkType: 1,
                                        linkId: null,
                                        linkTitle: '',
                                        path: 'javascript:;'
                                    },
                                    target: false
                                },
                                pc: {
                                    units: {
                                        width: 70,
                                        height: 50,
                                        fontSize: 12, // 字体大小 12 - 3
                                        borderWidth: 0, // 边框粗细0 - 20
                                        borderRadius: 0, // 边框弧度 任意数字
                                        left: 250,
                                        top: 400
                                    },
                                    style: {
                                        zIndex: 999,
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#ffffff', // 字体颜色
                                        background: '#000000', // 背景颜色
                                        borderStyle: 'solid', // 边框样式
                                        borderColor: '#efefef', // 边框颜色
                                        justifyContent: 'center' // 文字位置  center/left/right
                                    },
                                    class: {
                                        // 类名
                                    },
                                    visible: {
                                        // 最小单元显示或隐藏
                                    }
                                },
                                phone: {
                                    units: {
                                        width: 200,
                                        height: 50,
                                        fontSize: 12, // 字体大小 12 - 3
                                        borderWidth: 0, // 边框粗细0 - 20
                                        borderRadius: 0 // 边框弧度 任意数字
                                    },
                                    style: {
                                        zIndex: 999,
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#ffffff', // 字体颜色
                                        background: '#000000', // 背景颜色
                                        borderStyle: 'solid', // 边框样式
                                        borderColor: '#efefef', // 边框颜色
                                        justifyContent: 'center' // 文字位置  center/left/right
                                    },
                                    class: {
                                        // 类名
                                    },
                                    visible: {
                                        // 最小单元显示或隐藏
                                    }
                                }
                            }
                        ],
                        [
                            {
                                type: 'Column',
                                theme: 'theme 1',
                                name: '',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    backgroundImage:
                                        'https://static.wixstatic.com/media/d1f1216cfdbf436a8cc4d8ee5c289880.jpg/v1/fit/w_924,h_520/d1f1216cfdbf436a8cc4d8ee5c289880.jpg'
                                },
                                pc: {
                                    units: {
                                        width: 700,
                                        height: 500,
                                        left: 700
                                    },
                                    style: {},
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {},
                                    style: {},
                                    class: {},
                                    visible: {}
                                }
                            }
                        ]
                    ]
                },
                phone: {
                    units: {
                        width: 375,
                        height: 900
                    },
                    style: {},
                    class: {},
                    children: [
                        [
                            {
                                type: 'Column',
                                theme: 'theme 1',
                                name: '',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {},
                                pc: {
                                    units: {
                                        width: 700,
                                        height: 500,
                                        left: 0
                                    },
                                    style: {
                                        backgroundColor: '#09F797'
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 375,
                                        height: 300
                                    },
                                    style: {
                                        backgroundColor: '#09F797'
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Text',
                                theme: 'Heading 1',
                                name: '一级标题',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    text: {
                                        cn: '关于我们'
                                    }
                                },
                                pc: {
                                    units: {
                                        width: 200,
                                        height: 40,
                                        fontSize: 40,
                                        left: 250,
                                        top: 100
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 200,
                                        height: 40,
                                        fontSize: 40,
                                        top: 10,
                                        left: 50
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Text',
                                theme: 'Paragraph 1',
                                name: '一级标题',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    text: {
                                        cn: `
                                            一个年轻且富有竞争力的团队
                                            `
                                    }
                                },
                                pc: {
                                    units: {
                                        width: 500,
                                        height: 150,
                                        fontSize: 30,
                                        left: 100,
                                        top: 200
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 300,
                                        height: 220,
                                        fontSize: 30,
                                        top: 100,
                                        left: 50
                                    },
                                    style: {
                                        fontWeight: 500,
                                        zIndex: 999
                                    },
                                    class: {},
                                    visible: {}
                                }
                            },
                            {
                                type: 'Button',
                                theme: 'Theme 1',
                                name: '按钮',
                                level: 2,
                                data: {
                                    text: {
                                        cn: '加入我们'
                                    },
                                    link: {
                                        linkType: 1,
                                        linkId: null,
                                        linkTitle: '',
                                        path: 'javascript:;'
                                    },
                                    target: false
                                },
                                pc: {
                                    units: {
                                        width: 70,
                                        height: 50,
                                        fontSize: 12, // 字体大小 12 - 3
                                        borderWidth: 0, // 边框粗细0 - 20
                                        borderRadius: 0, // 边框弧度 任意数字
                                        left: 250,
                                        top: 400
                                    },
                                    style: {
                                        zIndex: 999,
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#ffffff', // 字体颜色
                                        background: '#000000', // 背景颜色
                                        borderStyle: 'solid', // 边框样式
                                        borderColor: '#efefef', // 边框颜色
                                        justifyContent: 'center' // 文字位置  center/left/right
                                    },
                                    class: {
                                        // 类名
                                    },
                                    visible: {
                                        // 最小单元显示或隐藏
                                    }
                                },
                                phone: {
                                    units: {
                                        width: 200,
                                        height: 50,
                                        fontSize: 12, // 字体大小 12 - 3
                                        borderWidth: 0, // 边框粗细0 - 20
                                        borderRadius: 0, // 边框弧度 任意数字
                                        top: 200,
                                        left: 50
                                    },
                                    style: {
                                        zIndex: 999,
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#ffffff', // 字体颜色
                                        background: '#000000', // 背景颜色
                                        borderStyle: 'solid', // 边框样式
                                        borderColor: '#efefef', // 边框颜色
                                        justifyContent: 'center' // 文字位置  center/left/right
                                    },
                                    class: {
                                        // 类名
                                    },
                                    visible: {
                                        // 最小单元显示或隐藏
                                    }
                                }
                            }
                        ],
                        [
                            {
                                type: 'Column',
                                theme: 'theme 1',
                                name: '',
                                // 1:可以作为父组件 2: 只可以作为子组件
                                level: 2,
                                data: {
                                    backgroundImage:
                                        'https://static.wixstatic.com/media/d1f1216cfdbf436a8cc4d8ee5c289880.jpg/v1/fit/w_924,h_520/d1f1216cfdbf436a8cc4d8ee5c289880.jpg'
                                },
                                pc: {
                                    units: {
                                        width: 700,
                                        height: 500,
                                        left: 700
                                    },
                                    style: {
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain'
                                    },
                                    class: {},
                                    visible: {}
                                },
                                phone: {
                                    units: {
                                        width: 375,
                                        height: 300,
                                        top: 300
                                    },
                                    style: {
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain'
                                    },
                                    class: {},
                                    visible: {}
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    }
];
