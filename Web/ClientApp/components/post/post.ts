import Vue from 'vue';
import { mapState } from 'vuex'
import { Component } from 'vue-property-decorator';

interface Post {
    title: string;
    content: string;
}

@Component
export default class PostComponent extends Vue {
    posts: Post[] = [];

    created() {
        //posts => this.$store.state.posts;
        this.posts = this.$store.state.posts;
    }
}