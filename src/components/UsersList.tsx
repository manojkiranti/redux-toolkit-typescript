import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../utils/redux-hook';
import { fetchUsers } from '../store';

import Skeleton from './Skeleton';
import UserListItem from './UserListItem';
import { useThunk } from '../hooks/use-thunk';

const UsersList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)

    useEffect(() => {
        doFetchUsers('ram')
    },[doFetchUsers])
    return (
        <></>
    )
}

export default UsersList;