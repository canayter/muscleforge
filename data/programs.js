/**
 * MuscleForge Training Program Templates
 *
 * Evidence-based training program templates and scientific backing
 * All recommendations supported by peer-reviewed research
 */

// ═══════════════════════════════════════════════════════════════════════════
// TRAINING SCIENCE CONSTANTS
// Backed by peer-reviewed research
// ═══════════════════════════════════════════════════════════════════════════

const TRAINING_SCIENCE = {
  // Weekly set recommendations per muscle group
  // Reference: Schoenfeld et al. 2017 - "Dose-response relationship between weekly
  // resistance training volume and increases in muscle mass"
  weeklyVolume: {
    beginner: {
      minimum: 6,
      optimal: 10,
      maximum: 14,
      rationale: 'Beginners respond well to lower volumes as adaptation occurs rapidly.',
      citation: 'schoenfeld-2017-volume'
    },
    intermediate: {
      minimum: 10,
      optimal: 16,
      maximum: 20,
      rationale: 'Intermediate lifters require higher volumes to continue progressing.',
      citation: 'schoenfeld-2017-volume'
    },
    advanced: {
      minimum: 16,
      optimal: 22,
      maximum: 28,
      rationale: 'Advanced lifters may benefit from very high volumes, with attention to recovery.',
      citation: 'schoenfeld-2017-volume'
    }
  },

  // Training frequency recommendations
  // Reference: Schoenfeld et al. 2016 - "Effects of Resistance Training Frequency
  // on Measures of Muscle Hypertrophy"
  frequency: {
    hypertrophy: {
      optimal: 2,
      range: [2, 3],
      rationale: 'Training each muscle 2x/week superior to 1x/week for hypertrophy when volume equated.',
      citation: 'schoenfeld-2016-frequency'
    },
    strength: {
      optimal: 2,
      range: [1, 3],
      rationale: 'Moderate frequency allows skill practice while permitting recovery from heavy loads.',
      citation: 'rhea-2003-frequency'
    },
    endurance: {
      optimal: 3,
      range: [2, 4],
      rationale: 'Higher frequency supports metabolic adaptations.',
      citation: 'peterson-2004-meta'
    }
  },

  // Rest period recommendations between sets
  // Reference: Schoenfeld et al. 2016 - "Longer Interset Rest Periods Enhance
  // Muscle Strength and Hypertrophy"
  restPeriods: {
    strength: {
      seconds: 180,
      range: [120, 300],
      rationale: 'Longer rest allows complete ATP regeneration for maximal force production.',
      citation: 'schoenfeld-2016-rest'
    },
    hypertrophy: {
      seconds: 90,
      range: [60, 120],
      rationale: 'Moderate rest balances metabolic stress with mechanical tension.',
      citation: 'schoenfeld-2016-rest'
    },
    endurance: {
      seconds: 45,
      range: [30, 60],
      rationale: 'Short rest periods enhance metabolic conditioning.',
      citation: 'de-salles-2009-rest'
    }
  },

  // Rep range recommendations by goal
  repRanges: {
    strength: {
      min: 1,
      max: 5,
      optimal: 3,
      rationale: 'Heavy loads (85%+ 1RM) optimize neural adaptations and maximal strength.',
      citation: 'schoenfeld-2014-rep-ranges'
    },
    hypertrophy: {
      min: 6,
      max: 12,
      optimal: 8,
      rationale: 'Moderate loads (65-85% 1RM) provide optimal mechanical tension and metabolic stress.',
      citation: 'schoenfeld-2014-rep-ranges'
    },
    endurance: {
      min: 12,
      max: 25,
      optimal: 15,
      rationale: 'Higher reps with lighter loads improve muscular endurance and work capacity.',
      citation: 'schoenfeld-2014-rep-ranges'
    }
  },

  // Progressive overload schemes
  progression: {
    linear: {
      name: 'Linear Progression',
      description: 'Add weight each session when target reps achieved.',
      suitableFor: ['beginner'],
      protocol: 'When all prescribed sets are completed at target reps, add 2.5-5 lbs (upper) or 5-10 lbs (lower) next session.',
      rationale: 'Beginners can add weight frequently due to rapid neural and muscular adaptations.',
      citation: 'helms-2014-programming'
    },
    doubleProgression: {
      name: 'Double Progression',
      description: 'Increase reps within range, then add weight.',
      suitableFor: ['intermediate'],
      protocol: 'Work within a rep range (e.g., 8-12). When hitting top of range for all sets, increase weight and return to bottom of range.',
      rationale: 'Provides more sustainable progression as strength gains slow.',
      citation: 'helms-2014-programming'
    },
    periodized: {
      name: 'Block Periodization',
      description: 'Planned volume and intensity waves across mesocycles.',
      suitableFor: ['advanced'],
      protocol: 'Organize training into 4-6 week blocks with varied emphasis. Include deload weeks every 4th week.',
      rationale: 'Manages fatigue and prevents accommodation in advanced lifters.',
      citation: 'peterson-2004-meta'
    }
  },

  // Exercise order principles
  exerciseOrder: {
    rationale: 'Order exercises from highest to lowest skill/fatigue demand to maximize performance.',
    principles: [
      {
        rule: 'Compound before isolation',
        explanation: 'Compound movements require more skill and energy; perform while fresh.',
        citation: 'simao-2012-exercise-order'
      },
      {
        rule: 'Multi-joint before single-joint',
        explanation: 'Similar to compound/isolation, prioritize complex movements.',
        citation: 'simao-2012-exercise-order'
      },
      {
        rule: 'Free weights before machines',
        explanation: 'Free weights require more stabilization; machines provide support when fatigued.',
        citation: 'simao-2012-exercise-order'
      },
      {
        rule: 'Weaknesses first (optional)',
        explanation: 'If prioritizing a lagging muscle, train it first while energy is highest.',
        citation: 'simao-2012-exercise-order'
      }
    ]
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// PROGRAM TEMPLATES
// ═══════════════════════════════════════════════════════════════════════════

const PROGRAM_TEMPLATES = {
  ppl: {
    id: 'ppl',
    name: 'Push/Pull/Legs',
    shortName: 'PPL',
    description: 'Classic bodybuilding split training push muscles, pull muscles, and legs on separate days.',
    daysPerWeek: 6,
    frequency: 2,
    restDays: [7], // Sunday
    suitableFor: ['intermediate', 'advanced'],
    goals: ['hypertrophy', 'strength'],
    split: [
      {
        day: 1,
        name: 'Push A',
        focus: ['chest', 'shoulders', 'triceps'],
        emphasis: 'chest',
        exerciseSlots: [
          { muscle: 'chest', type: 'compound', priority: 1 },
          { muscle: 'chest', type: 'compound', priority: 2 },
          { muscle: 'shoulders', type: 'compound', priority: 3 },
          { muscle: 'chest', type: 'isolation', priority: 4 },
          { muscle: 'shoulders', type: 'isolation', priority: 5 },
          { muscle: 'triceps', type: 'isolation', priority: 6 }
        ]
      },
      {
        day: 2,
        name: 'Pull A',
        focus: ['back', 'biceps'],
        emphasis: 'back',
        exerciseSlots: [
          { muscle: 'back', type: 'compound', priority: 1, pattern: 'vertical' },
          { muscle: 'back', type: 'compound', priority: 2, pattern: 'horizontal' },
          { muscle: 'back', type: 'compound', priority: 3 },
          { muscle: 'back', type: 'isolation', priority: 4 },
          { muscle: 'biceps', type: 'isolation', priority: 5 },
          { muscle: 'biceps', type: 'isolation', priority: 6 }
        ]
      },
      {
        day: 3,
        name: 'Legs A',
        focus: ['quads', 'hamstrings', 'glutes', 'calves'],
        emphasis: 'quads',
        exerciseSlots: [
          { muscle: 'quads', type: 'compound', priority: 1 },
          { muscle: 'quads', type: 'compound', priority: 2 },
          { muscle: 'hamstrings', type: 'compound', priority: 3 },
          { muscle: 'glutes', type: 'compound', priority: 4 },
          { muscle: 'quads', type: 'isolation', priority: 5 },
          { muscle: 'hamstrings', type: 'isolation', priority: 6 },
          { muscle: 'calves', type: 'isolation', priority: 7 }
        ]
      },
      {
        day: 4,
        name: 'Push B',
        focus: ['shoulders', 'chest', 'triceps'],
        emphasis: 'shoulders',
        exerciseSlots: [
          { muscle: 'shoulders', type: 'compound', priority: 1 },
          { muscle: 'chest', type: 'compound', priority: 2 },
          { muscle: 'chest', type: 'compound', priority: 3 },
          { muscle: 'shoulders', type: 'isolation', priority: 4 },
          { muscle: 'shoulders', type: 'isolation', priority: 5 },
          { muscle: 'triceps', type: 'isolation', priority: 6 }
        ]
      },
      {
        day: 5,
        name: 'Pull B',
        focus: ['back', 'biceps'],
        emphasis: 'back',
        exerciseSlots: [
          { muscle: 'back', type: 'compound', priority: 1, pattern: 'horizontal' },
          { muscle: 'back', type: 'compound', priority: 2, pattern: 'vertical' },
          { muscle: 'back', type: 'compound', priority: 3 },
          { muscle: 'back', type: 'isolation', priority: 4 },
          { muscle: 'biceps', type: 'isolation', priority: 5 },
          { muscle: 'biceps', type: 'isolation', priority: 6 }
        ]
      },
      {
        day: 6,
        name: 'Legs B',
        focus: ['hamstrings', 'glutes', 'quads', 'calves'],
        emphasis: 'hamstrings',
        exerciseSlots: [
          { muscle: 'hamstrings', type: 'compound', priority: 1 },
          { muscle: 'glutes', type: 'compound', priority: 2 },
          { muscle: 'quads', type: 'compound', priority: 3 },
          { muscle: 'hamstrings', type: 'isolation', priority: 4 },
          { muscle: 'quads', type: 'isolation', priority: 5 },
          { muscle: 'glutes', type: 'isolation', priority: 6 },
          { muscle: 'calves', type: 'isolation', priority: 7 }
        ]
      }
    ],
    research: {
      citations: ['schoenfeld-2016-frequency', 'helms-2014-programming'],
      rationale: 'Training each muscle group 2x/week is optimal for hypertrophy (Schoenfeld 2016). The PPL split allows high volume per session while providing 48-72 hours between training the same muscles. Grouping push/pull/legs minimizes overlap and fatigue interference.',
      proBodybuilderNote: 'Used extensively by IFBB pros during off-season. Jeff Nippard, Dr. Mike Israetel, and many elite natural bodybuilders recommend this split for intermediate to advanced lifters seeking maximum hypertrophy.'
    }
  },

  upperLower: {
    id: 'upperLower',
    name: 'Upper/Lower',
    shortName: 'U/L',
    description: 'Alternating between upper body and lower body training days.',
    daysPerWeek: 4,
    frequency: 2,
    restDays: [3, 6, 7], // Wed, Sat, Sun
    suitableFor: ['beginner', 'intermediate'],
    goals: ['hypertrophy', 'strength'],
    split: [
      {
        day: 1,
        name: 'Upper A',
        focus: ['chest', 'back', 'shoulders', 'biceps', 'triceps'],
        emphasis: 'chest',
        exerciseSlots: [
          { muscle: 'chest', type: 'compound', priority: 1 },
          { muscle: 'back', type: 'compound', priority: 2 },
          { muscle: 'shoulders', type: 'compound', priority: 3 },
          { muscle: 'chest', type: 'compound', priority: 4 },
          { muscle: 'back', type: 'compound', priority: 5 },
          { muscle: 'biceps', type: 'isolation', priority: 6 },
          { muscle: 'triceps', type: 'isolation', priority: 7 }
        ]
      },
      {
        day: 2,
        name: 'Lower A',
        focus: ['quads', 'hamstrings', 'glutes', 'calves', 'core'],
        emphasis: 'quads',
        exerciseSlots: [
          { muscle: 'quads', type: 'compound', priority: 1 },
          { muscle: 'hamstrings', type: 'compound', priority: 2 },
          { muscle: 'glutes', type: 'compound', priority: 3 },
          { muscle: 'quads', type: 'compound', priority: 4 },
          { muscle: 'hamstrings', type: 'isolation', priority: 5 },
          { muscle: 'calves', type: 'isolation', priority: 6 },
          { muscle: 'core', type: 'compound', priority: 7 }
        ]
      },
      {
        day: 4,
        name: 'Upper B',
        focus: ['back', 'chest', 'shoulders', 'triceps', 'biceps'],
        emphasis: 'back',
        exerciseSlots: [
          { muscle: 'back', type: 'compound', priority: 1 },
          { muscle: 'chest', type: 'compound', priority: 2 },
          { muscle: 'back', type: 'compound', priority: 3 },
          { muscle: 'shoulders', type: 'compound', priority: 4 },
          { muscle: 'shoulders', type: 'isolation', priority: 5 },
          { muscle: 'triceps', type: 'isolation', priority: 6 },
          { muscle: 'biceps', type: 'isolation', priority: 7 }
        ]
      },
      {
        day: 5,
        name: 'Lower B',
        focus: ['hamstrings', 'glutes', 'quads', 'calves', 'core'],
        emphasis: 'hamstrings',
        exerciseSlots: [
          { muscle: 'hamstrings', type: 'compound', priority: 1 },
          { muscle: 'glutes', type: 'compound', priority: 2 },
          { muscle: 'quads', type: 'compound', priority: 3 },
          { muscle: 'quads', type: 'isolation', priority: 4 },
          { muscle: 'hamstrings', type: 'isolation', priority: 5 },
          { muscle: 'calves', type: 'isolation', priority: 6 },
          { muscle: 'core', type: 'compound', priority: 7 }
        ]
      }
    ],
    research: {
      citations: ['helms-2014-programming', 'schoenfeld-2016-frequency'],
      rationale: 'Provides 2x/week frequency for all muscle groups with only 4 training days. Allows 72+ hours between upper or lower sessions for complete recovery. Balanced approach suitable for those transitioning from beginner programs.',
      proBodybuilderNote: 'Layne Norton popularized this split with his PHAT program. Many strength athletes and natural bodybuilders use this during competition prep when recovery is limited.'
    }
  },

  fullBody: {
    id: 'fullBody',
    name: 'Full Body',
    shortName: 'FB',
    description: 'Training all major muscle groups each session.',
    daysPerWeek: 3,
    frequency: 3,
    restDays: [2, 4, 6, 7],
    suitableFor: ['beginner'],
    goals: ['strength', 'hypertrophy'],
    split: [
      {
        day: 1,
        name: 'Full Body A',
        focus: ['chest', 'back', 'quads', 'shoulders', 'core'],
        emphasis: 'compounds',
        exerciseSlots: [
          { muscle: 'quads', type: 'compound', priority: 1 },
          { muscle: 'chest', type: 'compound', priority: 2 },
          { muscle: 'back', type: 'compound', priority: 3 },
          { muscle: 'shoulders', type: 'compound', priority: 4 },
          { muscle: 'hamstrings', type: 'compound', priority: 5 },
          { muscle: 'core', type: 'compound', priority: 6 }
        ]
      },
      {
        day: 3,
        name: 'Full Body B',
        focus: ['back', 'chest', 'hamstrings', 'biceps', 'triceps'],
        emphasis: 'compounds',
        exerciseSlots: [
          { muscle: 'hamstrings', type: 'compound', priority: 1 },
          { muscle: 'back', type: 'compound', priority: 2 },
          { muscle: 'chest', type: 'compound', priority: 3 },
          { muscle: 'quads', type: 'compound', priority: 4 },
          { muscle: 'biceps', type: 'isolation', priority: 5 },
          { muscle: 'triceps', type: 'isolation', priority: 6 }
        ]
      },
      {
        day: 5,
        name: 'Full Body C',
        focus: ['quads', 'back', 'shoulders', 'glutes', 'core'],
        emphasis: 'compounds',
        exerciseSlots: [
          { muscle: 'quads', type: 'compound', priority: 1 },
          { muscle: 'back', type: 'compound', priority: 2 },
          { muscle: 'chest', type: 'compound', priority: 3 },
          { muscle: 'shoulders', type: 'compound', priority: 4 },
          { muscle: 'glutes', type: 'compound', priority: 5 },
          { muscle: 'core', type: 'compound', priority: 6 }
        ]
      }
    ],
    research: {
      citations: ['wernbom-2007-frequency', 'helms-2014-programming'],
      rationale: 'High frequency (3x/week per muscle) optimal for beginners maximizing motor learning and neural adaptations. Each session provides practice of fundamental movement patterns. Lower volume per session allows quality execution.',
      proBodybuilderNote: 'Starting Strength, StrongLifts, and other proven beginner programs use full body templates. Builds foundational strength and movement competency before advancing to split routines.'
    }
  },

  broSplit: {
    id: 'broSplit',
    name: 'Body Part Split',
    shortName: 'Bro',
    description: 'Traditional bodybuilding split with one muscle group per day.',
    daysPerWeek: 5,
    frequency: 1,
    restDays: [6, 7],
    suitableFor: ['advanced'],
    goals: ['hypertrophy'],
    split: [
      {
        day: 1,
        name: 'Chest',
        focus: ['chest'],
        emphasis: 'chest',
        exerciseSlots: [
          { muscle: 'chest', type: 'compound', priority: 1 },
          { muscle: 'chest', type: 'compound', priority: 2 },
          { muscle: 'chest', type: 'compound', priority: 3 },
          { muscle: 'chest', type: 'isolation', priority: 4 },
          { muscle: 'chest', type: 'isolation', priority: 5 },
          { muscle: 'triceps', type: 'isolation', priority: 6 }
        ]
      },
      {
        day: 2,
        name: 'Back',
        focus: ['back'],
        emphasis: 'back',
        exerciseSlots: [
          { muscle: 'back', type: 'compound', priority: 1 },
          { muscle: 'back', type: 'compound', priority: 2 },
          { muscle: 'back', type: 'compound', priority: 3 },
          { muscle: 'back', type: 'compound', priority: 4 },
          { muscle: 'back', type: 'isolation', priority: 5 },
          { muscle: 'biceps', type: 'isolation', priority: 6 }
        ]
      },
      {
        day: 3,
        name: 'Shoulders',
        focus: ['shoulders'],
        emphasis: 'shoulders',
        exerciseSlots: [
          { muscle: 'shoulders', type: 'compound', priority: 1 },
          { muscle: 'shoulders', type: 'compound', priority: 2 },
          { muscle: 'shoulders', type: 'isolation', priority: 3 },
          { muscle: 'shoulders', type: 'isolation', priority: 4 },
          { muscle: 'shoulders', type: 'isolation', priority: 5 },
          { muscle: 'core', type: 'compound', priority: 6 }
        ]
      },
      {
        day: 4,
        name: 'Legs',
        focus: ['quads', 'hamstrings', 'glutes', 'calves'],
        emphasis: 'legs',
        exerciseSlots: [
          { muscle: 'quads', type: 'compound', priority: 1 },
          { muscle: 'hamstrings', type: 'compound', priority: 2 },
          { muscle: 'quads', type: 'compound', priority: 3 },
          { muscle: 'glutes', type: 'compound', priority: 4 },
          { muscle: 'quads', type: 'isolation', priority: 5 },
          { muscle: 'hamstrings', type: 'isolation', priority: 6 },
          { muscle: 'calves', type: 'isolation', priority: 7 },
          { muscle: 'calves', type: 'isolation', priority: 8 }
        ]
      },
      {
        day: 5,
        name: 'Arms',
        focus: ['biceps', 'triceps', 'forearms'],
        emphasis: 'arms',
        exerciseSlots: [
          { muscle: 'triceps', type: 'compound', priority: 1 },
          { muscle: 'biceps', type: 'isolation', priority: 2 },
          { muscle: 'triceps', type: 'isolation', priority: 3 },
          { muscle: 'biceps', type: 'isolation', priority: 4 },
          { muscle: 'triceps', type: 'isolation', priority: 5 },
          { muscle: 'biceps', type: 'isolation', priority: 6 }
        ]
      }
    ],
    research: {
      citations: ['schoenfeld-2015-bro-split', 'helms-2014-programming'],
      rationale: 'Despite lower frequency, the bro split can work for advanced lifters who can handle very high volume per session. The 1x/week frequency is suboptimal for most, but allows maximum focus and volume for each muscle group.',
      proBodybuilderNote: 'Many IFBB pros use variations of this split due to enhanced recovery capacity. Phil Heath, Jay Cutler, and Ronnie Coleman all used body part splits during their careers. Best reserved for advanced lifters with excellent recovery.'
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// PROGRAM GENERATION UTILITIES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Select optimal program template based on user profile
 */
function selectOptimalProgram(experienceLevel, daysAvailable, goal) {
  const templates = Object.values(PROGRAM_TEMPLATES);

  // Filter by days available
  const eligible = templates.filter(t => t.daysPerWeek <= daysAvailable);

  // Filter by experience level
  const suitable = eligible.filter(t => t.suitableFor.includes(experienceLevel));

  // Filter by goal
  const matching = suitable.filter(t => t.goals.includes(goal));

  if (matching.length > 0) {
    // Prefer the one with highest frequency that fits
    return matching.sort((a, b) => b.frequency - a.frequency)[0];
  }

  // Fallback to any suitable program
  return suitable[0] || eligible[0] || PROGRAM_TEMPLATES.fullBody;
}

/**
 * Calculate weekly volume targets for a user
 */
function calculateVolumeTargets(experienceLevel, goal) {
  const volumeData = TRAINING_SCIENCE.weeklyVolume[experienceLevel] ||
                     TRAINING_SCIENCE.weeklyVolume.intermediate;

  // Adjust based on goal
  let multiplier = 1;
  if (goal === 'strength') multiplier = 0.85; // Slightly lower volume for strength focus
  if (goal === 'endurance') multiplier = 1.1; // Slightly higher volume for endurance

  return {
    minimum: Math.round(volumeData.minimum * multiplier),
    optimal: Math.round(volumeData.optimal * multiplier),
    maximum: Math.round(volumeData.maximum * multiplier),
    rationale: volumeData.rationale
  };
}

/**
 * Calculate rest period for an exercise based on goal
 */
function calculateRestPeriod(exercise, goal) {
  const baseRest = TRAINING_SCIENCE.restPeriods[goal]?.seconds ||
                   TRAINING_SCIENCE.restPeriods.hypertrophy.seconds;

  // Adjust for compound vs isolation
  if (exercise.movement.type === 'compound') {
    return baseRest + 30; // Extra 30 seconds for compounds
  }

  return baseRest;
}

/**
 * Get rep range for an exercise based on goal
 */
function getRepRange(goal) {
  return TRAINING_SCIENCE.repRanges[goal] || TRAINING_SCIENCE.repRanges.hypertrophy;
}

/**
 * Get progression scheme for experience level
 */
function getProgressionScheme(experienceLevel) {
  for (const [key, scheme] of Object.entries(TRAINING_SCIENCE.progression)) {
    if (scheme.suitableFor.includes(experienceLevel)) {
      return { key, ...scheme };
    }
  }
  return TRAINING_SCIENCE.progression.doubleProgression;
}

/**
 * Validate generated program meets volume targets
 */
function validateProgramVolume(program, volumeTargets) {
  const muscleVolumes = {};

  program.workouts.forEach(workout => {
    workout.exercises.forEach(ex => {
      ex.exercise.muscles.primary.forEach(muscle => {
        if (!muscleVolumes[muscle]) muscleVolumes[muscle] = 0;
        muscleVolumes[muscle] += ex.sets;
      });
    });
  });

  const warnings = [];

  Object.entries(muscleVolumes).forEach(([muscle, volume]) => {
    if (volume < volumeTargets.minimum) {
      warnings.push(`${muscle} volume (${volume} sets) below minimum (${volumeTargets.minimum})`);
    }
    if (volume > volumeTargets.maximum) {
      warnings.push(`${muscle} volume (${volume} sets) exceeds maximum (${volumeTargets.maximum})`);
    }
  });

  return {
    isValid: warnings.length === 0,
    warnings,
    muscleVolumes
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// MUSCLE MAPPING
// Maps generic terms to specific database categories
// ═══════════════════════════════════════════════════════════════════════════

const MUSCLE_TO_CATEGORY = {
  'chest': 'chest',
  'back': 'back',
  'shoulders': 'shoulders',
  'biceps': 'arms',
  'triceps': 'arms',
  'quads': 'legs',
  'hamstrings': 'legs',
  'glutes': 'legs',
  'calves': 'legs',
  'core': 'core',
  'forearms': 'arms',
  'rear-delts': 'shoulders',
  'lower-back': 'back'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TRAINING_SCIENCE,
    PROGRAM_TEMPLATES,
    MUSCLE_TO_CATEGORY,
    selectOptimalProgram,
    calculateVolumeTargets,
    calculateRestPeriod,
    getRepRange,
    getProgressionScheme,
    validateProgramVolume
  };
}
