const Http = new XMLHttpRequest();
const url='http://localhost:3000/api/quote';

function changemessage(){
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        api = JSON.parse(Http.responseText)
        console.log(api.quote)
        document.getElementById("quote").innerHTML = api.quote
    } 
}