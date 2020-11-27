import React from "react"
import { Button } from "./Button"
import EmailBg from "../assets/images/zen_bg.jpg"
import styled from "styled-components"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Header 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, quia!</p>

        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email"
                     placeholder={"Enter your email"}
                     id={"email"} />
            </label>
            <Button
              as={"button"}
              type={"submit"}
              primary={"true"}
              round={true}
              css={`
                height: 48px;
                
                @media screen and (max-width: 768px) {
                  width: 100%;
                  max-width: 350px;
                }
                
                @media screen and (max-width: 400px) {
                  width: 100%;
                  max-width: 250px;
                }
              `}
            >Sign up</Button>
          </FormWrap>
        </form>

      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: url(${EmailBg}) center center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display:flex;
  justify-content: center;
  align-items: center;
`

const EmailContent = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

h1{
  text-align:center;
  margin-bottom: 1rem;
  font-size: clamp(1rem,5vw,3rem);
  padding: 0 1rem;
}

p {
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  padding: 0 1rem;
  margin-bottom: 2rem;
}

form {
  z-index: 10;
}
`

const FormWrap = styled.div`
 display: flex;
 input {
   padding: 1rem 1.5rem;
   outline: none;
   width: 350px;
   height: 48px;
   border-radius: 50px;
   border:none;
   margin-right: 1rem;   
 }
 @media screen and (max-width: 768px){
   display:flex;
   flex-direction: column;
   padding: 0 1rem;
 }
 
 input {
   margin-bottom: 1rem;
   width: 100%;
   margin-right: 0;
 }
`