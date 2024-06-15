import { useEffect, useRef } from 'react';
import { menu } from '../../constants/data';
import './Menu.css';

const Menu = () => {
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  let timeAutoNext = 7000;

  useEffect(() => {
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;

    nextBtn.onclick = function () {
      showSlider('next');
    };

    prevBtn.onclick = function () {
      showSlider('prev');
    };

    setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation(); // Start the initial animation
  }, []);

  function resetTimeAnimation() {
    const runningTime = runningTimeRef.current;
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // trigger reflow
    runningTime.style.animation = null;
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
  }

  function showSlider(type) {
    const sliderItemsDom = listRef.current.querySelectorAll('.item');
    if (type === 'next') {
      listRef.current.appendChild(sliderItemsDom[0]);
      carouselRef.current.classList.add('next');
    } else {
      listRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, 3000);

    setTimeout(() => {
      nextBtnRef.current.click();
    }, timeAutoNext);

    resetTimeAnimation(); // Reset the running time animation
  }

  return (
    <section className="section_container">
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {menu?.map((data, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <div className="content">
                <div className="title">Menu</div>
                <div className="name">{data.title}</div>
                <div className="des">{data.text}</div>
                <div className="btn">
                  <button>See More</button>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <!--next prev button--> */}
        <div className="arrows">
          <button className="prev" ref={prevBtnRef}>
            {'<'}
          </button>
          <button className="next" ref={nextBtnRef}>
            {'>'}
          </button>
        </div>

        {/* <!-- time running --> */}
        <div className="timeRunning" ref={runningTimeRef}></div>
      </div>
    </section>
  );
};

export default Menu;