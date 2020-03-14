const { notEmpty } = require('./utils.js');

module.exports = {
    description: '生成组件模版',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: '请输入组件名称',
            validate: notEmpty('name')
        }
    ],
    actions: () => {
        return [
            {
                type: 'add',
                path: `packages/components/{{properCase name}}/index.vue`,
                templateFile: 'plop-templates/components/index.vue.hbs',
                data: {
                    name: '{{properCase name}}'
                }
            },
            {
                type: 'add',
                path: `packages/components/{{properCase name}}/index.stories.js`,
                templateFile: 'plop-templates/components/index.stories.js.hbs',
                data: {
                    name: '{{properCase name}}'
                }
            },
            {
                type: 'add',
                path: `packages/components/{{properCase name}}/index.data.js`,
                templateFile: 'plop-templates/components/index.data.js.hbs'
            },
            {
                type: 'add',
                path: `packages/components/{{properCase name}}/index.md`,
                templateFile: 'plop-templates/components/index.md.hbs'
            },
            {
                type: 'add',
                path: `packages/components/{{properCase name}}/index.style.js`,
                templateFile: 'plop-templates/components/index.style.hbs'
            },
            {
                type: 'add',
                path: `packages/components/{{properCase name}}/index.styled.js`,
                templateFile: 'plop-templates/components/index.styled.hbs'
            }
        ];
    }
};
