import React from "react";
import firebase from "firebase";

class Portfolio {
    constructor (pname, assets, allocations) {
        this.pname = pname;
        this.assets = assets;
        this.allocations = allocations;
    }
    toString() {
        const asset_mix = this.assets.map(function(a, i) {
            return [a, this.allocations[i]];
        });
        return this.pname + ": " + asset_mix;
    }
}

export async function getPortfolios() {
    var portfolioConverter = {
        toFirestore: function(portfolio) {
            return {
                pname: Portfolio.pname,
                assets: Portfolio.assets,
                allocations: Portfolio.allocations
            };
        },
        fromFirestore: function(snapshot, options) {
            const data = snapshot.data(options);
            return new Portfolio(data.pname, data.assets, data.allocations);
        }
    };

    const db = firebase.firestore();
    
    const portfoliosRef = db.collection("portfolios");
    const snapshot = await portfoliosRef.withConverter(portfolioConverter).get();
    snapshot.forEach(doc => {

    });
    return res
}
