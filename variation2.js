//jQuery 3.5 update
// javascript:if(!window.jQuery||confirm('Overwrite\x20current\x20version '+ jQuery.fn.jquery +' with v3.5.1?\x20'))(function(d){s=d.createElement('script');s.src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';(d.head || d.documentElement).appendChild(s)})(document); 


//hide the form fields to split up into steps
$('.hs_firstname').css('display', 'none');
$('.hs_lastname').css('display', 'none');
$('.hs_company').css('display', 'none');
$('.hs_submit').css('display', 'none');
$('.hs_how_can_we_help_').css('display', 'none');


//create current step indicators and set first indicator to on
$('.hbspt-form').append(`<span id='first' class="indicators">1</span><span id="second" class="indicators">2</span><span id="third" class="indicators">3</span>`);

$('.indicators').css({'height':'50px', 'width':'50px', 'line-height':'45px','text-align':'center', 'background-color':'white', 'border-radius':'50%', 'border':'1px solid black', 'display':'inline-block', 'margin':'1%', 'color':'grey', 'margin-bottom':'20px'});

$('#first').css({'background-color':'#4ecdbd','color':'white'});

//create next step button and style
$('.hbspt-form').append('<div id="next-btn">Next Step</div>')

$('#next-btn').css({'height':'50px','width':'200px','color':'white','line-height':'50px','background-color':'#1e77cc','font-size':'15px','border':'2px solid #182b52','text-align':'center','border-radius':'5px'});


//prevent enter submit on email

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        e.preventDefault();
        console.log('clicked enter inital')
        $('.hs_error_rollup').css('display','none').delay(200);


    //if the user presses enter and have entered a valid email advance to next step
    //second step from email to name
    if($('.hs_email').css('display')==='block' && $('.hs_firstname').css('display')==='none' && $('.hs_lastname').css('display')==='none' && $('.hs_company').css('display')==='none' && $('.hs-input[name=email]').val()!='' && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test($('.hs-input[name=email]').val())){

        //animate in first name and last name and advance indicator
        $( ".hs_firstname" ).slideDown( 300 ).fadeIn( 400 );
        $( ".hs_lastname" ).slideDown( 300 ).fadeIn( 400 );
        $('#second').css({'background-color':'#4ecdbd','color':'white'});

        //focus on first name input after animation
        setTimeout(function() { $('input[name="firstname"]').focus() }, 710);

    }
    }
});

//if the user auto fills from browser email
$('.hs-input[name=email]').change(function(){
    
        //if the user uses the browsers auto complete and have entered a valid email advance to next step
    //second step from email to name
    if($('.hs_email').css('display')==='block' && $('.hs_firstname').css('display')==='none' && $('.hs_lastname').css('display')==='none' && $('.hs_company').css('display')==='none' && $('.hs-input[name=email]').val()!='' && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test($('.hs-input[name=email]').val())){

        //animate in first name and last name and advance indicator
        $( ".hs_firstname" ).slideDown( 300 ).fadeIn( 400 );
        $( ".hs_lastname" ).slideDown( 300 ).fadeIn( 400 );
        $('#second').css({'background-color':'#4ecdbd','color':'white'});

        //focus on first name input after animation
        setTimeout(function() { $('input[name="firstname"]').focus() }, 710);

    }

});

//advance form on click
$('#next-btn').on('click',  function() {

    //second step from email to first and last name
    if($('.hs_email').css('display')==='block' && $('.hs_firstname').css('display')==='none' && $('.hs_lastname').css('display')==='none' && $('.hs_company').css('display')==='none' && $('.hs-input[name=email]').val()!='' && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test($('.hs-input[name=email]').val())){


        //prevent enter submit
        $(document).on('keypress',function(e) {
            if(e.which == 13) {
                e.preventDefault();
                console.log('clicked enter second step')
                $('.hs_error_rollup').css('display','none').delay(200);
            }
        });

        //animate in first name and last name and advance indicator
        $( ".hs_firstname" ).slideDown( 300 ).fadeIn( 400 ).focus();
        $( ".hs_lastname" ).slideDown( 300 ).fadeIn( 400 );
        $('#second').css({'background-color':'#4ecdbd','color':'white'});

        //focus on first name input after animation
        setTimeout(function() { $('input[name="firstname"]').focus() }, 710);





    }
    
    //third step from first and last name to company
    if ($('.hs_email').css('display')==='block' && $('.hs_firstname').css('display')==='block' && $('.hs_lastname').css('display')==='block' && $('.hs_company').css('display')==='none' && $('.hs-input[name=firstname]').val()!=''){

        //animate in company field
        $( ".hs_company" ).slideDown( 300 ).fadeIn( 400 );

        //get user input from email input
        var inp = $('.hs-input[name=email]').val()

        //remove everything before the @
        const address = inp.split('@').pop();
        
        //remove everything after the .
        const test = address.split('.')

        //set the values to the html
        $(".hs-input[name=company]").attr('value', test[0]);
        $(".hs-input[name=company]").attr('placeholder', test[0]);
        $(".hs-input[name=company]").css('text-transform', 'capitalize');



   
        //set the values to the react function, TO DO replace with jQuery .trigger after you what to trigger and how to access the react events on the form
        var element = $(".hs-input[name=company]")[0];
        var ev = new Event('input', { bubbles: true});
        ev.simulated = true;
        element.value = test[0];
        element.defaultValue = test[0];
        element.dispatchEvent(ev);

        //increment indicator and change button text
        $('#third').css({'background-color':'#4ecdbd','color':'white'});
        $('#next-btn').text('Final Step');

        //focus on company input after animation
        setTimeout(function() { $('input[name="company"]').focus() }, 710);
            
    //final step to from company to how can we help review and submit
    }else if ( $('.hs_company').css('display')==='block' && $( ".hs_how_can_we_help_" ).css('display')==='none'){
        console

        //remove the incremental steps
        $('#next-btn').css('display','none')
        $('.indicators').css('display','none');
        $( ".hs_how_can_we_help_" ).slideDown( 300 ).fadeIn( 400 );
        $( ".hs_submit" ).slideDown( 300 ).fadeIn( 400 );

        //focus on how can we help input after animation
        setTimeout(function() { $('input[name="how_can_we_help_"]').focus() }, 710);
    }



});