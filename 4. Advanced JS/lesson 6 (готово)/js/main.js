const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        cart: [],
        searchLine: '',
        show: true,
        showSearch: true,
    },
    methods: {
        fetchItems() {
            const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
            fetch(API_URL)
                .then(text => text.json())
                .then(date => {
                    this.goods = date;
                    this.filteredGoods = date;
                })
        },
        filterGoods() {
            if (this.searchLine != 0) {
                this.filteredGoods = this.goods;
                let regExpFilter = new RegExp(`.*${this.searchLine}.*`, 'i');
                this.filteredGoods = this.filteredGoods.filter(value => regExpFilter.test(value.product_name));

            }
            else {
                this.filteredGoods = this.goods;
            }
            if (this.filteredGoods == 0) {
                this.showSearch = false;
            }
            else {
                this.showSearch = true;
            }
        },
        addInCart() {
            let isCart = this.cart.find(good => good.id_product == event.target.id);
            if (isCart === undefined) {
                this.cart.push(this.goods.find(good => good.id_product == event.target.id));
            }
        }
    },
    mounted() {
        this.fetchItems()
    }
})

