import React from 'react';
import Item from '../item';
import { ListWrapper } from './styled';


const List = ({list}) => {
  console.log('List');
  return (
    <ListWrapper>
      { list.map((i) => <Item key={i.id} {...i}/>)}
    </ListWrapper>
  )
}

export default List;