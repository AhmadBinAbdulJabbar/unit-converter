/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitConversions = {
  length: {
    meterToFeet: 3.281,
    feetToMeter: 1 / 3.281,
  },
  volume: {
    literToGallon: 0.264,
    gallonToLiter: 1 / 0.264,
  },
  mass: {
    kilogramToPound: 2.204,
    poundToKilogram: 1 / 2.204,
  },
};

const conversionEl = document.getElementsByClassName("conversion")[0];
const inputValue = document.getElementById("unit-value");
const convertBtn = document.getElementById("convert");

// convertBtn.addEventListener("click", function () {
//   console.log("button clicked");
//   let constantValue = Number(inputValue.value);
//   if (!constantValue) {
//     constantValue = 0;
//   }

//   const lengthString = renderLength("Length(Meter / Feet)", constantValue);
//   const volumnString = renderVolumn("Volume (Liters/Gallons)", constantValue);
//   const massString = renderMass("Mass (Kilograms/Pounds)", constantValue);

//   conversionEl.innerHTML = lengthString + volumnString + massString;
// });

// function renderLength(description, value) {
//   console.log("inside render function");
//   let meterToFeet = value * unitConversions.length.meterToFeet;
//   let feetToMeter = value * unitConversions.length.feetToMeter;

//   meterToFeet = meterToFeet.toFixed(3);
//   feetToMeter = feetToMeter.toFixed(3);

//   let renderString = `
//         <div class="conversion-box">
//           <h2 class="conversion-heading">${description}</h2>
//           <p class="conversion-calculation">${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters</p>
//         </div>`;

//   return renderString;
// }

// function renderVolumn(description, value) {
//   console.log("inside render function");
//   let gallonToLiter = value * unitConversions.volume.gallonToLiter;
//   let literToGallon = value * unitConversions.volume.literToGallon;

//   gallonToLiter = gallonToLiter.toFixed(3);
//   literToGallon = literToGallon.toFixed(3);

//   let renderString = `
//         <div class="conversion-box">
//           <h2 class="conversion-heading">${description}</h2>
//           <p class="conversion-calculation">${value} liters = ${literToGallon} gallons | ${value} gallons = ${gallonToLiter} liters</p>
//         </div>`;

//   return renderString;
// }

// function renderMass(description, value) {
//   console.log("inside render function");
//   let kilogramToPound = value * unitConversions.mass.kilogramToPound;
//   let poundToKilogram = value * unitConversions.mass.poundToKilogram;

//   kilogramToPound = kilogramToPound.toFixed(3);
//   poundToKilogram = poundToKilogram.toFixed(3);

//   let renderString = `
//         <div class="conversion-box">
//           <h2 class="conversion-heading">${description}</h2>
//           <p class="conversion-calculation">${value} kilos = ${kilogramToPound} pounds | ${value} pounds = ${poundToKilogram} kilos</p>
//         </div>`;

//   return renderString;
// }

// Better approach following DRY principle
function renderConversion(
  description,
  value,
  unitA,
  unitB,
  factorAtoB,
  factorBtoA
) {
  let aToB = (value * factorAtoB).toFixed(3);
  let bToA = (value * factorBtoA).toFixed(3);

  return `
      <div class="conversion-box">
        <h2 class="conversion-heading">${description}</h2>
        <p class="conversion-calculation">${value} ${unitA} = ${aToB} ${unitB} | ${value} ${unitB} = ${bToA} ${unitA}</p>
      </div>`;
}

convertBtn.addEventListener("click", function () {
  console.log("button clicked");
  let constantValue = Number(inputValue.value);
  if (!constantValue) {
    constantValue = 0;
  }

  const lengthString = renderConversion(
    "Length (Meter / Feet)",
    constantValue,
    "meters",
    "feet",
    unitConversions.length.meterToFeet,
    unitConversions.length.feetToMeter
  );

  const volumeString = renderConversion(
    "Volume (Liters / Gallons)",
    constantValue,
    "liters",
    "gallons",
    unitConversions.volume.literToGallon,
    unitConversions.volume.gallonToLiter
  );

  const massString = renderConversion(
    "Mass (Kilograms / Pounds)",
    constantValue,
    "kilos",
    "pounds",
    unitConversions.mass.kilogramToPound,
    unitConversions.mass.poundToKilogram
  );

  conversionEl.innerHTML = lengthString + volumeString + massString;
});
