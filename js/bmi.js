
function calculate(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    
    let bmiValue = weight/Math.pow(height,2);
    document.getElementById("result").value = bmiValue.toFixed(3);
    console.log(height)
    
    if(bmiValue>0 && bmiValue<18.5){
        document.getElementById("details").textContent="You are underweight"
    }else if(bmiValue>=18.5 && bmiValue<=24.9){
        document.getElementById("details").textContent="Healthy weight"
    }else if(bmiValue>=25 && bmiValue<=29.9){
        document.getElementById("details").textContent="You are Overweight"
    }else if(bmiValue>30){
        document.getElementById("details").textContent="You are obese"
    }else if(height.length<3){
        document.getElementById("alert1").classList.remove("alert1")
    }
   
    }

  


  function calculateBmi(){
    let feet = parseInt((document.getElementById("feet").value));
    console.log(feet)
    let inch = parseInt((document.getElementById("inch").value));
    let lbs = document.getElementById("lbs").value;

    feet *= 12;
    feet += inch;

     let bmiValue1 = (lbs/Math.pow(feet,2))*703;
     document.getElementById("result1").value = bmiValue1.toFixed(3);
     if(bmiValue1>0 && bmiValue1<18.5){
         document.getElementById("details1").innerHTML="You are underweight"
     }else if(bmiValue1>=18.5 && bmiValue1<=24.9){
         document.getElementById("details1").innerHTML="Healthy weight"
     }else if(bmiValue1>=25 && bmiValue1<=29.9){
         document.getElementById("details1").innerHTML="You are Overweight"
     }
  }