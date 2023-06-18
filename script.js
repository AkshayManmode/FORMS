function printData() {
    // Retrieve input field values
    var email = document.getElementById("email").value;
    var longitude = document.getElementById("longitude").value;
    var latitude = document.getElementById("latitude").value;
    var slots = document.getElementById("slots").value;
    var power = document.getElementById("power").value;
  
    // Print the data using console.log
    console.log("email:", email);
    console.log("longitude:", longitude);
    console.log("latitude:", latitude);
    console.log("slots:", slots);
    console.log("power:", power);

  }
  