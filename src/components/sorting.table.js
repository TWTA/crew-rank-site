// src/components/sorting.table.js
import React from "react";

import { useTable, useSortBy } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    )

    // Render the UI for your table
    return (
        <div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(
                        (row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })}
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
            <br />
            <div>Showing the first 20 results of {rows.length} rows</div>
        </div >
    )
}

function SortingTableComponent() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'CrewRank Leader Board',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name',
                    },
                    {
                        Header: 'Overall Ratio',
                        accessor: 'overall',
                    },
                    {
                        Header: 'Imposter Ratio',
                        accessor: 'imposter',
                    },
                    {
                        Header: 'Crewmate Ratio',
                        accessor: 'crewmate',
                    },
                    {
                        Header: 'Ranked Games',
                        accessor: 'games',
                    },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "name": "The Dead Body",
            "overall": 0.5,
            "imposter": 0.5,
            "crewmate": 0.5,
            "games": 75
        },
        {
            "name": "Innocent Crewmate",
            "overall": 0.5,
            "imposter": 0.4,
            "crewmate": 0.6,
            "games": 15
        },
        {
            "name": "Pacifist",
            "overall": 0.3,
            "imposter": 0.1,
            "crewmate": 0.5,
            "games": 66
        },
        {
            "name": "Vent Runner",
            "overall": 0.5,
            "imposter": 0.9,
            "crewmate": 0.1,
            "games": 67
        },
        {
            "name": "Fast Talk",
            "overall": 0.6,
            "imposter": 0.8,
            "crewmate": 0.4,
            "games": 23
        },
        {
            "name": "Minding My Own Business",
            "overall": 0.6,
            "imposter": 0.8,
            "crewmate": 0.4,
            "games": 23
        },
        {
            "name": "Saboteur",
            "overall": 0.4,
            "imposter": 0.7,
            "crewmate": 0.1,
            "games": 23
        },
        {
            "name": "Nobody Saw Me Do It",
            "overall": 0.7,
            "imposter": 0.8,
            "crewmate": 0.6,
            "games": 23
        }]
    console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default SortingTableComponent;
