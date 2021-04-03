/*Method to edit contents*/
function editContent() {
    document.getElementById("postContent").contentEditable = "true";
    document.getElementById("heading content").contentEditable = "true";
    document.getElementById("postHeading").style.borderColor = "pink";
    document.getElementById("postContent").style.borderColor = "pink";
    var htmlShow1 = document.getElementById("editBlog");
    htmlShow1.style.visibility = 'hidden';
    var htmlShow = document.getElementById("saveBlog");
    htmlShow.style.visibility = 'visible';
}
/*Method to save content after editing*/
function saveContent(){
    document.getElementById("postContent").contentEditable = "false";
    document.getElementById("heading content").contentEditable = "false";
    document.getElementById("postHeading").style.borderColor = "white";
    document.getElementById("postContent").style.borderColor = "white";
    let htmlShow = document.getElementById("saveBlog");
    htmlShow.style.visibility = 'hidden';
    var htmlShow1 = document.getElementById("editBlog");
    htmlShow1.style.visibility = 'visible';
}

var numberOfClicks=0;
/*Method to count number of likes*/
function postLiked(){
    document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }
    /*Method to add comments*/
    function addComments() {
        var newText = document.createElement('p');
        newText.classList.add('commentContent');
        var value = document.getElementById('userComments').value;
        if(value === '') {
            alert('comment cannot be empty');
        } else {
            newText.innerHTML = value;
            document.getElementById('addEventNames').appendChild(newText);
            var list = document.getElementById("addEventNames");
            list.insertBefore(newText, list.childNodes[0]);
            document.getElementById('userComments').value='';
        }
    }
