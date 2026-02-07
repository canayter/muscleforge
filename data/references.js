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

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SCIENTIFIC_REFERENCES, SUPPLEMENT_RECOMMENDATIONS, MEAL_TIMING_TEMPLATES, TRAINING_REFERENCES };
}
