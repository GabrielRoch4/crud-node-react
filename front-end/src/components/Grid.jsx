import styled from "styled-components";
// import axios from "axios";
// import { FaTrash, FaEdit } from "react-icons/fa";
// import { Toast } from "react-toastify";

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"};
    } 
`;

const Grid = () => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyweb>Telefone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
        </Table>
    );
};

export default Grid;

