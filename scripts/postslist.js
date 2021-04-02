
 function getId(id) {
    let identity ={id: id.value}
 
  console.log(identity);
 }

 document.getElementById('yes-btn').addEventListener('click', function(identity) {
     console.log(identity);
        //document.getElementById(identity).remove()
 });