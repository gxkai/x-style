export default [
    {
        type: 'Titles',
        name: '标题',
        list: [
            {
                type: 'Text',
                name: '一级标题',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 1,
                pc: {
                    units: {
                        width: 200,
                        height: 40,
                        fontSize: 40
                    },
                    data: {
                        text: {
                            cn: '一级标题'
                        }
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
                    data: {
                        text: {
                            cn: '一级标题'
                        }
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
                name: '二级标题',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 1,
                pc: {
                    units: {
                        width: 200,
                        height: 30,
                        fontSize: 30
                    },
                    data: {
                        text: {
                            cn: '二级标题'
                        }
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
                    data: {
                        text: {
                            cn: '二级标题'
                        }
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
                name: '三级标题',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 1,
                pc: {
                    units: {
                        width: 200,
                        height: 20,
                        fontSize: 20
                    },
                    data: {
                        text: {
                            cn: '三级标题'
                        }
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
                    data: {
                        text: {
                            cn: '三级标题'
                        }
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
