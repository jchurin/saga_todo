import React, { useState } from 'react';
import { ButtonAdd, ButtonClear, FooterWrapper, InputWrapper, ButtonsContainer } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { todoActions } from '../../data/todo';

const Footer = () => {
  const dispatch = useDispatch();
  
  const { loading } = useSelector((state) => state.todo);
  const [ item, setItem ] = useState("");

  const addItem = async () => {
    dispatch(todoActions.push(item));
    setItem("");
  }

  const clearList = async () => {
    dispatch(todoActions.setList([]));
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