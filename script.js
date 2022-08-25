var rowno = 1;

function display(){
  var gender;
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let mobile= document.getElementById('mobile').value;
  let skills = document.getElementById('skills').value;

  if(name==""|| email==""|| mobile==""||skills==""){
   alert("please fill the essential details");
  }
  else{
  
    let m=document.getElementById('g1');
    let f=document.getElementById('g2');
  
  if((m.checked) == true){
    gender=m.value;
  }
  
  else if((f.checked) == true){
    gender=f.value;
  }
  else{
    alert("Please select a gender");
  }

  let table = document.getElementById('infotable');
  var row = table.insertRow(rowno);
  var col1 = row.insertCell(0);

  col1.innerHTML = "<br>" + "<b> NAME: </b>" + name + "<br> <b> EMAIL </b>" + email + "<br> <b> GENDER: </b>" + gender + "<br> <b> MOBILE NO : </b> " + mobile +"<br> <b> SKILLS : </b>" + skills + "<br>"+"<br>";
  
  rowno =rowno+1;

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('gender').value = "";
        document.getElementById('mobile').value = "";
        document.getElementById('skills').value = "";
        m.checked = false;
        f.checked = false;
    
  }
}
