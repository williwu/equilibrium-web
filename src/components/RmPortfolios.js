import React from "react";
import firebase from "firebase";

export function rmPortfolio(pname) {
    const db = firebase.firestore();

    db.collection("portfolios").doc(pname).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
