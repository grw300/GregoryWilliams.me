import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
    currentcount: number = 0;
    title: string = "";
    content: string = "";

    incrementCounter() {
        this.currentcount++;
    }

    submitPost() {
        console.log(this.title + this.content);
        this.$store.dispatch('ADD_NEW_POST', { title: this.title, content: this.content });
    }
}
