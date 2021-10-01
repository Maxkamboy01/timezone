import styled from "styled-components";

export const Contactstyle = styled.div`
  width: 100%;
  .content {
    width: 100%;
    padding: 0 170px;
    display: flex;
    flex-direction: column;
    iframe {
      width: 100%;
      height: 550px;
      margin-bottom: 80px;
      border: 1px solid #ccc;
    }
    .form-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
      form {
        width: 65%;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 27px;
          font-weight: 600;
        }
        textarea {
          width: 100%;
          height: 200px;
          padding: 12px;
          border: 1px solid #ccc;
          font-size: 15px;
        }
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin: 20px auto;
          input {
            width: 48%;
            height: 45px;
            border: 1px solid #ccc;
            text-indent: 10px;
            font-size: 15px;
          }
        }
        input {
          width: 100%;
          height: 45px;
          border: 1px solid #ccc;
          text-indent: 10px;
          font-size: 15px;
          margin: 20px auto;
          margin-top: 0;
        }
        button {
          width: 110px;
          height: 55px;
          color: white;
          background-color: #ff2020;
          font-size: 17px;
          letter-spacing: 1px;
          border: none;
          transition-duration: 0.3s;
          border-radius: 5px;
          border: 1px solid #fff;
          margin-top: 20px;
          &:hover {
            color: #ff2020;
            background-color: #fff;
            border-color: #ff2020;
          }
        }
      }
      ul {
        padding: 0;
        margin: 0;
        padding-top: 40px;
        li {
          margin: 24px 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          line-height: 25px;
          div {
            width: 30%;
            svg {
              width: 32px;
              height: 32px;
              margin: 0;
              margin-right: 20px;
            }
          }
          .texts{
            width: 70%;
            color: #777;

          }
        }
      }
    }
  }
`;
