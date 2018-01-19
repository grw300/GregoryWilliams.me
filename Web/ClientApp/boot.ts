import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store'; 

import HomeComponent from './components/home/home';
import CounterComponent from './components/counter/counter';
import PostComponent from './components/post/post';
import BannerComponent from './components/banner/banner';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html')  },
    { path: '/post', component: require('./components/post/post.vue.html') },
    { path: '/banner', component: require('./components/banner/banner.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html')),
    store,
});
