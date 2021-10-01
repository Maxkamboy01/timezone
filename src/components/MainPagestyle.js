import styled from "styled-components";

export const ButtonnUp = styled.a`
  width: 40px;
  height: 40px;
  bottom: 20px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff2020;
  backdrop-filter: blur(5px);
  border: 2px solid #fff;
  border-radius: 6px;
  position: ${({ sticked }) => (sticked ? "fixed" : "relative")};

  svg {
    width: 22px;
    height: 22px;
    fill: #fff;
  }
`;
