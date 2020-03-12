import { storiesOf } from '@storybook/vue';
storiesOf('Button', module).add(
    'plain',
    () => ({
        template: `
    <div>
        <div v-for="(item,index) in list" :key="index">
            <div>
                {{item.type}}
            </div>
            <div>
                <XButton :component="component" :lang="lang" :platform="platform" v-for="(component,i) in item.list" :key="i" position="static"/>
            </div>
        </div>
    </div>
    `,
        data() {
            return {
                list: require('./index.style').default,
                lang: 'cn',
                platform: 'pc'
            };
        }
    }),
    { notes: () => import('./index.md') }
);
