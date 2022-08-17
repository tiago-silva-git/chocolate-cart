import React from "react";
import styled from "styled-components";


export default function SweetCard(props) {
    const { image, nameSweet, fullPrice, price} = props
    return (
        <CardSweet>
            <figure>
                <ImgSweet src={image}></ImgSweet>
            </figure>
            <InfoSweet>
                <h4>{nameSweet}</h4>
                <p>{fullPrice}</p>
                <p>{price}</p>
            </InfoSweet>
        </CardSweet>
    );
}

const CardSweet = styled.div`
display: flex;

figure {
    display: flex;
}
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
`;
