/**
 * MuscleForge Recipe Database
 *
 * Maps food combinations from the food database into simple recipe cards.
 * Each recipe references food IDs from foods.js and provides prep instructions.
 */

const RECIPE_DATABASE = [
  // ═══════════════════════════════════════════════════════════════════════════
  // BREAKFAST RECIPES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'protein_oatmeal',
    name: 'Protein Power Oatmeal',
    category: 'breakfast',
    cuisine: ['american'],
    foods: ['oatsRolled', 'wheyIsolate', 'banana', 'peanutButter'],
    instructions: 'Cook oats with water or milk. Stir in protein powder once cooled slightly. Top with sliced banana and a spoonful of peanut butter.',
    prepTime: '5 min',
    tags: ['quick', 'high-protein']
  },
  {
    id: 'egg_scramble',
    name: 'Loaded Egg Scramble',
    category: 'breakfast',
    cuisine: ['american'],
    foods: ['wholeEggs', 'spinach', 'bellPepperRed', 'mushrooms'],
    instructions: 'Scramble eggs in a pan. Add chopped spinach, diced bell pepper, and sliced mushrooms. Cook until veggies are tender.',
    prepTime: '10 min',
    tags: ['high-protein', 'low-carb']
  },
  {
    id: 'greek_yogurt_bowl',
    name: 'Greek Yogurt Power Bowl',
    category: 'breakfast',
    cuisine: ['mediterranean'],
    foods: ['greekYogurt', 'blueberries', 'almonds', 'banana'],
    instructions: 'Layer Greek yogurt in a bowl. Top with blueberries, sliced banana, and crushed almonds.',
    prepTime: '3 min',
    tags: ['quick', 'high-protein']
  },
  {
    id: 'avocado_egg_toast',
    name: 'Avocado Egg Toast',
    category: 'breakfast',
    cuisine: ['american'],
    foods: ['ezekielBread', 'wholeEggs', 'avocado', 'tomatoes'],
    instructions: 'Toast bread. Mash avocado on top. Fry or poach eggs and place on avocado. Add sliced tomatoes and season.',
    prepTime: '8 min',
    tags: ['balanced']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LUNCH RECIPES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'chicken_rice_bowl',
    name: 'Chicken & Rice Bowl',
    category: 'lunch',
    cuisine: ['american', 'asian'],
    foods: ['chickenBreast', 'whiteRice', 'broccoli', 'oliveOil'],
    instructions: 'Grill seasoned chicken breast and slice. Serve over rice with steamed broccoli. Drizzle with olive oil.',
    prepTime: '20 min',
    tags: ['meal-prep', 'high-protein']
  },
  {
    id: 'turkey_sweet_potato',
    name: 'Turkey & Sweet Potato Plate',
    category: 'lunch',
    cuisine: ['american'],
    foods: ['groundTurkey', 'sweetPotato', 'greenBeans', 'oliveOil'],
    instructions: 'Brown ground turkey with seasoning. Bake sweet potato until soft. Steam green beans. Plate together.',
    prepTime: '25 min',
    tags: ['meal-prep', 'balanced']
  },
  {
    id: 'salmon_quinoa',
    name: 'Salmon Quinoa Bowl',
    category: 'lunch',
    cuisine: ['mediterranean'],
    foods: ['salmon', 'quinoa', 'asparagus', 'avocado'],
    instructions: 'Bake or pan-sear salmon. Cook quinoa per package. Roast asparagus. Serve together with sliced avocado.',
    prepTime: '25 min',
    tags: ['omega-3', 'high-protein']
  },
  {
    id: 'beef_stir_fry',
    name: 'Beef Stir-Fry',
    category: 'lunch',
    cuisine: ['asian'],
    foods: ['beefSirloin', 'brownRice', 'bellPepperRed', 'broccoli'],
    instructions: 'Slice sirloin thin. Stir-fry with bell pepper and broccoli in a hot pan. Serve over brown rice with soy sauce.',
    prepTime: '20 min',
    tags: ['high-protein']
  },
  {
    id: 'mediterranean_bowl',
    name: 'Mediterranean Power Bowl',
    category: 'lunch',
    cuisine: ['mediterranean'],
    foods: ['chickenBreast', 'quinoa', 'cucumber', 'oliveOil'],
    instructions: 'Grill chicken with Mediterranean spices. Serve over quinoa with diced cucumber. Drizzle with olive oil and lemon.',
    prepTime: '20 min',
    tags: ['high-protein', 'balanced']
  },
  {
    id: 'burrito_bowl',
    name: 'High-Protein Burrito Bowl',
    category: 'lunch',
    cuisine: ['mexican'],
    foods: ['groundBeef95', 'brownRice', 'blackBeans', 'bellPepperRed'],
    instructions: 'Season and brown ground beef. Serve over rice with black beans and diced peppers. Add salsa and hot sauce.',
    prepTime: '20 min',
    tags: ['high-protein', 'meal-prep']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DINNER RECIPES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'steak_potato',
    name: 'Steak & Baked Potato',
    category: 'dinner',
    cuisine: ['american'],
    foods: ['beefSirloin', 'whitePotato', 'asparagus', 'butter'],
    instructions: 'Season and pan-sear steak to desired doneness. Bake potato until tender. Roast asparagus with a touch of butter.',
    prepTime: '30 min',
    tags: ['high-protein', 'classic']
  },
  {
    id: 'chicken_pasta',
    name: 'Chicken Pasta',
    category: 'dinner',
    cuisine: ['italian'],
    foods: ['chickenBreast', 'wholeWheatPasta', 'spinach', 'oliveOil'],
    instructions: 'Cook pasta al dente. Grill and slice chicken. Toss pasta with olive oil, wilted spinach, and chicken. Season with garlic.',
    prepTime: '25 min',
    tags: ['balanced', 'high-carb']
  },
  {
    id: 'salmon_sweet_potato',
    name: 'Baked Salmon & Sweet Potato',
    category: 'dinner',
    cuisine: ['american', 'mediterranean'],
    foods: ['salmon', 'sweetPotato', 'brusselsSprouts', 'oliveOil'],
    instructions: 'Bake salmon and halved Brussels sprouts on a sheet pan. Microwave sweet potato. Drizzle everything with olive oil.',
    prepTime: '30 min',
    tags: ['omega-3', 'sheet-pan']
  },
  {
    id: 'tofu_stir_fry',
    name: 'Tofu Veggie Stir-Fry',
    category: 'dinner',
    cuisine: ['asian'],
    foods: ['tofu', 'brownRice', 'broccoli', 'bellPepperRed'],
    instructions: 'Press and cube tofu. Pan-fry until golden. Stir-fry with broccoli and bell pepper. Serve over brown rice with soy sauce.',
    prepTime: '25 min',
    tags: ['vegan', 'high-protein']
  },
  {
    id: 'pork_rice',
    name: 'Pork Tenderloin & Rice',
    category: 'dinner',
    cuisine: ['american'],
    foods: ['porkTenderloin', 'whiteRice', 'greenBeans', 'oliveOil'],
    instructions: 'Season and roast pork tenderloin. Slice and serve over rice with steamed green beans.',
    prepTime: '30 min',
    tags: ['lean', 'meal-prep']
  },
  {
    id: 'shrimp_tacos',
    name: 'Shrimp Tacos',
    category: 'dinner',
    cuisine: ['mexican'],
    foods: ['shrimp', 'cornTortilla', 'avocado', 'tomatoes'],
    instructions: 'Season and sear shrimp. Warm tortillas. Top with shrimp, diced avocado, and chopped tomatoes. Squeeze lime on top.',
    prepTime: '15 min',
    tags: ['quick', 'high-protein']
  },
  {
    id: 'chicken_curry',
    name: 'Chicken & Chickpea Curry',
    category: 'dinner',
    cuisine: ['indian'],
    foods: ['chickenThigh', 'chickpeas', 'spinach', 'whiteRice'],
    instructions: 'Simmer diced chicken thigh with chickpeas in curry sauce. Stir in spinach. Serve over white rice.',
    prepTime: '30 min',
    tags: ['high-protein', 'flavorful']
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SNACK / POST-WORKOUT RECIPES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'protein_shake',
    name: 'Classic Protein Shake',
    category: 'snack',
    cuisine: ['american'],
    foods: ['wheyIsolate', 'banana', 'peanutButter'],
    instructions: 'Blend protein powder with banana, peanut butter, and water or milk. Add ice for thickness.',
    prepTime: '3 min',
    tags: ['quick', 'post-workout']
  },
  {
    id: 'cottage_fruit',
    name: 'Cottage Cheese & Fruit',
    category: 'snack',
    cuisine: ['american'],
    foods: ['cottageCheese', 'blueberries', 'almonds'],
    instructions: 'Scoop cottage cheese into a bowl. Top with blueberries and crushed almonds.',
    prepTime: '2 min',
    tags: ['quick', 'casein']
  },
  {
    id: 'rice_cakes_pb',
    name: 'Rice Cake Stack',
    category: 'snack',
    cuisine: ['american'],
    foods: ['whiteRice', 'peanutButter', 'banana'],
    instructions: 'Spread peanut butter on rice cakes (sub rice serving). Top with sliced banana.',
    prepTime: '2 min',
    tags: ['quick', 'pre-workout']
  }
];

// Match a meal's foods to the best recipe
function findMatchingRecipe(mealFoods, cuisinePrefs) {
  const foodIds = mealFoods.map(f => f.food.id);

  let bestMatch = null;
  let bestScore = 0;

  RECIPE_DATABASE.forEach(recipe => {
    // Count how many recipe foods appear in the meal
    const matches = recipe.foods.filter(rid => foodIds.includes(rid)).length;
    const coverage = matches / recipe.foods.length;

    // Bonus for cuisine match
    let cuisineBonus = 0;
    if (cuisinePrefs && cuisinePrefs.length > 0) {
      if (recipe.cuisine.some(c => cuisinePrefs.includes(c))) cuisineBonus = 0.15;
    }

    const score = coverage + cuisineBonus;
    if (score > bestScore && coverage >= 0.5) {
      bestScore = score;
      bestMatch = recipe;
    }
  });

  return bestMatch;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RECIPE_DATABASE, findMatchingRecipe };
}
