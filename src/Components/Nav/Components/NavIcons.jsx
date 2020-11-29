// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "../Nav.scss";

// class NavIcons extends Component {
//   state = {
//     change: false,
//   };
//   componentDidMount() {
//     const is = localStorage.getItem("token");
//     this.setState({
//       change: is,
//     });
//   }

//   render() {
//     return (
//       <div className="nav-icons">
//         {" "}
//         {NAVICONS.map((navIcon) => {
//           return (
//             <Link key={navIcon.id} className="nav-icon" to={navIcon.linkTo}>
//               {" "}
//               {navIcon.name}{" "}
//             </Link>
//           );
//         })}{" "}
//       </div>
//     );
//   }
// }

// export default NavIcons;

// const NAVICONS = [
//   {
//     id: 0,
//     name: "아워플레이스 소개",
//     linkTo: "/Introduce",
//   },
//   {
//     id: 1,
//     name: "관심 장소",
//     linkTo: "/BookMarkList",
//   },
//   {
//     id: 2,
//     name: "예약 관리",
//     linkTo: "/Reservation",
//   },
//   {
//     id: 3,
//     name: "회원가입",
//     linkTo: "/Auth",
//   },
//   {
//     id: 4,
//     name: "로그인",
//     linkTo: "/Login",
//   },
// ];

/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Nav.scss";
class NavIcons extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
  }
  componentDidMount() {
    const isToken = localStorage.getItem("token");
    if (isToken) {
      this.setState({ login: true });
    } else {
      this.setState({ login: false });
    }
  }
  render() {
    return (
      <div className="nav-icons">
        {this.state.login ? (
          <Link className="nav-icon">아워플레이스 소개</Link>
        ) : (
          <Link className="nav-icon">아워플레이스 소개</Link>
        )}
        {this.state.login ? (
          <Link className="nav-icon" to="/BookMarkList">
            관심장소
          </Link>
        ) : (
          <Link className="nav-icon" to="/BookMarkList">
            관심장소
          </Link>
        )}
        {this.state.login ? (
          <Link className="nav-icon" to="/Reservation">
            예약관리
          </Link>
        ) : (
          <Link className="nav-icon" to="/Reservation">
            예약관리
          </Link>
        )}
        {this.state.login ? (
          <Link className="nav-icon" to="/SignUp">
            회원가입
          </Link>
        ) : (
          <Link className="nav-icon" to="/SignUp">
            회원가입
          </Link>
        )}
        {this.state.login ? (
          <Link className="nav-icon">로그아웃</Link>
        ) : (
          <Link className="nav-icon" to="/Login">
            로그인
          </Link>
        )}
      </div>
    );
  }
}
export default NavIcons;
