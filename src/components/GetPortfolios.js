import React from "react";
import firebase from "firebase";

export function getPortfolios() {
    const db = firebase.firestore();
    const portfolios = [];

    db.collection("portfolios").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            portfolios.push("Portfolio Name: " + doc.data().pname
                            + ", Assets: " + doc.data().assets
                            + ", Allocations: " + doc.data().allocations);
        });
    });

    return portfolios;
}

export class PortfolioView extends React.Component {
    render() {
        return <p> {getPortfolios()}</p>
    }
}
