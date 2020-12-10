  function calc(){
     var value1 = parseFloat(document.getElementById("value1").value);
     var value2 = parseFloat(document.getElementById("value2").value);
     var operation = document.getElementsByName("operator");
     if(operation[0].checked){
       document.getElementById('operation').value = "+"
       document.getElementById('result').value = value1+value2;
     }else
     if(operation[1].checked){
       document.getElementById('operation').value = "-"
       document.getElementById('result').value = value1-value2;
     }else
     if(operation[2].checked){
       document.getElementById('operation').value = "*"
       document.getElementById('result').value = value1*value2;
     }else
     if(operation[3].checked && value2 == 0){
       alert("Value2 Error! Cannot Divide by Zero!!");}
       else{
         document.getElementById('operation').value = "/"
         document.getElementById('result').value = value1/value2;
       }
       return false;
  }