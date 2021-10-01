import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  padding: 0 170px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .returning {
    width: 100%;
    height: fit-content;
    padding: 10px 20px;
    background-color: #eee;
    a {
      font-size: 17px;
    }
  }
  .if_you {
    padding-left: 20px;
    margin: 0;
  }
  .checkbox {
    display: flex;
    /* align-items: center; */
    input {
      margin-right: 20px;
      width: 12px;
      height: 12px;
    }
    p {
      margin: 0;
    }
  }
  .dflexinput {
    display: flex;
    margin: 20px 0;
    input {
      width: 49%;
      height: 40px;
      border: 1px solid #ddd;
      font-size: 17px;
      margin-right: 20px;
      text-indent: 10px;
    }
    .login {
      width: 110px;
      height: 55px;
      border: 1px solid #6277fd;
      border-radius: 5px;
      color: #6277fd;
      background-color: transparent;
      transition-duration: 0.3s;
      margin-right: 10px;
      &:hover {
        background-color: #6277fd;
        color: white;
      }
    }
  }
  .lost {
    transition-duration: 0.3s;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
  .applybox {
    display: flex;
    flex-direction: column;
    input {
      width: 70%;
      height: 42px;
      border: 1px solid #ddd;
      font-size: 17px;
      text-indent: 10px;
      border-radius: 4px;
      margin: 12px 0;
    }
    button {
      border: 1px solid #6277fd;
      color: #6277fd;
      transition-duration: 0.3s;
      font-size: 18px;
      width: 150px;
      height: 44px;
      border-radius: 22px;
      background-color: transparent;
      &:hover {
        background-color: #6277fd;
        color: white;
      }
    }
  }
  .mainbox {
    display: flex;
    width: 100%;
    margin-top: 40px;
    .leftBox {
      width: 70%;
      padding: 20px;
      .billing {
        font-size: 21px;
        font-weight: bold;
        color: #6277fb;
      }
      form {
        input {
          width: 100%;
          height: 40px;
          border: 1px solid #ddd;
          text-indent: 10px;
          margin: 6px 0;
        }
        .select {
          width: 100%;
          height: 40px;
          text-indent: 10px;
        }
        .flexinput {
          display: flex;
          margin: 6px 0;
          justify-content: space-between;
          input {
            width: 48%;
            margin-right: 12px;
            border: 1px solid #ddd;
            text-indent: 10px;
            height: 40px;
            border-radius: 5px;
          }
        }
        .checkbox {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 20px;
          input {
            width: 14px;
            height: 14px;
            margin-right: 5px;
          }
        }
      }
      .shipingbox {
        font-size: 20px;
        color: #6277fb;
      }
      .checkbox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        font-size: 15px;
        input {
          width: 14px;
          height: 14px;
          margin-right: 5pxpx;
        }
      }
      .textarea {
        width: 100%;
        height: 150px;
        border: 1px solid #ddd;
        padding: 14px;
      }
    }

    .rightBox {
      width: 29%;
      background-color: #eee;
      padding: 20px;
      border-radius: 10px;
      .title {
        font-size: 20px;
        margin: 0;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
      }
      table {
        width: 100%;
        tr {
          th {
            text-align: left;
          }
          th,
          td {
            border-bottom: 1px solid #ccc;
            padding: 10px 0;
            &:nth-child(1) {
              width: 140px;
            }
            &:last-child {
              text-align: right;
              width: 120px;
            }
          }
        }
      }
      .checkbox {
        margin: 12px 0;
        align-items: center;
        input {
          width: 14px;
          height: 14px;
        }
      }
      button{
          width: 100%;
          height: 90px;
          border-radius: 6px;
          border: 1px solid #6277fb;
          color: #6277fb;
          font-size: 17px;
          margin: 14px 0;
          transition-duration: .3s;
          &:hover{
            background-color: #6277fb;
            color: white;
          }
      }
    }
  }
`;
