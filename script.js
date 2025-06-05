 function changeText() {
            document.getElementById("myParagraph").textContent = "The text has been changed!";
        }

function downloadFile() {
    const content = "Hello, world!"; // Your file content
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "example.txt"; // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
