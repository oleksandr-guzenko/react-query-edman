import React from 'react'

import NutrientItem from "./NutrientItem";

/** 
 * Display all nutrients
 * @component
 */
function Nutrients() {
  const macronutrients = [
    { type: 'Fat', unit: 'g', tag: 'FAT'},
    { type: 'Saturated', unit: 'g', tag: 'FASAT'},
    { type: 'Trans', unit: 'g', tag: 'TATRN'},
    { type: 'Monounsaturated', unit: 'g', tag: 'FAMS'},
    { type: 'Polyunsaturated', unit: 'g', tag: 'FAPU'},
    { type: 'Carbs', unit: 'g', tag: 'CHOCDF'},
    { type: 'Fiber', unit: 'g', tag: 'FIBTG'},
    { type: 'Sugars', unit: 'g', tag: 'SUGAR'},
    { type: 'Protein', unit: 'g', tag: 'PROCNT'}
  ];

  const micronutrients = [
    { type: 'Cholesterol', unit: 'mg', tag: 'CHOLE'},
    { type: 'Sodium', unit: 'mg', tag: 'NA'},
    { type: 'Calcium', unit: 'g', tag: 'CA'},
    { type: 'Magnesium', unit: 'mg', tag: 'MG'},
    { type: 'Potassium', unit: 'mg', tag: 'K'},
    { type: 'Iron', unit: 'mg', tag: 'FE'},
    { type: 'Phosphorus', unit: 'mg', tag: 'P'},
    { type: 'Vitamin A', unit: 'μg', tag: 'VITA_RAE'},
    { type: 'Vitamin C', unit: 'mg', tag: 'VITC'},
    { type: 'Thiamin (B1)', unit: 'mg', tag: 'THIA'},
    { type: 'Riboflavin (B2)', unit: 'mg', tag: 'RIBF'},
    { type: 'Niacin (B3)', unit: 'mg', tag: 'NIA'},
    { type: 'Vitamin (B6)', unit: 'mg', tag: 'VITB6A'},
    { type: 'Folate (Equivalent)', unit: 'μg', tag: 'FOLDFE'},
    { type: 'Vitamin B12', unit: 'μg', tag: 'VITB12'},
    { type: 'Vitamin D', unit: 'μg', tag: 'VITD'},
    { type: 'Vitamin E', unit: 'mg', tag: 'TOCPHA'},
    { type: 'Vitamin K', unit: 'μg', tag: 'VITK1'}
  ];

  const macronutrientItems = macronutrients.map((value, index) => (
    <NutrientItem item={value} key={`macronutrients-${index}`} />
  ));

  const micronutrientItems = micronutrients.map((value, index) => (
    <NutrientItem item={value} key={`micronutrients-${index}`} />
  ));

  return (
    <div className="py-4 px-2">
      <h4 className="fw-normal mb-4">Macronutrients</h4>
      <div className="row">
        { macronutrientItems }
      </div>
      <h4 className="fw-normal mb-4">Micronutrients</h4>
      <div className="row">
        { micronutrientItems }
      </div>
    </div>
  )
}

export default Nutrients