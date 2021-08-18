import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #1F2740;
  display: grid;
  grid-template-columns: 4fr 1fr;
  border-top: 3px solid #69B3B2;
  place-items: center;
  /* justify-content: space-around;
  align-content: space-around;     */
`;

export const ButtonsContainer = styled.div`
  /* background-color: #1F2740; */
  display: grid;
  grid-template-rows: 1fr 1fr;
  /* border-top: 3px solid #69B3B2; */
  place-items: center;
  /* justify-content: space-around;
  align-content: space-around;     */
`;

export const InputWrapper = styled.input`
  width: 1000px;
  /* height: 50px; */
  border: none;
  border-bottom: 3px solid #69B3B2;
  background-color: #1F2740;
  color: #69B3B2;
  padding: 12px 20px;
  font-size: 50px;
  :focus-visible {
    outline: unset;
  }
  `;

export const ButtonAdd = styled.button`
  width: 300px;
  height: 70px;
  border: 4px solid #131A2D;
  font-size: xx-large;
  background-color: #549B97;
  color: #131A2D;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  &.diss {
    background-color: gray;
    &:hover {
      cursor: not-allowed;
      width: 300px;
      height: 70px;
    }
  }
  :hover {
    cursor: pointer;
    width: 305px;
    height: 75px;
  }
`;

export const ButtonClear = styled.button`
  width: 300px;
  height: 70px;
  border: 4px solid #131A2D;
  font-size: xx-large;
  background-color: #FA3757;
  color: #131A2D;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  &.diss {
    background-color: gray;
    &:hover {
      cursor: not-allowed;
      width: 300px;
      height: 70px;
    }
  }
  :hover {
    cursor: pointer;
    width: 305px;
    height: 75px;
  }
`;

