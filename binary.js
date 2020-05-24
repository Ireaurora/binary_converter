function testResults (form) {
  var TestVar = form.inputbox.value;
  if ((TestVar +'').indexOf('1') >-1) { 
    alert("Your decimal number is : " + parseInt(TestVar, 2)); 
  }else if(TestVar !== parseInt(TestVar, 10)){
    alert("Please only insert numbers");
  }else{
    alert('Please insert a binary number');
  }
}
