Vue.component('cart-item', {
    props: ['good'],
    template: '<div class="cart-item"><h3>{{ good.product_name }}</h3><p>{{ good.price }}</p><hr></div>'
});