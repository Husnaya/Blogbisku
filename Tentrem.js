// selecting all required elements
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeicon = previewBox.querySelector(".icon");
currentImg = previewBox.querySelector(".current-img");

window.onload = ()=>{ //once window loaded
    var ket = ["ScorpionX", "ScorpionKing", "AvanteHDD", "AvanteSHD", "AvanteD1", "AvanteD2", "AvanteH9", "Perbedaan Avante SeriesH dan SeriesD", "AvanteH7 Grand Captain", "AvanteH8 Grand Captain", "AvanteD2 Grand Captain", "AvanteH9 Grand Captain"];
    for (let i = 0; i < gallery.length; i++) {
        let newIndex = i; //passing i value to newIndex variable
        let clickImgIndex;
        gallery[i].onclick = ()=> {
            clickImgIndex = newIndex;
            console.log(i);
            function preview(){
                currentImg.innerHTML = ket[newIndex];
                let selectedImgUrl = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = selectedImgUrl; //passing user clicked img url previewImg source
            }

            //previous and next button
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--; //
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";
                }else{
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = ()=>{
                newIndex++; //
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                }else{
                    preview();
                    prevBtn.style.display = "block";
                }
            }

            preview();
            previewBox.classList.add("show");

            closeicon.onclick = ()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
            }
        }
    }
}