import React from "react";
import firebase from "firebase";

export function updateAllocation(pname, assets, allocations) {
    const db = firebase.firestore();

    db.collection("portfolios")
        .doc(pname)
        .set({
            pname: pname,
            assets: assets,
            allocations: allocations
        }).then(() => {
            console.log("Value successfully written!");
        }).catch((error) => {
            console.error("Error writing value: ", error);
        });
}
