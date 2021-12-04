Vue.component('good-list', {
    props: ['goods'],
    template: '<div class="good-list"><good-item v-for="good in goods" :good="good"></good-item></div>'
});