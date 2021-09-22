import styled from "styled-components";

export const Cartstyle = styled.div`
  width: 100%;
  .content {
    width: 100%;
    padding: 50px 200px;
    table {
      width: 100%;
      tr {
        display: flex;
        align-items: center;
        th {
          text-align: left;
          font-size: 14px;
          color: #828bb2;
          border-bottom: 1px solid #ccc;
          padding: 25px 10px;
          &:nth-child(1) {
            width: 700px;
            display: flex;
            align-items: center;
          }
          &:nth-child(2) {
            width: 100px;
          }
          &:nth-child(3) {
            width: 120px;
          }
        }
        td {
          padding: 30px 10px;
          text-align: left;
          &:nth-child(1) {
            width: 700px;
            display: flex;
            align-items: center;
          }
          &:nth-child(2) {
            width: 100px;
          }
          &:nth-child(3) {
            width: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            .number {
              width: calc(100% - 30px);
              height: 52px;
              background-color: transparent;
              border: 1px solid #ccc;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .buttons {
              display: flex;
              flex-direction: column;
              button {
                width: 30px;
                height: 26px;
                font-size: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                border: 1px solid #ccc;
              }
            }
          }
        }
      }
      .tds {
        border-bottom: 1px solid #ccc;
        td {
          img {
            width: 150px;
            height: 160px;
            margin-right: 25px;
            color: #777;
          }
        }
      }

      .buttonstr {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 30px 10px;
        border-bottom: 1px solid #ccc;
        button {
          width: fit-content;
          padding: 18px 50px;
          background-color: #2577fd;
          color: #fff;
          border-radius: 5px;
          display: inline-block;
          border: 1px solid #2577fd;
          font-size: 15px;
          transition-duration: 0.4s;
          text-transform: capitalize;
          &:hover {
            color: #ff2020;
            background-color: transparent;
          }
        }
      }

      .total {
        display: flex;
        justify-content: flex-end;
        border-bottom: 1px solid #ccc;
        td {
          font-size: 14px !important;
          color: #777;
        }
      }
      ul {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: right;
        list-style: circle;
        li {
          margin: 15px 0;
          color: #828bb2;
        }
        .li1 {
          span {
            font-size: 14px;
            margin-right: 20px;
          }
        }
        .calculate {
          font-size: 13px;
          cursor: pointer;
          i {
            font-size: 17px;
            margin: 0 14px;
          }
        }
        select {
          width: fit-content;
          padding: 18px 50px;
          background-color: #eee;
          color: #222;
          border: none;
          outline: none;
          font-size: 17px;
          margin: 20px 0;
          margin-left: auto;
          border-radius: 6px;
          option {
            height: 50px;
            padding: 10px auto;
            border: none;
            margin-bottom: 10px;
          }
        }
        input {
          width: fit-content;
          padding: 18px 50px;
          border: none;
          background-color: #eee;
          margin: 20px 0 20px auto;
          font-size: 17px;
        }
        .update {
          width: fit-content;
          padding: 22px 60px;
          color: #fff;
          background-color: #2577fd;
          border: 1px solid #2577fd;
          margin: 20px 0 20px auto;
          transition-duration: 0.5s;
          border-radius: 8px;
          text-transform: capitalize;
          &:hover {
            background-color: transparent;
            color: #ff2020;
          }
        }
        .endbuttonstr {
          border-top: 1px solid #ccc;
          display: flex;
          justify-content: flex-end;
          padding-top: 20px;
          margin-bottom: 100px;
          button {
            padding: 22px 40px;
            color: white;
            background-color: #2577fd;
            border: 1px solid #2577fd;
            font-size: 17px;
            text-transform: capitalize;
            margin-left: 14px;
            border-radius: 8px;
            transition-duration: .4s;
            &:hover{
                background-color: transparent;
                color: #ff2020;
            }
          }
        }
      }
    }
  }
`;
