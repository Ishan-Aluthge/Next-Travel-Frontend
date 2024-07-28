function saveUser(){
    let role =$('#validationServer01').val();
    let fName =$('#validationServer02').val();
    let lName =$('#validationServer03').val();
    let username =$('#validationServer04').val();
    let email =$('#validationServer05').val();
    let password =$('#validationServer06').val();
    let nicBothSide =$('#validationServer07').val();
    let dob =$('#validationServer08').val();
    let gender =$('#validationServer09').val();
    let profile =$('#validationServer10').val();
    let contact =$('#validationServer11').val();
   let address =$('#validationServer12').val();

   $.ajax({
       method:"POST",
       contentType:"application/json",
       url:"http://localhost:8080/api/v1/users/saveUser",
       async:true,
       data:JSON.stringify({
           "userId":"",
           "role":role,
           "fName":fName,
           "lName":lName,
           "username":username,
           "email":email,
           "password":password,
           "nicBothSide":nicBothSide,
           "dob":dob,
           "gender":gender,
           "profile":profile,
           "contact":contact,
           "address":address

       }),
       success:function (data){
           alert("Saved Your Data Successfully..")
           getAllUsers()
       },
       error:function (xhr, exception){
           alert("Error..Not Saved Your Data.")
       }
   })





}