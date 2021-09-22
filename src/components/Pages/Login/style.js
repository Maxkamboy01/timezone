import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 100%;
  background-color: #fff;
  .form_box {
    width: 100%;
    padding: 0 200px;
    display: flex;
    justify-content: space-between;

    .instructions {
      background: rgb(175, 141, 172);
      background: linear-gradient(
        90deg,
        rgba(175, 141, 172, 1) 5%,
        rgba(138, 107, 136, 1) 49%,
        rgba(88, 62, 86, 1) 100%
      );
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 80vh;
      padding: 80px 70px;
      color: white;
      h2 {
        font-size: 24px;
        margin: 0 0 30px;
      }
      .text {
        font: 16px "Roboto", sans-serif;
        margin: 0px 0px 15px;
      }
      button {
        font-size: 14px;
        text-transform: uppercase;
        padding: 18px 36px;
        width: fit-content;
        margin: 28px auto 0;
        font-family: "Roboto", sans-serif;
        border: 1px solid #fff;
        background-color: transparent;
        color: white;
        transition-duration: 0.3s;
        &:hover {
          background-color: #fff;
          color: #ff2020;
        }
      }
    }

    form {
      width: 50%;
      height: 80vh;
      padding: 80px 70px;
      .title {
        font-size: 26px;
        font-family: "Josefin Sans", sans-serif;
        margin: 0px 0px 80px;
        line-height: 35px;
        font-weight: bold;
      }
      input {
        width: 100%;
        height: 40px;
        background-color: #fff;
        padding: 6px 12px;
        border: 0;
        border-bottom: 1px solid #ddd;
        font-size: 1rem;
        margin-bottom: 12px;
        color: #495057;
      }
      .remember {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin: 11px 0 0;
        input {
          width: 20px;
          height: 20px;
          margin-right: 20px;
        }
      }
      button{
          font-size: 15px;
          font-weight: 400;
          padding: 18px 36px;
          width: 100%;
          color: #2577fd;
          background-color: transparent;
          border: 1px solid #2577fd;
          border-radius: 5px;
          transition-duration: .5s;
          margin: 30px 0 17px;
          &:hover{
              background-color: #2577fd;
              color: white;
          }
      }
      a{
          text-align: right;
          float: right;
          color: #777777;
      }
    }
  }
`;
