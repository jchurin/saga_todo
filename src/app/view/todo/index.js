import React from 'react'
import { useSelector } from 'react-redux'
import List from './list';
import { SelectedListContainer, TodoWrapper, UnselectedListContainer } from './styled';

const Todo = () => {
  console.log('Todo');
  const { list } = useSelector((state) => state.todo)

  return (
    <TodoWrapper>
      <UnselectedListContainer><List list={list.filter((i) => !i.checked)} /></UnselectedListContainer>
      <SelectedListContainer><List list={list.filter((i) => i.checked)} /></SelectedListContainer>
    </TodoWrapper>
  )
}

export default Todo;