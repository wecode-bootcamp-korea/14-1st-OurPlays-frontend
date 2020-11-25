import React, { Component } from "react";
import "./UploadImage.scss";
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: "",
      title: "",
      price: "",
    };
  }

  handleAddFile = (e) => {
    e.preventDefault(e);
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  handleUpload = () => {
    const formData = new FormData();
    formData.append("photo", this.state.selectedFile);
    formData.append("title", this.state.title);
    formData.append("price", this.state.price);

    fetch("API", {
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  handleChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log(this.state.selectedFile, this.state.price, this.state.title);
    return (
      <div className="UploadImage">
        <section className="login-header">
          <img
            onClick={this.sendToMain}
            src="https://s3.hourplace.co.kr/web/images/logo_blue.svg"
            alt="로고"
          />
          <h1> 사진 등록하기 </h1>
        </section>
        <section className="login-body">
          <div className="label">
            <div className="email-label">
              <span> 우리집 이름 </span>
              <input
                type="text"
                placeholder="공간의 이름이 무엇인가요?"
                name="title"
                onChange={(e) => {
                  this.handleChangeValue(e);
                }}
              />
            </div>
            <div className="email-label">
              <span> 시간 당 가격 </span>
              <input
                type="number"
                placeholder="시간 당 가격을 입력해주세요."
                name="price"
                onChange={(e) => {
                  this.handleChangeValue(e);
                }}
              />
            </div>
            <div className="password-label">
              <span> 사진 업로드 </span>
              <input
                type="file"
                placeholder="사진 업로드"
                name="file"
                accept={"image/*"}
                // value={this.state.selectedFile}
                onChange={(e) => {
                  this.handleAddFile(e);
                }}
              />
            </div>
          </div>
        </section>
        <section className="login-footer">
          <div className="login-button">
            <button
              value="button"
              onClick={() => {
                this.handleUpload();
              }}
            >
              로그인
            </button>
          </div>
          <div className="manage-member">
            <div onClick={this.sendToSignUp} className="sign-up">
              <h1> 회원가입 </h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ImageUpload;
