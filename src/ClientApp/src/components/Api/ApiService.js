import JsonApi from 'devour-client';
import { API_CONFIG } from './ApiConfig';

export default class ApiService {
    jsonApi = new JsonApi({ apiUrl: API_CONFIG.apiUrl });

    constructor() {
        this.state = { posts: [], loading: true };
        this.getPosts = this.getPosts.bind(this);
        this.postPost = this.postPost.bind(this);
        this.jsonApi.define('post', {
            title: '',
            summary: '',
            content: '',
            authors: {
                jsonApi: 'hasMany',
                type: 'authors'
            },
            comments: {
                jsonApi: 'hasMany',
                type: 'comments'
            },
            tags: {
                jsonApi: 'hasMany',
                type: 'tags'
            }
        });
    }

    getPosts() {
        return (
            this.jsonApi.findAll('post', {
                page: { number: 1 }
            })
        );
    }

    postPost(post) {
        return (this.jsonApi.create('post', {
            title: post.title,
            summary: post.summary,
            content: post.content
        }));
        //TODO: add a callback on successful commit.
    }
}