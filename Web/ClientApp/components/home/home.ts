import Vue from 'vue';
import { Component } from 'vue-property-decorator';


@Component({
    components: {
        BannerComponent: require('../banner/banner.vue.html')
    }
})
export default class HomeComponent extends Vue {
}