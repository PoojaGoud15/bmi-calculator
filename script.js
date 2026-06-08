const calculateBtn = document.getElementById("calculate-btn");
const resetBtn = document.getElementById("reset-btn");

calculateBtn.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (height <= 0 || weight <= 0) {
    alert("Height and Weight must be greater than zero.");
    return;
  }

  let heightInMeters = height / 100;

  let bmi = weight / (heightInMeters * heightInMeters);

  bmi = bmi.toFixed(2);

  document.getElementById("bmi-value").textContent = bmi;

  let status = "";

  let advice = "";

  const bmiStatus = document.getElementById("bmi-status");

  if (bmi < 18.5) {
    status = "🔵 Underweight";

    advice =
      "🍎 Your BMI is below the healthy range. Consider a nutritious diet and consult a healthcare professional if needed.";

    bmiStatus.style.color = "#0d6efd";
  } else if (bmi < 25) {
    status = "🟢 Normal Weight";

    advice =
      "🎉 Great! Your BMI is within the healthy range. Maintain regular exercise, proper hydration, and a balanced diet.";

    bmiStatus.style.color = "#198754";
  } else if (bmi < 30) {
    status = "🟠 Overweight";

    advice =
      "🚶 Your BMI is above the recommended range. Consider regular physical activity and healthier food choices.";

    bmiStatus.style.color = "#fd7e14";
  } else {
    status = "🔴 Obese";

    advice =
      "⚠️ Your BMI indicates obesity. It is recommended to consult a healthcare professional and adopt a structured health plan.";

    bmiStatus.style.color = "#dc3545";
  }

  bmiStatus.textContent = `${name} (${age} years) - ${status}`;

  document.getElementById("bmi-advice").textContent = advice;
});

resetBtn.addEventListener("click", function () {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";

  document.getElementById("bmi-value").textContent = "--";
  document.getElementById("bmi-status").textContent = "Health Status";

  document.getElementById("bmi-advice").textContent =
    "Recommendation will appear here.";

  document.getElementById("bmi-status").style.color = "#000";
});
