const airportData = {
    'BUD': 'Budapest',
    'HEL': 'Helsinki',
    'JFK': 'New York',
    'LHR': 'London',
    'CDG': 'Paris',
    'HND': 'Tokyo',
    'DXB': 'Dubai',
    'SIN': 'Singapore',
    'SYD': 'Sydney',
    'LAX': 'Los Angeles'
};

document.getElementById('print-ticket').addEventListener('click', function() {
    window.print();
});

document.getElementById('generate-ticket').addEventListener('click', function() {
    const newDepartureTime = generateRandomTime();
    const newArrivalTime = generateRandomTime();
    const newSeatNumber = generateRandomSeat();
    const newTicketNumber = generateRandomTicketNumber();
    const newDepartureAirport = generateRandomAirportCode();
    let newArrivalAirport = generateRandomAirportCode();

    // Ensure departure and arrival airports are different
    while (newArrivalAirport === newDepartureAirport) {
        newArrivalAirport = generateRandomAirportCode();
    }
    const newDepartureCity = airportData[newDepartureAirport];
    const newArrivalCity = airportData[newArrivalAirport];

    document.getElementById('departure-time').textContent = newDepartureTime;
    document.getElementById('arrival-time').textContent = newArrivalTime;
    document.getElementById('seat-number').textContent = newSeatNumber;
    document.getElementById('ticket-number').textContent = newTicketNumber;
    document.getElementById('departure-airport').textContent = newDepartureAirport;
    document.getElementById('arrival-airport').textContent = newArrivalAirport;
    document.getElementById('departure-city').textContent = newDepartureCity;
    document.getElementById('arrival-city').textContent = newArrivalCity;

    document.getElementById('mini-departure-time').textContent = newDepartureTime;
    document.getElementById('mini-arrival-time').textContent = newArrivalTime;
    document.getElementById('mini-seat-number').textContent = newSeatNumber;
    document.getElementById('mini-ticket-number').textContent = newTicketNumber;
    document.getElementById('mini-departure-airport').textContent = newDepartureAirport;
    document.getElementById('mini-arrival-airport').textContent = newArrivalAirport;
    document.getElementById('mini-departure-city').textContent = newDepartureCity;
    document.getElementById('mini-arrival-city').textContent = newArrivalCity;
});

function generateRandomTime() {
    const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function generateRandomSeat() {
    const row = Math.floor(Math.random() * 100);
    const seat = String.fromCharCode(65 + Math.floor(Math.random() * 6)); // A-F
    return `${row}${seat}`;
}

function generateRandomTicketNumber() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let ticketNumber = '';
    for (let i = 0; i < 6; i++) {
        ticketNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return ticketNumber;
}

function generateRandomAirportCode() {
    const airportCodes = Object.keys(airportData);
    return airportCodes[Math.floor(Math.random() * airportCodes.length)];
}