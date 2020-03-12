const parseUnits = (obj, platform, size=375) => {
    Object.keys(obj).forEach(key => {
        const newObj = obj[key]
        if (Object.prototype.toString.call(newObj) === "[object Array]") {
            newObj.forEach(e => {
                parseUnits(e , platform, size)
            })
        }else if(Object.prototype.toString.call(newObj)==='[object Object]'){
            parseUnits(newObj, platform, size)
        }else{
            _addUnit(obj,key, platform, size)
        }
    })
}
const _addUnit = (obj,key, platform, size=375) => {
    console.log(window.devicePixelRatio)
    switch (platform) {
        case  'pc':
            obj[key]= obj[key] + 'px'
            break;
        case 'phone':
            obj[key] =  obj[key] * 2/37.5 + 'rem'
            break;
        default:
            break
    }
}
export {
    parseUnits
};
