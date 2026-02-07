/**
 * MuscleForge Comprehensive Exercise Database
 *
 * Evidence-based exercise data for training program generation
 * Sources: Peer-reviewed literature, EMG studies, biomechanics research
 *
 * Schema:
 * - movement: pattern (push/pull/squat/hinge/carry/rotation), plane, type
 * - muscles: primary, secondary targets
 * - equipment: required items, category
 * - programming: difficulty, fatigue rating, rep ranges, set recommendations
 * - research: effectiveness grade, citations, key findings
 */

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const MUSCLE_GROUPS = {
  chest: { displayName: 'Chest', weeklyVolume: { min: 10, optimal: 16, max: 22 } },
  back: { displayName: 'Back', weeklyVolume: { min: 10, optimal: 16, max: 22 } },
  shoulders: { displayName: 'Shoulders', weeklyVolume: { min: 8, optimal: 14, max: 20 } },
  biceps: { displayName: 'Biceps', weeklyVolume: { min: 6, optimal: 10, max: 16 } },
  triceps: { displayName: 'Triceps', weeklyVolume: { min: 6, optimal: 10, max: 16 } },
  quads: { displayName: 'Quadriceps', weeklyVolume: { min: 10, optimal: 16, max: 22 } },
  hamstrings: { displayName: 'Hamstrings', weeklyVolume: { min: 8, optimal: 12, max: 18 } },
  glutes: { displayName: 'Glutes', weeklyVolume: { min: 8, optimal: 12, max: 18 } },
  calves: { displayName: 'Calves', weeklyVolume: { min: 8, optimal: 12, max: 18 } },
  core: { displayName: 'Core', weeklyVolume: { min: 6, optimal: 10, max: 16 } },
  forearms: { displayName: 'Forearms', weeklyVolume: { min: 4, optimal: 8, max: 12 } }
};

const MOVEMENT_PATTERNS = ['push', 'pull', 'squat', 'hinge', 'carry', 'rotation', 'isometric'];
const MOVEMENT_PLANES = ['horizontal', 'vertical', 'sagittal', 'frontal', 'transverse'];
const EQUIPMENT_TYPES = ['barbell', 'dumbbell', 'cable', 'machine', 'bodyweight', 'kettlebell', 'bands', 'specialty'];
const DIFFICULTY_LEVELS = ['beginner', 'intermediate', 'advanced'];

// ═══════════════════════════════════════════════════════════════════════════
// EXERCISE DATABASE
// ═══════════════════════════════════════════════════════════════════════════

const EXERCISE_DATABASE = {
  // ═══════════════════════════════════════════════════════════════════════════
  // CHEST EXERCISES
  // ═══════════════════════════════════════════════════════════════════════════
  chest: {
    barbellBenchPress: {
      id: 'barbellBenchPress',
      name: 'Barbell Bench Press',
      category: 'chest',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'horizontal',
        type: 'compound'
      },
      muscles: {
        primary: ['chest'],
        secondary: ['triceps', 'shoulders']
      },
      equipment: {
        required: ['barbell', 'bench'],
        optional: ['power-rack'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 8,
        skillRequirement: 6,
        recoveryDemand: 7,
        repRanges: {
          strength: { min: 1, max: 5, rpe: '8-10' },
          hypertrophy: { min: 6, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 6 }
      },
      technique: {
        setup: ['Grip slightly wider than shoulder width', 'Retract scapulae', 'Arch upper back', 'Plant feet firmly'],
        execution: ['Lower bar to mid-chest', 'Drive feet into floor', 'Press in slight arc toward face'],
        commonMistakes: ['Flaring elbows 90 degrees', 'Bouncing off chest', 'Lifting hips off bench']
      },
      research: {
        effectiveness: 'A+',
        citations: ['schoenfeld-2016-hypertrophy', 'helms-2015-strength'],
        keyFindings: [
          'Primary horizontal press for chest development',
          'EMG shows high pectoralis major activation',
          'Optimal grip width: 1.5x biacromial distance'
        ]
      },
      tags: ['powerlifting', 'strength', 'mass-builder', 'competition-lift']
    },

    dumbbellBenchPress: {
      id: 'dumbbellBenchPress',
      name: 'Dumbbell Bench Press',
      category: 'chest',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'horizontal',
        type: 'compound'
      },
      muscles: {
        primary: ['chest'],
        secondary: ['triceps', 'shoulders']
      },
      equipment: {
        required: ['dumbbells', 'bench'],
        optional: [],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 7,
        skillRequirement: 4,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 3, max: 6, rpe: '8-10' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Sit on bench with dumbbells on thighs', 'Kick back to lying position', 'Position dumbbells at chest level'],
        execution: ['Press dumbbells up and slightly together', 'Lower with control to chest level', 'Maintain neutral wrist'],
        commonMistakes: ['Going too heavy to control', 'Excessive elbow flare', 'Uneven pressing']
      },
      research: {
        effectiveness: 'A',
        citations: ['schoenfeld-2016-hypertrophy'],
        keyFindings: [
          'Greater ROM than barbell bench',
          'Better for addressing muscle imbalances',
          'Similar chest activation to barbell'
        ]
      },
      tags: ['hypertrophy', 'balance', 'accessory']
    },

    inclineBarbellPress: {
      id: 'inclineBarbellPress',
      name: 'Incline Barbell Press',
      category: 'chest',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'vertical',
        type: 'compound'
      },
      muscles: {
        primary: ['chest'],
        secondary: ['shoulders', 'triceps']
      },
      equipment: {
        required: ['barbell', 'incline-bench'],
        optional: ['power-rack'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 7,
        skillRequirement: 5,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 3, max: 6, rpe: '8-10' },
          hypertrophy: { min: 6, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Set bench to 30-45 degrees', 'Grip slightly wider than shoulders', 'Retract scapulae'],
        execution: ['Lower bar to upper chest/clavicle area', 'Press up and slightly back', 'Keep elbows at 45-60 degrees'],
        commonMistakes: ['Incline too steep (becomes shoulder press)', 'Touching too low on chest', 'Lifting butt off bench']
      },
      research: {
        effectiveness: 'A',
        citations: ['lauver-2016-incline'],
        keyFindings: [
          'Greater clavicular (upper) pec activation',
          'Optimal angle: 30-45 degrees',
          'Complements flat pressing for complete development'
        ]
      },
      tags: ['upper-chest', 'compound', 'strength']
    },

    inclineDumbbellPress: {
      id: 'inclineDumbbellPress',
      name: 'Incline Dumbbell Press',
      category: 'chest',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'vertical',
        type: 'compound'
      },
      muscles: {
        primary: ['chest'],
        secondary: ['shoulders', 'triceps']
      },
      equipment: {
        required: ['dumbbells', 'incline-bench'],
        optional: [],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 6,
        skillRequirement: 4,
        recoveryDemand: 5,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Set bench to 30-45 degrees', 'Position dumbbells at shoulder height', 'Feet flat on floor'],
        execution: ['Press dumbbells up and together', 'Squeeze at top', 'Lower with control'],
        commonMistakes: ['Incline too steep', 'Not controlling the negative', 'Elbows flaring excessively']
      },
      research: {
        effectiveness: 'A',
        citations: ['lauver-2016-incline'],
        keyFindings: [
          'Upper chest emphasis',
          'Greater ROM than barbell variation',
          'Good for muscle balance'
        ]
      },
      tags: ['upper-chest', 'hypertrophy', 'accessory']
    },

    cableFlye: {
      id: 'cableFlye',
      name: 'Cable Flye',
      category: 'chest',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'horizontal',
        type: 'isolation'
      },
      muscles: {
        primary: ['chest'],
        secondary: []
      },
      equipment: {
        required: ['cable-machine'],
        optional: [],
        category: 'cable'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 4,
        skillRequirement: 3,
        recoveryDemand: 3,
        repRanges: {
          strength: { min: 8, max: 10, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Set cables at chest height', 'Step forward into split stance', 'Slight bend in elbows'],
        execution: ['Bring handles together in arc motion', 'Squeeze chest at contraction', 'Control the stretch'],
        commonMistakes: ['Using too much weight', 'Bending elbows too much (becomes press)', 'Rushing the movement']
      },
      research: {
        effectiveness: 'B+',
        citations: ['schoenfeld-2016-hypertrophy'],
        keyFindings: [
          'Constant tension throughout ROM',
          'Excellent for chest isolation',
          'Good finishing exercise'
        ]
      },
      tags: ['isolation', 'pump', 'finisher']
    },

    pecDeck: {
      id: 'pecDeck',
      name: 'Pec Deck Machine',
      category: 'chest',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'horizontal',
        type: 'isolation'
      },
      muscles: {
        primary: ['chest'],
        secondary: []
      },
      equipment: {
        required: ['pec-deck-machine'],
        optional: [],
        category: 'machine'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 8, max: 10, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Adjust seat so handles align with mid-chest', 'Back flat against pad', 'Slight elbow bend'],
        execution: ['Bring pads together in front', 'Squeeze and hold briefly', 'Control the return'],
        commonMistakes: ['Seat too high or low', 'Letting weight crash', 'Rounding shoulders forward']
      },
      research: {
        effectiveness: 'B+',
        citations: ['schoenfeld-2016-hypertrophy'],
        keyFindings: [
          'Machine provides stability',
          'Good for beginners',
          'Consistent tension curve'
        ]
      },
      tags: ['isolation', 'beginner-friendly', 'machine']
    },

    dips: {
      id: 'dips',
      name: 'Parallel Bar Dips',
      category: 'chest',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'vertical',
        type: 'compound'
      },
      muscles: {
        primary: ['chest', 'triceps'],
        secondary: ['shoulders']
      },
      equipment: {
        required: ['dip-bars'],
        optional: ['dip-belt'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 7,
        skillRequirement: 5,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-10' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Grip bars shoulder-width or slightly wider', 'Lean torso forward 15-30 degrees for chest emphasis', 'Cross ankles behind'],
        execution: ['Lower until upper arms parallel to floor', 'Keep elbows flared slightly for chest focus', 'Press up to lockout'],
        commonMistakes: ['Staying too upright (triceps dominant)', 'Going too deep (shoulder strain)', 'Swinging body']
      },
      research: {
        effectiveness: 'A',
        citations: ['mckenzie-2016-dips'],
        keyFindings: [
          'Excellent compound for lower chest and triceps',
          'Bodyweight progression allows overload',
          'Forward lean increases pec activation'
        ]
      },
      tags: ['bodyweight', 'compound', 'lower-chest', 'triceps']
    },

    pushUps: {
      id: 'pushUps',
      name: 'Push-Ups',
      category: 'chest',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'horizontal',
        type: 'compound'
      },
      muscles: {
        primary: ['chest'],
        secondary: ['triceps', 'shoulders', 'core']
      },
      equipment: {
        required: [],
        optional: ['push-up-handles'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 4,
        skillRequirement: 2,
        recoveryDemand: 3,
        repRanges: {
          strength: { min: 5, max: 10, rpe: '8-10' },
          hypertrophy: { min: 10, max: 20, rpe: '7-9' },
          endurance: { min: 20, max: 50, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 6 }
      },
      technique: {
        setup: ['Hands slightly wider than shoulders', 'Body in straight line from head to heels', 'Core braced'],
        execution: ['Lower chest toward floor', 'Elbows at 45 degree angle', 'Press up to full extension'],
        commonMistakes: ['Sagging hips', 'Flaring elbows 90 degrees', 'Not going full depth']
      },
      research: {
        effectiveness: 'B+',
        citations: ['cogley-2005-pushup'],
        keyFindings: [
          'Effective bodyweight chest exercise',
          'Easily scalable with variations',
          'Engages core for stability'
        ]
      },
      tags: ['bodyweight', 'beginner-friendly', 'home-workout', 'warmup']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BACK EXERCISES
  // ═══════════════════════════════════════════════════════════════════════════
  back: {
    barbellRow: {
      id: 'barbellRow',
      name: 'Barbell Row',
      category: 'back',
      subcategory: 'compound',
      movement: {
        pattern: 'pull',
        plane: 'horizontal',
        type: 'compound'
      },
      muscles: {
        primary: ['back'],
        secondary: ['biceps', 'rear-delts']
      },
      equipment: {
        required: ['barbell'],
        optional: [],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 8,
        skillRequirement: 6,
        recoveryDemand: 7,
        repRanges: {
          strength: { min: 3, max: 6, rpe: '8-10' },
          hypertrophy: { min: 6, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Hinge at hips, back at 45-degree angle', 'Grip just outside knees', 'Knees slightly bent'],
        execution: ['Pull bar to lower chest/upper abdomen', 'Drive elbows back', 'Squeeze shoulder blades at top'],
        commonMistakes: ['Standing too upright', 'Using momentum/jerking', 'Rounding lower back']
      },
      research: {
        effectiveness: 'A+',
        citations: ['fenwick-2009-row'],
        keyFindings: [
          'Primary horizontal pull for back thickness',
          'High lat and rhomboid activation',
          'Builds posterior chain strength'
        ]
      },
      tags: ['strength', 'mass-builder', 'compound']
    },

    pullUps: {
      id: 'pullUps',
      name: 'Pull-Ups',
      category: 'back',
      subcategory: 'compound',
      movement: {
        pattern: 'pull',
        plane: 'vertical',
        type: 'compound'
      },
      muscles: {
        primary: ['back'],
        secondary: ['biceps', 'rear-delts']
      },
      equipment: {
        required: ['pull-up-bar'],
        optional: ['dip-belt'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 7,
        skillRequirement: 6,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 3, max: 6, rpe: '8-10' },
          hypertrophy: { min: 6, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Grip bar slightly wider than shoulders', 'Hang with arms fully extended', 'Engage lats at bottom'],
        execution: ['Pull until chin clears bar', 'Drive elbows down and back', 'Lower with control'],
        commonMistakes: ['Kipping/swinging', 'Half reps', 'Not engaging at bottom']
      },
      research: {
        effectiveness: 'A+',
        citations: ['youdas-2010-pullup'],
        keyFindings: [
          'Gold standard for lat development',
          'High muscle activation throughout back',
          'Excellent strength-to-bodyweight indicator'
        ]
      },
      tags: ['bodyweight', 'strength', 'lat-width', 'compound']
    },

    latPulldown: {
      id: 'latPulldown',
      name: 'Lat Pulldown',
      category: 'back',
      subcategory: 'compound',
      movement: {
        pattern: 'pull',
        plane: 'vertical',
        type: 'compound'
      },
      muscles: {
        primary: ['back'],
        secondary: ['biceps', 'rear-delts']
      },
      equipment: {
        required: ['lat-pulldown-machine'],
        optional: [],
        category: 'cable'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 5,
        skillRequirement: 3,
        recoveryDemand: 4,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Grip bar slightly wider than shoulders', 'Secure thighs under pads', 'Lean back slightly'],
        execution: ['Pull bar to upper chest', 'Drive elbows down and back', 'Control the return'],
        commonMistakes: ['Leaning back too far', 'Pulling behind neck', 'Using momentum']
      },
      research: {
        effectiveness: 'A',
        citations: ['youdas-2010-pullup'],
        keyFindings: [
          'Excellent pull-up regression/alternative',
          'Allows precise load selection',
          'Good for high-rep training'
        ]
      },
      tags: ['cable', 'beginner-friendly', 'lat-width']
    },

    seatedCableRow: {
      id: 'seatedCableRow',
      name: 'Seated Cable Row',
      category: 'back',
      subcategory: 'compound',
      movement: {
        pattern: 'pull',
        plane: 'horizontal',
        type: 'compound'
      },
      muscles: {
        primary: ['back'],
        secondary: ['biceps', 'rear-delts']
      },
      equipment: {
        required: ['cable-row-machine'],
        optional: [],
        category: 'cable'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 5,
        skillRequirement: 3,
        recoveryDemand: 4,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Sit with feet on platform', 'Grip handle with arms extended', 'Back straight, slight lean forward'],
        execution: ['Pull handle to lower chest/upper abdomen', 'Squeeze shoulder blades', 'Extend arms with control'],
        commonMistakes: ['Excessive torso swing', 'Not squeezing at contraction', 'Rounding back']
      },
      research: {
        effectiveness: 'A',
        citations: ['fenwick-2009-row'],
        keyFindings: [
          'Excellent for mid-back thickness',
          'Constant cable tension',
          'Lower spinal load than barbell rows'
        ]
      },
      tags: ['cable', 'beginner-friendly', 'back-thickness']
    },

    dumbbellRow: {
      id: 'dumbbellRow',
      name: 'Single-Arm Dumbbell Row',
      category: 'back',
      subcategory: 'compound',
      movement: {
        pattern: 'pull',
        plane: 'horizontal',
        type: 'compound'
      },
      muscles: {
        primary: ['back'],
        secondary: ['biceps', 'rear-delts']
      },
      equipment: {
        required: ['dumbbell', 'bench'],
        optional: [],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 5,
        skillRequirement: 3,
        recoveryDemand: 4,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['One knee and hand on bench', 'Back flat and parallel to floor', 'Dumbbell hanging at arms length'],
        execution: ['Pull dumbbell to hip/lower ribs', 'Drive elbow toward ceiling', 'Lower with control'],
        commonMistakes: ['Rotating torso excessively', 'Pulling to shoulder instead of hip', 'Rounding upper back']
      },
      research: {
        effectiveness: 'A',
        citations: ['fenwick-2009-row'],
        keyFindings: [
          'Unilateral training addresses imbalances',
          'Supported position reduces spinal load',
          'Full ROM possible'
        ]
      },
      tags: ['dumbbell', 'unilateral', 'beginner-friendly']
    },

    tBarRow: {
      id: 'tBarRow',
      name: 'T-Bar Row',
      category: 'back',
      subcategory: 'compound',
      movement: {
        pattern: 'pull',
        plane: 'horizontal',
        type: 'compound'
      },
      muscles: {
        primary: ['back'],
        secondary: ['biceps', 'rear-delts']
      },
      equipment: {
        required: ['t-bar-row', 'weight-plates'],
        optional: ['landmine-attachment'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 7,
        skillRequirement: 5,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-10' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Straddle bar with feet shoulder-width', 'Hinge at hips, back at 45 degrees', 'Grip handles or bar'],
        execution: ['Pull toward lower chest', 'Keep elbows close to body', 'Squeeze at top'],
        commonMistakes: ['Standing too upright', 'Jerking the weight', 'Not controlling negative']
      },
      research: {
        effectiveness: 'A',
        citations: ['fenwick-2009-row'],
        keyFindings: [
          'Neutral grip reduces bicep involvement',
          'Fixed path allows heavy loading',
          'Excellent for mid-back thickness'
        ]
      },
      tags: ['strength', 'mass-builder', 'back-thickness']
    },

    facePulls: {
      id: 'facePulls',
      name: 'Face Pulls',
      category: 'back',
      subcategory: 'isolation',
      movement: {
        pattern: 'pull',
        plane: 'horizontal',
        type: 'isolation'
      },
      muscles: {
        primary: ['rear-delts'],
        secondary: ['back', 'rotator-cuff']
      },
      equipment: {
        required: ['cable-machine', 'rope-attachment'],
        optional: [],
        category: 'cable'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 2,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 10, max: 12, rpe: '7-8' },
          hypertrophy: { min: 12, max: 20, rpe: '7-8' },
          endurance: { min: 20, max: 30, rpe: '6-7' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Set cable at face height', 'Grip rope with thumbs toward face', 'Step back for tension'],
        execution: ['Pull rope toward face', 'Externally rotate at end position', 'Return with control'],
        commonMistakes: ['Using too much weight', 'Not externally rotating', 'Pulling too low']
      },
      research: {
        effectiveness: 'B+',
        citations: ['reinold-2009-shoulder'],
        keyFindings: [
          'Excellent for shoulder health',
          'Balances pressing movements',
          'Targets commonly weak muscles'
        ]
      },
      tags: ['prehab', 'shoulder-health', 'rear-delts', 'isolation']
    },

    straightArmPulldown: {
      id: 'straightArmPulldown',
      name: 'Straight Arm Pulldown',
      category: 'back',
      subcategory: 'isolation',
      movement: {
        pattern: 'pull',
        plane: 'vertical',
        type: 'isolation'
      },
      muscles: {
        primary: ['back'],
        secondary: []
      },
      equipment: {
        required: ['cable-machine'],
        optional: ['straight-bar', 'rope'],
        category: 'cable'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 3,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 8, max: 10, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Set cable at top position', 'Grip bar with straight arms', 'Slight hip hinge'],
        execution: ['Pull bar down to thighs keeping arms straight', 'Focus on lat contraction', 'Control the return'],
        commonMistakes: ['Bending elbows', 'Using momentum', 'Not engaging lats']
      },
      research: {
        effectiveness: 'B+',
        citations: ['youdas-2010-pullup'],
        keyFindings: [
          'Isolates lats without bicep involvement',
          'Good for mind-muscle connection',
          'Useful for lat activation before compounds'
        ]
      },
      tags: ['isolation', 'lat-focus', 'activation']
    },

    hyperextensions: {
      id: 'hyperextensions',
      name: 'Hyperextensions (Back Extensions)',
      category: 'back',
      subcategory: 'compound',
      movement: {
        pattern: 'hinge',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['lower-back'],
        secondary: ['glutes', 'hamstrings']
      },
      equipment: {
        required: ['hyperextension-bench'],
        optional: ['weight-plate', 'dumbbell'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 4,
        skillRequirement: 2,
        recoveryDemand: 4,
        repRanges: {
          strength: { min: 8, max: 10, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 25, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Position hips on pad', 'Anchor feet under rollers', 'Cross arms or hold weight at chest'],
        execution: ['Lower torso until 90 degrees at hip', 'Raise back to straight position', 'Avoid hyperextending'],
        commonMistakes: ['Going past parallel on way up', 'Jerking movements', 'Rounding back']
      },
      research: {
        effectiveness: 'B+',
        citations: ['mayer-2008-lumbar'],
        keyFindings: [
          'Strengthens spinal erectors',
          'Important for lower back health',
          'Complements heavy pulling'
        ]
      },
      tags: ['lower-back', 'posterior-chain', 'prehab']
    },

    chinUps: {
      id: 'chinUps',
      name: 'Chin-Ups',
      category: 'back',
      subcategory: 'compound',
      movement: {
        pattern: 'pull',
        plane: 'vertical',
        type: 'compound'
      },
      muscles: {
        primary: ['back', 'biceps'],
        secondary: ['rear-delts']
      },
      equipment: {
        required: ['pull-up-bar'],
        optional: ['dip-belt'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 7,
        skillRequirement: 5,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 3, max: 6, rpe: '8-10' },
          hypertrophy: { min: 6, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Grip bar with palms facing you', 'Shoulder-width or narrower grip', 'Hang with full extension'],
        execution: ['Pull until chin clears bar', 'Focus on pulling elbows down', 'Lower with control'],
        commonMistakes: ['Not going full ROM', 'Kipping/swinging', 'Grip too narrow causing shoulder strain']
      },
      research: {
        effectiveness: 'A',
        citations: ['youdas-2010-pullup'],
        keyFindings: [
          'Higher bicep activation than pull-ups',
          'Excellent lat development',
          'Supinated grip often allows more reps'
        ]
      },
      tags: ['bodyweight', 'compound', 'biceps', 'lat-width']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SHOULDER EXERCISES
  // ═══════════════════════════════════════════════════════════════════════════
  shoulders: {
    overheadPress: {
      id: 'overheadPress',
      name: 'Overhead Press (Standing)',
      category: 'shoulders',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'vertical',
        type: 'compound'
      },
      muscles: {
        primary: ['shoulders'],
        secondary: ['triceps', 'core']
      },
      equipment: {
        required: ['barbell'],
        optional: ['power-rack'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 7,
        skillRequirement: 6,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 3, max: 6, rpe: '8-10' },
          hypertrophy: { min: 6, max: 10, rpe: '7-9' },
          endurance: { min: 10, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Grip just outside shoulders', 'Bar at clavicle level', 'Feet hip-width, core braced'],
        execution: ['Press bar overhead in straight line', 'Push head through at top', 'Lower with control'],
        commonMistakes: ['Excessive back arch', 'Pressing in front of face', 'Not bracing core']
      },
      research: {
        effectiveness: 'A+',
        citations: ['saeterbakken-2013-ohp'],
        keyFindings: [
          'Primary vertical push for shoulder development',
          'Engages core as stabilizers',
          'Standing version superior for muscle activation'
        ]
      },
      tags: ['strength', 'compound', 'mass-builder', 'core']
    },

    dumbbellShoulderPress: {
      id: 'dumbbellShoulderPress',
      name: 'Dumbbell Shoulder Press',
      category: 'shoulders',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'vertical',
        type: 'compound'
      },
      muscles: {
        primary: ['shoulders'],
        secondary: ['triceps']
      },
      equipment: {
        required: ['dumbbells'],
        optional: ['bench'],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 6,
        skillRequirement: 4,
        recoveryDemand: 5,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Sit or stand with dumbbells at shoulder height', 'Palms facing forward', 'Core engaged'],
        execution: ['Press dumbbells overhead', 'Bring dumbbells together at top', 'Lower to shoulder height'],
        commonMistakes: ['Excessive back arch', 'Not going full ROM', 'Uneven pressing']
      },
      research: {
        effectiveness: 'A',
        citations: ['saeterbakken-2013-ohp'],
        keyFindings: [
          'Greater ROM than barbell',
          'Addresses muscle imbalances',
          'Good for shoulder stability'
        ]
      },
      tags: ['dumbbell', 'compound', 'beginner-friendly']
    },

    lateralRaise: {
      id: 'lateralRaise',
      name: 'Lateral Raise',
      category: 'shoulders',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'frontal',
        type: 'isolation'
      },
      muscles: {
        primary: ['shoulders'],
        secondary: []
      },
      equipment: {
        required: ['dumbbells'],
        optional: [],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 10, max: 12, rpe: '8-9' },
          hypertrophy: { min: 12, max: 20, rpe: '7-9' },
          endurance: { min: 20, max: 30, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Stand with dumbbells at sides', 'Slight bend in elbows', 'Slight forward lean'],
        execution: ['Raise arms to side until parallel', 'Lead with elbows, not hands', 'Lower with control'],
        commonMistakes: ['Using momentum/swinging', 'Going too heavy', 'Shrugging shoulders']
      },
      research: {
        effectiveness: 'A',
        citations: ['campos-2020-lateral'],
        keyFindings: [
          'Primary exercise for lateral delt',
          'Creates shoulder width',
          'Light weight, high reps most effective'
        ]
      },
      tags: ['isolation', 'lateral-delt', 'shoulder-width']
    },

    frontRaise: {
      id: 'frontRaise',
      name: 'Front Raise',
      category: 'shoulders',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['shoulders'],
        secondary: []
      },
      equipment: {
        required: ['dumbbells'],
        optional: ['barbell', 'cable'],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 10, max: 12, rpe: '8-9' },
          hypertrophy: { min: 12, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Stand with dumbbells in front of thighs', 'Slight elbow bend', 'Core engaged'],
        execution: ['Raise one or both arms to shoulder height', 'Keep arms straight or slight bend', 'Lower with control'],
        commonMistakes: ['Swinging weight', 'Going above shoulder height', 'Using too much weight']
      },
      research: {
        effectiveness: 'B',
        citations: ['campos-2020-lateral'],
        keyFindings: [
          'Targets anterior deltoid',
          'Often overtrained relative to pressing',
          'Lower priority than lateral/rear work'
        ]
      },
      tags: ['isolation', 'anterior-delt']
    },

    rearDeltFlye: {
      id: 'rearDeltFlye',
      name: 'Rear Delt Flye',
      category: 'shoulders',
      subcategory: 'isolation',
      movement: {
        pattern: 'pull',
        plane: 'horizontal',
        type: 'isolation'
      },
      muscles: {
        primary: ['rear-delts'],
        secondary: ['back']
      },
      equipment: {
        required: ['dumbbells'],
        optional: ['bench'],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 2,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 10, max: 12, rpe: '8-9' },
          hypertrophy: { min: 12, max: 20, rpe: '7-9' },
          endurance: { min: 20, max: 25, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Bend at hips until torso parallel', 'Dumbbells hanging below chest', 'Slight elbow bend'],
        execution: ['Raise arms to sides', 'Squeeze shoulder blades at top', 'Lower with control'],
        commonMistakes: ['Using too much weight', 'Raising too high', 'Not bending over enough']
      },
      research: {
        effectiveness: 'B+',
        citations: ['reinold-2009-shoulder'],
        keyFindings: [
          'Important for shoulder balance',
          'Prevents internal rotation posture',
          'Targets commonly weak muscle'
        ]
      },
      tags: ['isolation', 'rear-delts', 'shoulder-health']
    },

    arnoldPress: {
      id: 'arnoldPress',
      name: 'Arnold Press',
      category: 'shoulders',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'vertical',
        type: 'compound'
      },
      muscles: {
        primary: ['shoulders'],
        secondary: ['triceps']
      },
      equipment: {
        required: ['dumbbells'],
        optional: ['bench'],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 5,
        skillRequirement: 4,
        recoveryDemand: 4,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 4 }
      },
      technique: {
        setup: ['Start with dumbbells at shoulder height', 'Palms facing body (supinated)', 'Elbows in front'],
        execution: ['Press up while rotating palms forward', 'Full lockout at top', 'Reverse motion on way down'],
        commonMistakes: ['Not completing full rotation', 'Rushing the movement', 'Using too much weight']
      },
      research: {
        effectiveness: 'A',
        citations: ['saeterbakken-2013-ohp'],
        keyFindings: [
          'Hits all three delt heads through rotation',
          'Extended ROM for greater muscle activation',
          'Popularized by Arnold Schwarzenegger'
        ]
      },
      tags: ['dumbbell', 'compound', 'all-three-heads']
    },

    uprightRow: {
      id: 'uprightRow',
      name: 'Upright Row',
      category: 'shoulders',
      subcategory: 'compound',
      movement: {
        pattern: 'pull',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['shoulders'],
        secondary: ['traps', 'biceps']
      },
      equipment: {
        required: ['barbell'],
        optional: ['dumbbells', 'cable'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 4,
        skillRequirement: 4,
        recoveryDemand: 4,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Grip barbell shoulder-width or wider', 'Arms extended, bar at thighs', 'Stand tall'],
        execution: ['Pull bar up along body to chest', 'Lead with elbows', 'Lower with control'],
        commonMistakes: ['Grip too narrow (shoulder impingement)', 'Pulling too high', 'Shrugging at top']
      },
      research: {
        effectiveness: 'B+',
        citations: ['mcallister-2013-upright'],
        keyFindings: [
          'Wider grip safer for shoulder joint',
          'Effective for lateral and anterior delts',
          'Use caution if shoulder issues'
        ]
      },
      tags: ['compound', 'traps', 'caution-shoulder']
    },

    cableLateralRaise: {
      id: 'cableLateralRaise',
      name: 'Cable Lateral Raise',
      category: 'shoulders',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'frontal',
        type: 'isolation'
      },
      muscles: {
        primary: ['shoulders'],
        secondary: []
      },
      equipment: {
        required: ['cable-machine'],
        optional: [],
        category: 'cable'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 10, max: 12, rpe: '8-9' },
          hypertrophy: { min: 12, max: 20, rpe: '7-9' },
          endurance: { min: 20, max: 25, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Set cable at lowest position', 'Stand sideways to machine', 'Grasp handle with far hand'],
        execution: ['Raise arm to side until parallel', 'Slight forward lean', 'Lower with control'],
        commonMistakes: ['Swinging body', 'Going too high', 'Not controlling the negative']
      },
      research: {
        effectiveness: 'A',
        citations: ['campos-2020-lateral'],
        keyFindings: [
          'Constant tension throughout ROM',
          'Better resistance curve than dumbbells',
          'Excellent for lateral delt isolation'
        ]
      },
      tags: ['cable', 'isolation', 'lateral-delt', 'constant-tension']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LEG EXERCISES
  // ═══════════════════════════════════════════════════════════════════════════
  legs: {
    barbellSquat: {
      id: 'barbellSquat',
      name: 'Barbell Back Squat',
      category: 'legs',
      subcategory: 'compound',
      movement: {
        pattern: 'squat',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['quads', 'glutes'],
        secondary: ['hamstrings', 'core', 'lower-back']
      },
      equipment: {
        required: ['barbell', 'squat-rack'],
        optional: ['belt', 'knee-sleeves'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 10,
        skillRequirement: 7,
        recoveryDemand: 9,
        repRanges: {
          strength: { min: 1, max: 5, rpe: '8-10' },
          hypertrophy: { min: 6, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 6 }
      },
      technique: {
        setup: ['Bar on upper traps (high) or rear delts (low)', 'Feet shoulder-width or wider', 'Toes slightly out'],
        execution: ['Break at hips and knees simultaneously', 'Descend until thighs parallel or below', 'Drive through whole foot'],
        commonMistakes: ['Knees caving inward', 'Forward lean/good morning squat', 'Cutting depth short']
      },
      research: {
        effectiveness: 'A+',
        citations: ['schoenfeld-2016-squat', 'contreras-2016-squat'],
        keyFindings: [
          'King of lower body exercises',
          'Highest muscle activation of any leg exercise',
          'Full depth superior for glute development'
        ]
      },
      tags: ['powerlifting', 'strength', 'mass-builder', 'competition-lift']
    },

    romanianDeadlift: {
      id: 'romanianDeadlift',
      name: 'Romanian Deadlift (RDL)',
      category: 'legs',
      subcategory: 'compound',
      movement: {
        pattern: 'hinge',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['hamstrings', 'glutes'],
        secondary: ['lower-back', 'core']
      },
      equipment: {
        required: ['barbell'],
        optional: ['dumbbells'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 8,
        skillRequirement: 5,
        recoveryDemand: 7,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Grip bar just outside thighs', 'Slight knee bend maintained throughout', 'Chest up, shoulders back'],
        execution: ['Push hips back, lowering bar down thighs', 'Feel hamstring stretch', 'Drive hips forward to return'],
        commonMistakes: ['Rounding lower back', 'Bending knees too much (becomes deadlift)', 'Not pushing hips back enough']
      },
      research: {
        effectiveness: 'A+',
        citations: ['mcallister-2014-rdl'],
        keyFindings: [
          'Superior hamstring eccentric loading',
          'Essential for posterior chain development',
          'Excellent hip hinge pattern builder'
        ]
      },
      tags: ['hamstrings', 'glutes', 'hinge', 'posterior-chain']
    },

    legPress: {
      id: 'legPress',
      name: 'Leg Press',
      category: 'legs',
      subcategory: 'compound',
      movement: {
        pattern: 'squat',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['quads', 'glutes'],
        secondary: ['hamstrings']
      },
      equipment: {
        required: ['leg-press-machine'],
        optional: [],
        category: 'machine'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 7,
        skillRequirement: 2,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-10' },
          hypertrophy: { min: 8, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 25, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Feet shoulder-width on platform', 'Lower back flat against pad', 'Release safety handles'],
        execution: ['Lower until knees at 90 degrees', 'Press through whole foot', 'Do not lock out completely'],
        commonMistakes: ['Letting lower back round', 'Going too deep', 'Locking out knees']
      },
      research: {
        effectiveness: 'A',
        citations: ['schoenfeld-2016-squat'],
        keyFindings: [
          'Excellent quad builder with less spinal load',
          'Allows heavy loading safely',
          'Foot position changes muscle emphasis'
        ]
      },
      tags: ['machine', 'quad-focus', 'beginner-friendly', 'high-volume']
    },

    legExtension: {
      id: 'legExtension',
      name: 'Leg Extension',
      category: 'legs',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['quads'],
        secondary: []
      },
      equipment: {
        required: ['leg-extension-machine'],
        optional: [],
        category: 'machine'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 1,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 8, max: 10, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 25, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Adjust back pad for thighs on seat', 'Ankle pad just above feet', 'Grip handles'],
        execution: ['Extend legs fully', 'Squeeze quads at top', 'Lower with control'],
        commonMistakes: ['Using momentum', 'Not going full extension', 'Going too heavy']
      },
      research: {
        effectiveness: 'B+',
        citations: ['schoenfeld-2016-squat'],
        keyFindings: [
          'Isolated quad work',
          'Good for rectus femoris activation',
          'Useful for quad sweep development'
        ]
      },
      tags: ['isolation', 'machine', 'quad-focus', 'finisher']
    },

    legCurl: {
      id: 'legCurl',
      name: 'Lying Leg Curl',
      category: 'legs',
      subcategory: 'isolation',
      movement: {
        pattern: 'pull',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['hamstrings'],
        secondary: []
      },
      equipment: {
        required: ['leg-curl-machine'],
        optional: [],
        category: 'machine'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 1,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 8, max: 10, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Lie face down, pad above heels', 'Hips pressed into bench', 'Grip handles'],
        execution: ['Curl heels toward glutes', 'Squeeze at contraction', 'Lower with control'],
        commonMistakes: ['Lifting hips off bench', 'Not completing full ROM', 'Using momentum']
      },
      research: {
        effectiveness: 'B+',
        citations: ['mcallister-2014-rdl'],
        keyFindings: [
          'Isolates knee flexion function of hamstrings',
          'Complements hip extension work (RDL)',
          'Important for hamstring balance'
        ]
      },
      tags: ['isolation', 'machine', 'hamstrings', 'knee-flexion']
    },

    bulgarianSplitSquat: {
      id: 'bulgarianSplitSquat',
      name: 'Bulgarian Split Squat',
      category: 'legs',
      subcategory: 'compound',
      movement: {
        pattern: 'squat',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['quads', 'glutes'],
        secondary: ['hamstrings', 'core']
      },
      equipment: {
        required: ['bench'],
        optional: ['dumbbells', 'barbell'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 7,
        skillRequirement: 5,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 4 }
      },
      technique: {
        setup: ['Rear foot on bench behind', 'Front foot 2-3 feet in front of bench', 'Torso upright'],
        execution: ['Lower until front thigh parallel', 'Drive through front heel', 'Keep torso upright'],
        commonMistakes: ['Front foot too close', 'Leaning forward', 'Knee tracking inward']
      },
      research: {
        effectiveness: 'A',
        citations: ['contreras-2016-squat'],
        keyFindings: [
          'Excellent unilateral quad and glute developer',
          'Addresses muscle imbalances',
          'High glute activation'
        ]
      },
      tags: ['unilateral', 'compound', 'glutes', 'balance']
    },

    walkingLunges: {
      id: 'walkingLunges',
      name: 'Walking Lunges',
      category: 'legs',
      subcategory: 'compound',
      movement: {
        pattern: 'squat',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['quads', 'glutes'],
        secondary: ['hamstrings', 'core']
      },
      equipment: {
        required: [],
        optional: ['dumbbells', 'barbell'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 6,
        skillRequirement: 3,
        recoveryDemand: 5,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 25, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Stand tall, hands at sides or holding weights', 'Core braced', 'Eyes forward'],
        execution: ['Step forward into lunge', 'Lower until both knees at 90 degrees', 'Push off front foot to next step'],
        commonMistakes: ['Steps too short', 'Knee going past toe excessively', 'Leaning forward']
      },
      research: {
        effectiveness: 'A',
        citations: ['contreras-2016-squat'],
        keyFindings: [
          'Dynamic movement for leg development',
          'Engages stabilizers',
          'Good for conditioning and hypertrophy'
        ]
      },
      tags: ['bodyweight', 'compound', 'unilateral', 'conditioning']
    },

    hipThrust: {
      id: 'hipThrust',
      name: 'Barbell Hip Thrust',
      category: 'legs',
      subcategory: 'compound',
      movement: {
        pattern: 'hinge',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['glutes'],
        secondary: ['hamstrings', 'core']
      },
      equipment: {
        required: ['barbell', 'bench'],
        optional: ['hip-thrust-machine', 'pad'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 6,
        skillRequirement: 3,
        recoveryDemand: 5,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-10' },
          hypertrophy: { min: 8, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Upper back on bench', 'Bar over hips with pad', 'Feet flat, knees at 90 degrees at top'],
        execution: ['Drive hips up until body is straight', 'Squeeze glutes at top', 'Lower with control'],
        commonMistakes: ['Hyperextending lower back', 'Not squeezing at top', 'Feet too far or too close']
      },
      research: {
        effectiveness: 'A+',
        citations: ['contreras-2015-hip-thrust'],
        keyFindings: [
          'Highest glute activation of any exercise',
          'Superior to squats for glute development',
          'Essential for glute-focused training'
        ]
      },
      tags: ['glutes', 'hip-extension', 'mass-builder']
    },

    calfRaise: {
      id: 'calfRaise',
      name: 'Standing Calf Raise',
      category: 'legs',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['calves'],
        secondary: []
      },
      equipment: {
        required: ['calf-raise-machine'],
        optional: ['smith-machine', 'dumbbells'],
        category: 'machine'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 1,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 8, max: 10, rpe: '8-9' },
          hypertrophy: { min: 10, max: 20, rpe: '7-9' },
          endurance: { min: 20, max: 30, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 6 }
      },
      technique: {
        setup: ['Balls of feet on edge of platform', 'Shoulders under pads', 'Slight knee bend'],
        execution: ['Rise up on toes as high as possible', 'Pause at top', 'Lower slowly into full stretch'],
        commonMistakes: ['Bouncing at bottom', 'Not going full ROM', 'Bending knees']
      },
      research: {
        effectiveness: 'B+',
        citations: ['schoenfeld-2016-squat'],
        keyFindings: [
          'Targets gastrocnemius',
          'High frequency responds well for calves',
          'Full ROM critical'
        ]
      },
      tags: ['isolation', 'calves', 'machine']
    },

    gobletSquat: {
      id: 'gobletSquat',
      name: 'Goblet Squat',
      category: 'legs',
      subcategory: 'compound',
      movement: {
        pattern: 'squat',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['quads', 'glutes'],
        secondary: ['core']
      },
      equipment: {
        required: ['dumbbell'],
        optional: ['kettlebell'],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 4,
        skillRequirement: 2,
        recoveryDemand: 3,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 25, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 4 }
      },
      technique: {
        setup: ['Hold dumbbell vertically at chest', 'Feet shoulder-width or wider', 'Toes slightly out'],
        execution: ['Squat down between legs', 'Elbows inside knees', 'Drive through whole foot'],
        commonMistakes: ['Not going deep enough', 'Leaning forward', 'Elbows flaring out']
      },
      research: {
        effectiveness: 'B+',
        citations: ['schoenfeld-2016-squat'],
        keyFindings: [
          'Excellent squat pattern teaching tool',
          'Front-loaded position keeps torso upright',
          'Good for beginners and high-rep work'
        ]
      },
      tags: ['beginner-friendly', 'compound', 'squat-pattern']
    },

    hackSquat: {
      id: 'hackSquat',
      name: 'Hack Squat',
      category: 'legs',
      subcategory: 'compound',
      movement: {
        pattern: 'squat',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['quads'],
        secondary: ['glutes']
      },
      equipment: {
        required: ['hack-squat-machine'],
        optional: [],
        category: 'machine'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 7,
        skillRequirement: 2,
        recoveryDemand: 6,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-10' },
          hypertrophy: { min: 8, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Back against pad, shoulders under pads', 'Feet shoulder-width on platform', 'Release safety handles'],
        execution: ['Lower until thighs parallel', 'Press through heels', 'Do not lock out completely'],
        commonMistakes: ['Heels coming up', 'Knees caving', 'Cutting depth']
      },
      research: {
        effectiveness: 'A',
        citations: ['schoenfeld-2016-squat'],
        keyFindings: [
          'Excellent quad isolation with safety',
          'Fixed path reduces stabilizer demand',
          'Allows very heavy loading'
        ]
      },
      tags: ['machine', 'quad-focus', 'mass-builder']
    },

    goodMorning: {
      id: 'goodMorning',
      name: 'Good Morning',
      category: 'legs',
      subcategory: 'compound',
      movement: {
        pattern: 'hinge',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['hamstrings', 'lower-back'],
        secondary: ['glutes', 'core']
      },
      equipment: {
        required: ['barbell'],
        optional: ['squat-rack'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'advanced',
        fatigueRating: 7,
        skillRequirement: 7,
        recoveryDemand: 7,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '7-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-8' },
          endurance: { min: 12, max: 15, rpe: '6-7' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Bar on upper back like squat', 'Feet hip to shoulder width', 'Slight knee bend'],
        execution: ['Push hips back, lowering torso', 'Keep back flat throughout', 'Return by driving hips forward'],
        commonMistakes: ['Rounding lower back', 'Going too heavy too soon', 'Not enough hip hinge']
      },
      research: {
        effectiveness: 'B+',
        citations: ['mcallister-2014-rdl'],
        keyFindings: [
          'Excellent posterior chain developer',
          'Builds hip hinge strength',
          'Used by powerlifters for squat assistance'
        ]
      },
      tags: ['advanced', 'posterior-chain', 'powerlifting-accessory']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ARM EXERCISES
  // ═══════════════════════════════════════════════════════════════════════════
  arms: {
    barbellCurl: {
      id: 'barbellCurl',
      name: 'Barbell Curl',
      category: 'arms',
      subcategory: 'isolation',
      movement: {
        pattern: 'pull',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['biceps'],
        secondary: ['forearms']
      },
      equipment: {
        required: ['barbell'],
        optional: ['ez-bar'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Grip bar shoulder-width', 'Arms extended, elbows at sides', 'Stand tall, core braced'],
        execution: ['Curl bar up to shoulders', 'Keep elbows stationary', 'Lower with control'],
        commonMistakes: ['Swinging body', 'Moving elbows forward', 'Using momentum']
      },
      research: {
        effectiveness: 'A',
        citations: ['oliveira-2009-biceps'],
        keyFindings: [
          'Primary biceps mass builder',
          'EZ bar reduces wrist strain',
          'Full ROM for complete development'
        ]
      },
      tags: ['biceps', 'isolation', 'mass-builder']
    },

    dumbbellCurl: {
      id: 'dumbbellCurl',
      name: 'Dumbbell Curl',
      category: 'arms',
      subcategory: 'isolation',
      movement: {
        pattern: 'pull',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['biceps'],
        secondary: ['forearms']
      },
      equipment: {
        required: ['dumbbells'],
        optional: [],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 2,
        skillRequirement: 1,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 4 }
      },
      technique: {
        setup: ['Stand with dumbbells at sides', 'Palms facing forward or rotate during curl', 'Elbows at sides'],
        execution: ['Curl dumbbells to shoulders', 'Squeeze at top', 'Lower with control'],
        commonMistakes: ['Swinging', 'Alternating unevenly', 'Not going full ROM']
      },
      research: {
        effectiveness: 'A',
        citations: ['oliveira-2009-biceps'],
        keyFindings: [
          'Allows supination for peak contraction',
          'Unilateral work addresses imbalances',
          'Versatile for different curl variations'
        ]
      },
      tags: ['biceps', 'dumbbell', 'beginner-friendly']
    },

    hammerCurl: {
      id: 'hammerCurl',
      name: 'Hammer Curl',
      category: 'arms',
      subcategory: 'isolation',
      movement: {
        pattern: 'pull',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['biceps', 'brachialis'],
        secondary: ['forearms']
      },
      equipment: {
        required: ['dumbbells'],
        optional: [],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 2,
        skillRequirement: 1,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Stand with dumbbells at sides', 'Neutral grip (palms facing each other)', 'Elbows at sides'],
        execution: ['Curl dumbbells keeping neutral grip', 'Raise to shoulder level', 'Lower with control'],
        commonMistakes: ['Rotating wrists', 'Swinging body', 'Elbows drifting forward']
      },
      research: {
        effectiveness: 'A',
        citations: ['oliveira-2009-biceps'],
        keyFindings: [
          'Targets brachialis for arm thickness',
          'Builds forearm brachioradialis',
          'Creates fuller arm appearance'
        ]
      },
      tags: ['biceps', 'brachialis', 'forearms', 'arm-thickness']
    },

    tricepPushdown: {
      id: 'tricepPushdown',
      name: 'Tricep Pushdown',
      category: 'arms',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['triceps'],
        secondary: []
      },
      equipment: {
        required: ['cable-machine'],
        optional: ['straight-bar', 'v-bar', 'rope'],
        category: 'cable'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 2,
        skillRequirement: 1,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 8, max: 10, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Stand facing high cable', 'Grip bar or rope', 'Elbows at sides'],
        execution: ['Push handle down until arms straight', 'Squeeze triceps at bottom', 'Return with control'],
        commonMistakes: ['Elbows moving forward', 'Leaning into movement', 'Not full extension']
      },
      research: {
        effectiveness: 'A',
        citations: ['boehler-2011-triceps'],
        keyFindings: [
          'Effective lateral head emphasis',
          'Constant cable tension',
          'Easy to superset'
        ]
      },
      tags: ['triceps', 'cable', 'isolation', 'beginner-friendly']
    },

    skullCrusher: {
      id: 'skullCrusher',
      name: 'Skull Crusher (Lying Tricep Extension)',
      category: 'arms',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['triceps'],
        secondary: []
      },
      equipment: {
        required: ['barbell', 'bench'],
        optional: ['ez-bar', 'dumbbells'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 4,
        skillRequirement: 4,
        recoveryDemand: 3,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 4 }
      },
      technique: {
        setup: ['Lie on bench, bar over face', 'Grip shoulder-width', 'Upper arms perpendicular to floor'],
        execution: ['Lower bar toward forehead', 'Extend arms to starting position', 'Keep upper arms fixed'],
        commonMistakes: ['Flaring elbows', 'Moving upper arms', 'Going too heavy']
      },
      research: {
        effectiveness: 'A',
        citations: ['boehler-2011-triceps'],
        keyFindings: [
          'Excellent long head emphasis',
          'Good stretch under load',
          'Mass builder for triceps'
        ]
      },
      tags: ['triceps', 'long-head', 'mass-builder']
    },

    overheadTricepExtension: {
      id: 'overheadTricepExtension',
      name: 'Overhead Tricep Extension',
      category: 'arms',
      subcategory: 'isolation',
      movement: {
        pattern: 'push',
        plane: 'vertical',
        type: 'isolation'
      },
      muscles: {
        primary: ['triceps'],
        secondary: []
      },
      equipment: {
        required: ['dumbbell'],
        optional: ['cable', 'ez-bar'],
        category: 'dumbbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Hold dumbbell overhead with both hands', 'Upper arms close to ears', 'Elbows pointed up'],
        execution: ['Lower weight behind head', 'Extend arms to straighten', 'Keep upper arms stationary'],
        commonMistakes: ['Elbows flaring out', 'Not going deep enough', 'Arching lower back']
      },
      research: {
        effectiveness: 'A',
        citations: ['boehler-2011-triceps'],
        keyFindings: [
          'Best for long head development',
          'Stretched position = growth stimulus',
          'Full ROM critical'
        ]
      },
      tags: ['triceps', 'long-head', 'dumbbell']
    },

    closeGripBench: {
      id: 'closeGripBench',
      name: 'Close Grip Bench Press',
      category: 'arms',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'horizontal',
        type: 'compound'
      },
      muscles: {
        primary: ['triceps'],
        secondary: ['chest', 'shoulders']
      },
      equipment: {
        required: ['barbell', 'bench'],
        optional: ['power-rack'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 6,
        skillRequirement: 4,
        recoveryDemand: 5,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-10' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Grip bar shoulder-width or slightly narrower', 'Retract scapulae', 'Feet flat on floor'],
        execution: ['Lower bar to lower chest', 'Keep elbows close to body', 'Press up in straight line'],
        commonMistakes: ['Grip too narrow', 'Flaring elbows', 'Bouncing off chest']
      },
      research: {
        effectiveness: 'A+',
        citations: ['boehler-2011-triceps'],
        keyFindings: [
          'Allows heavy tricep loading',
          'Compound movement for arm size',
          'Also builds pressing strength'
        ]
      },
      tags: ['triceps', 'compound', 'strength', 'mass-builder']
    },

    preacherCurl: {
      id: 'preacherCurl',
      name: 'Preacher Curl',
      category: 'arms',
      subcategory: 'isolation',
      movement: {
        pattern: 'pull',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['biceps'],
        secondary: []
      },
      equipment: {
        required: ['preacher-bench', 'barbell'],
        optional: ['ez-bar', 'dumbbells'],
        category: 'barbell'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 3,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 6, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 15, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Sit at preacher bench', 'Arms over pad, armpits at top', 'Grip bar at shoulder width'],
        execution: ['Curl bar up toward shoulders', 'Squeeze at top', 'Lower with control, do not hyperextend'],
        commonMistakes: ['Lifting off the pad', 'Hyperextending at bottom', 'Going too heavy']
      },
      research: {
        effectiveness: 'B+',
        citations: ['oliveira-2009-biceps'],
        keyFindings: [
          'Eliminates momentum',
          'Short head emphasis',
          'Good for peak contraction'
        ]
      },
      tags: ['biceps', 'isolation', 'strict-form']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CORE EXERCISES
  // ═══════════════════════════════════════════════════════════════════════════
  core: {
    hangingLegRaise: {
      id: 'hangingLegRaise',
      name: 'Hanging Leg Raise',
      category: 'core',
      subcategory: 'compound',
      movement: {
        pattern: 'pull',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['core'],
        secondary: ['hip-flexors']
      },
      equipment: {
        required: ['pull-up-bar'],
        optional: ['ab-straps'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 5,
        skillRequirement: 5,
        recoveryDemand: 3,
        repRanges: {
          strength: { min: 6, max: 10, rpe: '8-9' },
          hypertrophy: { min: 10, max: 15, rpe: '7-9' },
          endurance: { min: 15, max: 25, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Hang from bar with straight arms', 'Slight posterior pelvic tilt', 'Core engaged'],
        execution: ['Raise legs toward bar', 'Curl pelvis at top', 'Lower with control'],
        commonMistakes: ['Swinging', 'Not curling pelvis', 'Using hip flexors only']
      },
      research: {
        effectiveness: 'A',
        citations: ['contreras-2014-core'],
        keyFindings: [
          'High rectus abdominis activation',
          'Challenges grip as bonus',
          'Progressive with bent to straight legs'
        ]
      },
      tags: ['core', 'bodyweight', 'lower-abs']
    },

    cableCrunch: {
      id: 'cableCrunch',
      name: 'Cable Crunch',
      category: 'core',
      subcategory: 'isolation',
      movement: {
        pattern: 'pull',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['core'],
        secondary: []
      },
      equipment: {
        required: ['cable-machine', 'rope-attachment'],
        optional: [],
        category: 'cable'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 2,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 10, max: 12, rpe: '8-9' },
          hypertrophy: { min: 12, max: 20, rpe: '7-9' },
          endurance: { min: 20, max: 30, rpe: '6-8' }
        },
        setsPerSession: { min: 3, optimal: 4, max: 5 }
      },
      technique: {
        setup: ['Kneel facing cable machine', 'Hold rope behind head', 'Hips locked in position'],
        execution: ['Crunch down, bringing elbows toward knees', 'Round spine, squeeze abs', 'Return with control'],
        commonMistakes: ['Hip hinging instead of crunching', 'Pulling with arms', 'Not fully contracting']
      },
      research: {
        effectiveness: 'A',
        citations: ['contreras-2014-core'],
        keyFindings: [
          'Allows progressive overload for abs',
          'Constant tension from cable',
          'Effective for hypertrophy'
        ]
      },
      tags: ['core', 'cable', 'progressive-overload']
    },

    plank: {
      id: 'plank',
      name: 'Plank',
      category: 'core',
      subcategory: 'isometric',
      movement: {
        pattern: 'isometric',
        plane: 'sagittal',
        type: 'isolation'
      },
      muscles: {
        primary: ['core'],
        secondary: ['shoulders', 'glutes']
      },
      equipment: {
        required: [],
        optional: ['weight-plate'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 2,
        skillRequirement: 1,
        recoveryDemand: 1,
        repRanges: {
          strength: { min: 30, max: 60, rpe: '7-8' },
          hypertrophy: { min: 45, max: 90, rpe: '7-8' },
          endurance: { min: 60, max: 180, rpe: '6-7' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Forearms on ground, elbows under shoulders', 'Body in straight line', 'Core and glutes squeezed'],
        execution: ['Hold position', 'Maintain neutral spine', 'Breathe steadily'],
        commonMistakes: ['Hips sagging', 'Hips too high', 'Holding breath']
      },
      research: {
        effectiveness: 'B+',
        citations: ['contreras-2014-core'],
        keyFindings: [
          'Anti-extension core stability',
          'Foundational core exercise',
          'Time under tension builds endurance'
        ]
      },
      tags: ['core', 'bodyweight', 'isometric', 'beginner-friendly']
    },

    abWheelRollout: {
      id: 'abWheelRollout',
      name: 'Ab Wheel Rollout',
      category: 'core',
      subcategory: 'compound',
      movement: {
        pattern: 'push',
        plane: 'sagittal',
        type: 'compound'
      },
      muscles: {
        primary: ['core'],
        secondary: ['lats', 'shoulders']
      },
      equipment: {
        required: ['ab-wheel'],
        optional: ['barbell'],
        category: 'specialty'
      },
      programming: {
        difficulty: 'intermediate',
        fatigueRating: 5,
        skillRequirement: 5,
        recoveryDemand: 4,
        repRanges: {
          strength: { min: 5, max: 8, rpe: '8-9' },
          hypertrophy: { min: 8, max: 12, rpe: '7-9' },
          endurance: { min: 12, max: 20, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Kneel with ab wheel in front', 'Core braced, slight posterior tilt', 'Arms straight'],
        execution: ['Roll wheel forward, extending body', 'Go as far as control allows', 'Roll back by contracting abs'],
        commonMistakes: ['Lower back sagging', 'Not controlling the roll', 'Going too far too soon']
      },
      research: {
        effectiveness: 'A+',
        citations: ['contreras-2014-core'],
        keyFindings: [
          'Highest rectus abdominis activation',
          'Anti-extension challenge',
          'Progresses from knees to standing'
        ]
      },
      tags: ['core', 'advanced', 'anti-extension']
    },

    russianTwist: {
      id: 'russianTwist',
      name: 'Russian Twist',
      category: 'core',
      subcategory: 'isolation',
      movement: {
        pattern: 'rotation',
        plane: 'transverse',
        type: 'isolation'
      },
      muscles: {
        primary: ['core'],
        secondary: []
      },
      equipment: {
        required: [],
        optional: ['medicine-ball', 'dumbbell', 'weight-plate'],
        category: 'bodyweight'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 2,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 10, max: 15, rpe: '8-9' },
          hypertrophy: { min: 15, max: 25, rpe: '7-9' },
          endurance: { min: 25, max: 40, rpe: '6-8' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Sit with knees bent, feet elevated or grounded', 'Lean back slightly', 'Hold weight at chest'],
        execution: ['Rotate torso side to side', 'Touch weight to ground each side', 'Control the movement'],
        commonMistakes: ['Moving only arms', 'Going too fast', 'Not engaging obliques']
      },
      research: {
        effectiveness: 'B',
        citations: ['contreras-2014-core'],
        keyFindings: [
          'Targets obliques',
          'Rotational core training',
          'Use caution with loaded spinal rotation'
        ]
      },
      tags: ['core', 'obliques', 'rotation']
    },

    pallofPress: {
      id: 'pallofPress',
      name: 'Pallof Press',
      category: 'core',
      subcategory: 'isometric',
      movement: {
        pattern: 'isometric',
        plane: 'transverse',
        type: 'isolation'
      },
      muscles: {
        primary: ['core'],
        secondary: []
      },
      equipment: {
        required: ['cable-machine'],
        optional: ['bands'],
        category: 'cable'
      },
      programming: {
        difficulty: 'beginner',
        fatigueRating: 2,
        skillRequirement: 2,
        recoveryDemand: 2,
        repRanges: {
          strength: { min: 8, max: 10, rpe: '7-8' },
          hypertrophy: { min: 10, max: 15, rpe: '7-8' },
          endurance: { min: 15, max: 20, rpe: '6-7' }
        },
        setsPerSession: { min: 2, optimal: 3, max: 4 }
      },
      technique: {
        setup: ['Stand perpendicular to cable', 'Hold handle at chest', 'Feet shoulder width'],
        execution: ['Press handle straight out', 'Resist rotation', 'Hold, then return to chest'],
        commonMistakes: ['Rotating toward cable', 'Stance too narrow', 'Not bracing core']
      },
      research: {
        effectiveness: 'A',
        citations: ['contreras-2014-core'],
        keyFindings: [
          'Anti-rotation core training',
          'Functional core stability',
          'Safe for lower back'
        ]
      },
      tags: ['core', 'anti-rotation', 'functional', 'cable']
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// COMMON EXERCISES LIST (for quick access like COMMON_FOODS)
// ═══════════════════════════════════════════════════════════════════════════

const COMMON_EXERCISES = {
  chest: ['barbellBenchPress', 'dumbbellBenchPress', 'inclineDumbbellPress', 'cableFlye', 'dips'],
  back: ['barbellRow', 'pullUps', 'latPulldown', 'seatedCableRow', 'dumbbellRow'],
  shoulders: ['overheadPress', 'dumbbellShoulderPress', 'lateralRaise', 'facePulls', 'rearDeltFlye'],
  legs: ['barbellSquat', 'romanianDeadlift', 'legPress', 'bulgarianSplitSquat', 'hipThrust'],
  arms: ['barbellCurl', 'hammerCurl', 'tricepPushdown', 'skullCrusher', 'closeGripBench'],
  core: ['hangingLegRaise', 'cableCrunch', 'plank', 'abWheelRollout', 'pallofPress']
};

// ═══════════════════════════════════════════════════════════════════════════
// EXERCISE UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Calculate similarity score between two exercises for swap feature
 * @param {Object} exercise1 - First exercise object
 * @param {Object} exercise2 - Second exercise object
 * @returns {number} Similarity score 0-100
 */
function calculateExerciseSimilarity(exercise1, exercise2) {
  if (!exercise1 || !exercise2) return 0;
  if (exercise1.id === exercise2.id) return 100;

  let score = 0;

  // Movement pattern match (30%)
  if (exercise1.movement.pattern === exercise2.movement.pattern) {
    score += 30;
  } else if (isRelatedPattern(exercise1.movement.pattern, exercise2.movement.pattern)) {
    score += 15;
  }

  // Primary muscle match (40%)
  const primaryOverlap = exercise1.muscles.primary.filter(m =>
    exercise2.muscles.primary.includes(m)
  ).length;
  const maxPrimary = Math.max(exercise1.muscles.primary.length, exercise2.muscles.primary.length);
  if (maxPrimary > 0) {
    score += Math.round((primaryOverlap / maxPrimary) * 40);
  }

  // Equipment compatibility (20%)
  if (exercise1.equipment.category === exercise2.equipment.category) {
    score += 20;
  } else if (isEquipmentCompatible(exercise1.equipment.category, exercise2.equipment.category)) {
    score += 10;
  }

  // Difficulty proximity (10%)
  const difficultyLevels = ['beginner', 'intermediate', 'advanced'];
  const diff1 = difficultyLevels.indexOf(exercise1.programming.difficulty);
  const diff2 = difficultyLevels.indexOf(exercise2.programming.difficulty);
  const difficultyDiff = Math.abs(diff1 - diff2);
  score += Math.max(0, 10 - (difficultyDiff * 5));

  return Math.round(score);
}

/**
 * Check if movement patterns are related
 */
function isRelatedPattern(pattern1, pattern2) {
  const relatedPatterns = {
    'push': ['push'],
    'pull': ['pull'],
    'squat': ['squat', 'hinge'],
    'hinge': ['hinge', 'squat'],
    'carry': ['carry', 'isometric'],
    'rotation': ['rotation'],
    'isometric': ['isometric', 'carry']
  };
  return relatedPatterns[pattern1]?.includes(pattern2) || false;
}

/**
 * Check if equipment categories are compatible for swapping
 */
function isEquipmentCompatible(cat1, cat2) {
  const compatibilityGroups = [
    ['barbell', 'dumbbell'],
    ['cable', 'machine'],
    ['bodyweight', 'bands']
  ];
  return compatibilityGroups.some(group => group.includes(cat1) && group.includes(cat2));
}

/**
 * Find alternative exercises for a given exercise
 * @param {string} exerciseId - ID of exercise to find alternatives for
 * @param {Object} options - Filter options (equipment, difficulty, etc.)
 * @returns {Array} Array of alternative exercises sorted by similarity
 */
function findExerciseAlternatives(exerciseId, options = {}) {
  const originalExercise = getExerciseById(exerciseId);
  if (!originalExercise) return [];

  const alternatives = [];

  // Search all categories
  Object.values(EXERCISE_DATABASE).forEach(category => {
    Object.values(category).forEach(exercise => {
      if (exercise.id === exerciseId) return;

      // Apply equipment filter if specified
      if (options.equipment && options.equipment.length > 0) {
        if (!options.equipment.includes(exercise.equipment.category)) return;
      }

      // Apply difficulty filter if specified
      if (options.maxDifficulty) {
        const levels = ['beginner', 'intermediate', 'advanced'];
        if (levels.indexOf(exercise.programming.difficulty) > levels.indexOf(options.maxDifficulty)) return;
      }

      const similarity = calculateExerciseSimilarity(originalExercise, exercise);
      if (similarity >= 40) { // Only include if reasonably similar
        alternatives.push({
          exercise,
          similarity
        });
      }
    });
  });

  // Sort by similarity descending
  return alternatives.sort((a, b) => b.similarity - a.similarity);
}

/**
 * Get exercise by ID
 */
function getExerciseById(exerciseId) {
  for (const category of Object.values(EXERCISE_DATABASE)) {
    if (category[exerciseId]) {
      return category[exerciseId];
    }
  }
  return null;
}

/**
 * Get all exercises for a muscle group
 */
function getExercisesForMuscle(muscleGroup, options = {}) {
  const exercises = [];

  Object.values(EXERCISE_DATABASE).forEach(category => {
    Object.values(category).forEach(exercise => {
      if (exercise.muscles.primary.includes(muscleGroup) ||
          (options.includeSecondary && exercise.muscles.secondary.includes(muscleGroup))) {
        exercises.push(exercise);
      }
    });
  });

  return exercises;
}

/**
 * Get compound exercises from a category
 */
function getCompoundExercises(categoryName) {
  const category = EXERCISE_DATABASE[categoryName];
  if (!category) return [];

  return Object.values(category).filter(e => e.movement.type === 'compound');
}

/**
 * Get isolation exercises from a category
 */
function getIsolationExercises(categoryName) {
  const category = EXERCISE_DATABASE[categoryName];
  if (!category) return [];

  return Object.values(category).filter(e => e.movement.type === 'isolation');
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EXERCISE_DATABASE,
    MUSCLE_GROUPS,
    MOVEMENT_PATTERNS,
    MOVEMENT_PLANES,
    EQUIPMENT_TYPES,
    DIFFICULTY_LEVELS,
    COMMON_EXERCISES,
    calculateExerciseSimilarity,
    findExerciseAlternatives,
    getExerciseById,
    getExercisesForMuscle,
    getCompoundExercises,
    getIsolationExercises
  };
}
