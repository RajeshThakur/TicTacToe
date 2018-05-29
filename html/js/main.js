
    // style="background: #eee url(images/delete-sign.png) no-repeat; "
    jQuery(document).ready(function(){

       var current = true;   //if true then X , for false its 0
       var resultArr = []; 

       var x = 0;
       var o = 0;
       var t = 0;

       var allCell = $('#cell span');     

       var btnStart = $('start');

       $.each( allCell , (i,e)=>{

            var span = $(e);

            span.on('click',()=>{

                 if(current == true){

                      span.attr('data-status', true);
                      span.css("background", "#eee url(images/cross.png) no-repeat");
                      
                 }

                 if(current == false){

                      span.attr('data-status', false);
                      span.css("background", "#eee url(images/circle.png) no-repeat");                     
                 }


                 if(current == true) current = false;
                 else current = true;    
                  
                 var resultSet = checkStatus(); 

                 //0,1,2
                 if ( resultSet[0] ==  resultSet[1] && resultSet[1] == resultSet[2]){                    
                    if(resultSet[0] == "true")confirm('X wins');
                    if(resultSet[0] == "false")confirm('O wins');

                    resetGame(resultSet[0]);
                 }
                 //3,4,5
                 if ( resultSet[3] ==  resultSet[4] && resultSet[4] == resultSet[5]){
                    if(resultSet[3] == "true")alert('X wins');
                    if(resultSet[3] == "false")alert('O wins');

                    resetGame(resultSet[3]);
                 }
                 //6,7,8
                 if ( resultSet[6] ==  resultSet[7] && resultSet[7] == resultSet[8]){
                    if(resultSet[6] == "true")alert('X wins');
                    if(resultSet[6] == "false")alert('O wins');

                    resetGame(resultSet[6]);
                 }

                 //0,3,6
                 if ( resultSet[0] ==  resultSet[3] && resultSet[3] == resultSet[6]){
                    if(resultSet[0] == "true")alert('X wins');
                    if(resultSet[0] == "false")alert('O wins');

                    resetGame(resultSet[0]);
                 }

                 //1,4,7
                 if ( resultSet[1] ==  resultSet[4] && resultSet[4] == resultSet[7]){
                    if(resultSet[1] == "true")alert('X wins');
                    if(resultSet[1] == "false")alert('O wins');

                    resetGame(resultSet[1]);
                 }

                 //2,5,8
                 if ( resultSet[2] ==  resultSet[5] && resultSet[5] == resultSet[8]){
                    if(resultSet[2] == "true")alert('X wins');
                    if(resultSet[2] == "false")alert('O wins');

                    resetGame();
                 }
                 //0,4,8
                 if ( resultSet[0] ==  resultSet[4] && resultSet[4] == resultSet[8]){
                    if(resultSet[0] == "true")alert('X wins');
                    if(resultSet[0] == "false")alert('O wins');

                    resetGame(resultSet[0]);
                 }
                 //2,4,6
                 if ( resultSet[2] ==  resultSet[4] && resultSet[4] == resultSet[6]){
                    if(resultSet[2] == "true")alert('X wins');
                    if(resultSet[2] == "false")alert('O wins');

                    resetGame(resultSet[2]);
                 }

                 var count = 0;
                 $.each( allCell , (index,element)=>{

                     if( $(element).attr('data-status') == 'true' || $(element).attr('data-status') == 'false'){

                        count = count + 1;
                     }

                     // console.log($(element).attr('data-status'));
                     // console.log(count);

                     if(count == 9){

                        alert('its a tie');

                        resetGame();

                        return false;
                     }

                });   
                
            });            
          
       });

       function checkStatus(){
          $.each(allCell,(i,e)=>{    
              resultArr[i] = $(e).attr('data-status');
          });
          return resultArr;
       } 

       function resetGame( winner = ""){

          $.each(allCell,(i,e)=>{    
              $(e).attr('data-status', Math.random());
              $(e).removeAttr('style');
          });

          if( winner == 'true'){
              x = x+1;
              $('#x').text(x);
          }

          if( winner == 'false'){
            o = o+1;
            $('#o').text(o);
          } 

          if( winner == '') {
            t = t+1;
            $('#t').text(t);
          }
          
          current = true;

       }


       $('#reset').click(()=>{
          resetGame();
       })
       
    
    });
 