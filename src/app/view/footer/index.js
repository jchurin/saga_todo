import React, { useState } from 'react';
import { ButtonAdd, ButtonClear, FooterWrapper, InputWrapper, ButtonsContainer } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { addNewItem, clear as clearAPI } from '../../api';
import { todoActions } from '../../data/todo';

const Footer = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.todo);
  const [ item, setItem ] = useState("");
  const addItem = async () => {
    dispatch(todoActions.toggleLoading());
    const response = await addNewItem(item);
    dispatch(todoActions.push(response));
    dispatch(todoActions.toggleLoading());
    setItem("");
  }
  const clearList = async () => {
    dispatch(todoActions.toggleLoading());
    const response = await clearAPI(item);
    if (response) {
      dispatch(todoActions.setList([]));
    } else {
      dispatch(todoActions.setError());
    }
    dispatch(todoActions.toggleLoading());
  }
  const disabledButtonConfirm = loading || !item.length;
  const disabledButtonClear = loading;
  return (
    <FooterWrapper>
      <InputWrapper type="text" value={item} onChange={(event) => setItem(event.target.value)}/>
      <ButtonsContainer>
        <ButtonClear onClick={clearList} className={disabledButtonClear ? 'diss' : ''} disabled={disabledButtonClear}>{loading ? '...' : 'CLEAR LIST'}</ButtonClear>
        <ButtonAdd onClick={addItem} className={disabledButtonConfirm ? 'diss' : ''} disabled={disabledButtonConfirm}>{loading ? '...' : 'ADD'}</ButtonAdd>
      </ButtonsContainer>
    </FooterWrapper>
  )
}

export default Footer;