import styled from "styled-components";


export const StyledTable = styled.table`
    border-radius: 5px;
    border: none;
    border-collapse: collapse;
    width: 100%;
    background-color: #FFFFFF;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
`

export const TableRow = styled.tr`
    text-align: center;
    border-right: 2px solid #F5F5F5;
    font-size: 12px;
`

export const TableHead = styled.th`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    padding: 1rem 0;
    color: #ffffff;
    background: #18243e;
    border-bottom: 1px solid #EAEAEA ;
    border-right: 1px solid #EAEAEA ;

`

export const TableData = styled.td`

    text-align: center;
    padding: 1rem 0;
    border-right: 2px solid #F5F5F5;
    border-bottom: 2px solid #F5F5F5;
    font-size: 16px;
    white-space: nowrap;
`