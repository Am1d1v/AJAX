


const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products/1');
request.send();

request.addEventListener("load", function(){
    console.log(this.responseText);
});