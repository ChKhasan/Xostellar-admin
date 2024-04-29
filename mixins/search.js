export default {
    data() {
        return {
            searchVal: "",
            value: "",
        };
    },
    methods: {
        async changeSearch(val, func) {
            clearTimeout(this.debounceTimer);
            this.searchVal = val.target.value;
            this.debounceTimer = setTimeout(async () => {
                if (this.searchVal.length > 2) {
                    if (this.$route.query?.search !== this.searchVal) {
                        await this.$router.replace({
                            path: this.$route.path,
                            query: { ...this.$route.query, search: this.searchVal, page: 1 },
                        });
                    }
                    if (this.searchVal === this.$route.query.search) {
                        this[func]();
                    }
                } else if (this.searchVal.length === 0) {
                    this.clearQuery(func);
                }
            }, 300);
        },
        async clearQuery(func) {
            this.value = undefined;
            const query = {...this.$route.query};
            delete query['search']
            this.current = 1;
            if (Object.keys(this.$route.query).length > 2) {
                await this.$router.replace({
                    path: this.$route.path,
                    query: {...query},
                });
                this[func]();
            }
        },
    },
};
