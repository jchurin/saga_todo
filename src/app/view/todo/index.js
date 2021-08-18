import React, { useEffect } from 'react'
import List from './list';
import { SelectedListContainer, TodoWrapper, UnselectedListContainer } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { todoActions } from '../../data/todo';


const Todo = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.todo)

  useEffect(() => {
    dispatch(todoActions.setList());
  }, [dispatch]);

  return (
    <TodoWrapper>
      <UnselectedListContainer><List list={list.filter((i) => !i.checked)} /></UnselectedListContainer>
      <SelectedListContainer><List list={list.filter((i) => i.checked)} /></SelectedListContainer>
    </TodoWrapper>
  )
}

export default Todo;