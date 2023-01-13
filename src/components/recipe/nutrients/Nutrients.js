import React from 'react'

import NutrientItem from "./NutrientItem";

// description - Component to display all nutrients

function Nutrients() {
  const macronutrients = [
    'Fat',
    'Saturated',
    'Trans',
    'Monounsaturated',
    'Polyunsaturated',
    'Carbs',
    'Fiber',
    'Sugars',
    'Protein',
  ];

  const micronutrients = [
    'Cholesterol',
    'Sodium',
    'Calcium',
    'Magnesium',
    'Potassium',
    'Iron',
    'Phosphorus',
    'Vitamin A',
    'Vitamin C',
    'Thiamin (B1)',
    'Riboflavin (B2)',
    'Niacin (B3)',
    'Vitamin B6',
    'Folate (Equivalent)',
    'Vitamin B12',
    'Vitamin D',
    'Vitamin E',
    'Vitamin K',
  ];

  const macronutrientItems = macronutrients.map((value, index) => (
    <NutrientItem type={value} key={`macronutrients-${index}`} />
  ));

  const micronutrientItems = micronutrients.map((value, index) => (
    <NutrientItem type={value} key={`micronutrients-${index}`} />
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