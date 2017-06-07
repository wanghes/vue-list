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
            this.items = [];
            this.$http.get(url).then((response) => {
                // Add response items to our items property array
                response.data.data.forEach((item) => {
                    this.items.push(item);
                })

                this.paginate(response.data);
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
         * Load the next page of data
         */
        next() {
            this.fetch(this.pagination.next_page_url);
        },

        /**
         * Load the Previous Page of Data
         */
        prev() {
            this.fetch(this.pagination.prev_page_url);
        },

        /**
         * Update our pagination data after a successful fetch
         *
         * @param data
         */
        paginate(data) {
            this.pagination.current_page  = data.current_page;
            this.pagination.last_page     = data.last_page;
            this.pagination.next_page_url = data.next_page_url;
            this.pagination.prev_page_url = data.prev_page_url;
            this.pagination.to            = data.to;
            this.pagination.from          = data.from;
        }
    }
}