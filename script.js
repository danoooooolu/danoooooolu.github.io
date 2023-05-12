filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

class Modal{
    constructor(name){
        this.id = name + '_modal';
        this.slide = name + '_slides';
        this.demo = name + '_demo';
        this.caption = name + '_caption';
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
    }

    openModal() {
        document.getElementById(this.id).style.display = "block";
    }
    
    closeModal() {
        document.getElementById(this.id).style.display = "none";
    }
    
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }
    
    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName(this.slide);
        var dots = document.getElementsByClassName(this.demo);
        var captionText = document.getElementById(this.caption);
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex-1].style.display = "block";
        dots[this.slideIndex-1].className += " active";
        captionText.innerHTML = dots[this.slideIndex-1].alt;
    }
}

let GVH_506_Modal = new Modal('GVH_506');
let GVH_024_Modal = new Modal('GVH_024');