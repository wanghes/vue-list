<style scoped>
    .v-paginator {
        margin:15px auto;
        text-align:center
    }
</style>
<template>
    <div class="v-paginator">
        <button class="btn btn-default" @click="prev()" :disabled="!dataset.prev_page_url">
            Prev Page
        </button>
        <span>Page {{dataset.current_page}} of {{dataset.last_page}}</span>
        <button class="btn btn-default" @click="next()" :disabled="!dataset.next_page_url">
            Next Page
        </button>
    </div>
</template>
<script>
    export default {

        props: ['dataset'],

        methods: {
            next() {
                this.$parent.next();
            },
            prev() {
                this.$parent.prev();
            }
        }

    }
</script>