import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  color: #ffff;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: .3s;
  
  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }
`