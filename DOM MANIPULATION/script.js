 
     var c1 = document.forms['myform'];
     c1.addEventListener("submit",submit);
 function submit(event) {
   event.preventDefault();
    var c = document.forms['myform'];
   let storage  =[];
   data['choiceoffoods']=[];
      let favFoods = document.querySelectorAll(".choiceoffoods");
      for (let food of favFoods){
        if(food.checked == true){
          data['choiceoffoods'].push(food.value);
        }
      }


      
      data.push({
        Firstname: c.firstname.value,
        Lastname: c.lastname.value,
        Addres: c.address.value,
        Pincode: c.pincode.value,
        Gender: c.gender.value,
        choicefoods: data['choiceoffoods'].toString(),
        State: c.state.value,
        Country: c.country.value,

      });
      
      
      show(data);
    
    
 
  };


var data = [];
function show(data) {
    let table =
        `<tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Addres</th>
          <th>Pincode</th>
          <th>Gender</th>
          <th>choiceoffoods</th>
          <th>State</th>
          <th>Country</th>

         </tr>`;

    
  for (let r of data) 
        table += `<tr>
    <td>${r.Firstname} </td>
    <td>${r.Lastname}</td>
    <td>${r.Addres}</td>
    <td>${r.Pincode}</td>         
    <td>${r.Gender}</td> 
    <td>${r.choicefoods}</td> 
    <td>${r.State}</td> 
    <td>${r.Country}</td> 
     
</tr>`;
document.getElementById("userdetails").innerHTML = table;
}
