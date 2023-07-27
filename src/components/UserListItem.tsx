

import { UserType } from "../types";
type UserListItemProps = {
    user: UserType
}

const UserListItem = ({user}:UserListItemProps) => {
    
    return (
        <div>
            <h6>{user.name}</h6>
        </div>
    )
}
export default UserListItem;