javascript:if(!window.jQuery||confirm('Overwrite\x20current\x20version '+ jQuery.fn.jquery +' with v3.5.1?\x20'))(function(d){s=d.createElement('script');s.src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';(d.head || d.documentElement).appendChild(s)})(document); 


//create space for security and trust seals
$('.step-4').css('left', '-30px');

$('.btn-holder').css('width', '45%');

//add in the security and trust seals

$('.step-bottom-inner').append(`<a id="trust-seal" name="verasafelink" href="http://www.verasafe.com/index.php?option=com_content&amp;view=article&amp;id=19&amp;uid=7F062264F310FAC&amp;host=windowlocationhost" target="_blank" onclick="sendToDataLayer(" footer',="" 'verasafe')';var="" nonwin="navigator.appName!='Microsoft" internet="" explorer'?'yes':'no';="" window.open(this.href.replace(="" https?="" ,="" 'https').replace('windowlocationhost',="" window.location.hostname),'verasafetrustverification','location="+nonwin+" ,scrollbars="yes,width=700,height='+screen.availHeight+',menubar=no,toolbar=no');" return="" false;'="" oncontextmenu="var d = new Date(); alert(" copying="" prohibited="" by="" law="" -="" this="" image="" and="" all="" included="" logos="" are="" copyrighted="" verasafe="" &copy;="" '+d.getfullyear()+'.');=""><img name="trustseal" alt="VeraSafe Security Seal" style="border: 0;" src="https://d5fmvefcyrh0p.cloudfront.net/classic-trust-seal/trust-seal-classic-140px-black.png"></a>`);

$('.step-bottom-inner').append(`<a id="secure-seal" href="javascript:if(window.open('https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&amp;v_shortname=CL1&amp;v_search=https://www.tigerchef.com/&amp;x=6&amp;y=5','tl_wnd_credentials'+(new Date()).getTime(),'toolbar=0,scrollbars=1,location=1,status=1,menubar=1,resizable=1,width=374,height=660,left=60,top=120')){};tLlB(tLTB);" onmouseover="tLeB(event,'https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=C&amp;v_shortname=CL1&amp;v_search=https://www.tigerchef.com/&amp;x=6&amp;y=5','tl_popupCL1')" onmousemove="tLXB(event)" onmouseout="tLTC('tl_popupCL1')" ondragstart="return false;"><img src="https://images-tigerchef.netdna-ssl.com/comodo_secure_seal_113x59_transp.png" border="0" onmousedown="return tLKB(event,'https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&amp;v_shortname=CL1&amp;v_search=https://www.tigerchef.com/&amp;x=6&amp;y=5');" oncontextmenu="return tLLB(event);"></a>`);

//add in secure seal pop up window
$('.checkout-steps-wrapper').append(`<script language="JavaScript" type="text/javascript">TrustLogo("https://images-tigerchef.netdna-ssl.com/comodo_secure_seal_113x59_transp.png", "CL1", "none");</script><div id="tl_popupCL1" name="tl_popupCL1" style="position: absolute; z-index: 0; visibility: hidden; background-color: transparent; overflow: hidden; left: 683px; top: 4386px; width: 356px; height: 259px; border-width: 0px;" onmouseover="tLoB('tl_popupCL1')" onmousemove="tLpC('tl_popupCL1')" onmouseout="tLpB('tl_popupCL1')"></div>`);

//position popup
$('#tl_popupCL1').css({'bottom': '72px','top': '0'});


//style trust and security seal
$('#trust-seal img').css('width','100px');
$('#trust-seal').css({'position':'relative','top':'-2px'});
$('#secure-seal img').css('width','100px');
$('#secure-seal').css({'position':'relative','top':'-8px'});

//standardize height of container to fit content
$('.complete-checkout').css('height', '90px');


//media queries 
//1025px to 767 px
document.querySelector('style').textContent += "@media screen and (max-width:1025px) { #tl_popupCL1{ left: 0!important; bottom:72px!important } }";

//767px and down
document.querySelector('style').textContent += "@media screen and (max-width:767px){ .step-4{ left: -18px!important;} .btn-holder{width:90%!important;} #place_order_button{width:100%!important;}.complete-checkout{height:125px!important;} #trust-seal{margin-left:28%!important;}#secure-seal{ margin-left:1%!important;}#secure-seal img{margin-top:10px!important;} #trust-seal img{margin-top:10px!important;} .checkout-steps-wrapper{height:330vh!important;}}";


//639px .step-bottom resizes handler and responsive icons
document.querySelector('style').textContent += "@media screen and (max-width:639px){ .step-bottom{ padding: 20px!important;} #trust-seal{margin-left:23%!important;}}";
