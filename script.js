// Smooth Scroll function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Carbon Footprint Calculator
function calculateFootprint() {
    const usage = parseFloat(document.getElementById('electricity-usage').value);
    const result = document.getElementById('footprint-result');
    
    if (!isNaN(usage) && usage > 0) {
        const emissionsFactor = 0.92; // Emissions factor in kg CO₂ per kWh
        const footprint = usage * emissionsFactor;
        result.innerHTML = `Carbon Footprint: ${footprint.toFixed(2)} kg of CO₂ per month.`;
    } else {
        result.innerHTML = "Please enter a valid electricity usage.";
    }
}

// Electricity Cost Calculator
function calculateCost() {
    const usage = parseFloat(document.getElementById('cost-usage').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const result = document.getElementById('cost-result');
    
    if (!isNaN(usage) && !isNaN(rate) && usage > 0 && rate > 0) {
        const cost = usage * rate;
        result.innerHTML = `Monthly Cost: $${cost.toFixed(2)}`;
    } else {
        result.innerHTML = "Please enter valid values for usage and rate.";
    }
}

// Power Consumption Calculator
function calculateConsumption() {
    const wattage = parseFloat(document.getElementById('wattage').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const result = document.getElementById('consumption-result');
    
    if (!isNaN(wattage) && !isNaN(hours) && wattage > 0 && hours > 0) {
        const dailyConsumption = (wattage * hours) / 1000; // Convert W to kWh
        result.innerHTML = `Daily Power Consumption: ${dailyConsumption.toFixed(2)} kWh`;
    } else {
        result.innerHTML = "Please enter valid wattage and hours.";
    }
}
