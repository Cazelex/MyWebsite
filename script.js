function changeText() {
     document.getElementById("myParagraph").textContent = "The text has been changed!";
}
function downloadFile() {
    const link = document.createElement("a");
    link.href = "download.txt";
    link.download = "download.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
