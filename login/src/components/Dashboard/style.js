import styled from "styled-components";

export const Container = styled.div`
  button {
    border: none;
    font-size: 22px;
    background-color: rgb(76, 81, 94);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: rgb(152 163 185 / 58%) 5px 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    transition: 1s;
  }
  button:hover {
    box-shadow: rgb(85 91 104 / 58%) 1px 1px;
  }
`;
