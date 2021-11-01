import styled from 'styled-components'

export const Container = styled.div`
  height: 190px;

  small {
    font-weight: bold;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #8d99ae;
  }
  label {
    font-size: 13px;
  }
  input {
    display: block;
    box-sizing: border-box;
    margin-top: 7px;
    width: 100%;
    padding: 10px;
    border: 2px solid #8d99ae;
    border-radius: 3px;
    color: #fff;
    outline: 0;
    font-size: 15px;
    background-color: #2b2d42;
  }
  button {
    width: max-content;
    padding: 15px 20px;
    background-color: #6cd65c;
    border: 0;
    color: #edf2f4;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
  }
  a {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #b8b8d4;
  }
`
