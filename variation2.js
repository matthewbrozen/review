javascript:if(!window.jQuery||confirm('Overwrite\x20current\x20version '+ jQuery.fn.jquery +' with v3.5.1?\x20'))(function(d){s=d.createElement('script');s.src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';(d.head || d.documentElement).appendChild(s)})(document); 


$('.hs_firstname').css('display', 'none');
$('.hs_lastname').css('display', 'none');
$('.hs_company').css('display', 'none');
$('.hs_submit').css('display', 'none');
$('.hs_how_can_we_help_').css('display', 'none');


$('.hbspt-form').append(`<span id='first'></span><span id="second"></span><span id="third"></span><span id="forth"></span>`);

$('#first').css('height','25px');
$('#first').css('width','25px');
$('#first').css('background-color','white');
$('#first').css('border-radius','50%');
$('#first').css('border','1px solid black');
$('#first').css('display','inline-block');
$('#first').css('margin','1%');


$('#second').css('height','25px');
$('#second').css('width','25px');
$('#second').css('background-color','white');
$('#second').css('border-radius','50%');
$('#second').css('border','1px solid black');
$('#second').css('display','inline-block');
$('#second').css('margin','1%');

$('#third').css('height','25px');
$('#third').css('width','25px');
$('#third').css('background-color','white');
$('#third').css('border-radius','50%');
$('#third').css('border','1px solid black');
$('#third').css('display','inline-block');
$('#third').css('margin','1%');

$('#forth').css('height','25px');
$('#forth').css('width','25px');
$('#forth').css('background-color','white');
$('#forth').css('border-radius','50%');
$('#forth').css('border','1px solid black');
$('#forth').css('display','inline-block');
$('#forth').css('margin','1%');



$('.hbspt-form').append('<div id="next-btn">Next Step</div>')

$('#next-btn').css('height','50px');
$('#next-btn').css('width','200px');
$('#next-btn').css('color','white');
$('#next-btn').css('line-height','50px');
$('#next-btn').css('background-color','#1e77cc');
$('#next-btn').css('font-size','15px');
$('#next-btn').css('border','2px solid #182b52');
$('#next-btn').css('text-align','center');






$('#next-btn').on('click',  function() {




    if($('.hs_email').css('display')==='block' && $('.hs_firstname').css('display')==='none' && $('.hs_lastname').css('display')==='none' && $('.hs_company').css('display')==='none' && $('#email-283ee467-7098-4b28-954f-b946bec6f2bc').val()!=''){






        $( ".hs_email" ).slideUp( 500 ).delay( 600 );
        $( ".hs_firstname" ).slideDown( 300 ).fadeIn( 400 );
        $('#first').css('background-color','green');

        
    }else if ($('.hs_email').css('display')==='none' && $('.hs_firstname').css('display')==='block' && $('.hs_lastname').css('display')==='none' && $('.hs_company').css('display')==='none' && $('#firstname-283ee467-7098-4b28-954f-b946bec6f2bc').val()!=''){
        $( ".hs_firstname" ).slideUp( 500 ).delay( 600 );
        $( ".hs_lastname" ).slideDown( 300 ).fadeIn( 400 );
        $('#second').css('background-color','green');
    }else if ($('.hs_email').css('display')==='none' && $('.hs_firstname').css('display')==='none' && $('.hs_lastname').css('display')==='block' && $('.hs_company').css('display')==='none' && $('#lastname-283ee467-7098-4b28-954f-b946bec6f2bc').val()!=''){
        $('#next-btn').css('display','none');
        $( ".hs_lastname" ).slideUp( 500 ).delay( 600 );
        $( ".hs_company" ).slideDown( 300 ).fadeIn( 400 );
        $( ".hs_submit" ).slideDown( 300 ).fadeIn( 400 );
        $('#first').css('display','none');
        $('#second').css('display','none');
        $('#third').css('display','none');
        $('#forth').css('display','none');

        var inp = $('#email-283ee467-7098-4b28-954f-b946bec6f2bc').val()

        const address = inp.split('@').pop();
        
        const test = address.split('.');

        $("#company-283ee467-7098-4b28-954f-b946bec6f2bc").attr('value', test[0]);
        $("#company-283ee467-7098-4b28-954f-b946bec6f2bc").attr('placeholder', test[0]);

        var element = document.getElementById("company-283ee467-7098-4b28-954f-b946bec6f2bc");
        var ev = new Event('input', { bubbles: true});
        ev.simulated = true;
        element.value = test[0];
        element.defaultValue = test[0];
        element.dispatchEvent(ev);



    }



});


