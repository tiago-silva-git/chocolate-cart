import React from "react";
import styled from "styled-components";


export default function SweetCard() {
    return (
        <PriceSweet>
            <figure>
            <ImgSweet src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000"></ImgSweet>
            </figure>
            <h4>Trufa de morango</h4>
            <p>R$ 3,03</p>
            <p>R$ 2,73</p>
        </PriceSweet>
    );
}

const PriceSweet = styled.div`


`;

const ImgSweet = styled.figure`
width: 150px;
height: 150px;

`;
