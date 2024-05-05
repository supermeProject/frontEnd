import React, { useState } from "react";
import styled from "styled-components";
import DarkButton from "../common/DarkButton";
import { Link } from "react-router-dom";

const Layout = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 90px 0 200px 0;
  padding: 0 2rem;
  @media screen and (max-width: 700px) {
    margin: 90px 0 50px 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin-top: 60px;
`;

const Title = styled.p`
  font-size: 1.6rem;
  margin: auto;
  margin-bottom: 1rem;
`;

const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1.7rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputTitle = styled.label`
  font-size: 0.7rem;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 0.6rem;
  flex: 1 1 auto;
  border: 1px solid var(--color-lightgray);
`;

const ButtonWrapper = styled.div`
  margin-top: 1.7rem;
`;

const SignUp = styled(Link)`
  font-size: 0.8rem;
  margin-top: 3rem;
  letter-spacing: 2px;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // 로그인 성공 시 처리
        console.log("Login successful");
      } else {
        // 로그인 실패 시 처리
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Title>LOGIN</Title>

        <InputCard>
          <InputTitle htmlFor="email">EMAIL</InputTitle>
          <Input
            type="email"
            id="email"
            name="email"
            autoComplete="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputCard>

        <InputCard>
          <TitleWrapper>
            <InputTitle htmlFor="password">PASSWORD</InputTitle>
            <InputTitle>Forgot?</InputTitle>
          </TitleWrapper>
          <Input
            type="password"
            id="password"
            name="password"
            autoComplete="false"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputCard>

        <ButtonWrapper>
          <DarkButton type="submit" text="SIGN IN" />
        </ButtonWrapper>

        <SignUp to="/signup">Create account</SignUp>
      </Form>
    </Layout>
  );
}
