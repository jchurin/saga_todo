import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: #1F2740;
  display: grid;
  grid-template-columns: 1fr 4fr;
  border-bottom: 3px solid #69B3B2;
  place-items: center;
  justify-content: space-around;
  align-content: space-around;    
`;

export const HeaderIcon = styled.img`
  width: 200px;
  height: 200px;
`;

export const HeaderText = styled.div`
  font-size: 100px;
  color: #FA3757;
  font-family: 'Courier New', Courier, monospace;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

