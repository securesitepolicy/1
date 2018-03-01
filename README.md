<!-- Global site tag (gtag.js) - Google Analytics -->
<!-- Google Analytics -->
<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-1241000-12', 'auto');
ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->


<style>
    
    .input-lg {
    height: 46px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
}
</style>

<form method="get" action="https://3xaar5y426.execute-api.us-east-1.amazonaws.com/prod/dfp-vuln-checker" id="checkurl">
    <label for="url">Site: <input name="url" id="url" class="input-lg" placeholder="URL"></label>
    <label for="email">Email Report: <input name="email" id="email" class="input-lg" placeholder="Your Email (optional)"></label> &nbsp;<input type="submit" value="Check for DFP Vulnerability" class="input-lg"> <br>
</form>
<hr/>
<div style="padding:10px;border:1px solid #ececec;width:100%;height:500px;overflow:scroll" id="output"></div>

<script>
 
  
  var lambdaurl = 'https://3xaar5y426.execute-api.us-east-1.amazonaws.com/prod/dfp-vuln-checker';
  
 
  
  var form = document.getElementById('checkurl');
    var output = document.getElementById('output');

  // Adds a listener for the "submit" event.
  form.addEventListener('submit', function(event) {


    event.preventDefault();
    
    var url = '', email = '';
    try{
      url = (form.url.value || event.srcElement.url.value);
      email = (form.email.value || event.srcElement.email.value);
    }catch(e){}
    
    ga('send', {
            hitType: 'event',
            eventCategory: 'Check URL',
            eventAction: 'submit',
            eventLabel: url + ' ' + email,
            transport: 'beacon' 
    });
    
    lambdaurl += '?url=' + url;
    //tracker.send("event", "CheckURL", "submit", url + ' ' + email);
    
    //setTimeout(function(){window.location = lambdaurl}, 200);
    
     var xhr = new XMLHttpRequest();
    xhr.open('GET', lambdaurl, true);
    xhr.responseType = 'text';
    output.innerHTML='Checking site now....'
    
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
            console.log(xhr.response.length,(xhr.response.length > 1))
            if(xhr.response.length > 1){
               output.innerHTML=(xhr.responseText);
            }
               output.innerHTML='Site is probably not vulnerable.'
            }
        }
    };

xhr.send(null);
    
  });


</script>


