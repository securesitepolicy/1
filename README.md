<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-1241000-12"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-1241000-12');
  
  function handleOutboundLinkClicks(event) {
  event.preventDefault();
  ga('send', 'event', 'Check URL', 'submit', event.url.value + ' ' + event.email.value, {
    hitCallback: function() {
      event.submit();
    }
    });
  }
</script>

<style>
    
    .input-lg {
    height: 46px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
}
</style>

<form method="get" action="https://3xaar5y426.execute-api.us-east-1.amazonaws.com/prod/dfp-vuln-checker" onsubmit="handleOutboundLinkClicks(this)">
    <input name="url" id="url" class="input-lg" placeholder="URL"/>
    <input name="email" id="email" class="input-lg" placeholder="Your Email (optional)"/> <br/>
    <input type="submit" value="Check for DFP Vulnerability" class="input-lg"/>
</form>


