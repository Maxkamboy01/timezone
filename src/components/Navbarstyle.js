import styled from "styled-components";

export const Navbarstyle = styled.nav`
  width: 100%;
  height: 15vh;
  background-color: #fff;
  padding: 25px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  box-shadow: auto;
  position: ${({ navbarposition }) =>
    navbarposition == true ? "fixed" : "absolute"};
  top: 0;
  z-index: 9999999999999999999999999;
  box-shadow: 0 1px 20px lightgrey;
  .logo {
    width: 160px;
    height: 50px;
  }
  .ul {
    display: flex;
    align-items: center;
    li {
      a {
        font-size: 16px;
        text-transform: capitalize;
        color: black;
        margin-left: 35px;
        transition-duration: 0.3s;
        font-family: "Josefin Sans";
        &:hover {
          color: #ff2020;
        }
      }
    }
    .li {
      position: relative;
      &:hover {
        .dropdown {
          opacity: 1;
          top: 55px;
          display: block;
        }
      }
      div {
        width: 34px;
        height: 20px;
        position: absolute;
        top: -17px;
        right: -18px;
        color: white;
        background-color: #ff2020;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        border-radius: 20px;
        transition-duration: 0.5s;
        box-shadow: 0px 0px 5px rgb(168, 168, 168);
      }

      .dropdown {
        position: absolute;
        bottom: 0px;
        left: 0;
        top: 45px;
        width: 160px;
        height: 120px;
        padding: 30px 20px;
        background-color: #fff;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;

        a {
          margin: 0;
          margin-bottom: 16px;
        }
      }
    }
    .blogli {
      position: relative;
      &:hover {
        .dropdown {
          opacity: 1;
          top: 55px;
        }
      }
      .dropdown {
        position: absolute;
        top: 45px;
        left: 0;
        padding: 30px 0;
        width: 150px;
        height: 105px;
        background-color: #fff;
        box-shadow: 0 0 4px #aaa;
        font-size: 16px;
        color: #191d34;
        border-radius: 8px;
      }
    }

    .pages {
      position: relative;
      &:hover {
        .dropdown {
          opacity: 1;
          top: 55px;
        }
      }
      .dropdown {
        position: absolute;
        top: 45px;
        left: 0;
        width: 200px;
        height: 250px;
        background-color: #fff;
        padding: 30px 20px;
        background-color: #fff;
        border-radius: 10px;
        padding-left: 0;

        font-family: "Roboto", sans-serif;
      }
    }
  }
  .avatar {
    display: flex;
    align-items: center;
    margin-right: 20px;
    i {
      &:hover {
        color: #ea0000;
      }
      margin-left: 35px;
      font-size: 16px;
      transition-duration: 0.3s;
    }
  }
`;
