import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Post {
    title: string;
    content: string;
}

@Component({
    components: {
        PostComponent: require('../post/post.vue.html')
    }
})
export default class HomeComponent extends Vue {
    posts: Post[] = [];

    created() {
        this.posts = this.$store.state.posts;
        console.log(this.posts);
        console.log("here");
    }
}