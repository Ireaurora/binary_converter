function to_binary(){
  let decimal = document.getElementById("from").value;
  let binary = Number(decimal).toString(2);
  if(binary == "NaN" || binary == "0"){
    reset();
    document.getElementById("error").innerHTML = "<small>You must enter a number</small>";
  }else{
    document.getElementById("to").value = binary;
  }
}

function to_decimal(){
  let binary = document.getElementById("from").value;
  let decimal = parseInt(Number(binary), 2);
  if(decimal == NaN){
    reset();
    document.getElementById("error").innerHTML = "<small>You must enter binarya number</small>";
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
    document.getElementById("initial").innerHTML="Decimal :";
    document.getElementById("final").innerHTML="Binary :";
  }else{
    document.getElementById("initial").innerHTML="Binary :";
    document.getElementById("final").innerHTML="Decimal :";
  }
  reset();
}
//        <small>We'll never share your email with anyone else.</small>