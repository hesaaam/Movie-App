


export const addEventOnElement = (element, eventType, callback) => {
  for (const elem of element) elem.addEventListener(eventType, callback)


}
// --------------------------------------------------------------

export const fetchData = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not OK.');
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}


// -------------------------------------------------------------



//  /**
//   * 
//   * hero slider functionality
//   */
export const addHeroSlideTo =  () => {

  const sliderItems = document.querySelectorAll('.slider_item')
  const sliderControls = document.querySelectorAll('[slider-control]')





  let lastSliderItem = sliderItems[0]
  let lastSliderControl = sliderControls[0]



  lastSliderItem.classList.add("active");
  lastSliderControl.classList.add("active");



  // ---------------------------------------
  const sliderStart =  function () {
    lastSliderItem.classList.remove('active')
    lastSliderControl.classList.remove('active')

    // `this` == slider-control

    sliderItems[+this.getAttribute("slider-control")].
      classList.add("active");
    this.classList.add("active");

    lastSliderItem = sliderItems[+this.getAttribute("slider-control")];
    lastSliderControl = this
    // ------------------------------------------------------------------

  }

  addEventOnElement(sliderControls, 'click', sliderStart)

}



