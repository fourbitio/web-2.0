
const Features = () => {
  return (
    <section className="features-area">
      <div className="container">
        <div
          className="title-wrap  wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms">
          <div className="sec-title white">
            <span>Care Study</span>
            <h2>Features</h2>
            <p>
              Curabitur sed facilisis erat. Vestibulum pharetra eros eget
              fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis
              sapien, quis commodo libero.
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div
            className="col-md-6 col-lg-3 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms">
            <div className="single-feature">
              <div className="feature-inner">
                <div className="icon">
                  <img src="assets/img/icons/feature-icon-1.png" alt="" />
                </div>
                <span className="counter">150</span>
                <sup>+</sup>
                <h4>Project Completed</h4>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms">
            <div className="single-feature">
              <div className="feature-inner">
                <div className="icon">
                  <img src="assets/img/icons/feature-icon-2.png" alt="" />
                </div>
                <span className="counter">250</span>
                <sup>+</sup>
                <h4>Satisfied Clients</h4>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 wow animate fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms">
            <div className="single-feature">
              <div className="feature-inner">
                <div className="icon">
                  <img src="assets/img/icons/feature-icon-3.png" alt="" />
                </div>
                <span className="counter">50</span>
                <sup>+</sup>
                <h4>Expert Teams</h4>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 wow animate fadeInUp"
            data-wow-delay="800ms"
            data-wow-duration="1500ms">
            <div className="single-feature">
              <div className="feature-inner">
                <div className="icon">
                  <img src="assets/img/icons/feature-icon-4.png" alt="" />
                </div>
                <span className="counter">28</span>
                <sup>+</sup>
                <h4>Win Awards</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
