import React from "react";
import styled from "styled-components";


export default function CheckoutButton() {

    return (
        <ButtonBox>
            <Button>Finalizar compra</Button>
        </ButtonBox>
    );
}

const ButtonBox = styled.div`
display: flex;
justify-content: center;
align-items: center;

height: 84px;
`

const Button = styled.button`
width: 347px;
height: 51px;

border-radius: 5px;

font-family: 'Outfit', sans-serif;
font-weight: 700;
font-size: 16px;
letter-spacing: 0.08em;

background: #4973EA;
color: #FFFFFF;
border: none;
`;