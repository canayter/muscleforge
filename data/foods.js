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
