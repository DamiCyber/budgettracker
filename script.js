
function submit(){
  var pName = tem.value  
  var quak = quan.value
  var  vale = rate.value

  var checkObj = { pName, quak, vale,}
  
  if( pName =="" && quak =="" && vale== "" ){
     error.innerHTML= `<p style="color:white;">I am not yet filled </p>`
  }else if( pName !=="" && quak =="" && vale !== "" ){
    error.innerHTML= `<p style="color:white;">Fill the second input </p>`
 }
  else if( quak =="" && vale== "") {
    error.innerHTML= `<p style="color:white;">Fill the remaing input</p>`
  }else if ( quak !=="" && vale !== "" && pName ==""){
    error.innerHTML= `<p style="color:white;">Fill the first input</p>`
  }else if ( quak !=="" && vale == "" && pName !==""){
    error.innerHTML= `<p style="color:white;">Fill the  input </p>`
  }
  else{
    var checkArray =  JSON.parse(localStorage.getItem("budget")) || [];
    tem.value  =""
    quan.value  =""
    rate.value  =""
  checkArray.push(checkObj)
  
  localStorage.setItem("budget", JSON.stringify(checkArray))
  window.location.href ="result.html";
  }
  
 
}