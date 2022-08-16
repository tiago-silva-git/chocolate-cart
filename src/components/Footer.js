import React from "react";
import styled from "styled-components";


export default function Footer() {
    return (
      <FooterCart>
        <Title>Meu carrinho</Title>
      </FooterCart>
    );
}
  
const FooterCart = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 47px;

    border-bottom: 1px solid #D5D5D5;
`;

const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
`