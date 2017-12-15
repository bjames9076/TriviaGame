


    //set time to 45 seconds
    var number = 5;

    var countRight = 0;
    var countWrong = 0;
    var quest1;
    var quest2;
    var quest3;
    var quest4;

      //countdown and display time left
        function beginQuiz() {
          intervalId = setInterval(decrement, 1000);
        }
    
        function decrement() {
          number--;
          $("#timer").html("<h2>" + number + "</h2>");
          if (number === 0) {
            clearInterval(intervalId);
            gradeQuiz();
          }
        }

        function question1(answer){
          quest1 = answer;
          if(quest1 === "a"){
            countRight++;
          }
          else{
            countWrong++;
          }
        }
      
        function question2(answer){
          quest2 = answer;
          if(quest1 === "b"){
            countRight++;
          }
          else{
            countWrong++;
          }
        }

        function question3(answer){
          quest3 = answer;
          if(quest1 === "c"){
            countRight++;
          }
          else{
            countWrong++;
          }
        }

        function question4(answer){
          quest4 = answer;
          if(quest1 === "a"){
            countRight++;
          }
          else{
            countWrong++;
          }
        }

      //grade quiz once time reaches 0
      function gradeQuiz(){
        alert(countRight);
        alert(countWrong);


      }

      