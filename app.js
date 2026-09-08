let trains = [
  {
    name: "Tezgam Express",
    number: "7-UP",
    departureStation: "Karachi Cantt",
    departureTime: "05:30 PM",
    arrivalStation: "Rawalpindi",
    arrivalTime: "08:00 PM",
    currentLocation: "Rohri Junction",
    platform: "Platform 1",
    delay: "No Delay",
    status: "On Time",
    isLive: true
  },

  {
    name: "Green Line Express",
    number: "5-UP",
    departureStation: "Karachi Cantt",
    departureTime: "10:00 PM",
    arrivalStation: "Islamabad",
    arrivalTime: "08:00 PM",
    currentLocation: "Lahore Junction",
    platform: "Platform 4",
    delay: "20 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Khyber Mail",
    number: "1-UP",
    departureStation: "Karachi Cantt",
    departureTime: "10:15 PM",
    arrivalStation: "Peshawar Cantt",
    arrivalTime: "05:30 AM",
    currentLocation: "Multan Cantt",
    platform: "Platform 3",
    delay: "No Delay",
    status: "On Time",
    isLive: true
  },

  {
    name: "Karachi Express",
    number: "15-UP",
    departureStation: "Karachi Cantt",
    departureTime: "04:30 PM",
    arrivalStation: "Lahore Junction",
    arrivalTime: "10:30 AM",
    currentLocation: "Bahawalpur",
    platform: "Platform 2",
    delay: "15 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Jaffar Express",
    number: "39-UP",
    departureStation: "Quetta",
    departureTime: "09:00 AM",
    arrivalStation: "Peshawar Cantt",
    arrivalTime: "05:00 PM",
    currentLocation: "Sibi Junction",
    platform: "Platform 1",
    delay: "25 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Pakistan Express",
    number: "45-UP",
    departureStation: "Karachi Cantt",
    departureTime: "02:00 PM",
    arrivalStation: "Rawalpindi",
    arrivalTime: "04:30 PM",
    currentLocation: "Khanewal Junction",
    platform: "Platform 3",
    delay: "No Delay",
    status: "On Time",
    isLive: true
  },

  {
    name: "Pak Business Express",
    number: "33-UP",
    departureStation: "Karachi Cantt",
    departureTime: "04:00 PM",
    arrivalStation: "Lahore Junction",
    arrivalTime: "09:30 AM",
    currentLocation: "Rohri Junction",
    platform: "Platform 2",
    delay: "10 minutes",
    status: "On Time",
    isLive: true
  },

  {
    name: "Shalimar Express",
    number: "27-UP",
    departureStation: "Karachi Cantt",
    departureTime: "06:00 AM",
    arrivalStation: "Lahore Junction",
    arrivalTime: "11:00 PM",
    currentLocation: "Rahim Yar Khan",
    platform: "Platform 1",
    delay: "30 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Karakoram Express",
    number: "41-UP",
    departureStation: "Karachi Cantt",
    departureTime: "03:00 PM",
    arrivalStation: "Lahore Junction",
    arrivalTime: "08:30 AM",
    currentLocation: "Bahawalpur",
    platform: "Platform 2",
    delay: "No Delay",
    status: "On Time",
    isLive: true
  },

  {
    name: "Allama Iqbal Express",
    number: "9-UP",
    departureStation: "Karachi Cantt",
    departureTime: "03:30 PM",
    arrivalStation: "Sialkot Junction",
    arrivalTime: "07:00 PM",
    currentLocation: "Faisalabad",
    platform: "Platform 3",
    delay: "35 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Awam Express",
    number: "13-UP",
    departureStation: "Karachi Cantt",
    departureTime: "07:00 AM",
    arrivalStation: "Peshawar Cantt",
    arrivalTime: "03:30 PM",
    currentLocation: "Lahore Junction",
    platform: "Platform 5",
    delay: "15 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Millat Express",
    number: "17-UP",
    departureStation: "Karachi Cantt",
    departureTime: "05:00 PM",
    arrivalStation: "Lala Musa Junction",
    arrivalTime: "09:30 PM",
    currentLocation: "Faisalabad",
    platform: "Platform 2",
    delay: "No Delay",
    status: "On Time",
    isLive: true
  },

  {
    name: "Hazara Express",
    number: "11-UP",
    departureStation: "Karachi City",
    departureTime: "06:30 AM",
    arrivalStation: "Havelian",
    arrivalTime: "08:00 PM",
    currentLocation: "Rawalpindi",
    platform: "Platform 1",
    delay: "40 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Fareed Express",
    number: "37-UP",
    departureStation: "Karachi City",
    departureTime: "07:30 PM",
    arrivalStation: "Lahore Junction",
    arrivalTime: "09:00 PM",
    currentLocation: "Khanpur Junction",
    platform: "Platform 3",
    delay: "20 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Rehman Baba Express",
    number: "47-UP",
    departureStation: "Karachi Cantt",
    departureTime: "11:00 AM",
    arrivalStation: "Peshawar Cantt",
    arrivalTime: "01:30 PM",
    currentLocation: "Multan Cantt",
    platform: "Platform 2",
    delay: "No Delay",
    status: "On Time",
    isLive: true
  },

  {
    name: "Sir Syed Express",
    number: "35-UP",
    departureStation: "Karachi Cantt",
    departureTime: "09:00 PM",
    arrivalStation: "Rawalpindi",
    arrivalTime: "08:30 PM",
    currentLocation: "Lahore Junction",
    platform: "Platform 4",
    delay: "10 minutes",
    status: "On Time",
    isLive: true
  },

  {
    name: "Shah Hussain Express",
    number: "43-UP",
    departureStation: "Karachi Cantt",
    departureTime: "07:30 PM",
    arrivalStation: "Lahore Junction",
    arrivalTime: "01:00 PM",
    currentLocation: "Khanewal Junction",
    platform: "Platform 1",
    delay: "25 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Sukkur Express",
    number: "145-UP",
    departureStation: "Karachi City",
    departureTime: "11:00 PM",
    arrivalStation: "Jacobabad Junction",
    arrivalTime: "11:30 AM",
    currentLocation: "Sukkur",
    platform: "Platform 2",
    delay: "10 minutes",
    status: "On Time",
    isLive: true
  },

  {
    name: "Bahauddin Zakaria Express",
    number: "25-UP",
    departureStation: "Karachi City",
    departureTime: "06:30 PM",
    arrivalStation: "Multan Cantt",
    arrivalTime: "10:45 AM",
    currentLocation: "Rohri Junction",
    platform: "Platform 3",
    delay: "No Delay",
    status: "On Time",
    isLive: true
  },

  {
    name: "Khushhal Khan Khattak Express",
    number: "19-UP",
    departureStation: "Karachi City",
    departureTime: "08:00 PM",
    arrivalStation: "Peshawar Cantt",
    arrivalTime: "05:30 AM",
    currentLocation: "Dadu",
    platform: "Platform 1",
    delay: "45 minutes",
    status: "Delayed",
    isLive: true
  },

  {
    name: "Mehr Express",
    number: "127-UP",
    departureStation: "Multan Cantt",
    departureTime: "04:00 PM",
    arrivalStation: "Rawalpindi",
    arrivalTime: "04:30 AM",
    currentLocation: "Sargodha Junction",
    platform: "Platform 2",
    delay: "No Delay",
    status: "On Time",
    isLive: true
  }
];


const trainName = document.querySelector("#trainName");
const fromStation = document.querySelector("#fromStation");
const toStation = document.querySelector("#toStation");
const journeyDate = document.querySelector("#journeyDate");
const searchButton = document.querySelector("#searchButton");
const trainResult = document.querySelector("#trainResult");


const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");

const today = `${year}-${month}-${day}`;

journeyDate.min = today;
journeyDate.value = today;


searchButton.addEventListener("click", function (event) {
  event.preventDefault();


  const selectedTrainName = trainName.value;
  const selectedDepartureStation = fromStation.value;
  const selectedArrivalStation = toStation.value;
  const selectedDate = journeyDate.value;

//if train not selected
  if (
    selectedTrainName === "" ||
    selectedDepartureStation === "" ||
    selectedArrivalStation === "" ||
    selectedDate === ""
  ) {
    trainResult.innerHTML = `
      <div class="container mt-4">
        <div class="alert alert-warning">
          Please select a train, departure station, arrival station and date.
        </div>
      </div>
    `;

    return;
  }

// If departure and destination are same 
  if (selectedDepartureStation === selectedArrivalStation) {
    trainResult.innerHTML = `
      <div class="container mt-4">
        <div class="alert alert-warning">
          Departure and arrival stations cannot be the same.
        </div>
      </div>
    `;

    return;
  }


  const selectedTrain = trains.find(function (train) {
    return train.name === selectedTrainName;
  });


  if (!selectedTrain) {
    trainResult.innerHTML = `
      <div class="container mt-4">
        <div class="alert alert-danger">
          Train information was not found.
        </div>
      </div>
    `;

    return;
  }

  else{
   let trainInfo =  document.createElement("ul");
   trainInfo.classList.add("train-info");


    let trainNameLi = document.createElement("li");
    trainNameLi.classList.add("train-info-item");
    trainNameLi.innerText = `Train Name: ${selectedTrain.name}`;


    let trainNumberLi = document.createElement("li");
trainNumberLi.classList.add("train-info-item");
trainNumberLi.innerText = `Train Number: ${selectedTrain.number}`;



let departureLi = document.createElement("li");
departureLi.classList.add("train-info-item");
departureLi.innerText =
  `Departure: ${selectedTrain.departureStation} - ${selectedTrain.departureTime}`;



  let arrivalLi = document.createElement("li");
arrivalLi.classList.add("train-info-item");
arrivalLi.innerText =
  `Arrival: ${selectedTrain.arrivalStation} - ${selectedTrain.arrivalTime}`;




  let currentLocationLi = document.createElement("li");
currentLocationLi.classList.add("train-info-item");
currentLocationLi.innerText =
  `Current Location: ${selectedTrain.currentLocation}`;   



  let platformLi = document.createElement("li");
platformLi.classList.add("train-info-item");
platformLi.innerText =
  `Platform: ${selectedTrain.platform}`; 




  let statusLi = document.createElement("li");
statusLi.classList.add("train-info-item");
statusLi.innerText =
  `Status: ${selectedTrain.status}`;  


  let delayLi = document.createElement("li");
delayLi.classList.add("train-info-item");
delayLi.innerText =
  `Estimated Delay: ${selectedTrain.delay}`;


  trainInfo.appendChild(trainNameLi);
trainInfo.appendChild(trainNumberLi);
trainInfo.appendChild(departureLi);
trainInfo.appendChild(arrivalLi);
trainInfo.appendChild(currentLocationLi);
trainInfo.appendChild(platformLi);
trainInfo.appendChild(statusLi);
trainInfo.appendChild(delayLi);




trainResult.innerHTML = "";


// Add the ul to the page
trainResult.appendChild(trainInfo);

  }

  }


  
);