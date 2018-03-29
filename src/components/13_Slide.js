import React from 'react';
import '../styles/slide.css';

class Slide extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.debounce(this.checkSlide));
    this.setState({ sliderImages: document.querySelectorAll('.slide-in') });
  }

  debounce = (func, wait = 20, immediate = true) => {
    let timeout;
    return function() {
      const context = this,
        args = arguments;
      var later = function() {
        let timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  checkSlide = () => {
    this.state.sliderImages.forEach(sliderImage => {
      const slideInAt =
        window.scrollY + window.innerHeight - sliderImage.height / 2;
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="site-wrap">
          <h1>Slide in on Scroll</h1>
          <img
            src="http://unsplash.it/400/400"
            className="align-left slide-in"
            alt="placeholder"
          />
          <p>
            Consectetur adipisicing elit. Tempore tempora rerum, est autem
            cupiditate, corporis a qui libero ipsum delectus quidem dolor at
            nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis
            quod quas laborum nam! Fuga ad tempora in aspernatur pariaturlores
            sunt esse magni, ut, dignissimos.
          </p>
          <img
            src="http://unsplash.it/400/401"
            className="align-right slide-in"
            alt="placeholder"
          />
          <p>
            Lorem ipsum cupiditate, corporis a qui libero ipsum delectus quidem
            dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis
            blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur
            pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.
          </p>
          <img
            src="http://unsplash.it/200/500"
            className="align-left slide-in"
            alt="placeholder"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            tempora rerum, est autem cupiditate, corporis a qui libero ipsum
            delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
            asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora
            in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
            dignissimos.
          </p>
          <img
            src="http://unsplash.it/400/400"
            className="align-right slide-in"
            alt="placeholder"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            tempora rerum, est autem cupiditate, corporis a qui libero ipsum
            delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
            asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora
            in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
            dignissimos.
          </p>
        </div>
      </div>
    );
  }
}

export default Slide;

//   <script>
//     function debounce(func, wait = 20, immediate = true) {
//       var timeout;
//       return function() {
//         var context = this, args = arguments;
//         var later = function() {
//           timeout = null;
//           if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//       };
//     };
//
//     const sliderImages = document.querySelectorAll('.slide-in');
//
//     function checkSlide() {
//       sliderImages.forEach(sliderImage => {
//         // half way through the image
//         const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//         // bottom of the image
//         const imageBottom = sliderImage.offsetTop + sliderImage.height;
//         const isHalfShown = slideInAt > sliderImage.offsetTop;
//         const isNotScrolledPast = window.scrollY < imageBottom;
//         if (isHalfShown && isNotScrolledPast) {
//           sliderImage.classList.add('active');
//         } else {
//           sliderImage.classList.remove('active');
//         }
//       });
//     }
//
//     window.addEventListener('scroll', debounce(checkSlide));
//   </script>
