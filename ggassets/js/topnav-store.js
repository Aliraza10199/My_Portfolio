$(document).ready(function(){   
	    
//$('.rum_sst_left').css('transform','rotate(0deg');
//setTimeout(function(){ $('.rum_sst_left').css('transform','rotate(270deg'); },20000);
//setTimeout(function(){ $('.rum_sst_left').css('transform','rotate(0deg'); },10000);


function ani() {
          $('#rum_sst_tab').animate({'bottom':'-120px'},6000).animate({'bottom':'-120px'},100, ani); //call the function again in the callback
               }
  
ani();


if ($("html:lang(ar)"))
{

  $("#logo-c").attr("src","https://www.ggarabia.com/wp-content/uploads/2019/04/unnamed.png");
}
else
{
  $("#logo-c").attr("src","https://www.ggarabia.com/wp-content/uploads/2019/04/golds_gym_ar.png");
}


 $(".fh5co-nav .top-menu").css
            ({
                "background-color" : "#fff",
                "border-bottom" : "solid 1px",
                "box-shadow" : "0 0 1rem 0 #444"
            });
                 
                    
                     $(".fh5co-nav ul li a").css('color', '#000');
                     $('#logo').attr('src','https://www.ggarabia.com/wp-content/uploads/2019/04/logo-gray.png');
                     $( ".fh5co-nav-white" ).removeClass( "fh5co-nav-white" ).addClass( "fh5co-nav-black" );
            
            
            

            
            function myFunction(x) {
  if (x.matches) { 
   $( "#logo1" ).removeClass( "col-xs-push-1" );
  
  
  
    $('#logo').attr('src','https://www.ggarabia.com/wp-content/uploads/2019/04/logo-gray.png');
    $( ".fh5co-nav-toggle" ).removeClass( "fh5co-nav-white" ).addClass( "fh5co-nav-black" );
  
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos = 1) {
                    $(".fh5co-nav .top-menu").css('background-color', '#fff');
                    $(".fh5co-nav .top-menu").css('border-bottom', 'solid 1px');
                   
                    
                     $(".fh5co-nav ul li a").css('color', '#000');
                     $('#logo').attr('src','https://www.ggarabia.com/wp-content/uploads/2019/04/logo-gray.png');
                     $( ".fh5co-nav-toggle" ).removeClass( "fh5co-nav-white" ).addClass( "fh5co-nav-black" );

                     } 
                else {
                 $(".fh5co-nav .top-menu").css('background-color', '#fff');
                 $(".fh5co-nav .top-menu").css('border-bottom', 'none');
                 $(".fh5co-nav ul li a").css('color', '#fff');
                    $('#logo').attr('src','https://www.ggarabia.com/wp-content/uploads/2019/04/logo-gray.png');
                    $( ".fh5co-nav-toggle" ).removeClass( "fh5co-nav-white" ).addClass( "fh5co-nav-black" );
                
                
                    
           
                }
            });
  } 
  
  else{
      
       $( "#logo1" ).addClass( "col-xs-push-1" );
      
      }

}

var x = window.matchMedia("(max-width: 1300px)");
myFunction(x)
x.addListener(myFunction) 
            
});
        

        
        
       

