    var num2txt = document.querySelector('.num2txt');
   
    var resetButton;
    
    var numberField = document.querySelector('.text2number');
    var numSubmit = document.querySelector('.textSubmit')
var platoonArray = ['ი','ერთ','ორ','სამ','ოთხ','ხუთ','ექვს','შვიდ','რვა','ცხრა','ათ','თერთმეტ','თორმეტ','ცამეტ','თოთხმეტ','თხუთმეტ','თექვსმეტ','ჩვიდმეტ','თვრამეტ','ცხრამეტ'];
var twentyesArray = ['და','მ','ოც','ას','ათას','მილიონ','ტრილიონ'];


    function num2text () {
      var userNumber = Number(numberField.value);
        console.log(userNumber);
        if (userNumber<20) {
          less20new(userNumber);
        }
        else if (userNumber<100) {
          console.log('ამდენი თვლა ჯერ არ ვიცი');
          console.log(userNumber - userNumber % 20);
          less100(userNumber);
        }

    }
    
    numSubmit.addEventListener('click', num2text);

    function less100(num){
      //Todo if (num>99 && num < 20 ) return 1;
      var oc = (num - num % 20)/20;
      console.log(oc); 
    }
    function less20new(num){
        if (num < 20) {
            //Todo აქ უნდა ჩახდეს რვიანზე და ცხრიანზე შემოწმება
            printText(platoonArray[num]+platoonArray[0]);
        } 
    }
    function less20 (num) {
        switch (num) {
            case 1: printText('ერთი');
            break;
            case 2: printText('ორი');
            break;
            case 3: printText('სამი');
            break;
            case 4: printText('ოთხი');
            break;
            case 5: printText('ხუთი');
            break;
            case 6: printText('ექვსი');
            break;
            case 7: printText('შვიდი');
            break;
            case 8: printText('რვა');
            break;
            default:
                printText('აღარ ვიცი მეტი დათვლა')
            

        } 


    }
    
    function printText(textedNum) {
        num2txt.textContent =  textedNum ;
    }

    