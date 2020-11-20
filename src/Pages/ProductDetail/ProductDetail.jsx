import React, { Component } from "react";
import DetailSlider from "./components/DetailSlider";
import Calendar from "./components/Calendar";
import SelectDropdown from "./components/SelectDropdown";
import Modal from "./components/Modal";
import Slider from "react-slick";
import Select from "react-select";
import ReviewList from "./components/ReviewList";
import ReviewElement from "./components/ReviewElement";
import MapContanier from "./components/MapContainer";
import MapElement from "./components/MapElement";

import uuid from "react-uuid";

import "./ProductDetail.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  className: "slides",
  comments: [],
  comment: "",
  id: 0,
};
const people_options = [
  { value: "1 명", label: "1명" },
  { value: "2 명", label: "2명" },
  { value: "3 명", label: "3명" },
];
const time_options = [
  { value: "1 시간", label: "1시간" },
  { value: "2 시간", label: "2시간" },
  { value: "3 시간", label: "3시간" },
];

class ProductDetail extends Component {
  state = {
    imageData: [],
    target: "",
    startDate: "",
    endDate: "",
    peopelVal: "",
    timeVal: "",
    isShowModal: false,
    name: "user-data-name",
    comments: [],
    id: uuid(),
    comment: "",
  };
  componentDidMount() {
    fetch("/Data/DetailImage.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          imageData: res.data,
          target: res.data[0],
        })
      );
  }

  userDateHandler = (_startDate, _endDate) => {
    this.setState({
      startDate: _startDate,
      endDate: _endDate,
    });
  };
  handlePeopleChange = (e) => {
    this.setState({
      peopleVal: e.value,
    });
  };

  handleTimeChange = (e) => {
    this.setState({
      timeVal: e.value,
    });
  };
  submitHandleChange = (e) => {
    console.log(e);
  };

  showModal = () => {
    console.log("dd");
    this.setState({
      isShowModal: !this.state.isShowModal,
    });
  };
  handleSubmit = (_comment) => {
    const createdComment = {
      name: this.state.name,
      id: this.state.id,
      comment: _comment,
    };
    const addedComment = [...this.state.comments, createdComment];
    this.setState({
      comments: addedComment,
      id: uuid(),
      comment: "",
    });
  };

  handleDelete = (id) => {
    console.log(id);
    const filteredComments = this.state.comments.filter(
      (comment) => comment.id !== id
    );
    this.setState({
      comments: filteredComments,
    });
  };
  render() {
    const { imageData, target } = this.state;
    console.log(this.state.comments);
    return (
      <article className="ProductDetail modal-Mode">
        <div className="product-datail-container">
          <div className="product-image-slider">
            <Slider {...settings}>
              {imageData.map((img, idx) => {
                return (
                  <div className="DetailSlider" key={idx}>
                    <img src={img.img} />
                  </div>
                );
              })}
            </Slider>
            <div className="product-image-cnt">
              <i className="far fa-image"></i>
              <span>1 / 18</span>
            </div>
            <button className="link icon">
              <i className="fas fa-link"></i>
            </button>
            <button className="book-mark icon">
              <i className="far fa-bookmark"></i>
            </button>
          </div>
          <section className="product-detail-content-container">
            <div className="product-detail-info-wrap">
              <div className="left">
                <div className="left-top">
                  <div className="left-top-header">
                    <span>아파트/인천</span>
                    <div className="left-top-heaer-number">장소번호 23423</div>
                  </div>
                  <div className="left-top-desc">
                    <h3>
                      (송도) 다이닝 구조가 매력적인 따뜻한 감성의 심플한 아파트
                    </h3>
                  </div>
                  <div className="left-top-host-info">
                    <div className="left-top-host-info-image">
                      <img src={imageData[0] && imageData[0].img} alt="" />
                    </div>
                    <div className="left-top-host-info-desc">
                      <span className="host-title">호스트</span>
                      <span className="host-name">Mallang</span>
                    </div>
                  </div>
                </div>
                <div className="left-middle-table">
                  <div className="left-middle-table-header">
                    <span>장소 소개</span>
                    <div className="left-middle-table-btn">
                      <input type="button" value="m2" className="area2" />
                      <input type="button" value="평" className="area" />
                    </div>
                  </div>
                  <div className="left-middle-table-content">
                    <div className="row">
                      <div className="row-ele">
                        <div className="area-title">면적</div>
                        <div className="area-data">122m2</div>
                      </div>
                      <div className="row-ele">
                        <div className="story-title">층</div>
                        <div className="story-data">10층</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="row-ele">
                        <div className="acceptable-ppl-title">기본 인원</div>
                        <div className="acceptable-ppl-data">6명</div>
                      </div>
                      <div className="row-ele">
                        <div className="acceptable-cars-title">
                          주차 가능 대수
                        </div>
                        <div className="acceptable-cars-data">6대</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-desc">
                  <div className="left-desc-content">
                    <br />
                    아이가 함께 사는 세가족의 따뜻한 스윗하우스입니다. 송도에
                    위치해있으며 송도IC에서 가깝고 인천대교에 인접해 있어
                    접근성이 좋습니다.
                    <br />
                    <br /> 다이닝룸을 바라보는 오픈형 주방과 다이닝룸에서 거실로
                    한눈에 트이는 구조로 촬영하기 아주 매력적인 구조입니다.
                    보통의 아파트들보다 층고가 30cm가량 높아 공간감이 더욱
                    좋습니다. 채광이 아주 좋고, 4베이 구조로 침실부터 거실,
                    방까지 다양하게 자연광으로 촬영하실 수 있습니다. 곳곳에
                    감성있는 소품들과 식물로 다양한 연출이 가능합니다.
                    **화장실은 안방에1개, 거실에 1개 있습니다. **집안의 소품은
                    사용할수 있습니다. 다만 사용 후 원래 자리에 다시 놓아주시길
                    부탁드립니다. (현관 밖으로의 이동은 제한합니다.) <br />
                    <br />
                    **촬영시 식기나 가전제품의 사용은 최대한 협조해 드립니다.
                    다만 촬영전 사용여부 꼭 확인 부탁드리며, 파손시 비용이
                    청구됩니다. **촬영 진행 중 식사 가능합니다. 음식물
                    쓰레기,재활용 정리 등을 잘해주시면 됩니다. 쓰레기
                    봉투(음식쓰레기봉투 포함)를 미리 꼭 지참해주시기 바랍니다.
                  </div>
                  <div className="left-desc-rules">
                    <div className="left-desc-rules-header">장소 이용 규칙</div>
                    <div className="left-desc-rules-content">
                      [시간 엄수] - 계약된 시간을 꼭 준수하여 주시기 바랍니다. -
                      이용요금은 [시작시간] 및 [종료시간]으로 계약됩니다. -
                      촬영준비 및 세팅, 장비 철수 및 장소 원상복구 시간은
                      계약시간에 포함 되어있습니다. - 계약된 촬영시간을 초과할
                      경우 호스트가 추가결제를 요청할 수 있습니다. [파손주의]
                      삼각대, 조명, 철제박스, 감독 의자, 기타 장비로 인한 나무
                      바닥과 벽지 파손에 꼭 주의 해주세요. - 준비물 : 간단한
                      돗자리나 모포, 테니스 공을 준비해서 장비 밑에 꼭 깔아
                      놓아주세요. - 파손시 : 현장에서 함께 확인 > 사진 촬영 >
                      견적 확인 후, 배상 요청을 진행하게 됩니다. [스탭인원]
                      설정한 최대 스탭인원이 지켜지지 않을 경우, 호스트가 촬영을
                      취소하거나 추가결제를 요청할 수 있습니다. [에티켓] - 주변
                      주민들을 위해 기본 에티켓을 지켜주세요. - 주변 야외 촬영은
                      불가능합니다. - 촬영 도중 발생한 쓰레기는 모두
                      정리해주셔야 합니다. - 주차는 안내된 주차대수에 한해
                      제공됩니다. - 기존의 가구 세팅 및 구조를 필요에 의해
                      변경하신 경우 마감시간 전에 원상복구 해주셔야 합니다.
                    </div>
                  </div>
                  <div className="left-desc-nearby-info">
                    <div className="left-desc-nearby-header">주변 정보</div>
                    <div className="left-desc-nearby-content">
                      -거실에는 6인용 원목식탁과 감성있는 의자가 준비되어
                      있습니다. -아파트 상가에 편의점이 위치하고, 길 건너에
                      GS슈퍼가 있습니다. -아파트단지 뒤쪽으로 달빛공원이
                      있습니다. -인근에 센트럴파크 채드윅국제학교가 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="right-wrap">
                  <div className="right-price-and-rate">
                    <span className="price">50,000원/시간</span>
                    <span className="rate">평가없음</span>
                  </div>
                  <div className="right-user-select-date">
                    <div className="right-user-select-date-header">
                      <span className="title">촬영 스케줄 선택</span>
                      <i className="far fa-question-circle"></i>
                    </div>
                    <div className="right-user-select-date-wrap">
                      <div className="date-wrap">
                        <div className="date-start">
                          <Calendar userDateHandler={this.userDateHandler} />
                        </div>
                      </div>
                      <div className="date-wrap">
                        <div className="time-end">
                          <Select
                            options={time_options}
                            placeholder={"시간을 선택해주세요."}
                            onChange={this.handleTimeChange}
                          />
                          {/* <input
                            type="number"
                            value=""
                            placeholder="시간"
                            onSubmit={this.submitHandleChange()}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-user-select-ppl">
                    <div className="right-user-select-ppl-header">
                      촬영 인원 선택
                    </div>
                    <div className="right-user-select-ppl-wrap">
                      <Select
                        options={people_options}
                        onChange={this.handlePeopleChange}
                        placeholder={"인원수를 선택해주세요."}
                      />
                    </div>
                  </div>
                  <div className="right-user-select-result">
                    <div className="result-col">
                      <div className="result-col-title">촬영 스케쥴</div>
                      <div className="result-col-period">
                        <div className="result-start">
                          {this.state.startDate &&
                            this.state.startDate.format("YYYY.MM.DD")}
                        </div>
                        ~
                        <div className="result-end">
                          {this.state.endDate &&
                            this.state.endDate.format("YYYY.MM.DD")}
                        </div>
                      </div>
                    </div>
                    <div className="result-col">
                      <div className="result-col-hours">
                        <div className="title">촬영 시간</div>
                        <div className="hours">{this.state.timeVal}</div>
                      </div>
                      <div className="result-col-total-hours">
                        {this.state.timeVal.slice(0, 1)} x 50,000원
                      </div>
                    </div>
                    <div className="result-col">
                      <div className="result-col-ppl">
                        <div className="title">촬영 인원</div>
                        <div className="hours">{this.state.peopleVal}</div>
                      </div>
                      <div className="result-col-total-ppl">추가금액 0원</div>
                    </div>
                    <div className="result-col total">
                      <div className="title">총 금액</div>
                      <div className="result">600,000 원</div>
                    </div>
                  </div>
                  <div className="reservation-btn">
                    <input type="button" value="예약 가능 여부 확인하기" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-detail-info-another">
              <div className="product-detail-map">
                <MapContanier />
                {/* <img src="../images/donghakim/map.png" alt="" /> */}
              </div>
              <div className="product-detail-another-place">
                <div className="product-detail-another-place-header">
                  주변 촬영장소
                </div>
                <div className="product-detail-another-place-content">
                  <img
                    src="
                ../images/donghakim/another.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="product-detail-review-container">
                <div className="product-detail-review-header">
                  <h2>사용자 후기</h2>
                </div>
                <div className="product-detail-review-reviews">
                  <div className="review-rows">
                    <div className="review-row">
                      <div className="review-title">청결도</div>
                      <div className="review-rate">
                        <div class="stars-outer">
                          <div class="stars-inner"></div>
                        </div>
                        <span class="number-rating">5,0</span>
                      </div>
                    </div>
                    <div className="review-row">
                      <div className="review-title">정확도</div>
                      <div className="review-rate">
                        <div class="stars-outer">
                          <div class="stars-inner"></div>
                        </div>
                        <span class="number-rating">5,0</span>
                      </div>
                    </div>
                  </div>
                  <div className="review-rows">
                    <div className="review-row">
                      <div className="review-title">접근성</div>
                      <div className="review-rate">
                        <div class="stars-outer">
                          <div class="stars-inner"></div>
                        </div>
                        <span class="number-rating">5,0</span>
                      </div>
                    </div>{" "}
                    <div className="review-row">
                      <div className="review-title">가격</div>
                      <div className="review-rate">
                        <div class="stars-outer">
                          <div class="stars-inner"></div>
                        </div>
                        <span class="number-rating">5,0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ReviewList
                  comments={this.state.comments}
                  handleDelete={this.handleDelete}
                />
              </div>
              <div className="show-review-modal">
                <input
                  type="button"
                  onClick={this.showModal}
                  value="후기 작성"
                />
              </div>
              <Modal
                isShowModal={this.state.isShowModal}
                showModal={this.showModal}
                handleSubmit={(_comment) => {
                  this.handleSubmit(_comment);
                }}
              />
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default ProductDetail;
