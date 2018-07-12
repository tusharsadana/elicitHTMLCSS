$( document ).ready(function() {



  $(document).on('change','#event_name',function(){
      if(!$('#gamers_choice_div').hasClass('d-none')){
        $('#gamers_choice_div').addClass('d-none');
      }
      if(!$('#team_size_overall_div').hasClass('d-none')){
        $('#team_size_overall_div').addClass('d-none');
      }
      if(!$('#team_size_other_div').hasClass('d-none')){
        $('#team_size_other_div').addClass('d-none');
      }
      if(!$('#team0').hasClass('d-none')){
        $('#team0').addClass('d-none');
      }
      if(!$('#team1').hasClass('d-none')){
        $('#team1').addClass('d-none');
      }
      if(!$('#team2').hasClass('d-none')){
        $('#team2').addClass('d-none');
      }
      if(!$('#team3').hasClass('d-none')){
        $('#team3').addClass('d-none');
      }
      if(!$('#show_fee').hasClass('d-none')){
        $('#show_fee').addClass('d-none');
      }
      var event_name = document.getElementById('event_name').value;
      if(event_name == "hackathon")
      {

        var hack_fee = 100;
        var team_size_overall_div = document.getElementById('team_size_overall_div');
        team_size_overall_div.classList.remove("d-none");
          $(document).on('change','#team_size_overall',function(){
            var number = parseInt( document.getElementById('team_size_overall').value);
            var count;
            for(count = 0; count < number; count++){
              var team_data = document.getElementById('team'+String(count));
              team_data.classList.remove("d-none");

            }
            var fee_column = document.getElementById('readOnlyInput');
            var total_fee = hack_fee * (number+1);
            $("#readOnlyInput").val(String(total_fee));
            var showFee = document.getElementById('show_fee');
            showFee.classList.remove("d-none");
          });
         }
         else if(event_name == "codeathon"){

           var hack_fee = 100;
           var team_size_other_div = document.getElementById('team_size_other_div');
           team_size_other_div.classList.remove("d-none");
             $(document).on('change','#team_size_other',function(){
               var number = parseInt( document.getElementById('team_size_other').value);
               var count;
               for(count = 0; count < number; count++){
                 var team_data = document.getElementById('team'+String(count));
                 team_data.classList.remove("d-none");

               }
               var fee_column = document.getElementById('readOnlyInput');
               var total_fee = 150;
               $("#readOnlyInput").val(String(total_fee));
               var showFee = document.getElementById('show_fee');
               showFee.classList.remove("d-none");
                });
         }
         else if(event_name == "findmucked"){
           var fee_column = document.getElementById('readOnlyInput');
           var total_fee = 0;
           $("#readOnlyInput").val(String(total_fee));
           var showFee = document.getElementById('show_fee');
           showFee.classList.remove("d-none");

         }
         else if( event_name == "junkyard"){
           var hack_fee = 100;
           var team_size_other_div = document.getElementById('team_size_other_div');
           team_size_other_div.classList.remove("d-none");
             $(document).on('change','#team_size_other',function(){
               var number = parseInt( document.getElementById('team_size_other').value);
               var count;
               for(count = 0; count < number; count++){
                 var team_data = document.getElementById('team'+String(count));
                 team_data.classList.remove("d-none");

               }
               var fee_column = document.getElementById('readOnlyInput');
               var total_fee = 150;
               $("#readOnlyInput").val(String(total_fee));
               var showFee = document.getElementById('show_fee');
               showFee.classList.remove("d-none");
                });
         }
         else if(event_name == "techquiz"){
           var hack_fee = 100;
           var team_size_other_div = document.getElementById('team_size_other_div');
           team_size_other_div.classList.remove("d-none");
             $(document).on('change','#team_size_other',function(){
               var number = parseInt( document.getElementById('team_size_other').value);
               var count;
               for(count = 0; count < number; count++){
                 var team_data = document.getElementById('team'+String(count));
                 team_data.classList.remove("d-none");

               }
               var fee_column = document.getElementById('readOnlyInput');
               var total_fee = 100;
               $("#readOnlyInput").val(String(total_fee));
               var showFee = document.getElementById('show_fee');
               showFee.classList.remove("d-none");
                });

         }
         else if(event_name == "popquiz"){
           var hack_fee = 100;
           var team_size_other_div = document.getElementById('team_size_other_div');
           team_size_other_div.classList.remove("d-none");
             $(document).on('change','#team_size_other',function(){
               var number = parseInt( document.getElementById('team_size_other').value);
               var count;
               for(count = 0; count < number; count++){
                 var team_data = document.getElementById('team'+String(count));
                 team_data.classList.remove("d-none");

               }
               var fee_column = document.getElementById('readOnlyInput');
               var total_fee = 100;
               $("#readOnlyInput").val(String(total_fee));
               var showFee = document.getElementById('show_fee');
               showFee.classList.remove("d-none");
                });

         }
         else if(event_name == "gamers"){
           var gamers_choice_div  = document.getElementById('gamers_choice_div');
           gamers_choice_div.classList.remove('d-none');
           $(document).on('change','#gamers_choice',function(){
             var game =  document.getElementById('gamers_choice').value;
             if(game == "fifa"){
               if(!$('#team0').hasClass('d-none')){
                 $('#team0').addClass('d-none');
               }
               if(!$('#team1').hasClass('d-none')){
                 $('#team1').addClass('d-none');
               }
               if(!$('#team2').hasClass('d-none')){
                 $('#team2').addClass('d-none');
               }
               if(!$('#team3').hasClass('d-none')){
                 $('#team3').addClass('d-none');
               }
               if(!$('#show_fee').hasClass('d-none')){
                 $('#show_fee').addClass('d-none');
               }

                 var fee_column = document.getElementById('readOnlyInput');
                 var total_fee = 100;
                 $("#readOnlyInput").val(String(total_fee));
                 var showFee = document.getElementById('show_fee');
                 showFee.classList.remove("d-none");


             }
             else if(game == "rainbow"){
               if(!$('#team0').hasClass('d-none')){
                 $('#team0').addClass('d-none');
               }
               if(!$('#team1').hasClass('d-none')){
                 $('#team1').addClass('d-none');
               }
               if(!$('#team2').hasClass('d-none')){
                 $('#team2').addClass('d-none');
               }
               if(!$('#team3').hasClass('d-none')){
                 $('#team3').addClass('d-none');
               }
               if(!$('#show_fee').hasClass('d-none')){
                 $('#show_fee').addClass('d-none');
               }
               for(count = 0; count < 4; count++){
                 var team_data = document.getElementById('team'+String(count));
                 team_data.classList.remove("d-none");

               }

               var fee_column = document.getElementById('readOnlyInput');
               var total_fee = 200;
               $("#readOnlyInput").val(String(total_fee));
               var showFee = document.getElementById('show_fee');
               showFee.classList.remove("d-none");

             }

             else if(game == "Cs"){
               if(!$('#team0').hasClass('d-none')){
                 $('#team0').addClass('d-none');
               }
               if(!$('#team1').hasClass('d-none')){
                 $('#team1').addClass('d-none');
               }
               if(!$('#team2').hasClass('d-none')){
                 $('#team2').addClass('d-none');
               }
               if(!$('#team3').hasClass('d-none')){
                 $('#team3').addClass('d-none');
               }
               if(!$('#show_fee').hasClass('d-none')){
                 $('#show_fee').addClass('d-none');
               }
               for(count = 0; count < 4; count++){
                 var team_data = document.getElementById('team'+String(count));
                 team_data.classList.remove("d-none");

               }
               var fee_column = document.getElementById('readOnlyInput');
               var total_fee = 200;
               $("#readOnlyInput").val(String(total_fee));
               var showFee = document.getElementById('show_fee');
               showFee.classList.remove("d-none");
             }
             else if(game == "rr"){
               if(!$('#team0').hasClass('d-none')){
                 $('#team0').addClass('d-none');
               }
               if(!$('#team1').hasClass('d-none')){
                 $('#team1').addClass('d-none');
               }
               if(!$('#team2').hasClass('d-none')){
                 $('#team2').addClass('d-none');
               }
               if(!$('#team3').hasClass('d-none')){
                 $('#team3').addClass('d-none');
               }
               if(!$('#show_fee').hasClass('d-none')){
                 $('#show_fee').addClass('d-none');
               }

               var fee_column = document.getElementById('readOnlyInput');
               var total_fee = 50;
               $("#readOnlyInput").val(String(total_fee));
               var showFee = document.getElementById('show_fee');
               showFee.classList.remove("d-none");
             }
              });


         }



});
});
