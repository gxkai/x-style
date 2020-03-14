export default [
    {
        type: 'Theme Column',
        name: '',
        list: [
            {
                type: 'Column',
                theme: 'theme 1',
                name: '',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 1,
                data: {},
                pc: {
                    units: {
                        width: 1440,
                        height: 500
                    },
                    style: {
                        backgroundColor: '#000000'
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
                        backgroundColor: '#000000'
                    },
                    class: {},
                    visible: {}
                }
            }
        ]
    }
];
