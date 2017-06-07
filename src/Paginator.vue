<style scoped>
    .v-paginator {
        margin:15px auto;
        text-align:center
    }
</style>
<template>
    <div class="v-paginator">
        <button class="btn btn-default" @click="prev()" :disabled="!paginator.prev_page_url">
            Prev Page
        </button>
        <span>Page {{paginator.current_page}} of {{paginator.last_page}}</span>
        <button class="btn btn-default" @click="next()" :disabled="!paginator.next_page_url">
            Next Page
        </button>
    </div>
</template>
<script>
    export default {

        props: ['paginator'],

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