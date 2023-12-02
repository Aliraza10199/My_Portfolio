
    
    	$(function() {

			$("#submit").click(function() {  //this event for clik
					var user=$("input[name=user]").val(); //get value by name input type text
					var pass=$("input[name=pass]").val(); //get value by name input type text
			
					
	        if(user.toLowerCase()=="samba"  && pass=="sc@40")
					{
            		 if ( document.documentElement.lang.toLowerCase() === "en-us" )  { msg = "Success";}
                else if( document.documentElement.lang.toLowerCase() === "ar" ) { msg = "  تم التسجيل    ";}
                                    $("#err_msg").html(msg);
            			 window.location.href = 'https://shop.ggarabia.com/product/sambacap/';
					    
					}
					
					
				 if(user.toLowerCase()=="royal"  && pass=="RG40")
					{
            		 if ( document.documentElement.lang.toLowerCase() === "en-us" )  { msg = "Success";}
                else if( document.documentElement.lang.toLowerCase() === "ar" ) { msg = "  تم التسجيل    ";}
                                    $("#err_msg").html(msg);
            			 window.location.href = 'https://shop.ggarabia.com/ar/product/srg/';
					    
					}

					else
					{
					    
		 if ( document.documentElement.lang.toLowerCase() === "en-us" )  { msg = "Wrong Username Or Password";}
    else if( document.documentElement.lang.toLowerCase() === "ar" ) { msg = "اسم المتسخدم او الرقم السري غير صحيح";}
					    $("#err_msg").html(msg);
					    
					}
			});


			});
    
