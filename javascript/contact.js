//Contact form functionality

const URL = "https://formspree.io/xrgbelll";
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const contactAlert = document.getElementById("contact-alert");
const submitBtn = document.getElementById("submit-button");
const messageSent = document.getElementById("message-sent-alert");

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  if (!contactAlert.classList.contains("d-none")) {
    contactAlert.classList.remove("d-block");
    contactAlert.classList.add("d-none");
    contactAlert.innerHTML = "";
  }

  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    activateAlert();
    contactAlert.innerHTML = "All fields must be filled.";
  }

  let contactData = {
    name: contactName.value,
    email: contactEmail.value,
    message: contactMessage.value
  };

  sendEmail(URL, contactData);
});

function sendEmail(URL, contactData) {
  // debugger;
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contactData)
  })
    .then(response => {
      debugger;
      console.log(response);
      if (response.status === 403) {
        clearFields();
        activateAlert();
        contactAlert.innerHTML = "Error sending message";
      } else if (response.status === 200) {
        clearFields();
        messageSent.classList.remove("fade");
        messageSent.classList.add("show");
        setTimeout(function() {
          messageSent.classList.remove("show");
          messageSent.classList.add("fade");
        }, 3000);
      }
      return response.json();
    })
    .catch(error => {
      contactAlert.innerHTML = "Error sending message";
    });
}

const clearFields = () => {
  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";
};

const activateAlert = () => {
  contactAlert.classList.remove("d-none");
  contactAlert.classList.add("d-block");
};

//Geolocation Google maps functionality

var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
