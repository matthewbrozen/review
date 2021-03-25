javascript:if(!window.jQuery||confirm('Overwrite\x20current\x20version '+ jQuery.fn.jquery +' with v3.5.1?\x20'))(function(d){s=d.createElement('script');s.src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';(d.head || d.documentElement).appendChild(s)})(document); 

$('.step-4').css('left', '-30px');

$('.btn-holder').css('width', '45%');

$('.step-bottom-inner').append(`<a id="trust-seal" name="verasafelink" href="http://www.verasafe.com/index.php?option=com_content&amp;view=article&amp;id=19&amp;uid=7F062264F310FAC&amp;host=windowlocationhost" target="_blank" onclick="sendToDataLayer(" footer',="" 'verasafe')';var="" nonwin="navigator.appName!='Microsoft" internet="" explorer'?'yes':'no';="" window.open(this.href.replace(="" https?="" ,="" 'https').replace('windowlocationhost',="" window.location.hostname),'verasafetrustverification','location="+nonwin+" ,scrollbars="yes,width=700,height='+screen.availHeight+',menubar=no,toolbar=no');" return="" false;'="" oncontextmenu="var d = new Date(); alert(" copying="" prohibited="" by="" law="" -="" this="" image="" and="" all="" included="" logos="" are="" copyrighted="" verasafe="" &copy;="" '+d.getfullyear()+'.');=""><img name="trustseal" alt="VeraSafe Security Seal" style="border: 0;" src="https://d5fmvefcyrh0p.cloudfront.net/classic-trust-seal/trust-seal-classic-140px-black.png"></a>`);

$('.step-bottom-inner').append(`<a id="secure-seal" href="javascript:if(window.open('https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&amp;v_shortname=CL1&amp;v_search=https://www.tigerchef.com/&amp;x=6&amp;y=5','tl_wnd_credentials'+(new Date()).getTime(),'toolbar=0,scrollbars=1,location=1,status=1,menubar=1,resizable=1,width=374,height=660,left=60,top=120')){};tLlB(tLTB);" onmouseover="tLeB(event,'https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=C&amp;v_shortname=CL1&amp;v_search=https://www.tigerchef.com/&amp;x=6&amp;y=5','tl_popupCL1')" onmousemove="tLXB(event)" onmouseout="tLTC('tl_popupCL1')" ondragstart="return false;"><img src="https://images-tigerchef.netdna-ssl.com/comodo_secure_seal_113x59_transp.png" border="0" onmousedown="return tLKB(event,'https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&amp;v_shortname=CL1&amp;v_search=https://www.tigerchef.com/&amp;x=6&amp;y=5');" oncontextmenu="return tLLB(event);"></a>`);

$('.checkout-steps-wrapper').append(`<script language="JavaScript" type="text/javascript">TrustLogo("https://images-tigerchef.netdna-ssl.com/comodo_secure_seal_113x59_transp.png", "CL1", "none");</script><div id="tl_popupCL1" name="tl_popupCL1" style="position: absolute; z-index: 0; visibility: hidden; background-color: transparent; overflow: hidden; left: 683px; top: 4386px; width: 356px; height: 259px; border-width: 0px;" onmouseover="tLoB('tl_popupCL1')" onmousemove="tLpC('tl_popupCL1')" onmouseout="tLpB('tl_popupCL1')"></div>`);

$('#tl_popupCL1').css('bottom', '72px');
$('#tl_popupCL1').css('top', '0');

$('#trust-seal img').css('width','20%');
$('#trust-seal').css('position','relative');
$('#trust-seal').css('top','-2px');



$('#secure-seal img').css('width','20%');
$('#secure-seal').css('position','relative');
$('#secure-seal').css('top','-8px');


$('.complete-checkout').css('height', '90px');

$(window).resize(function() {

   if ($(window).width() > 1025) {
      $('#tl_popupCL1').css('left', '-30');
      $('#secure-seal img').css('width','20%');
      $('#trust-seal img').css('width','20%');  
      $('.btn-holder').css('width', '45%'); 
      $('.complete-checkout').css('height', '90px')
   }
   

   
if ($(window).width() < 1025 && $(window).width() > 767) {
   $('.btn-holder').css('width', '45%');  

   $('#tl_popupCL1').css('left', '0');
   $('#tl_popupCL1').css('bottom', '72px');

   $('.complete-checkout').css('height', '90px');

   $('#trust-seal img').css('width','15%'); 
   $('#trust-seal').css('position','relative');
   $('#trust-seal').css('top','-2px');
   $('#trust-seal').css('left','0');

   $('#secure-seal').css('position','relative');
   $('#secure-seal').css('top','-8px');
   $('#secure-seal img').css('width','15%');
   $('#secure-seal').css('left','0');

 }
 
 if ($(window).width() < 767){
    $('.step-4').css('left', '0');
    $('.complete-checkout').css('height', '150px');
    $('.btn-holder').css('width', '90%');
    $('#secure-seal').css('position','relative');
    $('#secure-seal').css('top','12px');
    $('#secure-seal').css('left','25%');

    $('#trust-seal').css('position','relative');
    $('#trust-seal').css('top','12px');
    $('#trust-seal').css('left','23%');

    $('#secure-seal img').css('width','20%');
    $('#trust-seal img').css('width','20%');    

 }

});
