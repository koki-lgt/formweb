// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
  // Handle Form Submission
  document
    .getElementById("akanForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const birthday = document.getElementById("birthday").value;
      const gender = document.querySelector(
        'input[name="gender"]:checked'
      )?.value;

      if (!birthday || !gender) {
        alert("Please fill in all fields.");
        return;
      }

      // Extract Date
      const date = new Date(birthday);

      if (isNaN(date.getTime())) {
        alert("Invalid date. Please enter a valid birthday.");
        return;
      }

      // Get the Day of the Week (0 = Sunday, 6 = Saturday)
      const dayOfWeek = date.getDay();

      // Akan Names
      const maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame",
      ];
      const femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama",
      ];

      // Determine Akan Name
      const akanName =
        gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

      // Display Result
      document.getElementById(
        "result"
      ).textContent = `Your Akan name is ${akanName}`;
    });
});
