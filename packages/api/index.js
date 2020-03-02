const api = {
    page: {
        joinId(id) {
            return '/api/editor/specialPage/' + id;
        }
    },
    common: {
        update: '/api/editor/common/updateJson',
        get: '/api/editor/common/getJson'
    },
    category: '/api/editor/category',
    product: {
        get: '/api/editor/product',
        detail(id) {
            return '/api/editor/product/' + id;
        }
    },
    article: {
        get: '/api/editor/article',
        detail(id) {
            return '/api/editor/article/' + id;
        }
    },
    atlas: {
        get(id) {
            return `/api/editor/atlas-cate/${id}`;
        }
    },
    form: {
        get: '/api/editor/form',
        update(id) {
            return `/api/editor/form/${id}`;
        }
    },
    formItem: {
        get: '/api/editor/form-item',
        update(id) {
            return `/api/editor/form-item/${id}`;
        }
    }
};
export default api;
