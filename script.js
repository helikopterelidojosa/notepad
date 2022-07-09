//for dropdown menu
$(document).ready(function(){
    $(".dropdown").click(function(){
        $(".dropdown-content").slideToggle("slow");
    });
});

// textarea save as txt file function
function saveTextAsFile() {
    var textToWrite = document.getElementById("textToWrite").value;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = document.getElementById("fileNameToSaveAs").value;
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    downloadLink.click();
}


