/**
 * MuscleForge Comprehensive Food Database
 *
 * Nutritional data per standard serving
 * Sources: USDA FoodData Central, peer-reviewed literature
 *
 * Micronutrients included:
 * - Macros: protein (g), carbs (g), fat (g), fiber (g), sugar (g)
 * - Minerals: sodium (mg), potassium (mg), calcium (mg), iron (mg), magnesium (mg), zinc (mg), phosphorus (mg)
 * - Vitamins: vitA (mcg RAE), vitC (mg), vitD (mcg), vitE (mg), vitK (mcg), vitB6 (mg), vitB12 (mcg), folate (mcg)
 * - Other: cholesterol (mg), saturatedFat (g), transFat (g), omega3 (g), omega6 (g), glycemicIndex (0-100)
 */

const FOOD_DATABASE = {
  // ═══════════════════════════════════════════════════════════════════════════
  // PROTEINS - Meat, Poultry, Fish
  // ═══════════════════════════════════════════════════════════════════════════
  proteins: {
    // Poultry
    chickenBreast: {
      id: 'chickenBreast',
      name: 'Chicken Breast (skinless, grilled)',
      category: 'proteins',
      subcategory: 'poultry',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 281,
      macros: { protein: 53, carbs: 0, fat: 6, fiber: 0, sugar: 0 },
      micros: {
        sodium: 104, potassium: 358, calcium: 11, iron: 1.1, magnesium: 43, zinc: 1.5, phosphorus: 340,
        vitA: 9, vitC: 0, vitD: 0.2, vitE: 0.4, vitK: 0, vitB6: 1.0, vitB12: 0.5, folate: 6,
        cholesterol: 130, saturatedFat: 1.7, transFat: 0, omega3: 0.1, omega6: 1.1
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'high-protein', 'low-fat', 'bodybuilding-staple']
    },
    chickenThigh: {
      id: 'chickenThigh',
      name: 'Chicken Thigh (skinless)',
      category: 'proteins',
      subcategory: 'poultry',
      serving: { amount: 150, unit: 'g', description: '5.3 oz cooked' },
      calories: 230,
      macros: { protein: 28, carbs: 0, fat: 12, fiber: 0, sugar: 0 },
      micros: {
        sodium: 95, potassium: 285, calcium: 12, iron: 1.3, magnesium: 28, zinc: 2.8, phosphorus: 225,
        vitA: 25, vitC: 0, vitD: 0.1, vitE: 0.3, vitK: 2.5, vitB6: 0.4, vitB12: 0.4, folate: 9,
        cholesterol: 140, saturatedFat: 3.3, transFat: 0, omega3: 0.1, omega6: 2.4
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['moderate-fat', 'flavorful']
    },
    turkeyBreast: {
      id: 'turkeyBreast',
      name: 'Turkey Breast (roasted)',
      category: 'proteins',
      subcategory: 'poultry',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 250,
      macros: { protein: 50, carbs: 0, fat: 5, fiber: 0, sugar: 0 },
      micros: {
        sodium: 90, potassium: 417, calcium: 14, iron: 1.5, magnesium: 39, zinc: 2.5, phosphorus: 350,
        vitA: 0, vitC: 0, vitD: 0.2, vitE: 0.2, vitK: 0, vitB6: 0.9, vitB12: 0.5, folate: 10,
        cholesterol: 115, saturatedFat: 1.4, transFat: 0, omega3: 0.1, omega6: 1.0
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'high-protein', 'low-fat']
    },
    groundTurkey: {
      id: 'groundTurkey',
      name: 'Ground Turkey (93% lean)',
      category: 'proteins',
      subcategory: 'poultry',
      serving: { amount: 150, unit: 'g', description: '5.3 oz cooked' },
      calories: 220,
      macros: { protein: 33, carbs: 0, fat: 10, fiber: 0, sugar: 0 },
      micros: {
        sodium: 100, potassium: 320, calcium: 20, iron: 1.8, magnesium: 30, zinc: 3.5, phosphorus: 280,
        vitA: 0, vitC: 0, vitD: 0.3, vitE: 0.3, vitK: 0, vitB6: 0.6, vitB12: 1.5, folate: 8,
        cholesterol: 110, saturatedFat: 2.8, transFat: 0, omega3: 0.1, omega6: 2.0
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'versatile']
    },

    // Beef
    beefSirloin: {
      id: 'beefSirloin',
      name: 'Beef Sirloin (lean, grilled)',
      category: 'proteins',
      subcategory: 'beef',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 312,
      macros: { protein: 46, carbs: 0, fat: 13, fiber: 0, sugar: 0 },
      micros: {
        sodium: 85, potassium: 520, calcium: 8, iron: 3.2, magnesium: 35, zinc: 7.5, phosphorus: 320,
        vitA: 0, vitC: 0, vitD: 0.1, vitE: 0.5, vitK: 1.5, vitB6: 0.8, vitB12: 2.8, folate: 12,
        cholesterol: 130, saturatedFat: 5.0, transFat: 0.5, omega3: 0.1, omega6: 0.5
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['high-protein', 'iron-rich', 'b12-rich']
    },
    groundBeef95: {
      id: 'groundBeef95',
      name: 'Ground Beef (95% lean)',
      category: 'proteins',
      subcategory: 'beef',
      serving: { amount: 150, unit: 'g', description: '5.3 oz cooked' },
      calories: 232,
      macros: { protein: 36, carbs: 0, fat: 9, fiber: 0, sugar: 0 },
      micros: {
        sodium: 80, potassium: 420, calcium: 12, iron: 3.5, magnesium: 28, zinc: 7.2, phosphorus: 280,
        vitA: 0, vitC: 0, vitD: 0.1, vitE: 0.3, vitK: 1.2, vitB6: 0.5, vitB12: 2.5, folate: 9,
        cholesterol: 105, saturatedFat: 3.8, transFat: 0.4, omega3: 0.05, omega6: 0.3
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['lean', 'iron-rich', 'versatile']
    },
    beefTenderloin: {
      id: 'beefTenderloin',
      name: 'Beef Tenderloin (filet mignon)',
      category: 'proteins',
      subcategory: 'beef',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 340,
      macros: { protein: 44, carbs: 0, fat: 17, fiber: 0, sugar: 0 },
      micros: {
        sodium: 75, potassium: 480, calcium: 10, iron: 2.8, magnesium: 32, zinc: 6.0, phosphorus: 310,
        vitA: 0, vitC: 0, vitD: 0.1, vitE: 0.4, vitK: 1.8, vitB6: 0.7, vitB12: 1.8, folate: 10,
        cholesterol: 120, saturatedFat: 6.5, transFat: 0.7, omega3: 0.08, omega6: 0.6
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['premium', 'tender']
    },
    bison: {
      id: 'bison',
      name: 'Bison (ground, cooked)',
      category: 'proteins',
      subcategory: 'game',
      serving: { amount: 150, unit: 'g', description: '5.3 oz cooked' },
      calories: 213,
      macros: { protein: 35, carbs: 0, fat: 8, fiber: 0, sugar: 0 },
      micros: {
        sodium: 75, potassium: 460, calcium: 14, iron: 4.2, magnesium: 30, zinc: 5.8, phosphorus: 290,
        vitA: 0, vitC: 0, vitD: 0.1, vitE: 0.5, vitK: 1.0, vitB6: 0.6, vitB12: 3.0, folate: 8,
        cholesterol: 105, saturatedFat: 3.2, transFat: 0.2, omega3: 0.15, omega6: 0.3
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['lean', 'iron-rich', 'grass-fed']
    },

    // Pork
    porkTenderloin: {
      id: 'porkTenderloin',
      name: 'Pork Tenderloin (roasted)',
      category: 'proteins',
      subcategory: 'pork',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 248,
      macros: { protein: 44, carbs: 0, fat: 7, fiber: 0, sugar: 0 },
      micros: {
        sodium: 85, potassium: 590, calcium: 8, iron: 1.8, magnesium: 42, zinc: 3.2, phosphorus: 380,
        vitA: 3, vitC: 1, vitD: 0.8, vitE: 0.4, vitK: 0, vitB6: 1.1, vitB12: 0.8, folate: 6,
        cholesterol: 130, saturatedFat: 2.5, transFat: 0, omega3: 0.05, omega6: 0.8
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['lean', 'high-protein', 'thiamin-rich']
    },
    porkChop: {
      id: 'porkChop',
      name: 'Pork Chop (bone-in, grilled)',
      category: 'proteins',
      subcategory: 'pork',
      serving: { amount: 150, unit: 'g', description: '5.3 oz cooked' },
      calories: 268,
      macros: { protein: 38, carbs: 0, fat: 12, fiber: 0, sugar: 0 },
      micros: {
        sodium: 78, potassium: 480, calcium: 20, iron: 1.2, magnesium: 35, zinc: 2.8, phosphorus: 320,
        vitA: 3, vitC: 0, vitD: 0.6, vitE: 0.3, vitK: 0, vitB6: 0.8, vitB12: 0.7, folate: 5,
        cholesterol: 115, saturatedFat: 4.2, transFat: 0, omega3: 0.04, omega6: 1.2
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['flavorful']
    },

    // Fish & Seafood
    salmon: {
      id: 'salmon',
      name: 'Atlantic Salmon (baked)',
      category: 'proteins',
      subcategory: 'fish',
      serving: { amount: 150, unit: 'g', description: '5.3 oz cooked' },
      calories: 312,
      macros: { protein: 34, carbs: 0, fat: 19, fiber: 0, sugar: 0 },
      micros: {
        sodium: 75, potassium: 534, calcium: 15, iron: 0.5, magnesium: 37, zinc: 0.6, phosphorus: 326,
        vitA: 15, vitC: 0, vitD: 14.4, vitE: 3.6, vitK: 0.5, vitB6: 0.9, vitB12: 4.9, folate: 29,
        cholesterol: 85, saturatedFat: 3.8, transFat: 0, omega3: 2.5, omega6: 0.6
      },
      glycemicIndex: 0,
      allergens: ['fish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['omega-3', 'vitamin-d', 'heart-healthy', 'brain-food']
    },
    tuna: {
      id: 'tuna',
      name: 'Tuna (yellowfin, cooked)',
      category: 'proteins',
      subcategory: 'fish',
      serving: { amount: 150, unit: 'g', description: '5.3 oz cooked' },
      calories: 184,
      macros: { protein: 40, carbs: 0, fat: 2, fiber: 0, sugar: 0 },
      micros: {
        sodium: 58, potassium: 448, calcium: 6, iron: 1.2, magnesium: 64, zinc: 0.8, phosphorus: 326,
        vitA: 65, vitC: 0, vitD: 2.1, vitE: 1.0, vitK: 0, vitB6: 1.2, vitB12: 3.0, folate: 6,
        cholesterol: 65, saturatedFat: 0.5, transFat: 0, omega3: 0.3, omega6: 0.05
      },
      glycemicIndex: 0,
      allergens: ['fish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'high-protein', 'low-fat', 'selenium-rich']
    },
    tunaCanned: {
      id: 'tunaCanned',
      name: 'Tuna (canned in water)',
      category: 'proteins',
      subcategory: 'fish',
      serving: { amount: 142, unit: 'g', description: '1 can drained' },
      calories: 145,
      macros: { protein: 33, carbs: 0, fat: 1, fiber: 0, sugar: 0 },
      micros: {
        sodium: 320, potassium: 280, calcium: 14, iron: 1.8, magnesium: 42, zinc: 1.0, phosphorus: 240,
        vitA: 20, vitC: 0, vitD: 1.5, vitE: 0.8, vitK: 0, vitB6: 0.4, vitB12: 3.5, folate: 5,
        cholesterol: 50, saturatedFat: 0.3, transFat: 0, omega3: 0.2, omega6: 0.03
      },
      glycemicIndex: 0,
      allergens: ['fish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['convenient', 'budget-friendly', 'high-protein']
    },
    cod: {
      id: 'cod',
      name: 'Cod (baked)',
      category: 'proteins',
      subcategory: 'fish',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 158,
      macros: { protein: 35, carbs: 0, fat: 1, fiber: 0, sugar: 0 },
      micros: {
        sodium: 105, potassium: 439, calcium: 14, iron: 0.6, magnesium: 42, zinc: 0.7, phosphorus: 280,
        vitA: 14, vitC: 1, vitD: 1.2, vitE: 0.8, vitK: 0.1, vitB6: 0.4, vitB12: 1.6, folate: 10,
        cholesterol: 80, saturatedFat: 0.2, transFat: 0, omega3: 0.2, omega6: 0.01
      },
      glycemicIndex: 0,
      allergens: ['fish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'low-calorie', 'mild-flavor']
    },
    tilapia: {
      id: 'tilapia',
      name: 'Tilapia (baked)',
      category: 'proteins',
      subcategory: 'fish',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 182,
      macros: { protein: 37, carbs: 0, fat: 3, fiber: 0, sugar: 0 },
      micros: {
        sodium: 80, potassium: 450, calcium: 15, iron: 0.8, magnesium: 40, zinc: 0.5, phosphorus: 260,
        vitA: 0, vitC: 0, vitD: 3.1, vitE: 1.0, vitK: 0, vitB6: 0.3, vitB12: 2.5, folate: 8,
        cholesterol: 95, saturatedFat: 1.0, transFat: 0, omega3: 0.3, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: ['fish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'affordable', 'mild-flavor']
    },
    shrimp: {
      id: 'shrimp',
      name: 'Shrimp (cooked)',
      category: 'proteins',
      subcategory: 'shellfish',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 168,
      macros: { protein: 36, carbs: 1, fat: 2, fiber: 0, sugar: 0 },
      micros: {
        sodium: 340, potassium: 259, calcium: 70, iron: 0.4, magnesium: 51, zinc: 2.2, phosphorus: 380,
        vitA: 68, vitC: 0, vitD: 0.3, vitE: 2.5, vitK: 0, vitB6: 0.2, vitB12: 2.0, folate: 4,
        cholesterol: 285, saturatedFat: 0.4, transFat: 0, omega3: 0.5, omega6: 0.05
      },
      glycemicIndex: 0,
      allergens: ['shellfish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'high-protein', 'selenium-rich', 'iodine-rich']
    },
    scallops: {
      id: 'scallops',
      name: 'Scallops (pan-seared)',
      category: 'proteins',
      subcategory: 'shellfish',
      serving: { amount: 150, unit: 'g', description: '5.3 oz cooked' },
      calories: 140,
      macros: { protein: 27, carbs: 5, fat: 1, fiber: 0, sugar: 0 },
      micros: {
        sodium: 265, potassium: 335, calcium: 22, iron: 0.4, magnesium: 55, zinc: 1.8, phosphorus: 390,
        vitA: 3, vitC: 0, vitD: 0.1, vitE: 0.5, vitK: 0, vitB6: 0.1, vitB12: 2.0, folate: 22,
        cholesterol: 55, saturatedFat: 0.2, transFat: 0, omega3: 0.3, omega6: 0.02
      },
      glycemicIndex: 0,
      allergens: ['shellfish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'delicate', 'zinc-rich']
    },

    // Eggs & Dairy Proteins
    wholeEggs: {
      id: 'wholeEggs',
      name: 'Whole Eggs (large)',
      category: 'proteins',
      subcategory: 'eggs',
      serving: { amount: 100, unit: 'g', description: '2 large eggs' },
      calories: 143,
      macros: { protein: 13, carbs: 1, fat: 10, fiber: 0, sugar: 0 },
      micros: {
        sodium: 140, potassium: 134, calcium: 50, iron: 1.8, magnesium: 12, zinc: 1.1, phosphorus: 180,
        vitA: 160, vitC: 0, vitD: 2.0, vitE: 1.0, vitK: 0.3, vitB6: 0.1, vitB12: 1.1, folate: 47,
        cholesterol: 372, saturatedFat: 3.3, transFat: 0, omega3: 0.1, omega6: 1.4
      },
      glycemicIndex: 0,
      allergens: ['eggs'],
      dietTypes: ['regular', 'vegetarian', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['complete-protein', 'choline-rich', 'versatile']
    },
    eggWhites: {
      id: 'eggWhites',
      name: 'Egg Whites',
      category: 'proteins',
      subcategory: 'eggs',
      serving: { amount: 243, unit: 'g', description: '1 cup (8 whites)' },
      calories: 126,
      macros: { protein: 26, carbs: 2, fat: 0, fiber: 0, sugar: 0 },
      micros: {
        sodium: 403, potassium: 403, calcium: 17, iron: 0.2, magnesium: 27, zinc: 0.1, phosphorus: 34,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB6: 0.01, vitB12: 0.2, folate: 10,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 0,
      allergens: ['eggs'],
      dietTypes: ['regular', 'vegetarian', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['pure-protein', 'zero-fat', 'bodybuilding-staple']
    },
    greekYogurt: {
      id: 'greekYogurt',
      name: 'Greek Yogurt (plain, non-fat)',
      category: 'proteins',
      subcategory: 'dairy',
      serving: { amount: 245, unit: 'g', description: '1 cup' },
      calories: 133,
      macros: { protein: 23, carbs: 9, fat: 0, fiber: 0, sugar: 6 },
      micros: {
        sodium: 92, potassium: 320, calcium: 230, iron: 0.2, magnesium: 22, zinc: 1.4, phosphorus: 246,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0.4, vitB6: 0.1, vitB12: 1.5, folate: 17,
        cholesterol: 10, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 11,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'mediterranean', 'glutenfree'],
      tags: ['probiotic', 'calcium-rich', 'high-protein']
    },
    cottageCheese: {
      id: 'cottageCheese',
      name: 'Cottage Cheese (low-fat, 2%)',
      category: 'proteins',
      subcategory: 'dairy',
      serving: { amount: 226, unit: 'g', description: '1 cup' },
      calories: 183,
      macros: { protein: 28, carbs: 8, fat: 5, fiber: 0, sugar: 6 },
      micros: {
        sodium: 746, potassium: 264, calcium: 227, iron: 0.4, magnesium: 16, zinc: 1.0, phosphorus: 340,
        vitA: 45, vitC: 0, vitD: 0.1, vitE: 0.1, vitK: 0.2, vitB6: 0.2, vitB12: 1.5, folate: 27,
        cholesterol: 24, saturatedFat: 2.8, transFat: 0, omega3: 0.03, omega6: 0.1
      },
      glycemicIndex: 10,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'mediterranean', 'glutenfree'],
      tags: ['casein-protein', 'slow-digesting', 'night-time']
    },

    // Plant Proteins
    tofu: {
      id: 'tofu',
      name: 'Tofu (extra firm)',
      category: 'proteins',
      subcategory: 'plant',
      serving: { amount: 170, unit: 'g', description: '6 oz' },
      calories: 153,
      macros: { protein: 18, carbs: 4, fat: 9, fiber: 1, sugar: 0 },
      micros: {
        sodium: 20, potassium: 238, calcium: 350, iron: 2.7, magnesium: 60, zinc: 1.6, phosphorus: 204,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.02, vitK: 4.5, vitB6: 0.1, vitB12: 0, folate: 30,
        cholesterol: 0, saturatedFat: 1.3, transFat: 0, omega3: 0.7, omega6: 4.3
      },
      glycemicIndex: 15,
      allergens: ['soy'],
      dietTypes: ['vegetarian', 'vegan', 'glutenfree'],
      tags: ['complete-protein', 'calcium-fortified', 'isoflavones']
    },
    tempeh: {
      id: 'tempeh',
      name: 'Tempeh',
      category: 'proteins',
      subcategory: 'plant',
      serving: { amount: 170, unit: 'g', description: '6 oz' },
      calories: 323,
      macros: { protein: 34, carbs: 16, fat: 18, fiber: 0, sugar: 0 },
      micros: {
        sodium: 20, potassium: 684, calcium: 184, iron: 4.5, magnesium: 134, zinc: 2.6, phosphorus: 442,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB6: 0.4, vitB12: 0.1, folate: 40,
        cholesterol: 0, saturatedFat: 3.7, transFat: 0, omega3: 0.2, omega6: 8.0
      },
      glycemicIndex: 0,
      allergens: ['soy'],
      dietTypes: ['vegetarian', 'vegan', 'glutenfree'],
      tags: ['fermented', 'probiotic', 'complete-protein']
    },
    seitan: {
      id: 'seitan',
      name: 'Seitan (wheat gluten)',
      category: 'proteins',
      subcategory: 'plant',
      serving: { amount: 100, unit: 'g', description: '3.5 oz' },
      calories: 126,
      macros: { protein: 25, carbs: 4, fat: 1, fiber: 0, sugar: 0 },
      micros: {
        sodium: 14, potassium: 100, calcium: 53, iron: 2.8, magnesium: 22, zinc: 1.5, phosphorus: 125,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 4,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0, omega6: 0.3
      },
      glycemicIndex: 0,
      allergens: ['gluten'],
      dietTypes: ['vegetarian', 'vegan'],
      tags: ['high-protein', 'meat-alternative', 'low-fat']
    },
    lentils: {
      id: 'lentils',
      name: 'Lentils (cooked)',
      category: 'proteins',
      subcategory: 'legumes',
      serving: { amount: 198, unit: 'g', description: '1 cup cooked' },
      calories: 230,
      macros: { protein: 18, carbs: 40, fat: 1, fiber: 16, sugar: 4 },
      micros: {
        sodium: 4, potassium: 731, calcium: 38, iron: 6.6, magnesium: 71, zinc: 2.5, phosphorus: 356,
        vitA: 8, vitC: 3, vitD: 0, vitE: 0.2, vitK: 3.4, vitB6: 0.4, vitB12: 0, folate: 358,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.07, omega6: 0.4
      },
      glycemicIndex: 32,
      allergens: [],
      dietTypes: ['vegetarian', 'vegan', 'mediterranean', 'glutenfree'],
      tags: ['fiber-rich', 'iron-rich', 'folate-rich', 'budget-friendly']
    },
    chickpeas: {
      id: 'chickpeas',
      name: 'Chickpeas (cooked)',
      category: 'proteins',
      subcategory: 'legumes',
      serving: { amount: 164, unit: 'g', description: '1 cup cooked' },
      calories: 269,
      macros: { protein: 15, carbs: 45, fat: 4, fiber: 12, sugar: 8 },
      micros: {
        sodium: 11, potassium: 477, calcium: 80, iron: 4.7, magnesium: 79, zinc: 2.5, phosphorus: 276,
        vitA: 3, vitC: 2, vitD: 0, vitE: 0.6, vitK: 6.6, vitB6: 0.2, vitB12: 0, folate: 282,
        cholesterol: 0, saturatedFat: 0.4, transFat: 0, omega3: 0.07, omega6: 2.6
      },
      glycemicIndex: 28,
      allergens: [],
      dietTypes: ['vegetarian', 'vegan', 'mediterranean', 'glutenfree'],
      tags: ['fiber-rich', 'versatile', 'hummus-base']
    },
    blackBeans: {
      id: 'blackBeans',
      name: 'Black Beans (cooked)',
      category: 'proteins',
      subcategory: 'legumes',
      serving: { amount: 172, unit: 'g', description: '1 cup cooked' },
      calories: 227,
      macros: { protein: 15, carbs: 41, fat: 1, fiber: 15, sugar: 1 },
      micros: {
        sodium: 2, potassium: 611, calcium: 46, iron: 3.6, magnesium: 120, zinc: 1.9, phosphorus: 241,
        vitA: 1, vitC: 0, vitD: 0, vitE: 0.1, vitK: 5.5, vitB6: 0.1, vitB12: 0, folate: 256,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.1, omega6: 0.2
      },
      glycemicIndex: 30,
      allergens: [],
      dietTypes: ['vegetarian', 'vegan', 'mediterranean', 'glutenfree'],
      tags: ['fiber-rich', 'antioxidants', 'folate-rich']
    },

    // Protein Supplements
    wheyIsolate: {
      id: 'wheyIsolate',
      name: 'Whey Protein Isolate',
      category: 'proteins',
      subcategory: 'supplements',
      serving: { amount: 31, unit: 'g', description: '1 scoop' },
      calories: 120,
      macros: { protein: 27, carbs: 1, fat: 0.5, fiber: 0, sugar: 0 },
      micros: {
        sodium: 65, potassium: 140, calcium: 110, iron: 0.5, magnesium: 20, zinc: 2.0, phosphorus: 100,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 10, saturatedFat: 0.3, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['fast-absorbing', 'post-workout', 'high-leucine', 'bodybuilding-staple']
    },
    caseinProtein: {
      id: 'caseinProtein',
      name: 'Casein Protein',
      category: 'proteins',
      subcategory: 'supplements',
      serving: { amount: 33, unit: 'g', description: '1 scoop' },
      calories: 120,
      macros: { protein: 24, carbs: 3, fat: 1, fiber: 0, sugar: 1 },
      micros: {
        sodium: 100, potassium: 200, calcium: 500, iron: 0.4, magnesium: 20, zinc: 1.5, phosphorus: 350,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 20, saturatedFat: 0.5, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['slow-digesting', 'before-bed', 'anti-catabolic']
    },
    veganProtein: {
      id: 'veganProtein',
      name: 'Vegan Protein Blend (pea/rice)',
      category: 'proteins',
      subcategory: 'supplements',
      serving: { amount: 35, unit: 'g', description: '1 scoop' },
      calories: 130,
      macros: { protein: 24, carbs: 4, fat: 2, fiber: 1, sugar: 1 },
      micros: {
        sodium: 350, potassium: 50, calcium: 75, iron: 5.0, magnesium: 25, zinc: 1.0, phosphorus: 200,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 0.5, transFat: 0, omega3: 0, omega6: 0.5
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['vegetarian', 'vegan', 'glutenfree'],
      tags: ['plant-based', 'complete-amino-profile', 'allergen-friendly']
    },

    // Additional Poultry
    duck: {
      id: 'duck',
      name: 'Duck Breast (skinless, roasted)',
      category: 'proteins',
      subcategory: 'poultry',
      serving: { amount: 140, unit: 'g', description: '5 oz cooked' },
      calories: 180,
      macros: { protein: 29, carbs: 0, fat: 7, fiber: 0, sugar: 0 },
      micros: {
        sodium: 65, potassium: 280, calcium: 12, iron: 4.5, magnesium: 22, zinc: 2.2, phosphorus: 210,
        vitA: 24, vitC: 0, vitD: 0.3, vitE: 0.5, vitK: 2.8, vitB6: 0.4, vitB12: 0.4, folate: 8,
        cholesterol: 135, saturatedFat: 2.5, transFat: 0, omega3: 0.1, omega6: 0.8
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['rich-flavor', 'iron-rich', 'gourmet']
    },
    cornishHen: {
      id: 'cornishHen',
      name: 'Cornish Game Hen (roasted)',
      category: 'proteins',
      subcategory: 'poultry',
      serving: { amount: 140, unit: 'g', description: '5 oz cooked' },
      calories: 220,
      macros: { protein: 28, carbs: 0, fat: 12, fiber: 0, sugar: 0 },
      micros: {
        sodium: 70, potassium: 250, calcium: 14, iron: 1.2, magnesium: 24, zinc: 1.8, phosphorus: 195,
        vitA: 20, vitC: 0, vitD: 0.2, vitE: 0.3, vitK: 2.0, vitB6: 0.5, vitB12: 0.4, folate: 6,
        cholesterol: 125, saturatedFat: 3.5, transFat: 0, omega3: 0.1, omega6: 2.0
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['tender', 'elegant', 'whole-bird']
    },
    chickenDrumstick: {
      id: 'chickenDrumstick',
      name: 'Chicken Drumstick (skinless)',
      category: 'proteins',
      subcategory: 'poultry',
      serving: { amount: 95, unit: 'g', description: '2 drumsticks' },
      calories: 130,
      macros: { protein: 20, carbs: 0, fat: 5, fiber: 0, sugar: 0 },
      micros: {
        sodium: 85, potassium: 195, calcium: 10, iron: 1.0, magnesium: 20, zinc: 2.5, phosphorus: 165,
        vitA: 15, vitC: 0, vitD: 0.1, vitE: 0.2, vitK: 1.5, vitB6: 0.3, vitB12: 0.3, folate: 5,
        cholesterol: 80, saturatedFat: 1.4, transFat: 0, omega3: 0.05, omega6: 1.0
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['budget-friendly', 'juicy', 'dark-meat']
    },
    rotisserieChicken: {
      id: 'rotisserieChicken',
      name: 'Rotisserie Chicken (meat only)',
      category: 'proteins',
      subcategory: 'poultry',
      serving: { amount: 140, unit: 'g', description: '5 oz' },
      calories: 190,
      macros: { protein: 32, carbs: 0, fat: 7, fiber: 0, sugar: 0 },
      micros: {
        sodium: 350, potassium: 290, calcium: 15, iron: 1.2, magnesium: 28, zinc: 2.0, phosphorus: 220,
        vitA: 18, vitC: 0, vitD: 0.2, vitE: 0.3, vitK: 1.8, vitB6: 0.6, vitB12: 0.4, folate: 6,
        cholesterol: 105, saturatedFat: 2.0, transFat: 0, omega3: 0.08, omega6: 1.5
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['convenient', 'pre-cooked', 'versatile']
    },

    // Additional Beef
    ribeye: {
      id: 'ribeye',
      name: 'Ribeye Steak (grilled, trimmed)',
      category: 'proteins',
      subcategory: 'beef',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 380,
      macros: { protein: 42, carbs: 0, fat: 23, fiber: 0, sugar: 0 },
      micros: {
        sodium: 80, potassium: 450, calcium: 12, iron: 2.8, magnesium: 28, zinc: 7.0, phosphorus: 280,
        vitA: 0, vitC: 0, vitD: 0.1, vitE: 0.4, vitK: 1.5, vitB6: 0.7, vitB12: 2.5, folate: 10,
        cholesterol: 140, saturatedFat: 9.5, transFat: 0.8, omega3: 0.1, omega6: 0.6
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['marbled', 'flavorful', 'premium']
    },
    flankSteak: {
      id: 'flankSteak',
      name: 'Flank Steak (grilled)',
      category: 'proteins',
      subcategory: 'beef',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 280,
      macros: { protein: 46, carbs: 0, fat: 10, fiber: 0, sugar: 0 },
      micros: {
        sodium: 75, potassium: 520, calcium: 10, iron: 3.0, magnesium: 32, zinc: 6.5, phosphorus: 310,
        vitA: 0, vitC: 0, vitD: 0.1, vitE: 0.4, vitK: 1.2, vitB6: 0.8, vitB12: 2.6, folate: 11,
        cholesterol: 115, saturatedFat: 4.0, transFat: 0.4, omega3: 0.08, omega6: 0.4
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['lean', 'great-for-fajitas', 'affordable']
    },
    beefLiver: {
      id: 'beefLiver',
      name: 'Beef Liver (pan-fried)',
      category: 'proteins',
      subcategory: 'beef',
      serving: { amount: 115, unit: 'g', description: '4 oz cooked' },
      calories: 175,
      macros: { protein: 27, carbs: 4, fat: 5, fiber: 0, sugar: 0 },
      micros: {
        sodium: 75, potassium: 350, calcium: 6, iron: 6.2, magnesium: 20, zinc: 5.0, phosphorus: 420,
        vitA: 8500, vitC: 2, vitD: 1.2, vitE: 0.5, vitK: 3.5, vitB6: 1.0, vitB12: 85, folate: 290,
        cholesterol: 380, saturatedFat: 1.8, transFat: 0.2, omega3: 0.1, omega6: 0.4
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['superfood', 'vitamin-a', 'b12-rich', 'iron-rich']
    },
    beefJerky: {
      id: 'beefJerky',
      name: 'Beef Jerky',
      category: 'proteins',
      subcategory: 'beef',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 116,
      macros: { protein: 9, carbs: 3, fat: 7, fiber: 0, sugar: 3 },
      micros: {
        sodium: 590, potassium: 165, calcium: 8, iron: 1.5, magnesium: 14, zinc: 2.3, phosphorus: 115,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.5, vitB6: 0.1, vitB12: 0.8, folate: 4,
        cholesterol: 25, saturatedFat: 3.0, transFat: 0.3, omega3: 0.02, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['portable', 'shelf-stable', 'high-sodium', 'snack']
    },

    // Lamb
    lambChop: {
      id: 'lambChop',
      name: 'Lamb Chop (grilled, trimmed)',
      category: 'proteins',
      subcategory: 'lamb',
      serving: { amount: 140, unit: 'g', description: '5 oz cooked' },
      calories: 290,
      macros: { protein: 35, carbs: 0, fat: 16, fiber: 0, sugar: 0 },
      micros: {
        sodium: 75, potassium: 350, calcium: 18, iron: 2.5, magnesium: 26, zinc: 5.5, phosphorus: 220,
        vitA: 0, vitC: 0, vitD: 0.2, vitE: 0.2, vitK: 3.5, vitB6: 0.3, vitB12: 3.2, folate: 18,
        cholesterol: 115, saturatedFat: 6.8, transFat: 0.8, omega3: 0.15, omega6: 0.6
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['rich-flavor', 'zinc-rich', 'b12-rich']
    },
    groundLamb: {
      id: 'groundLamb',
      name: 'Ground Lamb (cooked)',
      category: 'proteins',
      subcategory: 'lamb',
      serving: { amount: 140, unit: 'g', description: '5 oz cooked' },
      calories: 320,
      macros: { protein: 28, carbs: 0, fat: 23, fiber: 0, sugar: 0 },
      micros: {
        sodium: 80, potassium: 310, calcium: 20, iron: 2.2, magnesium: 24, zinc: 5.0, phosphorus: 200,
        vitA: 0, vitC: 0, vitD: 0.2, vitE: 0.2, vitK: 3.0, vitB6: 0.3, vitB12: 2.8, folate: 15,
        cholesterol: 105, saturatedFat: 9.5, transFat: 1.0, omega3: 0.2, omega6: 0.8
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['versatile', 'flavorful', 'mediterranean-cuisine']
    },
    lambLeg: {
      id: 'lambLeg',
      name: 'Lamb Leg (roasted, lean)',
      category: 'proteins',
      subcategory: 'lamb',
      serving: { amount: 140, unit: 'g', description: '5 oz cooked' },
      calories: 230,
      macros: { protein: 36, carbs: 0, fat: 9, fiber: 0, sugar: 0 },
      micros: {
        sodium: 70, potassium: 380, calcium: 15, iron: 2.8, magnesium: 28, zinc: 6.0, phosphorus: 240,
        vitA: 0, vitC: 0, vitD: 0.2, vitE: 0.2, vitK: 2.8, vitB6: 0.3, vitB12: 3.5, folate: 20,
        cholesterol: 100, saturatedFat: 3.5, transFat: 0.4, omega3: 0.12, omega6: 0.5
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'sunday-roast', 'celebration']
    },

    // Pork additions
    ham: {
      id: 'ham',
      name: 'Ham (lean, roasted)',
      category: 'proteins',
      subcategory: 'pork',
      serving: { amount: 140, unit: 'g', description: '5 oz' },
      calories: 180,
      macros: { protein: 28, carbs: 2, fat: 7, fiber: 0, sugar: 2 },
      micros: {
        sodium: 1200, potassium: 350, calcium: 10, iron: 1.2, magnesium: 22, zinc: 2.5, phosphorus: 240,
        vitA: 0, vitC: 0, vitD: 0.5, vitE: 0.2, vitK: 0, vitB6: 0.5, vitB12: 0.8, folate: 4,
        cholesterol: 75, saturatedFat: 2.3, transFat: 0, omega3: 0.04, omega6: 0.8
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'glutenfree'],
      tags: ['high-sodium', 'deli-meat', 'convenient']
    },
    bacon: {
      id: 'bacon',
      name: 'Bacon (pan-fried)',
      category: 'proteins',
      subcategory: 'pork',
      serving: { amount: 35, unit: 'g', description: '3 slices' },
      calories: 160,
      macros: { protein: 12, carbs: 0, fat: 12, fiber: 0, sugar: 0 },
      micros: {
        sodium: 580, potassium: 140, calcium: 5, iron: 0.5, magnesium: 12, zinc: 1.2, phosphorus: 130,
        vitA: 10, vitC: 0, vitD: 0.3, vitE: 0.2, vitK: 0, vitB6: 0.2, vitB12: 0.4, folate: 2,
        cholesterol: 40, saturatedFat: 4.2, transFat: 0, omega3: 0.03, omega6: 1.2
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree', 'keto'],
      tags: ['high-sodium', 'breakfast', 'crispy', 'indulgent']
    },
    porkShoulder: {
      id: 'porkShoulder',
      name: 'Pork Shoulder (braised)',
      category: 'proteins',
      subcategory: 'pork',
      serving: { amount: 140, unit: 'g', description: '5 oz cooked' },
      calories: 285,
      macros: { protein: 32, carbs: 0, fat: 17, fiber: 0, sugar: 0 },
      micros: {
        sodium: 70, potassium: 380, calcium: 15, iron: 1.5, magnesium: 25, zinc: 4.5, phosphorus: 220,
        vitA: 5, vitC: 0, vitD: 0.6, vitE: 0.3, vitK: 0, vitB6: 0.5, vitB12: 0.8, folate: 5,
        cholesterol: 105, saturatedFat: 6.0, transFat: 0, omega3: 0.08, omega6: 1.8
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['slow-cooked', 'pulled-pork', 'tender']
    },

    // Game Meats
    venison: {
      id: 'venison',
      name: 'Venison (roasted)',
      category: 'proteins',
      subcategory: 'game',
      serving: { amount: 140, unit: 'g', description: '5 oz cooked' },
      calories: 190,
      macros: { protein: 36, carbs: 0, fat: 4, fiber: 0, sugar: 0 },
      micros: {
        sodium: 60, potassium: 380, calcium: 8, iron: 4.5, magnesium: 28, zinc: 3.5, phosphorus: 250,
        vitA: 0, vitC: 0, vitD: 0.1, vitE: 0.3, vitK: 1.5, vitB6: 0.6, vitB12: 2.0, folate: 8,
        cholesterol: 110, saturatedFat: 1.5, transFat: 0, omega3: 0.08, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['very-lean', 'wild-game', 'iron-rich', 'sustainable']
    },
    elk: {
      id: 'elk',
      name: 'Elk (roasted)',
      category: 'proteins',
      subcategory: 'game',
      serving: { amount: 140, unit: 'g', description: '5 oz cooked' },
      calories: 185,
      macros: { protein: 38, carbs: 0, fat: 3, fiber: 0, sugar: 0 },
      micros: {
        sodium: 55, potassium: 400, calcium: 6, iron: 4.0, magnesium: 30, zinc: 4.2, phosphorus: 260,
        vitA: 0, vitC: 0, vitD: 0.1, vitE: 0.3, vitK: 1.2, vitB6: 0.5, vitB12: 1.8, folate: 6,
        cholesterol: 95, saturatedFat: 1.2, transFat: 0, omega3: 0.06, omega6: 0.15
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['very-lean', 'wild-game', 'sustainable', 'mild-flavor']
    },

    // More Seafood
    mahi: {
      id: 'mahi',
      name: 'Mahi Mahi (grilled)',
      category: 'proteins',
      subcategory: 'fish',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 175,
      macros: { protein: 38, carbs: 0, fat: 2, fiber: 0, sugar: 0 },
      micros: {
        sodium: 140, potassium: 540, calcium: 25, iron: 1.5, magnesium: 42, zinc: 0.6, phosphorus: 280,
        vitA: 60, vitC: 0, vitD: 1.8, vitE: 0.8, vitK: 0.1, vitB6: 0.5, vitB12: 1.2, folate: 8,
        cholesterol: 120, saturatedFat: 0.5, transFat: 0, omega3: 0.2, omega6: 0.02
      },
      glycemicIndex: 0,
      allergens: ['fish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'mild-flavor', 'tropical', 'grilling-fish']
    },
    halibut: {
      id: 'halibut',
      name: 'Halibut (baked)',
      category: 'proteins',
      subcategory: 'fish',
      serving: { amount: 170, unit: 'g', description: '6 oz cooked' },
      calories: 190,
      macros: { protein: 40, carbs: 0, fat: 3, fiber: 0, sugar: 0 },
      micros: {
        sodium: 100, potassium: 650, calcium: 70, iron: 1.2, magnesium: 120, zinc: 0.6, phosphorus: 340,
        vitA: 60, vitC: 0, vitD: 5.0, vitE: 1.0, vitK: 0.1, vitB6: 0.6, vitB12: 1.5, folate: 15,
        cholesterol: 60, saturatedFat: 0.5, transFat: 0, omega3: 0.5, omega6: 0.05
      },
      glycemicIndex: 0,
      allergens: ['fish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['lean', 'firm-texture', 'magnesium-rich', 'premium']
    },
    sardines: {
      id: 'sardines',
      name: 'Sardines (canned in oil, drained)',
      category: 'proteins',
      subcategory: 'fish',
      serving: { amount: 92, unit: 'g', description: '1 can' },
      calories: 208,
      macros: { protein: 25, carbs: 0, fat: 11, fiber: 0, sugar: 0 },
      micros: {
        sodium: 465, potassium: 365, calcium: 350, iron: 2.9, magnesium: 36, zinc: 1.3, phosphorus: 450,
        vitA: 32, vitC: 0, vitD: 4.8, vitE: 2.0, vitK: 2.5, vitB6: 0.2, vitB12: 8.9, folate: 10,
        cholesterol: 142, saturatedFat: 1.5, transFat: 0, omega3: 1.4, omega6: 3.5
      },
      glycemicIndex: 0,
      allergens: ['fish'],
      dietTypes: ['regular', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['omega-3', 'calcium-rich', 'bone-in', 'sustainable', 'budget-friendly']
    },
    crab: {
      id: 'crab',
      name: 'Crab Meat (steamed)',
      category: 'proteins',
      subcategory: 'shellfish',
      serving: { amount: 135, unit: 'g', description: '1 cup' },
      calories: 130,
      macros: { protein: 27, carbs: 0, fat: 2, fiber: 0, sugar: 0 },
      micros: {
        sodium: 950, potassium: 350, calcium: 135, iron: 1.0, magnesium: 50, zinc: 6.5, phosphorus: 280,
        vitA: 3, vitC: 9, vitD: 0.1, vitE: 2.5, vitK: 0.1, vitB6: 0.2, vitB12: 10, folate: 60,
        cholesterol: 135, saturatedFat: 0.2, transFat: 0, omega3: 0.4, omega6: 0.02
      },
      glycemicIndex: 0,
      allergens: ['shellfish'],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['lean', 'sweet-flavor', 'zinc-rich', 'b12-rich']
    },
    lobster: {
      id: 'lobster',
      name: 'Lobster Tail (steamed)',
      category: 'proteins',
      subcategory: 'shellfish',
      serving: { amount: 145, unit: 'g', description: '1 tail' },
      calories: 135,
      macros: { protein: 28, carbs: 1, fat: 1, fiber: 0, sugar: 0 },
      micros: {
        sodium: 550, potassium: 350, calcium: 95, iron: 0.5, magnesium: 45, zinc: 4.0, phosphorus: 220,
        vitA: 25, vitC: 0, vitD: 0.1, vitE: 1.5, vitK: 0.1, vitB6: 0.1, vitB12: 2.0, folate: 15,
        cholesterol: 145, saturatedFat: 0.2, transFat: 0, omega3: 0.15, omega6: 0.02
      },
      glycemicIndex: 0,
      allergens: ['shellfish'],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['lean', 'luxury', 'sweet-flavor', 'celebration']
    },
    mussels: {
      id: 'mussels',
      name: 'Mussels (steamed)',
      category: 'proteins',
      subcategory: 'shellfish',
      serving: { amount: 150, unit: 'g', description: '1 cup' },
      calories: 175,
      macros: { protein: 24, carbs: 8, fat: 5, fiber: 0, sugar: 0 },
      micros: {
        sodium: 430, potassium: 480, calcium: 35, iron: 6.7, magnesium: 40, zinc: 2.5, phosphorus: 285,
        vitA: 90, vitC: 14, vitD: 0.1, vitE: 1.0, vitK: 0.1, vitB6: 0.1, vitB12: 24, folate: 76,
        cholesterol: 65, saturatedFat: 0.9, transFat: 0, omega3: 0.8, omega6: 0.1
      },
      glycemicIndex: 0,
      allergens: ['shellfish'],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['iron-rich', 'b12-rich', 'sustainable', 'affordable']
    },
    oysters: {
      id: 'oysters',
      name: 'Oysters (raw)',
      category: 'proteins',
      subcategory: 'shellfish',
      serving: { amount: 84, unit: 'g', description: '6 medium' },
      calories: 57,
      macros: { protein: 6, carbs: 3, fat: 2, fiber: 0, sugar: 0 },
      micros: {
        sodium: 210, potassium: 155, calcium: 45, iron: 5.0, magnesium: 35, zinc: 32, phosphorus: 95,
        vitA: 50, vitC: 4, vitD: 8.0, vitE: 1.0, vitK: 0.1, vitB6: 0.05, vitB12: 14, folate: 25,
        cholesterol: 45, saturatedFat: 0.5, transFat: 0, omega3: 0.4, omega6: 0.04
      },
      glycemicIndex: 0,
      allergens: ['shellfish'],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['zinc-powerhouse', 'aphrodisiac', 'vitamin-d', 'luxury']
    },
    clams: {
      id: 'clams',
      name: 'Clams (steamed)',
      category: 'proteins',
      subcategory: 'shellfish',
      serving: { amount: 150, unit: 'g', description: '20 small' },
      calories: 175,
      macros: { protein: 30, carbs: 6, fat: 2, fiber: 0, sugar: 0 },
      micros: {
        sodium: 110, potassium: 630, calcium: 115, iron: 28, magnesium: 18, zinc: 3.0, phosphorus: 340,
        vitA: 170, vitC: 22, vitD: 0.1, vitE: 0.5, vitK: 0.2, vitB6: 0.1, vitB12: 98, folate: 35,
        cholesterol: 75, saturatedFat: 0.2, transFat: 0, omega3: 0.3, omega6: 0.04
      },
      glycemicIndex: 0,
      allergens: ['shellfish'],
      dietTypes: ['regular', 'paleo', 'glutenfree'],
      tags: ['iron-powerhouse', 'b12-powerhouse', 'vitamin-c']
    },

    // More Legumes
    kidneyBeans: {
      id: 'kidneyBeans',
      name: 'Kidney Beans (cooked)',
      category: 'proteins',
      subcategory: 'legumes',
      serving: { amount: 177, unit: 'g', description: '1 cup cooked' },
      calories: 225,
      macros: { protein: 15, carbs: 40, fat: 1, fiber: 13, sugar: 1 },
      micros: {
        sodium: 2, potassium: 713, calcium: 62, iron: 3.9, magnesium: 74, zinc: 1.8, phosphorus: 244,
        vitA: 0, vitC: 2, vitD: 0, vitE: 0.1, vitK: 14.9, vitB6: 0.2, vitB12: 0, folate: 230,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.3, omega6: 0.2
      },
      glycemicIndex: 24,
      allergens: [],
      dietTypes: ['vegetarian', 'vegan', 'mediterranean', 'glutenfree'],
      tags: ['fiber-rich', 'budget-friendly', 'chili-base']
    },
    edamame: {
      id: 'edamame',
      name: 'Edamame (shelled)',
      category: 'proteins',
      subcategory: 'legumes',
      serving: { amount: 155, unit: 'g', description: '1 cup' },
      calories: 188,
      macros: { protein: 18, carbs: 14, fat: 8, fiber: 8, sugar: 3 },
      micros: {
        sodium: 9, potassium: 676, calcium: 98, iron: 3.5, magnesium: 99, zinc: 2.1, phosphorus: 262,
        vitA: 23, vitC: 10, vitD: 0, vitE: 0.7, vitK: 41, vitB6: 0.1, vitB12: 0, folate: 482,
        cholesterol: 0, saturatedFat: 0.9, transFat: 0, omega3: 0.6, omega6: 2.8
      },
      glycemicIndex: 18,
      allergens: ['soy'],
      dietTypes: ['vegetarian', 'vegan', 'glutenfree'],
      tags: ['complete-protein', 'folate-rich', 'snackable', 'asian-cuisine']
    },
    splitPeas: {
      id: 'splitPeas',
      name: 'Split Peas (cooked)',
      category: 'proteins',
      subcategory: 'legumes',
      serving: { amount: 196, unit: 'g', description: '1 cup cooked' },
      calories: 231,
      macros: { protein: 16, carbs: 41, fat: 1, fiber: 16, sugar: 6 },
      micros: {
        sodium: 4, potassium: 710, calcium: 27, iron: 2.5, magnesium: 71, zinc: 2.0, phosphorus: 194,
        vitA: 7, vitC: 1, vitD: 0, vitE: 0.1, vitK: 5.0, vitB6: 0.1, vitB12: 0, folate: 127,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.05, omega6: 0.3
      },
      glycemicIndex: 25,
      allergens: [],
      dietTypes: ['vegetarian', 'vegan', 'glutenfree'],
      tags: ['soup-base', 'fiber-powerhouse', 'budget-friendly']
    },
    pintoBeans: {
      id: 'pintoBeans',
      name: 'Pinto Beans (cooked)',
      category: 'proteins',
      subcategory: 'legumes',
      serving: { amount: 171, unit: 'g', description: '1 cup cooked' },
      calories: 245,
      macros: { protein: 15, carbs: 45, fat: 1, fiber: 15, sugar: 1 },
      micros: {
        sodium: 1, potassium: 746, calcium: 79, iron: 3.6, magnesium: 86, zinc: 1.7, phosphorus: 251,
        vitA: 0, vitC: 1, vitD: 0, vitE: 0.8, vitK: 6.0, vitB6: 0.4, vitB12: 0, folate: 294,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.2, omega6: 0.2
      },
      glycemicIndex: 39,
      allergens: [],
      dietTypes: ['vegetarian', 'vegan', 'glutenfree'],
      tags: ['refried-beans', 'mexican-cuisine', 'fiber-rich']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CARBOHYDRATES - Grains, Starches, Fruits
  // ═══════════════════════════════════════════════════════════════════════════
  carbs: {
    // Grains
    whiteRice: {
      id: 'whiteRice',
      name: 'White Rice (long-grain, cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 158, unit: 'g', description: '1 cup cooked' },
      calories: 206,
      macros: { protein: 4, carbs: 45, fat: 0, fiber: 1, sugar: 0 },
      micros: {
        sodium: 2, potassium: 55, calcium: 16, iron: 2.0, magnesium: 19, zinc: 0.8, phosphorus: 68,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 153,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 73,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['fast-digesting', 'post-workout', 'bodybuilding-staple']
    },
    brownRice: {
      id: 'brownRice',
      name: 'Brown Rice (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 195, unit: 'g', description: '1 cup cooked' },
      calories: 216,
      macros: { protein: 5, carbs: 45, fat: 2, fiber: 4, sugar: 0 },
      micros: {
        sodium: 10, potassium: 84, calcium: 20, iron: 1.0, magnesium: 84, zinc: 1.2, phosphorus: 162,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.6, vitB6: 0.3, vitB12: 0, folate: 8,
        cholesterol: 0, saturatedFat: 0.4, transFat: 0, omega3: 0.03, omega6: 0.6
      },
      glycemicIndex: 50,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['whole-grain', 'fiber-rich', 'sustained-energy']
    },
    jasminRice: {
      id: 'jasmineRice',
      name: 'Jasmine Rice (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 158, unit: 'g', description: '1 cup cooked' },
      calories: 205,
      macros: { protein: 4, carbs: 45, fat: 0, fiber: 1, sugar: 0 },
      micros: {
        sodium: 2, potassium: 52, calcium: 15, iron: 1.9, magnesium: 18, zinc: 0.7, phosphorus: 65,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 150,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 68,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['aromatic', 'fast-digesting']
    },
    quinoa: {
      id: 'quinoa',
      name: 'Quinoa (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 185, unit: 'g', description: '1 cup cooked' },
      calories: 222,
      macros: { protein: 8, carbs: 39, fat: 4, fiber: 5, sugar: 2 },
      micros: {
        sodium: 13, potassium: 318, calcium: 31, iron: 2.8, magnesium: 118, zinc: 2.0, phosphorus: 281,
        vitA: 1, vitC: 0, vitD: 0, vitE: 1.2, vitK: 0, vitB6: 0.2, vitB12: 0, folate: 78,
        cholesterol: 0, saturatedFat: 0.4, transFat: 0, omega3: 0.1, omega6: 2.0
      },
      glycemicIndex: 53,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['complete-protein', 'ancient-grain', 'nutrient-dense']
    },
    oatsRolled: {
      id: 'oatsRolled',
      name: 'Rolled Oats (dry)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 40, unit: 'g', description: '1/2 cup dry' },
      calories: 152,
      macros: { protein: 5, carbs: 27, fat: 3, fiber: 4, sugar: 0 },
      micros: {
        sodium: 0, potassium: 147, calcium: 21, iron: 1.7, magnesium: 56, zinc: 1.5, phosphorus: 180,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.4, vitK: 0.8, vitB6: 0.05, vitB12: 0, folate: 13,
        cholesterol: 0, saturatedFat: 0.5, transFat: 0, omega3: 0.04, omega6: 1.0
      },
      glycemicIndex: 55,
      allergens: ['gluten'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['beta-glucan', 'heart-healthy', 'sustained-energy', 'bodybuilding-staple']
    },
    oatmealInstant: {
      id: 'oatmealInstant',
      name: 'Instant Oatmeal (plain)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 28, unit: 'g', description: '1 packet' },
      calories: 100,
      macros: { protein: 4, carbs: 19, fat: 2, fiber: 3, sugar: 0 },
      micros: {
        sodium: 75, potassium: 100, calcium: 105, iron: 6.3, magnesium: 36, zinc: 3.5, phosphorus: 125,
        vitA: 375, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.5, vitB6: 0.4, vitB12: 0, folate: 100,
        cholesterol: 0, saturatedFat: 0.4, transFat: 0, omega3: 0.03, omega6: 0.7
      },
      glycemicIndex: 66,
      allergens: ['gluten'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['fortified', 'convenient', 'fast-cooking']
    },
    wholeWheatBread: {
      id: 'wholeWheatBread',
      name: 'Whole Wheat Bread',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 56, unit: 'g', description: '2 slices' },
      calories: 138,
      macros: { protein: 7, carbs: 24, fat: 2, fiber: 4, sugar: 4 },
      micros: {
        sodium: 264, potassium: 138, calcium: 60, iron: 1.5, magnesium: 46, zinc: 1.0, phosphorus: 136,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.3, vitK: 1.5, vitB6: 0.1, vitB12: 0, folate: 28,
        cholesterol: 0, saturatedFat: 0.4, transFat: 0, omega3: 0.04, omega6: 0.8
      },
      glycemicIndex: 69,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['whole-grain', 'convenient']
    },
    ezekielBread: {
      id: 'ezekielBread',
      name: 'Ezekiel Sprouted Bread',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 68, unit: 'g', description: '2 slices' },
      calories: 160,
      macros: { protein: 10, carbs: 30, fat: 1, fiber: 6, sugar: 0 },
      micros: {
        sodium: 150, potassium: 160, calcium: 20, iron: 1.4, magnesium: 60, zinc: 1.2, phosphorus: 150,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.5, vitB6: 0.15, vitB12: 0, folate: 40,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.05, omega6: 0.3
      },
      glycemicIndex: 36,
      allergens: ['gluten', 'wheat', 'soy'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['sprouted', 'complete-protein', 'low-gi']
    },
    wholeWheatPasta: {
      id: 'wholeWheatPasta',
      name: 'Whole Wheat Pasta (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 140, unit: 'g', description: '1 cup cooked' },
      calories: 174,
      macros: { protein: 7, carbs: 37, fat: 1, fiber: 6, sugar: 1 },
      micros: {
        sodium: 4, potassium: 62, calcium: 21, iron: 1.5, magnesium: 42, zinc: 1.1, phosphorus: 125,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.3, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 7,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.02, omega6: 0.4
      },
      glycemicIndex: 42,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['whole-grain', 'fiber-rich']
    },

    // Starchy Vegetables
    sweetPotato: {
      id: 'sweetPotato',
      name: 'Sweet Potato (baked)',
      category: 'carbs',
      subcategory: 'starchy-vegetables',
      serving: { amount: 200, unit: 'g', description: '1 medium' },
      calories: 180,
      macros: { protein: 4, carbs: 41, fat: 0, fiber: 6, sugar: 13 },
      micros: {
        sodium: 72, potassium: 950, calcium: 76, iron: 1.4, magnesium: 54, zinc: 0.6, phosphorus: 108,
        vitA: 1920, vitC: 39, vitD: 0, vitE: 1.4, vitK: 4.6, vitB6: 0.6, vitB12: 0, folate: 12,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.04
      },
      glycemicIndex: 63,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-a', 'potassium-rich', 'antioxidants', 'bodybuilding-staple']
    },
    whitePotato: {
      id: 'whitePotato',
      name: 'White Potato (baked)',
      category: 'carbs',
      subcategory: 'starchy-vegetables',
      serving: { amount: 173, unit: 'g', description: '1 medium' },
      calories: 161,
      macros: { protein: 4, carbs: 37, fat: 0, fiber: 4, sugar: 2 },
      micros: {
        sodium: 17, potassium: 926, calcium: 26, iron: 1.9, magnesium: 48, zinc: 0.6, phosphorus: 121,
        vitA: 0, vitC: 17, vitD: 0, vitE: 0.1, vitK: 3.5, vitB6: 0.5, vitB12: 0, folate: 28,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.05
      },
      glycemicIndex: 85,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['potassium-rich', 'resistant-starch', 'versatile']
    },
    redPotato: {
      id: 'redPotato',
      name: 'Red Potato (boiled)',
      category: 'carbs',
      subcategory: 'starchy-vegetables',
      serving: { amount: 150, unit: 'g', description: '1 medium' },
      calories: 123,
      macros: { protein: 3, carbs: 27, fat: 0, fiber: 2, sugar: 1 },
      micros: {
        sodium: 8, potassium: 680, calcium: 18, iron: 1.0, magnesium: 34, zinc: 0.4, phosphorus: 89,
        vitA: 0, vitC: 13, vitD: 0, vitE: 0.1, vitK: 3.0, vitB6: 0.4, vitB12: 0, folate: 22,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.04
      },
      glycemicIndex: 89,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['fast-digesting', 'post-workout']
    },
    butternutSquash: {
      id: 'butternutSquash',
      name: 'Butternut Squash (roasted)',
      category: 'carbs',
      subcategory: 'starchy-vegetables',
      serving: { amount: 205, unit: 'g', description: '1 cup cubed' },
      calories: 82,
      macros: { protein: 2, carbs: 22, fat: 0, fiber: 7, sugar: 4 },
      micros: {
        sodium: 8, potassium: 582, calcium: 84, iron: 1.2, magnesium: 59, zinc: 0.3, phosphorus: 55,
        vitA: 1144, vitC: 31, vitD: 0, vitE: 2.6, vitK: 2.0, vitB6: 0.3, vitB12: 0, folate: 39,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.05, omega6: 0.05
      },
      glycemicIndex: 51,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-a', 'fiber-rich', 'low-calorie']
    },

    // Fruits
    banana: {
      id: 'banana',
      name: 'Banana',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 118, unit: 'g', description: '1 medium' },
      calories: 105,
      macros: { protein: 1, carbs: 27, fat: 0, fiber: 3, sugar: 14 },
      micros: {
        sodium: 1, potassium: 422, calcium: 6, iron: 0.3, magnesium: 32, zinc: 0.2, phosphorus: 26,
        vitA: 4, vitC: 10, vitD: 0, vitE: 0.1, vitK: 0.6, vitB6: 0.4, vitB12: 0, folate: 24,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.03, omega6: 0.05
      },
      glycemicIndex: 51,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['potassium-rich', 'pre-workout', 'natural-energy']
    },
    apple: {
      id: 'apple',
      name: 'Apple',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 182, unit: 'g', description: '1 medium' },
      calories: 95,
      macros: { protein: 0, carbs: 25, fat: 0, fiber: 4, sugar: 19 },
      micros: {
        sodium: 2, potassium: 195, calcium: 11, iron: 0.2, magnesium: 9, zinc: 0.1, phosphorus: 20,
        vitA: 5, vitC: 8, vitD: 0, vitE: 0.3, vitK: 4.0, vitB6: 0.1, vitB12: 0, folate: 5,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.07
      },
      glycemicIndex: 36,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['fiber-rich', 'antioxidants', 'portable']
    },
    blueberries: {
      id: 'blueberries',
      name: 'Blueberries',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 148, unit: 'g', description: '1 cup' },
      calories: 84,
      macros: { protein: 1, carbs: 21, fat: 0, fiber: 4, sugar: 15 },
      micros: {
        sodium: 1, potassium: 114, calcium: 9, iron: 0.4, magnesium: 9, zinc: 0.2, phosphorus: 18,
        vitA: 4, vitC: 14, vitD: 0, vitE: 0.8, vitK: 28.6, vitB6: 0.1, vitB12: 0, folate: 9,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.09, omega6: 0.1
      },
      glycemicIndex: 53,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['antioxidants', 'brain-health', 'anti-inflammatory']
    },
    strawberries: {
      id: 'strawberries',
      name: 'Strawberries',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 152, unit: 'g', description: '1 cup halves' },
      calories: 49,
      macros: { protein: 1, carbs: 12, fat: 0, fiber: 3, sugar: 7 },
      micros: {
        sodium: 2, potassium: 233, calcium: 24, iron: 0.6, magnesium: 20, zinc: 0.2, phosphorus: 37,
        vitA: 2, vitC: 89, vitD: 0, vitE: 0.4, vitK: 3.3, vitB6: 0.1, vitB12: 0, folate: 36,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.1, omega6: 0.1
      },
      glycemicIndex: 41,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-c', 'low-calorie', 'antioxidants']
    },
    orange: {
      id: 'orange',
      name: 'Orange',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 131, unit: 'g', description: '1 medium' },
      calories: 62,
      macros: { protein: 1, carbs: 15, fat: 0, fiber: 3, sugar: 12 },
      micros: {
        sodium: 0, potassium: 237, calcium: 52, iron: 0.1, magnesium: 13, zinc: 0.1, phosphorus: 18,
        vitA: 14, vitC: 70, vitD: 0, vitE: 0.2, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 39,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.02
      },
      glycemicIndex: 43,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-c', 'immune-support', 'refreshing']
    },
    mango: {
      id: 'mango',
      name: 'Mango',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 165, unit: 'g', description: '1 cup sliced' },
      calories: 99,
      macros: { protein: 1, carbs: 25, fat: 1, fiber: 3, sugar: 23 },
      micros: {
        sodium: 2, potassium: 277, calcium: 18, iron: 0.3, magnesium: 15, zinc: 0.1, phosphorus: 23,
        vitA: 89, vitC: 60, vitD: 0, vitE: 1.5, vitK: 6.9, vitB6: 0.2, vitB12: 0, folate: 71,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.05, omega6: 0.02
      },
      glycemicIndex: 51,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-a', 'tropical', 'natural-energy']
    },
    grapes: {
      id: 'grapes',
      name: 'Grapes (red/green)',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 151, unit: 'g', description: '1 cup' },
      calories: 104,
      macros: { protein: 1, carbs: 27, fat: 0, fiber: 1, sugar: 23 },
      micros: {
        sodium: 3, potassium: 288, calcium: 15, iron: 0.5, magnesium: 11, zinc: 0.1, phosphorus: 30,
        vitA: 5, vitC: 5, vitD: 0, vitE: 0.3, vitK: 22.0, vitB6: 0.1, vitB12: 0, folate: 3,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.02, omega6: 0.06
      },
      glycemicIndex: 53,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['resveratrol', 'portable', 'natural-sugars']
    },
    dates: {
      id: 'dates',
      name: 'Medjool Dates',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 48, unit: 'g', description: '2 dates' },
      calories: 133,
      macros: { protein: 1, carbs: 36, fat: 0, fiber: 3, sugar: 32 },
      micros: {
        sodium: 0, potassium: 334, calcium: 31, iron: 0.4, magnesium: 26, zinc: 0.2, phosphorus: 30,
        vitA: 4, vitC: 0, vitD: 0, vitE: 0, vitK: 1.3, vitB6: 0.1, vitB12: 0, folate: 8,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0.01
      },
      glycemicIndex: 42,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['natural-sweetener', 'pre-workout', 'potassium-rich']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE GRAINS - International & Ancient Grains
    // ═══════════════════════════════════════════════════════════════════════════
    farro: {
      id: 'farro',
      name: 'Farro (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 170, unit: 'g', description: '1 cup cooked' },
      calories: 220,
      macros: { protein: 8, carbs: 44, fat: 2, fiber: 6, sugar: 0 },
      micros: {
        sodium: 5, potassium: 180, calcium: 20, iron: 2.5, magnesium: 60, zinc: 2.0, phosphorus: 200,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.5, vitB6: 0.2, vitB12: 0, folate: 25,
        cholesterol: 0, saturatedFat: 0.3, transFat: 0, omega3: 0.03, omega6: 0.6
      },
      glycemicIndex: 40,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'mediterranean'],
      tags: ['ancient-grain', 'nutty-flavor', 'chewy-texture', 'italian']
    },
    bulgur: {
      id: 'bulgur',
      name: 'Bulgur Wheat (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 182, unit: 'g', description: '1 cup cooked' },
      calories: 151,
      macros: { protein: 6, carbs: 34, fat: 0, fiber: 8, sugar: 0 },
      micros: {
        sodium: 9, potassium: 124, calcium: 18, iron: 1.7, magnesium: 58, zinc: 1.0, phosphorus: 73,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.5, vitB6: 0.2, vitB12: 0, folate: 33,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.02, omega6: 0.2
      },
      glycemicIndex: 48,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'mediterranean'],
      tags: ['middle-eastern', 'quick-cooking', 'tabbouleh', 'fiber-rich']
    },
    couscous: {
      id: 'couscous',
      name: 'Couscous (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 157, unit: 'g', description: '1 cup cooked' },
      calories: 176,
      macros: { protein: 6, carbs: 36, fat: 0, fiber: 2, sugar: 0 },
      micros: {
        sodium: 8, potassium: 91, calcium: 13, iron: 0.6, magnesium: 13, zinc: 0.5, phosphorus: 35,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 24,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 65,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'mediterranean'],
      tags: ['moroccan', 'quick-cooking', 'fluffy', 'versatile']
    },
    barley: {
      id: 'barley',
      name: 'Pearl Barley (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 157, unit: 'g', description: '1 cup cooked' },
      calories: 193,
      macros: { protein: 4, carbs: 44, fat: 1, fiber: 6, sugar: 0 },
      micros: {
        sodium: 5, potassium: 146, calcium: 17, iron: 2.1, magnesium: 35, zinc: 1.3, phosphorus: 85,
        vitA: 1, vitC: 0, vitD: 0, vitE: 0.1, vitK: 1.0, vitB6: 0.2, vitB12: 0, folate: 25,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.02, omega6: 0.3
      },
      glycemicIndex: 28,
      allergens: ['gluten'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['beta-glucan', 'soup-grain', 'chewy', 'heart-healthy']
    },
    millet: {
      id: 'millet',
      name: 'Millet (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 174, unit: 'g', description: '1 cup cooked' },
      calories: 207,
      macros: { protein: 6, carbs: 41, fat: 2, fiber: 2, sugar: 0 },
      micros: {
        sodium: 3, potassium: 108, calcium: 5, iron: 1.1, magnesium: 77, zinc: 1.6, phosphorus: 174,
        vitA: 1, vitC: 0, vitD: 0, vitE: 0, vitK: 0.5, vitB6: 0.2, vitB12: 0, folate: 33,
        cholesterol: 0, saturatedFat: 0.3, transFat: 0, omega3: 0.03, omega6: 0.9
      },
      glycemicIndex: 71,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['gluten-free-grain', 'alkaline', 'african', 'mild-flavor']
    },
    buckwheat: {
      id: 'buckwheat',
      name: 'Buckwheat Groats (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 168, unit: 'g', description: '1 cup cooked' },
      calories: 155,
      macros: { protein: 6, carbs: 34, fat: 1, fiber: 5, sugar: 2 },
      micros: {
        sodium: 7, potassium: 148, calcium: 12, iron: 1.3, magnesium: 86, zinc: 1.0, phosphorus: 118,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 2.0, vitB6: 0.1, vitB12: 0, folate: 24,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.04, omega6: 0.4
      },
      glycemicIndex: 54,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['complete-protein', 'rutin', 'eastern-european', 'soba-noodles']
    },
    amaranth: {
      id: 'amaranth',
      name: 'Amaranth (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 246, unit: 'g', description: '1 cup cooked' },
      calories: 251,
      macros: { protein: 9, carbs: 46, fat: 4, fiber: 5, sugar: 0 },
      micros: {
        sodium: 15, potassium: 332, calcium: 116, iron: 5.2, magnesium: 160, zinc: 2.1, phosphorus: 364,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0, vitB6: 0.2, vitB12: 0, folate: 54,
        cholesterol: 0, saturatedFat: 0.9, transFat: 0, omega3: 0.05, omega6: 1.8
      },
      glycemicIndex: 35,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['ancient-grain', 'complete-protein', 'iron-rich', 'aztec']
    },
    wildRice: {
      id: 'wildRice',
      name: 'Wild Rice (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 164, unit: 'g', description: '1 cup cooked' },
      calories: 166,
      macros: { protein: 7, carbs: 35, fat: 1, fiber: 3, sugar: 1 },
      micros: {
        sodium: 5, potassium: 166, calcium: 5, iron: 1.0, magnesium: 52, zinc: 2.2, phosphorus: 134,
        vitA: 2, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.5, vitB6: 0.2, vitB12: 0, folate: 43,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.2, omega6: 0.3
      },
      glycemicIndex: 45,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['nutty-flavor', 'north-american', 'nutrient-dense', 'premium']
    },
    basmatiRice: {
      id: 'basmatiRice',
      name: 'Basmati Rice (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 158, unit: 'g', description: '1 cup cooked' },
      calories: 205,
      macros: { protein: 4, carbs: 45, fat: 0, fiber: 1, sugar: 0 },
      micros: {
        sodium: 1, potassium: 55, calcium: 16, iron: 2.0, magnesium: 19, zinc: 0.8, phosphorus: 68,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 153,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 58,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['aromatic', 'indian', 'fluffy', 'long-grain']
    },
    polenta: {
      id: 'polenta',
      name: 'Polenta (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 170, unit: 'g', description: '1 cup cooked' },
      calories: 145,
      macros: { protein: 4, carbs: 31, fat: 1, fiber: 2, sugar: 0 },
      micros: {
        sodium: 420, potassium: 50, calcium: 5, iron: 2.3, magnesium: 20, zinc: 0.5, phosphorus: 50,
        vitA: 180, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.5, vitB6: 0.1, vitB12: 0, folate: 85,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.02, omega6: 0.3
      },
      glycemicIndex: 68,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['italian', 'cornmeal', 'creamy', 'versatile']
    },
    spelt: {
      id: 'spelt',
      name: 'Spelt (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 194, unit: 'g', description: '1 cup cooked' },
      calories: 246,
      macros: { protein: 11, carbs: 51, fat: 2, fiber: 8, sugar: 0 },
      micros: {
        sodium: 10, potassium: 277, calcium: 19, iron: 3.2, magnesium: 95, zinc: 2.4, phosphorus: 291,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 1.0, vitB6: 0.2, vitB12: 0, folate: 25,
        cholesterol: 0, saturatedFat: 0.3, transFat: 0, omega3: 0.03, omega6: 0.9
      },
      glycemicIndex: 45,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['ancient-grain', 'high-protein', 'nutty', 'european']
    },
    teff: {
      id: 'teff',
      name: 'Teff (cooked)',
      category: 'carbs',
      subcategory: 'grains',
      serving: { amount: 252, unit: 'g', description: '1 cup cooked' },
      calories: 255,
      macros: { protein: 10, carbs: 50, fat: 2, fiber: 7, sugar: 2 },
      micros: {
        sodium: 15, potassium: 427, calcium: 123, iron: 5.2, magnesium: 126, zinc: 3.6, phosphorus: 302,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 1.0, vitB6: 0.3, vitB12: 0, folate: 20,
        cholesterol: 0, saturatedFat: 0.4, transFat: 0, omega3: 0.06, omega6: 1.0
      },
      glycemicIndex: 57,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['ethiopian', 'injera', 'calcium-rich', 'iron-rich', 'tiny-grain']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE BREADS - International Varieties
    // ═══════════════════════════════════════════════════════════════════════════
    sourdough: {
      id: 'sourdough',
      name: 'Sourdough Bread',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 64, unit: 'g', description: '2 slices' },
      calories: 170,
      macros: { protein: 7, carbs: 33, fat: 1, fiber: 2, sugar: 1 },
      micros: {
        sodium: 320, potassium: 75, calcium: 25, iron: 2.0, magnesium: 18, zinc: 0.7, phosphorus: 68,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 1.0, vitB6: 0.1, vitB12: 0, folate: 50,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.02, omega6: 0.4
      },
      glycemicIndex: 54,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['fermented', 'easier-digestion', 'lower-gi', 'artisan']
    },
    ciabatta: {
      id: 'ciabatta',
      name: 'Ciabatta Bread',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 70, unit: 'g', description: '1 roll' },
      calories: 190,
      macros: { protein: 7, carbs: 36, fat: 2, fiber: 2, sugar: 1 },
      micros: {
        sodium: 380, potassium: 65, calcium: 20, iron: 2.2, magnesium: 15, zinc: 0.6, phosphorus: 60,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.5, vitB6: 0.1, vitB12: 0, folate: 55,
        cholesterol: 0, saturatedFat: 0.3, transFat: 0, omega3: 0.02, omega6: 0.5
      },
      glycemicIndex: 75,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['italian', 'crusty', 'airy', 'sandwich-bread']
    },
    pitaBread: {
      id: 'pitaBread',
      name: 'Pita Bread (whole wheat)',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 64, unit: 'g', description: '1 large pita' },
      calories: 170,
      macros: { protein: 6, carbs: 35, fat: 1, fiber: 5, sugar: 1 },
      micros: {
        sodium: 340, potassium: 110, calcium: 10, iron: 1.9, magnesium: 44, zinc: 1.0, phosphorus: 115,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 1.2, vitB6: 0.2, vitB12: 0, folate: 28,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.02, omega6: 0.4
      },
      glycemicIndex: 57,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['middle-eastern', 'pocket-bread', 'wrap-friendly', 'versatile']
    },
    naan: {
      id: 'naan',
      name: 'Naan Bread',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 90, unit: 'g', description: '1 piece' },
      calories: 262,
      macros: { protein: 9, carbs: 45, fat: 5, fiber: 2, sugar: 3 },
      micros: {
        sodium: 418, potassium: 112, calcium: 90, iron: 2.8, magnesium: 25, zinc: 0.8, phosphorus: 95,
        vitA: 10, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.5, vitB6: 0.1, vitB12: 0.1, folate: 85,
        cholesterol: 10, saturatedFat: 1.5, transFat: 0, omega3: 0.02, omega6: 0.8
      },
      glycemicIndex: 71,
      allergens: ['gluten', 'wheat', 'dairy'],
      dietTypes: ['regular', 'vegetarian'],
      tags: ['indian', 'soft', 'buttery', 'tandoor-baked']
    },
    bagel: {
      id: 'bagel',
      name: 'Plain Bagel',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 98, unit: 'g', description: '1 medium bagel' },
      calories: 270,
      macros: { protein: 10, carbs: 53, fat: 2, fiber: 2, sugar: 6 },
      micros: {
        sodium: 430, potassium: 90, calcium: 20, iron: 3.2, magnesium: 25, zinc: 0.9, phosphorus: 70,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.5, vitB6: 0.1, vitB12: 0, folate: 100,
        cholesterol: 0, saturatedFat: 0.3, transFat: 0, omega3: 0.02, omega6: 0.7
      },
      glycemicIndex: 72,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['dense', 'chewy', 'breakfast', 'new-york-style']
    },
    englishMuffin: {
      id: 'englishMuffin',
      name: 'English Muffin (whole wheat)',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 66, unit: 'g', description: '1 muffin' },
      calories: 140,
      macros: { protein: 6, carbs: 27, fat: 1, fiber: 4, sugar: 2 },
      micros: {
        sodium: 240, potassium: 175, calcium: 175, iron: 1.6, magnesium: 45, zinc: 1.0, phosphorus: 145,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 1.0, vitB6: 0.1, vitB12: 0, folate: 30,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.02, omega6: 0.4
      },
      glycemicIndex: 57,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['nooks-and-crannies', 'breakfast', 'toastable', 'egg-sandwich']
    },
    flourTortilla: {
      id: 'flourTortilla',
      name: 'Flour Tortilla (8 inch)',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 49, unit: 'g', description: '1 tortilla' },
      calories: 140,
      macros: { protein: 4, carbs: 24, fat: 3, fiber: 1, sugar: 1 },
      micros: {
        sodium: 330, potassium: 50, calcium: 50, iron: 1.5, magnesium: 10, zinc: 0.3, phosphorus: 45,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.5, vitB6: 0.05, vitB12: 0, folate: 35,
        cholesterol: 0, saturatedFat: 0.8, transFat: 0.5, omega3: 0.01, omega6: 0.8
      },
      glycemicIndex: 30,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['mexican', 'wraps', 'burritos', 'flexible']
    },
    cornTortilla: {
      id: 'cornTortilla',
      name: 'Corn Tortilla (6 inch)',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 52, unit: 'g', description: '2 tortillas' },
      calories: 110,
      macros: { protein: 3, carbs: 23, fat: 1, fiber: 3, sugar: 0 },
      micros: {
        sodium: 25, potassium: 80, calcium: 50, iron: 0.6, magnesium: 25, zinc: 0.4, phosphorus: 90,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.3, vitB6: 0.1, vitB12: 0, folate: 20,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.01, omega6: 0.5
      },
      glycemicIndex: 52,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['mexican', 'tacos', 'gluten-free', 'authentic']
    },
    ryeBread: {
      id: 'ryeBread',
      name: 'Rye Bread',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 64, unit: 'g', description: '2 slices' },
      calories: 166,
      macros: { protein: 5, carbs: 31, fat: 2, fiber: 4, sugar: 2 },
      micros: {
        sodium: 422, potassium: 135, calcium: 26, iron: 1.8, magnesium: 30, zinc: 0.9, phosphorus: 85,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 1.0, vitB6: 0.1, vitB12: 0, folate: 35,
        cholesterol: 0, saturatedFat: 0.4, transFat: 0, omega3: 0.03, omega6: 0.6
      },
      glycemicIndex: 65,
      allergens: ['gluten'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['german', 'pumpernickel', 'deli-style', 'earthy']
    },
    focaccia: {
      id: 'focaccia',
      name: 'Focaccia Bread',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 70, unit: 'g', description: '1 piece' },
      calories: 210,
      macros: { protein: 5, carbs: 28, fat: 9, fiber: 1, sugar: 1 },
      micros: {
        sodium: 450, potassium: 55, calcium: 15, iron: 1.6, magnesium: 12, zinc: 0.5, phosphorus: 50,
        vitA: 0, vitC: 0, vitD: 0, vitE: 1.0, vitK: 3.0, vitB6: 0.05, vitB12: 0, folate: 45,
        cholesterol: 0, saturatedFat: 1.3, transFat: 0, omega3: 0.1, omega6: 1.0
      },
      glycemicIndex: 63,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['italian', 'olive-oil', 'herbed', 'dimpled']
    },
    baguette: {
      id: 'baguette',
      name: 'French Baguette',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 64, unit: 'g', description: '2 inch piece' },
      calories: 180,
      macros: { protein: 6, carbs: 36, fat: 1, fiber: 2, sugar: 1 },
      micros: {
        sodium: 400, potassium: 60, calcium: 20, iron: 2.2, magnesium: 15, zinc: 0.5, phosphorus: 55,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.5, vitB6: 0.05, vitB12: 0, folate: 60,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.01, omega6: 0.3
      },
      glycemicIndex: 95,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['french', 'crusty', 'soft-interior', 'classic']
    },
    brioche: {
      id: 'brioche',
      name: 'Brioche Bread',
      category: 'carbs',
      subcategory: 'breads',
      serving: { amount: 50, unit: 'g', description: '1 roll' },
      calories: 175,
      macros: { protein: 5, carbs: 24, fat: 7, fiber: 1, sugar: 4 },
      micros: {
        sodium: 220, potassium: 60, calcium: 35, iron: 1.5, magnesium: 10, zinc: 0.4, phosphorus: 55,
        vitA: 70, vitC: 0, vitD: 0.3, vitE: 0.3, vitK: 0.5, vitB6: 0.05, vitB12: 0.2, folate: 40,
        cholesterol: 65, saturatedFat: 3.5, transFat: 0, omega3: 0.05, omega6: 0.8
      },
      glycemicIndex: 68,
      allergens: ['gluten', 'wheat', 'dairy', 'eggs'],
      dietTypes: ['regular', 'vegetarian'],
      tags: ['french', 'buttery', 'rich', 'breakfast-bread']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE CEREALS - Breakfast Options
    // ═══════════════════════════════════════════════════════════════════════════
    creamOfWheat: {
      id: 'creamOfWheat',
      name: 'Cream of Wheat (cooked)',
      category: 'carbs',
      subcategory: 'cereals',
      serving: { amount: 251, unit: 'g', description: '1 cup cooked' },
      calories: 133,
      macros: { protein: 4, carbs: 28, fat: 0, fiber: 1, sugar: 0 },
      micros: {
        sodium: 5, potassium: 43, calcium: 154, iron: 9.0, magnesium: 12, zinc: 0.3, phosphorus: 43,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.3, vitB6: 0.05, vitB12: 0, folate: 90,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 66,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['hot-cereal', 'iron-fortified', 'smooth', 'breakfast']
    },
    grits: {
      id: 'grits',
      name: 'Grits (cooked)',
      category: 'carbs',
      subcategory: 'cereals',
      serving: { amount: 242, unit: 'g', description: '1 cup cooked' },
      calories: 143,
      macros: { protein: 3, carbs: 31, fat: 1, fiber: 1, sugar: 0 },
      micros: {
        sodium: 5, potassium: 51, calcium: 2, iron: 1.5, magnesium: 12, zinc: 0.2, phosphorus: 29,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.2, vitB6: 0.1, vitB12: 0, folate: 80,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.3
      },
      glycemicIndex: 69,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['southern', 'corn-based', 'breakfast', 'savory']
    },
    granola: {
      id: 'granola',
      name: 'Granola (with nuts)',
      category: 'carbs',
      subcategory: 'cereals',
      serving: { amount: 61, unit: 'g', description: '2/3 cup' },
      calories: 300,
      macros: { protein: 8, carbs: 40, fat: 13, fiber: 5, sugar: 14 },
      micros: {
        sodium: 80, potassium: 250, calcium: 45, iron: 2.5, magnesium: 75, zinc: 1.5, phosphorus: 180,
        vitA: 0, vitC: 0, vitD: 0, vitE: 3.0, vitK: 1.0, vitB6: 0.2, vitB12: 0, folate: 30,
        cholesterol: 0, saturatedFat: 2.0, transFat: 0, omega3: 0.3, omega6: 3.5
      },
      glycemicIndex: 55,
      allergens: ['gluten', 'tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['crunchy', 'topping', 'calorie-dense', 'portable']
    },
    branFlakes: {
      id: 'branFlakes',
      name: 'Bran Flakes Cereal',
      category: 'carbs',
      subcategory: 'cereals',
      serving: { amount: 39, unit: 'g', description: '1 cup' },
      calories: 130,
      macros: { protein: 4, carbs: 31, fat: 1, fiber: 7, sugar: 6 },
      micros: {
        sodium: 270, potassium: 260, calcium: 20, iron: 12.0, magnesium: 80, zinc: 5.0, phosphorus: 190,
        vitA: 250, vitC: 0, vitD: 1.0, vitE: 0.5, vitK: 1.0, vitB6: 0.7, vitB12: 2.0, folate: 170,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.1, omega6: 0.5
      },
      glycemicIndex: 74,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['high-fiber', 'fortified', 'digestive-health', 'breakfast']
    },
    shreddedWheat: {
      id: 'shreddedWheat',
      name: 'Shredded Wheat (plain)',
      category: 'carbs',
      subcategory: 'cereals',
      serving: { amount: 49, unit: 'g', description: '2 biscuits' },
      calories: 160,
      macros: { protein: 5, carbs: 37, fat: 1, fiber: 6, sugar: 0 },
      micros: {
        sodium: 0, potassium: 190, calcium: 20, iron: 1.5, magnesium: 55, zinc: 1.2, phosphorus: 140,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.3, vitK: 0.5, vitB6: 0.15, vitB12: 0, folate: 20,
        cholesterol: 0, saturatedFat: 0.2, transFat: 0, omega3: 0.03, omega6: 0.5
      },
      glycemicIndex: 75,
      allergens: ['gluten', 'wheat'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['whole-grain', 'no-added-sugar', 'simple', 'classic']
    },
    muesli: {
      id: 'muesli',
      name: 'Muesli (unsweetened)',
      category: 'carbs',
      subcategory: 'cereals',
      serving: { amount: 55, unit: 'g', description: '1/2 cup dry' },
      calories: 200,
      macros: { protein: 6, carbs: 38, fat: 4, fiber: 4, sugar: 8 },
      micros: {
        sodium: 15, potassium: 250, calcium: 35, iron: 2.0, magnesium: 55, zinc: 1.5, phosphorus: 165,
        vitA: 0, vitC: 1, vitD: 0, vitE: 0.8, vitK: 1.0, vitB6: 0.2, vitB12: 0, folate: 25,
        cholesterol: 0, saturatedFat: 0.8, transFat: 0, omega3: 0.1, omega6: 1.5
      },
      glycemicIndex: 56,
      allergens: ['gluten', 'tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['swiss', 'oat-based', 'dried-fruit', 'overnight-oats']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE FRUITS - Tropical, Stone, Berries
    // ═══════════════════════════════════════════════════════════════════════════
    pineapple: {
      id: 'pineapple',
      name: 'Pineapple (fresh)',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 165, unit: 'g', description: '1 cup chunks' },
      calories: 83,
      macros: { protein: 1, carbs: 22, fat: 0, fiber: 2, sugar: 16 },
      micros: {
        sodium: 2, potassium: 180, calcium: 21, iron: 0.5, magnesium: 20, zinc: 0.2, phosphorus: 13,
        vitA: 5, vitC: 79, vitD: 0, vitE: 0, vitK: 1.2, vitB6: 0.2, vitB12: 0, folate: 30,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.05
      },
      glycemicIndex: 59,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['tropical', 'bromelain', 'vitamin-c', 'digestive-aid']
    },
    watermelon: {
      id: 'watermelon',
      name: 'Watermelon',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 280, unit: 'g', description: '2 cups diced' },
      calories: 84,
      macros: { protein: 2, carbs: 21, fat: 0, fiber: 1, sugar: 18 },
      micros: {
        sodium: 3, potassium: 314, calcium: 20, iron: 0.7, magnesium: 28, zinc: 0.3, phosphorus: 31,
        vitA: 80, vitC: 23, vitD: 0, vitE: 0.1, vitK: 0.3, vitB6: 0.1, vitB12: 0, folate: 8,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.1
      },
      glycemicIndex: 76,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['hydrating', 'summer', 'lycopene', 'low-calorie']
    },
    honeydew: {
      id: 'honeydew',
      name: 'Honeydew Melon',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 177, unit: 'g', description: '1 cup diced' },
      calories: 64,
      macros: { protein: 1, carbs: 16, fat: 0, fiber: 1, sugar: 14 },
      micros: {
        sodium: 32, potassium: 404, calcium: 11, iron: 0.3, magnesium: 18, zinc: 0.2, phosphorus: 18,
        vitA: 3, vitC: 32, vitD: 0, vitE: 0, vitK: 5.3, vitB6: 0.2, vitB12: 0, folate: 34,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.04
      },
      glycemicIndex: 62,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['hydrating', 'mild-flavor', 'potassium-rich', 'summer']
    },
    cantaloupe: {
      id: 'cantaloupe',
      name: 'Cantaloupe',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 177, unit: 'g', description: '1 cup diced' },
      calories: 60,
      macros: { protein: 1, carbs: 14, fat: 0, fiber: 2, sugar: 14 },
      micros: {
        sodium: 28, potassium: 473, calcium: 16, iron: 0.4, magnesium: 21, zinc: 0.3, phosphorus: 27,
        vitA: 299, vitC: 65, vitD: 0, vitE: 0.1, vitK: 4.4, vitB6: 0.1, vitB12: 0, folate: 37,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.05
      },
      glycemicIndex: 65,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-a', 'vitamin-c', 'beta-carotene', 'summer']
    },
    kiwi: {
      id: 'kiwi',
      name: 'Kiwi Fruit',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 148, unit: 'g', description: '2 medium' },
      calories: 90,
      macros: { protein: 2, carbs: 22, fat: 1, fiber: 4, sugar: 13 },
      micros: {
        sodium: 5, potassium: 460, calcium: 50, iron: 0.5, magnesium: 25, zinc: 0.2, phosphorus: 51,
        vitA: 6, vitC: 137, vitD: 0, vitE: 2.2, vitK: 60, vitB6: 0.1, vitB12: 0, folate: 37,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.06, omega6: 0.2
      },
      glycemicIndex: 50,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-c-powerhouse', 'vitamin-k', 'digestive-enzymes', 'tangy']
    },
    peach: {
      id: 'peach',
      name: 'Peach',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 150, unit: 'g', description: '1 medium' },
      calories: 59,
      macros: { protein: 1, carbs: 14, fat: 0, fiber: 2, sugar: 13 },
      micros: {
        sodium: 0, potassium: 285, calcium: 9, iron: 0.4, magnesium: 14, zinc: 0.3, phosphorus: 30,
        vitA: 24, vitC: 10, vitD: 0, vitE: 1.1, vitK: 3.9, vitB6: 0.04, vitB12: 0, folate: 6,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 42,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['stone-fruit', 'summer', 'juicy', 'antioxidants']
    },
    nectarine: {
      id: 'nectarine',
      name: 'Nectarine',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 142, unit: 'g', description: '1 medium' },
      calories: 63,
      macros: { protein: 2, carbs: 15, fat: 0, fiber: 2, sugar: 11 },
      micros: {
        sodium: 0, potassium: 287, calcium: 9, iron: 0.4, magnesium: 13, zinc: 0.2, phosphorus: 37,
        vitA: 24, vitC: 8, vitD: 0, vitE: 1.1, vitK: 3.1, vitB6: 0.04, vitB12: 0, folate: 7,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 43,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['stone-fruit', 'smooth-skin', 'summer', 'snack']
    },
    plum: {
      id: 'plum',
      name: 'Plum',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 132, unit: 'g', description: '2 small' },
      calories: 61,
      macros: { protein: 1, carbs: 15, fat: 0, fiber: 2, sugar: 13 },
      micros: {
        sodium: 0, potassium: 211, calcium: 8, iron: 0.2, magnesium: 9, zinc: 0.1, phosphorus: 21,
        vitA: 23, vitC: 13, vitD: 0, vitE: 0.3, vitK: 8.6, vitB6: 0.04, vitB12: 0, folate: 7,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.06
      },
      glycemicIndex: 39,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['stone-fruit', 'antioxidants', 'portable', 'digestive']
    },
    pear: {
      id: 'pear',
      name: 'Pear',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 178, unit: 'g', description: '1 medium' },
      calories: 102,
      macros: { protein: 1, carbs: 27, fat: 0, fiber: 6, sugar: 17 },
      micros: {
        sodium: 2, potassium: 206, calcium: 16, iron: 0.3, magnesium: 13, zinc: 0.2, phosphorus: 20,
        vitA: 2, vitC: 8, vitD: 0, vitE: 0.2, vitK: 7.8, vitB6: 0.05, vitB12: 0, folate: 13,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.05
      },
      glycemicIndex: 38,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['fiber-rich', 'gentle-digestion', 'hypoallergenic', 'versatile']
    },
    cherries: {
      id: 'cherries',
      name: 'Sweet Cherries',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 138, unit: 'g', description: '1 cup' },
      calories: 87,
      macros: { protein: 1, carbs: 22, fat: 0, fiber: 3, sugar: 18 },
      micros: {
        sodium: 0, potassium: 306, calcium: 18, iron: 0.5, magnesium: 15, zinc: 0.1, phosphorus: 29,
        vitA: 9, vitC: 10, vitD: 0, vitE: 0.1, vitK: 2.9, vitB6: 0.1, vitB12: 0, folate: 6,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.05
      },
      glycemicIndex: 22,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['melatonin', 'recovery', 'anti-inflammatory', 'antioxidants']
    },
    raspberries: {
      id: 'raspberries',
      name: 'Raspberries',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 123, unit: 'g', description: '1 cup' },
      calories: 64,
      macros: { protein: 1, carbs: 15, fat: 1, fiber: 8, sugar: 5 },
      micros: {
        sodium: 1, potassium: 186, calcium: 31, iron: 0.8, magnesium: 27, zinc: 0.5, phosphorus: 36,
        vitA: 2, vitC: 32, vitD: 0, vitE: 1.1, vitK: 9.6, vitB6: 0.1, vitB12: 0, folate: 26,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.2, omega6: 0.2
      },
      glycemicIndex: 32,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['fiber-powerhouse', 'low-sugar', 'antioxidants', 'keto-friendly']
    },
    blackberries: {
      id: 'blackberries',
      name: 'Blackberries',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 144, unit: 'g', description: '1 cup' },
      calories: 62,
      macros: { protein: 2, carbs: 14, fat: 1, fiber: 8, sugar: 7 },
      micros: {
        sodium: 1, potassium: 233, calcium: 42, iron: 0.9, magnesium: 29, zinc: 0.8, phosphorus: 32,
        vitA: 16, vitC: 30, vitD: 0, vitE: 1.7, vitK: 29, vitB6: 0.04, vitB12: 0, folate: 36,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.1, omega6: 0.3
      },
      glycemicIndex: 25,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['vitamin-k', 'fiber-rich', 'low-sugar', 'antioxidants']
    },
    papaya: {
      id: 'papaya',
      name: 'Papaya',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 145, unit: 'g', description: '1 cup cubed' },
      calories: 62,
      macros: { protein: 1, carbs: 16, fat: 0, fiber: 3, sugar: 11 },
      micros: {
        sodium: 12, potassium: 360, calcium: 29, iron: 0.4, magnesium: 30, zinc: 0.1, phosphorus: 7,
        vitA: 78, vitC: 88, vitD: 0, vitE: 1.0, vitK: 3.7, vitB6: 0.05, vitB12: 0, folate: 53,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.02
      },
      glycemicIndex: 56,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['papain', 'digestive-enzyme', 'tropical', 'vitamin-c']
    },
    pomegranate: {
      id: 'pomegranate',
      name: 'Pomegranate Seeds',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 87, unit: 'g', description: '1/2 cup arils' },
      calories: 72,
      macros: { protein: 1, carbs: 16, fat: 1, fiber: 4, sugar: 12 },
      micros: {
        sodium: 3, potassium: 205, calcium: 9, iron: 0.3, magnesium: 10, zinc: 0.3, phosphorus: 31,
        vitA: 0, vitC: 9, vitD: 0, vitE: 0.5, vitK: 14.3, vitB6: 0.1, vitB12: 0, folate: 33,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.1, omega6: 0.1
      },
      glycemicIndex: 53,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['antioxidants', 'polyphenols', 'heart-healthy', 'superfood']
    },
    grapefruit: {
      id: 'grapefruit',
      name: 'Grapefruit (pink/red)',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 230, unit: 'g', description: '1/2 large' },
      calories: 74,
      macros: { protein: 1, carbs: 19, fat: 0, fiber: 3, sugar: 15 },
      micros: {
        sodium: 0, potassium: 320, calcium: 25, iron: 0.2, magnesium: 21, zinc: 0.2, phosphorus: 18,
        vitA: 106, vitC: 72, vitD: 0, vitE: 0.3, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 23,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.05
      },
      glycemicIndex: 25,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['low-gi', 'vitamin-c', 'metabolism', 'tangy']
    },
    tangerine: {
      id: 'tangerine',
      name: 'Tangerine',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 168, unit: 'g', description: '2 medium' },
      calories: 89,
      macros: { protein: 1, carbs: 22, fat: 1, fiber: 3, sugar: 18 },
      micros: {
        sodium: 3, potassium: 277, calcium: 62, iron: 0.3, magnesium: 20, zinc: 0.1, phosphorus: 34,
        vitA: 76, vitC: 44, vitD: 0, vitE: 0.3, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 27,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.06
      },
      glycemicIndex: 42,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['portable', 'vitamin-c', 'easy-peel', 'citrus']
    },
    apricot: {
      id: 'apricot',
      name: 'Apricot (fresh)',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 105, unit: 'g', description: '3 small' },
      calories: 51,
      macros: { protein: 1, carbs: 12, fat: 0, fiber: 2, sugar: 10 },
      micros: {
        sodium: 1, potassium: 271, calcium: 14, iron: 0.4, magnesium: 11, zinc: 0.2, phosphorus: 24,
        vitA: 100, vitC: 10, vitD: 0, vitE: 0.9, vitK: 3.5, vitB6: 0.1, vitB12: 0, folate: 9,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.03
      },
      glycemicIndex: 34,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-a', 'beta-carotene', 'stone-fruit', 'eye-health']
    },
    passionfruit: {
      id: 'passionfruit',
      name: 'Passion Fruit',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 126, unit: 'g', description: '6 fruits' },
      calories: 122,
      macros: { protein: 3, carbs: 29, fat: 1, fiber: 13, sugar: 14 },
      micros: {
        sodium: 35, potassium: 535, calcium: 15, iron: 2.0, magnesium: 37, zinc: 0.1, phosphorus: 85,
        vitA: 79, vitC: 37, vitD: 0, vitE: 0, vitK: 0.9, vitB6: 0.1, vitB12: 0, folate: 17,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.3
      },
      glycemicIndex: 30,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['tropical', 'fiber-powerhouse', 'aromatic', 'exotic']
    },
    dragonFruit: {
      id: 'dragonFruit',
      name: 'Dragon Fruit (pitaya)',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 227, unit: 'g', description: '1 fruit' },
      calories: 136,
      macros: { protein: 3, carbs: 29, fat: 0, fiber: 7, sugar: 18 },
      micros: {
        sodium: 0, potassium: 436, calcium: 36, iron: 0.9, magnesium: 68, zinc: 0.3, phosphorus: 59,
        vitA: 0, vitC: 9, vitD: 0, vitE: 0, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.1
      },
      glycemicIndex: 48,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['exotic', 'prebiotic', 'instagram-worthy', 'magnesium-rich']
    },
    lychee: {
      id: 'lychee',
      name: 'Lychee',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 100, unit: 'g', description: '10 fruits' },
      calories: 66,
      macros: { protein: 1, carbs: 17, fat: 0, fiber: 1, sugar: 15 },
      micros: {
        sodium: 1, potassium: 171, calcium: 5, iron: 0.3, magnesium: 10, zinc: 0.1, phosphorus: 31,
        vitA: 0, vitC: 72, vitD: 0, vitE: 0.1, vitK: 0.4, vitB6: 0.1, vitB12: 0, folate: 14,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.04
      },
      glycemicIndex: 50,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['asian', 'vitamin-c', 'floral', 'summer']
    },
    fig: {
      id: 'fig',
      name: 'Fig (fresh)',
      category: 'carbs',
      subcategory: 'fruits',
      serving: { amount: 100, unit: 'g', description: '2 medium' },
      calories: 74,
      macros: { protein: 1, carbs: 19, fat: 0, fiber: 3, sugar: 16 },
      micros: {
        sodium: 1, potassium: 232, calcium: 35, iron: 0.4, magnesium: 17, zinc: 0.2, phosphorus: 14,
        vitA: 7, vitC: 2, vitD: 0, vitE: 0.1, vitK: 4.7, vitB6: 0.1, vitB12: 0, folate: 6,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 61,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['mediterranean', 'calcium-source', 'fiber-rich', 'natural-sweetness']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FATS - Healthy Fats, Nuts, Seeds, Oils
  // ═══════════════════════════════════════════════════════════════════════════
  fats: {
    // Nuts
    almonds: {
      id: 'almonds',
      name: 'Almonds (raw)',
      category: 'fats',
      subcategory: 'nuts',
      serving: { amount: 28, unit: 'g', description: '1 oz (23 nuts)' },
      calories: 164,
      macros: { protein: 6, carbs: 6, fat: 14, fiber: 4, sugar: 1 },
      micros: {
        sodium: 0, potassium: 208, calcium: 76, iron: 1.1, magnesium: 77, zinc: 0.9, phosphorus: 137,
        vitA: 0, vitC: 0, vitD: 0, vitE: 7.3, vitK: 0, vitB6: 0.04, vitB12: 0, folate: 14,
        cholesterol: 0, saturatedFat: 1.1, transFat: 0, omega3: 0, omega6: 3.5
      },
      glycemicIndex: 0,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['vitamin-e', 'heart-healthy', 'portable']
    },
    walnuts: {
      id: 'walnuts',
      name: 'Walnuts',
      category: 'fats',
      subcategory: 'nuts',
      serving: { amount: 28, unit: 'g', description: '1 oz (14 halves)' },
      calories: 185,
      macros: { protein: 4, carbs: 4, fat: 18, fiber: 2, sugar: 1 },
      micros: {
        sodium: 1, potassium: 125, calcium: 28, iron: 0.8, magnesium: 45, zinc: 0.9, phosphorus: 98,
        vitA: 1, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.8, vitB6: 0.15, vitB12: 0, folate: 28,
        cholesterol: 0, saturatedFat: 1.7, transFat: 0, omega3: 2.6, omega6: 10.8
      },
      glycemicIndex: 0,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['omega-3', 'brain-health', 'anti-inflammatory']
    },
    cashews: {
      id: 'cashews',
      name: 'Cashews (raw)',
      category: 'fats',
      subcategory: 'nuts',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 157,
      macros: { protein: 5, carbs: 9, fat: 12, fiber: 1, sugar: 2 },
      micros: {
        sodium: 3, potassium: 187, calcium: 10, iron: 1.9, magnesium: 83, zinc: 1.6, phosphorus: 168,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.3, vitK: 9.7, vitB6: 0.1, vitB12: 0, folate: 7,
        cholesterol: 0, saturatedFat: 2.2, transFat: 0, omega3: 0.02, omega6: 2.2
      },
      glycemicIndex: 22,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['magnesium-rich', 'creamy', 'iron-source']
    },
    pistachios: {
      id: 'pistachios',
      name: 'Pistachios (shelled)',
      category: 'fats',
      subcategory: 'nuts',
      serving: { amount: 28, unit: 'g', description: '1 oz (49 nuts)' },
      calories: 159,
      macros: { protein: 6, carbs: 8, fat: 13, fiber: 3, sugar: 2 },
      micros: {
        sodium: 0, potassium: 291, calcium: 30, iron: 1.1, magnesium: 34, zinc: 0.6, phosphorus: 139,
        vitA: 7, vitC: 2, vitD: 0, vitE: 0.6, vitK: 3.7, vitB6: 0.5, vitB12: 0, folate: 14,
        cholesterol: 0, saturatedFat: 1.6, transFat: 0, omega3: 0.1, omega6: 3.9
      },
      glycemicIndex: 15,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['complete-protein', 'b6-rich', 'antioxidants']
    },
    macadamia: {
      id: 'macadamia',
      name: 'Macadamia Nuts',
      category: 'fats',
      subcategory: 'nuts',
      serving: { amount: 28, unit: 'g', description: '1 oz (10-12 nuts)' },
      calories: 204,
      macros: { protein: 2, carbs: 4, fat: 21, fiber: 2, sugar: 1 },
      micros: {
        sodium: 1, potassium: 104, calcium: 24, iron: 1.1, magnesium: 37, zinc: 0.4, phosphorus: 53,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 3,
        cholesterol: 0, saturatedFat: 3.4, transFat: 0, omega3: 0.06, omega6: 0.4
      },
      glycemicIndex: 10,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['monounsaturated', 'keto-friendly', 'rich']
    },

    // Seeds
    chiaSeeds: {
      id: 'chiaSeeds',
      name: 'Chia Seeds',
      category: 'fats',
      subcategory: 'seeds',
      serving: { amount: 28, unit: 'g', description: '2 tbsp' },
      calories: 138,
      macros: { protein: 5, carbs: 12, fat: 9, fiber: 10, sugar: 0 },
      micros: {
        sodium: 5, potassium: 115, calcium: 179, iron: 2.2, magnesium: 95, zinc: 1.3, phosphorus: 244,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0, vitB6: 0, vitB12: 0, folate: 14,
        cholesterol: 0, saturatedFat: 1.0, transFat: 0, omega3: 5.1, omega6: 1.6
      },
      glycemicIndex: 1,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['omega-3', 'fiber-rich', 'calcium-source', 'superfood']
    },
    flaxseeds: {
      id: 'flaxseeds',
      name: 'Ground Flaxseeds',
      category: 'fats',
      subcategory: 'seeds',
      serving: { amount: 14, unit: 'g', description: '2 tbsp' },
      calories: 75,
      macros: { protein: 3, carbs: 4, fat: 6, fiber: 4, sugar: 0 },
      micros: {
        sodium: 4, potassium: 114, calcium: 36, iron: 0.8, magnesium: 55, zinc: 0.6, phosphorus: 90,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.04, vitK: 0.6, vitB6: 0.1, vitB12: 0, folate: 12,
        cholesterol: 0, saturatedFat: 0.5, transFat: 0, omega3: 3.2, omega6: 0.8
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['omega-3', 'lignans', 'fiber-rich']
    },
    pumpkinSeeds: {
      id: 'pumpkinSeeds',
      name: 'Pumpkin Seeds (pepitas)',
      category: 'fats',
      subcategory: 'seeds',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 151,
      macros: { protein: 7, carbs: 5, fat: 13, fiber: 2, sugar: 0 },
      micros: {
        sodium: 5, potassium: 229, calcium: 13, iron: 2.3, magnesium: 151, zinc: 2.1, phosphorus: 333,
        vitA: 1, vitC: 1, vitD: 0, vitE: 0.6, vitK: 1.3, vitB6: 0.03, vitB12: 0, folate: 16,
        cholesterol: 0, saturatedFat: 2.3, transFat: 0, omega3: 0.05, omega6: 5.9
      },
      glycemicIndex: 10,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['zinc-rich', 'magnesium-rich', 'protein-source']
    },
    sunflowerSeeds: {
      id: 'sunflowerSeeds',
      name: 'Sunflower Seeds',
      category: 'fats',
      subcategory: 'seeds',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 165,
      macros: { protein: 6, carbs: 7, fat: 14, fiber: 2, sugar: 1 },
      micros: {
        sodium: 1, potassium: 182, calcium: 22, iron: 1.5, magnesium: 91, zinc: 1.4, phosphorus: 186,
        vitA: 1, vitC: 0, vitD: 0, vitE: 9.3, vitK: 0, vitB6: 0.4, vitB12: 0, folate: 66,
        cholesterol: 0, saturatedFat: 1.2, transFat: 0, omega3: 0.02, omega6: 6.5
      },
      glycemicIndex: 35,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-e', 'selenium-rich', 'affordable']
    },
    hempSeeds: {
      id: 'hempSeeds',
      name: 'Hemp Seeds (hulled)',
      category: 'fats',
      subcategory: 'seeds',
      serving: { amount: 30, unit: 'g', description: '3 tbsp' },
      calories: 166,
      macros: { protein: 10, carbs: 3, fat: 15, fiber: 1, sugar: 1 },
      micros: {
        sodium: 2, potassium: 330, calcium: 21, iron: 2.4, magnesium: 210, zinc: 3.0, phosphorus: 495,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 33,
        cholesterol: 0, saturatedFat: 1.4, transFat: 0, omega3: 2.6, omega6: 8.7
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['complete-protein', 'omega-balance', 'gla-source']
    },

    // Nut Butters
    peanutButter: {
      id: 'peanutButter',
      name: 'Peanut Butter (natural)',
      category: 'fats',
      subcategory: 'nut-butters',
      serving: { amount: 32, unit: 'g', description: '2 tbsp' },
      calories: 190,
      macros: { protein: 8, carbs: 7, fat: 16, fiber: 2, sugar: 2 },
      micros: {
        sodium: 5, potassium: 208, calcium: 17, iron: 0.6, magnesium: 51, zinc: 0.9, phosphorus: 107,
        vitA: 0, vitC: 0, vitD: 0, vitE: 2.9, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 29,
        cholesterol: 0, saturatedFat: 2.5, transFat: 0, omega3: 0, omega6: 4.5
      },
      glycemicIndex: 14,
      allergens: ['peanuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['protein-source', 'satisfying', 'affordable']
    },
    almondButter: {
      id: 'almondButter',
      name: 'Almond Butter',
      category: 'fats',
      subcategory: 'nut-butters',
      serving: { amount: 32, unit: 'g', description: '2 tbsp' },
      calories: 196,
      macros: { protein: 7, carbs: 6, fat: 18, fiber: 3, sugar: 2 },
      micros: {
        sodium: 2, potassium: 240, calcium: 112, iron: 1.1, magnesium: 89, zinc: 1.0, phosphorus: 163,
        vitA: 0, vitC: 0, vitD: 0, vitE: 7.8, vitK: 0, vitB6: 0.04, vitB12: 0, folate: 16,
        cholesterol: 0, saturatedFat: 1.4, transFat: 0, omega3: 0, omega6: 4.1
      },
      glycemicIndex: 0,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['vitamin-e', 'calcium-source', 'nutrient-dense']
    },

    // Oils
    oliveOil: {
      id: 'oliveOil',
      name: 'Extra Virgin Olive Oil',
      category: 'fats',
      subcategory: 'oils',
      serving: { amount: 14, unit: 'g', description: '1 tbsp' },
      calories: 119,
      macros: { protein: 0, carbs: 0, fat: 14, fiber: 0, sugar: 0 },
      micros: {
        sodium: 0, potassium: 0, calcium: 0, iron: 0.1, magnesium: 0, zinc: 0, phosphorus: 0,
        vitA: 0, vitC: 0, vitD: 0, vitE: 1.9, vitK: 8.1, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 1.9, transFat: 0, omega3: 0.1, omega6: 1.3
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['monounsaturated', 'heart-healthy', 'anti-inflammatory', 'polyphenols']
    },
    coconutOil: {
      id: 'coconutOil',
      name: 'Coconut Oil',
      category: 'fats',
      subcategory: 'oils',
      serving: { amount: 14, unit: 'g', description: '1 tbsp' },
      calories: 121,
      macros: { protein: 0, carbs: 0, fat: 14, fiber: 0, sugar: 0 },
      micros: {
        sodium: 0, potassium: 0, calcium: 0, iron: 0, magnesium: 0, zinc: 0, phosphorus: 0,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0.1, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 11.8, transFat: 0, omega3: 0, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['mct', 'lauric-acid', 'high-heat-cooking']
    },
    avocadoOil: {
      id: 'avocadoOil',
      name: 'Avocado Oil',
      category: 'fats',
      subcategory: 'oils',
      serving: { amount: 14, unit: 'g', description: '1 tbsp' },
      calories: 124,
      macros: { protein: 0, carbs: 0, fat: 14, fiber: 0, sugar: 0 },
      micros: {
        sodium: 0, potassium: 0, calcium: 0, iron: 0, magnesium: 0, zinc: 0, phosphorus: 0,
        vitA: 0, vitC: 0, vitD: 0, vitE: 2.0, vitK: 0, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 1.6, transFat: 0, omega3: 0.1, omega6: 1.8
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['high-smoke-point', 'monounsaturated', 'neutral-flavor']
    },

    // Whole Food Fats
    avocado: {
      id: 'avocado',
      name: 'Avocado',
      category: 'fats',
      subcategory: 'whole-foods',
      serving: { amount: 100, unit: 'g', description: '1/2 medium' },
      calories: 160,
      macros: { protein: 2, carbs: 9, fat: 15, fiber: 7, sugar: 1 },
      micros: {
        sodium: 7, potassium: 485, calcium: 12, iron: 0.6, magnesium: 29, zinc: 0.6, phosphorus: 52,
        vitA: 7, vitC: 10, vitD: 0, vitE: 2.1, vitK: 21.0, vitB6: 0.3, vitB12: 0, folate: 81,
        cholesterol: 0, saturatedFat: 2.1, transFat: 0, omega3: 0.1, omega6: 1.7
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['potassium-rich', 'fiber-rich', 'heart-healthy', 'bodybuilding-staple']
    },
    darkChocolate: {
      id: 'darkChocolate',
      name: 'Dark Chocolate (85% cacao)',
      category: 'fats',
      subcategory: 'whole-foods',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 170,
      macros: { protein: 2, carbs: 13, fat: 15, fiber: 3, sugar: 5 },
      micros: {
        sodium: 6, potassium: 203, calcium: 18, iron: 3.3, magnesium: 64, zinc: 1.0, phosphorus: 79,
        vitA: 1, vitC: 0, vitD: 0, vitE: 0.2, vitK: 2.1, vitB6: 0.01, vitB12: 0.1, folate: 5,
        cholesterol: 2, saturatedFat: 9.0, transFat: 0, omega3: 0.02, omega6: 0.4
      },
      glycemicIndex: 23,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['antioxidants', 'magnesium-rich', 'mood-boost', 'treat']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE NUTS - Additional Varieties
    // ═══════════════════════════════════════════════════════════════════════════
    hazelnuts: {
      id: 'hazelnuts',
      name: 'Hazelnuts (raw)',
      category: 'fats',
      subcategory: 'nuts',
      serving: { amount: 28, unit: 'g', description: '1 oz (21 nuts)' },
      calories: 178,
      macros: { protein: 4, carbs: 5, fat: 17, fiber: 3, sugar: 1 },
      micros: {
        sodium: 0, potassium: 193, calcium: 32, iron: 1.3, magnesium: 46, zinc: 0.7, phosphorus: 82,
        vitA: 1, vitC: 2, vitD: 0, vitE: 4.3, vitK: 4.0, vitB6: 0.2, vitB12: 0, folate: 32,
        cholesterol: 0, saturatedFat: 1.3, transFat: 0, omega3: 0.02, omega6: 2.2
      },
      glycemicIndex: 15,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['vitamin-e', 'filberts', 'european', 'chocolate-pairing']
    },
    pecans: {
      id: 'pecans',
      name: 'Pecans',
      category: 'fats',
      subcategory: 'nuts',
      serving: { amount: 28, unit: 'g', description: '1 oz (19 halves)' },
      calories: 196,
      macros: { protein: 3, carbs: 4, fat: 20, fiber: 3, sugar: 1 },
      micros: {
        sodium: 0, potassium: 116, calcium: 20, iron: 0.7, magnesium: 34, zinc: 1.3, phosphorus: 79,
        vitA: 1, vitC: 0, vitD: 0, vitE: 0.4, vitK: 1.0, vitB6: 0.1, vitB12: 0, folate: 6,
        cholesterol: 0, saturatedFat: 1.7, transFat: 0, omega3: 0.3, omega6: 5.8
      },
      glycemicIndex: 10,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['southern', 'buttery', 'baking', 'zinc-source']
    },
    brazilNuts: {
      id: 'brazilNuts',
      name: 'Brazil Nuts',
      category: 'fats',
      subcategory: 'nuts',
      serving: { amount: 28, unit: 'g', description: '1 oz (6 nuts)' },
      calories: 186,
      macros: { protein: 4, carbs: 3, fat: 19, fiber: 2, sugar: 1 },
      micros: {
        sodium: 1, potassium: 187, calcium: 45, iron: 0.7, magnesium: 107, zinc: 1.2, phosphorus: 206,
        vitA: 0, vitC: 0, vitD: 0, vitE: 1.6, vitK: 0, vitB6: 0.03, vitB12: 0, folate: 6,
        cholesterol: 0, saturatedFat: 4.5, transFat: 0, omega3: 0.01, omega6: 5.8
      },
      glycemicIndex: 10,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['selenium-powerhouse', 'thyroid-support', 'limit-2-daily', 'magnesium-rich']
    },
    pineNuts: {
      id: 'pineNuts',
      name: 'Pine Nuts',
      category: 'fats',
      subcategory: 'nuts',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 191,
      macros: { protein: 4, carbs: 4, fat: 19, fiber: 1, sugar: 1 },
      micros: {
        sodium: 1, potassium: 169, calcium: 5, iron: 1.6, magnesium: 71, zinc: 1.8, phosphorus: 163,
        vitA: 1, vitC: 0, vitD: 0, vitE: 2.6, vitK: 15.3, vitB6: 0.03, vitB12: 0, folate: 10,
        cholesterol: 0, saturatedFat: 1.4, transFat: 0, omega3: 0.03, omega6: 9.4
      },
      glycemicIndex: 15,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['pesto-essential', 'mediterranean', 'buttery', 'iron-source']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE SEEDS - Additional Varieties
    // ═══════════════════════════════════════════════════════════════════════════
    sesameSeeds: {
      id: 'sesameSeeds',
      name: 'Sesame Seeds',
      category: 'fats',
      subcategory: 'seeds',
      serving: { amount: 18, unit: 'g', description: '2 tbsp' },
      calories: 103,
      macros: { protein: 3, carbs: 4, fat: 9, fiber: 2, sugar: 0 },
      micros: {
        sodium: 2, potassium: 84, calcium: 175, iron: 2.6, magnesium: 63, zinc: 1.4, phosphorus: 113,
        vitA: 1, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 17,
        cholesterol: 0, saturatedFat: 1.3, transFat: 0, omega3: 0.1, omega6: 3.9
      },
      glycemicIndex: 35,
      allergens: ['sesame'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['calcium-rich', 'asian-cuisine', 'topping', 'lignans']
    },
    tahini: {
      id: 'tahini',
      name: 'Tahini (sesame paste)',
      category: 'fats',
      subcategory: 'seeds',
      serving: { amount: 30, unit: 'g', description: '2 tbsp' },
      calories: 179,
      macros: { protein: 5, carbs: 6, fat: 16, fiber: 3, sugar: 0 },
      micros: {
        sodium: 35, potassium: 124, calcium: 128, iron: 2.7, magnesium: 29, zinc: 1.3, phosphorus: 220,
        vitA: 1, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0, vitB6: 0.04, vitB12: 0, folate: 29,
        cholesterol: 0, saturatedFat: 2.2, transFat: 0, omega3: 0.1, omega6: 6.8
      },
      glycemicIndex: 0,
      allergens: ['sesame'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['middle-eastern', 'hummus-base', 'dressing', 'calcium-source']
    },
    poppySeeds: {
      id: 'poppySeeds',
      name: 'Poppy Seeds',
      category: 'fats',
      subcategory: 'seeds',
      serving: { amount: 9, unit: 'g', description: '1 tbsp' },
      calories: 46,
      macros: { protein: 2, carbs: 2, fat: 4, fiber: 1, sugar: 0 },
      micros: {
        sodium: 3, potassium: 63, calcium: 127, iron: 0.9, magnesium: 30, zinc: 0.9, phosphorus: 76,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0, vitB6: 0.02, vitB12: 0, folate: 5,
        cholesterol: 0, saturatedFat: 0.4, transFat: 0, omega3: 0.03, omega6: 2.5
      },
      glycemicIndex: 35,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['baking', 'calcium-rich', 'european', 'topping']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // DAIRY FATS - Butter, Cream, Cheese Spreads
    // ═══════════════════════════════════════════════════════════════════════════
    butter: {
      id: 'butter',
      name: 'Butter (unsalted)',
      category: 'fats',
      subcategory: 'dairy-fats',
      serving: { amount: 14, unit: 'g', description: '1 tbsp' },
      calories: 102,
      macros: { protein: 0, carbs: 0, fat: 12, fiber: 0, sugar: 0 },
      micros: {
        sodium: 2, potassium: 3, calcium: 3, iron: 0, magnesium: 0, zinc: 0, phosphorus: 3,
        vitA: 97, vitC: 0, vitD: 0.1, vitE: 0.3, vitK: 1.0, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 31, saturatedFat: 7.3, transFat: 0.5, omega3: 0.04, omega6: 0.4
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['cooking-fat', 'vitamin-a', 'rich-flavor', 'baking']
    },
    ghee: {
      id: 'ghee',
      name: 'Ghee (clarified butter)',
      category: 'fats',
      subcategory: 'dairy-fats',
      serving: { amount: 14, unit: 'g', description: '1 tbsp' },
      calories: 123,
      macros: { protein: 0, carbs: 0, fat: 14, fiber: 0, sugar: 0 },
      micros: {
        sodium: 0, potassium: 0, calcium: 0, iron: 0, magnesium: 0, zinc: 0, phosphorus: 0,
        vitA: 108, vitC: 0, vitD: 0.1, vitE: 0.4, vitK: 1.2, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 36, saturatedFat: 8.7, transFat: 0.4, omega3: 0.05, omega6: 0.4
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'paleo', 'glutenfree', 'keto'],
      tags: ['indian', 'high-smoke-point', 'lactose-free', 'ayurvedic']
    },
    creamCheese: {
      id: 'creamCheese',
      name: 'Cream Cheese',
      category: 'fats',
      subcategory: 'dairy-fats',
      serving: { amount: 28, unit: 'g', description: '2 tbsp' },
      calories: 99,
      macros: { protein: 2, carbs: 2, fat: 10, fiber: 0, sugar: 1 },
      micros: {
        sodium: 90, potassium: 34, calcium: 28, iron: 0.2, magnesium: 3, zinc: 0.2, phosphorus: 31,
        vitA: 100, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.8, vitB6: 0, vitB12: 0.1, folate: 3,
        cholesterol: 29, saturatedFat: 5.7, transFat: 0, omega3: 0.1, omega6: 0.3
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['spreadable', 'bagel-topping', 'baking', 'cheesecake']
    },
    heavyCream: {
      id: 'heavyCream',
      name: 'Heavy Whipping Cream',
      category: 'fats',
      subcategory: 'dairy-fats',
      serving: { amount: 30, unit: 'ml', description: '2 tbsp' },
      calories: 103,
      macros: { protein: 1, carbs: 1, fat: 11, fiber: 0, sugar: 0 },
      micros: {
        sodium: 11, potassium: 26, calcium: 19, iron: 0, magnesium: 2, zinc: 0.1, phosphorus: 18,
        vitA: 125, vitC: 0, vitD: 0.1, vitE: 0.3, vitK: 0.7, vitB6: 0, vitB12: 0.1, folate: 1,
        cholesterol: 41, saturatedFat: 6.9, transFat: 0.4, omega3: 0.07, omega6: 0.3
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['whipping', 'coffee-creamer', 'sauces', 'keto-staple']
    },
    sourCream: {
      id: 'sourCream',
      name: 'Sour Cream',
      category: 'fats',
      subcategory: 'dairy-fats',
      serving: { amount: 30, unit: 'g', description: '2 tbsp' },
      calories: 60,
      macros: { protein: 1, carbs: 1, fat: 6, fiber: 0, sugar: 1 },
      micros: {
        sodium: 15, potassium: 41, calcium: 28, iron: 0, magnesium: 3, zinc: 0.1, phosphorus: 23,
        vitA: 55, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.5, vitB6: 0, vitB12: 0.1, folate: 3,
        cholesterol: 13, saturatedFat: 3.5, transFat: 0, omega3: 0.05, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['tangy', 'topping', 'mexican-food', 'probiotics']
    },
    halfAndHalf: {
      id: 'halfAndHalf',
      name: 'Half and Half',
      category: 'fats',
      subcategory: 'dairy-fats',
      serving: { amount: 30, unit: 'ml', description: '2 tbsp' },
      calories: 40,
      macros: { protein: 1, carbs: 1, fat: 4, fiber: 0, sugar: 1 },
      micros: {
        sodium: 15, potassium: 39, calcium: 32, iron: 0, magnesium: 3, zinc: 0.1, phosphorus: 28,
        vitA: 40, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.3, vitB6: 0, vitB12: 0.1, folate: 1,
        cholesterol: 11, saturatedFat: 2.2, transFat: 0, omega3: 0.03, omega6: 0.1
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['coffee-creamer', 'lighter-option', 'cooking', 'moderate-fat']
    },
    mascarpone: {
      id: 'mascarpone',
      name: 'Mascarpone Cheese',
      category: 'fats',
      subcategory: 'dairy-fats',
      serving: { amount: 28, unit: 'g', description: '2 tbsp' },
      calories: 120,
      macros: { protein: 2, carbs: 1, fat: 13, fiber: 0, sugar: 0 },
      micros: {
        sodium: 15, potassium: 20, calcium: 25, iron: 0.1, magnesium: 2, zinc: 0.1, phosphorus: 20,
        vitA: 125, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.6, vitB6: 0, vitB12: 0.1, folate: 2,
        cholesterol: 38, saturatedFat: 8.0, transFat: 0, omega3: 0.1, omega6: 0.3
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['italian', 'tiramisu', 'creamy', 'rich']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // DRESSINGS & CONDIMENTS - Salad Dressings
    // ═══════════════════════════════════════════════════════════════════════════
    ranchDressing: {
      id: 'ranchDressing',
      name: 'Ranch Dressing',
      category: 'fats',
      subcategory: 'dressings',
      serving: { amount: 30, unit: 'g', description: '2 tbsp' },
      calories: 145,
      macros: { protein: 0, carbs: 2, fat: 15, fiber: 0, sugar: 1 },
      micros: {
        sodium: 260, potassium: 25, calcium: 15, iron: 0, magnesium: 2, zinc: 0.1, phosphorus: 20,
        vitA: 10, vitC: 0, vitD: 0, vitE: 0.5, vitK: 12, vitB6: 0, vitB12: 0, folate: 1,
        cholesterol: 5, saturatedFat: 2.3, transFat: 0, omega3: 0.3, omega6: 4.5
      },
      glycemicIndex: 0,
      allergens: ['eggs', 'dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['american', 'popular', 'dipping-sauce', 'creamy']
    },
    caesarDressing: {
      id: 'caesarDressing',
      name: 'Caesar Dressing',
      category: 'fats',
      subcategory: 'dressings',
      serving: { amount: 30, unit: 'g', description: '2 tbsp' },
      calories: 163,
      macros: { protein: 1, carbs: 1, fat: 18, fiber: 0, sugar: 1 },
      micros: {
        sodium: 284, potassium: 18, calcium: 20, iron: 0.1, magnesium: 2, zinc: 0.2, phosphorus: 22,
        vitA: 15, vitC: 1, vitD: 0, vitE: 1.2, vitK: 18, vitB6: 0, vitB12: 0.1, folate: 2,
        cholesterol: 10, saturatedFat: 2.7, transFat: 0, omega3: 0.4, omega6: 5.2
      },
      glycemicIndex: 0,
      allergens: ['eggs', 'fish', 'dairy'],
      dietTypes: ['regular', 'glutenfree', 'keto'],
      tags: ['classic', 'anchovy', 'parmesan', 'salad-staple']
    },
    italianDressing: {
      id: 'italianDressing',
      name: 'Italian Dressing',
      category: 'fats',
      subcategory: 'dressings',
      serving: { amount: 30, unit: 'g', description: '2 tbsp' },
      calories: 71,
      macros: { protein: 0, carbs: 3, fat: 7, fiber: 0, sugar: 2 },
      micros: {
        sodium: 243, potassium: 8, calcium: 3, iron: 0.1, magnesium: 1, zinc: 0, phosphorus: 3,
        vitA: 5, vitC: 0, vitD: 0, vitE: 1.0, vitK: 15, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 1.0, transFat: 0, omega3: 0.1, omega6: 2.0
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['herb-based', 'vinaigrette', 'light', 'marinade']
    },
    balsamicVinaigrette: {
      id: 'balsamicVinaigrette',
      name: 'Balsamic Vinaigrette',
      category: 'fats',
      subcategory: 'dressings',
      serving: { amount: 30, unit: 'g', description: '2 tbsp' },
      calories: 89,
      macros: { protein: 0, carbs: 5, fat: 8, fiber: 0, sugar: 4 },
      micros: {
        sodium: 192, potassium: 28, calcium: 6, iron: 0.2, magnesium: 3, zinc: 0, phosphorus: 5,
        vitA: 0, vitC: 0, vitD: 0, vitE: 1.5, vitK: 12, vitB6: 0, vitB12: 0, folate: 1,
        cholesterol: 0, saturatedFat: 1.1, transFat: 0, omega3: 0.1, omega6: 2.5
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['italian', 'tangy', 'versatile', 'moderate-carb']
    },
    honeyMustardDressing: {
      id: 'honeyMustardDressing',
      name: 'Honey Mustard Dressing',
      category: 'fats',
      subcategory: 'dressings',
      serving: { amount: 30, unit: 'g', description: '2 tbsp' },
      calories: 130,
      macros: { protein: 0, carbs: 10, fat: 10, fiber: 0, sugar: 9 },
      micros: {
        sodium: 200, potassium: 15, calcium: 5, iron: 0.1, magnesium: 2, zinc: 0.1, phosphorus: 8,
        vitA: 5, vitC: 0, vitD: 0, vitE: 0.8, vitK: 8, vitB6: 0, vitB12: 0, folate: 1,
        cholesterol: 8, saturatedFat: 1.5, transFat: 0, omega3: 0.2, omega6: 3.0
      },
      glycemicIndex: 35,
      allergens: ['eggs'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['sweet-tangy', 'chicken-pairing', 'dipping', 'kid-friendly']
    },
    blueCheeseeDressing: {
      id: 'blueCheeseDressing',
      name: 'Blue Cheese Dressing',
      category: 'fats',
      subcategory: 'dressings',
      serving: { amount: 30, unit: 'g', description: '2 tbsp' },
      calories: 154,
      macros: { protein: 1, carbs: 1, fat: 16, fiber: 0, sugar: 1 },
      micros: {
        sodium: 330, potassium: 25, calcium: 30, iron: 0.1, magnesium: 3, zinc: 0.2, phosphorus: 30,
        vitA: 35, vitC: 0, vitD: 0, vitE: 0.4, vitK: 10, vitB6: 0, vitB12: 0.2, folate: 3,
        cholesterol: 15, saturatedFat: 3.5, transFat: 0, omega3: 0.2, omega6: 4.5
      },
      glycemicIndex: 0,
      allergens: ['dairy', 'eggs'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['bold-flavor', 'wing-sauce', 'steakhouse', 'chunky']
    },
    greekDressing: {
      id: 'greekDressing',
      name: 'Greek Dressing',
      category: 'fats',
      subcategory: 'dressings',
      serving: { amount: 30, unit: 'g', description: '2 tbsp' },
      calories: 110,
      macros: { protein: 0, carbs: 2, fat: 11, fiber: 0, sugar: 1 },
      micros: {
        sodium: 270, potassium: 20, calcium: 10, iron: 0.2, magnesium: 2, zinc: 0.1, phosphorus: 10,
        vitA: 5, vitC: 1, vitD: 0, vitE: 1.5, vitK: 15, vitB6: 0, vitB12: 0, folate: 1,
        cholesterol: 0, saturatedFat: 1.5, transFat: 0, omega3: 0.1, omega6: 3.2
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree', 'mediterranean'],
      tags: ['olive-oil-based', 'herb-garlic', 'feta-pairing', 'mediterranean']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SPECIALTY FATS - MCT, Coconut Products
    // ═══════════════════════════════════════════════════════════════════════════
    mctOil: {
      id: 'mctOil',
      name: 'MCT Oil',
      category: 'fats',
      subcategory: 'specialty',
      serving: { amount: 14, unit: 'g', description: '1 tbsp' },
      calories: 120,
      macros: { protein: 0, carbs: 0, fat: 14, fiber: 0, sugar: 0 },
      micros: {
        sodium: 0, potassium: 0, calcium: 0, iron: 0, magnesium: 0, zinc: 0, phosphorus: 0,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 14, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['ketogenic', 'brain-fuel', 'quick-energy', 'bulletproof-coffee']
    },
    coconutCream: {
      id: 'coconutCream',
      name: 'Coconut Cream',
      category: 'fats',
      subcategory: 'specialty',
      serving: { amount: 60, unit: 'g', description: '1/4 cup' },
      calories: 200,
      macros: { protein: 2, carbs: 4, fat: 21, fiber: 0, sugar: 2 },
      micros: {
        sodium: 8, potassium: 160, calcium: 6, iron: 1.6, magnesium: 28, zinc: 0.5, phosphorus: 60,
        vitA: 0, vitC: 1, vitD: 0, vitE: 0.1, vitK: 0.1, vitB6: 0.03, vitB12: 0, folate: 10,
        cholesterol: 0, saturatedFat: 18.7, transFat: 0, omega3: 0, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['dairy-free', 'thai-cooking', 'whipping', 'creamy']
    },
    coconutButter: {
      id: 'coconutButter',
      name: 'Coconut Butter (manna)',
      category: 'fats',
      subcategory: 'specialty',
      serving: { amount: 28, unit: 'g', description: '2 tbsp' },
      calories: 180,
      macros: { protein: 2, carbs: 7, fat: 17, fiber: 5, sugar: 2 },
      micros: {
        sodium: 5, potassium: 135, calcium: 5, iron: 1.2, magnesium: 22, zinc: 0.4, phosphorus: 50,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.1, vitB6: 0.02, vitB12: 0, folate: 8,
        cholesterol: 0, saturatedFat: 15, transFat: 0, omega3: 0, omega6: 0.3
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['whole-coconut', 'spreadable', 'fiber-source', 'smoothie-addition']
    },
    cacaoButter: {
      id: 'cacaoButter',
      name: 'Cacao Butter',
      category: 'fats',
      subcategory: 'specialty',
      serving: { amount: 14, unit: 'g', description: '1 tbsp' },
      calories: 120,
      macros: { protein: 0, carbs: 0, fat: 14, fiber: 0, sugar: 0 },
      micros: {
        sodium: 0, potassium: 0, calcium: 0, iron: 0, magnesium: 0, zinc: 0, phosphorus: 0,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0.6, vitK: 6.5, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 8.3, transFat: 0, omega3: 0, omega6: 0.4
      },
      glycemicIndex: 0,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['chocolate-making', 'skincare', 'stable', 'aromatic']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES - Non-Starchy, Leafy Greens
  // ═══════════════════════════════════════════════════════════════════════════
  vegetables: {
    // Leafy Greens
    spinach: {
      id: 'spinach',
      name: 'Spinach (raw)',
      category: 'vegetables',
      subcategory: 'leafy-greens',
      serving: { amount: 60, unit: 'g', description: '2 cups raw' },
      calories: 14,
      macros: { protein: 2, carbs: 2, fat: 0, fiber: 1, sugar: 0 },
      micros: {
        sodium: 47, potassium: 335, calcium: 59, iron: 1.6, magnesium: 47, zinc: 0.3, phosphorus: 29,
        vitA: 282, vitC: 17, vitD: 0, vitE: 1.2, vitK: 290, vitB6: 0.1, vitB12: 0, folate: 116,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.08, omega6: 0.02
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['iron-rich', 'vitamin-k', 'folate-rich', 'low-calorie']
    },
    kale: {
      id: 'kale',
      name: 'Kale (chopped, raw)',
      category: 'vegetables',
      subcategory: 'leafy-greens',
      serving: { amount: 67, unit: 'g', description: '1 cup chopped' },
      calories: 33,
      macros: { protein: 3, carbs: 6, fat: 0, fiber: 2, sugar: 2 },
      micros: {
        sodium: 29, potassium: 299, calcium: 101, iron: 1.1, magnesium: 23, zinc: 0.3, phosphorus: 37,
        vitA: 206, vitC: 80, vitD: 0, vitE: 0.7, vitK: 547, vitB6: 0.2, vitB12: 0, folate: 19,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.1, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['vitamin-k', 'vitamin-c', 'calcium-source', 'superfood']
    },
    romaine: {
      id: 'romaine',
      name: 'Romaine Lettuce',
      category: 'vegetables',
      subcategory: 'leafy-greens',
      serving: { amount: 85, unit: 'g', description: '2 cups shredded' },
      calories: 15,
      macros: { protein: 1, carbs: 3, fat: 0, fiber: 2, sugar: 1 },
      micros: {
        sodium: 7, potassium: 205, calcium: 28, iron: 0.8, magnesium: 12, zinc: 0.2, phosphorus: 26,
        vitA: 436, vitC: 20, vitD: 0, vitE: 0.1, vitK: 88, vitB6: 0.1, vitB12: 0, folate: 114,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.1, omega6: 0
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['low-calorie', 'vitamin-a', 'folate-rich', 'crunchy']
    },
    arugula: {
      id: 'arugula',
      name: 'Arugula',
      category: 'vegetables',
      subcategory: 'leafy-greens',
      serving: { amount: 40, unit: 'g', description: '2 cups' },
      calories: 10,
      macros: { protein: 1, carbs: 1, fat: 0, fiber: 1, sugar: 1 },
      micros: {
        sodium: 11, potassium: 147, calcium: 64, iron: 0.6, magnesium: 19, zinc: 0.2, phosphorus: 21,
        vitA: 47, vitC: 6, vitD: 0, vitE: 0.2, vitK: 43, vitB6: 0.03, vitB12: 0, folate: 39,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.1, omega6: 0.03
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['peppery', 'calcium-source', 'low-calorie']
    },
    swissChard: {
      id: 'swissChard',
      name: 'Swiss Chard (cooked)',
      category: 'vegetables',
      subcategory: 'leafy-greens',
      serving: { amount: 175, unit: 'g', description: '1 cup cooked' },
      calories: 35,
      macros: { protein: 3, carbs: 7, fat: 0, fiber: 4, sugar: 2 },
      micros: {
        sodium: 313, potassium: 961, calcium: 102, iron: 4.0, magnesium: 150, zinc: 0.6, phosphorus: 58,
        vitA: 536, vitC: 32, vitD: 0, vitE: 3.3, vitK: 573, vitB6: 0.1, vitB12: 0, folate: 15,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.02
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['vitamin-k', 'magnesium-rich', 'potassium-rich']
    },

    // Cruciferous
    broccoli: {
      id: 'broccoli',
      name: 'Broccoli (steamed)',
      category: 'vegetables',
      subcategory: 'cruciferous',
      serving: { amount: 156, unit: 'g', description: '1 cup chopped' },
      calories: 55,
      macros: { protein: 4, carbs: 11, fat: 1, fiber: 5, sugar: 2 },
      micros: {
        sodium: 64, potassium: 457, calcium: 62, iron: 1.0, magnesium: 33, zinc: 0.6, phosphorus: 105,
        vitA: 60, vitC: 101, vitD: 0, vitE: 2.3, vitK: 220, vitB6: 0.2, vitB12: 0, folate: 168,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.2, omega6: 0.04
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['vitamin-c', 'sulforaphane', 'fiber-rich', 'bodybuilding-staple']
    },
    cauliflower: {
      id: 'cauliflower',
      name: 'Cauliflower (steamed)',
      category: 'vegetables',
      subcategory: 'cruciferous',
      serving: { amount: 124, unit: 'g', description: '1 cup' },
      calories: 29,
      macros: { protein: 2, carbs: 5, fat: 0, fiber: 2, sugar: 2 },
      micros: {
        sodium: 32, potassium: 320, calcium: 24, iron: 0.5, magnesium: 16, zinc: 0.3, phosphorus: 47,
        vitA: 1, vitC: 55, vitD: 0, vitE: 0.1, vitK: 17, vitB6: 0.2, vitB12: 0, folate: 61,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.04, omega6: 0.01
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['low-carb', 'vitamin-c', 'versatile']
    },
    brusselsSprouts: {
      id: 'brusselsSprouts',
      name: 'Brussels Sprouts (roasted)',
      category: 'vegetables',
      subcategory: 'cruciferous',
      serving: { amount: 156, unit: 'g', description: '1 cup' },
      calories: 56,
      macros: { protein: 4, carbs: 11, fat: 1, fiber: 4, sugar: 3 },
      micros: {
        sodium: 28, potassium: 495, calcium: 56, iron: 1.9, magnesium: 31, zinc: 0.5, phosphorus: 87,
        vitA: 60, vitC: 97, vitD: 0, vitE: 0.9, vitK: 219, vitB6: 0.3, vitB12: 0, folate: 94,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.2, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['vitamin-k', 'vitamin-c', 'fiber-rich']
    },
    cabbage: {
      id: 'cabbage',
      name: 'Cabbage (green, raw)',
      category: 'vegetables',
      subcategory: 'cruciferous',
      serving: { amount: 89, unit: 'g', description: '1 cup shredded' },
      calories: 22,
      macros: { protein: 1, carbs: 5, fat: 0, fiber: 2, sugar: 3 },
      micros: {
        sodium: 16, potassium: 151, calcium: 36, iron: 0.4, magnesium: 11, zinc: 0.2, phosphorus: 23,
        vitA: 4, vitC: 33, vitD: 0, vitE: 0.1, vitK: 68, vitB6: 0.1, vitB12: 0, folate: 38,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.1, omega6: 0.03
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['low-calorie', 'vitamin-k', 'affordable']
    },

    // Other Vegetables
    asparagus: {
      id: 'asparagus',
      name: 'Asparagus (steamed)',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 134, unit: 'g', description: '1 cup (6 spears)' },
      calories: 27,
      macros: { protein: 3, carbs: 5, fat: 0, fiber: 3, sugar: 3 },
      micros: {
        sodium: 17, potassium: 271, calcium: 32, iron: 2.9, magnesium: 19, zinc: 0.7, phosphorus: 70,
        vitA: 51, vitC: 7, vitD: 0, vitE: 1.5, vitK: 56, vitB6: 0.1, vitB12: 0, folate: 70,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.06
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['diuretic', 'folate-rich', 'prebiotic']
    },
    greenBeans: {
      id: 'greenBeans',
      name: 'Green Beans (steamed)',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 125, unit: 'g', description: '1 cup' },
      calories: 44,
      macros: { protein: 2, carbs: 10, fat: 0, fiber: 4, sugar: 4 },
      micros: {
        sodium: 1, potassium: 209, calcium: 37, iron: 1.0, magnesium: 25, zinc: 0.2, phosphorus: 38,
        vitA: 44, vitC: 12, vitD: 0, vitE: 0.4, vitK: 60, vitB6: 0.1, vitB12: 0, folate: 33,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.1, omega6: 0.03
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['low-calorie', 'vitamin-k', 'fiber-source']
    },
    zucchini: {
      id: 'zucchini',
      name: 'Zucchini (raw)',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 124, unit: 'g', description: '1 medium' },
      calories: 21,
      macros: { protein: 2, carbs: 4, fat: 0, fiber: 1, sugar: 3 },
      micros: {
        sodium: 10, potassium: 324, calcium: 20, iron: 0.5, magnesium: 22, zinc: 0.4, phosphorus: 47,
        vitA: 12, vitC: 22, vitD: 0, vitE: 0.2, vitK: 5, vitB6: 0.2, vitB12: 0, folate: 30,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.05, omega6: 0.04
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['low-calorie', 'versatile', 'noodle-substitute']
    },
    bellPepperRed: {
      id: 'bellPepperRed',
      name: 'Red Bell Pepper',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 149, unit: 'g', description: '1 medium' },
      calories: 46,
      macros: { protein: 1, carbs: 9, fat: 0, fiber: 3, sugar: 6 },
      micros: {
        sodium: 6, potassium: 314, calcium: 10, iron: 0.6, magnesium: 18, zinc: 0.4, phosphorus: 39,
        vitA: 234, vitC: 190, vitD: 0, vitE: 2.4, vitK: 7.3, vitB6: 0.4, vitB12: 0, folate: 68,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.04, omega6: 0.08
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['vitamin-c', 'vitamin-a', 'antioxidants', 'sweet']
    },
    mushrooms: {
      id: 'mushrooms',
      name: 'White Mushrooms (raw)',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 96, unit: 'g', description: '1 cup sliced' },
      calories: 21,
      macros: { protein: 3, carbs: 3, fat: 0, fiber: 1, sugar: 2 },
      micros: {
        sodium: 5, potassium: 305, calcium: 3, iron: 0.5, magnesium: 9, zinc: 0.5, phosphorus: 83,
        vitA: 0, vitC: 2, vitD: 0.2, vitE: 0.01, vitK: 0, vitB6: 0.1, vitB12: 0.04, folate: 16,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['vitamin-d', 'selenium-source', 'umami']
    },
    tomatoes: {
      id: 'tomatoes',
      name: 'Tomatoes (raw)',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 180, unit: 'g', description: '1 cup chopped' },
      calories: 32,
      macros: { protein: 2, carbs: 7, fat: 0, fiber: 2, sugar: 5 },
      micros: {
        sodium: 9, potassium: 427, calcium: 18, iron: 0.5, magnesium: 20, zinc: 0.3, phosphorus: 43,
        vitA: 75, vitC: 25, vitD: 0, vitE: 1.0, vitK: 14, vitB6: 0.1, vitB12: 0, folate: 27,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.2
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['lycopene', 'potassium-rich', 'versatile']
    },
    cucumber: {
      id: 'cucumber',
      name: 'Cucumber (with peel)',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 104, unit: 'g', description: '1/2 medium' },
      calories: 16,
      macros: { protein: 1, carbs: 4, fat: 0, fiber: 1, sugar: 2 },
      micros: {
        sodium: 2, potassium: 153, calcium: 17, iron: 0.3, magnesium: 14, zinc: 0.2, phosphorus: 25,
        vitA: 5, vitC: 3, vitD: 0, vitE: 0, vitK: 17, vitB6: 0.04, vitB12: 0, folate: 8,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.03
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['hydrating', 'low-calorie', 'refreshing']
    },
    carrots: {
      id: 'carrots',
      name: 'Carrots (raw)',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 128, unit: 'g', description: '1 cup chopped' },
      calories: 52,
      macros: { protein: 1, carbs: 12, fat: 0, fiber: 4, sugar: 6 },
      micros: {
        sodium: 88, potassium: 410, calcium: 42, iron: 0.4, magnesium: 15, zinc: 0.3, phosphorus: 45,
        vitA: 1069, vitC: 7, vitD: 0, vitE: 0.8, vitK: 17, vitB6: 0.2, vitB12: 0, folate: 24,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 35,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree'],
      tags: ['vitamin-a', 'beta-carotene', 'eye-health']
    },
    celery: {
      id: 'celery',
      name: 'Celery',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 101, unit: 'g', description: '1 cup chopped' },
      calories: 14,
      macros: { protein: 1, carbs: 3, fat: 0, fiber: 2, sugar: 1 },
      micros: {
        sodium: 81, potassium: 263, calcium: 40, iron: 0.2, magnesium: 11, zinc: 0.1, phosphorus: 24,
        vitA: 22, vitC: 3, vitD: 0, vitE: 0.3, vitK: 30, vitB6: 0.1, vitB12: 0, folate: 36,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['low-calorie', 'hydrating', 'crunchy']
    },
    onion: {
      id: 'onion',
      name: 'Onion (raw)',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 110, unit: 'g', description: '1 medium' },
      calories: 44,
      macros: { protein: 1, carbs: 10, fat: 0, fiber: 2, sugar: 5 },
      micros: {
        sodium: 4, potassium: 161, calcium: 25, iron: 0.2, magnesium: 11, zinc: 0.2, phosphorus: 32,
        vitA: 0, vitC: 8, vitD: 0, vitE: 0, vitK: 0.4, vitB6: 0.1, vitB12: 0, folate: 21,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.03
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['quercetin', 'prebiotic', 'flavor-base']
    },
    garlic: {
      id: 'garlic',
      name: 'Garlic',
      category: 'vegetables',
      subcategory: 'other',
      serving: { amount: 9, unit: 'g', description: '3 cloves' },
      calories: 13,
      macros: { protein: 1, carbs: 3, fat: 0, fiber: 0, sugar: 0 },
      micros: {
        sodium: 2, potassium: 36, calcium: 16, iron: 0.2, magnesium: 2, zinc: 0.1, phosphorus: 14,
        vitA: 0, vitC: 3, vitD: 0, vitE: 0.01, vitK: 0.2, vitB6: 0.1, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0.01
      },
      glycemicIndex: 30,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['allicin', 'immune-support', 'antimicrobial']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE LEAFY GREENS
    // ═══════════════════════════════════════════════════════════════════════════
    collardGreens: {
      id: 'collardGreens',
      name: 'Collard Greens (cooked)',
      category: 'vegetables',
      subcategory: 'leafy-greens',
      serving: { amount: 190, unit: 'g', description: '1 cup cooked' },
      calories: 49,
      macros: { protein: 4, carbs: 9, fat: 1, fiber: 5, sugar: 1 },
      micros: {
        sodium: 28, potassium: 222, calcium: 268, iron: 2.2, magnesium: 40, zinc: 0.4, phosphorus: 61,
        vitA: 722, vitC: 35, vitD: 0, vitE: 1.7, vitK: 836, vitB6: 0.2, vitB12: 0, folate: 177,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.2, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['calcium-rich', 'vitamin-k-powerhouse', 'southern', 'bone-health']
    },
    mustardGreens: {
      id: 'mustardGreens',
      name: 'Mustard Greens (cooked)',
      category: 'vegetables',
      subcategory: 'leafy-greens',
      serving: { amount: 140, unit: 'g', description: '1 cup cooked' },
      calories: 21,
      macros: { protein: 3, carbs: 3, fat: 0, fiber: 3, sugar: 1 },
      micros: {
        sodium: 22, potassium: 283, calcium: 104, iron: 1.0, magnesium: 21, zinc: 0.2, phosphorus: 41,
        vitA: 590, vitC: 35, vitD: 0, vitE: 1.1, vitK: 419, vitB6: 0.1, vitB12: 0, folate: 103,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.1, omega6: 0.02
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['peppery', 'detox', 'vitamin-a', 'low-calorie']
    },
    bokChoy: {
      id: 'bokChoy',
      name: 'Bok Choy (cooked)',
      category: 'vegetables',
      subcategory: 'leafy-greens',
      serving: { amount: 170, unit: 'g', description: '1 cup cooked' },
      calories: 20,
      macros: { protein: 3, carbs: 3, fat: 0, fiber: 2, sugar: 1 },
      micros: {
        sodium: 58, potassium: 631, calcium: 158, iron: 1.8, magnesium: 25, zinc: 0.3, phosphorus: 49,
        vitA: 361, vitC: 44, vitD: 0, vitE: 0.2, vitK: 58, vitB6: 0.3, vitB12: 0, folate: 70,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.1, omega6: 0.04
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['asian', 'calcium-source', 'stir-fry', 'mild-flavor']
    },
    watercress: {
      id: 'watercress',
      name: 'Watercress',
      category: 'vegetables',
      subcategory: 'leafy-greens',
      serving: { amount: 34, unit: 'g', description: '1 cup' },
      calories: 4,
      macros: { protein: 1, carbs: 0, fat: 0, fiber: 0, sugar: 0 },
      micros: {
        sodium: 14, potassium: 112, calcium: 41, iron: 0.1, magnesium: 7, zinc: 0, phosphorus: 20,
        vitA: 54, vitC: 15, vitD: 0, vitE: 0.3, vitK: 85, vitB6: 0.04, vitB12: 0, folate: 3,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['nutrient-dense', 'peppery', 'superfood', 'salad-green']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE CRUCIFEROUS
    // ═══════════════════════════════════════════════════════════════════════════
    broccolini: {
      id: 'broccolini',
      name: 'Broccolini (steamed)',
      category: 'vegetables',
      subcategory: 'cruciferous',
      serving: { amount: 134, unit: 'g', description: '1 bunch' },
      calories: 40,
      macros: { protein: 4, carbs: 7, fat: 0, fiber: 3, sugar: 2 },
      micros: {
        sodium: 35, potassium: 350, calcium: 60, iron: 1.0, magnesium: 28, zinc: 0.5, phosphorus: 80,
        vitA: 120, vitC: 75, vitD: 0, vitE: 1.5, vitK: 175, vitB6: 0.2, vitB12: 0, folate: 100,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.1, omega6: 0.03
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['broccoli-hybrid', 'tender-stems', 'elegant', 'vitamin-c']
    },
    kohlrabi: {
      id: 'kohlrabi',
      name: 'Kohlrabi (raw)',
      category: 'vegetables',
      subcategory: 'cruciferous',
      serving: { amount: 135, unit: 'g', description: '1 cup sliced' },
      calories: 36,
      macros: { protein: 2, carbs: 8, fat: 0, fiber: 5, sugar: 4 },
      micros: {
        sodium: 27, potassium: 473, calcium: 32, iron: 0.5, magnesium: 26, zinc: 0.1, phosphorus: 62,
        vitA: 3, vitC: 84, vitD: 0, vitE: 0.6, vitK: 0.1, vitB6: 0.2, vitB12: 0, folate: 22,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.02
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['german', 'crunchy', 'mild-cabbage', 'vitamin-c']
    },
    radish: {
      id: 'radish',
      name: 'Radishes',
      category: 'vegetables',
      subcategory: 'cruciferous',
      serving: { amount: 116, unit: 'g', description: '1 cup sliced' },
      calories: 19,
      macros: { protein: 1, carbs: 4, fat: 0, fiber: 2, sugar: 2 },
      micros: {
        sodium: 45, potassium: 270, calcium: 29, iron: 0.4, magnesium: 12, zinc: 0.3, phosphorus: 23,
        vitA: 0, vitC: 17, vitD: 0, vitE: 0, vitK: 1.5, vitB6: 0.1, vitB12: 0, folate: 29,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.04, omega6: 0.02
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['peppery', 'crunchy', 'salad-topping', 'low-calorie']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ROOT VEGETABLES
    // ═══════════════════════════════════════════════════════════════════════════
    beets: {
      id: 'beets',
      name: 'Beets (cooked)',
      category: 'vegetables',
      subcategory: 'root',
      serving: { amount: 170, unit: 'g', description: '1 cup sliced' },
      calories: 75,
      macros: { protein: 3, carbs: 17, fat: 0, fiber: 3, sugar: 13 },
      micros: {
        sodium: 131, potassium: 518, calcium: 27, iron: 1.3, magnesium: 39, zinc: 0.6, phosphorus: 65,
        vitA: 3, vitC: 6, vitD: 0, vitE: 0.1, vitK: 0.3, vitB6: 0.1, vitB12: 0, folate: 148,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 64,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['nitrates', 'endurance', 'blood-flow', 'earthy']
    },
    turnips: {
      id: 'turnips',
      name: 'Turnips (cooked)',
      category: 'vegetables',
      subcategory: 'root',
      serving: { amount: 156, unit: 'g', description: '1 cup cubed' },
      calories: 34,
      macros: { protein: 1, carbs: 8, fat: 0, fiber: 3, sugar: 5 },
      micros: {
        sodium: 25, potassium: 276, calcium: 51, iron: 0.3, magnesium: 14, zinc: 0.2, phosphorus: 41,
        vitA: 0, vitC: 18, vitD: 0, vitE: 0.04, vitK: 0.2, vitB6: 0.1, vitB12: 0, folate: 14,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.04, omega6: 0.01
      },
      glycemicIndex: 62,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['low-carb-potato', 'mashed', 'roasted', 'affordable']
    },
    parsnips: {
      id: 'parsnips',
      name: 'Parsnips (cooked)',
      category: 'vegetables',
      subcategory: 'root',
      serving: { amount: 156, unit: 'g', description: '1 cup sliced' },
      calories: 111,
      macros: { protein: 2, carbs: 27, fat: 0, fiber: 6, sugar: 7 },
      micros: {
        sodium: 16, potassium: 573, calcium: 58, iron: 0.9, magnesium: 45, zinc: 0.4, phosphorus: 108,
        vitA: 0, vitC: 20, vitD: 0, vitE: 2.0, vitK: 36, vitB6: 0.1, vitB12: 0, folate: 90,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.2
      },
      glycemicIndex: 52,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['sweet', 'roasted', 'winter-veggie', 'fiber-rich']
    },
    rutabaga: {
      id: 'rutabaga',
      name: 'Rutabaga (cooked)',
      category: 'vegetables',
      subcategory: 'root',
      serving: { amount: 170, unit: 'g', description: '1 cup cubed' },
      calories: 66,
      macros: { protein: 2, carbs: 15, fat: 0, fiber: 3, sugar: 10 },
      micros: {
        sodium: 34, potassium: 554, calcium: 82, iron: 0.9, magnesium: 39, zinc: 0.5, phosphorus: 97,
        vitA: 0, vitC: 32, vitD: 0, vitE: 0.4, vitK: 0.5, vitB6: 0.2, vitB12: 0, folate: 26,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.05
      },
      glycemicIndex: 72,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['swedish-turnip', 'mashed', 'low-carb-sub', 'vitamin-c']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE SQUASH
    // ═══════════════════════════════════════════════════════════════════════════
    acornSquash: {
      id: 'acornSquash',
      name: 'Acorn Squash (baked)',
      category: 'vegetables',
      subcategory: 'squash',
      serving: { amount: 205, unit: 'g', description: '1 cup cubed' },
      calories: 115,
      macros: { protein: 2, carbs: 30, fat: 0, fiber: 9, sugar: 0 },
      micros: {
        sodium: 8, potassium: 896, calcium: 90, iron: 1.9, magnesium: 88, zinc: 0.3, phosphorus: 92,
        vitA: 18, vitC: 22, vitD: 0, vitE: 0.3, vitK: 2.0, vitB6: 0.4, vitB12: 0, folate: 39,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.08
      },
      glycemicIndex: 75,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['fall', 'potassium-rich', 'stuffable', 'fiber-rich']
    },
    spaghettiSquash: {
      id: 'spaghettiSquash',
      name: 'Spaghetti Squash (cooked)',
      category: 'vegetables',
      subcategory: 'squash',
      serving: { amount: 155, unit: 'g', description: '1 cup' },
      calories: 42,
      macros: { protein: 1, carbs: 10, fat: 0, fiber: 2, sugar: 4 },
      micros: {
        sodium: 28, potassium: 181, calcium: 33, iron: 0.5, magnesium: 17, zinc: 0.3, phosphorus: 22,
        vitA: 9, vitC: 5, vitD: 0, vitE: 0.1, vitK: 1.3, vitB6: 0.2, vitB12: 0, folate: 12,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 42,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['pasta-substitute', 'low-carb', 'versatile', 'stringy-texture']
    },
    yellowSquash: {
      id: 'yellowSquash',
      name: 'Yellow Squash (cooked)',
      category: 'vegetables',
      subcategory: 'squash',
      serving: { amount: 180, unit: 'g', description: '1 cup sliced' },
      calories: 36,
      macros: { protein: 2, carbs: 8, fat: 1, fiber: 3, sugar: 4 },
      micros: {
        sodium: 2, potassium: 455, calcium: 43, iron: 0.6, magnesium: 43, zinc: 0.6, phosphorus: 70,
        vitA: 10, vitC: 19, vitD: 0, vitE: 0.2, vitK: 5.3, vitB6: 0.2, vitB12: 0, folate: 46,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.06, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['summer-squash', 'grillable', 'mild', 'versatile']
    },
    delicataSquash: {
      id: 'delicataSquash',
      name: 'Delicata Squash (roasted)',
      category: 'vegetables',
      subcategory: 'squash',
      serving: { amount: 116, unit: 'g', description: '1/2 squash' },
      calories: 40,
      macros: { protein: 1, carbs: 10, fat: 0, fiber: 2, sugar: 3 },
      micros: {
        sodium: 5, potassium: 300, calcium: 30, iron: 0.5, magnesium: 20, zinc: 0.2, phosphorus: 35,
        vitA: 500, vitC: 15, vitD: 0, vitE: 0.2, vitK: 1.5, vitB6: 0.1, vitB12: 0, folate: 20,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.05
      },
      glycemicIndex: 50,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['edible-skin', 'sweet', 'fall', 'stripe-pattern']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE PEPPERS
    // ═══════════════════════════════════════════════════════════════════════════
    bellPepperGreen: {
      id: 'bellPepperGreen',
      name: 'Green Bell Pepper',
      category: 'vegetables',
      subcategory: 'peppers',
      serving: { amount: 149, unit: 'g', description: '1 medium' },
      calories: 30,
      macros: { protein: 1, carbs: 7, fat: 0, fiber: 2, sugar: 4 },
      micros: {
        sodium: 4, potassium: 261, calcium: 15, iron: 0.5, magnesium: 15, zinc: 0.2, phosphorus: 30,
        vitA: 18, vitC: 120, vitD: 0, vitE: 0.6, vitK: 11, vitB6: 0.3, vitB12: 0, folate: 15,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.05
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['crunchy', 'vitamin-c', 'cooking-staple', 'slightly-bitter']
    },
    bellPepperYellow: {
      id: 'bellPepperYellow',
      name: 'Yellow Bell Pepper',
      category: 'vegetables',
      subcategory: 'peppers',
      serving: { amount: 186, unit: 'g', description: '1 large' },
      calories: 50,
      macros: { protein: 2, carbs: 12, fat: 0, fiber: 2, sugar: 8 },
      micros: {
        sodium: 4, potassium: 394, calcium: 20, iron: 0.9, magnesium: 22, zinc: 0.3, phosphorus: 45,
        vitA: 19, vitC: 340, vitD: 0, vitE: 3.0, vitK: 8, vitB6: 0.3, vitB12: 0, folate: 50,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['vitamin-c-rich', 'sweet', 'colorful', 'raw-snacking']
    },
    jalapeno: {
      id: 'jalapeno',
      name: 'Jalapeño Pepper',
      category: 'vegetables',
      subcategory: 'peppers',
      serving: { amount: 45, unit: 'g', description: '3 peppers' },
      calories: 12,
      macros: { protein: 1, carbs: 3, fat: 0, fiber: 1, sugar: 2 },
      micros: {
        sodium: 1, potassium: 104, calcium: 5, iron: 0.1, magnesium: 7, zinc: 0.2, phosphorus: 12,
        vitA: 25, vitC: 50, vitD: 0, vitE: 0.2, vitK: 5.5, vitB6: 0.2, vitB12: 0, folate: 12,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.03
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['spicy', 'capsaicin', 'metabolism-boost', 'mexican']
    },
    poblano: {
      id: 'poblano',
      name: 'Poblano Pepper',
      category: 'vegetables',
      subcategory: 'peppers',
      serving: { amount: 75, unit: 'g', description: '1 pepper' },
      calories: 15,
      macros: { protein: 1, carbs: 3, fat: 0, fiber: 1, sugar: 2 },
      micros: {
        sodium: 2, potassium: 150, calcium: 8, iron: 0.3, magnesium: 10, zinc: 0.2, phosphorus: 18,
        vitA: 35, vitC: 85, vitD: 0, vitE: 0.3, vitK: 6, vitB6: 0.2, vitB12: 0, folate: 15,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.04
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['mild-heat', 'stuffable', 'mexican', 'roasted']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MORE MUSHROOMS
    // ═══════════════════════════════════════════════════════════════════════════
    portobello: {
      id: 'portobello',
      name: 'Portobello Mushroom (grilled)',
      category: 'vegetables',
      subcategory: 'mushrooms',
      serving: { amount: 121, unit: 'g', description: '1 cap' },
      calories: 35,
      macros: { protein: 4, carbs: 5, fat: 1, fiber: 2, sugar: 3 },
      micros: {
        sodium: 12, potassium: 521, calcium: 6, iron: 0.6, magnesium: 14, zinc: 0.8, phosphorus: 135,
        vitA: 0, vitC: 0, vitD: 0.3, vitE: 0.1, vitK: 0, vitB6: 0.2, vitB12: 0.1, folate: 28,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0, omega6: 0.2
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['meat-substitute', 'grillable', 'umami', 'burger-bun-alternative']
    },
    shiitake: {
      id: 'shiitake',
      name: 'Shiitake Mushrooms (cooked)',
      category: 'vegetables',
      subcategory: 'mushrooms',
      serving: { amount: 145, unit: 'g', description: '1 cup sliced' },
      calories: 81,
      macros: { protein: 2, carbs: 21, fat: 0, fiber: 3, sugar: 5 },
      micros: {
        sodium: 6, potassium: 170, calcium: 3, iron: 0.4, magnesium: 20, zinc: 1.9, phosphorus: 42,
        vitA: 0, vitC: 0, vitD: 0.6, vitE: 0, vitK: 0, vitB6: 0.2, vitB12: 0, folate: 30,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['asian', 'immune-boost', 'beta-glucan', 'earthy']
    },
    cremini: {
      id: 'cremini',
      name: 'Cremini Mushrooms (raw)',
      category: 'vegetables',
      subcategory: 'mushrooms',
      serving: { amount: 96, unit: 'g', description: '1 cup sliced' },
      calories: 24,
      macros: { protein: 3, carbs: 4, fat: 0, fiber: 1, sugar: 2 },
      micros: {
        sodium: 6, potassium: 448, calcium: 4, iron: 0.4, magnesium: 12, zinc: 0.7, phosphorus: 108,
        vitA: 0, vitC: 0, vitD: 0.1, vitE: 0, vitK: 0, vitB6: 0.1, vitB12: 0.1, folate: 20,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['baby-bella', 'versatile', 'deeper-flavor', 'selenium']
    },
    oysterMushroom: {
      id: 'oysterMushroom',
      name: 'Oyster Mushrooms (raw)',
      category: 'vegetables',
      subcategory: 'mushrooms',
      serving: { amount: 86, unit: 'g', description: '1 cup' },
      calories: 28,
      macros: { protein: 3, carbs: 5, fat: 0, fiber: 2, sugar: 1 },
      micros: {
        sodium: 15, potassium: 301, calcium: 3, iron: 1.1, magnesium: 15, zinc: 0.6, phosphorus: 103,
        vitA: 0, vitC: 0, vitD: 0.3, vitE: 0, vitK: 0, vitB6: 0.1, vitB12: 0, folate: 33,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['delicate', 'asian', 'iron-source', 'fan-shaped']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ALLIUMS
    // ═══════════════════════════════════════════════════════════════════════════
    shallots: {
      id: 'shallots',
      name: 'Shallots',
      category: 'vegetables',
      subcategory: 'alliums',
      serving: { amount: 60, unit: 'g', description: '2 small' },
      calories: 43,
      macros: { protein: 2, carbs: 10, fat: 0, fiber: 2, sugar: 5 },
      micros: {
        sodium: 7, potassium: 201, calcium: 22, iron: 0.7, magnesium: 13, zinc: 0.2, phosphorus: 36,
        vitA: 0, vitC: 5, vitD: 0, vitE: 0, vitK: 0.5, vitB6: 0.2, vitB12: 0, folate: 20,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.05
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['french', 'mild-onion', 'gourmet', 'sauces']
    },
    leeks: {
      id: 'leeks',
      name: 'Leeks (cooked)',
      category: 'vegetables',
      subcategory: 'alliums',
      serving: { amount: 124, unit: 'g', description: '1 cup chopped' },
      calories: 38,
      macros: { protein: 1, carbs: 9, fat: 0, fiber: 1, sugar: 3 },
      micros: {
        sodium: 12, potassium: 108, calcium: 37, iron: 1.4, magnesium: 17, zinc: 0.1, phosphorus: 22,
        vitA: 49, vitC: 5, vitD: 0, vitE: 0.5, vitK: 30, vitB6: 0.1, vitB12: 0, folate: 30,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.03
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['mild', 'soup-base', 'french', 'prebiotic']
    },
    scallions: {
      id: 'scallions',
      name: 'Green Onions (scallions)',
      category: 'vegetables',
      subcategory: 'alliums',
      serving: { amount: 100, unit: 'g', description: '1 cup chopped' },
      calories: 32,
      macros: { protein: 2, carbs: 7, fat: 0, fiber: 3, sugar: 2 },
      micros: {
        sodium: 16, potassium: 276, calcium: 72, iron: 1.5, magnesium: 20, zinc: 0.4, phosphorus: 37,
        vitA: 100, vitC: 19, vitD: 0, vitE: 0.5, vitK: 207, vitB6: 0.1, vitB12: 0, folate: 64,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['garnish', 'vitamin-k', 'asian', 'fresh-flavor']
    },
    chives: {
      id: 'chives',
      name: 'Chives',
      category: 'vegetables',
      subcategory: 'alliums',
      serving: { amount: 3, unit: 'g', description: '1 tbsp' },
      calories: 1,
      macros: { protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0 },
      micros: {
        sodium: 0, potassium: 9, calcium: 3, iron: 0.1, magnesium: 1, zinc: 0, phosphorus: 2,
        vitA: 4, vitC: 2, vitD: 0, vitE: 0.01, vitK: 6.4, vitB6: 0, vitB12: 0, folate: 3,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['herb', 'garnish', 'mild-onion', 'vitamin-k']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // FERMENTED VEGETABLES
    // ═══════════════════════════════════════════════════════════════════════════
    sauerkraut: {
      id: 'sauerkraut',
      name: 'Sauerkraut (unpasteurized)',
      category: 'vegetables',
      subcategory: 'fermented',
      serving: { amount: 142, unit: 'g', description: '1 cup' },
      calories: 27,
      macros: { protein: 1, carbs: 6, fat: 0, fiber: 4, sugar: 2 },
      micros: {
        sodium: 939, potassium: 241, calcium: 43, iron: 2.1, magnesium: 18, zinc: 0.3, phosphorus: 30,
        vitA: 1, vitC: 21, vitD: 0, vitE: 0.2, vitK: 13, vitB6: 0.2, vitB12: 0, folate: 34,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.05
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['probiotic', 'german', 'gut-health', 'vitamin-c']
    },
    kimchi: {
      id: 'kimchi',
      name: 'Kimchi',
      category: 'vegetables',
      subcategory: 'fermented',
      serving: { amount: 150, unit: 'g', description: '1 cup' },
      calories: 23,
      macros: { protein: 2, carbs: 4, fat: 0, fiber: 2, sugar: 2 },
      micros: {
        sodium: 747, potassium: 225, calcium: 45, iron: 0.5, magnesium: 17, zinc: 0.2, phosphorus: 36,
        vitA: 38, vitC: 20, vitD: 0, vitE: 0.3, vitK: 57, vitB6: 0.3, vitB12: 0, folate: 62,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.05
      },
      glycemicIndex: 15,
      allergens: ['shellfish'],
      dietTypes: ['regular', 'paleo', 'glutenfree', 'keto'],
      tags: ['korean', 'probiotic', 'spicy', 'gut-health']
    },
    pickles: {
      id: 'pickles',
      name: 'Dill Pickles',
      category: 'vegetables',
      subcategory: 'fermented',
      serving: { amount: 135, unit: 'g', description: '1 large' },
      calories: 16,
      macros: { protein: 1, carbs: 4, fat: 0, fiber: 1, sugar: 2 },
      micros: {
        sodium: 1208, potassium: 192, calcium: 68, iron: 0.6, magnesium: 14, zinc: 0.2, phosphorus: 31,
        vitA: 9, vitC: 5, vitD: 0, vitE: 0.1, vitK: 54, vitB6: 0.02, vitB12: 0, folate: 2,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.03
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['probiotic', 'crunchy', 'electrolytes', 'low-calorie']
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // INTERNATIONAL VEGETABLES
    // ═══════════════════════════════════════════════════════════════════════════
    eggplant: {
      id: 'eggplant',
      name: 'Eggplant (grilled)',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 160, unit: 'g', description: '1 cup cubed' },
      calories: 56,
      macros: { protein: 1, carbs: 13, fat: 0, fiber: 5, sugar: 6 },
      micros: {
        sodium: 3, potassium: 307, calcium: 12, iron: 0.4, magnesium: 18, zinc: 0.2, phosphorus: 30,
        vitA: 3, vitC: 3, vitD: 0, vitE: 0.5, vitK: 4.5, vitB6: 0.1, vitB12: 0, folate: 28,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['mediterranean', 'meaty-texture', 'versatile', 'nasunin']
    },
    artichoke: {
      id: 'artichoke',
      name: 'Artichoke Hearts (canned)',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 120, unit: 'g', description: '1/2 cup' },
      calories: 45,
      macros: { protein: 3, carbs: 9, fat: 0, fiber: 5, sugar: 1 },
      micros: {
        sodium: 310, potassium: 350, calcium: 40, iron: 1.2, magnesium: 50, zinc: 0.5, phosphorus: 80,
        vitA: 1, vitC: 7, vitD: 0, vitE: 0.3, vitK: 15, vitB6: 0.1, vitB12: 0, folate: 87,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.05
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['mediterranean', 'liver-health', 'fiber-rich', 'antioxidants']
    },
    jicama: {
      id: 'jicama',
      name: 'Jicama (raw)',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 130, unit: 'g', description: '1 cup sliced' },
      calories: 49,
      macros: { protein: 1, carbs: 11, fat: 0, fiber: 6, sugar: 2 },
      micros: {
        sodium: 5, potassium: 195, calcium: 16, iron: 0.8, magnesium: 16, zinc: 0.2, phosphorus: 23,
        vitA: 0, vitC: 26, vitD: 0, vitE: 0.6, vitK: 0.5, vitB6: 0.05, vitB12: 0, folate: 16,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.04
      },
      glycemicIndex: 32,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['mexican', 'crunchy', 'prebiotic', 'refreshing']
    },
    okra: {
      id: 'okra',
      name: 'Okra (cooked)',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 160, unit: 'g', description: '1 cup sliced' },
      calories: 36,
      macros: { protein: 3, carbs: 7, fat: 0, fiber: 4, sugar: 2 },
      micros: {
        sodium: 10, potassium: 216, calcium: 123, iron: 0.5, magnesium: 57, zinc: 0.7, phosphorus: 63,
        vitA: 36, vitC: 26, vitD: 0, vitE: 0.4, vitK: 64, vitB6: 0.3, vitB12: 0, folate: 74,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.04, omega6: 0.07
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['southern', 'african', 'fiber-rich', 'thickening']
    },
    radicchio: {
      id: 'radicchio',
      name: 'Radicchio',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 40, unit: 'g', description: '1 cup shredded' },
      calories: 9,
      macros: { protein: 1, carbs: 2, fat: 0, fiber: 0, sugar: 0 },
      micros: {
        sodium: 9, potassium: 121, calcium: 8, iron: 0.2, magnesium: 5, zinc: 0.2, phosphorus: 16,
        vitA: 1, vitC: 3, vitD: 0, vitE: 0.9, vitK: 102, vitB6: 0.02, vitB12: 0, folate: 24,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.01
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['italian', 'bitter', 'vitamin-k', 'salad-green']
    },
    fennel: {
      id: 'fennel',
      name: 'Fennel Bulb (raw)',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 234, unit: 'g', description: '1 bulb' },
      calories: 73,
      macros: { protein: 3, carbs: 17, fat: 0, fiber: 7, sugar: 0 },
      micros: {
        sodium: 122, potassium: 969, calcium: 115, iron: 1.7, magnesium: 40, zinc: 0.5, phosphorus: 117,
        vitA: 27, vitC: 29, vitD: 0, vitE: 0.3, vitK: 145, vitB6: 0.1, vitB12: 0, folate: 63,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.02, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['licorice-flavor', 'digestive', 'italian', 'crunchy']
    },
    endive: {
      id: 'endive',
      name: 'Belgian Endive',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 50, unit: 'g', description: '1 head' },
      calories: 9,
      macros: { protein: 1, carbs: 2, fat: 0, fiber: 2, sugar: 0 },
      micros: {
        sodium: 11, potassium: 157, calcium: 26, iron: 0.4, magnesium: 8, zinc: 0.4, phosphorus: 14,
        vitA: 57, vitC: 3, vitD: 0, vitE: 0.2, vitK: 116, vitB6: 0.01, vitB12: 0, folate: 71,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['belgian', 'appetizer-boat', 'bitter', 'elegant']
    },
    bambooShoots: {
      id: 'bambooShoots',
      name: 'Bamboo Shoots (canned)',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 131, unit: 'g', description: '1 cup sliced' },
      calories: 25,
      macros: { protein: 2, carbs: 4, fat: 1, fiber: 2, sugar: 2 },
      micros: {
        sodium: 9, potassium: 533, calcium: 14, iron: 0.4, magnesium: 4, zinc: 0.9, phosphorus: 32,
        vitA: 1, vitC: 1, vitD: 0, vitE: 1.0, vitK: 0, vitB6: 0.2, vitB12: 0, folate: 5,
        cholesterol: 0, saturatedFat: 0.1, transFat: 0, omega3: 0.01, omega6: 0.3
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['asian', 'stir-fry', 'crunchy', 'low-calorie']
    },
    waterChestnuts: {
      id: 'waterChestnuts',
      name: 'Water Chestnuts (canned)',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 140, unit: 'g', description: '1 cup sliced' },
      calories: 70,
      macros: { protein: 1, carbs: 17, fat: 0, fiber: 3, sugar: 3 },
      micros: {
        sodium: 14, potassium: 362, calcium: 7, iron: 0.1, magnesium: 14, zinc: 0.7, phosphorus: 39,
        vitA: 0, vitC: 3, vitD: 0, vitE: 1.0, vitK: 0.3, vitB6: 0.2, vitB12: 0, folate: 11,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.01, omega6: 0.05
      },
      glycemicIndex: 35,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree'],
      tags: ['asian', 'crunchy', 'stir-fry', 'sweet']
    },
    snowPeas: {
      id: 'snowPeas',
      name: 'Snow Peas (raw)',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 98, unit: 'g', description: '1 cup' },
      calories: 41,
      macros: { protein: 3, carbs: 7, fat: 0, fiber: 2, sugar: 4 },
      micros: {
        sodium: 4, potassium: 196, calcium: 42, iron: 2.0, magnesium: 24, zinc: 0.3, phosphorus: 52,
        vitA: 22, vitC: 59, vitD: 0, vitE: 0.4, vitK: 25, vitB6: 0.2, vitB12: 0, folate: 42,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['asian', 'crunchy', 'stir-fry', 'sweet-peas']
    },
    sugarSnapPeas: {
      id: 'sugarSnapPeas',
      name: 'Sugar Snap Peas',
      category: 'vegetables',
      subcategory: 'international',
      serving: { amount: 98, unit: 'g', description: '1 cup' },
      calories: 41,
      macros: { protein: 3, carbs: 7, fat: 0, fiber: 2, sugar: 4 },
      micros: {
        sodium: 4, potassium: 196, calcium: 42, iron: 2.0, magnesium: 24, zinc: 0.3, phosphorus: 52,
        vitA: 22, vitC: 59, vitD: 0, vitE: 0.4, vitK: 25, vitB6: 0.2, vitB12: 0, folate: 42,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0.03, omega6: 0.1
      },
      glycemicIndex: 15,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['snackable', 'sweet', 'edible-pod', 'crunchy']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DAIRY - Milk, Cheese, Yogurt
  // ═══════════════════════════════════════════════════════════════════════════
  dairy: {
    // Milk
    wholeMilk: {
      id: 'wholeMilk',
      name: 'Whole Milk',
      category: 'dairy',
      subcategory: 'milk',
      serving: { amount: 244, unit: 'ml', description: '1 cup' },
      calories: 149,
      macros: { protein: 8, carbs: 12, fat: 8, fiber: 0, sugar: 12 },
      micros: {
        sodium: 105, potassium: 322, calcium: 276, iron: 0.1, magnesium: 24, zinc: 1.0, phosphorus: 205,
        vitA: 68, vitC: 0, vitD: 3.2, vitE: 0.1, vitK: 0.5, vitB6: 0.1, vitB12: 1.1, folate: 12,
        cholesterol: 24, saturatedFat: 4.6, transFat: 0, omega3: 0.18, omega6: 0.3
      },
      glycemicIndex: 27,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['complete-protein', 'calcium-rich', 'vitamin-d', 'post-workout']
    },
    skimMilk: {
      id: 'skimMilk',
      name: 'Skim Milk (fat-free)',
      category: 'dairy',
      subcategory: 'milk',
      serving: { amount: 244, unit: 'ml', description: '1 cup' },
      calories: 83,
      macros: { protein: 8, carbs: 12, fat: 0, fiber: 0, sugar: 12 },
      micros: {
        sodium: 103, potassium: 382, calcium: 299, iron: 0.1, magnesium: 27, zinc: 1.0, phosphorus: 247,
        vitA: 149, vitC: 0, vitD: 2.9, vitE: 0, vitK: 0, vitB6: 0.1, vitB12: 1.3, folate: 12,
        cholesterol: 5, saturatedFat: 0.1, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 32,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['low-fat', 'high-protein', 'calcium-rich', 'fortified']
    },
    almondMilk: {
      id: 'almondMilk',
      name: 'Almond Milk (unsweetened)',
      category: 'dairy',
      subcategory: 'milk-alternatives',
      serving: { amount: 240, unit: 'ml', description: '1 cup' },
      calories: 30,
      macros: { protein: 1, carbs: 1, fat: 3, fiber: 0, sugar: 0 },
      micros: {
        sodium: 150, potassium: 160, calcium: 450, iron: 0.7, magnesium: 17, zinc: 0.4, phosphorus: 24,
        vitA: 100, vitC: 0, vitD: 2.5, vitE: 6.3, vitK: 0, vitB6: 0, vitB12: 0, folate: 0,
        cholesterol: 0, saturatedFat: 0, transFat: 0, omega3: 0, omega6: 0.8
      },
      glycemicIndex: 25,
      allergens: ['tree nuts'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['dairy-free', 'low-calorie', 'fortified', 'plant-based']
    },
    oatMilk: {
      id: 'oatMilk',
      name: 'Oat Milk',
      category: 'dairy',
      subcategory: 'milk-alternatives',
      serving: { amount: 240, unit: 'ml', description: '1 cup' },
      calories: 120,
      macros: { protein: 3, carbs: 16, fat: 5, fiber: 2, sugar: 7 },
      micros: {
        sodium: 100, potassium: 390, calcium: 350, iron: 0.5, magnesium: 40, zinc: 0.5, phosphorus: 270,
        vitA: 100, vitC: 0, vitD: 3.6, vitE: 0, vitK: 0, vitB6: 0.1, vitB12: 1.2, folate: 0,
        cholesterol: 0, saturatedFat: 0.5, transFat: 0, omega3: 0, omega6: 1.5
      },
      glycemicIndex: 69,
      allergens: ['gluten'],
      dietTypes: ['regular', 'vegetarian', 'vegan'],
      tags: ['dairy-free', 'creamy', 'barista-favorite', 'beta-glucan']
    },
    coconutMilk: {
      id: 'coconutMilk',
      name: 'Coconut Milk (carton)',
      category: 'dairy',
      subcategory: 'milk-alternatives',
      serving: { amount: 240, unit: 'ml', description: '1 cup' },
      calories: 45,
      macros: { protein: 0, carbs: 2, fat: 4, fiber: 0, sugar: 0 },
      micros: {
        sodium: 45, potassium: 46, calcium: 450, iron: 0, magnesium: 0, zinc: 0, phosphorus: 0,
        vitA: 100, vitC: 0, vitD: 2.5, vitE: 0, vitK: 0, vitB6: 0, vitB12: 1.2, folate: 0,
        cholesterol: 0, saturatedFat: 4, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 45,
      allergens: [],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'paleo', 'glutenfree', 'keto'],
      tags: ['dairy-free', 'tropical', 'keto-friendly', 'fortified']
    },
    soyMilk: {
      id: 'soyMilk',
      name: 'Soy Milk (unsweetened)',
      category: 'dairy',
      subcategory: 'milk-alternatives',
      serving: { amount: 240, unit: 'ml', description: '1 cup' },
      calories: 80,
      macros: { protein: 7, carbs: 4, fat: 4, fiber: 1, sugar: 1 },
      micros: {
        sodium: 90, potassium: 298, calcium: 301, iron: 1.0, magnesium: 36, zinc: 0.6, phosphorus: 125,
        vitA: 100, vitC: 0, vitD: 3.0, vitE: 0.2, vitK: 3.0, vitB6: 0.1, vitB12: 3.0, folate: 22,
        cholesterol: 0, saturatedFat: 0.5, transFat: 0, omega3: 0.4, omega6: 2.2
      },
      glycemicIndex: 34,
      allergens: ['soy'],
      dietTypes: ['regular', 'vegetarian', 'vegan', 'glutenfree'],
      tags: ['complete-protein', 'dairy-free', 'fortified', 'plant-based']
    },

    // Cheese
    cheddar: {
      id: 'cheddar',
      name: 'Cheddar Cheese',
      category: 'dairy',
      subcategory: 'cheese',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 113,
      macros: { protein: 7, carbs: 0, fat: 9, fiber: 0, sugar: 0 },
      micros: {
        sodium: 174, potassium: 28, calcium: 200, iron: 0.2, magnesium: 8, zinc: 0.9, phosphorus: 145,
        vitA: 75, vitC: 0, vitD: 0.1, vitE: 0.1, vitK: 0.8, vitB6: 0.02, vitB12: 0.2, folate: 5,
        cholesterol: 28, saturatedFat: 5.7, transFat: 0.3, omega3: 0.1, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['aged', 'versatile', 'calcium-rich', 'sharp-flavor']
    },
    mozzarella: {
      id: 'mozzarella',
      name: 'Mozzarella Cheese (part-skim)',
      category: 'dairy',
      subcategory: 'cheese',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 72,
      macros: { protein: 7, carbs: 1, fat: 5, fiber: 0, sugar: 0 },
      micros: {
        sodium: 175, potassium: 27, calcium: 222, iron: 0.1, magnesium: 7, zinc: 0.9, phosphorus: 131,
        vitA: 51, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.4, vitB6: 0.02, vitB12: 0.6, folate: 2,
        cholesterol: 18, saturatedFat: 2.9, transFat: 0.1, omega3: 0.05, omega6: 0.1
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['mild', 'melty', 'pizza-cheese', 'italian']
    },
    parmesan: {
      id: 'parmesan',
      name: 'Parmesan Cheese (grated)',
      category: 'dairy',
      subcategory: 'cheese',
      serving: { amount: 10, unit: 'g', description: '2 tbsp' },
      calories: 42,
      macros: { protein: 4, carbs: 0, fat: 3, fiber: 0, sugar: 0 },
      micros: {
        sodium: 153, potassium: 10, calcium: 111, iron: 0.1, magnesium: 5, zinc: 0.3, phosphorus: 69,
        vitA: 18, vitC: 0, vitD: 0, vitE: 0, vitK: 0.2, vitB6: 0.01, vitB12: 0.1, folate: 1,
        cholesterol: 8, saturatedFat: 1.7, transFat: 0.1, omega3: 0.02, omega6: 0.05
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['aged', 'umami', 'italian', 'hard-cheese']
    },
    feta: {
      id: 'feta',
      name: 'Feta Cheese',
      category: 'dairy',
      subcategory: 'cheese',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 75,
      macros: { protein: 4, carbs: 1, fat: 6, fiber: 0, sugar: 1 },
      micros: {
        sodium: 316, potassium: 18, calcium: 140, iron: 0.2, magnesium: 5, zinc: 0.8, phosphorus: 96,
        vitA: 35, vitC: 0, vitD: 0.1, vitE: 0.1, vitK: 0.5, vitB6: 0.1, vitB12: 0.5, folate: 9,
        cholesterol: 25, saturatedFat: 4.2, transFat: 0, omega3: 0.1, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'mediterranean', 'glutenfree', 'keto'],
      tags: ['greek', 'tangy', 'crumbly', 'salad-topping']
    },
    cottageCheese: {
      id: 'cottageCheese',
      name: 'Cottage Cheese (2% fat)',
      category: 'dairy',
      subcategory: 'cheese',
      serving: { amount: 226, unit: 'g', description: '1 cup' },
      calories: 183,
      macros: { protein: 24, carbs: 10, fat: 5, fiber: 0, sugar: 9 },
      micros: {
        sodium: 706, potassium: 264, calcium: 206, iron: 0.3, magnesium: 23, zinc: 0.9, phosphorus: 340,
        vitA: 50, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.3, vitB6: 0.2, vitB12: 1.4, folate: 27,
        cholesterol: 23, saturatedFat: 2.8, transFat: 0.1, omega3: 0.05, omega6: 0.1
      },
      glycemicIndex: 10,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['high-protein', 'casein', 'slow-digesting', 'bodybuilding-staple']
    },
    swissCheese: {
      id: 'swissCheese',
      name: 'Swiss Cheese',
      category: 'dairy',
      subcategory: 'cheese',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 108,
      macros: { protein: 8, carbs: 2, fat: 8, fiber: 0, sugar: 0 },
      micros: {
        sodium: 54, potassium: 23, calcium: 224, iron: 0.1, magnesium: 11, zinc: 1.2, phosphorus: 161,
        vitA: 68, vitC: 0, vitD: 0.3, vitE: 0.1, vitK: 0.6, vitB6: 0.02, vitB12: 0.9, folate: 2,
        cholesterol: 26, saturatedFat: 5.0, transFat: 0.2, omega3: 0.1, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['holey', 'nutty', 'low-sodium', 'melty']
    },
    gouda: {
      id: 'gouda',
      name: 'Gouda Cheese',
      category: 'dairy',
      subcategory: 'cheese',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 101,
      macros: { protein: 7, carbs: 1, fat: 8, fiber: 0, sugar: 0 },
      micros: {
        sodium: 232, potassium: 34, calcium: 198, iron: 0.1, magnesium: 8, zinc: 1.1, phosphorus: 155,
        vitA: 51, vitC: 0, vitD: 0.1, vitE: 0.1, vitK: 0.7, vitB6: 0.02, vitB12: 0.4, folate: 6,
        cholesterol: 32, saturatedFat: 5.0, transFat: 0.2, omega3: 0.1, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['dutch', 'creamy', 'semi-hard', 'smoky-varieties']
    },
    brie: {
      id: 'brie',
      name: 'Brie Cheese',
      category: 'dairy',
      subcategory: 'cheese',
      serving: { amount: 28, unit: 'g', description: '1 oz' },
      calories: 95,
      macros: { protein: 6, carbs: 0, fat: 8, fiber: 0, sugar: 0 },
      micros: {
        sodium: 178, potassium: 43, calcium: 52, iron: 0.1, magnesium: 6, zinc: 0.7, phosphorus: 53,
        vitA: 56, vitC: 0, vitD: 0.1, vitE: 0.1, vitK: 0.7, vitB6: 0.1, vitB12: 0.5, folate: 18,
        cholesterol: 28, saturatedFat: 5.0, transFat: 0.2, omega3: 0.1, omega6: 0.2
      },
      glycemicIndex: 0,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree', 'keto'],
      tags: ['french', 'soft', 'creamy', 'edible-rind']
    },

    // Yogurt
    greekYogurt: {
      id: 'greekYogurt',
      name: 'Greek Yogurt (plain, 0% fat)',
      category: 'dairy',
      subcategory: 'yogurt',
      serving: { amount: 170, unit: 'g', description: '3/4 cup' },
      calories: 100,
      macros: { protein: 17, carbs: 6, fat: 1, fiber: 0, sugar: 4 },
      micros: {
        sodium: 65, potassium: 240, calcium: 187, iron: 0.1, magnesium: 19, zinc: 1.1, phosphorus: 229,
        vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0.3, vitB6: 0.1, vitB12: 1.3, folate: 15,
        cholesterol: 10, saturatedFat: 0.3, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 11,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['high-protein', 'probiotics', 'versatile', 'bodybuilding-staple']
    },
    yogurtWhole: {
      id: 'yogurtWhole',
      name: 'Yogurt (whole milk, plain)',
      category: 'dairy',
      subcategory: 'yogurt',
      serving: { amount: 245, unit: 'g', description: '1 cup' },
      calories: 149,
      macros: { protein: 9, carbs: 11, fat: 8, fiber: 0, sugar: 11 },
      micros: {
        sodium: 113, potassium: 380, calcium: 296, iron: 0.1, magnesium: 29, zinc: 1.5, phosphorus: 233,
        vitA: 66, vitC: 1, vitD: 0.1, vitE: 0.1, vitK: 0.5, vitB6: 0.1, vitB12: 0.9, folate: 17,
        cholesterol: 32, saturatedFat: 5.1, transFat: 0.2, omega3: 0.1, omega6: 0.2
      },
      glycemicIndex: 36,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['probiotics', 'creamy', 'breakfast', 'gut-health']
    },
    skyr: {
      id: 'skyr',
      name: 'Skyr (Icelandic yogurt)',
      category: 'dairy',
      subcategory: 'yogurt',
      serving: { amount: 170, unit: 'g', description: '3/4 cup' },
      calories: 110,
      macros: { protein: 19, carbs: 7, fat: 0, fiber: 0, sugar: 4 },
      micros: {
        sodium: 70, potassium: 280, calcium: 200, iron: 0.1, magnesium: 20, zinc: 1.2, phosphorus: 240,
        vitA: 0, vitC: 0, vitD: 1.5, vitE: 0, vitK: 0.3, vitB6: 0.1, vitB12: 1.5, folate: 15,
        cholesterol: 5, saturatedFat: 0.2, transFat: 0, omega3: 0, omega6: 0
      },
      glycemicIndex: 10,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['icelandic', 'ultra-high-protein', 'thick', 'mild']
    },
    kefir: {
      id: 'kefir',
      name: 'Kefir (plain)',
      category: 'dairy',
      subcategory: 'yogurt',
      serving: { amount: 243, unit: 'ml', description: '1 cup' },
      calories: 104,
      macros: { protein: 9, carbs: 12, fat: 2, fiber: 0, sugar: 12 },
      micros: {
        sodium: 104, potassium: 390, calcium: 316, iron: 0.1, magnesium: 30, zinc: 1.2, phosphorus: 255,
        vitA: 57, vitC: 0, vitD: 2.5, vitE: 0.1, vitK: 0.8, vitB6: 0.1, vitB12: 0.4, folate: 28,
        cholesterol: 10, saturatedFat: 1.3, transFat: 0.1, omega3: 0.03, omega6: 0.1
      },
      glycemicIndex: 35,
      allergens: ['dairy'],
      dietTypes: ['regular', 'vegetarian', 'glutenfree'],
      tags: ['probiotic-powerhouse', 'drinkable', 'fermented', 'gut-health']
    }
  }
};

// Helper function to get all foods as flat array
function getAllFoods() {
  const allFoods = [];
  for (const category of Object.values(FOOD_DATABASE)) {
    for (const food of Object.values(category)) {
      allFoods.push(food);
    }
  }
  return allFoods;
}

// Helper function to search foods
function searchFoods(query, filters = {}) {
  const allFoods = getAllFoods();
  const queryLower = query.toLowerCase();

  return allFoods.filter(food => {
    // Text search
    const matchesQuery = !query ||
      food.name.toLowerCase().includes(queryLower) ||
      food.tags.some(tag => tag.includes(queryLower)) ||
      food.subcategory.includes(queryLower);

    // Diet filter
    const matchesDiet = !filters.diet ||
      food.dietTypes.includes(filters.diet);

    // Category filter
    const matchesCategory = !filters.category ||
      food.category === filters.category;

    // Allergen filter (exclude foods with these allergens)
    const noAllergens = !filters.excludeAllergens ||
      !food.allergens.some(a => filters.excludeAllergens.includes(a));

    return matchesQuery && matchesDiet && matchesCategory && noAllergens;
  });
}

// Helper to get food by ID
function getFoodById(id) {
  for (const category of Object.values(FOOD_DATABASE)) {
    if (category[id]) return category[id];
  }
  return null;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FOOD_DATABASE, getAllFoods, searchFoods, getFoodById };
}
