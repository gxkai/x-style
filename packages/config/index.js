// 自定义组件数据
const requireDataList = require.context('../components', true, /\.data.js/);
export const allData = requireDataList.keys().map(fileName => {
    const requireData = requireDataList(fileName);
    return requireData.default || requireData;
});
const config = {
    imgHost: 'http://mobile.smart-cms.test/',
    visualHost: 'http://mobile.smart-cms.test/visual-mobile',
    apiHost: 'http://mobile.smart-sms.test',
    allData
};

export default config;
