const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')


function formatCurrency(value){
    const newValue = value.toLocaleString('pt-BR', { style: 'currency',
     currency : 'BRL' })
     return newValue
}


function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        myLi += `
              <li>
                   <img src=${product.src}
                   <p>${product.name}</p>
                   <p class="item-price"> ${formatCurrency(product.price)}</p>
             </li>
 
            `
    })
    list.innerHTML = myLi

}
function mapAllItems() {
    newPrices = menuOptions.map((product) => ({
        ...product,
        //name: product.name, 
        price: product.price * 0.9,//vai dar 10% de desconto.
        //vegan: product.vegan,
        //src: product.src,
    }))
    //Spread Operator
    showAll(newPrices)
}
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = 
    `<li>
     <h2>Total da compra : <br>${formatCurrency(totalValue)}</h2>
    </li>`
}
function filterAllItems() {
    const filterJustVegan = menuOptions.filter( product => product.vegan === true);
    console.log('Filter Vegan', filterJustVegan);
    showAll(filterJustVegan)


}




buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)