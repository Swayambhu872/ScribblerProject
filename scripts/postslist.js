var identity;
 function getId(id) {
      identity = id;
 }



    $(document).ready(function () {
        $("#yes-btn").on("click", function () {
            identity.remove();
            $("#deleteModal").modal('hide');
           let element = document.getElementById('five');
           element.style.position = "static";
        });
    });

    function hoverIn(id){
       let temp = id;
  
       temp.style.boxShadow = "2px 2px 2px 2px lavender";
       
    }
    function hoverOut(id){
        let temp = id;
       temp.style.boxShadow = "";
          
    }