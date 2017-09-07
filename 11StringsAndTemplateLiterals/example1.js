/**
 * Created by Darren on 2017/9/7.
 */
let departures=[
    {
        id:'KL 1255',
        destination: 'Amsterdam',
        departureTime: '21:55',
        gate: 'A13'
    },
    {
        id:'KL 1257',
        destination: 'Amsterdam777',
        departureTime: '21:559',
        expectedDepartureTime: '21:15',
        gate: 'A15'
    }
];

let headers = {
    id: 'Id',
    destination: 'Destination',
    departureTime: 'DepartureTime',
    expectedDepartureTime: 'Exptected Departure Time',
    gate: 'Gate',
    status: 'Status'
};


let tableHeader = `
    <tr>
        <th>${ headers.id }</th>
        <th>${ headers.destination }</th>
        <th>${ headers.departureTime }</th>
        <th>${ headers.expectedDepartureTime }</th>
        <th>${ headers.gate }</th>
        <th>${ headers.status }</th>
    </tr>
`;

let departure = departures[0];

let tableRow = `
    <tr>
        <td>${ departure.id }</td>
        <td>${ departure.destination }</td>
        <td>${ departure.departureTime }</td>
        <td>${ departure.expectedDepartureTime }</td>
        <td>${ departure.gate }</td>
        <td>${ departure.status }</td>
    </tr>
`;

let testTable = `<table>${ tableHeader }${ tableRow }</table>`;

//console.log(testTable);

var defaults ={
    destination: '-',
    departureTime: '-',
    gate: '-',
    status:'-',
    expectedDepartureTime: '-'
};

let presentedDepartures = departures.map(departure => Object.assign({}, defaults, departure));

let tableRows = presentedDepartures.map( departure => `
    <tr>
        <td>${ departure.id }</td>
        <td>${ departure.destination }</td>
        <td>${ departure.departureTime }</td>
        <td>${ departure.expectedDepartureTime }</td>
        <td>${ departure.gate }</td>
        <td>${ departure.status }</td>
    </tr>
`).join('');

let table = `<table>${ tableHeader }${ tableRows }</table>`;

console.log(table);