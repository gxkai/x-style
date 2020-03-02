// 分页
const pageMixin = {
    data() {
        return {
            loading: false,
            page: {
                data: []
            },
            currentPage: 1,
            params: {}
        };
    },
    methods: {
        contentSearch() {
            this.currentPage = 1;
            this.fetchData();
        },
        changePage(page) {
            this.currentPage = page.currentPage + 1;
            this.fetchData();
        },
        getParams() {
            return {
                ...this.params,
                size: this.size,
                page: this.currentPage
            };
        }
    }
};

export { pageMixin };
