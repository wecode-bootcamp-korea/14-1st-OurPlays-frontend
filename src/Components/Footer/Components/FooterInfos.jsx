import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Footer.scss";

class FooterInfos extends Component {
  render() {
    return (
      <div className="footer-informations">
        {FOOTERINFOS.map((footerInfo) => {
          return (
            <Link
              key={footerInfo.id}
              className="footer-info"
              to={footerInfo.linkTo}
            >
              {footerInfo.content}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default FooterInfos;

const FOOTERINFOS = [
  {
    id: 0,
    content: "광고 및 제휴 문의",
    linkTo: "",
  },
  {
    id: 1,
    content: `1:1 고객문의`,
    linkTo: "",
  },
  {
    id: 2,
    content: "인재채용",
    linkTo: "",
  },
  {
    id: 3,
    content: "개인정보 처리방침",
    linkTo: "",
  },
  {
    id: 4,
    content: "서비스 이용약관",
    linkTo: "",
  },
  {
    id: 5,
    content: "사업자 정보",
    linkTo: "",
  },
];
