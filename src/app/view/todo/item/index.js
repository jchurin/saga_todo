import React from 'react';
import { ItemText, ItemWrapper, BulletItem, CheckboxWrapper } from './styled';
import Toolbar from './toolbar';
import bulletItem from '../../../img/bullet-item.png'
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../data/todo';
import { toggleCheck as toggleCheckAPI } from '../../../api';
import { useSelector } from 'react-redux';

const Item = ({ id, text, checked }) => {
  
  const dispatch = useDispatch();
  
  const { loading } = useSelector((state) => state.todo);
  
  const toggleCheck = async () => {
    dispatch(todoActions.toggleLoading())
    const response = await toggleCheckAPI(id);
    if (response) {
      dispatch(todoActions.toggleCheck(id))
    } else {
      dispatch(todoActions.setError())
    }
    dispatch(todoActions.toggleLoading())
  }
  
  return (
    <ItemWrapper>
      <BulletItem src={bulletItem} />
      <CheckboxWrapper type="checkbox" disabled={loading} checked={checked} onChange={toggleCheck} />
      <ItemText>{text}</ItemText>
      <Toolbar id={id} />
    </ItemWrapper>
  )
}

export default Item;