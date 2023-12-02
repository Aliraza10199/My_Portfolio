  
      document.addEventListener( 'wpcf7mailsent', function( event ) {
    
 if ( '1488' == event.detail.contactFormId ) 
  {
     
 
    var selected_branch;


if ( $("#branch-f :selected").val() == "" )
{
    selected_branch =  $("#branch-m :selected").val();
}

else if($("#branch-m :selected").val() == "")
{
    selected_branch =  $("#branch-f :selected").val(); 
    
}
                     
                  var form_type = "Complains";
    
                  var firstname = $("#firstname").val();
                  var lastname = $("#lastname").val();
                  var mobileno = $("#mobile").val();
                  var emailaddress = $("#email").val();
                  var gender = $("#gender :selected").val();
                  var branch = selected_branch;
                  var complain = $("#complain :selected").val();
                  var notes = $("#notes").val();
                  


                  


                $.post('https://ggarabia.com/di_cf7.php' , {firstname:firstname, lastname:lastname, mobileno:mobileno , emailaddress:emailaddress, gender:gender, branch:branch, complain:complain, notes:notes, form_type:form_type , stat:'New Complain',call_stat:'Not Contacted',call_stat_ag:'Not Contacted',mark:'branches'});
                $.post('https://ggarabia.com/wp-content/themes/golds_gym/template-parts/email/email_complain.php' , {firstname:firstname, lastname:lastname, mobileno:mobileno , emailaddress:emailaddress, gender:gender, branch:branch, complain:complain, notes:notes, form_type:form_type , stat:'New Complain',call_stat:'Not Contacted',call_stat_ag:'Not Contacted',mark:'branches'});

    }
    
      }, false );
      
    
    
      
      document.addEventListener( 'wpcf7mailsent', function( event ) {
    
  if ( '2517' == event.detail.contactFormId ) 
  {
     

                     
                  var form_type = "Franchise Opportunity";
                  var firstname = $("#firstname").val();
                  var lastname = $("#lastname").val();
                  var mobileno = $("#mobile").val();
                  var emailaddress = $("#email").val();
                  var state = "ddddd";
                  var city = $("#city :selected").val();
                  var net_worth =$("#net_worth :selected").val();
                  var cash = $("#cash :selected").val();
                  var referral = $("#referral :selected").val();
                  var notes = $("#notes").val();
                  var source_type = $('#source_type').val();
                  
                  


                  


                 $.post('https://ggarabia.com/di_cf7.php' , {firstname:firstname, lastname:lastname, mobileno:mobileno , emailaddress:emailaddress , state:state , city:city , net_worth:net_worth ,referral:referral , cash:cash , notes:notes , form_type:form_type });

    }
    
      }, false );
      


    document.addEventListener( 'wpcf7mailsent', function( event ) {
   if ( '376' == event.detail.contactFormId ) 
     {
                
var selected_branch;


if ( $("#branch-f :selected").val() == "" )
{
    selected_branch =  $("#branch-m :selected").val();
}

else if($("#branch-m :selected").val() == "")
{
    selected_branch =  $("#branch-f :selected").val(); 
    
}
                     
                  var form_type = "Contact Us";
    
                  var firstname = $("#firstname").val();
                  var lastname = $("#lastname").val();
                  var mobileno = $("#mobile").val();
                  var emailaddress = $("#email").val();
                  var gender =  $('input[name=gender]:checked').val();
                  var branch = selected_branch;
                  var subject = $("#subject").val();
                  var notes = $("#notes").val();


                  
                
                 $.post('https://ggarabia.com/di_cf7.php' , {firstname:firstname, lastname:lastname, mobileno:mobileno , emailaddress:emailaddress, gender:gender, branch:branch, subject:subject, notes:notes, form_type:form_type });

    }
    
}, false );







  document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1001' == event.detail.contactFormId ) 
    {
        
      var  selected_nationality =  $('input[name=nationality]:checked').val();
      
        if ( $('input[name=nationality]:checked').val() == "Non Saudi" || "غير سعودي")
{
    selected_nationality =  $("#other-nationailty").val();
}



                  var form_type = "Golds Academy";


                  var firstname = $("#firstname").val();
                  var lastname = $("#lastname").val();
                  var mobileno = $("#mobile").val();
                  var emailaddress = $("#email").val();
                  var gender =  $('input[name=gender]:checked').val();
                  var age = $("#age").val();
                  var nationality =  selected_nationality;
                  var language =  $('input[name=lang]:checked').val();
                  var education = $("#education :selected").text();
                  var city = $("#city :selected").text();
                  var notes = $("#notes").val();
                  
                  

  
                 $.post('https://ggarabia.com/di_cf7.php' , {firstname:firstname, lastname:lastname, mobileno:mobileno, emailaddress:emailaddress, gender:gender, age:age, nationality:nationality, language:language, education:education, city:city, notes:notes, form_type:form_type });

    }
    
}, false );



/*

    document.addEventListener( 'wpcf7mailsent', function( event ) {
   if ( '1885' || '1934' == event.detail.contactFormId ) 
     {
         
         
if ( $('#date1').val() !== "" )
{
    var date_s = $('#date1').val();
}

else if ( $('#date2').val() !== "" )
{
    var date_s = $('#date2').val();
}

else if ( $('#date3').val() !== "" )
{
    var date_s = $('#date3').val();
}

else if ( $('#date4').val() !== "" )
{
    var date_s = $('#date4').val();
}





             if ( $('#time1').val() !== "" )
{
    var time_s = $('#time1').val();
}

else if ( $('#time2').val() !== "" )
{
    var time_s = $('#time2').val();
}

else if ( $('#time3').val() !== "" )
{
    var time_s = $('#time3').val();
}

else if ( $('#time4').val() !== "" )
{
    var time_s = $('#time4').val();
}   
                     
                  var form_type = "Jumana";
    
                  var firstname = $('#firstname').val();
                  var lastname = $('#lastname').val();
                  var mobileno = $('#mobile').val();
                  var emailaddress = $("#email").val();
                  var date =  date_s;
                  var branch = $('#branch-f').val();
                  var time = time_s;
                  var notes = $('#notes').val();
                  var source_type = $('#source_type').val();


                  
                
                 $.post('https://ggarabia.com/di_cf7.php' , {firstname:firstname, lastname:lastname, mobileno:mobileno , emailaddress:emailaddress, date:date, time:time, branch:branch, notes:notes, form_type:form_type, source_type:source_type });

    }
    
}, false );
*/