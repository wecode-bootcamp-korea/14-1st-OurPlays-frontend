/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import DetailSlider from "./components/DetailSlider";
import Calendar from "./components/Calendar";
import SelectDropdown from "./components/SelectDropdown";
import ReactStars from "react-rating-stars-component";
import Modal from "./components/Modal";
import Slider from "react-slick";
import Select from "react-select";
import { Link } from "react-router-dom";
import ReviewList from "./components/ReviewList";
import ReviewElement from "./components/ReviewElement";
import MapContanier from "./components/MapContainer";
import MapElement from "./components/MapElement";
import TagLists from "./components/TagLists";
import { FaStar } from "react-icons/fa";
import Loading from "../../Components/Loading/Loading";

import { API, YA_API, YA401_API } from "../../config";

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
};

const end_time_options = [
  { value: "12:00", label: "12 : 00" },
  { value: "13:00", label: "13 : 00" },
  { value: "14:00", label: "14 : 00" },
  { value: "15:00", label: "15 : 00" },
  { value: "16:00", label: "16 : 00" },
  { value: "17:00", label: "17 : 00" },
];

const people_options = [
  { value: "1", label: "1 명" },
  { value: "2", label: "2 명" },
  { value: "3", label: "3 명" },
  { value: "4", label: "4 명" },
  { value: "5", label: "5 명" },
  { value: "6", label: "6 명" },
];

const start_time_options = [
  { value: "12:00", label: "12 : 00" },
  { value: "13:00", label: "13 : 00" },
  { value: "14:00", label: "14 : 00" },
  { value: "15:00", label: "15 : 00" },
  { value: "16:00", label: "16 : 00" },
  { value: "17:00", label: "17 : 00" },
];

let LIMIT = 4;

class ProductDetail extends Component {
  state = {
    placeinfo: [],
    userReservationInfo: [],
    target: "",
    startDate: "",
    endDate: "",
    peopleVal: "",
    startTime: "",
    endTime: "",
    isShowModal: false,
    user_name: "user-data-name",
    comments: [],
    comment: "",
    isComment: false,
    rating: null,
    isHover: null,
    ratings: [],
    isArea: true,
    reviewLists: [],
  };

  componentDidMount() {
    console.log("ProductDetail componentDidMount");
    fetch(`${API}/place/detail/${this.props.match.params.place_id}`, {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.information, "전체 데이터 중 방 하나, product detail");
        this.setState({
          placeinfo: res.information[0],
          ratings: res.information[0].rating,
        });
      });
  }

  handleRating = (_rating) => {
    this.setState({
      rating: _rating,
    });
  };
  handleRatingHover = (_rating) => {
    this.setState({
      isHover: _rating,
    });
  };

  userDateHandler = (_startDate, _endDate) => {
    this.setState({
      startDate: _startDate,
      endDate: _endDate,
    });
  };

  handlePeopleChange = (e) => {
    this.setState({
      peopleVal: e.value.slice(0, 1),
    });
  };

  handleStartTimeChange = (e) => {
    this.setState({
      startTime: e.value,
    });
  };
  handleEndTimeChange = (e) => {
    this.setState({
      endTime: e.value,
    });
  };

  onSubmitInfoHandler = () => {
    console.log(
      this.state.placeinfo.place_id,
      this.state.startDate,
      this.state.endDate,
      this.state.peopleVal,
      this.state.startTime,
      this.state.endTime,
      ".asdasda"
    );
    fetch(`${YA401_API}/reservation`, {
      method: "POST",
      headers: { Authorization: localStorage.getItem("token") },
      body: JSON.stringify({
        place_id: this.state.placeinfo.place_id,
        begin_date: this.state.startDate.format("YYYY-MM-DD"),
        finish_date: this.state.endDate.format("YYYY-MM-DD"),
        shooting_members_count: this.state.peopleVal,
        begin_time: this.state.startTime,
        finish_time: this.state.endTime,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          this.props.history.push("/Reservation");
        }
        const reservation = {
          startDate:
            this.state.startDate && this.state.startDate.format("YYYY-MM-DD"),
          endDate:
            this.state.endDate && this.state.endDate.format("YYYY-MM-DD"),
          place_id: this.state.placeinfo.place_id,
          peopleVal: this.state.peopleVal,
          startTime: this.state.startTime,
          endTime: this.state.endTime,
        };
        this.setState({
          userReservationInfo: [
            ...this.state.userReservationInfo,
            { reservation },
          ],
        });
      });
  };

  showModal = () => {
    this.setState({
      isShowModal: !this.state.isShowModal,
    });
  };

  handleSubmit = (_comment, updatedRating) => {
    console.log("submit");
    fetch(`${YA401_API}/place/${this.state.placeinfo.place_id}/ratings`, {
      method: "POST",
      headers: { Authorization: localStorage.getItem("token") },
      body: JSON.stringify({
        starpoint: updatedRating,
        comment: _comment,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "comment data");
        const createdRatingElement = {
          place_id: this.state.placeinfo.place_id,
          starpoint: updatedRating,
          comment: res.information.comment,
          user_id: 21,
        };

        const addRating = [...this.state.ratings, createdRatingElement];
        this.setState({
          comments: addRating,
          comment: "",
          ratings: addRating,
        });
      });

    const createdComment = {
      place_id: this.state.placeinfo.place_id,
      user_name: this.state.name,
      id: this.state.id,
      comment: _comment,
      created_at: new Date(),
      starpoint: updatedRating,
    };
    const addedComment = [...this.state.comments, createdComment];
  };

  handleDelete = (id) => {
    fetch(`${YA401_API}/place/rating/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const filteredComments = this.state.ratings.filter(
          (comment) => comment.id !== id
        );
        this.setState({
          ratings: filteredComments,
        });
      });
  };

  handleAreaClick = () => {
    this.setState({
      isArea: !this.state.isArea,
    });
  };

  toBookMark = (e) => {
    fetch(`${YA401_API}/user/placemark`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ place_id: this.state.placeinfo.place_id }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          this.props.history.push(`/BookMarkList`);
        }
      });
  };
  render() {
    const {
      userReservationInfo,
      isComment,
      startDate,
      endDate,
      peopleVal,
      rating,
      isHover,
      ratings,
      placeinfo,
      comments,
      isArea,
      reviewLists,
      startTime,
      endTime,
    } = this.state;
    // console.log(placeinfo.place_id, "place_id 부모");
    // console.log(reviewLists && reviewLists, "reviewLists 부모");
    console.log(ratings.length, "부모 렝스");
    console.log(placeinfo, "render placeinfo");
    const ratingArr = ratings.map((rating) => {
      return rating.starpoint;
    });
    const averageRating = ratingArr.reduce((pre, cur) => {
      return pre + cur / ratingArr.length;
    }, 0);

    return (
      <article className="ProductDetail modal-Mode">
        <div className="product-datail-container">
          <div className="product-image-slider">
            {placeinfo.images_urls === undefined ? (
              <Loading />
            ) : (
              <Slider {...settings}>
                {placeinfo.images_urls &&
                  placeinfo.images_urls.map((img, idx) => {
                    return (
                      <div className="DetailSlider" key={idx}>
                        <img src={img.url} alt="place" />
                        <div className="product-image-cnt">
                          <i className="far fa-image"> </i>
                          <span>
                            {idx}/ {placeinfo.images_urls.length}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            )}

            <button className="link icon">
              <i className="fas fa-link"> </i>
            </button>
            <button className="book-mark icon">
              {/* <Link to="/BookMarkList"> */}
              <i
                className="far fa-bookmark"
                onClick={() => this.toBookMark()}
              ></i>
              {/* </Link> */}
            </button>
          </div>
          <div className="tag-container">
            <ul className="tag-lists">
              {placeinfo.tags &&
                placeinfo.tags.map((tag) => {
                  return <TagLists tag={tag} />;
                })}
            </ul>
          </div>
          <section className="product-detail-content-container">
            <div className="product-detail-info-wrap">
              <div className="left">
                <div className="left-top">
                  <div className="left-top-header">
                    <span>
                      {placeinfo.category}/{placeinfo.region}
                    </span>
                    <div className="left-top-heaer-number">
                      장소 번호 {placeinfo.place_id}
                    </div>
                  </div>
                  <div className="left-top-desc">
                    <h3> {placeinfo.title} </h3>
                  </div>
                  <div className="left-top-host-info">
                    <div className="left-top-host-info-image">
                      <img
                        src={placeinfo.avatar_img && placeinfo.avatar_img}
                        alt="host"
                      />
                    </div>
                    <div className="left-top-host-info-desc">
                      <span className="host-title"> 호스트 </span>
                      <span className="host-name"> {placeinfo.user_name} </span>
                    </div>
                  </div>
                </div>
                <div className="left-middle-table">
                  <div className="left-middle-table-header">
                    <span> 장소 소개 </span>
                    <div className="left-middle-table-btn">
                      <input
                        type="button"
                        value="m2"
                        name="qa"
                        className={isArea ? "m2-btn" : "none-m2-btn"}
                        onClick={() => {
                          this.handleAreaClick();
                        }}
                      />
                      <input
                        type="button"
                        value="평"
                        name="area"
                        className={isArea ? "none-m2-btn" : "m2-btn"}
                        onClick={() => {
                          this.handleAreaClick();
                        }}
                      />
                    </div>
                  </div>
                  <div className="left-middle-table-content">
                    <div className="row">
                      <div className="row-ele">
                        <div className="area-title"> 면적 </div>
                        <div className="area-data">
                          {isArea ? placeinfo.area * 3 : placeinfo.area}
                          <span> {isArea ? " m2 " : " 평 "} </span>
                        </div>
                      </div>
                      <div className="row-ele">
                        <div className="story-title"> 층 </div>
                        <div className="story-data"> {placeinfo.floor}층 </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="row-ele">
                        <div className="acceptable-ppl-title"> 기본 인원 </div>
                        <div className="acceptable-ppl-data">
                          {placeinfo.allowed_members_count}명
                        </div>
                      </div>
                      <div className="row-ele">
                        <div className="acceptable-cars-title">
                          주차 가능 대수
                        </div>
                        <div className="acceptable-cars-data">
                          {placeinfo.maximun_parking_lot}대
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-desc">
                  <div className="left-desc-content">
                    <br /> {placeinfo.description} <br />
                    <br /> {placeinfo.description} <br />
                    <br /> {placeinfo.description}
                  </div>
                  <div className="left-desc-rules">
                    <div className="left-desc-rules-header">장소 이용 규칙</div>
                    <div className="left-desc-rules-content">
                      [시간 엄수] - 계약된 시간을 꼭 준수하여 주시기 바랍니다. -
                      이용요금은[시작시간] 및[종료시간] 으로 계약됩니다. -
                      촬영준비 및 세팅, 장비 철수 및 장소 원상복구 시간은
                      계약시간에 포함 되어있습니다. - 계약된 촬영시간을 초과할
                      경우 호스트가 추가결제를 요청할 수 있습니다.[파손주의]
                      삼각대, 조명, 철제박스, 감독 의자, 기타 장비로 인한 나무
                      바닥과 벽지 파손에 꼭 주의 해주세요. - 준비물: 간단한
                      돗자리나 모포, 테니스 공을 준비해서 장비 밑에 꼭 깔아
                      놓아주세요. - 파손시: 현장에서 함께 확인 사진 촬영 견적
                      확인 후, 배상 요청을 진행하게 됩니다.[스탭인원] 설정한
                      최대 스탭인원이 지켜지지 않을 경우, 호스트가 촬영을
                      취소하거나 추가결제를 요청할 수 있습니다.[에티켓] - 주변
                      주민들을 위해 기본 에티켓을 지켜주세요. - 주변 야외 촬영은
                      불가능합니다. - 촬영 도중 발생한 쓰레기는 모두
                      정리해주셔야 합니다. - 주차는 안내된 주차대수에 한해
                      제공됩니다. - 기존의 가구 세팅 및 구조를 필요에 의해
                      변경하신 경우 마감시간 전에 원상복구 해주셔야 합니다.
                      {placeinfo.using_rule}
                    </div>
                  </div>
                  <div className="left-desc-nearby-info">
                    <div className="left-desc-nearby-header"> 주변 정보 </div>
                    <div className="left-desc-nearby-content">
                      -거실에는 6 인용 원목식탁과 감성있는 의자가 준비되어
                      있습니다. - 아파트 상가에 편의점이 위치하고, 길 건너에
                      GS슈퍼가 있습니다. - 아파트단지 뒤쪽으로 달빛공원이
                      있습니다. - 인근에 센트럴파크 채드윅국제학교가 있습니다.
                      {placeinfo.info_nearby}
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="right-wrap">
                  <div className="right-price-and-rate">
                    <span className="price">
                      {(1 * placeinfo.price).toLocaleString(2)}원 / 시간
                    </span>
                    <div class="stars-outer">
                      <div
                        class="stars-inner"
                        style={{ width: `${averageRating * 5}%` }}
                      ></div>
                    </div>
                    <span class="number-rating"> </span>
                  </div>
                  <div className="right-user-select-date">
                    <div className="right-user-select-date-header">
                      <span className="title"> 촬영 스케줄 선택 </span>
                      <i className="far fa-question-circle"> </i>
                    </div>
                    <div className="right-user-select-date-wrap">
                      <div className="date-wrap">
                        <div className="date-start">
                          <Calendar userDateHandler={this.userDateHandler} />
                        </div>
                      </div>
                      <div className="date-wrap">
                        <div className="time-start">
                          <Select
                            options={start_time_options}
                            name="startTime"
                            placeholder="시작 시간을 선택해주세요."
                            onChange={this.handleStartTimeChange}
                          />
                        </div>
                        <div className="time-end">
                          <Select
                            options={end_time_options}
                            placeholder="종료 시간을 선택해주세요."
                            name="endTime"
                            onChange={this.handleEndTimeChange}
                          />
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
                      <div className="result-col-title"> 촬영 스케쥴 </div>
                      <div className="result-col-period">
                        <div className="result-start">
                          {startDate && startDate.format("YYYY.MM.DD")}
                        </div>
                        ~
                        <div className="result-end">
                          {endDate && endDate.format("YYYY.MM.DD")}
                        </div>
                      </div>
                    </div>
                    <div className="result-col">
                      <div className="result-col-hours">
                        <div className="title"> 촬영 시간 </div>
                        <div className="hours">
                          {Math.abs(
                            Number(startTime.slice(0, 2) - endTime.slice(0, 2))
                          )}
                          시간
                        </div>
                      </div>
                      <div className="result-col-total-hours">
                        {(1 * placeinfo.price).toLocaleString(2)}
                      </div>
                    </div>
                    <div className="result-col">
                      <div className="result-col-ppl">
                        <div className="title"> 촬영 인원 </div>
                        <div className="hours"> {peopleVal}명 </div>
                      </div>
                      <div className="result-col-total-ppl">
                        추가금액
                        {(peopleVal > 4
                          ? (peopleVal - 4) * 15000
                          : 0
                        ).toLocaleString(2)}
                        원
                      </div>
                    </div>
                    <div className="result-col total">
                      <div className="title"> 총 금액 </div>
                      <div className="result">
                        {(peopleVal * placeinfo.price).toLocaleString(2)}원
                      </div>
                    </div>
                  </div>
                  <div className="reservation-btn">
                    <input
                      type="button"
                      value="예약 가능 여부 확인하기"
                      onClick={() => {
                        this.onSubmitInfoHandler();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-detail-info-another">
              <div className="product-detail-map">
                <MapContanier
                  lat={placeinfo.latitude}
                  lon={placeinfo.longtitude}
                />
                {/* <img src="../images/donghakim/map.png" alt="" /> */}
              </div>
              <div className="product-detail-another-place">
                <div className="product-detail-another-place-header">
                  주변 촬영장소
                </div>
                <div className="product-detail-another-place-content">
                  <img
                    src="
            .. / images / donghakim / another.png "
                    alt="place"
                  />
                </div>
              </div>
              <div className="product-detail-review-container">
                <div className="product-detail-review-header">
                  <h2> 사용자 후기 </h2>
                  <FaStar size={30} color={"#2c78f2"} className="star" />
                  <div className="rating-total">{averageRating.toFixed(1)}</div>
                </div>
                <div className="product-detail-review-reviews">
                  <div className="review-rows">
                    <div className="review-row">
                      <div className="review-title"> 청결도 </div>
                      <div className="review-rate">
                        <div class="stars-outer">
                          <div
                            class="stars-inner"
                            style={{
                              width: `${averageRating * 20}%`,
                            }}
                          ></div>
                        </div>
                        <span class="number-rating">
                          {averageRating === 0
                            ? averageRating
                            : averageRating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <div className="review-row">
                      <div className="review-title"> 정확도 </div>
                      <div className="review-rate">
                        <div class="stars-outer">
                          <div
                            class="stars-inner"
                            style={{ width: `${averageRating * 18}%` }}
                          ></div>
                        </div>
                        <span class="number-rating">
                          {averageRating !== 0
                            ? (averageRating - 0.5).toFixed(1)
                            : averageRating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="review-rows">
                    <div className="review-row">
                      <div className="review-title"> 접근성 </div>
                      <div className="review-rate">
                        <div class="stars-outer">
                          <div
                            class="stars-inner"
                            style={
                              averageRating !== 0
                                ? { width: `${averageRating * 15}%` }
                                : { width: `${averageRating}%` }
                            }
                          ></div>
                        </div>
                        <span class="number-rating">
                          {averageRating !== 0
                            ? (averageRating - 1).toFixed(1)
                            : averageRating}
                        </span>
                      </div>
                    </div>
                    <div className="review-row">
                      <div className="review-title"> 가격 </div>
                      <div className="review-rate">
                        <div class="stars-outer">
                          <div
                            class="stars-inner"
                            style={{ width: `${averageRating * 20}%` }}
                          ></div>
                        </div>
                        <span class="number-rating">
                          {averageRating === 0
                            ? averageRating
                            : averageRating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ReviewList
                  place_id={placeinfo.place_id}
                  ratings={ratings}
                  isHover={isHover}
                  isShowModal={this.state.isShowModal}
                  // comments={comments}
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
            </div>
          </section>
        </div>
        <Modal
          rating={rating}
          isHover={isHover}
          handleRatingHover={(_rating) => {
            this.handleRatingHover(_rating);
          }}
          handleRating={(_rating) => {
            this.handleRating(_rating);
          }}
          isComment={isComment}
          isShowModal={this.state.isShowModal}
          showModal={this.showModal}
          handleSubmit={(_comment, updatedRating) => {
            this.handleSubmit(_comment, updatedRating);
          }}
        />
      </article>
    );
  }
}

export default ProductDetail;
