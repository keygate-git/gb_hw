Vue.component('cart-list', {
    props: ['goods'],
    template: '<div v-show="!$root.show" class="cart"><cart-item v-for="good in goods" :good="good"></cart-item></div>'
});