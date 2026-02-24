import { GameEntry } from "../types";

// Helpers
const q = (question: string, options: string[], correct: number, explanation: string) => ({ question, options, correct, explanation });
const mp = (id: string, emoji: string, name: string) => ({ id, emoji, name });
const si = (name: string, emoji: string, value: number) => ({ name, emoji, value });
const sa = (name: string, emoji: string, desc: string, effects: Record<string, number>) => ({ name, emoji, desc, effects });
const st = (emoji: string, name: string, points: number, good: boolean) => ({ emoji, name, points, good });
const sc = (name: string, emoji: string) => ({ name, emoji });
const soi = (name: string, emoji: string, category: string) => ({ name, emoji, category });

export const forestGames: Record<string, GameEntry> = {
  // === 6-8 ===
  "animal-habitat": { type: "sorting", title: "Animal Habitat Sorting", emoji: "🦊", config: {
    categories: [sc("Forest", "🌲"), sc("Not Forest", "🏠")],
    items: [soi("Fox", "🦊", "Forest"), soi("Owl", "🦉", "Forest"), soi("Deer", "🦌", "Forest"), soi("Bear", "🐻", "Forest"), soi("Goldfish", "🐠", "Not Forest"), soi("Penguin", "🐧", "Not Forest"), soi("Camel", "🐫", "Not Forest"), soi("Dolphin", "🐬", "Not Forest")],
    timeLimit: 60
  }},
  "save-sapling": { type: "simulation", title: "Save the Sapling", emoji: "🌱", config: {
    variables: [si("Water", "💧", 50), si("Sunlight", "☀️", 50), si("Health", "❤️", 60)],
    rounds: 8, winText: "Keep your sapling healthy for 8 days!",
    actions: [sa("Water It", "💧", "Give water to sapling", { Water: 15, Health: 5 }), sa("Add Shade", "🌂", "Protect from harsh sun", { Sunlight: -10, Water: 5, Health: 3 }), sa("Remove Weeds", "🌿", "Clear competing plants", { Health: 10, Water: -5 }), sa("Open Canopy", "☀️", "Let sunlight in", { Sunlight: 15, Water: -8 })]
  }},
  "forest-sounds": { type: "quiz", title: "Forest Sound Guessing", emoji: "🔊", config: { questions: [
    q("Which animal hoots at night?", ["Owl", "Fox", "Bear", "Deer"], 0, "Owls are famous nocturnal hooters!"),
    q("Which animal howls?", ["Wolf", "Rabbit", "Squirrel", "Beaver"], 0, "Wolves howl to communicate with their pack."),
    q("Which bird taps on trees?", ["Woodpecker", "Eagle", "Sparrow", "Robin"], 0, "Woodpeckers drum on trees to find insects."),
    q("Which insect buzzes?", ["Bee", "Ant", "Ladybug", "Spider"], 0, "Bees buzz as they flap their wings rapidly."),
    q("Which frog sound is 'ribbit'?", ["Pacific Tree Frog", "Bullfrog", "Poison Dart Frog", "Glass Frog"], 0, "The Pacific Tree Frog is the classic 'ribbit' frog!")
  ]}},
  "clean-forest": { type: "tap", title: "Clean the Forest", emoji: "🗑️", config: {
    targets: [st("🗑️", "Trash Bag", 10, true), st("🥤", "Plastic Cup", 10, true), st("📦", "Cardboard", 5, true), st("🌸", "Flower", -5, false), st("🐿️", "Squirrel", -10, false)],
    timeLimit: 45, goalScore: 80, spawnInterval: 800
  }},
  "seed-planting": { type: "tap", title: "Seed Planting Game", emoji: "🌰", config: {
    targets: [st("🌰", "Acorn", 10, true), st("🫘", "Seed", 10, true), st("🌱", "Sprout", 15, true), st("🪨", "Rock", -5, false), st("🍄", "Bad Mushroom", -10, false)],
    timeLimit: 50, goalScore: 100, spawnInterval: 700
  }},
  "insect-sorting": { type: "sorting", title: "Insect Sorting", emoji: "🐛", config: {
    categories: [sc("Helpful", "✅"), sc("Harmful", "❌")],
    items: [soi("Bee", "🐝", "Helpful"), soi("Ladybug", "🐞", "Helpful"), soi("Butterfly", "🦋", "Helpful"), soi("Earthworm", "🪱", "Helpful"), soi("Mosquito", "🦟", "Harmful"), soi("Termite", "🐛", "Harmful"), soi("Locust", "🦗", "Harmful"), soi("Tick", "🕷️", "Harmful")],
    timeLimit: 45
  }},
  "bird-nest": { type: "sorting", title: "Build a Bird Nest", emoji: "🪺", config: {
    categories: [sc("Nest Material", "🪺"), sc("Not Useful", "🚫")],
    items: [soi("Twigs", "🌿", "Nest Material"), soi("Leaves", "🍂", "Nest Material"), soi("Feathers", "🪶", "Nest Material"), soi("Moss", "🌱", "Nest Material"), soi("Plastic", "🧴", "Not Useful"), soi("Glass", "🪟", "Not Useful"), soi("Metal", "🔩", "Not Useful"), soi("Brick", "🧱", "Not Useful")],
    timeLimit: 40
  }},
  "hidden-animals": { type: "tap", title: "Find Hidden Animals", emoji: "🔍", config: {
    targets: [st("🦊", "Fox", 10, true), st("🦌", "Deer", 10, true), st("🐿️", "Squirrel", 10, true), st("🦉", "Owl", 15, true), st("🍂", "Leaf", -3, false)],
    timeLimit: 40, goalScore: 80, spawnInterval: 1000
  }},
  "rain-cycle": { type: "quiz", title: "Rain Cycle Animation", emoji: "🌧️", config: { questions: [
    q("What heats water to start the cycle?", ["Sun", "Moon", "Wind", "Trees"], 0, "The sun's heat evaporates water from oceans and lakes."),
    q("What is water vapor rising called?", ["Evaporation", "Condensation", "Precipitation", "Collection"], 0, "Evaporation turns liquid water into vapor."),
    q("Clouds form through what process?", ["Condensation", "Evaporation", "Runoff", "Filtration"], 0, "Water vapor cools and condenses into tiny droplets forming clouds."),
    q("Rain, snow, sleet are called?", ["Precipitation", "Evaporation", "Transpiration", "Irrigation"], 0, "Precipitation is water falling from clouds in various forms.")
  ]}},
  // === 9-11 ===
  "mini-forest": { type: "simulation", title: "Build Your Mini Forest", emoji: "🏗️", config: {
    variables: [si("Biodiversity", "🦋", 40), si("Water", "💧", 50), si("Soil", "🌍", 50), si("Health", "❤️", 50)],
    rounds: 10, winText: "Create a balanced forest ecosystem!",
    actions: [sa("Plant Trees", "🌳", "Add diverse trees", { Biodiversity: 10, Water: -5, Soil: 5, Health: 5 }), sa("Build Pond", "💧", "Create water source", { Water: 15, Biodiversity: 5, Soil: -3 }), sa("Add Mulch", "🍂", "Enrich the soil", { Soil: 12, Health: 5, Water: 3 }), sa("Attract Wildlife", "🦊", "Create habitats", { Biodiversity: 12, Health: 5, Water: -5, Soil: -3 })]
  }},
  "food-chain": { type: "sorting", title: "Food Chain Builder", emoji: "🔗", config: {
    categories: [sc("Producer", "🌿"), sc("Consumer", "🦊"), sc("Decomposer", "🍄")],
    items: [soi("Grass", "🌱", "Producer"), soi("Oak Tree", "🌳", "Producer"), soi("Algae", "🌿", "Producer"), soi("Rabbit", "🐰", "Consumer"), soi("Fox", "🦊", "Consumer"), soi("Hawk", "🦅", "Consumer"), soi("Mushroom", "🍄", "Decomposer"), soi("Earthworm", "🪱", "Decomposer"), soi("Bacteria", "🦠", "Decomposer")],
    timeLimit: 60
  }},
  "fire-prevention": { type: "simulation", title: "Fire Prevention Strategy", emoji: "🔥", config: {
    variables: [si("Fire Risk", "🔥", 60), si("Resources", "💰", 70), si("Forest Cover", "🌲", 80)],
    rounds: 8, winText: "Keep fire risk below 70 and forest cover above 30!",
    actions: [sa("Clear Brush", "🧹", "Remove dry undergrowth", { "Fire Risk": -15, Resources: -10 }), sa("Fire Break", "🛤️", "Build firebreaks", { "Fire Risk": -10, Resources: -15, "Forest Cover": -5 }), sa("Watchtower", "🗼", "Early detection", { "Fire Risk": -8, Resources: -12 }), sa("Let Grow", "🌿", "Natural growth", { "Forest Cover": 10, "Fire Risk": 8, Resources: 5 })]
  }},
  "poacher-catcher": { type: "quiz", title: "Poacher Catcher", emoji: "🕵️", config: { questions: [
    q("You find animal traps in the forest. What do you do?", ["Report to rangers", "Remove them yourself", "Ignore them", "Set them elsewhere"], 0, "Always report to trained rangers who can safely handle the situation."),
    q("Why is poaching harmful?", ["Disrupts ecosystems", "Only affects one species", "Helps control population", "Has no real impact"], 0, "Removing species disrupts the entire food web and ecosystem balance."),
    q("Best way to protect wildlife?", ["Protected habitat areas", "Keeping animals as pets", "Building more zoos", "Hunting other predators"], 0, "Protected areas give wildlife safe spaces to live and reproduce."),
    q("What's a wildlife corridor?", ["Path connecting habitats", "A zoo walkway", "A hiking trail", "A river crossing"], 0, "Wildlife corridors connect fragmented habitats so animals can move safely.")
  ]}},
  "tree-growth": { type: "simulation", title: "Tree Growth Simulation", emoji: "📈", config: {
    variables: [si("Height", "📏", 10), si("Nutrients", "🌿", 60), si("Water", "💧", 50), si("Health", "❤️", 70)],
    rounds: 12, winText: "Grow your tree to maximum height!",
    actions: [sa("Fertilize", "🌿", "Add nutrients", { Nutrients: 15, Health: 5, Height: 3 }), sa("Deep Water", "💧", "Water deeply", { Water: 15, Height: 5, Nutrients: -3 }), sa("Prune", "✂️", "Shape growth", { Health: 10, Height: 8, Nutrients: -5 }), sa("Protect", "🛡️", "Guard from pests", { Health: 10, Nutrients: 3, Water: -3 })]
  }},
  "endangered-rescue": { type: "tap", title: "Endangered Species Rescue", emoji: "🦁", config: {
    targets: [st("🦁", "Lion", 15, true), st("🐼", "Panda", 15, true), st("🦏", "Rhino", 20, true), st("🐯", "Tiger", 15, true), st("🪤", "Trap", -10, false)],
    timeLimit: 50, goalScore: 100, spawnInterval: 900
  }},
  "ecosystem-balance": { type: "simulation", title: "Ecosystem Balance", emoji: "⚖️", config: {
    variables: [si("Predators", "🦊", 50), si("Prey", "🐰", 50), si("Plants", "🌿", 60), si("Health", "❤️", 60)],
    rounds: 10, winText: "Keep all species in balance!",
    actions: [sa("Protect Predators", "🦊", "More predator habitat", { Predators: 10, Prey: -8, Health: 3 }), sa("Feed Prey", "🐰", "Boost prey population", { Prey: 12, Plants: -8, Health: 3 }), sa("Plant Flora", "🌿", "Grow more plants", { Plants: 12, Prey: 5, Predators: -3 }), sa("Balance All", "⚖️", "Moderate intervention", { Predators: 3, Prey: 3, Plants: 3, Health: 5 })]
  }},
  "water-cycle": { type: "quiz", title: "Water Cycle Adventure", emoji: "💧", config: { questions: [
    q("Where does most evaporation occur?", ["Oceans", "Lakes", "Rivers", "Puddles"], 0, "Oceans cover 71% of Earth and are the main source of evaporation."),
    q("What drives the water cycle?", ["Solar energy", "Wind", "Gravity only", "Moon"], 0, "The sun provides energy for evaporation, driving the entire cycle."),
    q("Transpiration is water released by?", ["Plants", "Animals", "Rocks", "Clouds"], 0, "Plants release water vapor through tiny pores in their leaves."),
    q("Groundwater feeds into?", ["Springs and wells", "Only oceans", "The atmosphere directly", "Space"], 0, "Groundwater emerges through springs and is accessed via wells.")
  ]}},
  "reforestation": { type: "simulation", title: "Reforestation Strategy", emoji: "🗺️", config: {
    variables: [si("Area Covered", "🌲", 20), si("Budget", "💰", 70), si("Biodiversity", "🦋", 30), si("Community", "👥", 50)],
    rounds: 10, winText: "Restore the forest! Area > 60, Biodiversity > 40",
    actions: [sa("Mass Plant", "🌳", "Plant many trees fast", { "Area Covered": 15, Budget: -15, Biodiversity: 3 }), sa("Native Species", "🌿", "Plant native trees", { "Area Covered": 8, Biodiversity: 12, Budget: -10 }), sa("Hire Locals", "👥", "Community planting", { Community: 15, "Area Covered": 8, Budget: -10 }), sa("Fundraise", "💰", "Raise more funds", { Budget: 20, Community: 5 })]
  }},
  "quiz-quest": { type: "quiz", title: "Forest Quiz Quest", emoji: "❓", config: { questions: [
    q("How many trees are in the world?", ["~3 trillion", "~1 million", "~100 billion", "~500 million"], 0, "Earth has approximately 3 trillion trees!"),
    q("What % of land is forest?", ["~31%", "~10%", "~50%", "~75%"], 0, "About 31% of the world's land area is covered by forests."),
    q("Oldest tree species?", ["Bristlecone Pine", "Oak", "Redwood", "Maple"], 0, "Bristlecone Pines can live over 5,000 years!"),
    q("Trees produce oxygen through?", ["Photosynthesis", "Respiration", "Fermentation", "Osmosis"], 0, "Photosynthesis converts CO2 and water into glucose and oxygen.")
  ]}},
  // === 12-14 ===
  "deforestation-sim": { type: "simulation", title: "Deforestation Simulator", emoji: "📊", config: {
    variables: [si("Forest", "🌲", 80), si("Economy", "💰", 40), si("Wildlife", "🦊", 70), si("Climate", "🌡️", 60)],
    rounds: 12, winText: "Balance economy and environment!",
    actions: [sa("Log Timber", "🪵", "Harvest trees for profit", { Economy: 15, Forest: -12, Wildlife: -8, Climate: -5 }), sa("Eco Tourism", "🏕️", "Sustainable income", { Economy: 8, Forest: 3, Wildlife: 3 }), sa("Replant", "🌱", "Restore cleared areas", { Forest: 10, Wildlife: 5, Climate: 5, Economy: -8 }), sa("Research", "🔬", "Invest in sustainability", { Economy: -10, Forest: 5, Climate: 8, Wildlife: 5 })]
  }},
  "conservation-budget": { type: "simulation", title: "Conservation Budget", emoji: "💰", config: {
    variables: [si("Budget", "💰", 60), si("Wildlife", "🦊", 50), si("Habitat", "🌲", 50), si("Staff", "👥", 40)],
    rounds: 10, winText: "Maximize conservation impact within budget!",
    actions: [sa("Hire Rangers", "👮", "More patrol staff", { Staff: 15, Budget: -12, Wildlife: 5 }), sa("Buy Land", "🗺️", "Expand protected area", { Habitat: 15, Budget: -15, Wildlife: 5 }), sa("Education", "📚", "Community programs", { Staff: 5, Budget: -5, Wildlife: 3, Habitat: 3 }), sa("Grants", "📋", "Apply for funding", { Budget: 18, Staff: -3 })]
  }},
  "climate-challenge": { type: "simulation", title: "Climate Change Challenge", emoji: "🌡️", config: {
    variables: [si("Temperature", "🌡️", 55), si("Forest", "🌲", 60), si("Emissions", "💨", 60), si("Adaptation", "🛡️", 30)],
    rounds: 10, winText: "Lower emissions and raise adaptation!",
    actions: [sa("Plant Carbon Sinks", "🌳", "Natural carbon capture", { Emissions: -10, Forest: 8, Temperature: -3 }), sa("Build Shelters", "🏠", "Climate adaptation", { Adaptation: 15, Emissions: 3 }), sa("Reduce Industry", "🏭", "Cut emissions", { Emissions: -15, Temperature: -5, Adaptation: -3 }), sa("Research", "🔬", "Green technology", { Adaptation: 10, Emissions: -5, Temperature: -3 })]
  }},
  "carbon-capture": { type: "simulation", title: "Carbon Capture Strategy", emoji: "♻️", config: {
    variables: [si("CO2 Level", "💨", 75), si("Trees", "🌳", 30), si("Budget", "💰", 60), si("Tech", "🔬", 20)],
    rounds: 10, winText: "Reduce CO2 below 40!",
    actions: [sa("Mass Planting", "🌲", "Plant forests", { Trees: 15, "CO2 Level": -8, Budget: -10 }), sa("Carbon Tech", "🔬", "Invest in capture tech", { Tech: 15, "CO2 Level": -5, Budget: -15 }), sa("Protect Existing", "🛡️", "Guard old forests", { Trees: 5, "CO2 Level": -5, Budget: -5 }), sa("Carbon Credits", "💳", "Sell credits for funds", { Budget: 15, "CO2 Level": -3 })]
  }},
  "invasive-species": { type: "tap", title: "Invasive Species Control", emoji: "🌿", config: {
    targets: [st("🌾", "Invasive Grass", 10, true), st("🐌", "Invasive Snail", 10, true), st("🪲", "Invasive Beetle", 15, true), st("🌸", "Native Flower", -15, false), st("🦋", "Native Butterfly", -10, false)],
    timeLimit: 50, goalScore: 100, spawnInterval: 700
  }},
  "biodiversity": { type: "quiz", title: "Biodiversity Tracker", emoji: "🦋", config: { questions: [
    q("What is biodiversity?", ["Variety of all life forms", "Number of trees", "Amount of water", "Size of forest"], 0, "Biodiversity includes all living species and their genetic variety."),
    q("Why are keystone species important?", ["They hold ecosystems together", "They're the biggest", "They're endangered", "They produce oxygen"], 0, "Removing a keystone species causes the ecosystem to dramatically change."),
    q("Biggest threat to biodiversity?", ["Habitat loss", "Noise pollution", "Light pollution", "Space exploration"], 0, "Habitat destruction is the #1 driver of biodiversity loss worldwide."),
    q("What is an endemic species?", ["Found only in one area", "Found everywhere", "Recently discovered", "Artificially bred"], 0, "Endemic species exist naturally in only one specific geographic area.")
  ]}},
  "debate-mode": { type: "quiz", title: "Save vs Develop Debate", emoji: "🗣️", config: { questions: [
    q("A company wants to build a resort in a forest. Best response?", ["Environmental impact study first", "Allow it for jobs", "Ban all development", "Ignore the issue"], 0, "An environmental impact assessment ensures informed, balanced decisions."),
    q("Local jobs vs old-growth forest?", ["Sustainable forestry compromise", "Cut all trees for jobs", "No jobs allowed", "Import wood instead"], 0, "Sustainable forestry provides jobs while preserving the forest long-term."),
    q("Mining near a wildlife corridor?", ["Relocate mining elsewhere", "Mine carefully", "Wildlife will adapt", "Block all mining globally"], 0, "Relocating protects the corridor while still allowing resource extraction."),
    q("Farmers expanding into forest?", ["Agroforestry techniques", "Ban all farming", "Clear more forest", "Only factory farming"], 0, "Agroforestry integrates trees with crops, benefiting both farming and forests.")
  ]}},
  "policy-builder": { type: "simulation", title: "Forest Policy Builder", emoji: "📜", config: {
    variables: [si("Public Support", "👥", 50), si("Forest Cover", "🌲", 60), si("Economy", "💰", 50), si("Compliance", "📋", 40)],
    rounds: 8, winText: "Create effective forest policy!",
    actions: [sa("Logging Ban", "🚫", "Stop all logging", { "Forest Cover": 12, Economy: -15, "Public Support": -8, Compliance: 5 }), sa("Tax Incentives", "💰", "Reward green businesses", { Economy: 10, "Public Support": 10, "Forest Cover": 5, Compliance: -5 }), sa("Education Campaign", "📚", "Raise awareness", { "Public Support": 15, Compliance: 10, Economy: -5 }), sa("Enforcement", "👮", "Strict rule enforcement", { Compliance: 15, "Public Support": -5, "Forest Cover": 5, Economy: -5 })]
  }},
  "sustainable-logging": { type: "simulation", title: "Sustainable Logging", emoji: "🪵", config: {
    variables: [si("Timber", "🪵", 30), si("Forest Health", "🌲", 70), si("Profit", "💰", 40), si("Certification", "✅", 20)],
    rounds: 10, winText: "Earn FSC certification (>60) while staying profitable!",
    actions: [sa("Selective Cut", "🪓", "Harvest mature trees only", { Timber: 10, "Forest Health": -5, Profit: 8, Certification: 5 }), sa("Clear Cut", "🏗️", "Fast harvest", { Timber: 20, "Forest Health": -20, Profit: 15, Certification: -15 }), sa("Replant", "🌱", "Restore harvested areas", { "Forest Health": 12, Certification: 10, Profit: -8 }), sa("Eco Audit", "📋", "Get sustainability review", { Certification: 15, Profit: -5, "Forest Health": 3 })]
  }},
  "guardian-challenge": { type: "simulation", title: "Guardian Leadership", emoji: "🛡️", config: {
    variables: [si("Morale", "💪", 50), si("Resources", "📦", 60), si("Threat Level", "⚠️", 40), si("Forest Safety", "🌲", 60)],
    rounds: 10, winText: "Keep the forest safe and team morale high!",
    actions: [sa("Patrol", "🚶", "Send rangers on patrol", { "Threat Level": -10, Morale: -5, Resources: -5, "Forest Safety": 8 }), sa("Train Team", "📚", "Improve skills", { Morale: 12, "Threat Level": -3, Resources: -8 }), sa("Deploy Tech", "📡", "Use monitoring drones", { "Threat Level": -12, Resources: -12, "Forest Safety": 8 }), sa("Community Watch", "👥", "Engage local community", { Morale: 8, "Threat Level": -5, Resources: 5, "Forest Safety": 5 })]
  }},
  // === 15-17 ===
  "economy-ecology": { type: "simulation", title: "Economy vs Ecology", emoji: "💹", config: {
    variables: [si("GDP", "💰", 50), si("Forest", "🌲", 70), si("Employment", "👥", 40), si("Carbon", "💨", 55)],
    rounds: 12, winText: "Balance GDP growth with forest preservation!",
    actions: [sa("Green Industry", "♻️", "Eco-friendly manufacturing", { GDP: 8, Employment: 10, Forest: 3, Carbon: -5 }), sa("Timber Export", "🪵", "Export forest products", { GDP: 15, Employment: 8, Forest: -12, Carbon: 8 }), sa("Carbon Tax", "💳", "Tax emissions", { Carbon: -12, GDP: -5, Forest: 5 }), sa("Tech Innovation", "🔬", "Green tech investment", { GDP: 5, Carbon: -8, Employment: 5, Forest: 3 })]
  }},
  "ngo-management": { type: "simulation", title: "NGO Management", emoji: "🏢", config: {
    variables: [si("Funding", "💰", 50), si("Impact", "🌍", 30), si("Reputation", "⭐", 50), si("Team", "👥", 40)],
    rounds: 10, winText: "Maximize conservation impact!",
    actions: [sa("Fundraise", "💰", "Major donor campaign", { Funding: 18, Team: -5, Reputation: 3 }), sa("Field Project", "🌲", "On-ground conservation", { Impact: 15, Funding: -12, Reputation: 5, Team: -3 }), sa("Hire Staff", "👥", "Expand team", { Team: 15, Funding: -10, Impact: 5 }), sa("PR Campaign", "📢", "Public awareness", { Reputation: 15, Funding: -5, Impact: 3 })]
  }},
  "smart-forestry": { type: "simulation", title: "Smart Forestry (GIS)", emoji: "🛰️", config: {
    variables: [si("Data Quality", "📊", 30), si("Coverage", "🗺️", 40), si("Budget", "💰", 60), si("Accuracy", "🎯", 35)],
    rounds: 10, winText: "Build a comprehensive forest monitoring system!",
    actions: [sa("Deploy Satellites", "🛰️", "Satellite monitoring", { "Data Quality": 12, Coverage: 15, Budget: -15 }), sa("Ground Sensors", "📡", "IoT forest sensors", { Accuracy: 15, "Data Quality": 8, Budget: -10 }), sa("AI Analysis", "🤖", "Machine learning models", { Accuracy: 12, "Data Quality": 10, Budget: -12 }), sa("Train Rangers", "👥", "Human verification", { Accuracy: 8, Coverage: 5, Budget: -5 })]
  }},
  "rewilding": { type: "simulation", title: "Rewilding Strategy", emoji: "🐺", config: {
    variables: [si("Wilderness", "🌿", 30), si("Predators", "🐺", 20), si("Prey", "🦌", 60), si("Community", "👥", 50)],
    rounds: 10, winText: "Restore wild ecosystem balance!",
    actions: [sa("Reintroduce Wolves", "🐺", "Bring back apex predators", { Predators: 15, Prey: -8, Community: -10, Wilderness: 8 }), sa("Expand Habitat", "🌲", "Remove fences & roads", { Wilderness: 15, Community: -5, Prey: 5, Predators: 3 }), sa("Education", "📚", "Teach coexistence", { Community: 15, Wilderness: 3 }), sa("Monitor", "📡", "Track wildlife", { Predators: 5, Prey: 5, Wilderness: 3, Community: 5 })]
  }},
  "carbon-trading": { type: "simulation", title: "Carbon Trading", emoji: "📈", config: {
    variables: [si("Credits", "💳", 40), si("Revenue", "💰", 30), si("Forest Area", "🌲", 60), si("Verification", "✅", 30)],
    rounds: 10, winText: "Build a profitable carbon credit system!",
    actions: [sa("Plant & Register", "🌳", "Create new carbon sinks", { "Forest Area": 10, Credits: 12, Revenue: -8, Verification: 5 }), sa("Sell Credits", "💰", "Trade on carbon market", { Revenue: 15, Credits: -12, Verification: -3 }), sa("Get Audited", "📋", "Third-party verification", { Verification: 18, Revenue: -5, Credits: 5 }), sa("Protect Old Growth", "🛡️", "Preserve existing forests", { "Forest Area": 5, Credits: 8, Verification: 8, Revenue: -5 })]
  }},
  "crisis-mgmt": { type: "simulation", title: "Crisis Management", emoji: "🚒", config: {
    variables: [si("Fire Spread", "🔥", 70), si("Resources", "💧", 50), si("Evacuations", "🚨", 30), si("Damage", "💔", 40)],
    rounds: 8, winText: "Contain the wildfire! Fire < 30, Damage < 60",
    actions: [sa("Water Bomb", "✈️", "Aerial firefighting", { "Fire Spread": -15, Resources: -15 }), sa("Fire Line", "🛤️", "Build containment lines", { "Fire Spread": -10, Resources: -10, Damage: -5 }), sa("Evacuate", "🚨", "Move people to safety", { Evacuations: 20, Resources: -8, Damage: -3 }), sa("Call Backup", "📞", "Request more resources", { Resources: 20, "Fire Spread": 5 })]
  }},
  "community": { type: "quiz", title: "Community Engagement", emoji: "🤝", config: { questions: [
    q("Best way to involve locals in conservation?", ["Participatory decision-making", "Top-down mandates", "Exclude them entirely", "Only use volunteers"], 0, "Including communities in decisions ensures buy-in and local knowledge."),
    q("Indigenous knowledge is valuable because?", ["Centuries of ecological wisdom", "It's trendy", "It replaces science", "It's simpler"], 0, "Indigenous communities have deep, time-tested understanding of local ecosystems."),
    q("How to handle conflicting stakeholder interests?", ["Mediated dialogue", "Ignore minorities", "Majority always wins", "Avoid the topic"], 0, "Facilitated dialogue helps find solutions that address multiple stakeholders' needs."),
    q("Community-based conservation succeeds when?", ["Benefits are shared locally", "Only experts decide", "Rules are imposed", "Land is privatized"], 0, "When communities benefit directly, they become invested stewards of nature.")
  ]}},
  "campaign": { type: "simulation", title: "Conservation Campaign", emoji: "📢", config: {
    variables: [si("Awareness", "📢", 20), si("Donations", "💰", 30), si("Volunteers", "👥", 20), si("Policy Change", "📜", 10)],
    rounds: 10, winText: "Create a viral conservation movement!",
    actions: [sa("Social Media", "📱", "Online campaign", { Awareness: 15, Donations: 5, Volunteers: 8 }), sa("Celebrity Partner", "⭐", "Get famous supporter", { Awareness: 12, Donations: 12, "Policy Change": 3 }), sa("Documentary", "🎬", "Produce conservation film", { Awareness: 10, "Policy Change": 8, Donations: 5, Volunteers: -3 }), sa("Lobby Government", "🏛️", "Political advocacy", { "Policy Change": 15, Awareness: 3, Donations: -5 })]
  }},
  "data-analysis": { type: "quiz", title: "Global Forest Data", emoji: "📊", config: { questions: [
    q("Which continent lost the most forest 2010-2020?", ["Africa", "Asia", "Europe", "North America"], 0, "Africa lost approximately 3.9 million hectares annually in that decade."),
    q("Amazon Rainforest spans how many countries?", ["9", "3", "5", "12"], 0, "The Amazon spans Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname, and French Guiana."),
    q("Forests absorb what % of human CO2?", ["~30%", "~5%", "~60%", "~90%"], 0, "Forests absorb roughly 30% of human-produced carbon dioxide emissions."),
    q("Rate of global deforestation per minute?", ["~27 football fields", "~1 field", "~100 fields", "~5 fields"], 0, "We lose approximately 27 football fields of forest every minute.")
  ]}},
  "sustainability": { type: "simulation", title: "Sustainability Planner", emoji: "🌱", config: {
    variables: [si("Sustainability Score", "🌱", 30), si("Economic Growth", "📈", 50), si("Social Equity", "⚖️", 40), si("Environment", "🌍", 50)],
    rounds: 12, winText: "Achieve sustainability score > 70!",
    actions: [sa("Green Policy", "📜", "Environmental regulations", { "Sustainability Score": 8, Environment: 10, "Economic Growth": -5, "Social Equity": 3 }), sa("Social Programs", "👥", "Community development", { "Social Equity": 15, "Sustainability Score": 5, "Economic Growth": -3 }), sa("Green Economy", "💚", "Sustainable business incentives", { "Economic Growth": 10, "Sustainability Score": 8, Environment: 5 }), sa("Innovation Fund", "🔬", "R&D investment", { "Sustainability Score": 10, "Economic Growth": 5, Environment: 5, "Social Equity": -3 })]
  }},
  // === 17-18 ===
  "treaty": { type: "simulation", title: "International Forest Treaty", emoji: "🌐", config: {
    variables: [si("Agreement", "🤝", 30), si("Compliance", "📋", 20), si("Funding", "💰", 40), si("Coverage", "🌍", 25)],
    rounds: 10, winText: "Negotiate a global forest protection treaty!",
    actions: [sa("Negotiate Terms", "🗣️", "Bilateral talks", { Agreement: 12, Compliance: 5, Funding: -5 }), sa("Pledge Funding", "💰", "Financial commitments", { Funding: 15, Agreement: 8, Coverage: 5 }), sa("Set Standards", "📋", "Compliance frameworks", { Compliance: 15, Agreement: -3, Coverage: 5 }), sa("Expand Scope", "🌍", "Add more nations", { Coverage: 12, Agreement: -5, Funding: -5 })]
  }},
  "climate-negotiation": { type: "simulation", title: "Climate Negotiation", emoji: "🇺🇳", config: {
    variables: [si("Consensus", "🤝", 30), si("Ambition", "🎯", 40), si("Finance", "💰", 35), si("Trust", "💎", 40)],
    rounds: 10, winText: "Reach climate agreement! All metrics > 50",
    actions: [sa("Propose Target", "🎯", "Ambitious emission cuts", { Ambition: 15, Consensus: -5, Trust: 3 }), sa("Green Fund", "💰", "Climate finance pledge", { Finance: 15, Consensus: 8, Ambition: 3 }), sa("Bridge Building", "🌉", "Compromise solutions", { Consensus: 15, Trust: 8, Ambition: -3 }), sa("Transparency", "🔍", "Open reporting systems", { Trust: 15, Consensus: 5, Finance: -3 })]
  }},
  "ecosystem-model": { type: "simulation", title: "Ecosystem Modeling", emoji: "🧬", config: {
    variables: [si("Model Accuracy", "🎯", 30), si("Data Points", "📊", 40), si("Predictions", "🔮", 20), si("Budget", "💰", 60)],
    rounds: 12, winText: "Build a predictive ecosystem model!",
    actions: [sa("Field Survey", "🏕️", "Collect field data", { "Data Points": 15, "Model Accuracy": 8, Budget: -10 }), sa("Satellite Data", "🛰️", "Remote sensing", { "Data Points": 12, Predictions: 8, Budget: -12 }), sa("AI Training", "🤖", "Train ML models", { "Model Accuracy": 12, Predictions: 15, Budget: -15, "Data Points": -5 }), sa("Peer Review", "📝", "Academic validation", { "Model Accuracy": 10, Predictions: 5, Budget: -5 })]
  }},
  "entrepreneurship": { type: "simulation", title: "Forestry Entrepreneurship", emoji: "💼", config: {
    variables: [si("Revenue", "💰", 20), si("Impact", "🌍", 30), si("Brand", "⭐", 25), si("Team", "👥", 30)],
    rounds: 12, winText: "Build a profitable green business!",
    actions: [sa("Launch Product", "🚀", "Eco-friendly product line", { Revenue: 15, Brand: 8, Impact: 5, Team: -5 }), sa("Hire Team", "👥", "Grow the company", { Team: 15, Revenue: -10, Impact: 5 }), sa("Marketing", "📢", "Build brand awareness", { Brand: 15, Revenue: 5, Team: -3 }), sa("R&D", "🔬", "Innovate new solutions", { Impact: 12, Brand: 5, Revenue: -8 })]
  }},
  "ai-reforestation": { type: "simulation", title: "AI Reforestation", emoji: "🤖", config: {
    variables: [si("AI Accuracy", "🤖", 30), si("Area Planted", "🌲", 10), si("Survival Rate", "❤️", 50), si("Budget", "💰", 60)],
    rounds: 10, winText: "Use AI to optimize reforestation!",
    actions: [sa("Train AI", "🧠", "Improve AI models", { "AI Accuracy": 15, Budget: -12, "Survival Rate": 5 }), sa("Drone Plant", "🛩️", "AI-guided drone seeding", { "Area Planted": 15, Budget: -10, "Survival Rate": 3, "AI Accuracy": -3 }), sa("Soil Analysis", "🔬", "AI soil mapping", { "AI Accuracy": 8, "Survival Rate": 12, Budget: -8 }), sa("Monitor Growth", "📡", "Track planted trees", { "Survival Rate": 10, "AI Accuracy": 5, Budget: -5 })]
  }},
  "carbon-market": { type: "simulation", title: "Carbon Credit Market", emoji: "💱", config: {
    variables: [si("Market Cap", "💰", 30), si("Integrity", "✅", 50), si("Volume", "📊", 30), si("Impact", "🌍", 40)],
    rounds: 10, winText: "Build a trustworthy carbon market!",
    actions: [sa("List Credits", "📋", "Register new credits", { Volume: 15, "Market Cap": 8, Integrity: -5 }), sa("Verify Projects", "✅", "Third-party audits", { Integrity: 15, Impact: 8, Volume: -3 }), sa("Trade Platform", "💻", "Build trading infrastructure", { "Market Cap": 12, Volume: 10, Integrity: 3 }), sa("Impact Reports", "📊", "Publish impact data", { Impact: 12, Integrity: 10, "Market Cap": 3 })]
  }},
  "legal-case": { type: "quiz", title: "Legal: Indigenous Land", emoji: "⚖️", config: { questions: [
    q("Indigenous peoples manage what % of world's biodiversity?", ["~80%", "~10%", "~30%", "~50%"], 0, "Indigenous peoples protect approximately 80% of the world's remaining biodiversity."),
    q("FPIC stands for?", ["Free Prior Informed Consent", "Forest Protection International Code", "Federal Policy on Indigenous Claims", "Final Plan for Industrial Conservation"], 0, "FPIC ensures indigenous communities consent before projects affect their land."),
    q("Best approach to indigenous land rights?", ["Co-management with indigenous leadership", "Government control only", "Private ownership only", "No management needed"], 0, "Co-management respects indigenous sovereignty while ensuring conservation goals."),
    q("Why protect indigenous languages?", ["They encode ecological knowledge", "For tourism only", "They're outdated", "No practical reason"], 0, "Indigenous languages contain centuries of ecological knowledge about local species and ecosystems.")
  ]}},
  "restoration-plan": { type: "simulation", title: "Restoration Master Plan", emoji: "🗺️", config: {
    variables: [si("Planning", "📋", 20), si("Execution", "🏗️", 10), si("Stakeholders", "👥", 40), si("Budget", "💰", 50)],
    rounds: 12, winText: "Complete the national restoration plan!",
    actions: [sa("Research Phase", "🔬", "Scientific assessment", { Planning: 15, Budget: -8, Stakeholders: 3 }), sa("Consult Communities", "👥", "Stakeholder engagement", { Stakeholders: 15, Planning: 5, Budget: -5 }), sa("Pilot Project", "🌱", "Small-scale test", { Execution: 12, Planning: 5, Budget: -10, Stakeholders: 3 }), sa("Scale Up", "📈", "Expand nationally", { Execution: 15, Budget: -15, Planning: -3, Stakeholders: -5 })]
  }},
  "multi-country": { type: "simulation", title: "Multi-Country Biodiversity", emoji: "🌍", config: {
    variables: [si("Cooperation", "🤝", 30), si("Biodiversity", "🦋", 50), si("Funding", "💰", 40), si("Data Sharing", "📊", 20)],
    rounds: 10, winText: "Unite nations for biodiversity protection!",
    actions: [sa("Summit", "🏛️", "International conference", { Cooperation: 15, "Data Sharing": 5, Funding: -8 }), sa("Joint Research", "🔬", "Collaborative studies", { "Data Sharing": 15, Biodiversity: 8, Funding: -10 }), sa("Shared Reserves", "🌲", "Transborder protected areas", { Biodiversity: 12, Cooperation: 8, Funding: -10 }), sa("Global Fund", "💰", "Pool financial resources", { Funding: 18, Cooperation: 5, Biodiversity: 3 })]
  }},
  "impact-assessment": { type: "quiz", title: "Impact Assessment", emoji: "📋", config: { questions: [
    q("EIA stands for?", ["Environmental Impact Assessment", "Ecological Information Analysis", "Economic Impact Audit", "Ecosystem Integration Act"], 0, "EIAs evaluate the environmental effects of proposed projects before they proceed."),
    q("When should an EIA be conducted?", ["Before project approval", "After construction", "Only if complaints arise", "Never for small projects"], 0, "EIAs must be completed before any project approval to prevent irreversible damage."),
    q("Key EIA component?", ["Baseline environmental data", "Profit projections", "Marketing strategy", "Staff headcount"], 0, "Baseline data establishes current environmental conditions for comparison."),
    q("Cumulative impact assessment considers?", ["Multiple projects combined effects", "Single project only", "Only positive effects", "Historical events only"], 0, "Cumulative assessments look at combined effects of multiple projects in an area.")
  ]}},
};
