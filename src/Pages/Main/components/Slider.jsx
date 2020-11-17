
import React, { Component } from "react";
import "./Slider.scss";
class Slider extends Component {
  render() {
    return (
      <section className="Slider">
        <div className="slider-container">
          <div className="slider-top">
            <h1>Ourplays picks</h1>
            <div className="slider-top-right">
              <input type="button" value="더보기" className="slider-top-more" />
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="slider-contents">
            <ul className="slider-contents-lists">
              <li className="slider-content-list-wrap">
              <div className="slider-content-list">
                <img src="../images/donghakim/Main/img5.jpeg" alt="place" />
                <div className="slider-content">
                  <div className="slider-content-inner">
                    <div className="slider-content-inner-top">
                      <h3 className="slider-content-inner-loc">아파트/인천</h3>
                      <div className="slider-content-inner-title">
                        (송도) 다이닝 구조가 매력적인 따뜻한 감성의 심플한
                        아파트
                      </div>
                    </div>
                    <div className="slider-content-inner-bottom">
                      <div className="slider-content-inner-price">50,000원/시간</div>
                      <div className="slider-content-inner-rateAndMark">
                        <div className="slider-content-inner-rate">
                          평가없음
                        </div>
                        <div className="slider-content-inner-mark">
                          <i className="far fa-bookmark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </li>
              <li className="slider-content-list-wrap">
              <div className="slider-content-list">
                <img src="../images/donghakim/Main/img5.jpeg" alt="place" />
                <div className="slider-content">
                  <div className="slider-content-inner">
                    <div className="slider-content-inner-top">
                      <h3 className="slider-content-inner-loc">아파트/인천</h3>
                      <div className="slider-content-inner-title">
                        (송도) 다이닝 구조가 매력적인 따뜻한 감성의 심플한
                        아파트
                      </div>
                    </div>
                    <div className="slider-content-inner-bottom">
                      <div className="slider-content-inner-price">50,000원/시간</div>
                      <div className="slider-content-inner-rateAndMark">
                        <div className="slider-content-inner-rate">
                        <div class="stars-outer">
                              <div class="stars-inner"></div>
                            </div>
                            <span class="number-rating"></span>
                        </div>
                        <div className="slider-content-inner-mark">
                          <i className="far fa-bookmark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </li>
              <li className="slider-content-list-wrap">
              <div className="slider-content-list">
                <img src="../images/donghakim/Main/img5.jpeg" alt="place" />
                <div className="slider-content">
                  <div className="slider-content-inner">
                    <div className="slider-content-inner-top">
                      <h3 className="slider-content-inner-loc">아파트/인천</h3>
                      <div className="slider-content-inner-title">
                        (송도) 다이닝 구조가 매력적인 따뜻한 감성의 심플한
                        아파트
                      </div>
                    </div>
                    <div className="slider-content-inner-bottom">
                      <div className="slider-content-inner-price">50,000원/시간</div>
                      <div className="slider-content-inner-rateAndMark">
                        <div className="slider-content-inner-rate">
                        <div class="stars-outer">
                              <div class="stars-inner"></div>
                            </div>
                            <span class="number-rating"></span>
                        </div>
                        <div className="slider-content-inner-mark">
                          <i className="far fa-bookmark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </li>  
              <li className="slider-content-list-wrap">
              <div className="slider-content-list">
                <img src="../images/donghakim/Main/img5.jpeg" alt="place" />
                <div className="slider-content">
                  <div className="slider-content-inner">
                    <div className="slider-content-inner-top">
                      <h3 className="slider-content-inner-loc">아파트/인천</h3>
                      <div className="slider-content-inner-title">
                        (송도) 다이닝 구조가 매력적인 따뜻한 감성의 심플한
                        아파트
                      </div>
                    </div>
                    <div className="slider-content-inner-bottom">
                      <div className="slider-content-inner-price">50,000원/시간</div>
                      <div className="slider-content-inner-rateAndMark">
                        <div className="slider-content-inner-rate">
                        <div class="stars-outer">
                              <div class="stars-inner"></div>
                            </div>
                            <span class="number-rating"></span>
                        </div>
                        <div className="slider-content-inner-mark">
                          <i className="far fa-bookmark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </li>
            </ul>
             <div className="slider-btn">
            <i className="fas fa-arrow-left left"></i>
            <i className="fas fa-arrow-right right"></i>
           </div>
          </div>  
        </div>
      </section>
    );
  }
}

export default Slider;

