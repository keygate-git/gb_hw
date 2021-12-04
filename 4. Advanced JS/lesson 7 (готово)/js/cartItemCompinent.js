Vue.component('cart-item', {
    props: ['good'],
    template: '<div class="cart-item"><h3>{{ good.product_name }}</h3><p>{{ good.price }}</p><button :id="good.id_product" @click="$root.removeFromCart">Удалить</button><hr></div>'
});