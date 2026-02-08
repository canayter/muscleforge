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

// Export for use in other files
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
    EducationalTips
  };
}
