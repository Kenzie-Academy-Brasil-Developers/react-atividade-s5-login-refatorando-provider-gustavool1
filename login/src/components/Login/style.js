import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;

  input {
    margin: 10px;
    width: inherit;
    border-radius: 5px;
    background-color: rgb(40, 44, 52);
    color: white;
    border: 2px solid rgb(112, 109, 109);
    height: 25px;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
  }
  label {
    font-size: 10px;
    margin: 0;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    color: white;
  }
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
