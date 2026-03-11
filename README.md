# MUSCLEFORGE

> **Train Smarter.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet.js-199900?style=flat-square&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Zero Dependencies](https://img.shields.io/badge/build-zero_dependencies-e04520?style=flat-square)](#tech-stack)
[![License: MIT](https://img.shields.io/badge/License-MIT-d97706?style=flat-square)](https://opensource.org/licenses/MIT)

---

MuscleForge is a comprehensive, science-backed bodybuilding and nutrition toolkit that runs entirely in the browser. No accounts. No servers. No frameworks. One file — iron-clad and self-contained — with 30+ calculators, a full nutrition planner, periodized training programs, an interactive anatomy map, gym finder, supplement evidence database, and more.

Built for lifters who demand precision. Designed with the aesthetic of iron, blood, and rust.

---

## Live Demo

**[muscleforge.ayter.com](https://muscleforge.ayter.com)**

---

## Overview

MuscleForge is the result of one guiding principle: every tool in the app should be grounded in published, peer-reviewed research — not bro-science, not marketing copy. Macros are calculated per ISSN position stands. Volume landmarks follow Renaissance Periodization's MEV/MAV/MRV framework. Body composition assessments reference validated anthropometric models. Strength scores use Wilks, DOTS, and IPF GL formulas.

The entire application ships as a single `index.html` file (~14,500 lines of inline HTML, CSS, and JavaScript). Open it in a browser. That's it.

---

## Feature Highlights

### Nutrition Planner

The nutrition module begins with metabolic rate estimation and builds a full dietary framework from there.

- **BMR/TDEE** — Mifflin-St Jeor equation (1990) for general populations; Katch-McArdle for users with known body fat percentage
- **Macro targets** — Protein recommendations per ISSN Position Stand (Jäger et al., 2017): 1.6–2.4 g/kg body weight for hypertrophy phases; 2.3–3.1 g/kg LBM during caloric deficit to preserve lean mass
- **7 macro profiles**: Bodybuilding Standard, High Protein, High Carb, Low Carb, Keto, Balanced, Competition Prep
- **Food database** — 80+ entries with full macro breakdown and automatic daily distribution
- **Export** — CSV and JSON for use in external spreadsheets or apps

---

### Training Programs

Four fully periodized templates covering every major training frequency:

| Template | Frequency | Split |
|---|---|---|
| Push / Pull / Legs | 6-day | PPL |
| Upper / Lower | 4-day | U/L |
| Full Body | 3-day | FB |
| Bro Split | 5-day | Body Part |

Each program includes 52+ exercises catalogued by primary and secondary muscles, equipment requirement, and difficulty rating. Volume is tracked against MEV, MAV, and MRV thresholds per the Renaissance Periodization methodology. Swap any exercise by movement pattern or muscle group without breaking program structure.

---

### Workout Logger

A tabbed interface for real-time training logs and long-term progress tracking.

- **Log tab** — Record sets, reps, and weight in real time
- **History tab** — Full training history from localStorage
- **Progress Chart tab** — Chart.js 4.4.0 visualization of volume and load over time
- **PR Tracker** — Automatically flags personal records
- **Water intake** — Daily hydration log with per-day localStorage keys
- **Check-ins** — Bodyweight and measurement tracking over time

---

### Anatomy Hero

The centerpiece of the Train view — a dual-view SVG muscle map covering the full human body.

- 26 distinct muscle regions, front and back
- Click any region to open a targeted workout builder as a bottom sheet
- Swipe-to-close gesture support, iOS safe-area insets handled
- Instant visual feedback on what muscles are involved in your program

---

### Advanced Tools — 30+ Calculators

**Body Composition**
- **FFMI Calculator** — Fat-Free Mass Index per Kouri et al. (1995); the definitive research-backed benchmark for natural physique assessment
- **Navy Body Fat** — Circumference-based body fat estimation validated by the U.S. Navy
- **Genetic Potential** — Casey Butt's anthropometric formula for maximum muscular potential
- **Ideal Measurements** — Steve Reeves proportion model for classical physique symmetry

**Training**
- Volume Landmarks (RP method — MEV / MAV / MRV per muscle group)
- Wilks, DOTS, and IPF GL strength scores for cross-bodyweight comparison
- Progressive Overload Calculator
- Deload Week Generator
- Periodization Model Selector
- Rep Max Percentage Table (Brzycki / Epley)
- Workout Rest Timer

**Nutrition**
- Carb Cycling Protocol Builder
- Reverse Dieting Calculator
- Body Recomposition Strategy
- Peak Week Water and Carbohydrate Manipulation Protocol
- Combat Sports Weight Cut — updated to ISSN 2025 guidelines
- HMB Guide — synthesized from ISSN 2025 position stand
- Macro Meal Builder
- Meal Prep Cost Calculator

**Recovery**
- Sleep Optimization Assessment
- Recovery Readiness Scoring
- Stress and Cortisol Management
- Injury Prevention Protocols

**Competition**
- Contest Prep Countdown with phase tracking
- Water Loading Protocol
- IFBB Mandatory Poses Guide

---

### Supplement Evidence Database

An evidence-tiered supplement reference guide sourced from ISSN position papers and peer-reviewed meta-analyses. No affiliate links. No marketing. Just graded evidence.

---

### Program Library and Strength Standards

A curated library of periodization programs from the strength and hypertrophy literature, paired with gender- and bodyweight-adjusted strength standards so you know exactly where you stand.

---

### Gym Mapper

- Powered by OpenStreetMap data via Leaflet.js
- Browser geolocation support
- Results sorted by distance
- One-tap deep links to Google Maps for directions

---

### Achievements System

Eight training milestones tracked silently in the background — localStorage-based, zero friction.

---

## Scientific Foundation

MuscleForge treats the research literature as a first-class dependency. Every core calculation has a citation.

**Protein and Macronutrients**
Jäger, R., et al. (2017). International Society of Sports Nutrition Position Stand: Protein and exercise. *Journal of the International Society of Sports Nutrition*, 14, 20.
Recommendation: 1.6–2.4 g/kg/day for muscle accretion; 2.3–3.1 g/kg LBM for lean mass retention during energy restriction.

**Basal Metabolic Rate**
Mifflin, M.D., & St Jeor, S.T. (1990). A new predictive equation for resting energy expenditure in healthy individuals. *American Journal of Clinical Nutrition*, 51(2), 241–247.
Selected over Harris-Benedict for superior accuracy in modern, sedentary-to-active populations.

**Training Volume**
Schoenfeld, B.J., et al. (2017). Dose-response relationship between weekly resistance training volume and increases in muscle mass: A systematic review and meta-analysis. *Journal of Sports Sciences*, 35(11), 1073–1082.
Underpins MEV/MAV/MRV thresholds used throughout the volume tracking and program design modules.

**Rest Periods**
Schoenfeld, B.J., et al. (2016). Longer interset rest periods enhance muscle strength and hypertrophy in resistance-trained men. *Journal of Strength and Conditioning Research*, 30(7), 1805–1812.
Supports default 3-minute rest recommendations for compound movements in strength and hypertrophy blocks.

**FFMI and Natural Limits**
Kouri, E.M., et al. (1995). Fat-free mass index in users and nonusers of anabolic-androgenic steroids. *Clinical Journal of Sport Medicine*, 5(4), 223–228.
The 25 FFMI ceiling for drug-free athletes remains the most-cited anthropometric benchmark in natural bodybuilding literature.

**Contest Preparation**
Helms, E.R., et al. (2014). Evidence-based recommendations for natural bodybuilding contest preparation: Nutrition and supplementation. *Journal of the International Society of Sports Nutrition*, 11, 20.
Informs weight loss rate targets (0.5–1.0% body weight per week), contest prep timelines, and lean-mass preservation strategies.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Application | Single-file HTML (~14,500 lines) |
| Styling | Inline CSS — Bebas Neue, Teko, Space Grotesk |
| Logic | Vanilla JavaScript — zero frameworks |
| Charts | Chart.js 4.4.0 |
| Maps | Leaflet.js + OpenStreetMap |
| PDF Export | html2pdf.js |
| Persistence | localStorage (all data client-side) |
| Build step | None |

---

## File Structure

```
muscleforge/
├── index.html          # Single-file application (~14,500 lines)
└── README.md
```

---

## Deployment

MuscleForge is a static file. Deploy it anywhere.

```bash
# GitHub Pages
git push origin master

# Netlify / Vercel
# Drop index.html into the dashboard — done.

# Any web server
cp index.html /var/www/html/
```

Works on GitHub Pages, Netlify, Vercel, S3 + CloudFront, Cloudflare Pages, or any web server that can serve a file.

---

## localStorage Schema

All data lives in the user's browser. Nothing is transmitted.

| Key | Contents |
|---|---|
| `mf-workout-log` | Unified training history (all sessions) |
| `mf-achievements` | Achievement unlock state |
| `muscleforge_prs` | Personal record log |
| `muscleforge_checkins` | Bodyweight and measurement check-ins |
| `muscleforge_water_YYYY-MM-DD` | Daily water intake (one key per day) |

---

## Browser Support

| Browser | Minimum Version |
|---|---|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |

All modern mobile browsers are supported. Safari on iOS requires version 13+ for full safe-area and gesture support.

---

## Disclaimer

MuscleForge is an educational and informational tool. It is not a substitute for medical advice, diagnosis, or treatment. Calculations and recommendations are derived from published research but do not account for individual health conditions, injury history, or clinical factors. Consult a qualified physician, registered dietitian, or certified strength and conditioning specialist before making significant changes to your diet or exercise program.

The FFMI and body composition tools are reference instruments only and should not be used to make clinical or legal determinations.

---

## Author

Built by **[Can Ayter](https://ayter.com)**

GitHub: [github.com/canayter/muscleforge](https://github.com/canayter/muscleforge)

---

*MuscleForge — Train Smarter.*
