export default {
    props: ['url'],

    data: () => ({
        dataset: {
            items: [],
            current_page: '',
            last_page: '',
            prev_page_url: '',
            next_page_url: '',
            to: 0,
            from: 0,
            per_page: 0,
            total: 0
        }
    }),

    methods: {
        /**
         * Fetch a paginated collection of items from a url
         *
         * @param url
         */
        fetch(url) {
            this.$http.get(url).then((response) => {
                this.reset();
                this.paginate(response.data);
                response.data.data.forEach((item) => {
                    this.add(item);
                });
                this.$emit('fetch-completed', error.response.data);
            }).catch(error => {
                this.$emit('fetch-failed', error.response.data);
            });
        },

        /**
         * Reset the items array to being an empty array
         */
        reset() {
            this.dataset = {
                current_page: 0,
                last_page: 0,
                next_page_url: '',
                prev_page_url: '',
                to: 0,
                from: 0,
                per_page: 0,
                total: 0
            }

            this.dataset.items.length = 0;
        },

        /**
         * Add an item to our dataset
         *
         * @param item
         */
        add(item) {
            this.dataset.items.push(item);
        },

        /**
         * The number of items in our list
         *
         * @returns {number|Number}
         */
        count() {
            return this.dataset.total;
        },

        /**
         * The current page of our dataset
         *
         * @returns {string|number|*}
         */
        currentPage() {
            return this.dataset.current_page;
        },

        /**
         * Total number of pages in our dataset
         *
         * @returns {string|*}
         */
        totalPages() {
            return this.dataset.last_page;
        },

        /**
         * Load the next page of data
         */
        next() {
            this.fetch(this.dataset.next_page_url);
        },

        /**
         * Load the Previous Page of Data
         */
        prev() {
            this.fetch(this.dataset.prev_page_url);
        },

        /**
         * Update our pagination data after a successful fetch
         *
         * @param data
         */
        paginate(data) {
            this.dataset = {
                current_page: data.current_page,
                last_page: data.last_page,
                next_page_url: data.next_page_url,
                prev_page_url: data.prev_page_url,
                to: data.to,
                from: data.from,
                per_page: data.per_page,
                total: data.total
            }
        }
    }
}
