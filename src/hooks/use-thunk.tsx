import { SerializedError, AsyncThunkAction, unwrapResult } from '@reduxjs/toolkit';
import { useCallback, useState } from 'react';
import { useAppDispatch } from '../utils/redux-hook';

type ThunkArgs<T> = T;
type ThunkActionCreator<R, T> = (args: ThunkArgs<T>) => AsyncThunkAction<R, T, object>;

function useThunk<R, T>(thunkActionCreator: ThunkActionCreator<R, T>) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<SerializedError | null>(null);
    const dispatch = useAppDispatch();

    const executeThunk = useCallback(async (args: T) => {
        setIsLoading(true);
        try {
            const action = await dispatch(thunkActionCreator(args));
            // Assuming the thunk action is created using createAsyncThunk from Redux Toolkit,
            // the action will be automatically unwrapped using unwrapResult(),
            // and the resolved data will be returned.
            const result: R = unwrapResult(action);
            return result;
        } catch (e) {
            // If the thunk action is rejected, the error will be caught here.
            setError(e as SerializedError);
            throw e;
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, thunkActionCreator]);

    return [executeThunk, isLoading, error] as const;


    // const runThunk = useCallback(
    //     async (args: T) => {
    //       setIsLoading(true);
    //       dispatch(thunkActionCreator(args))
    //         .unwrap()
    //         .catch((err) => setError(err))
    //         .finally(() => setIsLoading(false));
    //     },
    //     [dispatch, thunkActionCreator]
    //   );
    
    //   return [runThunk, isLoading, error];
}

export { useThunk };