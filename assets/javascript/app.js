



    var number = 5;

        function beginQuiz() {
          intervalId = setInterval(decrement, 1000);
        }
    
        function decrement() {
          number--;
          $("#timer").html("<h2>" + number + "</h2>");
          if (number === 0) {
            stop();
            alert("Time Up!");
          }
        }