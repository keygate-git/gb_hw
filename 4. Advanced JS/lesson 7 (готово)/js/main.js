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
            const API_URL = '/catalogData';
            fetch(API_URL)
                .then(text => text.json())
                .then(date => {
                    this.goods = date;
                    this.filteredGoods = date;
                })
        },
        fetchItemsCart() {
            const API_URL = '/cartData';
            fetch(API_URL)
                .then(text => text.json())
                .then(date => {
                    this.cart = date;
                })
        },
        makePOSTrequest(url, data, callback) {
            let xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            xhr.send(data);
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
                this.makePOSTrequest('/cartData', JSON.stringify(this.goods.find(good => good.id_product == event.target.id)), () => {
                    this.fetchItemsCart();
                })
            }
        },
        removeFromCart() {
            this.makePOSTrequest('/cartRemoveData', JSON.stringify(this.goods.find(good => good.id_product == event.target.id)), () => {
                this.fetchItemsCart();
            })
        },
    },
    mounted() {
        this.fetchItems()
        this.fetchItemsCart();
    }
})

