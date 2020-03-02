import config from "@/config";
const parseImg = src => {
    let type = Object.prototype.toString.call(src);
    if (!src) return placeImg;
    if (type === '[object String]') {
        return config.imgHost + src;
    }
    if (type === '[object Array]') {
        if (src.length === 0) return placeImg;
        return config.imgHost + src[0];
    }
    return placeImg;
};
const parseI18ns = (item, key) => {
    return item.i18ns ? item.i18ns[key] : '';
};
const parseLang = (obj, lang, key) => {
    if (!obj) return '';
    return obj[`${lang}_${key}`];
};
export {
    parseImg,
    parseI18ns,
    parseLang
};
