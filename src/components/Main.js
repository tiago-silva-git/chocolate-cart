import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

import SweetCard from "./SweetCard";
import TotalSummary from "./TotalSummary";



export default function Main() {
    const [state, setState] = useState("");

    useEffect(() => {
        const request = async () => {
            const response = await axios.get(
                `https://chocolate-cart.vercel.app/acima-10-reais.json`
              );
   
              const infosSweet = response.data.items;

          setState(
            infosSweet.map((elem, i) => <SweetCard image={elem.imageUrl} nameSweet={elem.name} fullPrice={`R$ ${(elem.price / 100).toFixed(2)}`} price={`R$ ${(elem.sellingPrice / 100).toFixed(2)}`} key={i}/>)
          );

        };
        request();
      }, [1]);


    return (
        <main>
            {state}
            <TotalSummary />
        </main>
    );
  }
