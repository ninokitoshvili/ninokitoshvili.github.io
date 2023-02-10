var slider = {
    contianer : document.getElementsByClassName("slider"),
    item : document.getElementsByClassName("slider__item"),
    itemIndex : 0,
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    nextSlide : function() {
        if(slider.itemIndex == slider.item.length-1){
            slider.itemIndex = 0;
            slider.item[slider.item.length-1].classList.remove('slider__item--active')
        } else {
            slider.itemIndex++;
            slider.item[slider.itemIndex-1].classList.remove('slider__item--active')
        }
        console.log(slider.itemIndex);
        slider.item[slider.itemIndex].classList.add('slider__item--active')
    },

    backSlide : function(){
        if(slider.itemIndex == 0){
            slider.itemIndex = slider.item.length-1;
            slider.item[0].classList.remove('slider__item--active')
            
        }else{
            slider.itemIndex--;
            slider.item[slider.itemIndex+1].classList.remove('slider__item--active')
        }
        console.log(slider.itemIndex)
        slider.item[slider.itemIndex].classList.add('slider__item--active')
    }
}

slider.prevBtn.addEventListener('click', slider.backSlide)
slider.nextBtn.addEventListener('click', slider.nextSlide)