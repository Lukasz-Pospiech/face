// function openMouth() {
//     const bigFaceContainer = document.getElementById("bigFaceContainer");

//     if (bigFaceContainer.style.display === "none") {
//         bigFaceContainer.style.display = "block";
//     }
//     else if (bigFaceContainer.style.display === "block") {
//         bigFaceContainer.style.display = "none";
//     }
// }


function openMouth() {
    const bigFaceContainer = document.getElementById("bigFaceContainer");
    const bigFaceContainerDisplay = window.getComputedStyle(bigFaceContainer).display;
    const bigFace = document.getElementById("bigFace");

    if (bigFaceContainerDisplay === "none") {
        bigFaceContainer.style.display = "block";
        // bigFaceContainer.innerHTML = '<img id="bigFace" src="face.gif" alt="face">';
        bigFace.style.display = "inline-block";
    }
    else {
        bigFaceContainer.style.display = "none";
        resetGIF("bigFace");
    }

    function resetGIF(id) {
        const gif = document.getElementById(id);
        const imageURL = gif.src;
        gif.src = "";
        gif.src = imageURL;
    }
}

