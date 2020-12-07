import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.color || "rgb(255, 130, 92)"};
  color: ${(props) => (props.color ? "#2E186A" : "#fff")};
  font-size: 1rem;
  font-weight: 200;
  width: 90%;
  height: 70%;
  border: ${(props) => (props.color ? "0.5px solid #2E186A" : "0px")};
  border-radius: 8px;
  height: 40px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 150px;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? "160px" : "100%")};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? "140px" : "100%")};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? "130px" : "100%")};
  }
`;
