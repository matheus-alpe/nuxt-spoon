export interface Recipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: Gaps;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license?: License;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: ImageType;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId: null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

export interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: Ent[];
  equipment: Ent[];
  length?: Length;
}

export interface Ent {
  id: number;
  name: string;
  localizedName: string;
  image: string;
  temperature?: Length;
}

export interface Length {
  number: number;
  unit: Unit;
}

export type Unit = "Fahrenheit" | "Celsius" | "minutes";

export interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: Consistency;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Measures;
}

export type Consistency = "SOLID" | "LIQUID";

export interface Measures {
  us: Metric;
  metric: Metric;
}

export interface Metric {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export type Gaps = "no";

export type ImageType = "jpg";

export type License = "CC BY 3.0" | "CC BY-SA 3.0" | "CC BY 4.0";
