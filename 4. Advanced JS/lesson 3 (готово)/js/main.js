class GoodItems {
    constructor(id, title, price, img) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.putGood = this.putGood.bind(this);
    }
    render() {
        return `<div class="product-item" id="${this.id}-list"><h3>${this.title}</h3><img src="/img/${this.img}.jpg" alt="${this.title}"><p>${this.price}</p><button class="buy-btn">Купить - отключено</button></div>`
    }
    putGood() { //метод добавления товара в корзину
        let x = this.id
        goodList.addInCart(x);
    }
    addEvent() { //метод добавления метода добавления в корзину
        let button = document.getElementById(`${this.id}-list`).getElementsByTagName('button')[0];
        button.addEventListener("click", this.putGood);
    }
}

class CartItems extends GoodItems {
    constructor(id, title, price, img, quantity, sum) {
        super(id, title, price, img);
        this.quantity = 1; //свойство для количества
        this.sum = price; //свойство для стоимости суммы товаров
        this.checkQuantity = this.checkQuantity.bind(this);
    }
    render() { //метод вывода карточки в корзине с дополнительными полями и кнопками
        return `<div class="product-item" id="${this.id}-cart"><h3>${this.title}</h3><img src="/img/${this.img}.jpg" alt="${this.title}"><p>${this.price}</p><input type="number" value = "1" min="1"><button class="rmv-btn">Удалить - пока не работает</button></div>`
    }
    checkQuantity() { //метод проверки общей стоимости товаров одного SKU
        this.quantity = document.getElementById(`${this.id}-cart`).getElementsByTagName('input')[0].value;
        this.sum = this.quantity * this.price;
        goodList.total();
    }
    addEvent() { //метод добавления метода проверки общей стоимости при клике на input 
        let counter = document.getElementById(`${this.id}-cart`).getElementsByTagName('input')[0];
        counter.addEventListener("click", this.checkQuantity);
    }
}

class GoodLists {
    constructor() {
        this.goods = [];
        this.goodsInCart = [];
    }
    makeGETRequest(url, callback) {
        var xhr;

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

        xhr.open('GET', url, true);
        xhr.send();
    }
    fetchItems(cb) {
        const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
        fetch(API_URL)
            .then(text => text.json())
            .then(data => {
                this.goods = data;
                cb();
            })
        // this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
        //     this.goods = JSON.parse(goods);
        //     cb();
        // })

        // this.goods = [
        //     { id_product: 1, product_name: 'Notebook', price: 2000, img: 'notebook' },
        //     { id_product: 2, product_name: 'Mouse', price: 20, img: 'mouse' },
        //     { id_product: 3, product_name: 'Keyboard', price: 200, img: 'keyboard' },
        //     { id_product: 4, product_name: 'Gamepad', price: 50, img: 'gamepad' },
        // ]
    }
    fetchItemsCart(cb) {
        const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';
        fetch(API_URL)
            .then(text => text.json())
            .then(data => {
                this.goodsInCart = data.contents;
                cb();
            })

        // this.makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
        //     this.goodsInCart = JSON.parse(goods).contents;
        //     cb();
        // })
    }
    render() {
        this.goods.forEach(item => {
            const goodItem = new GoodItems(item.id_product, item.product_name, item.price, item.img);
            const card = document.createElement('div');
            card.innerHTML = goodItem.render();
            document.querySelector('.products').appendChild(card);
            goodItem.addEvent();
        })
    }
    renderCart() {
        this.goodsInCart.forEach(item => {
            const goodItem = new CartItems(item.id_product, item.product_name, item.price, item.img);
            const card = document.createElement('div');
            card.innerHTML = goodItem.render();
            document.querySelector('.cart').appendChild(card);
            goodItem.addEvent();
            this.total();
        })
    }
    // addInCart(y) { //метод формирования корзины 
    //     let item = this.goods.find(good => good.id_product === y);
    //     let isCart = this.goodsInCart.find(good => good.id_product === y);
    //     if (isCart === undefined) {
    //         const goodItem = new CartItems(item.id_product, item.product_name, item.price, item.img);
    //         this.goodsInCart.push(goodItem);
    //         const card = document.createElement('div');
    //         card.innerHTML = goodItem.render();
    //         document.querySelector('.cart').appendChild(card);
    //         goodItem.addEvent();
    //         this.total();
    //     }
    // }
    total() { //метод формирования общей суммы
        let totalSum = 0;
        this.goodsInCart.forEach(item => {
            totalSum += item.sum;
        })
        const amount = document.getElementById('amount');
        // amount.innerHTML = totalSum;
        amount.innerHTML = 'Не считает, так как объекты класса CartItems уже другие';
    }
}

const goodList = new GoodLists();
goodList.fetchItems(() => {
    goodList.render();
    // console.log(goodList.goods);
});

goodList.fetchItemsCart(() => {
    goodList.renderCart();
    // console.log(goodList.goodsInCart);
});





