import styled from 'styled-components';

export const ItemWrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 5fr 1fr;
`;

export const ItemText = styled.div`
  font-size: 30px;
  color: #69B3B2;
`;

export const BulletItem = styled.img`
  width: 60px;
  height: 60px;
`;

export const CheckboxWrapper = styled.input`
  width: 40px;
  height: 40px;
  :hover {
    width: 45px;
    height: 45px;
    cursor: pointer;
  }
`;

export const ToolbarTrash = styled.img`
  width: 50px;
  height: 50px;
  :hover {
    width: 55px;
    height: 55px;
    cursor: pointer;
  }
`;
