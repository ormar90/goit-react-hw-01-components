import styled from "styled-components";

export const FriendSection = styled.section`
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    padding: 16px;
    max-width: 340px;
    height: 100%;
    background-color: #2A2E35;
    color: white;
    margin-bottom: 16px;
`;
export const FriendItem = styled.li`
    display: flex;
    gap: 16px;
    align-items: center;
    border: 4px solid #2A2E35;
    border-radius: 10px;
    background-color: white;
`;
export const Status = styled.span`
    margin-left: 8px;
    display: block;
    width: 4px;
    background-color: ${(p) => {
        if (p.children) {
            return 'green';
        } else {
            return 'red';
        };    
    }};
    height: 4px;
    padding: 4px;
    border-radius: 50%;
`;
export const Avatar = styled.img`
    padding: 8px;
`;
export const Name = styled.p`
    color: black;
    font-weight: 900;
    padding: 4px;
`;