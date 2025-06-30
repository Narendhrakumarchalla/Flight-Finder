

export const myBookings = [
  {
    bookingId: 'BK001',
    flightName: 'Flight 101',
    airline: 'Air India',
    from: 'Hyderabad',
    to: 'Delhi',
    date: '2025-07-10',
    time: '09:30 AM',
    seat: '12A',
    price: '₹4,500',
    status: 'Confirmed',
  },
  {
    bookingId: 'BK002',
    flightName: 'Flight 202',
    airline: 'IndiGo',
    from: 'Bangalore',
    to: 'Mumbai',
    date: '2025-07-12',
    time: '02:45 PM',
    seat: '21B',
    price: '₹3,200',
    status: 'Confirmed',
  },
  {
    bookingId: 'BK003',
    flightName: 'Flight 303',
    airline: 'SpiceJet',
    from: 'Chennai',
    to: 'Kolkata',
    date: '2025-07-15',
    time: '06:00 PM',
    seat: '7C',
    price: '₹4,000',
    status: 'Cancelled',
  },
  {
    bookingId: 'BK004',
    flightName: 'Flight 404',
    airline: 'Vistara',
    from: 'Pune',
    to: 'Goa',
    date: '2025-07-18',
    time: '11:15 AM',
    seat: '15D',
    price: '₹2,750',
    status: 'Confirmed',
  },
  {
    bookingId: 'BK005',
    flightName: 'Flight 505',
    airline: 'Emirates',
    from: 'Delhi',
    to: 'Dubai',
    date: '2025-07-20',
    time: '03:00 AM',
    seat: '3E',
    price: '₹22,000',
    status: 'Confirmed',
  },
  {
    bookingId: 'BK006',
    flightName: 'Flight 606',
    airline: 'Qatar Airways',
    from: 'Mumbai',
    to: 'Doha',
    date: '2025-07-25',
    time: '08:00 PM',
    seat: '1A',
    price: '₹25,000',
    status: 'Pending',
  }
];


export const cities = [
  // 🇮🇳 Indian Cities
  'Hyderabad',
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Pune',
  'Goa',
  'Jaipur',

  // 🌍 International Cities
  'New York',
  'London',
  'Paris',
  'Dubai',
  'Singapore',
  'Sydney',
  'Tokyo',
  'Toronto',
  'Frankfurt',
  'Doha'
];


export const flightDetails = [
  {
    flightName: 'Flight 101',
    airline: 'Air India',
    from: 'Hyderabad',
    to: 'Delhi',
    date: '2025-07-10',
    time: '09:30 AM',
    seat: '12A',
    price: '₹4,500',
  },
  {
    flightName: 'Flight 202',
    airline: 'IndiGo',
    from: 'Bangalore',
    to: 'Mumbai',
    date: '2025-07-12',
    time: '02:45 PM',
    seat: '21B',
    price: '₹3,200',
  },
  {
    flightName: 'Flight 303',
    airline: 'SpiceJet',
    from: 'Chennai',
    to: 'Kolkata',
    date: '2025-07-15',
    time: '06:00 PM',
    seat: '7C',
    price: '₹4,000',
  },
  {
        flightName: 'Flight 404',
        airline: 'Vistara',
        from: 'Pune',
        to: 'Goa',
        date: '2025-07-18',
        time: '11:15 AM',
        seat: '15D',
        price: '₹2,750',
    },
    {
        flightName: 'Flight 505',
        airline: 'Emirates',
        from: 'Delhi',
        to: 'Dubai',
        date: '2025-07-20',
        time: '03:00 AM',
        seat: '3E',
        price: '₹22,000',
    },
    {
        flightName: 'Flight 606',
        airline: 'Qatar Airways',
        from: 'Mumbai',
        to: 'Doha',
        date: '2025-07-25',
        time: '08:00 PM',
        seat: '1A',
        price: '₹25,000',
    }
];

export const flightBookings = [
  {
    bookingId: 'FB001',
    passengerName: 'Aarav Mehta',
    age: 32,
    gender: 'Male',
    seatNumber: '12A',
    ticketNumber: 'TKT123456',
    bookingStatus: 'Confirmed',
    paymentStatus: 'Paid',
  },
  {
    bookingId: 'FB002',
    passengerName: 'Sneha Reddy',
    age: 28,
    gender: 'Female',
    seatNumber: '12B',
    ticketNumber: 'TKT123457',
    bookingStatus: 'Confirmed',
    paymentStatus: 'Paid',
  },
  {
    bookingId: 'FB003',
    passengerName: 'Rahul Sharma',
    age: 45,
    gender: 'Male',
    seatNumber: '13C',
    ticketNumber: 'TKT123458',
    bookingStatus: 'Cancelled',
    paymentStatus: 'Refunded',
  },
  {
    bookingId: 'FB004',
    passengerName: 'Diya Kapoor',
    age: 19,
    gender: 'Female',
    seatNumber: '14A',
    ticketNumber: 'TKT123459',
    bookingStatus: 'Pending',
    paymentStatus: 'Unpaid',
  },
  {
    bookingId: 'FB005',
    passengerName: 'Kabir Nair',
    age: 38,
    gender: 'Male',
    seatNumber: '15B',
    ticketNumber: 'TKT123460',
    bookingStatus: 'Confirmed',
    paymentStatus: 'Paid',
  }
];

export const flightUsers = [
  {
    userId: 'U001',
    name: 'Aarav Mehta',
    email: 'aarav.mehta@example.com',
    phone: '+91-9876543210',
    gender: 'Male',
    age: 32,
    totalBookings: 5,
    lastBookingDate: '2025-06-20',
  },
  {
    userId: 'U002',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    phone: '+91-9123456780',
    gender: 'Female',
    age: 28,
    totalBookings: 3,
    lastBookingDate: '2025-06-18',
  },
  {
    userId: 'U003',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91-9012345678',
    gender: 'Male',
    age: 45,
    totalBookings: 7,
    lastBookingDate: '2025-06-22',
  },
  {
    userId: 'U004',
    name: 'Diya Kapoor',
    email: 'diya.kapoor@example.com',
    phone: '+91-9988776655',
    gender: 'Female',
    age: 19,
    totalBookings: 2,
    lastBookingDate: '2025-06-10',
  },
  {
    userId: 'U005',
    name: 'Kabir Nair',
    email: 'kabir.nair@example.com',
    phone: '+91-9765432109',
    gender: 'Male',
    age: 38,
    totalBookings: 4,
    lastBookingDate: '2025-06-19',
  }
];

export const flights = [
  {
    flightId: 'FL101',
    flightNumber : 'AI101',
    flightName: 'Flight 101',
    airline: 'Air India',
    from: 'Hyderabad',
    to: 'Delhi',
    departureTime: '2025-07-10T09:30',
    arrivalTime: '2025-07-10T11:30',
    duration: '2h',
    capacity: 200,
    seatsAvailable: 25,
    price: '₹4,500',
    status: 'On Time',
  },
  {
    flightId: 'FL202',
    flightNumber: '6E202',
    flightName: 'Flight 202',
    airline: 'IndiGo',
    from: 'Mumbai',
    to: 'Bangalore',
    departureTime: '2025-07-11T06:00',
    arrivalTime: '2025-07-11T08:15',
    duration: '2h 15m',
    capacity: 300,
    seatsAvailable: 10,
    price: '₹3,200',
    status: 'Delayed',
  },
  {
    flightId: 'FL303',
    flightNumber: 'SG303',
    flightName: 'Flight 303',
    airline: 'SpiceJet',
    from: 'Chennai',
    to: 'Kolkata',
    departureTime: '2025-07-12T17:45',
    arrivalTime: '2025-07-12T20:10',
    duration: '2h 25m',
    capacity: 150,
    seatsAvailable: 0,
    price: '₹3,800',
    status: 'Full',
  },
  {
    flightId: 'FL404',
    flightNumber: 'UK404',
    flightName: 'Flight 404',
    airline: 'Vistara',
    from: 'Delhi',
    to: 'Goa',
    departureTime: '2025-07-13T12:30',
    arrivalTime: '2025-07-13T15:30',
    duration: '3h',
    capacity: 200,
    seatsAvailable: 15,
    price: '₹5,000',
    status: 'On Time',
  },
  {
    flightId: 'FL505',
    flightNumber: 'EK505',
    flightName: 'Flight 505',
    airline: 'Emirates',
    from: 'Mumbai',
    to: 'Dubai',
    departureTime: '2025-07-14T02:00',
    arrivalTime: '2025-07-14T04:30',
    duration: '3h',
    capacity: 250,
    seatsAvailable: 5,
    price: '₹22,000',
    status: 'On Time',
  }
];

export const sampleBookingStats = [
  { month: "Jan", bookings: 120 },
  { month: "Feb", bookings: 150 },
  { month: "Mar", bookings: 170 },
  { month: "Apr", bookings: 130 },
  { month: "May", bookings: 190 },
  { month: "Jun", bookings: 220 },
  { month: "Jul", bookings: 180 },
  { month: "Aug", bookings: 240 },
  { month: "Sep", bookings: 200 },
  { month: "Oct", bookings: 260 },
  { month: "Nov", bookings: 300 },
  { month: "Dec", bookings: 320 }
];


export const sampleUserStats = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 120 },
  { month: "Mar", users: 140 },
  { month: "Apr", users: 130 },
  { month: "May", users: 160 },
  { month: "Jun", users: 180 },
  { month: "Jul", users: 200 },
  { month: "Aug", users: 220 },
  { month: "Sep", users: 210 },
  { month: "Oct", users: 250 },
  { month: "Nov", users: 270 },
  { month: "Dec", users: 300 }
];



export const monthlyStats = [
  { month: "Jan", users: 120, flights: 30 },
  { month: "Feb", users: 150, flights: 35 },
  { month: "Mar", users: 180, flights: 40 },
  { month: "Apr", users: 210, flights: 45 },
  { month: "May", users: 240, flights: 50 },
  { month: "Jun", users: 270, flights: 60 },
  { month: "Jul", users: 300, flights: 65 },
  { month: "Aug", users: 280, flights: 60 },
  { month: "Sep", users: 250, flights: 55 },
  { month: "Oct", users: 220, flights: 50 },
  { month: "Nov", users: 200, flights: 45 },
  { month: "Dec", users: 190, flights: 40 },
];


export const combinedStats = [
  { month: "Jan", users: 120, bookings: 200 },
  { month: "Feb", users: 150, bookings: 240 },
  { month: "Mar", users: 180, bookings: 270 },
  { month: "Apr", users: 210, bookings: 320 },
  { month: "May", users: 240, bookings: 360 },
  { month: "Jun", users: 270, bookings: 410 },
  { month: "Jul", users: 300, bookings: 480 },
  { month: "Aug", users: 280, bookings: 450 },
  { month: "Sep", users: 250, bookings: 400 },
  { month: "Oct", users: 220, bookings: 370 },
  { month: "Nov", users: 200, bookings: 330 },
  { month: "Dec", users: 190, bookings: 310 },
];









