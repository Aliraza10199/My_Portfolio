  document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1001' == event.detail.contactFormId ) 
    {

                  var firstname = $("#firstname").val();
                  var lastname = $("#lastname").val();
                  var mobileno = $("#mobile").val();
                  var emailaddress = $("#email").val();
                  var age = $("#age").val();
                  var nationality =  $('input[name=nationality]:checked').val();
                  var language =  $('input[name=language]:checked').val();
                  var education = $("#education :selected").text()
                  var city = $("#city :selected").text()
                  var notes = $("#message").val();
                  var form_type = "Gold's Academy";
                  
                                  $.post('https://ggarabia.com/golds_academy.php' , {firstname:firstname ,lastname:lastname ,
                mobileno:mobileno ,emailaddress:emailaddress ,age:age,
                nationality:nationality ,language:language ,education:education,
                city:city ,notes:notes, form_type:form_type, });
  

    }
    
    
    
 
    
}, false );