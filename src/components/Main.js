import React from "react";
import SweetCard from "./SweetCard";
import dataSweet from "../data/SweetList";
import styled from "styled-components";


export default function Main() {


    return (
        <>
        {dataSweet.map((elem) => <SweetCard image={elem.image} fullPrice={elem.fullPrice} nameSweet={elem.nameSweet} price={elem.price}/>)}
        </>
    );
  }
