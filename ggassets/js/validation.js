
     $(document).ready(function() {
   // some code here



         
        var letters = /^[a-zA-Zء-ي- ]+$/; 
        jQuery( document ).ready(function( $ )
        {
            
            function myValidation() 
            {
                var result = 'true';
                if ($('#firstname').val() == '') 
                    {
                     $("#firstname").css("border", "3px solid #e00000");
                     $("#fname").css("color", "#ff5e5e");
                     document.getElementById("fname").innerHTML = "<?php echo do_shortcode([:en]Thank you for your message. It has been sent.[:][:ar]شكرا، تم ارسال الاشتراك[:]) ?>";
               
                     
                      result = 'false';
                    }
                    
                    else
                    {
                    $("#firstname").css("border", "0px solid #e00000");
                    document.getElementById("fname").innerHTML = "";
          
                   
                    }
                 
                 if (!letters.test($('#firstname').val()) && !null) {
                     $("#firstname").css("border", "3px solid #e00000");
                     $("#fname2").css("color", "#ff5e5e");
                    
                     document.getElementById("fname2").innerHTML = "Please Enter Alphabets Only <br> ادخل حروف فقط";
              
                     
                     result = 'false';
                      }
           
                else
                {
                    $("#firstname").css("border", "0px solid #e00000");
                    document.getElementById("fname2").innerHTML = "";
                  
                
                }
                
                if (letters.test($('#firstname').val()) && !null) 
                {
                     $("#firstname").css("border", "3px solid #9bec9c");
                    
                }
                
          

                /**---------------------------------------------------------**/
            
                if ($('#lastname').val() == '') {
                     $("#lastname").css("border", "3px solid #e00000");
                     $("#lname").css("color", "#ff5e5e");
                     document.getElementById("lname").innerHTML = "Please Enter Your Last Name <br> ادخل اسمك الاخير";
                
                     
                      result = 'false';
                    } else{
                    $("#lastname").css("border", "0px solid #e00000");
                    document.getElementById("lname").innerHTML = "";
                   
                }
                 
                if (!letters.test($('#lastname').val()) && !null) {
                     $("#lastname").css("border", "3px solid #e00000");
                     $("#lname2").css("color", "#ff5e5e");
                     document.getElementById("lname2").innerHTML = "Please Enter Alphabets Only <br> ادخل حروف فقط"
              
                     
                      result = 'false';
                }
           
                else{
                    $("#lastname").css("border", "0px solid #e00000");
                    document.getElementById("lname2").innerHTML = "";
        
                }
                
                       if (letters.test($('#lastname').val()) && !null) 
                {
                     $("#lastname").css("border", "3px solid #9bec9c");
                   
                }
                
                
                /**---------------------------------------------------------**/
                
        
                var no = /^(((0)(5))[0-9]{8})$/;

                if ($('#mobileno').val() == '' ) {
                      $("#mobileno").css("border", "3px solid #e00000");
                      $("#mobile").css("color", "#ff5e5e");
                       document.getElementById("mobile").innerHTML = "Please Enter Your Mobile Number <br> ادخل رقم الجوال";
                    result = 'false';
                }else{
                    $("#mobileno").css("border", "0px solid #e00000");
                    document.getElementById("mobile").innerHTML = "";
             
             
                }
                
                 if (!no.test($('#mobileno').val()) && !null ) {
                      $("#mobileno").css("border", "3px solid #e00000");
                      $("#mobilev").css("color", "#ff5e5e");
                     document.getElementById("mobilev").innerHTML =  "Please Enter A valid Mobile Number number starts with 05 <br> ادخل رقم جوال صحيح يبدا الجوال ب 05"
                    
                    result = 'false';
                                                                }
                else
                {
                    $("#mobileno").css("border", "0px solid #e00000");
                    document.getElementById("mobilev").innerHTML = "";

                }
                
                  if (no.test($('#mobileno').val()) && !null ) 
                  {
                      
                       $("#mobileno").css("border", "3px solid #9bec9c");
                      
                  }
                
                
                /**---------------------------------------------------------**/
                
             var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
             
             
                if ($('#email').val() == '' || !re.test($('#email').val())) 
                {
                     $("#email").css("border", "3px solid #e00000");
                     $("#emailv1").css("color", "#ff5e5e");
                       document.getElementById("emailv1").innerHTML = "Please Enter A Valid Email Address <br> ادخل بريد الكتروني صحيح";
                   
                       
                    result = 'false';
                }
                else
                {
                    $("#email").css("border", "0px solid #e00000");
                    document.getElementById("emailv1").innerHTML = "";
                }
                    
                    
                    
                     if ($('#email').val() != '' || re.test($('#email').val())) 
                     {
                         
                         $("#email").css("border", "3px solid #9bec9c");
                         
                     }
                    
                    
                /**---------------------------------------------------------**/
     
                
                if ($('#branch').val() == "") 
                {
                      $(".select2").css("border", "3px solid #e00000");
                      $("#branchv").css("color", "#ff5e5e");
                        document.getElementById("branchv").innerHTML = "Please Select Your Branch <br> اختر الفرع";
                 
                    result = 'false';
                }
                
                else
                {
                    
                $(".select2").css("border", "0px solid #e00000");
                document.getElementById("branchv").innerHTML = "";
                
                }
                
                if ($('#branch').val() !="") 
                {
                    
                $(".select2").css("border", "3px solid #9bec9c");
                    
                }
                
    
                return result;
                
                
            }
            
     
                
                function removeleadingzero(mobile){
                    return mobile.replace(/^0+/, '');
                }
            
            
            
            
             function close() {
                document.getElementById("pop").style.display = "none";
                document.getElementByClassName("overlay").style.display = "none";
                
            }
            
 
            /**---------------------------------------------------------**/
            
              // Validation check
            $("#send").click(function (e) {
                var validation=myValidation();
     
                if ( validation== 'true') {
                    var mobileNo=removeleadingzero($("#mobileno").val());
                    var data = JSON.stringify({
                        "authenticationkey": $('#branch').val(),
                        "firstname": $("#firstname").val(),
                        "middlename": $("#middlename").val(),
                        "lastname": $("#lastname").val(),
                        "mobileno": mobileNo,
                        "emailaddress": $("#email").val(),
                        "location": "",
                        "enquirytype": "<?php the_field('source_type') ?>",
                        "enquirysource": "<?php the_field('type') ?>",
                        "serviceinterestedin": "",
                        "comment": $("#comment").val()
                    });

                    
                    // Insert into mysql database
                  var firstname = $("#firstname").val();
                  var middlename = $("#middlename").val();
                  var lastname = $("#lastname").val();
                  var mobileno = mobileNo;
                  var emailaddress = $("#email").val();
                  var location = $("#branch :selected").text();
                  var enquirytype = "";
                  var enquirysource = "xxx";
                  var serviceinterestedin = "";
                  var comment = $("#comment").val();
                  var authenticationkey = $("#branch").val();
                 
                  
             
                  var errorcode=null;
                  var msg=null;
           

                  var xhr = new XMLHttpRequest();

                    xhr.addEventListener("readystatechange", function () 
                    {
                        if(this.readyState === 4) {
                            var jsonResponse = JSON.parse(this.responseText);
                            var mystatus=null;
                            
                            if(jsonResponse.hasOwnProperty('success')) 
                            {
                                mystatus = 'success';
                            }
                            if(jsonResponse.hasOwnProperty('error')) 
                            {
                                mystatus = 'error';
                                var err_res= jsonResponse['error'][0];
                                errorcode=err_res.fferrorcode;
                                msg= err_res.message;
                            }
                              
                $.post('https://ggarabia.com/datainsert.php' , {firstname:firstname, middlename:middlename,lastname:lastname ,
                mobileno:mobileno ,emailaddress:emailaddress ,location:location,
                enquirytype:enquirytype ,enquirysource:enquirysource ,serviceinterestedin:serviceinterestedin,
                comment:comment ,authenticationkey:authenticationkey,ffres:mystatus, errorcode:errorcode, msg:msg });

                            
               
                            
                        if(mystatus == 'success')
                        { 
                    
                        } 

                            else 
                                {
                                    document.getElementById("poperror").style.display = "block";
                                    document.getElementById("olay").style.display = "block";
                                }
   
            }
                        

                        
                     });
                    
                    xhr.open("POST", "https://lead.cmsggarabia.com/api/prospect");
                    xhr.setRequestHeader("content-type", "application/json");
                    xhr.setRequestHeader("cache-control", "no-cache");
                    xhr.setRequestHeader("postman-token", "16e699a7-159a-0d7f-3f36-24b55d7dc9f4");
                    xhr.send(data); 
                    
                    
                        }
            }); 
        });
        
     });
    