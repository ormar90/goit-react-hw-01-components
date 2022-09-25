import styled from 'styled-components';

export const TransactionTable = styled.table`
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    padding: 16px;
    max-width: 372px;
    background-color: #2A2E35;
    color: white;
`;
export const TransactionHead = styled.thead`
    
`;
export const TransactionHeader = styled.th`
    text-transform: uppercase;
    text-align: center;
`;
export const TransactionBody = styled.tbody`
    background-color: white;
`;
export const TransactionData = styled.td`
    min-width: calc(320px / 3);
    text-align: center;
    border: none;
    border: 1px solid;
    border-radius: 10px;
    color: black;
`;
