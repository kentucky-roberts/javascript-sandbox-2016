js-get-namespaceURI.js

function myFunction() {
    var x = document.documentElement.namespaceURI;
    document.getElementById("demo").innerHTML = x;
}