Vue.component('good-item', {
    props: ['good'],
    template: '<div class="good-item"><h3>{{ good.product_name }}</h3><p>{{ good.price }}</p><button @click="$root.addInCart" :id="good.id_product">Купить</button></div>'
});

