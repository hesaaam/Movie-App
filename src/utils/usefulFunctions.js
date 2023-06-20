import $ from 'jquery';


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
export const addHeroSlideTo = () => {

  const sliderItems = document.querySelectorAll('.slider_item')
  const sliderControls = document.querySelectorAll('[slider-control]')
  const bannerText = document.querySelectorAll('.banner_text')




  let lastSliderItem = sliderItems[0]
  let lastSliderControl = sliderControls[0]
  let lastBannerText = bannerText[0].textContent


  lastSliderItem.classList.add("active");
  lastSliderControl.classList.add("active");
  bannerText[0].classList.add("active");

  // translate overview in movie popular list
  const url = 'https://translate-plus.p.rapidapi.com/translate';
  const translate = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'ae1f51e48dmsh48ee401f07a348fp175bccjsn83f580fc403d',
      'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
    },
    body: JSON.stringify({
      text: lastBannerText,
      source: 'en',
      target: 'fa'
    })
  };

  // fetchData(url, translate)
  //   .then(data => {
  //     bannerText[0].textContent = data.translations.translation
  //     bannerText[0].setAttribute('data-lang', 'fa')
  //     if (bannerText[0].getAttribute('data-lang') === "fa") {
  //       bannerText[0].classList.remove("active");
  //     }


  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  // ---------------------------------------
  const sliderStart = async function () {
    lastSliderItem.classList.remove('active')
    lastSliderControl.classList.remove('active')

    // `this` == slider-control

    sliderItems[+this.getAttribute("slider-control")].
      classList.add("active");
    this.classList.add("active");

    lastSliderItem = sliderItems[+this.getAttribute("slider-control")];
    lastSliderControl = this
    // ------------------------------------------------------------------
    // translate overview in movie popular list
    lastBannerText = bannerText[+this.getAttribute("slider-control")].textContent;
    if (bannerText[+this.getAttribute("slider-control")].getAttribute('data-lang') === "en") {
      bannerText[+this.getAttribute("slider-control")].classList.add("active")
    }

    if (bannerText[+this.getAttribute("slider-control")].getAttribute('data-lang') === "fa") return


    const translate = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'ae1f51e48dmsh48ee401f07a348fp175bccjsn83f580fc403d',
        'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
      },
      body: JSON.stringify({
        text: lastBannerText,
        source: 'en',
        target: 'fa'
      })
    };
    // fetchData(url, translate)
    //   .then(data => {
    //     bannerText[+this.getAttribute("slider-control")].textContent =  data.translations.translation
    //     bannerText[+this.getAttribute("slider-control")].setAttribute('data-lang', 'fa')
    //     if (bannerText[+this.getAttribute("slider-control")].getAttribute('data-lang') === "fa") {
    //       bannerText[+this.getAttribute("slider-control")].classList.remove("active")

    //     }




    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });


  }

  addEventOnElement(sliderControls, 'click', sliderStart)

}



