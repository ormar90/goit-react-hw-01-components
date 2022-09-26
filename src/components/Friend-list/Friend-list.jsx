import PropTypes from 'prop-types';
import { FriendList } from "./Friend-list.styled";
import { FriendListItem } from "./Friend-list-item";

export const FriendSection = ({friends}) => {
    return (
        <FriendList>
            {friends.map(item => {
                return (
                    <FriendListItem
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    ></FriendListItem>
                )
            })}
        </FriendList>
    );
}

FriendList.protoType = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
} 