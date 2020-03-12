export default [
    {
        type: 'Themed Text',
        list: [
            {
                type: '',
                name: '',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 1,
                pc: {
                    units: {
                        width: 100,
                        height: 35,
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
                        width: 120,
                        height: 42,
                        fontSize: 40
                    },
                    style: {
                        zIndex: 999
                    }
                }
            }
        ]
    }
];
