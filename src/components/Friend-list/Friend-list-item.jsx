import PropTypes from 'prop-types';
import { Status, Avatar, Name, FriendItem } from "./Friend-list-item.styled";

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return(
        <FriendItem>
            <Status>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendItem>
    );
};

FriendListItem.protoType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}