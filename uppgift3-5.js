
  

    function randomDice(){
        
        let randomArray = new Array(1000); // Skapat array som har 1000 utrymmet
    
        for(let i= 0; i < randomArray.length; i++) // 1000 gånger slumpar tal mellan 1 och 6
        {
            randomArray[i] = Math.floor(Math.random()*6)+1;                                                
        }
        
        return randomArray;
       
    
    }
    randomDice();
    
    console.log('------------Frekvenstabell---------------');
    
    function print(){ 
        
        let randomArray = randomDice(); // Anrop randomArray från randomDice()

        // Skapat randomPrint object för att lagra frekvenstabell
        // randomPrint objekt som innehåller 6 olika egenskaper. 
        //Dessutom har jag skapat en metoden som kan skriva ut resultatet
        let randomPrint = {   
             one   : 0, 
             two   : 0,
             three : 0,
             four  : 0,
             five  : 0,
             six   : 0,
             printout : function(){
                 return `1:${this.one}\n2:${this.two}\n3:${this.three}\n4:${this.four}\n5:${this.five}\n6:${this.six}\n`;
             }
        };
       
        // Medan loopar räknar det hur många av varje siffrorna som finns i randomArray
       for(let i = 0; i < randomArray.length; i++){  
           switch(randomArray[i]){ 

            case 1: randomPrint.one++; break;
            case 2: randomPrint.two++; break;
            case 3: randomPrint.three++; break;
            case 4: randomPrint.four++; break;
            case 5: randomPrint.five++; break;
            case 6: randomPrint.six++; break;

            }
            
        }
        
        console.log(randomPrint.printout());
    }
    print();
    
    
    