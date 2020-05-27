function convert_to_binary(){
  let decimal = document.getElementById("from").value;
  let binary = Number(decimal).toString(2);
  console.log(binary);
  if(binary == "NaN"){
    reset();
    alert("You must enter a number");
  }else{
    document.getElementById("to").innerHTML = binary;
  }
}

function reset(){
  document.getElementById("from").value="";
  let variant = document.getElementById("to");
  variant.innerHTML="";
}

function swap(){}