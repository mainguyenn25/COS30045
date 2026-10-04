
/* =========================
   Current Year
========================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================
   FAQ Accordion
========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = question.nextElementSibling;
        const icon = question.querySelector("span");

        answer.classList.toggle("show");

        if (answer.classList.contains("show")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }

    });

});


/* =========================
   Energy Calculator
========================= */

const energyForm = document.getElementById("energyForm");
const calculatorResult =
    document.getElementById("calculatorResult");

if (energyForm) {

    energyForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Read values from the form
        const power =
            parseFloat(document.getElementById("power").value);

        const hours =
            parseFloat(document.getElementById("hours").value);

        const price =
            parseFloat(document.getElementById("price").value);


        // Input validation
        if (
            isNaN(power) ||
            isNaN(hours) ||
            isNaN(price)
        ) {
            calculatorResult.innerHTML = `
                <p class="error">
                    Please enter a value for all fields.
                </p>
            `;

            return;
        }


        if (power <= 0) {
            calculatorResult.innerHTML = `
                <p class="error">
                    Appliance power must be greater than 0 watts.
                </p>
            `;

            return;
        }


        if (hours < 0 || hours > 24) {
            calculatorResult.innerHTML = `
                <p class="error">
                    Daily usage must be between 0 and 24 hours.
                </p>
            `;

            return;
        }


        if (price < 0) {
            calculatorResult.innerHTML = `
                <p class="error">
                    Electricity price cannot be negative.
                </p>
            `;

            return;
        }


        // =========================
        // Calculations
        // =========================

        // Convert watts to kilowatts
        const powerInKilowatts = power / 1000;

        // Daily energy consumption
        const dailyEnergy =
            powerInKilowatts * hours;

        // Monthly energy consumption
        const monthlyEnergy =
            dailyEnergy * 30;

        // Yearly energy consumption
        const yearlyEnergy =
            dailyEnergy * 365;

        // Monthly electricity cost
        const monthlyCost =
            monthlyEnergy * (price / 100);

        // Yearly electricity cost
        const yearlyCost =
            yearlyEnergy * (price / 100);


        // =========================
        // Display Results
        // =========================

        calculatorResult.innerHTML = `
            <h3>Estimated Energy Results</h3>

            <p>
                <strong>Daily energy consumption:</strong>
                ${dailyEnergy.toFixed(2)} kWh
            </p>

            <p>
                <strong>Monthly energy consumption:</strong>
                ${monthlyEnergy.toFixed(2)} kWh
            </p>

            <p>
                <strong>Yearly energy consumption:</strong>
                ${yearlyEnergy.toFixed(2)} kWh
            </p>

            <p>
                <strong>Estimated monthly cost:</strong>
                $${monthlyCost.toFixed(2)}
            </p>

            <p>
                <strong>Estimated yearly cost:</strong>
                $${yearlyCost.toFixed(2)}
            </p>
        `;

    });

}