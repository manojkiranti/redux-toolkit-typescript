import { SerializedError, AsyncThunkAction, } from '@reduxjs/toolkit';
import { useCallback, useState } from 'react';
import { useAppDispatch } from '../utils/redux-hook';
 
type AsyncThunkActionCreator<R, T> = (args: T) => AsyncThunkAction<R, T, object>;
 
function useThunk<R, T>(
  thunk: AsyncThunkActionCreator<R, T>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<SerializedError | null>(null);
  const dispatch = useAppDispatch();
 
  const runThunk = useCallback((args:any) => {
    setIsLoading(true);
    dispatch(thunk(args))
      .unwrap()
      .catch(e => setError(e))
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);
 
  return [runThunk, isLoading, error];
}
 
export { useThunk };
