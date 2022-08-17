import React from "react";
import styled from "styled-components";


export default function SweetCard(props) {
    return (
        <PriceSweet>
            <figure>
                <ImgSweet src={props.image}></ImgSweet>
            </figure>
            <InfoSweet>
                <h4>{props.nameSweet}</h4>
                <p>{props.fullPrice}</p>
                <p>{props.price}</p>
            </InfoSweet>
        </PriceSweet>
    );
}

const PriceSweet = styled.div`
display: flex;
`;

const ImgSweet = styled.img`
object-fit: contain;
height: 90px;
width: 90px;

margin: 16px 16px 0px 16px;
border: 1px solid #D5D5D5;
`;

const InfoSweet = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 16px 0px 16px 0px;
font-size: .75rem;
letter-spacing: -.02em;

p:nth-child(2)  {
    color: #d5d5d5;
    font-size: .75rem;
    letter-spacing: -.02em;
}

p:nth-child(3)  {
    font-size: .75rem;
    letter-spacing: -.02em;
}

`;
