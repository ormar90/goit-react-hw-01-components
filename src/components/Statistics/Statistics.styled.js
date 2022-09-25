import styled from "styled-components";

export const StatisticsCard = styled.section`
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
export const Title = styled.h2`
    text-align: center;
    font-weight: 900;
    font-size: 24px;
    line-height: 2;
    margin: 0;
`;
export const StatList = styled.ul`
    display: flex;
    flex-basis: auto;
    list-style: none;
    margin: 0;
    padding: 0;
    color: black;
    border-radius: 10px;
`;
export const StatItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1 1 200px;
    border: 4px solid #2A2E35;
    border-radius: 10px;
    background-color: ${() => {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;    
    }};
`;
export const Label = styled.span`
    font-weight: 500;
    padding: 4px;    
`;
export const Percentage = styled.span`
    padding-bottom: 4px;
    font-size: 14px;
`;