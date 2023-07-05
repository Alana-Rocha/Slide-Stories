export default class Slide {
    container;
    slides;
    controls;
    time;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.show(0);
        console.log(container);
        console.log(slides);
        console.log(controls);
        console.log(time);
    }
    show(index) {
        this.slides.forEach((el) => el.classList.remove('active'));
        this.slides[index].classList.add('active');
    }
}
//# sourceMappingURL=Slide.js.map