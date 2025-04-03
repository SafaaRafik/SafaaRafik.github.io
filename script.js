function openLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";  // Make lightbox visible
    lightboxImg.src = img.src;        // Set clicked image in lightbox
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none"; 
}
