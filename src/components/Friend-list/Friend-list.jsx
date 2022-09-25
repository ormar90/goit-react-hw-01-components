import PropTypes from 'prop-types';
import { FriendSection, FriendItem, Status, Avatar, Name } from "./Friend-list.styled";

export const FriendList = ({friends}) => {
    return (
        <FriendSection>
            {friends.map(item => {
                return (
                    <FriendItem key={item.id}>
                        <Status>{item.isOnline}</Status>
                        <Avatar src={item.avatar} alt="User avatar" width="48" />
                        <Name>{item.name}</Name>
                    </FriendItem>
                )
            })}
        </FriendSection>
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