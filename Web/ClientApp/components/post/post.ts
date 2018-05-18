import Vue from 'vue';
import { mapState } from 'vuex'
import { Component, Prop } from 'vue-property-decorator';

interface Post {
    id: number,
    title: string;
    content: string;
}

@Component
export default class PostComponent extends Vue {
    @Prop() passedPost: Post;
    post = this.passedPost;

    created() {
        //posts => this.$store.state.posts;
        //this.posts = this.$store.state.posts;
    }
    get contentPreview() {
            return this.post.content.substr(0, 30) + '...'
    }
}
