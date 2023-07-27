
import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

import { UserType } from "../types";
type UserListItemProps = {
    users: UserType[] | []
}

const UserListItem = ({users}:UserListItemProps) => {

    const header = (
        <>
          <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
          </Button>
          {error && <div>Error deleting user.</div>}
          {user.name}
        </>
      );
      
    return (
        <></>
    )
}
export default UserListItem;