import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

storiesOf('Text', module)
    .add(
        'pc',
        () => ({
            template: `
<div>
    <div v-for="(item,index) in list" :key="index">
        <div>
            {{item.type}}
        </div>
        <div>
            <XText :component="component" :lang="lang" :platform="platform" v-for="(component,i) in item.list" :key="i" position="static"/>
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
        { notes: { markdown: () => import('./index.md') } }
    )
    .add(
        'phone',
        () => ({
            template: `
            <div>
                <div v-for="(item,index) in list" :key="index">
                    <div>
                        {{item.type}}
                    </div>
                    <div>
                        <XText :component="component" :lang="lang" :platform="platform" v-for="(component,i) in item.list" :key="i" position="static"/>
                    </div>
                </div>
            </div>
        `,
            data() {
                return {
                    list: require('./index.style').default,
                    lang: 'cn',
                    platform: 'phone'
                };
            }
        }),
        {
            notes: { markdown: () => import('./index.md') },
            viewport: {
                defaultViewport: 'iphone6',
                viewports: INITIAL_VIEWPORTS
            }
        }
    );
