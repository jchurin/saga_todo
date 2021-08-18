import styled from 'styled-components';

export const TodoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 575px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const UnselectedListContainer = styled.div`
  border-right: 3px solid #69B3B2;
`;

export const SelectedListContainer = styled.div`
  text-decoration: line-through;
  text-decoration-color: #69B3B2;
`;
