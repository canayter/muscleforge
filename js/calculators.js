/**
 * MuscleForge Advanced Calculators
 *
 * Scientific formulas backed by peer-reviewed research:
 * - BMR: Mifflin-St Jeor (most accurate for modern populations)
 * - TDEE: Activity multipliers from sports science literature
 * - Body Fat: Navy method, Jackson-Pollock 3-site
 * - Protein: ISSN position stand recommendations
 *
 * References included in SCIENTIFIC_REFERENCES object
 */

const MuscleForgeCalculators = {
  // ═══════════════════════════════════════════════════════════════════════════
  // UNIT CONVERSIONS
  // ═══════════════════════════════════════════════════════════════════════════
  convert: {
    lbsToKg: (lbs) => lbs * 0.453592,
    kgToLbs: (kg) => kg * 2.20462,
    inchesToCm: (inches) => inches * 2.54,
    cmToInches: (cm) => cm / 2.54,
    feetInchesToCm: (feet, inches) => (feet * 12 + inches) * 2.54,
    cmToFeetInches: (cm) => {
      const totalInches = cm / 2.54;
      return { feet: Math.floor(totalInches / 12), inches: Math.round(totalInches % 12) };
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BMI CALCULATOR
  // ═══════════════════════════════════════════════════════════════════════════
  /**
   * Calculate BMI and classification
   * Note: BMI has limitations for muscular individuals
   * Reference: WHO BMI classification
   */
  calculateBMI(weightKg, heightCm) {
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    let classification, risk, note;

    if (bmi < 18.5) {
      classification = 'Underweight';
      risk = 'Increased health risk';
      note = 'May indicate insufficient nutrition or underlying health issues.';
    } else if (bmi < 25) {
      classification = 'Normal';
      risk = 'Low health risk';
      note = 'Healthy weight range for most individuals.';
    } else if (bmi < 30) {
      classification = 'Overweight';
      risk = 'Increased health risk';
      note = 'May indicate excess body fat, though muscular individuals often fall here.';
    } else if (bmi < 35) {
      classification = 'Obese Class I';
      risk = 'High health risk';
      note = 'Increased risk of metabolic diseases.';
    } else if (bmi < 40) {
      classification = 'Obese Class II';
      risk = 'Very high health risk';
      note = 'Significantly increased health risks.';
    } else {
      classification = 'Obese Class III';
      risk = 'Extremely high health risk';
      note = 'Severe obesity with serious health implications.';
    }

    return {
      bmi: Math.round(bmi * 10) / 10,
      classification,
      risk,
      note,
      muscularNote: 'BMI does not distinguish between muscle and fat mass. Bodybuilders often have elevated BMI despite low body fat.'
    };
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BMR CALCULATORS
  // ═══════════════════════════════════════════════════════════════════════════
  /**
   * Mifflin-St Jeor Equation (1990) - Most accurate for modern populations
   * Reference: Mifflin MD, et al. Am J Clin Nutr. 1990;51(2):241-247
   */
  calculateBMR_MifflinStJeor(weightKg, heightCm, age, sex) {
    const base = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
    return sex === 'male' ? base + 5 : base - 161;
  },

  /**
   * Harris-Benedict Equation (Revised 1984)
   * Reference: Roza AM, Shizgal HM. Am J Clin Nutr. 1984;40(1):168-182
   */
  calculateBMR_HarrisBenedict(weightKg, heightCm, age, sex) {
    if (sex === 'male') {
      return 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
    }
    return 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
  },

  /**
   * Katch-McArdle Formula - Uses lean body mass (most accurate if BF% known)
   * Reference: Katch F, et al. Med Sci Sports Exerc. 1996
   */
  calculateBMR_KatchMcArdle(leanBodyMassKg) {
    return 370 + (21.6 * leanBodyMassKg);
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TDEE CALCULATOR
  // ═══════════════════════════════════════════════════════════════════════════
  /**
   * Activity multipliers based on sports science research
   * Reference: Position of the Academy of Nutrition and Dietetics
   */
  activityMultipliers: {
    sedentary: { value: 1.2, description: 'Little to no exercise, desk job' },
    light: { value: 1.375, description: 'Light exercise 1-3 days/week' },
    moderate: { value: 1.55, description: 'Moderate exercise 3-5 days/week' },
    active: { value: 1.725, description: 'Heavy exercise 6-7 days/week' },
    veryActive: { value: 1.9, description: 'Very heavy exercise, physical job, 2x training' },
    athlete: { value: 2.1, description: 'Professional athlete, extreme training' }
  },

  calculateTDEE(bmr, activityLevel) {
    const multiplier = this.activityMultipliers[activityLevel]?.value || 1.55;
    return Math.round(bmr * multiplier);
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BODY FAT CALCULATORS
  // ═══════════════════════════════════════════════════════════════════════════
  /**
   * US Navy Body Fat Formula
   * Reference: Hodgdon JA, Beckett MB. Naval Health Research Center. 1984
   */
  calculateBodyFat_Navy(sex, heightCm, waistCm, neckCm, hipCm = null) {
    if (sex === 'male') {
      const bf = 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450;
      return Math.max(0, Math.round(bf * 10) / 10);
    } else {
      if (!hipCm) throw new Error('Hip measurement required for females');
      const bf = 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hipCm - neckCm) + 0.22100 * Math.log10(heightCm)) - 450;
      return Math.max(0, Math.round(bf * 10) / 10);
    }
  },

  /**
   * Body fat classification for bodybuilding
   * Based on IFBB competition standards and sports science
   */
  getBodyFatClassification(bodyFatPercent, sex) {
    if (sex === 'male') {
      if (bodyFatPercent < 6) return { category: 'Competition', description: 'Contest-ready bodybuilder', sustainable: false };
      if (bodyFatPercent < 10) return { category: 'Athletic', description: 'Very lean, visible abs', sustainable: true };
      if (bodyFatPercent < 15) return { category: 'Fitness', description: 'Good muscle definition', sustainable: true };
      if (bodyFatPercent < 20) return { category: 'Average', description: 'Some definition', sustainable: true };
      if (bodyFatPercent < 25) return { category: 'Above Average', description: 'Minimal definition', sustainable: true };
      return { category: 'Obese', description: 'Health risk zone', sustainable: false };
    } else {
      if (bodyFatPercent < 14) return { category: 'Competition', description: 'Contest-ready', sustainable: false };
      if (bodyFatPercent < 18) return { category: 'Athletic', description: 'Very lean', sustainable: true };
      if (bodyFatPercent < 24) return { category: 'Fitness', description: 'Good definition', sustainable: true };
      if (bodyFatPercent < 30) return { category: 'Average', description: 'Healthy range', sustainable: true };
      if (bodyFatPercent < 35) return { category: 'Above Average', description: 'Minimal definition', sustainable: true };
      return { category: 'Obese', description: 'Health risk zone', sustainable: false };
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BODY COMPOSITION
  // ═══════════════════════════════════════════════════════════════════════════
  calculateBodyComposition(weightKg, bodyFatPercent) {
    const fatMass = weightKg * (bodyFatPercent / 100);
    const leanMass = weightKg - fatMass;

    return {
      totalWeight: Math.round(weightKg * 10) / 10,
      fatMass: Math.round(fatMass * 10) / 10,
      leanMass: Math.round(leanMass * 10) / 10,
      fatMassLbs: Math.round(fatMass * 2.20462 * 10) / 10,
      leanMassLbs: Math.round(leanMass * 2.20462 * 10) / 10
    };
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MACRONUTRIENT CALCULATORS
  // ═══════════════════════════════════════════════════════════════════════════
  /**
   * Calculate macros based on goal and body composition
   * References:
   * - ISSN Position Stand on Protein (Jäger et al., 2017)
   * - ISSN Position Stand on Diets and Body Composition (Aragon et al., 2017)
   */
  macroProfiles: {
    bodybuilding: {
      name: 'Bodybuilding Standard',
      protein: 40, carbs: 40, fat: 20,
      description: 'High protein for muscle synthesis, balanced carbs for training'
    },
    highProtein: {
      name: 'High Protein',
      protein: 45, carbs: 35, fat: 20,
      description: 'Maximum protein for aggressive cutting or high volume training'
    },
    highCarb: {
      name: 'High Carb',
      protein: 30, carbs: 55, fat: 15,
      description: 'Optimal for high-intensity athletes and endurance'
    },
    lowCarb: {
      name: 'Low Carb',
      protein: 40, carbs: 20, fat: 40,
      description: 'Reduced carbs for fat adaptation and cutting'
    },
    keto: {
      name: 'Ketogenic',
      protein: 25, carbs: 5, fat: 70,
      description: 'Very low carb for ketosis and fat burning'
    },
    balanced: {
      name: 'Balanced',
      protein: 30, carbs: 40, fat: 30,
      description: 'Standard healthy eating distribution'
    },
    competitionPrep: {
      name: 'Competition Prep',
      protein: 50, carbs: 30, fat: 20,
      description: 'Extreme protein for muscle preservation during aggressive cut'
    }
  },

  calculateMacros(tdee, profile, goal = 'maintain') {
    // Adjust calories based on goal
    let targetCalories = tdee;
    if (goal === 'cut') targetCalories -= 500; // ~1 lb/week loss
    if (goal === 'aggressiveCut') targetCalories -= 750; // ~1.5 lb/week
    if (goal === 'bulk') targetCalories += 300; // Lean bulk
    if (goal === 'aggressiveBulk') targetCalories += 500; // Standard bulk

    const macroProfile = this.macroProfiles[profile] || this.macroProfiles.bodybuilding;

    const proteinCals = targetCalories * (macroProfile.protein / 100);
    const carbCals = targetCalories * (macroProfile.carbs / 100);
    const fatCals = targetCalories * (macroProfile.fat / 100);

    return {
      calories: Math.round(targetCalories),
      protein: { grams: Math.round(proteinCals / 4), percent: macroProfile.protein },
      carbs: { grams: Math.round(carbCals / 4), percent: macroProfile.carbs },
      fat: { grams: Math.round(fatCals / 9), percent: macroProfile.fat },
      profile: macroProfile.name,
      description: macroProfile.description
    };
  },

  /**
   * Calculate protein needs based on ISSN guidelines
   * Reference: Jäger R, et al. J Int Soc Sports Nutr. 2017;14:20
   */
  calculateProteinNeeds(weightKg, goal, activityLevel) {
    let proteinPerKg;

    if (goal === 'cut' || goal === 'aggressiveCut') {
      // Higher protein during caloric deficit to preserve muscle
      proteinPerKg = { min: 2.3, optimal: 2.8, max: 3.1 };
    } else if (goal === 'bulk' || goal === 'aggressiveBulk') {
      // Moderate-high protein for muscle building
      proteinPerKg = { min: 1.6, optimal: 2.2, max: 2.4 };
    } else {
      // Maintenance
      proteinPerKg = { min: 1.4, optimal: 1.8, max: 2.2 };
    }

    // Adjust for activity level
    const activityBonus = activityLevel === 'veryActive' || activityLevel === 'athlete' ? 0.2 : 0;

    return {
      minimum: Math.round(weightKg * (proteinPerKg.min + activityBonus)),
      optimal: Math.round(weightKg * (proteinPerKg.optimal + activityBonus)),
      maximum: Math.round(weightKg * (proteinPerKg.max + activityBonus)),
      perMeal: Math.round((weightKg * proteinPerKg.optimal) / 5), // 5 meals
      note: 'ISSN recommends 0.4-0.55g/kg per meal for optimal muscle protein synthesis'
    };
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WATER INTAKE CALCULATOR
  // ═══════════════════════════════════════════════════════════════════════════
  /**
   * Calculate water needs based on body weight and activity
   * Reference: ACSM Position Stand on Exercise and Fluid Replacement
   */
  calculateWaterIntake(weightKg, activityLevel, climate = 'moderate') {
    // Base: 30-35ml per kg body weight
    let baseWater = weightKg * 33;

    // Activity adjustment
    const activityMultipliers = {
      sedentary: 1.0,
      light: 1.1,
      moderate: 1.2,
      active: 1.3,
      veryActive: 1.4,
      athlete: 1.5
    };

    // Climate adjustment
    const climateMultipliers = {
      cold: 0.9,
      moderate: 1.0,
      hot: 1.2,
      veryHot: 1.4
    };

    const waterMl = baseWater *
      (activityMultipliers[activityLevel] || 1.2) *
      (climateMultipliers[climate] || 1.0);

    return {
      dailyMl: Math.round(waterMl),
      dailyLiters: Math.round(waterMl / 100) / 10,
      dailyOz: Math.round(waterMl / 29.574),
      dailyGallons: Math.round((waterMl / 3785.41) * 100) / 100,
      perHourTraining: '500-1000ml',
      note: 'Add 500-1000ml per hour of intense training. Monitor urine color (pale yellow = hydrated).'
    };
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // IFBB COMPETITION PREP CALCULATOR
  // ═══════════════════════════════════════════════════════════════════════════
  /**
   * Calculate competition prep timeline and targets
   * Based on typical IFBB prep protocols
   */
  calculateCompetitionPrep(currentWeightKg, currentBodyFat, targetBodyFat, weeksOut) {
    const currentFatMass = currentWeightKg * (currentBodyFat / 100);
    const currentLeanMass = currentWeightKg - currentFatMass;

    // Assume 2-3% lean mass loss during prep (conservative)
    const expectedLeanMassLoss = currentLeanMass * 0.025;
    const finalLeanMass = currentLeanMass - expectedLeanMassLoss;

    // Calculate target weight at target body fat
    const targetWeight = finalLeanMass / (1 - targetBodyFat / 100);
    const totalWeightLoss = currentWeightKg - targetWeight;

    // Weekly loss rate
    const weeklyLoss = totalWeightLoss / weeksOut;
    const weeklyLossPercent = (weeklyLoss / currentWeightKg) * 100;

    // Sustainability check
    let sustainability;
    if (weeklyLossPercent < 0.5) {
      sustainability = { status: 'Conservative', color: 'green', note: 'Excellent for muscle preservation' };
    } else if (weeklyLossPercent < 1.0) {
      sustainability = { status: 'Moderate', color: 'yellow', note: 'Standard prep pace, monitor muscle loss' };
    } else if (weeklyLossPercent < 1.5) {
      sustainability = { status: 'Aggressive', color: 'orange', note: 'Higher risk of muscle loss, requires precise nutrition' };
    } else {
      sustainability = { status: 'Too Aggressive', color: 'red', note: 'Unsustainable - extend prep time or adjust goals' };
    }

    return {
      current: {
        weight: Math.round(currentWeightKg * 10) / 10,
        bodyFat: currentBodyFat,
        fatMass: Math.round(currentFatMass * 10) / 10,
        leanMass: Math.round(currentLeanMass * 10) / 10
      },
      target: {
        weight: Math.round(targetWeight * 10) / 10,
        bodyFat: targetBodyFat,
        fatMass: Math.round((targetWeight * targetBodyFat / 100) * 10) / 10,
        leanMass: Math.round(finalLeanMass * 10) / 10
      },
      plan: {
        totalWeightLoss: Math.round(totalWeightLoss * 10) / 10,
        weeklyLoss: Math.round(weeklyLoss * 100) / 100,
        weeklyLossPercent: Math.round(weeklyLossPercent * 100) / 100,
        dailyDeficit: Math.round((weeklyLoss * 7700) / 7), // 7700 cal = 1kg fat
        weeksOut: weeksOut
      },
      sustainability,
      phases: this.generatePrepPhases(weeksOut)
    };
  },

  generatePrepPhases(weeksOut) {
    const phases = [];

    if (weeksOut >= 16) {
      phases.push({
        name: 'Base Building',
        weeks: `${weeksOut} - ${weeksOut - 3}`,
        focus: 'Establish deficit, maintain training intensity',
        cardio: '20-30 min, 3-4x/week',
        deficit: 'Moderate (300-400 cal)'
      });
    }

    if (weeksOut >= 12) {
      phases.push({
        name: 'Fat Loss Phase',
        weeks: `${Math.min(weeksOut - 4, 12)} - 8`,
        focus: 'Progressive fat loss, monitor strength',
        cardio: '30-45 min, 4-5x/week',
        deficit: 'Moderate-High (400-600 cal)'
      });
    }

    if (weeksOut >= 8) {
      phases.push({
        name: 'Sharpening',
        weeks: '8 - 4',
        focus: 'Final fat loss, detail work',
        cardio: '45-60 min, 5-6x/week',
        deficit: 'High (500-750 cal)'
      });
    }

    phases.push({
      name: 'Peak Week',
      weeks: '1',
      focus: 'Water manipulation, carb loading',
      cardio: 'Reduced - posing practice',
      deficit: 'Variable - strategic depletion/loading'
    });

    return phases;
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MICRONUTRIENT RDA CALCULATOR
  // ═══════════════════════════════════════════════════════════════════════════
  /**
   * Recommended Daily Allowances for athletes
   * Based on NIH guidelines with adjustments for athletes
   */
  getRDAValues(sex, age) {
    // Base adult RDAs (adjusted for athletes)
    const rdas = {
      // Minerals (mg unless noted)
      sodium: { rda: 2300, athleteRda: 3000, unit: 'mg', upperLimit: 5000 },
      potassium: { rda: 2600, athleteRda: 4700, unit: 'mg', upperLimit: null },
      calcium: { rda: 1000, athleteRda: 1200, unit: 'mg', upperLimit: 2500 },
      iron: { rda: sex === 'male' ? 8 : 18, athleteRda: sex === 'male' ? 12 : 22, unit: 'mg', upperLimit: 45 },
      magnesium: { rda: sex === 'male' ? 420 : 320, athleteRda: sex === 'male' ? 500 : 400, unit: 'mg', upperLimit: 350 },
      zinc: { rda: sex === 'male' ? 11 : 8, athleteRda: sex === 'male' ? 15 : 12, unit: 'mg', upperLimit: 40 },
      phosphorus: { rda: 700, athleteRda: 1000, unit: 'mg', upperLimit: 4000 },

      // Vitamins
      vitA: { rda: sex === 'male' ? 900 : 700, athleteRda: sex === 'male' ? 1000 : 800, unit: 'mcg RAE', upperLimit: 3000 },
      vitC: { rda: sex === 'male' ? 90 : 75, athleteRda: 200, unit: 'mg', upperLimit: 2000 },
      vitD: { rda: 15, athleteRda: 50, unit: 'mcg', upperLimit: 100 },
      vitE: { rda: 15, athleteRda: 20, unit: 'mg', upperLimit: 1000 },
      vitK: { rda: sex === 'male' ? 120 : 90, athleteRda: sex === 'male' ? 150 : 120, unit: 'mcg', upperLimit: null },
      vitB6: { rda: 1.3, athleteRda: 2.0, unit: 'mg', upperLimit: 100 },
      vitB12: { rda: 2.4, athleteRda: 4.0, unit: 'mcg', upperLimit: null },
      folate: { rda: 400, athleteRda: 600, unit: 'mcg DFE', upperLimit: 1000 },

      // Other
      fiber: { rda: sex === 'male' ? 38 : 25, athleteRda: sex === 'male' ? 40 : 30, unit: 'g', upperLimit: null },
      omega3: { rda: 1.6, athleteRda: 3.0, unit: 'g', upperLimit: null }
    };

    return rdas;
  },

  calculateMicronutrientPercent(actual, rda) {
    return Math.round((actual / rda) * 100);
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MuscleForgeCalculators;
}
