import React, { useEffect, useState } from "react";
import firebase from "firebase";

function getPortfolios(onSnapshot) {
    const db = firebase.firestore();
    const portfolios = [];
    var user = firebase.auth().currentUser;

    db.collection("portfolios").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            portfolios.push("Portfolio Name: " + doc.data().pname
                            + ", Assets: " + doc.data().assets
                            + ", Allocations: " + doc.data().allocations);
        });
        onSnapshot(portfolios);
    });

    return portfolios;
}

const PortfolioView = () => {
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
        getPortfolios(setPortfolios);
    }, []);
    
    return(
        <p>{portfolios.map((ele) => 
            <li>{ele}</li>
        )}</p>
    )
}

export default PortfolioView;
