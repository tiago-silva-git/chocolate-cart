import React from "react";
import SweetCard from "./SweetCard";
import dataSweet from "../data/SweetList";
import TotalSummary from "./TotalSummary";
import CheckoutButton from "./CheckoutButton";


export default function Main() {


    return (
        <main>
            {dataSweet.map((elem) => <SweetCard image={elem.image} fullPrice={elem.fullPrice} nameSweet={elem.nameSweet} price={elem.price}/>)}
            <TotalSummary />
            <CheckoutButton />
        </main>
    );
  }