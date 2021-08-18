import React from 'react';
import { ToolbarTrash } from './styled';
import trash from '../../../img/trash.png';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../data/todo';

const Toolbar = ({id}) => {

  const dispatch = useDispatch();

  const remove = async () => {
    dispatch(todoActions.remove(id))
  }

  return <ToolbarTrash src={trash} onClick={remove} />
}

export default Toolbar