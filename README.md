<style>
    
    .input-lg {
    height: 46px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
}
</style>

<form method="get" action="https://3xaar5y426.execute-api.us-east-1.amazonaws.com/prod/dfp-vuln-checker">
    <input name="url" id="url" class="input-lg" placeholder="URL"/>
    <input name="email" id="email" class="input-lg" placeholder="Your Email (optional)"/> <br/>
    <input type="submit" value="Check for DFP Vulnerability" class="input-lg" onclick="handleOutboundLinkClicks(this)"/>
</form>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-1241000-12"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-1241000-12');
  
  function handleOutboundLinkClicks(event) {
  ga('send', 'event', {
    eventCategory: 'Check URL',
    eventAction: 'click',
    eventLabel: document.forms[0].url.value + ' ' + document.forms[0].email.value
  });
  }
</script>
