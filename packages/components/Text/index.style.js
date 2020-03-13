export default [
    {
        type: 'Titles',
        name: '标题',
        list: [
            {
                type: 'Text',
                theme: 'Heading 1',
                name: '一级标题',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 2,
                data: {
                    text: {
                        cn: '一级标题'
                    }
                },
                pc: {
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
                theme: 'Heading 2',
                name: '二级标题',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 2,
                data: {
                    text: {
                        cn: '二级标题'
                    }
                },
                pc: {
                    units: {
                        width: 200,
                        height: 30,
                        fontSize: 30
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
                        height: 30,
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
                type: 'Text',
                theme: 'Heading 3',
                name: '三级标题',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 2,
                data: {
                    text: {
                        cn: '三级标题'
                    }
                },
                pc: {
                    units: {
                        width: 200,
                        height: 20,
                        fontSize: 20
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
                        height: 20,
                        fontSize: 20
                    },
                    style: {
                        fontWeight: 500,
                        zIndex: 999
                    },
                    class: {},
                    visible: {}
                }
            }
        ]
    },
    {
        type: 'Paragraphs',
        name: '段落',
        list: [
            {
                type: 'Text',
                theme: 'Paragraph 1',
                name: '一级标题',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 2,
                data: {
                    text: {
                        cn:
                            '从明天起，做一个幸福的人\n' +
                            '喂马，劈柴，周游世界\n' +
                            '从明天起，关心粮食和蔬菜\n' +
                            '我有一所房子，面朝大海，春暖花开'
                    }
                },
                pc: {
                    units: {
                        width: 500,
                        height: 150,
                        fontSize: 30
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
                type: 'Text',
                theme: 'Paragraph 2',
                name: '一级标题',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 2,
                data: {
                    text: {
                        cn:
                            '从明天起，做一个幸福的人\n' +
                            '喂马，劈柴，周游世界\n' +
                            '从明天起，关心粮食和蔬菜\n' +
                            '我有一所房子，面朝大海，春暖花开'
                    }
                },
                pc: {
                    units: {
                        width: 500,
                        height: 150,
                        fontSize: 20
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
                        height: 150,
                        fontSize: 20
                    },
                    style: {
                        fontWeight: 500,
                        zIndex: 999
                    },
                    class: {},
                    visible: {}
                }
            }
        ]
    }
];
