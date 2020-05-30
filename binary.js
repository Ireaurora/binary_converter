function to_binary(){
  let decimal = document.getElementById("from").value;
  let binary = Number(decimal).toString(2);
  if(isNaN(binary)){
    reset();
    document.getElementById("error").innerHTML = "<small>You must enter a number</small>";
  }else{
    document.getElementById("to").value = binary;
  }
}

function to_decimal(){
  let binary = document.getElementById("from").value;
  let decimal = parseInt(Number(binary), 2);
  if(isNaN(decimal)){
    reset();
    document.getElementById("error").innerHTML = "<small>You must enter a binary number</small>";
  }else{
    document.getElementById("to").value = decimal;
  }
}

function conversion(){
  document.getElementById("error").innerHTML="";
  if(document.getElementById("initial").innerHTML == "Binary :"){
    to_decimal();
  }else{
    to_binary();
  }
}

function reset(){
  document.getElementById("error").innerHTML="";
  document.getElementById("from").value="";
  document.getElementById("to").value="";
}

function swap(){
  if(document.getElementById("initial").innerHTML == "Binary :"){
    document.getElementById("h2").innerHTML="Decimal to Binary converter :";
    document.getElementById("initial").innerHTML="Decimal :";
    document.getElementById("final").innerHTML="Binary :";
  }else{
    document.getElementById("h2").innerHTML="Binary to Decimal converter :";
    document.getElementById("initial").innerHTML="Binary :";
    document.getElementById("final").innerHTML="Decimal :";
  }
  reset();
}