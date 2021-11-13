class GoodItems {
    constructor(id, title, price, img) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.putGood = this.putGood.bind(this);
    }
    render() {
        return `<div class="product-item" id="${this.id}-list"><h3>${this.title}</h3><img src="/img/${this.img}.jpg" alt="${this.title}"><p>${this.price}</p><button class="buy-btn">Купить</button></div>`
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
    fetchItems() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: 'notebook' },
            { id: 2, title: 'Mouse', price: 20, img: 'mouse' },
            { id: 3, title: 'Keyboard', price: 200, img: 'keyboard' },
            { id: 4, title: 'Gamepad', price: 50, img: 'gamepad' },
        ]
    }
    render() {
        this.goods.forEach(item => {
            const goodItem = new GoodItems(item.id, item.title, item.price, item.img);
            const card = document.createElement('div');
            card.innerHTML = goodItem.render();
            document.querySelector('.products').appendChild(card);
            goodItem.addEvent();
        })
    }
    addInCart(y) { //метод формирования корзины 
        let item = this.goods.find(good => good.id === y);
        let isCart = this.goodsInCart.find(good => good.id === y);
        if (isCart === undefined) {
            const goodItem = new CartItems(item.id, item.title, item.price, item.img);
            this.goodsInCart.push(goodItem);
            const card = document.createElement('div');
            card.innerHTML = goodItem.render();
            document.querySelector('.cart').appendChild(card);
            goodItem.addEvent();
            this.total();
        }
    }
    total() { //метод формирования общей суммы
        let totalSum = 0;
        this.goodsInCart.forEach(item => {
            totalSum += item.sum;
        })
        const amount = document.getElementById('amount');
        amount.innerHTML = totalSum;
    }
}

const goodList = new GoodLists();
goodList.fetchItems();
goodList.render();




