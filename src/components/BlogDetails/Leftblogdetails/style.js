import styled from "styled-components";

export const LeftblogdetailsStyle = styled.div`
  width: 68%;
  background-color: transparent;
  .firstcontent {
    img {
      width: 100%;
      margin-bottom: 20px;
    }
    .title {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
    .travel_box {
      display: flex;
      align-items: center;
      margin-top: 20px;

      p {
        width: fit-content;
        color: #999;
        font-size: 14px;
        transition-duration: 0.3s;
        &:hover {
          color: #ff2020;
        }
        i {
          font-size: 16px;
          margin-right: 12px;
          margin-left: 12px;
          font-weight: bold;
        }
      }
    }
    .text {
      font-size: 15px;
      font-weight: 400;
      color: #999;
      line-height: 28px;
      margin-top: 24px;
    }
  }
  .mcse {
    width: 100%;
    background-color: #f2f3f7;
    padding: 20px 30px;
    p {
      width: 100%;
      padding: 25px;
      font-style: italic;
      line-height: 28px;
      color: #999;
      background-color: #fff;
      border-left: 2px solid #000;
    }
  }

  .text {
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    color: #777;
    margin-top: 20px;
  }

  .prev-next {
    display: flex;
    justify-content: space-between;
    div {
      width: 50%;
      display: flex;
      margin: 35px 0;
      align-items: center;
      &:hover{
          .arrow{
              opacity: 1;
          }
      }
      img {
        margin-right: 12px;
        width: 55px;
        height: 55px;
      }
      .texts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
          margin: 5px;
          text-align: left;
        }
      }
    }

    .nextbox {
      display: flex;
      flex-direction: row-reverse;
      img {
        margin-left: 12px;
      }
      .texts {
        text-align: right !important;
        align-items: flex-end;
        line-height: 30px;
        p{
            margin: 0;
        }
        .title {
          color: #777;
        }
      }
    }
  }
`;
