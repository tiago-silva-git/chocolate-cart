import React from "react";
import CheckoutButton from "./CheckoutButton";
import styled from "styled-components";

export default function TotalSummary() {


    return (
        <Section>
            <Total>
                <span>Total</span>
                <span>R$ 14,01</span>
            </Total>
            <FreeShipping>
                <p>Parabéns, sua compra tem frete grátis!</p>
            </FreeShipping>
            <CheckoutButton />
        </Section>
        
    );
  }

const Section = styled.section`
height: 127px;
padding: 12px;
border: 1px solid #D5D5D5;
margin-top: 21px;

div:nth-of-type(3) {
    margin-top: 36px;
}
`;

const Total = styled.div`
display: flex;
justify-content: space-between;
`;

const FreeShipping = styled.div`
display: flex;
justify-content: center;
background: #D2FDAF;
border-radius: 50px;
height: 36px;
align-items: center;
max-width: 315px;
margin: 21px auto 0 auto;

p {
    font-size: 14px;
    color: #3D7820;
}
`