// https://calculator.swiftutors.com/wetted-perimeter-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const wettedPerimeterRadio = document.getElementById('wettedPerimeterRadio');
const areaofSectionFlowRadio = document.getElementById('areaofSectionFlowRadio');
const hydraulicsRadiusRadio = document.getElementById('hydraulicsRadiusRadio');

let wettedPerimeter;
let areaofSectionFlow = v1;
let hydraulicsRadius = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

wettedPerimeterRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area of Section Flow (m²)';
  variable2.textContent = '(Rh) Hydraulics Radius (m)';
  areaofSectionFlow = v1;
  hydraulicsRadius = v2;
  result.textContent = '';
});

areaofSectionFlowRadio.addEventListener('click', function() {
  variable1.textContent = '(Pw) Wetted Perimeter (m)';
  variable2.textContent = '(Rh) Hydraulics Radius (m)';
  wettedPerimeter = v1;
  hydraulicsRadius = v2;
  result.textContent = '';
});

hydraulicsRadiusRadio.addEventListener('click', function() {
  variable1.textContent = '(Pw) Wetted Perimeter (m)';
  variable2.textContent = '(A) Area of Section Flow (m²)';
  wettedPerimeter = v1;
  areaofSectionFlow = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(wettedPerimeterRadio.checked)
    result.textContent = `Wetted Perimeter = ${computeWettedPerimeter().toFixed(2)} m`;

  else if(areaofSectionFlowRadio.checked)
    result.textContent = `Area of Section Flow = ${computeAreaofSectionFlow().toFixed(2)} m²`;

  else if(hydraulicsRadiusRadio.checked)
    result.textContent = `Hydraulics Radius = ${computeHydraulicsRadius().toFixed(2)} m`;
})

// calculation

function computeWettedPerimeter() {
  return Number(areaofSectionFlow.value) / Number(hydraulicsRadius.value);
}

function computeAreaofSectionFlow() {
  return Number(wettedPerimeter.value) * Number(hydraulicsRadius.value);
}

function computeHydraulicsRadius() {
  return Number(areaofSectionFlow.value) / Number(wettedPerimeter.value);
}