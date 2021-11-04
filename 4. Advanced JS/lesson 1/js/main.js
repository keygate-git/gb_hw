const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'notebook' },
    { id: 2, title: 'Mouse', price: 20, img: 'mouse' },
    { id: 3, title: 'Keyboard', price: 200, img: 'keyboard' },
    { id: 4, title: 'Gamepad', price: 50, img: 'gamepad' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<h3>${item.title}</h3>
                <img src="/img/${item.img}.jpg" alt="${item.title}">
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    for (i = 0; i < productsList.length; i++) {
        let div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = productsList[i];
        document.querySelector('.products').appendChild(div);
    }

};

renderPage(products);

const a = document.createElement('p');
b = [1, 2, 3];
a.innerHTML = `Запятые были, потому что мы выводили список элементов массива, которые при выводе перечисляются через запятую.<br>
Например, выводим массив b = [1,2,3]: ${b}<br>
Функция вывода переработана, теперь она циклом выдает элементы массива по-отдельности.`;
document.getElementsByTagName('body')[0].appendChild(a);