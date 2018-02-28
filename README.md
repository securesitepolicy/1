<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-1241000-12"></script>


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
    <input name="url" id="url" class="input-lg" placeholder="URL"/>
    <input name="email" id="email" class="input-lg" placeholder="Your Email (optional)"/> <br/>
    <input type="submit" value="Check for DFP Vulnerability" class="input-lg"/>
</form>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-1241000-12');
  
  
  var form = document.getElementById('checkurl');

  // Adds a listener for the "submit" event.
  form.addEventListener('submit', function(event) {


    event.preventDefault();
    var url = '', email = '';
    try{
      url = (form.url.value || event.srcElement.url.value);
      email = (form.email.value || event.srcElement.email.value);
    }catch(e){}
    
    ga('send', {
            'hitType': 'event',
            'eventCategory': 'Check URL',
            'eventAction': 'submit',
            'eventLabel': url + ' ' + email,
            'hitCallback': function(){
                // redirect:
                form.submit();
                //window.location = 'new_page_url';
            }
        }
    });
    
  });


</script>


