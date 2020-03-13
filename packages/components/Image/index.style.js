export default [
    {
        type: 'Themed Images',
        name: '',
        list: [
            {
                type: 'Image',
                theme: 'Theme 1',
                name: '',
                // 1:可以作为父组件 2: 只可以作为子组件
                level: 2,
                data: {
                    backgroundImage:
                        'https://static.wixstatic.com/media/d1f1216cfdbf436a8cc4d8ee5c289880.jpg/v1/fit/w_924,h_520/d1f1216cfdbf436a8cc4d8ee5c289880.jpg'
                },
                pc: {
                    units: {
                        width: 300,
                        height: 100
                    },
                    style: {
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    },
                    class: {},
                    visible: {}
                },
                phone: {
                    units: {
                        width: 300,
                        height: 100
                    },
                    style: {
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    },
                    class: {},
                    visible: {}
                }
            }
        ]
    }
];
