import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  transition: border-color 0.5s ease-in;

  &:focus,
  &:hover {
    border-color: rgb(255, 130, 92);
  }
`;
