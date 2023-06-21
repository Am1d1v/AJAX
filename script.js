

/*

function req(id){

    const request = new XMLHttpRequest();
    request.open('GET', `https://dummyjson.com/products/` + id);
    request.send();
    
    request.addEventListener("load", function(){
        const data = (JSON.parse(this.responseText));
        console.log(data);
    });

}

req(1);
req(2);
req(3);
req('');

console.log('end');

*/

//==================


    const req = new XMLHttpRequest();
    req.open('GET', `https://dummyjson.com/products`);
    req.send();

    req.addEventListener("load", function(){
        const {products} = (JSON.parse(this.responseText));
        console.log(products);
        const sum = products.reduce((acc, p) => acc += p.price, 0)
        console.log(sum);

        const average = sum / products.length;
        console.log(`Average price of products is ${average}`);
    })
