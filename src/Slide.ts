export default class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.show(0)

    console.log(container);
    console.log(slides);
    console.log(controls);
    console.log(time);
  }

  show(index: number) {
    this.slides.forEach((el) => el.classList.remove('active'))
    this.slides[index].classList.add('active')
  }
}