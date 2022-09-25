import styled from "styled-components";


export const ProfileCard = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    border-radius: 10px;
    padding: 16px;
    max-width: 340px;
    height: 100%;
    background-color: #212121;
    color: white;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Avatar = styled.img`    
    width: 250px;
    height: auto;
    border-radius: 50%;
    padding: 8px;
    background-color: white; 
`;
export const Name = styled.p`
    font-weight: 900;
    font-size: 24px;
    line-height: 2;
    margin: 0;
`;
export const Tag = styled.p`
    margin: 0;
    line-height: 2;
`;
export const Location = styled.p`
    margin: 0;
    line-height: 2;
`;
export const Stats = styled.ul`
    display: flex;
    flex-basis: auto;
    list-style: none;
    margin: 0;
    padding: 0;
    color: black;
    border-radius: 10px;
`;
export const StatsItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1 1 200px;
    border: 4px solid #212121;
    border-radius: 10px;
    background-color: white;
`;
export const Label = styled.span`
    font-weight: 500;
    padding: 4px;
`;
export const Quantity = styled.span`
    padding-bottom: 4px;
    font-size: 14px;
`;