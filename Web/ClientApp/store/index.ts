import Vue from 'vue'
import Vuex from 'vuex'
import JsonApi from 'devour-client'

const jsonApi = new JsonApi({ apiUrl: 'http://localhost:56964/api' })
jsonApi.define('post', {
    title: '',
    content: ''
})

Vue.use(Vuex)

export interface Post { title: string, content: string }

const store = new Vuex.Store({
    state: {
        posts: [] as any[]
    },
    actions: {
        LOAD_POST_LIST: function ({ commit }) {
            console.log('we are trying to load...');
            jsonApi.findAll('post')
                .then(({ data, errors, meta, links }: { data: any, errors: any, meta: any, links: any }) => {
                    console.log(data);
                    commit('SET_POST_LIST', { list: data })
                })
                .catch(({ err }: { err: any }) => {
                    console.log(err)
                });
        },
        ADD_NEW_POST: function ({ commit }, { 'title': title, 'content': content }) {
            jsonApi.create('post', {
                title: title,
                content: content
            })
                .then(({ data, errors, meta, links }: { data: any, errors: any, meta: any, links: any }) => {
                    commit('ADD_POST', { post: data })
                })
                .catch(({ err }: { err: any }) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        SET_POST_LIST: (state, { list }) => {
            state.posts = list
        },
        ADD_POST: (state, { post }) => {
            state.posts.push(post)
        }
    },
    getters: {
        getPosts: state => {
            return state.posts
        }
    }
})
export default store