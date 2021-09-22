import styled from "styled-components";

export const LEftstyle = styled.div`
  width: 68%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  img{
    width: 100%;
  }
  .content {
    width: 100%;
    height: fit-content;
    padding: 20px 10px;
    position: relative;
    box-shadow: 0 0 10px #eee;
    margin-bottom: 40px;
    &:nth-child(5){
        margin-bottom: 60px;
    }
    .data {
      position: absolute;
      top: 320px;
      left: 50px;
      width: 90px;
      height: 95px;
      background-color: #ff2020;
      color: white;
      font-size: 28px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      font-family: "Josefin sans", sans-serif;
      transition-duration: 0.5s;
      &:hover {
        background-color: transparent;
        color: #ff2020;
      }
    }
    .texts {
      padding: 25px 20px 0 20px;
      
      .title {
        margin: 0;
        font-size: 24px;
        transition-duration: .4s;
        font-weight: 600;
        &:hover{
            color: #ff2020;
        }
      }
      .text {
          font-size: 16px;
          font-weight: 400;
          line-height: 30px;
      }
      .travel {
        display: flex;
        i{
            font-weight: 900;
            margin-right: 10px;
        }
        p {
          margin-right: 10px;
          transition-duration: 0.3s;
          &:hover {
            color: #ff2020;
          }
        }
      }
    }
  }
`;
