import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
storiesOf('Box', module)
    .add(
        'pc',
        () => ({
            template: `
                <div>
                    <div v-for="(item,index) in list" :key="index">
                        <h1>
                            {{item.type}}
                        </h1>
                        <div  v-for="(component,i) in item.list" :key="i">
                            <h2>
                                {{component.theme}}
                            </h2>
                            <XBox :component="component" :lang="lang" :platform="platform" position="static"/>
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
    )
    .add(
        'phone',
        () => ({
            template: `
                <div>
                    <div v-for="(item,index) in list" :key="index">
                        <h1>
                            {{item.type}}
                        </h1>
                        <div  v-for="(component,i) in item.list" :key="i">
                            <h2>
                                {{component.theme}}
                            </h2>
                            <XBox :component="component" :lang="lang" :platform="platform" position="static"/>
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
            notes: () => import('./index.md'),
            viewport: {
                defaultViewport: 'iphone6',
                viewports: INITIAL_VIEWPORTS
            }
        }
    );
