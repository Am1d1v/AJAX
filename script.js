


const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products/1');
request.send();

request.addEventListener("load", function(){
    const data = (JSON.parse(this.responseText));
    console.log(data);
});

console.log('end');