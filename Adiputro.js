// selecting all required elements
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeicon = previewBox.querySelector(".icon");
currentImg = previewBox.querySelector(".current-img");

window.onload = ()=>{ //once window loaded
    var ket = ["Neoplan", "Sentra Gen 1", "Tourismo", "Travego", "VanHool", "Old Setra Gen 1", "Old Setra Gen 2", "Setra Smile", "Spinter", "Marcopolo", "Jetbus", "JetbusHD", "Jetbus2HD", "Jetbus2+", "Jetbus2+HDD", "Jetbus2+SHD", "Jetbus2+SDD", "Jetbus3SHD", "Jetbus3HDD", "Jetbus3SHD", "Jetbus3MHD", "Jetbus3UHD", "Jetbus5SHD", "Jetbus5HDD", "Jetbus5SDD", "DreamCoachJb3", "KabinDreamCoach", "TidurDreachCoach", "DreamCoachJb5"];
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