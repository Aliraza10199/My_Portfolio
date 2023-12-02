 
 
 $(document).ready(function() {

    $("#phone").click(function(){
ga('send', 'event', 'phone',  '<?php if (get_bloginfo("language") == "ar") {echo ar;} else {echo en;} ?>');
                count = 0;
                count += 1;
                 var form_type ="click_count"
                 var click_source = "Phone";
                 var count = count;

                 $.post('https://ggarabia.com/di_cf7.php' , {form_type:form_type, click_source:click_source, count:count });

  });
    




 $("#whatsapp").click(function(){
ga('send', 'event', 'whatsapp',  '<?php if (get_bloginfo("language") == "ar") {echo ar;} else {echo en;} ?>');
                 count = 0;
                 count += 1;
                  var form_type ="click_count"
                  var click_source = "Whastapp";
                  var count = count;

                 $.post('https://ggarabia.com/di_cf7.php' , {form_type:form_type, click_source:click_source, count:count });

});

});
