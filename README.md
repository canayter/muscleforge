# MuscleForge

Nutrition and training toolkit for bodybuilders. All calculations backed by peer-reviewed research.

**Author:** [Can Ayter](https://ayter.com)

## Quick Start

Open `index.html` in any modern browser. No dependencies, no build step.

## Features

### Nutrition Planner
- **BMR/TDEE calculation** using Mifflin-St Jeor or Katch-McArdle equations
- **Macro targets** based on ISSN protein guidelines (g/kg body weight, not arbitrary percentages)
- **7 preset profiles**: Bodybuilding Standard, High Protein, High Carb, Low Carb, Keto, Balanced, Competition Prep
- **Meal planning** with 80+ foods, automatic macro distribution
- **Export**: CSV, JSON

### Training Programs
- **4 templates**: PPL (6-day), Upper/Lower (4-day), Full Body (3-day), Bro Split (5-day)
- **52+ exercises** with primary/secondary muscles, equipment, difficulty ratings
- **Volume tracking**: Sets per muscle group with MEV/MAV/MRV context
- **Exercise swap**: Find alternatives by movement pattern and muscle group

### Advanced Tools (Tools Tab)

**Body Composition**
- FFMI Calculator (Kouri et al. 1995) - natural limit assessment
- Navy Body Fat (circumference method)
- Genetic Potential (Casey Butt formula)
- Ideal Measurements (Steve Reeves proportions)

**Training**
- Volume Landmarks (Renaissance Periodization method)
- Strength Scores (Wilks, DOTS, IPF GL)
- Progressive Overload Calculator
- Deload Week Generator
- Periodization Model Selector
- Rep Max Percentage Table
- Workout Rest Timer

**Nutrition**
- Carb Cycling Protocol Builder
- Reverse Dieting Calculator
- Body Recomposition Strategy
- Peak Week Water/Carb Manipulation
- Combat Sports Weight Cut (ISSN 2025)
- HMB Guide (ISSN 2025)
- Macro Meal Builder
- Meal Prep Cost Calculator
- Supplement Stack Builder (evidence-rated)

**Recovery**
- Sleep Optimization Assessment
- Recovery Readiness Scoring
- Stress/Cortisol Management
- Injury Prevention Protocols

**Competition**
- Contest Prep Countdown with phase tracking
- Water Loading Protocol
- IFBB Mandatory Poses Guide

**Utilities**
- PR Tracker (local storage)
- Gym Bag Checklist
- Progress Photo Guide

### Gym Mapper
- Find gyms near any location using OpenStreetMap data
- Geolocation support
- Distance-sorted results
- Direct Google Maps links

## Scientific Basis

Calculations reference:
- **Protein**: ISSN Position Stand (Jäger et al., 2017) - 1.6-2.4 g/kg for muscle building, 2.3-3.1 g/kg LBM during cuts
- **BMR**: Mifflin-St Jeor (Am J Clin Nutr, 1990) - most accurate for modern populations
- **Volume**: Schoenfeld et al. on dose-response relationship (J Sports Sci, 2017)
- **Rest Periods**: Schoenfeld et al. (J Strength Cond Res, 2016) - 3+ min for strength
- **FFMI**: Kouri et al. (Clin J Sport Med, 1995) - no natural exceeded 25
- **Contest Prep**: Helms et al. (JISSN, 2014) - 0.5-1% BW/week loss rate

## Project Structure

```
muscleforge/
├── index.html           # Single-file application
├── data/
│   ├── foods.js         # Food database with macros/micros
│   ├── exercises.js     # Exercise metadata
│   ├── programs.js      # Training templates
│   └── references.js    # Scientific references + calculators
└── js/
    └── calculators.js   # Core calculation functions
```

## Tech Stack

- Vanilla JavaScript (no frameworks)
- Leaflet.js for maps
- html2pdf.js for PDF export
- All client-side, no backend required

## Deployment

Works on any static host:
- GitHub Pages
- Netlify
- Vercel
- S3/CloudFront
- Any web server

## Browser Support

Chrome 80+, Firefox 75+, Safari 13+, Edge 80+

## Contributing

Issues and PRs welcome. Priority areas:
- Additional foods with verified nutritional data
- More peer-reviewed citations
- Accessibility improvements
- Mobile UX enhancements

## License

MIT

## Disclaimer

Educational tool only. Not medical advice. Consult qualified professionals before making significant diet or exercise changes.

---

Built by [Can Ayter](https://ayter.com)
