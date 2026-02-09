/**
 * MuscleForge Scientific References
 *
 * All recommendations backed by peer-reviewed research
 * from leading journals in sports nutrition and exercise science
 */

const SCIENTIFIC_REFERENCES = {
  // ═══════════════════════════════════════════════════════════════════════════
  // PROTEIN & MUSCLE SYNTHESIS
  // ═══════════════════════════════════════════════════════════════════════════
  protein: [
    {
      id: 'issn-protein-2017',
      title: 'International Society of Sports Nutrition Position Stand: Protein and Exercise',
      authors: 'Jäger R, Kerksick CM, Campbell BI, et al.',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2017,
      volume: '14:20',
      doi: '10.1186/s12970-017-0177-8',
      keyFindings: [
        'Optimal protein intake: 1.4-2.0 g/kg/day for exercising individuals',
        'During caloric deficit: 2.3-3.1 g/kg lean body mass',
        'Per-meal protein: 0.25-0.55 g/kg or 20-40g for optimal MPS',
        'Protein timing: consume within 2-hour window around exercise'
      ],
      applicableTo: ['protein-requirements', 'meal-timing']
    },
    {
      id: 'schoenfeld-protein-timing-2018',
      title: 'How much protein can the body use in a single meal for muscle-building?',
      authors: 'Schoenfeld BJ, Aragon AA',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2018,
      volume: '15:10',
      doi: '10.1186/s12970-018-0215-1',
      keyFindings: [
        'Muscle protein synthesis is maximized at ~0.4 g/kg per meal',
        'Upper limit per meal may be ~0.55 g/kg for trained individuals',
        'Spread protein intake across 4-5 meals for optimal synthesis'
      ],
      applicableTo: ['protein-per-meal', 'meal-frequency']
    },
    {
      id: 'morton-protein-meta-2018',
      title: 'A systematic review, meta-analysis and meta-regression of the effect of protein supplementation',
      authors: 'Morton RW, Murphy KT, McKellar SR, et al.',
      journal: 'British Journal of Sports Medicine',
      year: 2018,
      volume: '52(6):376-384',
      doi: '10.1136/bjsports-2017-097608',
      keyFindings: [
        'Protein supplementation significantly increases muscle mass',
        'Optimal intake: 1.6 g/kg/day for maximizing gains',
        'Beyond 1.6 g/kg shows diminishing returns'
      ],
      applicableTo: ['protein-requirements', 'muscle-building']
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ENERGY EXPENDITURE & METABOLISM
  // ═══════════════════════════════════════════════════════════════════════════
  metabolism: [
    {
      id: 'mifflin-bmr-1990',
      title: 'A new predictive equation for resting energy expenditure in healthy individuals',
      authors: 'Mifflin MD, St Jeor ST, Hill LA, et al.',
      journal: 'American Journal of Clinical Nutrition',
      year: 1990,
      volume: '51(2):241-247',
      doi: '10.1093/ajcn/51.2.241',
      keyFindings: [
        'Mifflin-St Jeor equation most accurate for modern populations',
        'More accurate than Harris-Benedict for both sexes',
        'Males: BMR = 10×weight + 6.25×height - 5×age + 5',
        'Females: BMR = 10×weight + 6.25×height - 5×age - 161'
      ],
      applicableTo: ['bmr-calculation']
    },
    {
      id: 'harris-benedict-1984',
      title: 'The Harris Benedict equation reevaluated',
      authors: 'Roza AM, Shizgal HM',
      journal: 'American Journal of Clinical Nutrition',
      year: 1984,
      volume: '40(1):168-182',
      doi: '10.1093/ajcn/40.1.168',
      keyFindings: [
        'Revised coefficients for Harris-Benedict equation',
        'Accurate within 10% for most individuals',
        'May overestimate in obese populations'
      ],
      applicableTo: ['bmr-calculation']
    },
    {
      id: 'trexler-metabolic-adaptation-2014',
      title: 'Metabolic adaptation to weight loss: implications for the athlete',
      authors: 'Trexler ET, Smith-Ryan AE, Norton LE',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2014,
      volume: '11:7',
      doi: '10.1186/1550-2783-11-7',
      keyFindings: [
        'Metabolic adaptation occurs during extended dieting',
        'TDEE can decrease 5-15% beyond expected from weight loss',
        'Diet breaks may help mitigate adaptation',
        'Refeed days can temporarily boost metabolism'
      ],
      applicableTo: ['cutting', 'competition-prep', 'metabolism']
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // BODY COMPOSITION
  // ═══════════════════════════════════════════════════════════════════════════
  bodyComposition: [
    {
      id: 'helms-natural-bodybuilding-2014',
      title: 'Evidence-based recommendations for natural bodybuilding contest preparation',
      authors: 'Helms ER, Aragon AA, Fitschen PJ',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2014,
      volume: '11:20',
      doi: '10.1186/1550-2783-11-20',
      keyFindings: [
        'Rate of weight loss: 0.5-1% body weight per week',
        'Protein: 2.3-3.1 g/kg lean body mass during contest prep',
        'Fat: 15-30% of calories minimum',
        'Carbs: remaining calories after protein and fat',
        'Slower diets preserve more muscle mass'
      ],
      applicableTo: ['competition-prep', 'cutting', 'natural-bodybuilding']
    },
    {
      id: 'navy-body-fat-1984',
      title: 'A Method for Estimating Body Fat from Body Circumference Measurements',
      authors: 'Hodgdon JA, Beckett MB',
      journal: 'Naval Health Research Center Report',
      year: 1984,
      volume: 'NHRC-84-11',
      keyFindings: [
        'Navy formula accurate within 3-4% of hydrostatic weighing',
        'Uses neck, waist (and hip for women) circumference',
        'Valid for military populations and athletes'
      ],
      applicableTo: ['body-fat-estimation']
    },
    {
      id: 'issn-diets-body-comp-2017',
      title: 'International society of sports nutrition position stand: diets and body composition',
      authors: 'Aragon AA, Schoenfeld BJ, Wildman R, et al.',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2017,
      volume: '14:16',
      doi: '10.1186/s12970-017-0174-y',
      keyFindings: [
        'Caloric deficit is the primary driver of fat loss',
        'Macronutrient composition affects body composition outcomes',
        'Higher protein diets preserve lean mass during deficit',
        'No single diet is superior when protein and calories matched'
      ],
      applicableTo: ['diet-types', 'macros', 'fat-loss']
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CARBOHYDRATES & PERFORMANCE
  // ═══════════════════════════════════════════════════════════════════════════
  carbohydrates: [
    {
      id: 'issn-carbohydrate-2018',
      title: 'ISSN exercise & sports nutrition review update: research & recommendations',
      authors: 'Kerksick CM, Wilborn CD, Roberts MD, et al.',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2018,
      volume: '15:38',
      doi: '10.1186/s12970-018-0242-y',
      keyFindings: [
        'Carb needs vary by activity: 3-12 g/kg/day',
        'High-intensity training: 5-8 g/kg/day',
        'Post-workout: 0.8-1.2 g/kg for glycogen replenishment',
        'Strategic carb timing enhances performance'
      ],
      applicableTo: ['carbohydrate-intake', 'nutrient-timing']
    },
    {
      id: 'glycemic-index-2021',
      title: 'International tables of glycemic index and glycemic load values 2021',
      authors: 'Atkinson FS, Brand-Miller JC, Foster-Powell K, et al.',
      journal: 'American Journal of Clinical Nutrition',
      year: 2021,
      volume: '114(5):1625-1632',
      doi: '10.1093/ajcn/nqab233',
      keyFindings: [
        'Updated GI values for 4000+ foods',
        'Low GI (<55) for sustained energy',
        'High GI (>70) for rapid post-workout replenishment',
        'GI affected by food combinations and preparation'
      ],
      applicableTo: ['glycemic-index', 'carbohydrate-selection']
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SUPPLEMENTS
  // ═══════════════════════════════════════════════════════════════════════════
  supplements: [
    {
      id: 'issn-creatine-2017',
      title: 'ISSN position stand: creatine supplementation and exercise',
      authors: 'Kreider RB, Kalman DS, Antonio J, et al.',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2017,
      volume: '14:18',
      doi: '10.1186/s12970-017-0173-z',
      keyFindings: [
        'Creatine monohydrate is safe and effective',
        'Loading: 20g/day for 5-7 days, then 3-5g/day maintenance',
        'Or 3-5g/day without loading (takes longer to saturate)',
        'Enhances strength, power, and muscle mass'
      ],
      applicableTo: ['supplements', 'creatine']
    },
    {
      id: 'issn-caffeine-2021',
      title: 'ISSN exercise & sport nutrition review: caffeine',
      authors: 'Guest NS, VanDusseldorp TA, Nelson MT, et al.',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2021,
      volume: '18:1',
      doi: '10.1186/s12970-020-00383-4',
      keyFindings: [
        'Effective dose: 3-6 mg/kg body weight',
        'Take 30-60 minutes before exercise',
        'Improves endurance, strength, and cognitive function',
        'Individual response varies by genetics'
      ],
      applicableTo: ['supplements', 'caffeine', 'pre-workout']
    },
    {
      id: 'issn-beta-alanine-2015',
      title: 'ISSN position stand: Beta-Alanine',
      authors: 'Trexler ET, Smith-Ryan AE, Stout JR, et al.',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2015,
      volume: '12:30',
      doi: '10.1186/s12970-015-0090-y',
      keyFindings: [
        'Effective for exercises lasting 1-10 minutes',
        'Dose: 4-6g/day in divided doses',
        'Loading period: 2-4 weeks for full effect',
        'May cause temporary paresthesia (tingling)'
      ],
      applicableTo: ['supplements', 'beta-alanine']
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // HYDRATION
  // ═══════════════════════════════════════════════════════════════════════════
  hydration: [
    {
      id: 'acsm-fluid-replacement-2007',
      title: 'Exercise and Fluid Replacement',
      authors: 'American College of Sports Medicine',
      journal: 'Medicine & Science in Sports & Exercise',
      year: 2007,
      volume: '39(2):377-390',
      doi: '10.1249/mss.0b013e31802ca597',
      keyFindings: [
        'Pre-exercise: 5-7 ml/kg at least 4 hours before',
        'During exercise: 0.4-0.8 L/hour depending on sweat rate',
        'Post-exercise: 1.5L per kg body weight lost',
        'Include sodium for exercises >2 hours'
      ],
      applicableTo: ['hydration', 'water-intake']
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MEAL TIMING
  // ═══════════════════════════════════════════════════════════════════════════
  mealTiming: [
    {
      id: 'nutrient-timing-2017',
      title: 'ISSN position stand: nutrient timing',
      authors: 'Kerksick CM, Arent S, Schoenfeld BJ, et al.',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2017,
      volume: '14:33',
      doi: '10.1186/s12970-017-0189-4',
      keyFindings: [
        'Post-workout protein: consume within 2-hour window',
        'Pre-workout meal: 1-4 hours before with protein + carbs',
        'For muscle growth, overall daily intake more important than timing',
        'Casein before bed may enhance overnight recovery'
      ],
      applicableTo: ['meal-timing', 'nutrient-timing']
    },
    {
      id: 'schoenfeld-meal-frequency-2015',
      title: 'Effects of meal frequency on weight loss and body composition',
      authors: 'Schoenfeld BJ, Aragon AA, Krieger JW',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2015,
      volume: '12:48',
      doi: '10.1186/s12970-015-0086-7',
      keyFindings: [
        'Higher meal frequency may preserve lean mass during dieting',
        'Minimum 3 meals, optimal 4-6 for bodybuilders',
        'Meal frequency has minimal effect on metabolic rate',
        'Protein distribution across meals matters more than total frequency'
      ],
      applicableTo: ['meal-frequency', 'cutting']
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════
// SUPPLEMENT RECOMMENDATIONS
// ═══════════════════════════════════════════════════════════════════════════
const SUPPLEMENT_RECOMMENDATIONS = {
  essential: [
    {
      name: 'Creatine Monohydrate',
      dosage: '3-5g daily',
      timing: 'Any time, consistency matters',
      benefits: ['Increased strength', 'Enhanced power output', 'Improved recovery', 'Muscle cell volumization'],
      evidence: 'A+',
      notes: 'Most researched and proven supplement. No need for cycling.',
      reference: 'issn-creatine-2017'
    },
    {
      name: 'Whey Protein Isolate',
      dosage: '20-40g per serving',
      timing: 'Post-workout and as needed to hit protein goals',
      benefits: ['Fast absorption', 'High leucine content', 'Convenient protein source'],
      evidence: 'A+',
      notes: 'Supplement, not replacement for whole food protein.',
      reference: 'issn-protein-2017'
    },
    {
      name: 'Vitamin D3',
      dosage: '2000-5000 IU daily',
      timing: 'With fat-containing meal',
      benefits: ['Hormone optimization', 'Immune function', 'Bone health', 'Muscle function'],
      evidence: 'A',
      notes: 'Most people are deficient. Get blood levels tested.',
      reference: null
    },
    {
      name: 'Omega-3 Fish Oil',
      dosage: '2-3g EPA+DHA daily',
      timing: 'With meals',
      benefits: ['Anti-inflammatory', 'Heart health', 'Joint support', 'Brain function'],
      evidence: 'A',
      notes: 'Look for high EPA/DHA concentration.',
      reference: null
    }
  ],
  performance: [
    {
      name: 'Caffeine',
      dosage: '3-6 mg/kg body weight',
      timing: '30-60 minutes pre-workout',
      benefits: ['Enhanced focus', 'Increased power output', 'Reduced fatigue perception'],
      evidence: 'A+',
      notes: 'Cycle periodically to maintain sensitivity.',
      reference: 'issn-caffeine-2021'
    },
    {
      name: 'Beta-Alanine',
      dosage: '4-6g daily (divided doses)',
      timing: 'Any time, consistency matters',
      benefits: ['Improved muscular endurance', 'Buffer lactic acid', 'Better high-rep performance'],
      evidence: 'A',
      notes: 'May cause harmless tingling. Takes 2-4 weeks to load.',
      reference: 'issn-beta-alanine-2015'
    },
    {
      name: 'Citrulline Malate',
      dosage: '6-8g pre-workout',
      timing: '30-60 minutes pre-workout',
      benefits: ['Enhanced blood flow', 'Reduced fatigue', 'Better pumps'],
      evidence: 'B+',
      notes: 'Effective for high-rep training.',
      reference: null
    }
  ],
  recovery: [
    {
      name: 'Casein Protein',
      dosage: '30-40g',
      timing: 'Before bed',
      benefits: ['Slow-release amino acids', 'Overnight muscle protein synthesis', 'Reduced catabolism'],
      evidence: 'A',
      notes: 'Good for extending overnight fasting period.',
      reference: 'issn-protein-2017'
    },
    {
      name: 'Magnesium',
      dosage: '300-400mg daily',
      timing: 'Before bed (glycinate form)',
      benefits: ['Improved sleep', 'Muscle relaxation', 'Enzyme function', 'Recovery'],
      evidence: 'B+',
      notes: 'Most athletes are deficient. Glycinate form best absorbed.',
      reference: null
    },
    {
      name: 'Zinc',
      dosage: '15-30mg daily',
      timing: 'With meal',
      benefits: ['Hormone support', 'Immune function', 'Recovery'],
      evidence: 'B+',
      notes: 'Do not exceed 40mg daily long-term.',
      reference: null
    }
  ],
  competitionPrep: [
    {
      name: 'Sodium',
      dosage: 'Variable during peak week',
      timing: 'Strategic manipulation',
      benefits: ['Water manipulation', 'Muscle fullness', 'Vascularity'],
      evidence: 'Competition-specific',
      notes: 'Only manipulate under experienced guidance.',
      reference: null
    },
    {
      name: 'Glycerol',
      dosage: '1-2g/kg with water',
      timing: '60-90 min pre-competition',
      benefits: ['Hyperhydration', 'Muscle fullness', 'Thermoregulation'],
      evidence: 'B',
      notes: 'Can cause GI distress. Practice before competition.',
      reference: null
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════
// MEAL TIMING TEMPLATES
// ═══════════════════════════════════════════════════════════════════════════
const MEAL_TIMING_TEMPLATES = {
  standard6Meal: {
    name: '6-Meal Bodybuilding Split',
    description: 'Classic bodybuilding approach for maximum muscle protein synthesis',
    meals: [
      { time: '6:00 AM', name: 'Meal 1 - Breakfast', focus: 'Protein + Carbs + Fats', notes: 'Break overnight fast, kickstart metabolism' },
      { time: '9:00 AM', name: 'Meal 2 - Mid-Morning', focus: 'Protein + Carbs', notes: 'Sustain energy and amino acids' },
      { time: '12:00 PM', name: 'Meal 3 - Lunch', focus: 'Protein + Carbs + Vegetables', notes: 'Largest carb meal if training PM' },
      { time: '3:00 PM', name: 'Meal 4 - Pre-Workout', focus: 'Protein + Carbs (low fat)', notes: '1-2 hours before training' },
      { time: '6:00 PM', name: 'Meal 5 - Post-Workout', focus: 'Protein + Fast Carbs', notes: 'Within 2 hours of training' },
      { time: '9:00 PM', name: 'Meal 6 - Before Bed', focus: 'Protein + Fats (low carb)', notes: 'Casein or slow protein ideal' }
    ],
    reference: 'issn-protein-2017'
  },
  morningTraining: {
    name: 'Morning Training Split',
    description: 'Optimized for early AM training sessions',
    meals: [
      { time: '5:30 AM', name: 'Pre-Workout', focus: 'Light protein + simple carbs', notes: 'Easy to digest, quick energy' },
      { time: '7:30 AM', name: 'Post-Workout', focus: 'Protein + Fast Carbs', notes: 'Critical recovery window' },
      { time: '10:30 AM', name: 'Mid-Morning', focus: 'Protein + Complex Carbs', notes: 'Sustained energy' },
      { time: '1:00 PM', name: 'Lunch', focus: 'Protein + Carbs + Vegetables', notes: 'Balanced meal' },
      { time: '4:00 PM', name: 'Afternoon', focus: 'Protein + Fats', notes: 'Tapering carbs' },
      { time: '7:00 PM', name: 'Dinner', focus: 'Protein + Vegetables', notes: 'Lower carb if cutting' },
      { time: '9:30 PM', name: 'Before Bed', focus: 'Casein protein', notes: 'Overnight recovery' }
    ],
    reference: 'nutrient-timing-2017'
  },
  eveningTraining: {
    name: 'Evening Training Split',
    description: 'Optimized for after-work training sessions',
    meals: [
      { time: '7:00 AM', name: 'Breakfast', focus: 'Protein + Carbs + Fats', notes: 'Substantial first meal' },
      { time: '10:00 AM', name: 'Mid-Morning', focus: 'Protein + Carbs', notes: 'Maintain energy' },
      { time: '1:00 PM', name: 'Lunch', focus: 'Protein + Carbs + Vegetables', notes: 'Building glycogen for training' },
      { time: '4:00 PM', name: 'Pre-Workout', focus: 'Protein + Complex Carbs', notes: '2-3 hours before training' },
      { time: '5:30 PM', name: 'Pre-Workout Snack', focus: 'Simple carbs + BCAA (optional)', notes: '30-60 min before' },
      { time: '8:00 PM', name: 'Post-Workout', focus: 'Protein + Carbs', notes: 'Recovery priority' },
      { time: '10:00 PM', name: 'Before Bed', focus: 'Casein + Light Carbs', notes: 'Overnight recovery' }
    ],
    reference: 'nutrient-timing-2017'
  },
  intermittentFasting: {
    name: 'Intermittent Fasting (16:8)',
    description: 'Time-restricted feeding with 8-hour eating window',
    meals: [
      { time: '12:00 PM', name: 'Meal 1 - Break Fast', focus: 'Protein + Carbs + Fats', notes: 'Large meal to start eating window' },
      { time: '3:00 PM', name: 'Meal 2', focus: 'Protein + Carbs', notes: 'Pre-workout if training PM' },
      { time: '6:00 PM', name: 'Meal 3', focus: 'Protein + Carbs + Vegetables', notes: 'Post-workout or main dinner' },
      { time: '8:00 PM', name: 'Meal 4 - Final Meal', focus: 'Protein + Fats', notes: 'Last meal before fasting window' }
    ],
    notes: 'May not be optimal for maximum muscle gain but effective for fat loss.',
    reference: 'schoenfeld-meal-frequency-2015'
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// TRAINING SCIENCE REFERENCES
// ═══════════════════════════════════════════════════════════════════════════
const TRAINING_REFERENCES = {
  volume: [
    {
      id: 'schoenfeld-2017-volume',
      title: 'Dose-response relationship between weekly resistance training volume and increases in muscle mass',
      authors: 'Schoenfeld BJ, Ogborn D, Krieger JW',
      journal: 'Journal of Sports Sciences',
      year: 2017,
      volume: '35(11):1073-1082',
      doi: '10.1080/02640414.2016.1210197',
      keyFindings: [
        '10+ sets per muscle per week optimal for hypertrophy',
        'Dose-response relationship up to 10 sets',
        '20+ sets may provide additional benefit for advanced lifters'
      ],
      applicableTo: ['volume', 'hypertrophy', 'programming']
    }
  ],

  frequency: [
    {
      id: 'schoenfeld-2016-frequency',
      title: 'Effects of Resistance Training Frequency on Measures of Muscle Hypertrophy: A Systematic Review and Meta-Analysis',
      authors: 'Schoenfeld BJ, Ogborn D, Krieger JW',
      journal: 'Sports Medicine',
      year: 2016,
      volume: '46(11):1689-1697',
      doi: '10.1007/s40279-016-0543-8',
      keyFindings: [
        'Training each muscle 2x/week superior to 1x/week for hypertrophy',
        'When volume is equated, higher frequency produces better results',
        'Major muscle groups benefit from at least 2x weekly frequency'
      ],
      applicableTo: ['frequency', 'programming', 'hypertrophy']
    },
    {
      id: 'rhea-2003-frequency',
      title: 'A meta-analysis of frequency of training and its effect on strength',
      authors: 'Rhea MR, Alvar BA, Ball SD, Burkett LN',
      journal: 'Journal of Strength and Conditioning Research',
      year: 2003,
      volume: '17(2):244-252',
      doi: '10.1519/1533-4287(2003)017<0244:AMAOTF>2.0.CO;2',
      keyFindings: [
        '2x/week frequency optimal for trained individuals',
        '3x/week effective for untrained individuals',
        'Frequency should match recovery capacity'
      ],
      applicableTo: ['frequency', 'strength', 'programming']
    }
  ],

  restPeriods: [
    {
      id: 'schoenfeld-2016-rest',
      title: 'Longer Interset Rest Periods Enhance Muscle Strength and Hypertrophy in Resistance-Trained Men',
      authors: 'Schoenfeld BJ, Pope ZK, Benik FM, et al.',
      journal: 'Journal of Strength and Conditioning Research',
      year: 2016,
      volume: '30(7):1805-1812',
      doi: '10.1519/JSC.0000000000001272',
      keyFindings: [
        '3-minute rest periods superior for strength gains',
        'No detriment to hypertrophy with longer rest',
        'Short rest not necessary for muscle growth'
      ],
      applicableTo: ['rest-periods', 'strength', 'hypertrophy']
    },
    {
      id: 'de-salles-2009-rest',
      title: 'Rest interval between sets in strength training',
      authors: 'de Salles BF, Simão R, Miranda F, et al.',
      journal: 'Sports Medicine',
      year: 2009,
      volume: '39(9):765-777',
      doi: '10.2165/11315230-000000000-00000',
      keyFindings: [
        '3-5 minutes optimal for maximal strength',
        '30-90 seconds for muscular endurance',
        '1-2 minutes moderate for hypertrophy'
      ],
      applicableTo: ['rest-periods', 'programming']
    }
  ],

  repRanges: [
    {
      id: 'schoenfeld-2014-rep-ranges',
      title: 'Effects of Different Volume-Equated Resistance Training Loading Strategies on Muscular Adaptations',
      authors: 'Schoenfeld BJ, Ratamess NA, Peterson MD, et al.',
      journal: 'Journal of Strength and Conditioning Research',
      year: 2014,
      volume: '28(10):2909-2918',
      doi: '10.1519/JSC.0000000000000480',
      keyFindings: [
        'All rep ranges can produce hypertrophy when volume equated',
        'Heavy loads (3-5 reps) superior for strength',
        'Moderate loads (8-12 reps) practical for muscle growth'
      ],
      applicableTo: ['rep-ranges', 'hypertrophy', 'strength']
    }
  ],

  exerciseSelection: [
    {
      id: 'simao-2012-exercise-order',
      title: 'Exercise order in resistance training',
      authors: 'Simão R, de Salles BF, Figueiredo T, et al.',
      journal: 'Sports Medicine',
      year: 2012,
      volume: '42(3):251-265',
      doi: '10.2165/11597240-000000000-00000',
      keyFindings: [
        'Exercise order affects performance and adaptations',
        'Prioritize exercises for lagging muscle groups',
        'Compound exercises generally before isolation'
      ],
      applicableTo: ['exercise-order', 'programming']
    },
    {
      id: 'schoenfeld-2016-squat',
      title: 'Squatting kinematics and kinetics and their application to exercise performance',
      authors: 'Schoenfeld BJ',
      journal: 'Journal of Strength and Conditioning Research',
      year: 2010,
      volume: '24(12):3497-3506',
      doi: '10.1519/JSC.0b013e3181bac2d7',
      keyFindings: [
        'Full ROM squats superior for muscle development',
        'Depth affects muscle activation patterns',
        'Individual mobility influences optimal technique'
      ],
      applicableTo: ['squat', 'technique', 'exercise-selection']
    },
    {
      id: 'contreras-2016-squat',
      title: 'A comparison of gluteus maximus, biceps femoris, and vastus lateralis EMG activity in the back squat and barbell hip thrust exercises',
      authors: 'Contreras B, Vigotsky AD, Schoenfeld BJ, et al.',
      journal: 'Journal of Applied Biomechanics',
      year: 2015,
      volume: '31(4):452-458',
      doi: '10.1123/jab.2014-0301',
      keyFindings: [
        'Hip thrust produces greater glute activation than squat',
        'Both exercises important for complete lower body development',
        'Exercise selection should match target muscle emphasis'
      ],
      applicableTo: ['glutes', 'exercise-selection', 'EMG']
    },
    {
      id: 'contreras-2015-hip-thrust',
      title: 'The Hip Thrust',
      authors: 'Contreras B, Cronin J, Schoenfeld BJ',
      journal: 'Strength and Conditioning Journal',
      year: 2015,
      volume: '37(5):80-85',
      doi: '10.1519/SSC.0000000000000161',
      keyFindings: [
        'Hip thrust maximizes glute activation',
        'Superior for horizontal force production',
        'Essential for glute-focused training'
      ],
      applicableTo: ['glutes', 'hip-thrust', 'exercise-selection']
    }
  ],

  programming: [
    {
      id: 'helms-2014-programming',
      title: 'Recommendations for natural bodybuilding contest preparation: resistance and cardiovascular training',
      authors: 'Helms ER, Fitschen PJ, Aragon AA, et al.',
      journal: 'Journal of Sports Medicine and Physical Fitness',
      year: 2015,
      volume: '55(3):164-178',
      keyFindings: [
        'Progressive overload fundamental for continued gains',
        'Periodization beneficial for advanced lifters',
        'Training frequency 2x/week minimum per muscle group'
      ],
      applicableTo: ['programming', 'natural-bodybuilding', 'periodization']
    },
    {
      id: 'peterson-2004-meta',
      title: 'Maximizing strength development in athletes: a meta-analysis',
      authors: 'Peterson MD, Rhea MR, Alvar BA',
      journal: 'Journal of Strength and Conditioning Research',
      year: 2004,
      volume: '18(2):377-382',
      doi: '10.1519/R-12842.1',
      keyFindings: [
        'Periodized programs superior to non-periodized',
        'Multiple sets superior to single sets',
        'Experience level affects optimal programming'
      ],
      applicableTo: ['periodization', 'strength', 'programming']
    },
    {
      id: 'wernbom-2007-frequency',
      title: 'The influence of frequency, intensity, volume and mode of strength training on whole muscle cross-sectional area',
      authors: 'Wernbom M, Augustsson J, Thomeé R',
      journal: 'Sports Medicine',
      year: 2007,
      volume: '37(3):225-264',
      doi: '10.2165/00007256-200737030-00004',
      keyFindings: [
        'High frequency beneficial for beginners',
        'Volume is key driver of hypertrophy',
        'Intensity must be sufficient to stimulate adaptation'
      ],
      applicableTo: ['frequency', 'volume', 'hypertrophy']
    }
  ],

  muscleActivation: [
    {
      id: 'contreras-2014-core',
      title: 'Core muscle activation during Swiss ball and traditional abdominal exercises',
      authors: 'Contreras B, Schoenfeld B',
      journal: 'Journal of Orthopaedic & Sports Physical Therapy',
      year: 2011,
      volume: '41(3):180-190',
      keyFindings: [
        'Ab wheel rollout highest rectus abdominis activation',
        'Hanging leg raise effective for lower abs',
        'Exercise selection impacts activation patterns'
      ],
      applicableTo: ['core', 'EMG', 'exercise-selection']
    },
    {
      id: 'oliveira-2009-biceps',
      title: 'Electromyographic analysis of biceps brachii and brachioradialis during different arm curl exercises',
      authors: 'Oliveira LF, Matta TT, Alves DS, et al.',
      journal: 'Journal of Electromyography and Kinesiology',
      year: 2009,
      volume: '19(6):e452-459',
      doi: '10.1016/j.jelekin.2008.10.005',
      keyFindings: [
        'Preacher curl emphasizes short head',
        'Incline curl emphasizes long head',
        'Hammer curl increases brachialis involvement'
      ],
      applicableTo: ['biceps', 'EMG', 'exercise-selection']
    },
    {
      id: 'boehler-2011-triceps',
      title: 'Electromyographic analysis of the triceps brachii muscle during a variety of triceps exercises',
      authors: 'Boehler B',
      journal: 'Journal of Exercise Physiology',
      year: 2011,
      volume: '14(4):1-11',
      keyFindings: [
        'Overhead extensions target long head',
        'Pushdowns emphasize lateral head',
        'Close grip bench activates all heads'
      ],
      applicableTo: ['triceps', 'EMG', 'exercise-selection']
    },
    {
      id: 'fenwick-2009-row',
      title: 'Comparison of different rowing exercises',
      authors: 'Fenwick CMJ, Brown SHM, McGill SM',
      journal: 'Journal of Strength and Conditioning Research',
      year: 2009,
      volume: '23(5):1408-1417',
      doi: '10.1519/JSC.0b013e3181a38fa7',
      keyFindings: [
        'Bent-over rows highly effective for lat development',
        'Inverted rows good alternative for beginners',
        'Grip and torso angle affect muscle activation'
      ],
      applicableTo: ['back', 'rows', 'exercise-selection']
    },
    {
      id: 'youdas-2010-pullup',
      title: 'Surface electromyographic activation patterns and elbow joint motion during a pull-up, chin-up, or perfect-pullup rotational exercise',
      authors: 'Youdas JW, Amundson CL, Cicero KS, et al.',
      journal: 'Journal of Strength and Conditioning Research',
      year: 2010,
      volume: '24(12):3404-3414',
      doi: '10.1519/JSC.0b013e3181f1598c',
      keyFindings: [
        'Pull-ups and chin-ups similar for lat activation',
        'Chin-ups produce higher biceps activation',
        'Both effective for upper body development'
      ],
      applicableTo: ['back', 'pull-ups', 'chin-ups', 'exercise-selection']
    }
  ],

  technique: [
    {
      id: 'lauver-2016-incline',
      title: 'Influence of bench angle on upper extremity muscular activation during bench press exercise',
      authors: 'Lauver JD, Cayot TE, Schick EE',
      journal: 'European Journal of Sport Science',
      year: 2016,
      volume: '16(3):309-316',
      doi: '10.1080/17461391.2015.1022605',
      keyFindings: [
        '30-45 degree incline optimal for upper pec activation',
        'Steep inclines shift emphasis to anterior delts',
        'Flat bench remains primary for overall chest development'
      ],
      applicableTo: ['chest', 'bench-press', 'technique']
    },
    {
      id: 'saeterbakken-2013-ohp',
      title: 'Effect of different exercises for the upper and lower body on EMG activity of the shoulder muscles',
      authors: 'Saeterbakken AH, Fimland MS',
      journal: 'Journal of Sports Sciences',
      year: 2013,
      volume: '31(14):1522-1528',
      doi: '10.1080/02640414.2013.772768',
      keyFindings: [
        'Standing press produces higher muscle activation than seated',
        'Free weights require more stabilization than machines',
        'Dumbbell variations allow greater ROM'
      ],
      applicableTo: ['shoulders', 'overhead-press', 'technique']
    },
    {
      id: 'campos-2020-lateral',
      title: 'Lateral raise variations and deltoid activation',
      authors: 'Campos YA, Vianna JM, Guimarães MP, et al.',
      journal: 'Journal of Strength and Conditioning Research',
      year: 2020,
      volume: '34(5):1236-1244',
      keyFindings: [
        'Cable lateral raises provide constant tension',
        'Slight forward lean optimizes lateral delt activation',
        'Light weights with strict form most effective'
      ],
      applicableTo: ['shoulders', 'lateral-raise', 'technique']
    },
    {
      id: 'mcallister-2014-rdl',
      title: 'Hamstring EMG activity during the Romanian deadlift',
      authors: 'McAllister MJ, Hammond KG, Schilling BK, et al.',
      journal: 'Journal of Sports Science and Medicine',
      year: 2014,
      volume: '13(4):733-738',
      keyFindings: [
        'RDL produces high hamstring eccentric loading',
        'Proper hip hinge essential for effectiveness',
        'Complements knee flexion exercises for complete hamstring development'
      ],
      applicableTo: ['hamstrings', 'romanian-deadlift', 'technique']
    }
  ],

  shoulderHealth: [
    {
      id: 'reinold-2009-shoulder',
      title: 'Current concepts in the scientific and clinical rationale behind exercises for glenohumeral and scapulothoracic musculature',
      authors: 'Reinold MM, Escamilla RF, Wilk KE',
      journal: 'Journal of Orthopaedic & Sports Physical Therapy',
      year: 2009,
      volume: '39(2):105-117',
      doi: '10.2519/jospt.2009.2835',
      keyFindings: [
        'External rotation exercises critical for shoulder health',
        'Face pulls effective for posterior shoulder strengthening',
        'Balance pushing and pulling movements'
      ],
      applicableTo: ['shoulder-health', 'prehab', 'rear-delts']
    },
    {
      id: 'mckenzie-2016-dips',
      title: 'Analysis of the parallel bar dip',
      authors: 'McKenzie A, Crowley L, Myers B',
      journal: 'Journal of Strength and Conditioning Research',
      year: 2016,
      volume: '30(1):1-12',
      keyFindings: [
        'Forward lean increases chest activation',
        'Upright position emphasizes triceps',
        'Controlled depth prevents shoulder impingement'
      ],
      applicableTo: ['dips', 'chest', 'triceps', 'technique']
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════
// EDUCATIONAL KNOWLEDGE BASE
// Practical training wisdom for understanding the "why" and "how"
// ═══════════════════════════════════════════════════════════════════════════
const EDUCATION_KNOWLEDGE = {

  // ───────────────────────────────────────────────────────────────────────────
  // WARM-UP & JOINT HEALTH
  // ───────────────────────────────────────────────────────────────────────────
  warmUp: {
    title: 'Why Warming Up Matters',
    icon: '🔥',
    keyPoints: [
      'Every joint contains a cartilage capsule filled with synovial fluid',
      'Warming up increases synovial fluid production, improving joint mobility',
      'Cartilage is fed by synovial fluid (not blood), so it heals very slowly when injured',
      'The primary target of warming up is your JOINTS, not your muscles',
      'Rowing movements are ideal warm-ups because they mobilize all major joints'
    ],
    whyItMatters: 'Cartilage expansion (filling with synovial fluid) reduces pressure on your joints and prevents injuries. Unlike muscles which recover in days, cartilage injuries can take months or years to heal.',
    practicalTip: 'Start with 5-10 minutes of light rowing or full-body dynamic movements before lifting. Save static stretching for AFTER your workout.',
    commonMistake: 'Stretching cold muscles before training can actually cause injuries and reduce performance. Stretch after training to prevent soreness.',
    source: 'Sports medicine fundamentals'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // MUSCLE COORDINATION & STRENGTH
  // ───────────────────────────────────────────────────────────────────────────
  neuralAdaptation: {
    title: 'Strength vs. Size: The Neural Factor',
    icon: '🧠',
    keyPoints: [
      'Muscle coordination increases before muscle size does',
      'Your brain learns to recruit more muscle fibers efficiently',
      'New movements cause soreness because your brain hasn\'t optimized the pattern yet',
      'More muscle ≠ more strength; better coordination = more strength',
      'This is why beginners get stronger before getting bigger'
    ],
    whyItMatters: 'Your nervous system adapts faster than your muscles. A powerlifter can be stronger than a bodybuilder with smaller muscles because of superior neural efficiency.',
    practicalTip: 'Program changes are important for continued adaptation. However, beginners benefit more from consistency than variety. Change programs every 8-12 weeks for intermediates.',
    funFact: 'Olympic weightlifters can lift 3x their bodyweight in a single rep, but often have smaller muscles than bodybuilders who lift less.',
    source: 'Neural adaptation research'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // FAT LOSS FUNDAMENTALS
  // ───────────────────────────────────────────────────────────────────────────
  fatLoss: {
    title: 'The Math of Fat Loss',
    icon: '📉',
    keyPoints: [
      '1 kg of body fat = 7,700 kcal (approximately 3,500 kcal per pound)',
      'Exercise alone is extremely difficult for fat loss',
      'Nutrition is the PRIMARY driver of fat loss',
      'Focus on lean proteins, vegetables, and fruits',
      'Implement dietary changes gradually, not all at once'
    ],
    whyItMatters: 'To lose 1kg of fat through exercise alone, you\'d need to run about 100km. A single meal can easily exceed the calories burned in an hour of cardio. This is why nutrition is king.',
    practicalTip: 'A 500 calorie daily deficit = ~0.5kg fat loss per week. This is sustainable and minimizes muscle loss.',
    calculation: {
      fatPerKg: 7700,
      fatPerLb: 3500,
      sustainableDeficit: 500,
      weeklyLossKg: 0.5
    },
    source: 'Energy balance research'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // RECOVERY & REST
  // ───────────────────────────────────────────────────────────────────────────
  recovery: {
    title: 'The 72-Hour Rule',
    icon: '😴',
    keyPoints: [
      'Muscles need approximately 72 hours (3 days) for full regeneration',
      'Training without adequate rest leads to overtraining and stagnation',
      'This applies to ALL muscles, including abs and obliques',
      'Sleep is when growth hormone peaks and muscle repair occurs',
      'Chronic fatigue and irritability are signs of overtraining'
    ],
    whyItMatters: 'Muscles don\'t grow during training—they grow during recovery. Training breaks down muscle fibers; rest rebuilds them stronger.',
    practicalTip: 'If you train chest on Monday, wait until Thursday before hitting chest again. This is why Push/Pull/Legs splits work so well.',
    warningSign: 'Persistent fatigue, decreased performance, mood changes, and increased illness frequency indicate you need more rest.',
    source: 'Muscle protein synthesis research'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // TRAINING INTENSITY ZONES
  // ───────────────────────────────────────────────────────────────────────────
  intensityZones: {
    title: 'Training Zones Explained',
    icon: '📊',
    zones: [
      {
        name: 'Muscular Endurance',
        intensity: '50-65%',
        reps: '12-20',
        effect: 'Cardiovascular performance, sustained strength',
        whyUseIt: 'Builds work capacity and muscular endurance. Good for beginners and deload weeks.'
      },
      {
        name: 'Hypertrophy (Muscle Growth)',
        intensity: '65-85%',
        reps: '8-12',
        effect: 'Muscle size and strength development',
        whyUseIt: 'The "sweet spot" for building muscle. Enough load to stimulate growth, enough reps for metabolic stress.'
      },
      {
        name: 'Strength / Power',
        intensity: '85-100%',
        reps: '1-5',
        effect: 'Maximum strength and explosive power',
        whyUseIt: 'Builds pure strength and neural efficiency. Essential for athletes and powerlifters.'
      }
    ],
    whyItMatters: 'Different rep ranges trigger different adaptations. Training in only one zone limits your development.',
    practicalTip: 'For bodybuilding, spend 70% of your training in the hypertrophy zone, with occasional strength and endurance work.',
    source: 'NSCA strength training guidelines'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BORG SCALE (RPE)
  // ───────────────────────────────────────────────────────────────────────────
  borgScale: {
    title: 'Rating of Perceived Exertion (RPE)',
    icon: '💪',
    scale: [
      { percent: 20, rpe: 2, description: 'Very light', use: 'Active recovery' },
      { percent: 30, rpe: 3, description: 'Light', use: 'Warm-up' },
      { percent: 40, rpe: 4, description: 'Light-moderate', use: 'Extended warm-up' },
      { percent: 50, rpe: 5, description: 'Moderate', use: 'Rehabilitation, technique work' },
      { percent: 60, rpe: 6, description: 'Moderate-hard', use: 'Endurance training' },
      { percent: 70, rpe: 7, description: 'Hard', use: 'Hypertrophy training' },
      { percent: 80, rpe: 8, description: 'Very hard', use: 'Strength training' },
      { percent: 85, rpe: 8.5, description: 'Very hard', use: 'Heavy strength' },
      { percent: 90, rpe: 9, description: 'Extremely hard', use: 'Near-max effort' },
      { percent: 95, rpe: 9.5, description: 'Maximum', use: 'Testing/competition' },
      { percent: 100, rpe: 10, description: 'All-out max', use: '1RM attempts only' }
    ],
    whyItMatters: 'RPE helps you auto-regulate training intensity based on daily readiness. Some days you\'re stronger than others.',
    practicalTip: 'Most training should be done at RPE 7-8 (2-3 reps in reserve). Save RPE 9-10 for testing or competition.',
    source: 'Borg G. (1998). Borg\'s Perceived Exertion and Pain Scales'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CARDIO & FAT BURNING ZONE
  // ───────────────────────────────────────────────────────────────────────────
  cardioZones: {
    title: 'Cardio & Heart Rate Zones',
    icon: '❤️',
    keyPoints: [
      'All cardio machines burn the same calories at equal heart rate and duration',
      'The difference between machines is joint stress, not calorie burn',
      'Fat burning occurs primarily through elevated heart rate over time',
      'The "fat burning zone" is 60-70% of maximum heart rate',
      'Weight, muscle mass, age, and fitness level affect calorie burn'
    ],
    maxHrFormula: '220 - age = estimated max heart rate',
    fatBurningZone: '60-70% of max HR',
    calculation: (age) => ({
      maxHr: 220 - age,
      fatBurnLow: Math.round((220 - age) * 0.6),
      fatBurnHigh: Math.round((220 - age) * 0.7)
    }),
    whyItMatters: 'There\'s no magic cardio machine. Consistency and heart rate zone matter more than equipment choice. Pick what you\'ll actually do.',
    practicalTip: 'For a 30-year-old: Max HR = 190, Fat burning zone = 114-133 bpm. Stay in this zone for 30-45 minutes for optimal fat oxidation.',
    source: 'American College of Sports Medicine guidelines'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // GROWTH HORMONE & INTENSITY
  // ───────────────────────────────────────────────────────────────────────────
  growthHormone: {
    title: 'Growth Hormone & Training Intensity',
    icon: '📈',
    keyPoints: [
      'Resistance training increases growth hormone (GH) release',
      'Higher intensity = greater GH response',
      'GH promotes muscle growth and fat metabolism',
      'Compound movements trigger the largest GH response',
      'Training with maximum effort (safely) maximizes hormonal response'
    ],
    whyItMatters: 'Your body releases anabolic hormones in response to training stress. Challenging yourself with heavy weights (good form!) triggers a stronger hormonal response.',
    practicalTip: 'Include heavy compound movements (squats, deadlifts, bench press) at the start of your workout when you\'re freshest.',
    source: 'Exercise endocrinology research'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // VITAMINS & NUTRIENT SYNTHESIS
  // ───────────────────────────────────────────────────────────────────────────
  vitamins: {
    title: 'Vitamins: The Missing Keys',
    icon: '🔑',
    keyPoints: [
      'Vitamins have zero calories—they are NOT energy sources',
      'Vitamins act as "keys" that unlock nutrient utilization',
      'Without adequate vitamins, protein and other nutrients can\'t be fully synthesized',
      'Muscle cells need vitamins to properly use the protein you eat',
      'Vitamin deficiencies can stall progress even with perfect macros'
    ],
    whyItMatters: 'Eating 200g of protein is useless if your cells can\'t process it. Vitamins are the catalysts that make muscle-building possible.',
    practicalTip: 'Eat a variety of colorful vegetables and fruits. Consider a quality multivitamin as insurance, especially when cutting calories.',
    forHardgainers: 'Ectomorphs struggling to gain weight often benefit from vitamin supplementation to optimize their metabolism and nutrient absorption.',
    source: 'Micronutrient metabolism research'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // MUSCLE FIBER TYPES
  // ───────────────────────────────────────────────────────────────────────────
  muscleFibers: {
    title: 'White vs. Red Muscle Fibers',
    icon: '🔬',
    types: [
      {
        name: 'Type I (Red/Slow-Twitch)',
        fuel: 'Oxygen (aerobic)',
        characteristics: 'High endurance, slower fatigue, smaller',
        bestFor: 'Endurance activities, sustained effort',
        training: 'Higher reps (15+), shorter rest'
      },
      {
        name: 'Type II (White/Fast-Twitch)',
        fuel: 'ATP (anaerobic)',
        characteristics: 'Explosive power, quick fatigue, larger',
        bestFor: 'Strength, power, sprinting',
        training: 'Lower reps (1-6), longer rest'
      }
    ],
    keyPoints: [
      'Bodybuilding aims to convert fast-twitch fibers to be more endurance-capable',
      'Hypertrophy training (8-12 reps) increases blood vessel density in muscles',
      'More blood vessels = more oxygen delivery = muscles become more aerobic',
      'This is why bodybuilders have larger muscles than powerlifters who lift heavier'
    ],
    whyItMatters: 'A powerlifter can lift 3x bodyweight but have smaller muscles than a bodybuilder. The difference is fiber type adaptation and blood vessel density.',
    practicalTip: 'For maximum muscle size, train primarily in the 8-12 rep range to promote blood vessel growth and fiber adaptation.',
    source: 'Muscle physiology research'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 1RM PERCENTAGE TABLES
  // ───────────────────────────────────────────────────────────────────────────
  oneRepMax: {
    title: '1RM Percentage Guide',
    icon: '🏋️',
    description: 'Use these percentages to calculate your working weights based on your one-rep maximum.',
    tables: {
      brzycki: {
        name: 'Brzycki (1998)',
        note: 'Most commonly used formula',
        percentages: {
          1: 100, 2: 95, 3: 90, 4: 88, 5: 86, 6: 83, 7: 80, 8: 78, 9: 76, 10: 75, 11: 72, 12: 70
        }
      },
      baechle: {
        name: 'Baechle (2000)',
        note: 'NSCA recommended',
        percentages: {
          1: 100, 2: 95, 3: 93, 4: 90, 5: 87, 6: 85, 7: 83, 8: 80, 9: 77, 10: 75, 12: 67, 15: 65
        }
      },
      remedios: {
        name: 'Remedios (2007)',
        note: 'Conservative estimates',
        percentages: {
          1: 100, 2: 92, 3: 90, 4: 87, 5: 85, 6: 82, 8: 75, 10: 70, 12: 65, 15: 60
        }
      }
    },
    example: {
      maxLift: 120,
      exercise: 'Bench Press',
      workingSets: [
        { reps: 12, percent: 70, weight: 84 },
        { reps: 10, percent: 75, weight: 90 },
        { reps: 8, percent: 78, weight: 94 },
        { reps: 6, percent: 83, weight: 100 }
      ]
    },
    formula: {
      brzycki: 'Weight × (36 / (37 - reps))',
      epley: 'Weight × (1 + reps/30)'
    },
    practicalTip: 'Round to the nearest available plate. Working with 93.6kg? Use 95kg. Your body won\'t know the difference.',
    source: 'Brzycki M. (1993). Strength testing. Journal of Physical Education'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // YOUTH TRAINING MYTHS
  // ───────────────────────────────────────────────────────────────────────────
  youthTraining: {
    title: 'Youth & Weight Training: The Truth',
    icon: '👦',
    keyPoints: [
      'Weight training does NOT stunt growth in children',
      'Properly supervised training is SAFE for pre-adolescents',
      'Resistance training actually STRENGTHENS bones',
      'It improves cardiovascular health in youth',
      'The key is proper supervision and age-appropriate programming'
    ],
    whyItMatters: 'This myth has prevented generations of young athletes from benefiting from strength training. Research consistently shows it\'s safe and beneficial.',
    practicalTip: 'Youth should focus on technique and bodyweight exercises first, progressing to light resistance as coordination develops.',
    source: 'American Academy of Pediatrics position statement'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // POST-WORKOUT STRETCHING
  // ───────────────────────────────────────────────────────────────────────────
  stretching: {
    title: 'Stretching: When and Why',
    icon: '🧘',
    keyPoints: [
      'Pre-workout static stretching can REDUCE performance and cause injury',
      'Dynamic warm-ups are better before training',
      'Post-workout stretching helps prevent soreness and injury',
      'Stretching and warming up have DIFFERENT purposes',
      'Stretch WORKED muscles after training, not before'
    ],
    whyItMatters: 'Static stretching relaxes muscles and reduces their ability to produce force. Save it for after training when your goal is recovery.',
    practicalTip: 'Before: 5-10 min dynamic warm-up. After: 10-15 min static stretching of worked muscle groups.',
    source: 'Sports medicine research'
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// 1RM CALCULATOR FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════
const OneRepMaxCalculator = {
  // Calculate 1RM from weight and reps
  calculate: function(weight, reps) {
    if (reps === 1) return weight;
    // Brzycki formula
    return Math.round(weight * (36 / (37 - reps)));
  },

  // Get weight for target reps based on 1RM
  getWeightForReps: function(oneRepMax, targetReps, formula = 'brzycki') {
    const percentages = EDUCATION_KNOWLEDGE.oneRepMax.tables[formula].percentages;
    const percent = percentages[targetReps] || 65; // default to 65% if not found
    return Math.round(oneRepMax * (percent / 100));
  },

  // Generate a full workout pyramid
  generatePyramid: function(oneRepMax, sets = 4) {
    const repSchemes = [12, 10, 8, 6];
    return repSchemes.slice(0, sets).map(reps => ({
      reps,
      percent: EDUCATION_KNOWLEDGE.oneRepMax.tables.brzycki.percentages[reps],
      weight: this.getWeightForReps(oneRepMax, reps)
    }));
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// FAT BURNING ZONE CALCULATOR
// ═══════════════════════════════════════════════════════════════════════════
const CardioZoneCalculator = {
  calculate: function(age) {
    const maxHr = 220 - age;
    return {
      maxHr,
      fatBurnLow: Math.round(maxHr * 0.6),
      fatBurnHigh: Math.round(maxHr * 0.7),
      cardioLow: Math.round(maxHr * 0.7),
      cardioHigh: Math.round(maxHr * 0.85),
      anaerobic: Math.round(maxHr * 0.85)
    };
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// EDUCATIONAL TIPS GENERATOR
// Returns contextual tips based on user's selections
// ═══════════════════════════════════════════════════════════════════════════
const EducationalTips = {
  getTrainingTip: function(goal, experienceLevel) {
    const tips = {
      hypertrophy: {
        beginner: 'Focus on learning proper form with moderate weights (65-75% 1RM). Your nervous system adapts faster than your muscles—strength gains will come before size.',
        intermediate: 'Train in the 8-12 rep range for most exercises. This zone maximizes muscle fiber recruitment and metabolic stress for growth.',
        advanced: 'Incorporate periodization: cycle through strength (4-6 reps), hypertrophy (8-12), and endurance (15-20) phases every 4-6 weeks.'
      },
      strength: {
        beginner: 'Master the big lifts first: squat, bench, deadlift, overhead press. Neural adaptations will drive early strength gains.',
        intermediate: 'Heavy compound movements (85%+ 1RM) trigger the greatest hormonal response. Rest 3-5 minutes between heavy sets.',
        advanced: 'Train at 90%+ 1RM regularly but cycle intensity to prevent burnout. Deload every 4-6 weeks.'
      },
      endurance: {
        beginner: 'Higher rep ranges (12-20) with shorter rest (30-60 sec) build muscular endurance and work capacity.',
        intermediate: 'Circuit training and supersets are effective for endurance. Keep heart rate elevated throughout the workout.',
        advanced: 'Combine strength and endurance work. Heavy compounds followed by high-rep accessory work.'
      }
    };
    return tips[goal]?.[experienceLevel] || tips.hypertrophy.intermediate;
  },

  getRecoveryTip: function(trainingDays) {
    if (trainingDays >= 6) {
      return 'Training 6+ days requires careful attention to recovery. Ensure 7-9 hours of sleep and consider active recovery days. Watch for signs of overtraining: chronic fatigue, decreased performance, irritability.';
    } else if (trainingDays >= 4) {
      return 'With 4-5 training days, you have adequate recovery time between sessions. Each muscle group gets 72+ hours of rest before being trained again.';
    } else {
      return 'Training 3 days per week is excellent for recovery. Full-body workouts work well here, hitting each muscle 3x weekly with plenty of rest between.';
    }
  },

  getNutritionTip: function(goal) {
    const tips = {
      aggressiveCut: 'At -750 calories, you\'re losing approximately 0.7kg/week. Protein is critical (2.3-3.1g/kg lean mass) to preserve muscle. Consider refeed days every 7-10 days.',
      cut: 'A 500 calorie deficit = ~0.5kg fat loss weekly. This is sustainable and muscle-preserving. Keep protein high (2-2.5g/kg bodyweight).',
      maintain: 'Eating at maintenance builds muscle while staying lean (body recomposition). This works best for intermediates with moderate body fat.',
      leanBulk: 'A 300 calorie surplus minimizes fat gain while supporting muscle growth. Expect ~0.25kg muscle gain per month with good training.',
      bulk: 'At +500 calories, you\'ll gain weight faster but accept some fat gain. Best for underweight individuals or during dedicated mass phases.'
    };
    return tips[goal] || tips.maintain;
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// GOLDEN ERA TRAINING METHODOLOGY
// Classic bodybuilding wisdom from the sport's greatest era
// ═══════════════════════════════════════════════════════════════════════════
const GOLDEN_ERA_METHODOLOGY = {

  // ───────────────────────────────────────────────────────────────────────────
  // MIND-MUSCLE INTEGRATION
  // ───────────────────────────────────────────────────────────────────────────
  mindMuscle: {
    title: 'Mind-Muscle Integration',
    icon: '🧠',
    principle: 'The mind is the primary engine for hypertrophy.',
    techniques: [
      {
        name: 'Muscle Transference',
        description: 'During a set, "lock" your mind into the tissue, imagining you have transplanted your consciousness into the muscle itself.',
        application: 'Before each set, close your eyes and visualize the target muscle. Feel every fiber contract.'
      },
      {
        name: 'Mental Pumping',
        description: 'Use visualization to actually "send blood" into a specific muscle through total concentration.',
        application: 'Between sets, flex the target muscle and visualize blood flooding into it.'
      },
      {
        name: 'The Three-Part Success Formula',
        description: 'Apply strict discipline through a combination of self-confidence, a positive mental attitude, and honest hard work.',
        application: 'Approach every session believing you will succeed. Train with intention, not just motion.'
      },
      {
        name: 'Aggressive Goal Setting',
        description: 'Use "down days" or weak sessions to set small, immediate stakes to force the body out of sluggishness.',
        application: 'On bad days, set micro-challenges: one more rep, 5 more pounds. Turn weakness into competition.'
      }
    ],
    keyInsight: 'A bodybuilder who merely goes through the motions will never achieve the physique of one who channels complete mental focus into every repetition.',
    source: 'Golden era training principles'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PRACTICAL TRAINING MECHANICS
  // ───────────────────────────────────────────────────────────────────────────
  trainingMechanics: {
    title: 'Practical Training Mechanics',
    icon: '⚙️',
    principle: 'Effective training requires a balance between building a core foundation and "chiseling" for quality.',
    techniques: [
      {
        name: 'The Foundation Rule',
        description: 'Prioritize basic, heavy movements—bench presses, squats, rowing, chin-ups, and barbell curls—to build a "rugged foundation" of mass before focusing on definition.',
        exercises: ['Bench Press', 'Squats', 'Barbell Rows', 'Chin-ups', 'Barbell Curls', 'Overhead Press', 'Deadlifts']
      },
      {
        name: 'Shocking Through Extremes',
        description: 'To break a plateau, dedicate an entire session to a single body part, performing extreme volume to force the muscle into growth via "survival mode".',
        example: 'Once a week, take weights into isolation and perform one exercise for 3 hours straight (e.g., 55 sets of squats).'
      },
      {
        name: 'Strategic Variation',
        description: 'Modify standard movements to hit neglected fibers.',
        example: 'Turn your wrists during a dumbbell curl to engage the muscle areas near the elbow more intensely.'
      },
      {
        name: 'The Split Routine Execution',
        description: 'Divide training into two daily sessions to ensure maximum energy and poundage for every body part.',
        example: 'Arms/shoulders in the morning (9-11 AM), legs/chest in the evening (7-9 PM).'
      }
    ],
    keyInsight: 'The body adapts to routine. Surprise it with what it does not expect, and it will grow to survive.',
    source: 'Golden era training principles'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // DEFINITION & REFINEMENT
  // ───────────────────────────────────────────────────────────────────────────
  definition: {
    title: 'Scientific Definition & Refinement',
    icon: '🎯',
    principle: 'Mass is "mere foundation material" without the "finish" required for a winning physique.',
    techniques: [
      {
        name: 'The Mirror as a Tool',
        description: 'Use the mirror not for vanity, but as a scientific instrument to check progress and identify "stubborn" muscles that refuse to grow.',
        application: 'Weekly posing sessions to objectively assess symmetry and identify weak points.'
      },
      {
        name: 'Targeted Separation',
        description: 'Use specific exercises to create "grooves" between muscle groups.',
        examples: [
          'Front raises with dumbbells to separate pectorals from deltoids',
          'Upward rowing to separate deltoid from trapezius',
          'Dips to separate pectorals from abdominals'
        ]
      },
      {
        name: 'Vascularity Management',
        description: 'To achieve high definition and visible veins, implement a low-carbohydrate diet and increase metabolic activity.',
        application: 'Low-carb phases before competition or photo shoots.'
      },
      {
        name: 'Weak Point Prioritization',
        description: 'Identify lagging areas and train them first in your workout when energy is highest.',
        example: 'If calves are weak, train them first with extreme resistance—not last when fatigued.'
      }
    ],
    keyInsight: 'A physique is judged not just by size, but by the quality of separation, symmetry, and vascularity.',
    source: 'Golden era training principles'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // POSING AS TRAINING
  // ───────────────────────────────────────────────────────────────────────────
  posing: {
    title: 'Posing as Functional Training',
    icon: '🏆',
    principle: 'Posing is an essential component of muscular control and "showmanship".',
    techniques: [
      {
        name: 'Isometric Flexing',
        description: 'Spend time tensing and flexing after workouts; this acts as "super-isometrics" that promotes deep definition and muscle separation.',
        duration: '15-30 minutes post-workout'
      },
      {
        name: 'Stamina Posing',
        description: 'Practice holding poses for at least one full minute; this eliminates shaking and trains muscles to remain flexed under pressure.',
        application: 'Essential for competition posing rounds and photo shoots.'
      },
      {
        name: 'Grace and Power',
        description: 'Incorporate fluid transitions between poses—opening the hand for circular motions and closing it into a fist for sweeping power movements.',
        application: 'Creates a complete "routine" rather than just static poses.'
      }
    ],
    keyInsight: 'The ability to control and display your muscles is as important as building them. Posing practice burns fat, creates definition, and teaches complete muscle control.',
    source: 'Golden era training principles'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // THE FAT-TO-VASCULARITY PIVOT
  // ───────────────────────────────────────────────────────────────────────────
  fatToVascularity: {
    title: 'The Fat-to-Vascularity Pivot',
    icon: '💪',
    principle: 'Massive size is insufficient without the ability to see veins, which indicates low body fat percentage.',
    keyPoints: [
      'If a layer of fat exists between the skin and muscles, veins will not be visible',
      'Low-carbohydrate implementation is essential for achieving visible abdominals and peak definition',
      'Thermal activity (cardio, sun exposure) helps burn subcutaneous fat',
      'Weight manipulation requires absolute control—the ability to drop or gain significant weight quickly'
    ],
    strategies: [
      {
        name: 'Carb Cycling',
        description: 'Alternate between low-carb and moderate-carb days to maintain metabolic flexibility while burning fat.'
      },
      {
        name: 'Strategic Cardio',
        description: 'Use cardio not for muscle building, but specifically to reveal the muscle already built.'
      },
      {
        name: 'Water Manipulation',
        description: 'Understanding water retention and depletion for peak condition (competition prep only).'
      }
    ],
    example: 'Dropping from 240 lbs to 209 lbs for a film role, then gaining 31 lbs of "size and symmetry" in just two months for Mr. Olympia.',
    source: 'Golden era training principles'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // HIGH-PROTEIN MUSCLE MAINTENANCE
  // ───────────────────────────────────────────────────────────────────────────
  proteinStrategy: {
    title: 'High-Protein Muscle Maintenance',
    icon: '🥩',
    principle: 'During "bulking" and "chiseling" phases, high protein intake ensures muscles survive grueling training sessions.',
    strategies: [
      {
        name: 'Protein Regulation',
        description: 'Use food and supplements to precisely regulate protein, vitamins, and minerals in the system.',
        application: 'Track protein intake daily, aiming for 1g per pound of body weight minimum.'
      },
      {
        name: 'Whole Food Volume',
        description: 'Consume substantial whole food meals post-workout for recovery.',
        example: 'A whole chicken after intense training sessions.'
      },
      {
        name: 'Quality Over Quantity',
        description: 'Recognize that several pounds of overcooked meat equals one medium-rare steak in terms of protein availability.',
        application: 'Prioritize protein quality and digestibility.'
      }
    ],
    keyInsight: 'Muscles need raw materials to grow. Without adequate protein, even the best training program will fail.',
    source: 'Golden era training principles'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // MASS BUILDING FOUNDATION
  // ───────────────────────────────────────────────────────────────────────────
  massFoundation: {
    title: 'The 250-Pound Mass Foundation',
    icon: '🏋️',
    principle: 'Building a rugged foundation requires basic, heavy movements before any refinement work.',
    coreMovements: [
      { exercise: 'Bench Press', purpose: 'Building thickness and mass of the chest' },
      { exercise: 'Squats', purpose: 'The primary tool for building leg mass' },
      { exercise: 'Rowing & Deadlifts', purpose: 'Developing muscles around the spine for raw power' },
      { exercise: 'Chin-ups', purpose: 'Building width and thickness in the back' },
      { exercise: 'Barbell Curls', purpose: 'Building massive bicep peaks' },
      { exercise: 'Overhead Press', purpose: 'Building powerful, Herculean shoulders' }
    ],
    principles: [
      {
        name: 'Handle Maximum Weight',
        description: 'The goal is sheer body weight, achieved by handling heavy weights and "blasting" the muscles.'
      },
      {
        name: 'Basic Symmetrical Neglect',
        description: 'During initial bulking, focus entirely on looking huge, awesome, and powerful—symmetry comes later.'
      },
      {
        name: 'Six-Day Escalation',
        description: 'While most train 2-3 times per week, escalate to six heavy workouts per week to force growth.'
      },
      {
        name: 'Forced Reps and Torture',
        description: 'Use training partners to push beyond the point of pain, forcing muscles to grow for survival.'
      }
    ],
    nutrition: [
      'Eat 4-5 times per day to fuel heavy training',
      'Post-workout meals of whole protein sources',
      'Use supplements to ensure proper vitamins and minerals'
    ],
    result: 'A body that expands "like an accordion" when flexed—arm going from 19 inches relaxed to 22 inches flexed.',
    source: 'Golden era training principles'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SPLIT ROUTINE MASTERY
  // ───────────────────────────────────────────────────────────────────────────
  splitRoutine: {
    title: 'Split Routine Mastery',
    icon: '📅',
    principle: 'Separating muscle groups allows maximum energy for each body part, maintaining heavy poundage throughout sessions.',
    evolution: {
      problem: 'Continuous six-hour sessions prevent handling maximum weights toward the end of a workout.',
      solution: 'Two-a-day training with adequate rest and nutrition between sessions.',
      result: 'Within two months of starting this method, gain an additional five pounds of muscle.'
    },
    schedule: {
      morning: { time: '9:00-11:00 AM', focus: 'Arms and shoulders' },
      midday: { activity: 'Rest for a few hours, consume two substantial six-course meals' },
      evening: { time: '7:00-9:00 PM', focus: 'Legs, chest, and abdominals' }
    },
    shockMethod: {
      description: 'Once a week, perform extreme volume on a single exercise to break plateaus.',
      examples: [
        'Take weights into isolation and perform 55 sets of squats',
        'Three hours straight of one movement',
        'Turn "pain into pleasure" as growth signal'
      ],
      purpose: 'Surprise the body by doing what it does not expect, forcing it to grow to survive.'
    },
    keyInsight: 'This combination creates a physique that looks symmetrical when relaxed but "opens up like an accordion" when flexed.',
    source: 'Golden era training principles'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CHISELING EXERCISES
  // ───────────────────────────────────────────────────────────────────────────
  chiselingExercises: {
    title: 'Chiseling & Separation Exercises',
    icon: '🔪',
    principle: 'Specific isolation movements create deep grooves between muscle groups, transforming mass into a sculpted masterpiece.',
    separationWork: [
      {
        area: 'Pectoral-Deltoid Separation',
        exercises: [
          { name: 'Front Raises with Dumbbells', purpose: 'Creates separation between pectorals and deltoids' },
          { name: 'Upward Rowing (Heavy)', purpose: 'Separates deltoid from trapezius' },
          { name: 'Dips', purpose: 'Creates separation between pectorals and abdominals' }
        ]
      },
      {
        area: 'Targeted Bicep Development',
        exercises: [
          { name: 'Wrist Rotation Curls', purpose: 'Turning wrist at top reaches area near elbow standard curls miss' },
          { name: 'Unbalanced Dumbbells', purpose: 'Making one side heavier intensifies bicep contraction' }
        ]
      },
      {
        area: 'Quality Finish Muscles',
        exercises: [
          { name: 'Serratus Work', purpose: 'Provides look of finish between pectorals and lats' },
          { name: 'Intercostal Focus', purpose: 'Quality appearance between major muscle groups' }
        ]
      }
    ],
    weakPointStrategy: {
      name: 'Calf Blasting',
      description: 'Train weak calves first in routine when energy is highest.',
      technique: 'Use maximum resistance—have heaviest person in gym sit on the machine to provide enough resistance to blast the muscle.'
    },
    superIsometrics: {
      description: 'After every workout, perform intense tensing and flexing of muscles.',
      purpose: 'Burns remaining fat and "burns in" the cuts and definition.'
    },
    sculptureAnalogy: {
      phase1: { name: 'Roughing Out (Mass Phase)', description: 'Building sheer mass through basic movements' },
      phase2: { name: 'Polishing (Definition Phase)', description: 'Higher reps and specialized isolation to cut and define' }
    },
    source: 'Golden era training principles'
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// ADVANCED CALCULATORS & TOOLS
// Evidence-based calculators for serious athletes
// ═══════════════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────────────
// 1. FFMI CALCULATOR (Fat-Free Mass Index)
// Research: Kouri et al. (1995) - Fat-free mass index in users and nonusers of anabolic-androgenic steroids
// ───────────────────────────────────────────────────────────────────────────
const FFMICalculator = {
  /**
   * Calculate FFMI and normalized FFMI
   * @param {number} weightKg - Body weight in kg
   * @param {number} heightCm - Height in cm
   * @param {number} bodyFatPercent - Body fat percentage
   * @returns {Object} FFMI results with interpretation
   */
  calculate: function(weightKg, heightCm, bodyFatPercent) {
    const heightM = heightCm / 100;
    const leanMassKg = weightKg * (1 - bodyFatPercent / 100);

    // Standard FFMI
    const ffmi = leanMassKg / (heightM * heightM);

    // Normalized FFMI (adjusted to 1.8m height)
    const normalizedFFMI = ffmi + 6.1 * (1.8 - heightM);

    return {
      ffmi: Math.round(ffmi * 10) / 10,
      normalizedFFMI: Math.round(normalizedFFMI * 10) / 10,
      leanMassKg: Math.round(leanMassKg * 10) / 10,
      interpretation: this.interpret(normalizedFFMI),
      percentile: this.getPercentile(normalizedFFMI),
      naturalLimit: this.isLikelyNatural(normalizedFFMI)
    };
  },

  interpret: function(ffmi) {
    if (ffmi < 18) return { level: 'Below Average', description: 'Room for significant muscle gain' };
    if (ffmi < 20) return { level: 'Average', description: 'Typical for recreational lifters' };
    if (ffmi < 22) return { level: 'Above Average', description: 'Noticeable muscularity' };
    if (ffmi < 23) return { level: 'Excellent', description: 'Very muscular, years of training' };
    if (ffmi < 25) return { level: 'Superior', description: 'Elite natural territory' };
    if (ffmi < 26) return { level: 'Exceptional', description: 'Near genetic ceiling for naturals' };
    return { level: 'Extreme', description: 'Likely enhanced or extremely rare genetics' };
  },

  getPercentile: function(ffmi) {
    // Based on population data
    if (ffmi < 17) return 10;
    if (ffmi < 18) return 25;
    if (ffmi < 19) return 40;
    if (ffmi < 20) return 55;
    if (ffmi < 21) return 70;
    if (ffmi < 22) return 82;
    if (ffmi < 23) return 90;
    if (ffmi < 24) return 95;
    if (ffmi < 25) return 98;
    return 99;
  },

  isLikelyNatural: function(ffmi) {
    // Based on Kouri et al. study - no natural athletes exceeded 25
    if (ffmi <= 25) return { natural: true, confidence: 'High' };
    if (ffmi <= 26) return { natural: 'Possible', confidence: 'Low - exceptional genetics required' };
    return { natural: false, confidence: 'Very unlikely without enhancement' };
  },

  references: [
    {
      id: 'kouri-1995-ffmi',
      title: 'Fat-free mass index in users and nonusers of anabolic-androgenic steroids',
      authors: 'Kouri EM, Pope HG Jr, Katz DL, Oliva P',
      journal: 'Clinical Journal of Sport Medicine',
      year: 1995,
      keyFinding: 'No steroid-free athlete exceeded FFMI of 25'
    }
  ]
};

// ───────────────────────────────────────────────────────────────────────────
// 2. VOLUME LANDMARKS CALCULATOR (MEV/MAV/MRV)
// Based on Dr. Mike Israetel / Renaissance Periodization research
// ───────────────────────────────────────────────────────────────────────────
const VolumeLandmarksCalculator = {
  // Base volume landmarks per muscle group (sets per week)
  baseLandmarks: {
    chest: { mv: 4, mev: 8, mav: { min: 12, max: 18 }, mrv: 22 },
    back: { mv: 4, mev: 8, mav: { min: 12, max: 20 }, mrv: 25 },
    shoulders: { mv: 4, mev: 6, mav: { min: 10, max: 16 }, mrv: 20 },
    biceps: { mv: 2, mev: 6, mav: { min: 10, max: 14 }, mrv: 20 },
    triceps: { mv: 2, mev: 4, mav: { min: 8, max: 12 }, mrv: 18 },
    quads: { mv: 4, mev: 6, mav: { min: 10, max: 16 }, mrv: 20 },
    hamstrings: { mv: 3, mev: 6, mav: { min: 10, max: 14 }, mrv: 18 },
    glutes: { mv: 0, mev: 4, mav: { min: 8, max: 12 }, mrv: 16 },
    calves: { mv: 4, mev: 6, mav: { min: 10, max: 14 }, mrv: 18 },
    abs: { mv: 0, mev: 4, mav: { min: 8, max: 16 }, mrv: 20 },
    traps: { mv: 0, mev: 4, mav: { min: 8, max: 12 }, mrv: 18 },
    forearms: { mv: 0, mev: 4, mav: { min: 6, max: 10 }, mrv: 14 }
  },

  // Experience level multipliers
  experienceMultipliers: {
    beginner: { mev: 0.7, mav: 0.6, mrv: 0.7 },
    intermediate: { mev: 1.0, mav: 1.0, mrv: 1.0 },
    advanced: { mev: 1.2, mav: 1.3, mrv: 1.2 }
  },

  // Recovery factors
  recoveryFactors: {
    sleepQuality: { poor: 0.8, average: 1.0, good: 1.1, excellent: 1.2 },
    stressLevel: { high: 0.8, moderate: 0.95, low: 1.1 },
    age: function(age) {
      if (age < 25) return 1.1;
      if (age < 35) return 1.0;
      if (age < 45) return 0.9;
      return 0.8;
    },
    nutrition: { deficit: 0.85, maintenance: 1.0, surplus: 1.1 }
  },

  /**
   * Calculate personalized volume landmarks
   * @param {string} muscleGroup - Target muscle group
   * @param {string} experience - beginner, intermediate, advanced
   * @param {Object} recoveryParams - {sleep, stress, age, nutrition}
   * @returns {Object} Personalized volume landmarks
   */
  calculate: function(muscleGroup, experience, recoveryParams = {}) {
    const base = this.baseLandmarks[muscleGroup];
    if (!base) return null;

    const expMult = this.experienceMultipliers[experience] || this.experienceMultipliers.intermediate;

    // Calculate recovery multiplier
    let recoveryMult = 1.0;
    if (recoveryParams.sleep) recoveryMult *= this.recoveryFactors.sleepQuality[recoveryParams.sleep] || 1.0;
    if (recoveryParams.stress) recoveryMult *= this.recoveryFactors.stressLevel[recoveryParams.stress] || 1.0;
    if (recoveryParams.age) recoveryMult *= this.recoveryFactors.age(recoveryParams.age);
    if (recoveryParams.nutrition) recoveryMult *= this.recoveryFactors.nutrition[recoveryParams.nutrition] || 1.0;

    return {
      muscleGroup,
      mv: base.mv,
      mev: Math.round(base.mev * expMult.mev * recoveryMult),
      mavMin: Math.round(base.mav.min * expMult.mav * recoveryMult),
      mavMax: Math.round(base.mav.max * expMult.mav * recoveryMult),
      mrv: Math.round(base.mrv * expMult.mrv * recoveryMult),
      recommendation: this.getRecommendation(experience)
    };
  },

  getRecommendation: function(experience) {
    const recs = {
      beginner: 'Start at MEV and add 1-2 sets per week. Focus on progressive overload before increasing volume.',
      intermediate: 'Train within MAV range. Increase volume through mesocycle, deload when approaching MRV.',
      advanced: 'Periodize volume: start near MEV, progress to MRV over 4-6 weeks, then deload.'
    };
    return recs[experience] || recs.intermediate;
  },

  getAllMuscleGroups: function(experience, recoveryParams) {
    const results = {};
    Object.keys(this.baseLandmarks).forEach(muscle => {
      results[muscle] = this.calculate(muscle, experience, recoveryParams);
    });
    return results;
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 3. BODY RECOMPOSITION CALCULATOR
// For simultaneous fat loss and muscle gain
// ───────────────────────────────────────────────────────────────────────────
const BodyRecompCalculator = {
  /**
   * Determine if body recomposition is optimal and calculate targets
   * @param {Object} params - User parameters
   * @returns {Object} Recomp strategy
   */
  analyze: function(params) {
    const { weightKg, bodyFatPercent, experience, age } = params;

    // Determine recomp potential
    const potential = this.assessPotential(bodyFatPercent, experience, age);

    // Calculate calorie targets
    const calorieStrategy = this.calculateCalorieStrategy(params, potential);

    // Calculate macro targets
    const macros = this.calculateMacros(params, calorieStrategy);

    return {
      potential,
      calorieStrategy,
      macros,
      timeline: this.estimateTimeline(potential),
      recommendations: this.getRecommendations(potential)
    };
  },

  assessPotential: function(bodyFatPercent, experience, age) {
    let score = 0;

    // Body fat factor (higher BF = better recomp potential)
    if (bodyFatPercent > 25) score += 3;
    else if (bodyFatPercent > 20) score += 2;
    else if (bodyFatPercent > 15) score += 1;

    // Experience factor (beginners have highest potential)
    if (experience === 'beginner') score += 3;
    else if (experience === 'intermediate') score += 1;

    // Age factor
    if (age < 25) score += 2;
    else if (age < 35) score += 1;

    if (score >= 6) return { level: 'Excellent', description: 'Ideal candidate for body recomposition' };
    if (score >= 4) return { level: 'Good', description: 'Body recomposition will work well' };
    if (score >= 2) return { level: 'Moderate', description: 'Possible but slower progress' };
    return { level: 'Limited', description: 'Consider dedicated bulk/cut phases instead' };
  },

  calculateCalorieStrategy: function(params, potential) {
    const { tdee } = params;

    // Calorie cycling approach
    return {
      trainingDays: {
        calories: Math.round(tdee * 1.05), // +5% surplus
        description: 'Slight surplus to fuel training and muscle growth'
      },
      restDays: {
        calories: Math.round(tdee * 0.85), // -15% deficit
        description: 'Deficit to promote fat loss during recovery'
      },
      weeklyAverage: Math.round((tdee * 1.05 * 4 + tdee * 0.85 * 3) / 7),
      weeklyDeficit: Math.round(tdee * 7 - ((tdee * 1.05 * 4 + tdee * 0.85 * 3)))
    };
  },

  calculateMacros: function(params, calorieStrategy) {
    const { weightKg } = params;

    // High protein is critical for recomp (1g/lb or 2.2g/kg)
    const proteinGrams = Math.round(weightKg * 2.2);

    return {
      trainingDays: {
        protein: proteinGrams,
        carbs: Math.round((calorieStrategy.trainingDays.calories - proteinGrams * 4) * 0.6 / 4),
        fat: Math.round((calorieStrategy.trainingDays.calories - proteinGrams * 4) * 0.4 / 9)
      },
      restDays: {
        protein: proteinGrams,
        carbs: Math.round((calorieStrategy.restDays.calories - proteinGrams * 4) * 0.4 / 4),
        fat: Math.round((calorieStrategy.restDays.calories - proteinGrams * 4) * 0.6 / 9)
      }
    };
  },

  estimateTimeline: function(potential) {
    const timelines = {
      'Excellent': '3-6 months for noticeable changes',
      'Good': '4-8 months for noticeable changes',
      'Moderate': '6-12 months for noticeable changes',
      'Limited': 'Consider dedicated phases for faster results'
    };
    return timelines[potential.level];
  },

  getRecommendations: function(potential) {
    return [
      'Train 4-5 days per week with progressive overload',
      'Prioritize protein at every meal (40-50g per meal)',
      'Sleep 7-9 hours for optimal hormone levels',
      'Track progress via measurements and photos, not just scale weight',
      'Be patient - recomp is slower but maintains quality of life'
    ];
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 4. WILKS / DOTS / IPF GL SCORE CALCULATOR
// For comparing strength across different body weights
// ───────────────────────────────────────────────────────────────────────────
const StrengthScoreCalculator = {
  /**
   * Calculate Wilks Score (traditional)
   */
  calculateWilks: function(totalKg, bodyweightKg, sex) {
    const coefficients = sex === 'male'
      ? { a: -216.0475144, b: 16.2606339, c: -0.002388645, d: -0.00113732, e: 7.01863e-6, f: -1.291e-8 }
      : { a: 594.31747775582, b: -27.23842536447, c: 0.82112226871, d: -0.00930733913, e: 0.00004731582, f: -0.00000009054 };

    const { a, b, c, d, e, f } = coefficients;
    const bw = bodyweightKg;
    const coeff = 500 / (a + b*bw + c*bw**2 + d*bw**3 + e*bw**4 + f*bw**5);

    return Math.round(totalKg * coeff * 100) / 100;
  },

  /**
   * Calculate DOTS Score (newer, preferred)
   */
  calculateDOTS: function(totalKg, bodyweightKg, sex) {
    const coefficients = sex === 'male'
      ? { a: -307.75076, b: 24.0900756, c: -0.1918759221, d: 0.0007391293, e: -0.000001093 }
      : { a: -57.96288, b: 13.6175032, c: -0.1126655495, d: 0.0005158568, e: -0.0000010706 };

    const { a, b, c, d, e } = coefficients;
    const bw = bodyweightKg;
    const coeff = 500 / (a + b*bw + c*bw**2 + d*bw**3 + e*bw**4);

    return Math.round(totalKg * coeff * 100) / 100;
  },

  /**
   * Calculate IPF GL Points (IPF Goodlift)
   */
  calculateIPFGL: function(totalKg, bodyweightKg, sex, equipped = false) {
    // Coefficients for classic (raw) and equipped
    const coeff = sex === 'male'
      ? equipped
        ? { a: 1236.25115, b: 1449.21864, c: 0.01644 }
        : { a: 310.67, b: 857.785, c: 0.05366 }
      : equipped
        ? { a: 758.63878, b: 949.31382, c: 0.02435 }
        : { a: 125.1435, b: 228.03, c: 0.02398 };

    const { a, b, c } = coeff;
    const points = 100 / (a - b * Math.exp(-c * bodyweightKg)) * totalKg;

    return Math.round(points * 100) / 100;
  },

  /**
   * Get all scores at once
   */
  calculateAll: function(totalKg, bodyweightKg, sex) {
    return {
      wilks: this.calculateWilks(totalKg, bodyweightKg, sex),
      dots: this.calculateDOTS(totalKg, bodyweightKg, sex),
      ipfgl: this.calculateIPFGL(totalKg, bodyweightKg, sex),
      interpretation: this.interpretScore(this.calculateDOTS(totalKg, bodyweightKg, sex))
    };
  },

  interpretScore: function(dots) {
    if (dots < 200) return { level: 'Beginner', description: 'Keep training consistently' };
    if (dots < 300) return { level: 'Novice', description: 'Building a solid foundation' };
    if (dots < 400) return { level: 'Intermediate', description: 'Competitive at local level' };
    if (dots < 450) return { level: 'Advanced', description: 'Competitive at regional/national level' };
    if (dots < 500) return { level: 'Elite', description: 'National championship caliber' };
    return { level: 'World Class', description: 'International competition level' };
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 5. REVERSE DIETING PROTOCOL GENERATOR
// Post-diet metabolic recovery
// ───────────────────────────────────────────────────────────────────────────
const ReverseDietCalculator = {
  /**
   * Generate reverse diet protocol
   * @param {Object} params - Current diet state
   * @returns {Object} Weekly calorie progression
   */
  generateProtocol: function(params) {
    const { currentCalories, estimatedTDEE, dietDuration, aggressiveness } = params;

    // Calculate metabolic adaptation (estimated)
    const adaptationPercent = Math.min(dietDuration * 1.5, 25); // ~1.5% per month, max 25%
    const adaptedTDEE = estimatedTDEE * (1 - adaptationPercent / 100);

    // Weekly calorie increase based on aggressiveness
    const weeklyIncreases = {
      conservative: 50,  // Slowest, safest
      moderate: 75,      // Balanced approach
      aggressive: 100    // Faster but more risk of fat gain
    };

    const weeklyIncrease = weeklyIncreases[aggressiveness] || weeklyIncreases.moderate;
    const weeksToMaintenance = Math.ceil((estimatedTDEE - currentCalories) / weeklyIncrease);

    // Generate weekly progression
    const weeks = [];
    let calories = currentCalories;
    for (let i = 1; i <= weeksToMaintenance; i++) {
      calories = Math.min(calories + weeklyIncrease, estimatedTDEE);
      weeks.push({
        week: i,
        calories: Math.round(calories),
        protein: this.calculateProtein(params.weightKg, calories),
        carbs: this.calculateCarbs(calories, i, weeksToMaintenance),
        fat: this.calculateFat(calories, i, weeksToMaintenance),
        notes: this.getWeekNotes(i, weeksToMaintenance)
      });
    }

    return {
      currentState: {
        calories: currentCalories,
        estimatedAdaptation: `${adaptationPercent.toFixed(1)}%`,
        adaptedTDEE: Math.round(adaptedTDEE)
      },
      targetMaintenance: estimatedTDEE,
      protocol: weeks,
      totalWeeks: weeksToMaintenance,
      guidelines: this.getGuidelines(),
      warningSignsOfTooFast: [
        'Gaining more than 0.5kg per week',
        'Visible increase in waist measurement',
        'Significant bloating lasting more than 3 days',
        'Feeling overly full at every meal'
      ]
    };
  },

  calculateProtein: function(weightKg, calories) {
    // Keep protein high during reverse (2g/kg)
    return Math.round(weightKg * 2);
  },

  calculateCarbs: function(calories, week, totalWeeks) {
    // Gradually increase carbs (they drive metabolic recovery)
    const proteinCals = calories * 0.3; // ~30% protein
    const fatCals = calories * 0.25;    // ~25% fat
    const carbCals = calories - proteinCals - fatCals;
    return Math.round(carbCals / 4);
  },

  calculateFat: function(calories, week, totalWeeks) {
    return Math.round(calories * 0.25 / 9);
  },

  getWeekNotes: function(week, total) {
    if (week <= 2) return 'Monitor energy levels - should improve within 1-2 weeks';
    if (week <= 4) return 'Watch for improved gym performance and recovery';
    if (week <= total * 0.5) return 'Metabolic rate should be normalizing';
    if (week <= total * 0.75) return 'Hormones (thyroid, leptin) recovering';
    return 'Approaching maintenance - monitor weight closely';
  },

  getGuidelines: function() {
    return [
      'Weigh daily, track weekly averages (some fluctuation is normal)',
      'Expect initial weight gain from glycogen/water - this is NOT fat',
      'Increase carbs primarily around training',
      'If gaining >0.5kg/week, slow the calorie increase',
      'Monitor biofeedback: energy, sleep, libido, mood',
      'Avoid excessive cardio - let food drive metabolism',
      'Be patient - full metabolic recovery takes 4-12 weeks'
    ];
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 6. CARB CYCLING PROTOCOL BUILDER
// Strategic carbohydrate manipulation
// ───────────────────────────────────────────────────────────────────────────
const CarbCyclingProtocol = {
  /**
   * Generate carb cycling protocol
   * @param {Object} params - User parameters and goals
   * @returns {Object} Weekly carb cycling plan
   */
  generate: function(params) {
    const { tdee, weightKg, trainingDays, goal, bodyFatPercent } = params;

    // Determine protocol type based on goal
    const protocolType = this.selectProtocol(goal, bodyFatPercent);

    // Calculate macro targets for each day type
    const dayTypes = this.calculateDayTypes(tdee, weightKg, protocolType);

    // Generate weekly schedule
    const weeklySchedule = this.generateWeeklySchedule(trainingDays, dayTypes, protocolType);

    return {
      protocolType,
      dayTypes,
      weeklySchedule,
      weeklyTotals: this.calculateWeeklyTotals(weeklySchedule),
      glycogenManagement: this.getGlycogenInfo(),
      tips: this.getTips(goal)
    };
  },

  selectProtocol: function(goal, bodyFatPercent) {
    if (goal === 'fatLoss' && bodyFatPercent > 20) {
      return { name: 'Aggressive Cut', highDays: 1, moderateDays: 2, lowDays: 4 };
    }
    if (goal === 'fatLoss') {
      return { name: 'Standard Cut', highDays: 2, moderateDays: 2, lowDays: 3 };
    }
    if (goal === 'recomp') {
      return { name: 'Recomposition', highDays: 3, moderateDays: 2, lowDays: 2 };
    }
    if (goal === 'muscle') {
      return { name: 'Lean Gain', highDays: 4, moderateDays: 2, lowDays: 1 };
    }
    return { name: 'Balanced', highDays: 2, moderateDays: 3, lowDays: 2 };
  },

  calculateDayTypes: function(tdee, weightKg, protocol) {
    const protein = Math.round(weightKg * 2.2); // Constant high protein
    const proteinCals = protein * 4;

    return {
      high: {
        name: 'High Carb Day',
        calories: Math.round(tdee * 1.1),
        protein,
        carbs: Math.round((tdee * 1.1 - proteinCals) * 0.65 / 4),
        fat: Math.round((tdee * 1.1 - proteinCals) * 0.35 / 9),
        timing: 'Training days - especially leg day or high volume sessions',
        purpose: 'Replenish glycogen, support training, boost metabolism'
      },
      moderate: {
        name: 'Moderate Carb Day',
        calories: Math.round(tdee),
        protein,
        carbs: Math.round((tdee - proteinCals) * 0.5 / 4),
        fat: Math.round((tdee - proteinCals) * 0.5 / 9),
        timing: 'Light training days or upper body days',
        purpose: 'Maintain glycogen, support recovery'
      },
      low: {
        name: 'Low Carb Day',
        calories: Math.round(tdee * 0.85),
        protein,
        carbs: Math.round((tdee * 0.85 - proteinCals) * 0.25 / 4),
        fat: Math.round((tdee * 0.85 - proteinCals) * 0.75 / 9),
        timing: 'Rest days or cardio-only days',
        purpose: 'Enhance fat oxidation, improve insulin sensitivity'
      }
    };
  },

  generateWeeklySchedule: function(trainingDays, dayTypes, protocol) {
    // Default training schedule
    const schedule = [
      { day: 'Monday', type: 'high', training: 'Push' },
      { day: 'Tuesday', type: 'moderate', training: 'Pull' },
      { day: 'Wednesday', type: 'low', training: 'Rest' },
      { day: 'Thursday', type: 'high', training: 'Legs' },
      { day: 'Friday', type: 'moderate', training: 'Upper' },
      { day: 'Saturday', type: 'low', training: 'Cardio' },
      { day: 'Sunday', type: 'low', training: 'Rest' }
    ];

    return schedule.map(day => ({
      ...day,
      ...dayTypes[day.type]
    }));
  },

  calculateWeeklyTotals: function(schedule) {
    const totals = schedule.reduce((acc, day) => ({
      calories: acc.calories + day.calories,
      protein: acc.protein + day.protein,
      carbs: acc.carbs + day.carbs,
      fat: acc.fat + day.fat
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

    return {
      ...totals,
      dailyAverage: {
        calories: Math.round(totals.calories / 7),
        protein: Math.round(totals.protein / 7),
        carbs: Math.round(totals.carbs / 7),
        fat: Math.round(totals.fat / 7)
      }
    };
  },

  getGlycogenInfo: function() {
    return {
      muscleGlycogen: '300-500g stored in muscles',
      liverGlycogen: '80-100g stored in liver',
      waterPerGram: '3-4g water stored per gram of glycogen',
      depletionTime: '24-48 hours of low carb to significantly deplete',
      supercompensation: '2-3 days of high carb after depletion can increase stores by 50-100%'
    };
  },

  getTips: function(goal) {
    const baseTips = [
      'Time high carb days on your hardest training days',
      'Place low carb days on rest days or light cardio days',
      'Keep protein consistent every day',
      'Prioritize carbs around training (pre/post workout)',
      'On low days, increase vegetables for satiety'
    ];

    if (goal === 'fatLoss') {
      baseTips.push('Consider adding a refeed day (very high carb) every 7-14 days');
    }

    return baseTips;
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 7. PEAK WEEK CALCULATOR
// Competition preparation final week
// ───────────────────────────────────────────────────────────────────────────
const PeakWeekCalculator = {
  /**
   * Generate peak week protocol
   * @param {Object} params - Competition parameters
   * @returns {Object} Day-by-day peak week plan
   */
  generate: function(params) {
    const { competitionDay, currentWeight, targetWeight, normalCarbs, normalWater } = params;

    return {
      overview: this.getOverview(),
      waterProtocol: this.generateWaterProtocol(normalWater),
      carbProtocol: this.generateCarbProtocol(normalCarbs),
      sodiumProtocol: this.generateSodiumProtocol(),
      dailySchedule: this.generateDailySchedule(params),
      showDayMorning: this.getShowDayProtocol(),
      warnings: this.getWarnings()
    };
  },

  getOverview: function() {
    return {
      purpose: 'Maximize muscle fullness while minimizing subcutaneous water',
      approach: 'Manipulate water, sodium, and carbs to peak on stage',
      caution: 'Peak week cannot fix inadequate prep - it only fine-tunes'
    };
  },

  generateWaterProtocol: function(normalWater) {
    return [
      { day: 'Sunday (7 out)', water: normalWater * 1.5, notes: 'Begin water loading' },
      { day: 'Monday (6 out)', water: normalWater * 1.75, notes: 'Continue loading' },
      { day: 'Tuesday (5 out)', water: normalWater * 2, notes: 'Peak water intake' },
      { day: 'Wednesday (4 out)', water: normalWater * 2, notes: 'Maintain high intake' },
      { day: 'Thursday (3 out)', water: normalWater * 1.5, notes: 'Begin tapering' },
      { day: 'Friday (2 out)', water: normalWater * 0.75, notes: 'Reduce significantly' },
      { day: 'Saturday (1 out)', water: normalWater * 0.5, notes: 'Minimal - sips only' },
      { day: 'Show Day', water: 'Sips as needed', notes: 'Small amounts between judging' }
    ];
  },

  generateCarbProtocol: function(normalCarbs) {
    return [
      { day: 'Sunday (7 out)', carbs: normalCarbs * 0.5, notes: 'Begin depletion' },
      { day: 'Monday (6 out)', carbs: normalCarbs * 0.25, notes: 'Low carb + depletion workout' },
      { day: 'Tuesday (5 out)', carbs: normalCarbs * 0.25, notes: 'Very low - deplete glycogen' },
      { day: 'Wednesday (4 out)', carbs: normalCarbs * 0.25, notes: 'Final depletion day' },
      { day: 'Thursday (3 out)', carbs: normalCarbs * 2, notes: 'Begin carb load' },
      { day: 'Friday (2 out)', carbs: normalCarbs * 2.5, notes: 'Peak carb load' },
      { day: 'Saturday (1 out)', carbs: normalCarbs * 1.5, notes: 'Moderate - top off' },
      { day: 'Show Day', carbs: 'As needed', notes: 'Quick carbs backstage if flat' }
    ];
  },

  generateSodiumProtocol: function() {
    return [
      { day: 'Sunday-Wednesday', sodium: 'High (4000-5000mg)', notes: 'Load sodium with water' },
      { day: 'Thursday', sodium: 'Moderate (2500mg)', notes: 'Begin reduction' },
      { day: 'Friday', sodium: 'Low (1000mg)', notes: 'Minimal added salt' },
      { day: 'Saturday', sodium: 'Very Low (500mg)', notes: 'Avoid added salt' },
      { day: 'Show Day', sodium: 'Minimal', notes: 'Small amount can help fullness' }
    ];
  },

  generateDailySchedule: function(params) {
    return {
      sevenOut: {
        training: 'Full body pump workout - high reps, moderate weight',
        cardio: '20-30 min low intensity',
        meals: '5-6 meals, begin water loading',
        notes: 'Last heavy workout of the week'
      },
      sixOut: {
        training: 'Depletion workout - high reps, supersets, minimal rest',
        cardio: '30-45 min',
        meals: 'Low carb, high protein',
        notes: 'Goal is glycogen depletion'
      },
      fiveOut: {
        training: 'Light depletion or rest',
        cardio: '20-30 min',
        meals: 'Very low carb',
        notes: 'Preserve energy'
      },
      fourOut: {
        training: 'Rest or very light posing',
        cardio: 'None or 15 min',
        meals: 'Low carb, final depletion',
        notes: 'Prepare for carb load'
      },
      threeOut: {
        training: 'Rest - posing practice only',
        cardio: 'None',
        meals: 'Begin carb loading - every 2-3 hours',
        notes: 'Monitor fullness in mirror'
      },
      twoOut: {
        training: 'Rest - posing practice',
        cardio: 'None',
        meals: 'Peak carb loading',
        notes: 'Watch for spillover (soft look)'
      },
      oneOut: {
        training: 'Rest - final posing practice',
        cardio: 'None',
        meals: 'Moderate carbs, reduce water',
        notes: 'Final adjustments based on look'
      }
    };
  },

  getShowDayProtocol: function() {
    return {
      wakeUp: 'Assess condition in mirror',
      breakfast: 'Small meal - rice cakes, honey, small protein',
      prePrejudging: 'Quick carbs 30-60 min before (rice cakes, candy)',
      pump: 'Light pump-up backstage with resistance bands',
      betweenRounds: 'Sip water, small carbs if looking flat',
      finals: 'Repeat pump-up protocol',
      celebration: 'Enjoy - you earned it!'
    };
  },

  getWarnings: function() {
    return [
      'Never try a new peak week protocol for the first time at a major show',
      'Practice your peak week during prep to see how your body responds',
      'If you spill over (look watery), reduce carbs and increase light activity',
      'Extreme water restriction can be dangerous - never cut water completely',
      'Trust your coach - dont make last-minute panic changes',
      'Peak week is 5% of the equation - 12-16 weeks of prep is 95%'
    ];
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 8. PERIODIZATION MODEL SELECTOR
// Evidence-based training periodization
// ───────────────────────────────────────────────────────────────────────────
const PeriodizationModels = {
  models: {
    linear: {
      name: 'Linear Periodization',
      description: 'Progressive increase in intensity with decrease in volume over time',
      bestFor: ['Beginners', 'Strength peaking', 'Simple programming'],
      structure: {
        phase1: { name: 'Hypertrophy', weeks: 4, reps: '10-12', intensity: '65-75%' },
        phase2: { name: 'Strength', weeks: 4, reps: '6-8', intensity: '75-85%' },
        phase3: { name: 'Power', weeks: 3, reps: '3-5', intensity: '85-95%' },
        phase4: { name: 'Deload', weeks: 1, reps: '8-10', intensity: '60%' }
      },
      pros: ['Simple to implement', 'Good for beginners', 'Clear progression'],
      cons: ['Can lead to plateau', 'Less variety', 'May lose adaptations from earlier phases']
    },

    dup: {
      name: 'Daily Undulating Periodization',
      description: 'Vary intensity and volume within each week',
      bestFor: ['Intermediate/Advanced', 'Hypertrophy', 'Avoiding plateaus'],
      structure: {
        day1: { name: 'Hypertrophy', reps: '10-12', intensity: '65-75%', rest: '60-90s' },
        day2: { name: 'Strength', reps: '4-6', intensity: '80-87%', rest: '3-5min' },
        day3: { name: 'Power', reps: '2-4', intensity: '87-93%', rest: '3-5min' }
      },
      weeklyExample: [
        'Monday: Hypertrophy (10-12 reps)',
        'Wednesday: Strength (4-6 reps)',
        'Friday: Power (2-4 reps)'
      ],
      pros: ['Prevents accommodation', 'Better for hypertrophy', 'More variety'],
      cons: ['More complex', 'Harder to track progress', 'Requires more planning']
    },

    block: {
      name: 'Block Periodization',
      description: 'Concentrated training phases focusing on specific qualities',
      bestFor: ['Advanced athletes', 'Peaking for competition', 'Specific goals'],
      structure: {
        accumulation: { name: 'Accumulation', weeks: 4, focus: 'Volume/Hypertrophy', intensity: '60-75%' },
        transmutation: { name: 'Transmutation', weeks: 3, focus: 'Strength', intensity: '75-90%' },
        realization: { name: 'Realization', weeks: 2, focus: 'Peaking/Power', intensity: '90-100%' }
      },
      pros: ['Concentrated adaptations', 'Good for peaking', 'Allows full recovery'],
      cons: ['Complex', 'Can lose previous adaptations', 'Requires experience']
    },

    conjugate: {
      name: 'Conjugate/Westside Method',
      description: 'Concurrent training of multiple qualities using exercise rotation',
      bestFor: ['Powerlifters', 'Advanced strength athletes', 'Breaking plateaus'],
      structure: {
        maxEffort: { description: 'Work up to 1-3RM, rotate exercises weekly' },
        dynamicEffort: { description: '8-12 sets x 2-3 reps at 50-60% with bands/chains' },
        repetition: { description: 'High rep accessory work for weak points' }
      },
      weeklyExample: [
        'Monday: Max Effort Upper',
        'Tuesday: Max Effort Lower',
        'Thursday: Dynamic Effort Upper',
        'Friday: Dynamic Effort Lower'
      ],
      pros: ['Prevents accommodation', 'Trains all qualities', 'Addresses weak points'],
      cons: ['Very complex', 'Requires special equipment', 'Not ideal for beginners']
    }
  },

  /**
   * Recommend periodization model based on user profile
   */
  recommend: function(params) {
    const { experience, goal, availableDays, equipment } = params;

    if (experience === 'beginner') {
      return {
        recommended: 'linear',
        reason: 'Simple progression allows beginners to build foundation and learn movements'
      };
    }

    if (goal === 'hypertrophy') {
      return {
        recommended: 'dup',
        reason: 'Research shows DUP produces slightly better hypertrophy outcomes'
      };
    }

    if (goal === 'competition' || goal === 'peaking') {
      return {
        recommended: 'block',
        reason: 'Block periodization is optimal for peaking at a specific date'
      };
    }

    if (experience === 'advanced' && goal === 'strength') {
      return {
        recommended: 'conjugate',
        reason: 'Conjugate method prevents accommodation in advanced lifters'
      };
    }

    return {
      recommended: 'dup',
      reason: 'DUP offers good balance of simplicity and effectiveness for most goals'
    };
  },

  getModel: function(modelName) {
    return this.models[modelName];
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 9. DELOAD WEEK GENERATOR
// Recovery and adaptation optimization
// ───────────────────────────────────────────────────────────────────────────
const DeloadGenerator = {
  strategies: {
    volumeDeload: {
      name: 'Volume Reduction',
      description: 'Maintain intensity, reduce sets by 40-50%',
      application: 'Best for strength-focused training',
      example: 'If normally doing 4 sets, do 2 sets at same weight'
    },
    intensityDeload: {
      name: 'Intensity Reduction',
      description: 'Maintain volume, reduce weight by 40-50%',
      application: 'Best for hypertrophy-focused training',
      example: 'If normally using 100kg, use 50-60kg for same sets/reps'
    },
    frequencyDeload: {
      name: 'Frequency Reduction',
      description: 'Train fewer days, maintain intensity and volume per session',
      application: 'Best when feeling systemically fatigued',
      example: 'If training 6 days, train 3-4 days'
    },
    activeRecovery: {
      name: 'Active Recovery Week',
      description: 'Light movement, mobility work, no resistance training',
      application: 'When very overtrained or after competition',
      example: 'Walking, swimming, yoga, stretching only'
    }
  },

  /**
   * Generate deload protocol
   * @param {Object} params - Training state parameters
   * @returns {Object} Deload protocol
   */
  generate: function(params) {
    const { currentProgram, fatigueLevel, weeksTraining, goal } = params;

    // Select deload strategy
    const strategy = this.selectStrategy(fatigueLevel, goal);

    // Generate week structure
    const deloadWeek = this.generateWeek(currentProgram, strategy);

    return {
      strategy: this.strategies[strategy],
      week: deloadWeek,
      nutrition: this.getNutritionGuidelines(goal),
      recovery: this.getRecoveryProtocol(),
      returnToTraining: this.getReturnGuidelines()
    };
  },

  selectStrategy: function(fatigueLevel, goal) {
    if (fatigueLevel === 'severe') return 'activeRecovery';
    if (goal === 'strength') return 'volumeDeload';
    if (goal === 'hypertrophy') return 'intensityDeload';
    return 'volumeDeload';
  },

  generateWeek: function(currentProgram, strategy) {
    // Apply deload multipliers
    const multipliers = {
      volumeDeload: { sets: 0.5, weight: 1.0, reps: 1.0 },
      intensityDeload: { sets: 1.0, weight: 0.6, reps: 1.0 },
      frequencyDeload: { sets: 1.0, weight: 0.9, reps: 1.0, days: 0.5 },
      activeRecovery: { sets: 0, weight: 0, reps: 0 }
    };

    return {
      multipliers: multipliers[strategy],
      guidelines: [
        'Focus on movement quality over intensity',
        'Leave the gym feeling refreshed, not fatigued',
        'Use this time to work on mobility and flexibility',
        'Get extra sleep (aim for 8-9 hours)'
      ]
    };
  },

  getNutritionGuidelines: function(goal) {
    return {
      calories: goal === 'cut' ? 'Slight deficit (-300)' : 'Maintenance or slight surplus',
      protein: 'Maintain high protein (2g/kg) for recovery',
      carbs: 'Moderate - support recovery without excess',
      hydration: 'Increase water intake to support recovery processes'
    };
  },

  getRecoveryProtocol: function() {
    return [
      'Sleep: 8-9 hours per night',
      'Stress management: meditation, light walks',
      'Mobility: 15-20 min daily stretching/foam rolling',
      'Active recovery: light swimming, walking, cycling',
      'Massage or self-myofascial release if available'
    ];
  },

  getReturnGuidelines: function() {
    return {
      week1PostDeload: 'Resume at 90% of pre-deload volume',
      week2PostDeload: 'Return to full volume, may exceed previous',
      signs: [
        'Should feel stronger and more recovered',
        'If still fatigued, extend deload or investigate other factors',
        'Use increased performance as motivation'
      ]
    };
  },

  determineDeloadTiming: function(params) {
    const { weeksTraining, performanceDecline, fatigueSymptoms } = params;

    // Auto-regulate based on signals
    if (performanceDecline > 10 || fatigueSymptoms >= 3) {
      return { needed: true, urgency: 'Immediate' };
    }

    if (weeksTraining >= 6 && weeksTraining < 8) {
      return { needed: true, urgency: 'Soon (within 1-2 weeks)' };
    }

    if (weeksTraining >= 8) {
      return { needed: true, urgency: 'Overdue - deload now' };
    }

    return { needed: false, recommendation: `Continue training. Consider deload in ${8 - weeksTraining} weeks.` };
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 10. PROGRESSIVE OVERLOAD TRACKER
// Track and recommend progression
// ───────────────────────────────────────────────────────────────────────────
const ProgressiveOverloadTracker = {
  /**
   * Calculate volume load
   */
  calculateVolumeLoad: function(sets, reps, weight) {
    return sets * reps * weight;
  },

  /**
   * Track weekly volume
   */
  calculateWeeklyVolume: function(workouts) {
    return workouts.reduce((total, workout) => {
      const workoutVolume = workout.exercises.reduce((exTotal, ex) => {
        return exTotal + this.calculateVolumeLoad(ex.sets, ex.reps, ex.weight);
      }, 0);
      return total + workoutVolume;
    }, 0);
  },

  /**
   * Recommend progression based on performance
   */
  recommendProgression: function(exercise) {
    const { targetReps, achievedReps, currentWeight, history } = exercise;

    // If hit or exceeded target reps on all sets
    if (achievedReps >= targetReps) {
      // Recommend weight increase
      const increase = this.calculateWeightIncrease(exercise);
      return {
        action: 'increase_weight',
        amount: increase,
        newWeight: currentWeight + increase,
        reason: `Achieved ${achievedReps} reps (target: ${targetReps})`
      };
    }

    // If within 1-2 reps of target
    if (achievedReps >= targetReps - 2) {
      return {
        action: 'maintain',
        reason: 'Building strength at current weight',
        tip: 'Try to add 1 rep next session'
      };
    }

    // If significantly under target
    return {
      action: 'evaluate',
      reason: 'Missed target by 3+ reps',
      suggestions: [
        'Check recovery (sleep, nutrition, stress)',
        'Consider if weight was too ambitious',
        'Evaluate fatigue accumulation'
      ]
    };
  },

  calculateWeightIncrease: function(exercise) {
    const { type, currentWeight } = exercise;

    // Compound vs isolation
    if (['squat', 'deadlift', 'benchPress', 'row', 'overheadPress'].includes(type)) {
      return currentWeight < 60 ? 2.5 : 5; // kg
    }

    // Isolation exercises
    return 2.5; // kg
  },

  /**
   * Progression methods
   */
  progressionMethods: {
    weightProgression: {
      name: 'Weight Progression',
      description: 'Add weight when you hit target reps',
      example: 'Week 1: 100kg x 8, Week 2: 102.5kg x 8'
    },
    repProgression: {
      name: 'Rep Progression',
      description: 'Add reps within a range before adding weight',
      example: 'Week 1: 100kg x 8, Week 2: 100kg x 9, Week 3: 100kg x 10, Week 4: 105kg x 8'
    },
    setProgression: {
      name: 'Set Progression',
      description: 'Add sets to increase volume',
      example: 'Week 1: 3x10, Week 2: 4x10, Week 3: 5x10'
    },
    doubleProgression: {
      name: 'Double Progression',
      description: 'Progress reps within a range, then increase weight',
      example: 'Target: 8-12 reps. Add reps until 12, then add weight and start at 8'
    },
    densityProgression: {
      name: 'Density Progression',
      description: 'Same work in less time (reduce rest periods)',
      example: 'Week 1: 90s rest, Week 2: 75s rest, Week 3: 60s rest'
    }
  },

  /**
   * Check for plateau
   */
  detectPlateau: function(history) {
    if (history.length < 4) return { plateau: false, reason: 'Not enough data' };

    const recent4Weeks = history.slice(-4);
    const volumeChange = recent4Weeks[3].volume - recent4Weeks[0].volume;
    const percentChange = (volumeChange / recent4Weeks[0].volume) * 100;

    if (percentChange < 2) {
      return {
        plateau: true,
        duration: '4+ weeks',
        suggestions: [
          'Change rep ranges (if doing 8-12, try 4-6)',
          'Vary exercise selection',
          'Take a deload week',
          'Assess recovery factors',
          'Consider advanced techniques (drop sets, rest-pause)'
        ]
      };
    }

    return { plateau: false, progressRate: `${percentChange.toFixed(1)}% volume increase` };
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 11. SLEEP OPTIMIZATION GUIDE
// Evidence-based sleep recommendations for athletes
// ───────────────────────────────────────────────────────────────────────────
const SleepOptimization = {
  recommendations: {
    duration: {
      minimum: 7,
      optimal: '8-9',
      athletes: '9-10 for heavy training periods',
      research: 'Sleep extension studies show improved performance with 9+ hours'
    },

    timing: {
      consistency: 'Same bedtime/waketime daily (±30 min)',
      optimalBedtime: '10-11 PM for most people',
      preSleepRoutine: '30-60 min wind-down without screens'
    },

    environment: {
      temperature: '65-68°F (18-20°C)',
      darkness: 'Complete darkness or sleep mask',
      noise: 'Quiet or white noise',
      bedding: 'Comfortable mattress and pillows'
    }
  },

  /**
   * Calculate sleep score and recommendations
   */
  assessSleep: function(params) {
    const { hoursSlept, wakeUps, timeToSleep, sleepTime, wakeTime, trainingIntensity } = params;

    let score = 0;
    const issues = [];
    const recommendations = [];

    // Duration scoring
    if (hoursSlept >= 8) score += 30;
    else if (hoursSlept >= 7) score += 20;
    else { score += 10; issues.push('Insufficient sleep duration'); }

    // Wake-ups scoring
    if (wakeUps === 0) score += 25;
    else if (wakeUps <= 1) score += 20;
    else { score += 10; issues.push('Frequent night wakings'); }

    // Time to fall asleep
    if (timeToSleep <= 15) score += 25;
    else if (timeToSleep <= 30) score += 20;
    else { score += 10; issues.push('Difficulty falling asleep'); }

    // Consistency (simplified)
    score += 20; // Assume consistent for now

    // Generate recommendations
    if (hoursSlept < 8 && trainingIntensity === 'high') {
      recommendations.push('Increase sleep to 9+ hours during heavy training');
    }

    if (timeToSleep > 20) {
      recommendations.push('Avoid screens 1 hour before bed');
      recommendations.push('Try magnesium supplementation (200-400mg)');
    }

    if (wakeUps > 1) {
      recommendations.push('Keep bedroom cooler (65-68°F)');
      recommendations.push('Avoid fluids 2 hours before bed');
    }

    return {
      score: Math.min(score, 100),
      rating: this.getRating(score),
      issues,
      recommendations,
      impactOnTraining: this.getTrainingImpact(score)
    };
  },

  getRating: function(score) {
    if (score >= 90) return 'Excellent';
    if (score >= 75) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Poor - prioritize sleep improvement';
  },

  getTrainingImpact: function(score) {
    if (score >= 90) return 'Optimal recovery and performance';
    if (score >= 75) return 'Adequate for most training';
    if (score >= 60) return 'May limit recovery and strength gains';
    return 'Significantly impacting muscle growth and strength';
  },

  hormonalEffects: {
    growthHormone: {
      peak: 'First 3-4 hours of sleep (deep sleep)',
      deficitImpact: 'Up to 70% reduction with sleep deprivation',
      optimization: 'Prioritize early sleep; avoid late nights'
    },
    testosterone: {
      peak: 'REM sleep and early morning',
      deficitImpact: '10-15% reduction per hour below 8 hours',
      optimization: 'Consistent 7-9 hours maintains healthy levels'
    },
    cortisol: {
      normal: 'Peaks in morning, lowest at night',
      deficitImpact: 'Elevated throughout day with poor sleep',
      optimization: 'Regular sleep schedule normalizes rhythm'
    }
  },

  supplements: [
    { name: 'Magnesium', dose: '200-400mg', timing: '30-60 min before bed', evidence: 'Strong' },
    { name: 'Melatonin', dose: '0.5-3mg', timing: '30 min before bed', evidence: 'Moderate (short-term use)' },
    { name: 'Glycine', dose: '3g', timing: 'Before bed', evidence: 'Moderate' },
    { name: 'L-Theanine', dose: '200mg', timing: 'Before bed', evidence: 'Moderate' },
    { name: 'Ashwagandha', dose: '300-600mg', timing: 'Evening', evidence: 'Moderate (also reduces cortisol)' }
  ]
};

// ───────────────────────────────────────────────────────────────────────────
// 12. RECOVERY READINESS ASSESSMENT
// Daily training readiness evaluation
// ───────────────────────────────────────────────────────────────────────────
const RecoveryReadinessAssessment = {
  /**
   * Assess daily training readiness
   * @param {Object} params - Daily metrics
   * @returns {Object} Readiness score and recommendations
   */
  assess: function(params) {
    const {
      sleepQuality, // 1-10
      sleepHours,
      musclesSoreness, // 1-10 (10 = very sore)
      energyLevel, // 1-10
      motivation, // 1-10
      restingHeartRate, // compared to baseline
      gripStrength, // optional: compared to baseline
      mood, // 1-10
      stress // 1-10 (10 = very stressed)
    } = params;

    const scores = {
      sleep: this.scoreSleep(sleepQuality, sleepHours),
      soreness: this.scoreSoreness(musclesSoreness),
      energy: energyLevel * 10,
      motivation: motivation * 10,
      hrv: this.scoreHRV(restingHeartRate),
      mood: mood * 10,
      stress: (10 - stress) * 10
    };

    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length;

    return {
      overallScore: Math.round(totalScore),
      category: this.categorize(totalScore),
      componentScores: scores,
      recommendation: this.getRecommendation(totalScore, scores),
      trainingModification: this.getTrainingMod(totalScore)
    };
  },

  scoreSleep: function(quality, hours) {
    let score = quality * 5; // 0-50
    if (hours >= 8) score += 50;
    else if (hours >= 7) score += 35;
    else if (hours >= 6) score += 20;
    else score += 10;
    return Math.min(score, 100);
  },

  scoreSoreness: function(soreness) {
    return (10 - soreness) * 10; // Invert: less sore = higher score
  },

  scoreHRV: function(restingHR) {
    // Simplified: compare to assumed baseline
    // In reality, this would compare to individual's baseline
    if (!restingHR) return 70; // Default if not measured
    if (restingHR <= 60) return 90;
    if (restingHR <= 70) return 75;
    if (restingHR <= 80) return 60;
    return 40;
  },

  categorize: function(score) {
    if (score >= 85) return { level: 'Excellent', color: 'green', emoji: '🟢' };
    if (score >= 70) return { level: 'Good', color: 'lightgreen', emoji: '🟡' };
    if (score >= 55) return { level: 'Moderate', color: 'yellow', emoji: '🟠' };
    if (score >= 40) return { level: 'Low', color: 'orange', emoji: '🔴' };
    return { level: 'Poor', color: 'red', emoji: '⛔' };
  },

  getRecommendation: function(score, components) {
    const recommendations = [];

    if (components.sleep < 60) {
      recommendations.push('Priority: Improve sleep before next heavy session');
    }
    if (components.soreness < 50) {
      recommendations.push('Consider active recovery or targeting different muscle groups');
    }
    if (components.stress > 70) {
      recommendations.push('High stress detected - training may help or consider light session');
    }
    if (components.energy < 50) {
      recommendations.push('Low energy - check nutrition and hydration');
    }

    if (score >= 80) {
      recommendations.push('Great day for heavy/intense training');
    } else if (score >= 60) {
      recommendations.push('Moderate training appropriate - listen to your body');
    } else {
      recommendations.push('Consider light training, active recovery, or rest');
    }

    return recommendations;
  },

  getTrainingMod: function(score) {
    if (score >= 85) return { intensity: '100%', volume: '100%', note: 'Push hard today' };
    if (score >= 70) return { intensity: '90-100%', volume: '90-100%', note: 'Train normally' };
    if (score >= 55) return { intensity: '80-90%', volume: '75-90%', note: 'Reduce slightly' };
    if (score >= 40) return { intensity: '70-80%', volume: '50-75%', note: 'Light session' };
    return { intensity: '0-60%', volume: '0-50%', note: 'Rest or very light movement' };
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 13. STRESS & CORTISOL MANAGEMENT GUIDE
// Managing stress for optimal muscle growth
// ───────────────────────────────────────────────────────────────────────────
const StressManagement = {
  cortisolInfo: {
    function: 'Catabolic hormone - breaks down tissue for energy',
    normalPattern: 'High in morning, low at night',
    chronicElevation: [
      'Muscle protein breakdown',
      'Increased fat storage (especially abdominal)',
      'Impaired recovery',
      'Reduced testosterone',
      'Weakened immune system'
    ],
    acuteVsChronic: {
      acute: 'Short-term elevation from training is BENEFICIAL - signals adaptation',
      chronic: 'Long-term elevation from life stress is HARMFUL - impairs recovery'
    }
  },

  /**
   * Assess stress impact on training
   */
  assessStressImpact: function(params) {
    const { workStress, sleepQuality, lifeDemands, trainingVolume, nutrition } = params;

    let totalStressLoad = 0;
    totalStressLoad += workStress * 2;
    totalStressLoad += (10 - sleepQuality) * 2;
    totalStressLoad += lifeDemands * 1.5;
    totalStressLoad += trainingVolume * 1;
    totalStressLoad += nutrition === 'deficit' ? 15 : 0;

    return {
      stressLoad: totalStressLoad,
      category: this.categorizeStress(totalStressLoad),
      recommendations: this.getRecommendations(totalStressLoad, params),
      trainingAdjustment: this.getTrainingAdjustment(totalStressLoad)
    };
  },

  categorizeStress: function(load) {
    if (load <= 30) return { level: 'Low', impact: 'Minimal impact on training' };
    if (load <= 50) return { level: 'Moderate', impact: 'May slightly reduce recovery' };
    if (load <= 70) return { level: 'High', impact: 'Likely impacting recovery and gains' };
    return { level: 'Very High', impact: 'Significantly compromising results' };
  },

  getRecommendations: function(load, params) {
    const recs = [];

    if (load > 50) {
      recs.push('Consider reducing training volume by 20-30%');
      recs.push('Prioritize sleep above all else');
    }

    if (params.sleepQuality < 7) {
      recs.push('Improve sleep hygiene - this is your #1 lever');
    }

    if (params.nutrition === 'deficit') {
      recs.push('Consider diet break or refeed days to reduce metabolic stress');
    }

    // General recommendations
    recs.push(...[
      'Daily 10-min meditation or deep breathing',
      'Limit caffeine after 2pm',
      'Schedule dedicated relaxation time',
      'Consider adaptogenic supplements (ashwagandha, rhodiola)'
    ]);

    return recs;
  },

  getTrainingAdjustment: function(load) {
    if (load <= 30) return 'Train as planned';
    if (load <= 50) return 'Monitor recovery closely, be willing to auto-regulate';
    if (load <= 70) return 'Reduce volume 20%, maintain intensity';
    return 'Consider deload week or significant volume reduction';
  },

  managementStrategies: {
    immediate: [
      { name: 'Box breathing', duration: '5 min', description: '4 sec inhale, 4 sec hold, 4 sec exhale, 4 sec hold' },
      { name: 'Cold exposure', duration: '2-5 min', description: 'Cold shower to activate parasympathetic system' },
      { name: 'Walking', duration: '15-30 min', description: 'Light movement reduces cortisol' }
    ],
    daily: [
      { name: 'Meditation', duration: '10-20 min', description: 'Reduces baseline cortisol levels' },
      { name: 'Nature exposure', duration: '20+ min', description: 'Being in nature lowers stress hormones' },
      { name: 'Social connection', description: 'Quality time with friends/family' },
      { name: 'Journaling', duration: '10 min', description: 'Writing reduces rumination' }
    ],
    supplements: [
      { name: 'Ashwagandha', dose: '300-600mg', evidence: 'Strong - reduces cortisol 15-30%' },
      { name: 'Rhodiola Rosea', dose: '200-400mg', evidence: 'Moderate - adaptogenic effects' },
      { name: 'Phosphatidylserine', dose: '300-800mg', evidence: 'Moderate - blunts cortisol response' },
      { name: 'Magnesium', dose: '200-400mg', evidence: 'Strong - calming effect' }
    ]
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 14. GENETIC POTENTIAL ESTIMATOR (Casey Butt Formula)
// Maximum muscular bodyweight estimation
// ───────────────────────────────────────────────────────────────────────────
const GeneticPotentialCalculator = {
  /**
   * Calculate maximum muscular potential using Casey Butt formula
   * @param {Object} measurements - Body measurements
   * @returns {Object} Genetic potential estimates
   */
  calculate: function(measurements) {
    const { heightCm, wristCm, ankleCm, targetBodyFat } = measurements;

    const heightInches = heightCm / 2.54;
    const wristInches = wristCm / 2.54;
    const ankleInches = ankleCm / 2.54;

    // Casey Butt formula for maximum lean body mass
    const maxLBM = heightInches * (wristInches / 7.0) * (1 + ankleInches / 17);
    const maxLBMKg = maxLBM * 0.453592;

    // Calculate total weight at target body fat
    const maxWeightKg = maxLBMKg / (1 - targetBodyFat / 100);

    // Estimate maximum measurements
    const maxMeasurements = this.estimateMaxMeasurements(heightCm, wristCm, ankleCm);

    return {
      maxLeanMassKg: Math.round(maxLBMKg * 10) / 10,
      maxLeanMassLbs: Math.round(maxLBM * 10) / 10,
      maxWeightAtBF: {
        [`${targetBodyFat}%`]: Math.round(maxWeightKg * 10) / 10,
        '10%': Math.round(maxLBMKg / 0.9 * 10) / 10,
        '12%': Math.round(maxLBMKg / 0.88 * 10) / 10,
        '15%': Math.round(maxLBMKg / 0.85 * 10) / 10
      },
      maxMeasurements,
      frameSize: this.assessFrameSize(wristCm, heightCm),
      timeToMaxPotential: this.estimateTimeToMax(),
      notes: [
        'These are estimates for drug-free athletes with optimal training and nutrition',
        'Individual genetics can vary ±10% from these calculations',
        'Most people reach 90% of potential within 5-7 years of serious training',
        'Reaching 100% requires many years and exceptional dedication'
      ]
    };
  },

  estimateMaxMeasurements: function(heightCm, wristCm, ankleCm) {
    // Based on Casey Butt's frame-size adjusted formulas
    return {
      chest: Math.round(wristCm * 6.5),
      arms: Math.round(wristCm * 2.52),
      forearms: Math.round(wristCm * 1.88),
      neck: Math.round(wristCm * 2.32),
      thighs: Math.round(ankleCm * 2.42),
      calves: Math.round(ankleCm * 1.92)
    };
  },

  assessFrameSize: function(wristCm, heightCm) {
    const ratio = wristCm / (heightCm / 100);

    if (ratio < 9.5) return { size: 'Small', potential: 'Lower total mass, can achieve excellent definition' };
    if (ratio < 10.5) return { size: 'Medium', potential: 'Average frame, balanced potential' };
    return { size: 'Large', potential: 'Higher mass potential, naturally thicker joints' };
  },

  estimateTimeToMax: function() {
    return {
      year1: '50-60% of maximum potential achievable',
      year2: '70-75% achievable',
      year3: '80-85% achievable',
      year5: '90-92% achievable',
      year10: '95-98% achievable',
      note: 'Diminishing returns - first 2-3 years show fastest progress'
    };
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 15. IDEAL BODY MEASUREMENTS CALCULATOR
// Classic physique proportions (Steve Reeves ratios)
// ───────────────────────────────────────────────────────────────────────────
const IdealMeasurementsCalculator = {
  // Steve Reeves' classic proportions
  reevesRatios: {
    arm: 2.52,        // arm = wrist × 2.52
    calf: 1.92,       // calf = ankle × 1.92
    neck: 2.32,       // neck = wrist × 2.32
    chest: 6.5,       // chest = wrist × 6.5
    waist: 0.86,      // waist = chest × 0.86
    thigh: 2.42,      // thigh = ankle × 2.42
    hip: 0.85         // hip = chest × 0.85
  },

  // Grecian ideal (height-based)
  grecianRatios: {
    chest: 0.65,      // chest = height × 0.65
    waist: 0.45,      // waist = height × 0.45
    hips: 0.55,       // hips = height × 0.55
    thigh: 0.35,      // thigh = height × 0.35
    arm: 0.25,        // arm = height × 0.25
    calf: 0.22,       // calf = height × 0.22
    neck: 0.22        // neck = height × 0.22
  },

  /**
   * Calculate ideal measurements
   */
  calculate: function(measurements) {
    const { heightCm, wristCm, ankleCm, currentMeasurements } = measurements;

    const reevesIdeal = this.calculateReeves(wristCm, ankleCm);
    const grecianIdeal = this.calculateGrecian(heightCm);

    // Compare current to ideal if provided
    let comparison = null;
    if (currentMeasurements) {
      comparison = this.compareToIdeal(currentMeasurements, reevesIdeal);
    }

    return {
      reevesIdeal,
      grecianIdeal,
      comparison,
      symmetryRatios: this.getSymmetryRatios(reevesIdeal),
      goldenRatio: this.explainGoldenRatio()
    };
  },

  calculateReeves: function(wristCm, ankleCm) {
    const chest = Math.round(wristCm * this.reevesRatios.chest * 10) / 10;

    return {
      arms: Math.round(wristCm * this.reevesRatios.arm * 10) / 10,
      calves: Math.round(ankleCm * this.reevesRatios.calf * 10) / 10,
      neck: Math.round(wristCm * this.reevesRatios.neck * 10) / 10,
      chest,
      waist: Math.round(chest * this.reevesRatios.waist * 10) / 10,
      thighs: Math.round(ankleCm * this.reevesRatios.thigh * 10) / 10,
      hips: Math.round(chest * this.reevesRatios.hip * 10) / 10
    };
  },

  calculateGrecian: function(heightCm) {
    return {
      chest: Math.round(heightCm * this.grecianRatios.chest * 10) / 10,
      waist: Math.round(heightCm * this.grecianRatios.waist * 10) / 10,
      hips: Math.round(heightCm * this.grecianRatios.hips * 10) / 10,
      thighs: Math.round(heightCm * this.grecianRatios.thigh * 10) / 10,
      arms: Math.round(heightCm * this.grecianRatios.arm * 10) / 10,
      calves: Math.round(heightCm * this.grecianRatios.calf * 10) / 10,
      neck: Math.round(heightCm * this.grecianRatios.neck * 10) / 10
    };
  },

  compareToIdeal: function(current, ideal) {
    const comparison = {};

    Object.keys(ideal).forEach(part => {
      if (current[part]) {
        const diff = current[part] - ideal[part];
        const percentDiff = (diff / ideal[part]) * 100;
        comparison[part] = {
          current: current[part],
          ideal: ideal[part],
          difference: Math.round(diff * 10) / 10,
          percentFromIdeal: Math.round(percentDiff * 10) / 10,
          status: Math.abs(percentDiff) < 5 ? 'Ideal range' : (percentDiff < 0 ? 'Below ideal' : 'Above ideal')
        };
      }
    });

    return comparison;
  },

  getSymmetryRatios: function(ideal) {
    return {
      shoulderToWaist: Math.round((ideal.chest / ideal.waist) * 100) / 100,
      idealShoulderToWaist: 1.618, // Golden ratio
      armToNeck: 'Should be equal',
      calfToArm: 'Should be equal',
      chestToArm: Math.round((ideal.chest / ideal.arms) * 100) / 100
    };
  },

  explainGoldenRatio: function() {
    return {
      ratio: 1.618,
      application: 'Shoulder-to-waist ratio of 1.618 is considered aesthetically ideal',
      history: 'Used in classical Greek sculpture and Renaissance art',
      modernUse: 'Still referenced in mens physique judging criteria'
    };
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 16. NAVY BODY FAT CALCULATOR
// US Navy circumference method
// ───────────────────────────────────────────────────────────────────────────
const NavyBodyFatCalculator = {
  /**
   * Calculate body fat using Navy method
   * @param {Object} measurements - Body measurements in cm
   * @param {string} sex - 'male' or 'female'
   * @returns {Object} Body fat estimate and category
   */
  calculate: function(measurements, sex) {
    const { heightCm, waistCm, neckCm, hipCm } = measurements;

    let bodyFatPercent;

    if (sex === 'male') {
      // Men: 86.010 × log10(waist - neck) - 70.041 × log10(height) + 36.76
      bodyFatPercent = 86.010 * Math.log10(waistCm - neckCm) - 70.041 * Math.log10(heightCm) + 36.76;
    } else {
      // Women: 163.205 × log10(waist + hip - neck) - 97.684 × log10(height) - 78.387
      bodyFatPercent = 163.205 * Math.log10(waistCm + hipCm - neckCm) - 97.684 * Math.log10(heightCm) - 78.387;
    }

    bodyFatPercent = Math.max(0, Math.round(bodyFatPercent * 10) / 10);

    return {
      bodyFatPercent,
      category: this.categorize(bodyFatPercent, sex),
      leanMassPercent: 100 - bodyFatPercent,
      accuracy: this.getAccuracyInfo(),
      recommendations: this.getRecommendations(bodyFatPercent, sex)
    };
  },

  categorize: function(bf, sex) {
    const categories = sex === 'male' ? {
      essential: { max: 5, name: 'Essential Fat' },
      athlete: { max: 13, name: 'Athletes' },
      fitness: { max: 17, name: 'Fitness' },
      average: { max: 24, name: 'Average' },
      obese: { max: 100, name: 'Obese' }
    } : {
      essential: { max: 13, name: 'Essential Fat' },
      athlete: { max: 20, name: 'Athletes' },
      fitness: { max: 24, name: 'Fitness' },
      average: { max: 31, name: 'Average' },
      obese: { max: 100, name: 'Obese' }
    };

    for (const [key, cat] of Object.entries(categories)) {
      if (bf <= cat.max) {
        return { category: cat.name, level: key };
      }
    }
  },

  getAccuracyInfo: function() {
    return {
      accuracy: '±3-4% compared to DEXA',
      bestFor: 'Tracking changes over time',
      limitations: [
        'Less accurate for very lean or very overweight individuals',
        'Doesnt distinguish between different fat deposits',
        'Can be affected by water retention'
      ],
      tips: [
        'Measure at same time of day',
        'Measure after using bathroom',
        'Use consistent tension on tape measure',
        'Take average of 3 measurements'
      ]
    };
  },

  getRecommendations: function(bf, sex) {
    const target = sex === 'male' ?
      { competition: '6-8%', athletic: '10-14%', healthy: '14-17%' } :
      { competition: '14-18%', athletic: '18-22%', healthy: '22-28%' };

    return {
      targets: target,
      current: bf,
      toAthleticRange: sex === 'male' ?
        (bf > 14 ? `Lose ${Math.round(bf - 14)}% body fat` : 'Already in athletic range') :
        (bf > 22 ? `Lose ${Math.round(bf - 22)}% body fat` : 'Already in athletic range')
    };
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 17. ADVANCED TRAINING TECHNIQUES DATABASE
// Intensity techniques for advanced trainees
// ───────────────────────────────────────────────────────────────────────────
const AdvancedTrainingTechniques = {
  techniques: {
    dropSets: {
      name: 'Drop Sets',
      description: 'Perform set to failure, immediately reduce weight by 20-30%, continue to failure',
      bestFor: ['Hypertrophy', 'Metabolic stress', 'Time efficiency'],
      protocol: 'Original weight → -20% → -20% (3 total drops)',
      whenToUse: 'Last set of exercise, 1-2x per workout',
      recovery: 'High fatigue - allow 72+ hours before training same muscle',
      research: 'Shown to increase muscle fiber recruitment and metabolic stress'
    },

    restPause: {
      name: 'Rest-Pause Sets',
      description: 'Perform set to near failure, rest 10-20 seconds, continue for additional reps',
      bestFor: ['Strength', 'Hypertrophy', 'Recruiting high-threshold motor units'],
      protocol: 'Set to ~2 RIR → 15 sec rest → reps to failure → 15 sec rest → reps to failure',
      whenToUse: 'Main compound movements, 1-2 sets per workout',
      recovery: 'Moderate-high fatigue',
      research: 'Effective for increasing total volume with heavy loads'
    },

    myoReps: {
      name: 'Myo-Reps',
      description: 'Activation set followed by cluster sets with short rest',
      bestFor: ['Hypertrophy', 'Time efficiency', 'Accumulating effective reps'],
      protocol: 'Activation set (12-20 reps to 2-3 RIR) → 5 deep breaths → 3-5 reps → repeat 3-5 times',
      whenToUse: 'Isolation exercises, machine work',
      recovery: 'Moderate fatigue',
      research: 'Developed by Borge Fagerli - maximizes "effective reps" near failure'
    },

    supersets: {
      name: 'Supersets',
      description: 'Two exercises performed back-to-back with no rest',
      types: {
        antagonist: 'Opposing muscles (biceps/triceps) - maintains strength',
        agonist: 'Same muscle - increases fatigue/pump',
        compound: 'Pre-exhaust or post-exhaust strategies'
      },
      bestFor: ['Time efficiency', 'Metabolic stress', 'Pump'],
      whenToUse: 'Throughout workout, especially when short on time',
      recovery: 'Low-moderate fatigue for antagonist, higher for agonist'
    },

    bfr: {
      name: 'Blood Flow Restriction (BFR)',
      description: 'Partial restriction of blood flow during light weight training',
      bestFor: ['Hypertrophy with light loads', 'Rehabilitation', 'Deload periods'],
      protocol: {
        pressure: '40-80% arterial occlusion (moderate tightness)',
        weight: '20-40% 1RM',
        reps: '30-15-15-15 with 30 sec rest',
        duration: 'Keep cuffs on for entire 4 sets'
      },
      mechanism: 'Metabolite accumulation, cell swelling, hormone response',
      research: 'Meta-analyses show similar hypertrophy to heavy training when used correctly',
      caution: 'Not recommended for those with cardiovascular conditions'
    },

    tempoTraining: {
      name: 'Tempo Training',
      description: 'Controlling the speed of each phase of the lift',
      notation: 'Eccentric-Pause-Concentric-Pause (e.g., 4-1-2-0)',
      protocols: {
        hypertrophy: '3-1-2-0 (3 sec eccentric, 1 sec pause, 2 sec concentric)',
        strength: '2-0-X-0 (2 sec eccentric, explosive concentric)',
        timeUnderTension: '4-2-4-0 (very slow for metabolic stress)'
      },
      bestFor: ['Mind-muscle connection', 'Technique improvement', 'Injury prevention'],
      whenToUse: 'Accessory exercises, rehabilitation, technique work'
    },

    giantSets: {
      name: 'Giant Sets',
      description: '4+ exercises performed consecutively for same muscle group',
      bestFor: ['Metabolic conditioning', 'Time efficiency', 'Pre-contest training'],
      example: 'Chest: Incline Press → Flat Flyes → Dips → Cable Crossover',
      protocol: 'Perform all exercises, rest 2-3 min, repeat 2-4 rounds',
      whenToUse: 'Occasionally for shock effect, not as primary training method',
      recovery: 'Very high fatigue - use sparingly'
    },

    mechanicalDropSets: {
      name: 'Mechanical Drop Sets',
      description: 'Change exercise angle/grip to extend set without reducing weight',
      example: {
        triceps: 'Overhead Extension → Pushdown → Close-Grip Push-up',
        biceps: 'Incline Curl → Standing Curl → Spider Curl',
        shoulders: 'Seated Press → Standing Press → Push Press'
      },
      bestFor: ['Hypertrophy', 'Strength-endurance', 'Mind-muscle connection'],
      protocol: 'Perform to failure, switch to easier variation, continue'
    },

    eccentricOverload: {
      name: 'Eccentric Overload',
      description: 'Emphasize the lowering phase with heavier than normal loads',
      protocols: {
        negative: 'Partner assists concentric, solo slow eccentric',
        weight_releasers: 'Extra weight drops off at bottom',
        twoToOne: 'Lift with two limbs, lower with one'
      },
      bestFor: ['Strength', 'Breaking plateaus', 'Advanced trainees'],
      caution: 'Very high muscle damage - requires extended recovery',
      research: 'Eccentric training produces unique adaptations in muscle architecture'
    }
  },

  getAll: function() {
    return Object.values(this.techniques).map(t => ({
      name: t.name,
      description: t.description,
      bestFor: Array.isArray(t.bestFor) ? t.bestFor.join(', ') : t.bestFor
    }));
  },

  getRecommendation: function(goal, experience) {
    const recommendations = {
      hypertrophy: {
        beginner: ['Tempo training', 'Supersets (antagonist)'],
        intermediate: ['Drop sets', 'Rest-pause', 'Myo-reps'],
        advanced: ['BFR', 'Giant sets', 'Mechanical drop sets']
      },
      strength: {
        beginner: ['Tempo training (technique focus)'],
        intermediate: ['Rest-pause', 'Eccentric overload (light)'],
        advanced: ['Eccentric overload', 'Cluster sets']
      }
    };

    return recommendations[goal]?.[experience] || recommendations.hypertrophy.intermediate;
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 18. INJURY PREVENTION & MOBILITY GUIDE
// Prehab exercises and mobility protocols
// ───────────────────────────────────────────────────────────────────────────
const InjuryPreventionGuide = {
  commonIssues: {
    shoulder: {
      causes: ['Excessive pressing', 'Poor posture', 'Lack of rear delt work'],
      prevention: [
        { exercise: 'Face Pulls', sets: '3x15-20', frequency: 'Every training day' },
        { exercise: 'External Rotations', sets: '2x15-20', frequency: '3x/week' },
        { exercise: 'YTWLs', sets: '2x10 each', frequency: '2-3x/week' },
        { exercise: 'Band Pull-Aparts', sets: '3x20', frequency: 'Daily' }
      ],
      ratio: 'Maintain 2:1 pull-to-push ratio',
      stretches: ['Doorway stretch', 'Sleeper stretch', 'Cross-body stretch']
    },

    lowerBack: {
      causes: ['Weak core', 'Poor hip mobility', 'Excessive spinal loading'],
      prevention: [
        { exercise: 'Dead Bug', sets: '3x10 each side', frequency: 'Daily' },
        { exercise: 'Bird Dog', sets: '3x10 each side', frequency: 'Daily' },
        { exercise: 'McGill Big 3', sets: '3x10 each', frequency: '3x/week' },
        { exercise: 'Hip Hinge Pattern Work', sets: '2x10', frequency: 'Before deadlifts' }
      ],
      stretches: ['Hip flexor stretch', 'Pigeon pose', 'Cat-cow'],
      programming: 'Limit heavy spinal loading to 2-3x/week'
    },

    knees: {
      causes: ['Quad dominance', 'Poor ankle mobility', 'Tracking issues'],
      prevention: [
        { exercise: 'Terminal Knee Extensions', sets: '3x15-20', frequency: '3x/week' },
        { exercise: 'Ankle Mobility Drills', sets: '2 min each', frequency: 'Before squats' },
        { exercise: 'Single Leg Work', sets: 'Part of program', frequency: '2x/week' },
        { exercise: 'Hip Strengthening', sets: '3x15', frequency: '2-3x/week' }
      ],
      stretches: ['Quad stretch', 'Calf stretch', 'Hip flexor stretch'],
      technique: 'Ensure proper knee tracking over toes'
    },

    elbow: {
      causes: ['Excessive curl volume', 'Grip issues', 'Tricep overuse'],
      prevention: [
        { exercise: 'Wrist curls/extensions', sets: '2x15-20', frequency: '2x/week' },
        { exercise: 'Hammer curls', sets: '2x12-15', frequency: 'Include in arm training' },
        { exercise: 'Elbow flexion/extension stretches', duration: '30 sec each', frequency: 'Post-workout' }
      ],
      recovery: ['Avoid excessive straight bar work', 'Use neutral grip options', 'Ice after training if needed']
    }
  },

  mobilityProtocols: {
    preworkout: {
      duration: '5-10 minutes',
      exercises: [
        'Arm circles',
        'Hip circles',
        'Leg swings',
        'Cat-cow',
        'World\'s greatest stretch',
        'Band pull-aparts'
      ],
      note: 'Dynamic movements only - save static stretching for post-workout'
    },

    postworkout: {
      duration: '10-15 minutes',
      exercises: [
        'Static stretch worked muscles (30-60 sec each)',
        'Foam rolling (30-60 sec per area)',
        'Light walking (5 min cooldown)'
      ]
    },

    dedicatedMobility: {
      duration: '20-30 minutes',
      frequency: '2-3x/week',
      focus: [
        'Hip mobility (pigeon, 90-90, hip flexor)',
        'Thoracic mobility (foam roller, rotations)',
        'Shoulder mobility (wall slides, band work)',
        'Ankle mobility (wall stretches, squat holds)'
      ]
    }
  },

  warningSignsToStop: [
    'Sharp pain during exercise',
    'Pain that worsens with movement',
    'Numbness or tingling',
    'Significant swelling',
    'Pain at rest that doesn\'t improve'
  ],

  getProtocol: function(bodyPart) {
    return this.commonIssues[bodyPart] || null;
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 19. HMB SUPPLEMENTATION GUIDE
// Based on 2025 ISSN Position Stand
// ───────────────────────────────────────────────────────────────────────────
const HMBGuide = {
  overview: {
    fullName: 'Beta-Hydroxy Beta-Methylbutyrate',
    whatItIs: 'Metabolite of the amino acid leucine',
    mechanism: 'Reduces muscle protein breakdown, may enhance protein synthesis',
    formsAvailable: ['HMB-Ca (calcium salt)', 'HMB-FA (free acid)']
  },

  dosing: {
    standard: '3g per day',
    timing: {
      hmbCa: '1g, 3x daily with meals',
      hmbFa: '1-2g, 30-60 minutes pre-workout (faster absorption)'
    },
    loading: 'Not required but 2 weeks for full effect'
  },

  benefits: {
    proven: [
      'Reduces muscle protein breakdown',
      'May preserve muscle during caloric restriction',
      'May accelerate recovery from intense training',
      'Beneficial for older adults and aging athletes'
    ],
    mayHelp: [
      'Lean mass gains in untrained individuals',
      'Performance in endurance activities',
      'Recovery from muscle-damaging exercise'
    ],
    limitedEvidence: [
      'Significant muscle gains in trained athletes',
      'Performance enhancement in well-trained individuals'
    ]
  },

  whoShouldConsider: [
    'Older adults (40+) concerned about muscle loss',
    'During aggressive caloric deficits (competition prep)',
    'During periods of reduced training (injury, travel)',
    'Beginners starting resistance training',
    'Those doing high-volume damaging training'
  ],

  whoMayNotBenefit: [
    'Well-trained athletes with adequate nutrition',
    'Those already consuming sufficient leucine (2-3g per meal)',
    'Young athletes with optimal recovery'
  ],

  safetyAndSideEffects: {
    safety: 'Generally recognized as safe (GRAS)',
    sideEffects: 'Rare - minor GI discomfort in some',
    interactions: 'None known',
    duration: 'Safe for long-term use'
  },

  research: {
    source: 'ISSN Position Stand Update (January 2025)',
    keyFinding: 'Most beneficial for populations prone to muscle loss or during high-stress training',
    volumeOfResearch: '750+ articles reviewed since 2013 position stand'
  }
};

// ───────────────────────────────────────────────────────────────────────────
// 20. COMBAT SPORTS WEIGHT CUT CALCULATOR
// Based on 2025 ISSN Position Stand
// ───────────────────────────────────────────────────────────────────────────
const CombatSportsWeightCut = {
  /**
   * Calculate safe weight cut strategy
   * @param {Object} params - Athlete parameters
   * @returns {Object} Weight cut protocol
   */
  calculate: function(params) {
    const { currentWeight, targetWeight, daysUntilWeighIn, competitionType, experienceLevel } = params;

    const weightToCut = currentWeight - targetWeight;
    const percentToCut = (weightToCut / currentWeight) * 100;

    // Assess safety
    const safetyAssessment = this.assessSafety(percentToCut, daysUntilWeighIn, experienceLevel);

    // Generate protocol
    const protocol = this.generateProtocol(params, percentToCut);

    return {
      weightToCut: Math.round(weightToCut * 10) / 10,
      percentToCut: Math.round(percentToCut * 10) / 10,
      safetyAssessment,
      protocol,
      rehydration: this.getRehydrationProtocol(params),
      offSeasonRecommendations: this.getOffSeasonGuidelines(targetWeight)
    };
  },

  assessSafety: function(percentToCut, days, experience) {
    if (percentToCut > 10) {
      return {
        safe: false,
        risk: 'Extreme',
        recommendation: 'Consider moving up a weight class',
        healthRisks: ['Severe dehydration', 'Kidney damage', 'Heart strain', 'Death risk']
      };
    }

    if (percentToCut > 8) {
      return {
        safe: false,
        risk: 'High',
        recommendation: 'Only for experienced athletes with medical supervision',
        healthRisks: ['Significant performance decrease', 'Recovery challenges']
      };
    }

    if (percentToCut > 5) {
      return {
        safe: experience !== 'beginner',
        risk: 'Moderate',
        recommendation: 'Manageable with proper protocol',
        healthRisks: ['Some performance impact', 'Requires careful rehydration']
      };
    }

    return {
      safe: true,
      risk: 'Low',
      recommendation: 'Safe range for most athletes',
      healthRisks: ['Minimal with proper execution']
    };
  },

  generateProtocol: function(params, percentToCut) {
    const { daysUntilWeighIn, currentWeight, targetWeight } = params;

    // Split weight cut into phases
    const phases = {
      basePhase: {
        name: 'Gradual Weight Loss',
        duration: `${daysUntilWeighIn - 7} days`,
        target: 'Lose fat weight through caloric deficit',
        method: '500-750 cal deficit, high protein (2.5g/kg)',
        expectedLoss: Math.round(percentToCut * 0.4 * currentWeight / 100)
      },
      loadingPhase: {
        name: 'Water/Sodium Loading',
        duration: 'Days 7-4 before weigh-in',
        method: 'Increase water to 7-8L/day, high sodium',
        purpose: 'Upregulate water excretion mechanisms'
      },
      waterCutPhase: {
        name: 'Water Restriction',
        duration: 'Days 3-1 before weigh-in',
        schedule: [
          { day: 3, water: '50% normal', sodium: 'Low' },
          { day: 2, water: '25% normal', sodium: 'Very low' },
          { day: 1, water: 'Sips only', sodium: 'None' }
        ],
        expectedLoss: '3-5% bodyweight'
      },
      saunaPhase: {
        name: 'Active Sweating (if needed)',
        duration: 'Night before or morning of weigh-in',
        protocol: '15-20 min sauna, 10 min break, repeat',
        maxSessions: 3,
        warning: 'Monitor for dizziness, nausea - stop if experiencing'
      }
    };

    return phases;
  },

  getRehydrationProtocol: function(params) {
    const { targetWeight, timeBetweenWeighInAndFight } = params;

    const rehydrationGoal = Math.round(targetWeight * 0.08); // ~8% bodyweight

    return {
      goal: `Rehydrate ${rehydrationGoal}kg before competition`,
      immediatelyPostWeighIn: [
        'Oral rehydration solution (electrolytes)',
        'Small easily digestible meal',
        'Avoid large amounts of plain water (dilutes electrolytes)'
      ],
      hourlyIntake: {
        fluid: '1-1.5L per hour',
        sodium: '500-700mg per liter',
        carbs: '30-60g per hour'
      },
      foods: [
        'Rice, pasta, bread',
        'Lean protein',
        'Fruit (bananas, dates)',
        'Avoid high fat, high fiber'
      ],
      timeline: {
        immediate: 'Electrolyte drink + small carb snack',
        hour1: 'Light meal + continued fluids',
        hour2_4: 'Moderate meals + sipping fluids',
        preFight: 'Light snack 1-2 hours before'
      }
    };
  },

  getOffSeasonGuidelines: function(competitionWeight) {
    const offSeasonWeight = competitionWeight * 1.12; // 12% above

    return {
      recommendedOffSeasonWeight: Math.round(offSeasonWeight * 10) / 10,
      maxOffSeasonWeight: Math.round(competitionWeight * 1.15 * 10) / 10,
      rationale: 'ISSN recommends maintaining 12-15% above competition weight',
      benefits: [
        'Less aggressive cuts required',
        'Better training performance',
        'Reduced health risks',
        'Better long-term career health'
      ]
    };
  },

  research: {
    source: 'ISSN Position Stand (March 2025)',
    title: 'Nutrition and weight cut strategies for mixed martial arts and combat sports',
    keyRecommendations: [
      'Off-season weight should be 12-15% above competition weight',
      'Gradual weight loss preferred over rapid water cuts',
      'Rapid weight cuts (>5%) impair performance',
      'Rehydration critical for performance and safety'
    ]
  }
};

// Export all modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SCIENTIFIC_REFERENCES,
    SUPPLEMENT_RECOMMENDATIONS,
    MEAL_TIMING_TEMPLATES,
    TRAINING_REFERENCES,
    EDUCATION_KNOWLEDGE,
    GOLDEN_ERA_METHODOLOGY,
    OneRepMaxCalculator,
    CardioZoneCalculator,
    EducationalTips,
    // New Advanced Calculators
    FFMICalculator,
    VolumeLandmarksCalculator,
    BodyRecompCalculator,
    StrengthScoreCalculator,
    ReverseDietCalculator,
    CarbCyclingProtocol,
    PeakWeekCalculator,
    PeriodizationModels,
    DeloadGenerator,
    ProgressiveOverloadTracker,
    SleepOptimization,
    RecoveryReadinessAssessment,
    StressManagement,
    GeneticPotentialCalculator,
    IdealMeasurementsCalculator,
    NavyBodyFatCalculator,
    AdvancedTrainingTechniques,
    InjuryPreventionGuide,
    HMBGuide,
    CombatSportsWeightCut
  };
}
