// src/components/sorting.table.js
import React, { useState } from 'react';

import { orderBy } from 'lodash';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';

function SortingTableComponent() {
    const columns = [
        {
            Header: 'CrewRank Leader Board',
            columns: [
                {
                    name: 'Name',
                    selector: 'name',
                    sortable: true,
                },
                {
                    name: 'Overall Ratio',
                    selector: 'overall',
                    sortable: true,
                },
                {
                    name: 'Imposter Ratio',
                    selector: 'imposter',
                    sortable: true,
                },
                {
                    name: 'Crewmate Ratio',
                    selector: 'crewmate',
                    sortable: true,
                },
                {
                    name: 'Ranked Games',
                    selector: 'games',
                    sortable: true,
                },
            ],
        }]

    const data = [
        {
            id: 1,
            name: "The Dead Body",
            overall: 0.5,
            imposter: 0.5,
            crewmate: 0.5,
            games: 75
        },
        {
            id: 2,
            name: "Innocent Crewmate",
            overall: 0.5,
            imposter: 0.4,
            crewmate: 0.6,
            games: 15
        },
        {
            id: 3,
            name: "Pacifist",
            overall: 0.3,
            imposter: 0.1,
            crewmate: 0.5,
            games: 66
        },
        {
            id: 4,
            name: "Vent Runner",
            overall: 0.5,
            imposter: 0.9,
            crewmate: 0.1,
            games: 67
        },
        {
            id: 5,
            name: "Fast Talk",
            overall: 0.6,
            imposter: 0.8,
            crewmate: 0.4,
            games: 23
        },
        {
            id: 6,
            name: "Minding My Own Business",
            overall: 0.6,
            imposter: 0.8,
            crewmate: 0.4,
            games: 23
        },
        {
            id: 7,
            name: "Saboteur",
            overall: 0.4,
            imposter: 0.7,
            crewmate: 0.1,
            games: 23
        },
        {
            id: 8,
            name: "Nobody Saw Me Do It",
            overall: 0.7,
            imposter: 0.8,
            crewmate: 0.6,
            games: 23
        }]
    console.log(JSON.stringify(data));

    const [loading, setLoading] = useState(false);
    const [items, setData] = useState(data);
  
    const handleSort = (column, sortDirection) => {
        // simulate server sort
        setLoading(true);

        // instead of setTimeout this is where you would handle your API call.
        setTimeout(() => {
            console.log('Timeout expired');
            setData(orderBy(items, column.selector, sortDirection));
            setLoading(false);
        }, 100);
    };
/*
    console.log('Fetch from api server');
    const fetch = require('node-fetch');
    const https = require("https");
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });
    fetch('https://api.crew-rank.g1a.io:8443/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({query: "query { crewRank { ladder { name overall { games { won total }} imposter { games { won }} crewmate { games { won }}}}}"}),
      agent: httpsAgent,
    })
      .then(res => res.json())
      .then(data => console.log({ data }));
      
    // TODO: restructure 'data' so that it matches the form
    // needed by the table and then call "setData"
*/
    return (
        <DataTable
            title="Crew Rank Ladder" 
            columns={columns} 
            data={data} 
            onSort={handleSort}
            sortServer
            progressPending={loading}        />
    )
}

export default SortingTableComponent;
