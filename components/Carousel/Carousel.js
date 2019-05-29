
//  I GOT NOWHERE WITH THIS!



class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.images = document.querySelectorAll('.images');
        console.log(this.images);
        this.idx = 0;
        images[idx].style.display = "inline";
        this.leftButton.addEventListener('click', () => this.goLeft())
        this.rightButton.addEventListener('click', () => this.goRight())

    }
    goLeft(){
        
        if (this.idx == 0){
            this.idx = 0;
        }else {
            this.images[idx].style.display = 'none'
            this.idx -=1;
            this.images[idx].style.display = 'inline'
        }

    }
    goRight(){
        if (this.idx == images.length - 1){
            this.idx = images.length - 1;
        }else {
            this.images[idx].style.display = 'none'
            this.idx +=1;
            this.images[idx].style.display = 'inline'
        }
    }

}

let carousel = document.querySelectorAll('.carousel');
console.log(document.querySelectorAll('.carousel'));
console.log(carousel);

carousel = new Carousel(carousel);
console.log(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
