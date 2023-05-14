import styled from "styled-components";

export const SiderContent = styled.div`
  height: 100vh;
  padding: 16px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  margin-top: 25%;
  div {
    color: #fff;
  }
  span {
    color: #000;
  }
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  width: 100px;
  height: 100px;
  font-size: 90px;
`;
