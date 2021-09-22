import styled from "styled-components";

export const Rightstyle = styled.div`
  width: 29%;
  background: transparent;
  .search-box {
    width: 100%;
    height: fit-content;
    padding: 30px 25px;
    background-color: #fbf9ff;
    margin-bottom: 30px;
    .inputs {
      display: flex;
      margin-bottom: 20px;

      input {
        width: calc(100% - 35px);
        height: 40px;
        border: 1px solid #ddd;
        text-indent: 10px;
      }
      button {
        width: 45px;
        height: 40px;
        background-color: #ff2020;
        color: white;
        border: none;
        font-size: 16px;
      }
    }
    button {
      width: 90%;
      height: 43px;
      border: 1px solid #ff2020;
      background-color: #ff2020;
      font-size: 16px;
      transition-duration: 0.4s;
      color: white;
      letter-spacing: 4px;
      margin-left: 5%;
      &:hover {
        background-color: #fff;
        color: black;
      }
    }
  }

  .category-box {
    width: 100%;
    height: fit-content;
    background-color: #fbf9ff;
    padding: 30px 25px;
    margin-bottom: 40px;
    .title {
      font-size: 20px;
      font-weight: 500;
      font-family: "Josefin Sans", sans-serif;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        padding-left: 10px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        padding-top: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        transition-duration: 0.3s;
        cursor: pointer;
        &:hover {
          color: #ff2020;
        }
      }
    }
  }

  .recent-box {
    width: 100%;
    height: fit-content;
    background-color: #fbf9ff;
    padding: 30px 25px;
    .title {
      font-size: 20px;
      font-weight: 500;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      padding-left: 5px;
      margin: 0;
      li {
        display: flex;
        margin-bottom: 20px;
        line-height: 28px;
        img {
          width: 70px;
          height: 70px;
          margin-right: 9px;
        }
        .texts {
          .title {
            font-size: 16px;
            font-weight: 600;
            transition-duration: 0.3s;
            cursor: pointer;
            &:hover {
              color: #ff2020;
            }
          }
          .subtitle {
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    }
  }

  .tagclouds {
    width: 100%;
    height: fit-content;
    background-color: #fbf9ff;
    padding: 30px 25px;
    margin-bottom: 40px;
    .title {
      font-size: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #ccc;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      button {
        border: 1px solid #ccc;
        padding: 6px 18px;
        font-size: 12px;
        background-color: transparent;
        transition-duration: 0.4s;
        border-radius: 3px;
        margin-bottom: 10px;
        margin-right: 10px;
        text-transform: lowercase;
        &:hover {
          background-color: #ff2020;
          color: white;
        }
      }
    }
  }

  .instagram-box {
    width: 100%;
    height: fit-content;
    background-color: #fbf9ff;
    padding: 20px 25px;
    margin-bottom: 35px;
    .title {
      font-size: 16px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
    }
    .images {
      display: flex;
      flex-wrap: wrap;
      img {
        width: 75px;
        height: 75px;
        margin-right: 12px;
        margin-bottom: 12px;
        border-radius: 4px;
      }
    }
  }

  .newsletter {
    width: 100%;
    height: fit-content;
    background-color: #fbf9ff;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 16px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
    }
    input {
      width: 100%;
      height: 50px;
      text-indent: 15px;
      margin: 15px 0;
      border: 1px solid #ccc;
      font-size: 14px;
    }
    button {
        width: 100%;
        height: 45px;
        border: 1px solid #ff2020;
        background-color: #ff2020;
        color: white;
        letter-spacing: 2px;
        font-size: 15px;
        transition-duration: .3s;
        margin-bottom: 16px;
        &:hover{
            background-color: transparent;
            color: black;
        }
    }
  }
`;
