  document.addEventListener( 'wpcf7mailsent', function( event ) {
if ( '376' == event.detail.contactFormId ) 
     {
                
                  var branch_fe;
    
                      if($("#branch-m :selected").text() == 'فروع الرجال' || $("#branch-m :selected").text() == 'Male Branches' )
                      {
                      $branch_fe == $("#branch-f :selected").text()
                      }
                      
                      else if ($("#branch-m :selected").text() == 'فروع النساء' || $("#branch-m :selected").text() == 'Female Branches')
                      {
                      $branch_fe == $("#branch-m :selected").text()
                      }
                      
               
                     
      
    
                  var firstname = $("#firstname").val();
                  var lastname = $("#lastname").val();
                  var mobileno = $("#mobile").val();
                  var emailaddress = $("#email").val();
                  var gender =  $('input[name=gender]:checked').val();
                  var branch =  branch_fe;
                  var subject = $("#subject").val();
                  var notes = $("#notes").val();
                  var form_type = "Contact Us";
                  
                  
                
                 $.post('https://ggarabia.com/data_insertion/contact_us.php' , {firstname:firstname, lastname:lastname, mobileno:mobileno ,emailaddress:emailaddress, gender:gender, branch:branch, subject:subject, notes:notes, form_type:form_type });

    }
    
}, false );