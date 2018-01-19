import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PostComponent from '../post/post';
import store from '../../store';
import _ from 'lodash';

interface Post {
    title: string;
    content: string;
}

@Component({
    components: {
        PostComponent: require("../post/post.vue.html")
    }
})
export default class HomeComponent extends Vue {
    posts: Post[] = [];
    mounted() {
        store.dispatch('LOAD_POST_LIST')
            .then(() => {
                this.posts = store.state.posts;
                console.log(this.posts);
                console.log("here");
            });
    }
    get chunkedPosts() {
            return _.chunk(this.posts, 2);
    }
}