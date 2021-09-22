import styled from "styled-components";

export const Confirmtsyle = styled.div`
  width: 100%;
  background-color: #fff;
  .title {
    text-align: center;
    color: #ff2020;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 200px;
    margin-top: 50px;
    .first_table_box {
      width: 52%;
      background-color: #f7f7f7;
      padding: 30px 35px;
      ul {
        width: 100%;
        font-size: 18px;
        li {
          margin: 12px 0;
          color: #777;
          display: flex;
          span {
            margin-right: 50px;
            margin-left: auto;
          }
        }
      }
    }
    .right_table_box {
      width: 46%;
      background-color: #f7f7f7;
      padding: 30px 35px;
      height: fit-content;
      ul {
        font-size: 18px;
        li {
          display: flex;
          color: #777;
          margin: 12px 0;
          span {
            margin-right: 50px;
            margin-left: auto;
          }
        }
      }
    }

    .details_box {
      width: 100%;
      background-color: #f7f7f7;
      padding: 30px 35px;
      margin-top: 40px;
      .title {
        font-size: 17px;
        color: #222;
        text-align: left;
        padding-bottom: 14px;
        border-bottom: 1px solid #ccc;
      }
      table {
        tr {
          padding-top: 10px;
          &:nth-child(5) {
            td:nth-child(1) {
              color: #222 !important;
            }
          }
          &:nth-child(6) {
            td {
              color: #222 !important;
              padding-bottom: 14px;
              border-bottom: 1px solid #ccc;
            }
          }
          &:nth-child(7) {
            td {
              color: #222 !important;
            }
          }
          & th:nth-child(1) {
            width: 560px;
          }
          & th:nth-child(2) {
            width: 200px;
          }
          margin-top: 20px;
          th {
            text-align: left;
            padding-bottom: 14px;
            border-bottom: 1px solid #ccc;
            color: #222;
            &:nth-child(1) {
              padding-left: 15px;
            }
          }
          td {
            padding: 10px 0;
            &:nth-child(1) {
              color: #777;
            }
            &:nth-child(3) {
              color: #777;
            }
          }
        }
      }
    }
  }
`;

export const Subtotal = styled.tr`
  color: #222 !important;
  color: red;
`;
export const Shiping = styled.tr`
  color: #222 !important;
  padding-bottom: 14px;
  border-bottom: 1px solid #ccc;
`;
