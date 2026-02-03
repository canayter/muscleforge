# MuscleForge

**Professional Bodybuilding Nutrition Planner**

A comprehensive, scientifically-backed nutrition toolkit designed for bodybuilders, fitness enthusiasts, and anyone serious about optimizing their diet for physique goals - including IFBB competition preparation.

Created by [Can Ayter](https://www.ayter.com)

## Features

### Core Calculators
- **BMR Calculator** - Uses Mifflin-St Jeor (most accurate for modern populations) or Katch-McArdle (when body fat % is known)
- **TDEE Calculator** - Activity multipliers based on sports science research
- **BMI Calculator** - With bodybuilder-specific notes about muscle mass
- **Body Composition Analysis** - Lean mass vs fat mass breakdown
- **Protein Requirements** - Based on ISSN Position Stand guidelines
- **Water Intake Calculator** - Adjusted for activity level and climate

### Nutrition Planning
- **7 Pre-built Macro Profiles**:
  - Bodybuilding Standard (40/40/20)
  - High Protein (45/35/20)
  - High Carb (30/55/15)
  - Low Carb (40/20/40)
  - Ketogenic (25/5/70)
  - Balanced (30/40/30)
  - Competition Prep (50/30/20)
- **Custom Macro Configuration**
- **Multiple Diet Types**: Regular, Vegetarian, Vegan, Paleo, Mediterranean, Gluten-Free
- **Meal Timing Optimization** based on training schedule

### Food Database
- **80+ foods** with detailed nutritional data
- **Full Micronutrient Profiles**:
  - Macros: Protein, Carbs, Fat, Fiber, Sugar
  - Minerals: Sodium, Potassium, Calcium, Iron, Magnesium, Zinc, Phosphorus
  - Vitamins: A, C, D, E, K, B6, B12, Folate
  - Fats: Saturated, Trans, Omega-3, Omega-6
  - Glycemic Index
- **Allergen Tracking**: Dairy, Eggs, Fish, Shellfish, Tree Nuts, Peanuts, Wheat, Soy, Gluten
- **Search & Filter** by category, diet type, and keywords

### IFBB Competition Prep
- **Prep Timeline Calculator**
- **Weekly Weight Loss Projections**
- **Sustainability Assessment**
- **Phase Planning**: Base Building, Fat Loss, Sharpening, Peak Week
- **Daily Deficit Calculations**

### Supplement Recommendations
Evidence-based supplement guidance with ratings:
- **Essential**: Creatine, Whey Protein, Vitamin D3, Omega-3
- **Performance**: Caffeine, Beta-Alanine, Citrulline Malate
- **Recovery**: Casein, Magnesium, Zinc

### Scientific References
All recommendations backed by peer-reviewed research:
- ISSN Position Stands on Protein, Creatine, Caffeine, Beta-Alanine
- Mifflin-St Jeor BMR equation (Am J Clin Nutr, 1990)
- Evidence-based bodybuilding prep guidelines (JISSN, 2014)
- And more...

### Export Options
- **PDF Export** - Professional formatted nutrition plan
- **JSON Export** - For data portability and integrations
- **Print** - Clean print-optimized layout

## Installation

### Option 1: Direct Use
Simply open `index.html` in a modern web browser. No server required.

### Option 2: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

### Option 3: Deploy to Web
Upload all files to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting

## Project Structure

```
muscleforge/
├── index.html          # Main application
├── README.md           # This file
├── data/
│   ├── foods.js        # Comprehensive food database
│   └── references.js   # Scientific references & supplements
└── js/
    └── calculators.js  # Calculation functions
```

## Usage

1. **Enter Your Information**
   - Age, sex, weight, height
   - Activity level (sedentary to athlete)
   - Body fat % (optional, for more accurate calculations)

2. **Select Your Goal**
   - Aggressive Cut (-750 cal)
   - Cut (-500 cal)
   - Maintain
   - Lean Bulk (+300 cal)
   - Bulk (+500 cal)

3. **Choose Macro Profile**
   - Select from presets or customize your own

4. **Configure Preferences**
   - Diet type (vegetarian, vegan, etc.)
   - Meals per day (3-6)
   - Training time

5. **Generate Plan**
   - View daily calorie and macro targets
   - Get protein recommendations per meal
   - See hydration targets
   - Toggle detailed view for micronutrients

6. **Export**
   - Download as PDF or JSON
   - Print directly

## Scientific Basis

### BMR Calculations
- **Mifflin-St Jeor** (default): Most accurate for general population
- **Katch-McArdle**: Uses lean body mass, most accurate when BF% is known
- **Harris-Benedict**: Legacy option, included for reference

### Protein Recommendations
Based on ISSN Position Stand (Jäger et al., 2017):
- Maintenance: 1.4-2.2 g/kg/day
- Cutting: 2.3-3.1 g/kg lean body mass
- Bulking: 1.6-2.4 g/kg/day
- Per meal: 0.4-0.55 g/kg for optimal muscle protein synthesis

### Competition Prep
Based on Helms et al. (2014) evidence-based recommendations:
- Rate of loss: 0.5-1% body weight per week
- Protein increased during deficit
- Phased approach to minimize muscle loss

## Technologies

- **HTML5/CSS3** - Modern, responsive design
- **Vanilla JavaScript** - No frameworks, fast loading
- **html2pdf.js** - PDF generation
- **Inter Font** - Clean, professional typography

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

### Areas for Contribution
- Additional foods in the database
- More scientific references
- Localization/translations
- Additional calculators
- UI/UX improvements

## License

MIT License - feel free to use, modify, and distribute.

## Disclaimer

MuscleForge provides general nutritional information for educational purposes. This tool is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider, registered dietitian, or certified sports nutritionist before making significant changes to your diet or exercise program. Individual results may vary based on genetics, adherence, and other factors.

## Acknowledgments

- USDA FoodData Central for nutritional data
- International Society of Sports Nutrition for evidence-based guidelines
- The bodybuilding and sports science community

---

**Built with science. Designed for results.**
