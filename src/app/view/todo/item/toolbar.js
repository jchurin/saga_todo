import React from 'react';
import { ToolbarTrash } from './styled';
import trash from '../../../img/trash.png';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../data/todo';
import { remove as removeAPI } from '../../../api';

const Toolbar = ({id}) => {
  const dispatch = useDispatch();
  const remove = async () => {
    dispatch(todoActions.toggleLoading())
    const response = await removeAPI();
    if (response) {
      dispatch(todoActions.remove(id))
    } else {
      dispatch(todoActions.setError())
    }
    dispatch(todoActions.toggleLoading())
  }

  return <ToolbarTrash src={trash} onClick={remove} />
}

export default Toolbar