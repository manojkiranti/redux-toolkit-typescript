import { useEffect } from 'react';

import { useAppSelector } from '../utils/redux-hook';
import { fetchUsers } from '../store';

import Skeleton from './Skeleton';
import UserListItem from './UserListItem';
import { useThunk } from '../hooks/use-thunk';

const UsersList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    const { data } = useAppSelector((state) => {
        return state.users;
      });

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    let content;
    if (isLoadingUsers) {
      content = <Skeleton times={6} className="w-full h-10" />;
    } else if (loadingUsersError) {
      content = <div>Error fetching data...</div>;
    } else {
      content = data.map((user) => {
        return <UserListItem key={user.id} user={user} />;
      });
    }
   
    return (
        <div>
            {content}
        </div>
    )
}

export default UsersList;