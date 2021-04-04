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
    function sendData(id){
       let index=0;
      switch(id)
      {
         case one:
            index = 0;
            break;
         case two:
            index = 1;
            break;
         case three:
            index = 2;
            break;
         case four:
            index = 3;
            break;
         case five:
            index = 4;
            break;

      }
      var getData = 
      {
         "postAuthor": document.getElementsByClassName('postAuthor')[index].innerText,
         "contentHead":document.getElementsByClassName('head')[index].innerText,
         "contentData": document.getElementsByClassName('content')[index].innerText,
      }
      localStorage.setItem('dataKey', JSON.stringify(getData ));
    }