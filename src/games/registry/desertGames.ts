import { GameEntry } from "../types";

const q = (question: string, options: string[], correct: number, explanation: string) => ({ question, options, correct, explanation });
const si = (name: string, emoji: string, value: number) => ({ name, emoji, value });
const sa = (name: string, emoji: string, desc: string, effects: Record<string, number>) => ({ name, emoji, desc, effects });
const st = (emoji: string, name: string, points: number, good: boolean) => ({ emoji, name, points, good });
const sc = (name: string, emoji: string) => ({ name, emoji });
const soi = (name: string, emoji: string, category: string) => ({ name, emoji, category });
const mp = (id: string, emoji: string, name: string) => ({ id, emoji, name });

export const desertGames: Record<string, GameEntry> = {
  // === 6-8 ===
  "find-water": { type: "tap", title: "Find Water Source", emoji: "💧", config: {
    targets: [st("💧", "Water", 15, true), st("🌊", "Spring", 20, true), st("💦", "Droplet", 10, true), st("🪨", "Dry Rock", -5, false), st("🌵", "Cactus", -3, false)],
    timeLimit: 45, goalScore: 80, spawnInterval: 900
  }},
  "desert-match": { type: "memory", title: "Desert Animal Match", emoji: "🐫", config: {
    pairs: [mp("camel", "🐫", "Camel"), mp("scorpion", "🦂", "Scorpion"), mp("lizard", "🦎", "Lizard"), mp("snake", "🐍", "Snake"), mp("eagle", "🦅", "Eagle"), mp("fox", "🦊", "Desert Fox")],
    timeLimit: 60
  }},
  "solar-builder": { type: "sorting", title: "Solar Energy Builder", emoji: "☀️", config: {
    categories: [sc("Solar Power", "☀️"), sc("Not Solar", "❌")],
    items: [soi("Solar Panel", "☀️", "Solar Power"), soi("Sun", "🌞", "Solar Power"), soi("Battery", "🔋", "Solar Power"), soi("Inverter", "⚡", "Solar Power"), soi("Coal", "⛏️", "Not Solar"), soi("Oil", "🛢️", "Not Solar"), soi("Gas", "💨", "Not Solar"), soi("Nuclear", "☢️", "Not Solar")],
    timeLimit: 45
  }},
  "cactus-care": { type: "simulation", title: "Cactus Care Simulator", emoji: "🌵", config: {
    variables: [si("Water", "💧", 40), si("Sunlight", "☀️", 60), si("Health", "❤️", 70)],
    rounds: 8, winText: "Keep your cactus healthy for 8 days!",
    actions: [sa("Small Water", "💧", "Light watering", { Water: 10, Health: 5 }), sa("Move to Sun", "☀️", "More sunlight", { Sunlight: 15, Water: -8, Health: 3 }), sa("Add Sand", "🏜️", "Better drainage", { Water: -5, Health: 8 }), sa("Shade Cover", "🌂", "Protect from heat", { Sunlight: -10, Water: 5, Health: 5 })]
  }},
  "shade-shelter": { type: "sorting", title: "Build a Shade Shelter", emoji: "🏠", config: {
    categories: [sc("Good Material", "✅"), sc("Bad Material", "❌")],
    items: [soi("Palm Leaves", "🌴", "Good Material"), soi("Cloth", "🧵", "Good Material"), soi("Wood Poles", "🪵", "Good Material"), soi("Straw", "🌾", "Good Material"), soi("Ice", "🧊", "Bad Material"), soi("Chocolate", "🍫", "Bad Material"), soi("Paper", "📄", "Bad Material"), soi("Glass", "🪟", "Bad Material")],
    timeLimit: 40
  }},
  "survival-quiz": { type: "quiz", title: "Desert Survival Quiz", emoji: "❓", config: { questions: [
    q("Most important desert survival need?", ["Water", "Food", "Shelter", "Compass"], 0, "Water is critical - you can only survive about 3 days without it in a desert."),
    q("Best time to travel in desert?", ["Night or early morning", "Noon", "Afternoon", "Any time"], 0, "Traveling at night or dawn avoids the extreme midday heat."),
    q("How do cacti store water?", ["In their thick stems", "In their roots only", "In their spines", "They don't store water"], 0, "Cacti have thick, fleshy stems that store large amounts of water."),
    q("Desert temperatures at night are?", ["Very cold", "Same as day", "Slightly warm", "Hotter than day"], 0, "Deserts lose heat quickly at night due to low humidity, dropping temperatures dramatically.")
  ]}},
  "camel-journey": { type: "simulation", title: "Camel Journey Resource", emoji: "🐪", config: {
    variables: [si("Distance", "🗺️", 10), si("Water", "💧", 70), si("Energy", "⚡", 60), si("Health", "❤️", 80)],
    rounds: 10, winText: "Reach the oasis! Distance > 80",
    actions: [sa("Walk Steady", "🚶", "Normal pace", { Distance: 10, Water: -8, Energy: -5 }), sa("Run Fast", "🏃", "Cover ground quickly", { Distance: 18, Water: -15, Energy: -12, Health: -5 }), sa("Rest & Drink", "💧", "Take a break", { Water: -5, Energy: 15, Health: 8, Distance: 2 }), sa("Find Shade", "🌴", "Cool down", { Energy: 10, Water: -3, Health: 5 })]
  }},
  "sandstorm-dodge": { type: "tap", title: "Sandstorm Dodge Challenge", emoji: "🌪️", config: {
    targets: [st("🛡️", "Shield", 15, true), st("🏠", "Shelter", 15, true), st("💧", "Water", 10, true), st("🌪️", "Storm", -10, false), st("⚡", "Lightning", -15, false)],
    timeLimit: 40, goalScore: 80, spawnInterval: 700
  }},
  "heat-cool-sort": { type: "sorting", title: "Heat vs Cool Sorting", emoji: "🧊", config: {
    categories: [sc("Keeps You Cool", "❄️"), sc("Makes You Hot", "🔥")],
    items: [soi("Water", "💧", "Keeps You Cool"), soi("Shade", "🌂", "Keeps You Cool"), soi("Ice", "🧊", "Keeps You Cool"), soi("Fan", "🌀", "Keeps You Cool"), soi("Fire", "🔥", "Makes You Hot"), soi("Running", "🏃", "Makes You Hot"), soi("Black Clothes", "🖤", "Makes You Hot"), soi("Spicy Food", "🌶️", "Makes You Hot")],
    timeLimit: 40
  }},
  "solar-village": { type: "simulation", title: "Mini Solar Village Builder", emoji: "🏘️", config: {
    variables: [si("Power", "⚡", 20), si("Houses", "🏠", 30), si("Budget", "💰", 70), si("Happiness", "😊", 50)],
    rounds: 10, winText: "Power the whole village! Power > 70, Houses > 60",
    actions: [sa("Solar Panel", "☀️", "Install panels", { Power: 15, Budget: -12, Happiness: 5 }), sa("Build House", "🏠", "Add a house", { Houses: 12, Budget: -10, Power: -5, Happiness: 8 }), sa("Battery Storage", "🔋", "Store energy", { Power: 10, Budget: -8 }), sa("Community Event", "🎉", "Village gathering", { Happiness: 15, Budget: -5 })]
  }},
  // === 9-11 ===
  "oasis-builder": { type: "simulation", title: "Oasis Builder Simulation", emoji: "🏝️", config: {
    variables: [si("Water Level", "💧", 40), si("Vegetation", "🌿", 20), si("Wildlife", "🦎", 15), si("Budget", "💰", 60)],
    rounds: 10, winText: "Build a thriving oasis!",
    actions: [sa("Dig Well", "⛏️", "Find groundwater", { "Water Level": 15, Budget: -12 }), sa("Plant Trees", "🌴", "Add vegetation", { Vegetation: 15, "Water Level": -5, Wildlife: 5, Budget: -8 }), sa("Attract Animals", "🦎", "Create habitats", { Wildlife: 15, Vegetation: -3, Budget: -5 }), sa("Irrigation", "🚿", "Water channels", { "Water Level": 8, Vegetation: 10, Budget: -10 })]
  }},
  "solar-farm": { type: "simulation", title: "Solar Farm Setup", emoji: "⚡", config: {
    variables: [si("Output", "⚡", 15), si("Efficiency", "📈", 30), si("Budget", "💰", 60), si("Coverage", "🗺️", 20)],
    rounds: 10, winText: "Build an efficient solar farm! Output > 60",
    actions: [sa("Add Panels", "☀️", "More solar panels", { Output: 12, Coverage: 10, Budget: -12 }), sa("Upgrade Tech", "🔬", "Better efficiency", { Efficiency: 15, Output: 5, Budget: -10 }), sa("Tracking System", "📡", "Sun-tracking mounts", { Efficiency: 12, Output: 8, Budget: -12 }), sa("Battery Bank", "🔋", "Store energy", { Output: 8, Budget: -8, Coverage: 3 })]
  }},
  "desert-food-chain": { type: "sorting", title: "Desert Food Chain Builder", emoji: "🔗", config: {
    categories: [sc("Producer", "🌵"), sc("Herbivore", "🐰"), sc("Predator", "🦅")],
    items: [soi("Cactus", "🌵", "Producer"), soi("Desert Grass", "🌾", "Producer"), soi("Shrubs", "🌿", "Producer"), soi("Desert Hare", "🐰", "Herbivore"), soi("Tortoise", "🐢", "Herbivore"), soi("Locust", "🦗", "Herbivore"), soi("Hawk", "🦅", "Predator"), soi("Snake", "🐍", "Predator"), soi("Coyote", "🐺", "Predator")],
    timeLimit: 60
  }},
  "water-conservation": { type: "simulation", title: "Water Conservation Challenge", emoji: "💧", config: {
    variables: [si("Water Supply", "💧", 60), si("Population", "👥", 40), si("Crops", "🌾", 30), si("Budget", "💰", 50)],
    rounds: 12, winText: "Manage water for 12 months!",
    actions: [sa("Ration Water", "📏", "Strict water limits", { "Water Supply": 8, Population: -5, Crops: -3 }), sa("Drip Irrigation", "🚿", "Efficient watering", { Crops: 12, "Water Supply": -5, Budget: -10 }), sa("Rainwater Harvest", "🌧️", "Collect rain", { "Water Supply": 15, Budget: -8 }), sa("Desalination", "🏭", "Make freshwater", { "Water Supply": 18, Budget: -15, Population: 5 })]
  }},
  "sandstorm-alert": { type: "simulation", title: "Sandstorm Alert Strategy", emoji: "🌪️", config: {
    variables: [si("Warning System", "🚨", 20), si("Shelter Ready", "🏠", 30), si("Supplies", "📦", 50), si("Safety", "🛡️", 40)],
    rounds: 8, winText: "Prepare for the sandstorm!",
    actions: [sa("Weather Station", "📡", "Monitor conditions", { "Warning System": 15, Safety: 5 }), sa("Build Shelters", "🏠", "Storm shelters", { "Shelter Ready": 15, Supplies: -5, Safety: 8 }), sa("Stock Supplies", "📦", "Emergency supplies", { Supplies: 15, Safety: 5 }), sa("Drill Practice", "🏃", "Emergency drills", { Safety: 15, "Warning System": 5, "Shelter Ready": 3 })]
  }},
  "wildlife-survival": { type: "simulation", title: "Wildlife Survival Mission", emoji: "🦎", config: {
    variables: [si("Species Count", "🦎", 40), si("Habitat", "🏜️", 50), si("Water", "💧", 40), si("Budget", "💰", 50)],
    rounds: 10, winText: "Save desert wildlife!",
    actions: [sa("Protect Area", "🛡️", "Fence habitat", { Habitat: 12, "Species Count": 5, Budget: -10 }), sa("Water Holes", "💧", "Dig watering holes", { Water: 15, "Species Count": 8, Budget: -10 }), sa("Anti-Poaching", "🚔", "Patrol patrols", { "Species Count": 10, Budget: -10, Habitat: 3 }), sa("Research", "🔬", "Study species", { "Species Count": 5, Habitat: 5, Budget: -8 })]
  }},
  "irrigation-plan": { type: "simulation", title: "Irrigation Planning Game", emoji: "🚿", config: {
    variables: [si("Coverage", "🗺️", 15), si("Efficiency", "📈", 30), si("Water Used", "💧", 50), si("Crop Yield", "🌾", 20)],
    rounds: 10, winText: "Irrigate efficiently! Coverage > 60, Efficiency > 50",
    actions: [sa("Drip Lines", "💧", "Precise drip irrigation", { Coverage: 10, Efficiency: 15, "Water Used": -8, "Crop Yield": 10 }), sa("Canal System", "🏗️", "Build canals", { Coverage: 15, Efficiency: -5, "Water Used": 10, "Crop Yield": 12 }), sa("Smart Sensors", "📡", "Moisture monitoring", { Efficiency: 15, "Water Used": -10, "Crop Yield": 5 }), sa("Flood Irrigation", "🌊", "Traditional method", { Coverage: 12, "Water Used": 15, Efficiency: -10, "Crop Yield": 8 })]
  }},
  "desert-farming": { type: "sorting", title: "Desert Farming Puzzle", emoji: "🌾", config: {
    categories: [sc("Desert Crops", "✅"), sc("Not Desert Crops", "❌")],
    items: [soi("Date Palm", "🌴", "Desert Crops"), soi("Cactus Pear", "🌵", "Desert Crops"), soi("Sorghum", "🌾", "Desert Crops"), soi("Millet", "🌿", "Desert Crops"), soi("Rice", "🍚", "Not Desert Crops"), soi("Watermelon", "🍉", "Not Desert Crops"), soi("Lettuce", "🥬", "Not Desert Crops"), soi("Mushroom", "🍄", "Not Desert Crops")],
    timeLimit: 45
  }},
  "energy-balance": { type: "simulation", title: "Energy Balance Game", emoji: "⚖️", config: {
    variables: [si("Solar", "☀️", 40), si("Wind", "💨", 20), si("Demand", "⚡", 60), si("Storage", "🔋", 30)],
    rounds: 10, winText: "Meet energy demand sustainably!",
    actions: [sa("Solar Expand", "☀️", "More solar panels", { Solar: 15, Storage: 3 }), sa("Wind Turbines", "💨", "Add wind power", { Wind: 15, Solar: -3 }), sa("Battery Tech", "🔋", "Energy storage", { Storage: 15, Demand: -5 }), sa("Smart Grid", "📡", "Optimize distribution", { Demand: -10, Solar: 5, Wind: 5, Storage: 5 })]
  }},
  "desert-quiz-quest": { type: "quiz", title: "Desert Quiz Adventure", emoji: "🗺️", config: { questions: [
    q("Largest desert in the world?", ["Antarctic Desert", "Sahara", "Arabian", "Gobi"], 0, "Antarctica is technically the world's largest desert - a cold desert!"),
    q("What % of Earth is desert?", ["~33%", "~10%", "~50%", "~5%"], 0, "About one-third of Earth's land surface is desert or semi-arid."),
    q("Sahara Desert is in which continent?", ["Africa", "Asia", "Australia", "South America"], 0, "The Sahara stretches across northern Africa."),
    q("Desert animals are active mostly at?", ["Night (nocturnal)", "Midday", "All day", "Only dawn"], 0, "Most desert animals are nocturnal to avoid the extreme daytime heat."),
    q("What is an oasis?", ["Water source in desert", "A type of cactus", "Desert mountain", "Sand dune type"], 0, "An oasis is a fertile area in a desert where water is found.")
  ]}},
  // === 12-14 ===
  "desertification-sim": { type: "simulation", title: "Desertification Simulator", emoji: "📊", config: {
    variables: [si("Fertile Land", "🌿", 60), si("Water Table", "💧", 50), si("Population", "👥", 50), si("Economy", "💰", 40)],
    rounds: 12, winText: "Stop desertification! Fertile Land > 40",
    actions: [sa("Green Belt", "🌳", "Plant tree barriers", { "Fertile Land": 12, "Water Table": 5, Economy: -8 }), sa("Sustainable Farm", "🌾", "Better farming", { "Fertile Land": 8, Population: 5, Economy: 5, "Water Table": -5 }), sa("Water Management", "💧", "Conserve water", { "Water Table": 15, "Fertile Land": 5, Economy: -5 }), sa("Industry", "🏭", "Build economy", { Economy: 15, "Fertile Land": -10, "Water Table": -8, Population: 5 })]
  }},
  "water-politics": { type: "simulation", title: "Water Resource Politics", emoji: "💰", config: {
    variables: [si("Water Access", "💧", 40), si("Fairness", "⚖️", 30), si("Economy", "💰", 50), si("Peace", "🕊️", 50)],
    rounds: 10, winText: "Fair water distribution for all!",
    actions: [sa("Equal Rations", "⚖️", "Fair distribution", { Fairness: 15, "Water Access": 8, Economy: -5, Peace: 8 }), sa("Privatize", "💰", "Market-based allocation", { Economy: 15, Fairness: -12, "Water Access": -5, Peace: -8 }), sa("Community Wells", "🏗️", "Public infrastructure", { "Water Access": 15, Fairness: 10, Economy: -10, Peace: 5 }), sa("Tech Innovation", "🔬", "Desalination/recycling", { "Water Access": 12, Economy: -8, Fairness: 5 })]
  }},
  "climate-desert": { type: "simulation", title: "Climate Impact on Deserts", emoji: "🌡️", config: {
    variables: [si("Temperature", "🌡️", 70), si("Biodiversity", "🦎", 45), si("Water", "💧", 35), si("Adaptation", "🛡️", 25)],
    rounds: 10, winText: "Help desert ecosystems adapt!",
    actions: [sa("Shade Structures", "🌂", "Cool critical areas", { Temperature: -8, Biodiversity: 5, Water: 3 }), sa("Water Harvesting", "💧", "Capture moisture", { Water: 15, Biodiversity: 8, Adaptation: 5 }), sa("Species Relocation", "🚚", "Move vulnerable species", { Biodiversity: 12, Adaptation: 8, Water: -5 }), sa("Research", "🔬", "Study adaptation", { Adaptation: 15, Biodiversity: 5, Temperature: -3 })]
  }},
  "renewable-desert": { type: "simulation", title: "Renewable Energy Strategy", emoji: "♻️", config: {
    variables: [si("Solar Power", "☀️", 25), si("Wind Power", "💨", 15), si("Grid", "⚡", 30), si("Budget", "💰", 60)],
    rounds: 10, winText: "Power the region with renewables!",
    actions: [sa("Solar Farm", "☀️", "Large solar installation", { "Solar Power": 15, Grid: 8, Budget: -15 }), sa("Wind Farm", "💨", "Wind turbines", { "Wind Power": 15, Grid: 5, Budget: -12 }), sa("Grid Upgrade", "⚡", "Modernize grid", { Grid: 15, Budget: -10, "Solar Power": 3, "Wind Power": 3 }), sa("Storage", "🔋", "Battery storage", { Grid: 10, "Solar Power": 5, "Wind Power": 5, Budget: -10 })]
  }},
  "species-protection": { type: "quiz", title: "Desert Species Protection", emoji: "🦂", config: { questions: [
    q("Biggest threat to desert species?", ["Habitat loss", "Too much rain", "Cold weather", "Noise"], 0, "Human activities destroying desert habitats is the primary threat."),
    q("Desert tortoise can survive how long without water?", ["Up to a year", "1 day", "1 week", "1 month"], 0, "Desert tortoises can survive up to a year without water by storing it in their bladder!"),
    q("Why are desert ecosystems fragile?", ["Slow recovery from damage", "Too many animals", "Too much water", "They're very resilient"], 0, "Desert ecosystems recover extremely slowly due to harsh conditions and limited resources."),
    q("Best conservation approach for deserts?", ["Protected area networks", "Introducing new species", "More water pumping", "Urbanization"], 0, "Connected protected areas allow species to move and maintain genetic diversity.")
  ]}},
  "sand-mining": { type: "simulation", title: "Sand Mining Challenge", emoji: "⛏️", config: {
    variables: [si("Sand Reserve", "🏜️", 70), si("Revenue", "💰", 30), si("Ecosystem", "🦎", 60), si("Regulation", "📋", 25)],
    rounds: 10, winText: "Mine sustainably! Reserve > 30, Ecosystem > 40",
    actions: [sa("Large Mining", "⛏️", "Aggressive extraction", { "Sand Reserve": -18, Revenue: 18, Ecosystem: -12, Regulation: -5 }), sa("Controlled Mining", "📏", "Regulated extraction", { "Sand Reserve": -8, Revenue: 10, Ecosystem: -3, Regulation: 5 }), sa("Alternatives", "🔬", "Research replacements", { Revenue: 5, Regulation: 10, Ecosystem: 5 }), sa("Restore Sites", "🌿", "Rehabilitate mined areas", { Ecosystem: 12, Revenue: -8, Regulation: 8, "Sand Reserve": 3 })]
  }},
  "trade-routes": { type: "simulation", title: "Ancient Trade Routes", emoji: "🛤️", config: {
    variables: [si("Trade Volume", "📦", 20), si("Route Safety", "🛡️", 40), si("Water Stops", "💧", 30), si("Profit", "💰", 25)],
    rounds: 10, winText: "Build profitable trade routes!",
    actions: [sa("New Route", "🗺️", "Explore new paths", { "Trade Volume": 12, "Route Safety": -5, Profit: 8 }), sa("Guard Posts", "🛡️", "Protect caravans", { "Route Safety": 15, Profit: -8, "Trade Volume": 5 }), sa("Oasis Network", "💧", "Establish water stops", { "Water Stops": 15, "Route Safety": 8, Profit: -5 }), sa("Trade Deal", "🤝", "Negotiate partnerships", { Profit: 15, "Trade Volume": 10 })]
  }},
  "dust-storm-mgmt": { type: "simulation", title: "Dust Storm Management", emoji: "🌫️", config: {
    variables: [si("Air Quality", "💨", 35), si("Crop Damage", "🌾", 60), si("Health", "❤️", 50), si("Budget", "💰", 50)],
    rounds: 8, winText: "Manage dust storms! Air Quality > 50, Health > 50",
    actions: [sa("Windbreaks", "🌳", "Plant tree barriers", { "Air Quality": 12, "Crop Damage": -10, Budget: -10 }), sa("Warning System", "🚨", "Early alerts", { Health: 12, Budget: -8, "Crop Damage": -5 }), sa("Soil Stabilization", "🌿", "Ground cover plants", { "Air Quality": 10, "Crop Damage": -12, Budget: -8 }), sa("Emergency Response", "🚑", "Health services", { Health: 15, Budget: -12 })]
  }},
  "solar-policy": { type: "quiz", title: "Solar Energy Policy", emoji: "📜", config: { questions: [
    q("Best solar energy incentive?", ["Feed-in tariffs", "Solar panel tax", "Banning solar", "No regulation"], 0, "Feed-in tariffs guarantee payments for solar energy fed into the grid, encouraging adoption."),
    q("Net metering allows homeowners to?", ["Sell excess solar energy back to the grid", "Use unlimited free electricity", "Avoid all utility bills", "Store unlimited energy"], 0, "Net metering lets solar panel owners send excess energy to the grid and receive credit."),
    q("Biggest barrier to solar in developing countries?", ["Upfront cost", "Too much sun", "Lack of sunlight", "People don't want it"], 0, "The initial investment cost is the biggest barrier, though long-term savings are substantial."),
    q("Community solar programs benefit?", ["Renters and low-income families", "Only wealthy homeowners", "Only businesses", "Only farmers"], 0, "Community solar allows people who can't install panels to share in solar energy benefits.")
  ]}},
  "desert-guardian": { type: "simulation", title: "Desert Guardian Challenge", emoji: "🛡️", config: {
    variables: [si("Territory", "🗺️", 50), si("Team Morale", "💪", 50), si("Resources", "📦", 60), si("Threats", "⚠️", 50)],
    rounds: 10, winText: "Protect the desert! Threats < 30",
    actions: [sa("Patrol", "🚶", "Monitor territory", { Threats: -10, "Team Morale": -5, Resources: -5, Territory: 5 }), sa("Train Team", "📚", "Improve skills", { "Team Morale": 15, Threats: -3, Resources: -5 }), sa("Set Traps", "🪤", "Deterrent systems", { Threats: -12, Resources: -10, Territory: 3 }), sa("Ally Up", "🤝", "Build alliances", { "Team Morale": 8, Resources: 10, Threats: -5, Territory: 5 })]
  }},
  // === 15-17 ===
  "desert-economy": { type: "simulation", title: "Desert Economy vs Ecology", emoji: "💹", config: {
    variables: [si("GDP", "💰", 40), si("Desert Health", "🏜️", 65), si("Water", "💧", 45), si("Employment", "👥", 35)],
    rounds: 12, winText: "Balance economy and desert ecology!",
    actions: [sa("Solar Industry", "☀️", "Build solar sector", { GDP: 10, Employment: 10, "Desert Health": 3, Water: -3 }), sa("Mining", "⛏️", "Extract minerals", { GDP: 15, Employment: 8, "Desert Health": -15, Water: -10 }), sa("Eco Tourism", "🏕️", "Sustainable tourism", { GDP: 8, "Desert Health": 5, Employment: 8, Water: -3 }), sa("Conservation", "🌿", "Protect ecosystems", { "Desert Health": 15, Water: 8, GDP: -5, Employment: -3 })]
  }},
  "water-treaty": { type: "simulation", title: "Water Treaty Negotiation", emoji: "🤝", config: {
    variables: [si("Agreement", "🤝", 25), si("Water Sharing", "💧", 30), si("Trust", "💎", 35), si("Compliance", "📋", 20)],
    rounds: 10, winText: "Negotiate a fair water treaty!",
    actions: [sa("Bilateral Talks", "🗣️", "One-on-one meetings", { Agreement: 12, Trust: 8, "Water Sharing": 5 }), sa("Data Sharing", "📊", "Share water data", { Trust: 15, Compliance: 8, Agreement: 3 }), sa("Joint Projects", "🏗️", "Shared infrastructure", { "Water Sharing": 15, Agreement: 8, Compliance: 5 }), sa("Enforcement Plan", "⚖️", "Compliance mechanism", { Compliance: 15, Trust: 5, Agreement: -3 })]
  }},
  "smart-irrigation": { type: "simulation", title: "Smart Irrigation (GIS)", emoji: "🛰️", config: {
    variables: [si("AI Accuracy", "🤖", 25), si("Water Efficiency", "💧", 30), si("Crop Yield", "🌾", 35), si("Budget", "💰", 55)],
    rounds: 10, winText: "Create AI-powered irrigation!",
    actions: [sa("Soil Sensors", "📡", "IoT monitoring", { "AI Accuracy": 12, "Water Efficiency": 10, Budget: -10 }), sa("Drone Survey", "🛩️", "Aerial mapping", { "AI Accuracy": 15, "Crop Yield": 5, Budget: -12 }), sa("ML Models", "🧠", "Prediction algorithms", { "AI Accuracy": 10, "Water Efficiency": 12, "Crop Yield": 8, Budget: -10 }), sa("Auto Control", "🔧", "Automated valves", { "Water Efficiency": 15, "Crop Yield": 10, Budget: -12 })]
  }},
  "rewilding-desert": { type: "simulation", title: "Desert Rewilding Strategy", emoji: "🌿", config: {
    variables: [si("Rewilded Area", "🌿", 10), si("Species", "🦎", 20), si("Water", "💧", 40), si("Budget", "💰", 55)],
    rounds: 10, winText: "Rewild the desert! Area > 50, Species > 40",
    actions: [sa("Remove Barriers", "🚧", "Clear fences/roads", { "Rewilded Area": 12, Species: 5, Budget: -8 }), sa("Reintroduce Species", "🦎", "Release native animals", { Species: 15, "Rewilded Area": 5, Budget: -10 }), sa("Restore Waterways", "💧", "Fix water channels", { Water: 15, "Rewilded Area": 8, Species: 5, Budget: -12 }), sa("Monitor", "📡", "Track progress", { Species: 5, "Rewilded Area": 3, Budget: -5 })]
  }},
  "carbon-desert": { type: "simulation", title: "Desert Carbon Projects", emoji: "📈", config: {
    variables: [si("Carbon Captured", "🌿", 10), si("Tech Level", "🔬", 20), si("Budget", "💰", 55), si("Scale", "🗺️", 15)],
    rounds: 10, winText: "Capture carbon in the desert!",
    actions: [sa("DAC Facility", "🏭", "Direct air capture", { "Carbon Captured": 15, "Tech Level": 8, Budget: -15 }), sa("Desert Greening", "🌱", "Plant drought-resistant", { "Carbon Captured": 10, Scale: 12, Budget: -8 }), sa("Mineral Carbonation", "🪨", "Enhanced weathering", { "Carbon Captured": 12, "Tech Level": 10, Budget: -12 }), sa("Carbon Credits", "💳", "Monetize capture", { Budget: 18, "Carbon Captured": 3 })]
  }},
  "heat-crisis": { type: "simulation", title: "Extreme Heat Crisis", emoji: "🔥", config: {
    variables: [si("Temperature", "🌡️", 80), si("Casualties", "💔", 30), si("Resources", "📦", 50), si("Response", "🚑", 20)],
    rounds: 8, winText: "Manage the heat crisis! Casualties < 30",
    actions: [sa("Cooling Centers", "❄️", "Open public shelters", { Casualties: -12, Response: 12, Resources: -10 }), sa("Water Distribution", "💧", "Free water", { Casualties: -10, Resources: -12, Response: 5 }), sa("Ambulances", "🚑", "Medical response", { Response: 15, Casualties: -8, Resources: -10 }), sa("Alert System", "🚨", "Warn population", { Response: 10, Casualties: -8, Resources: -5 })]
  }},
  "community-desert": { type: "quiz", title: "Desert Community Engagement", emoji: "👥", config: { questions: [
    q("Best way to engage desert communities?", ["Local participatory planning", "Impose rules from outside", "Ignore local knowledge", "Relocate everyone"], 0, "Local participation ensures solutions fit the community's needs and culture."),
    q("Nomadic communities need?", ["Flexible land use policies", "Permanent settlements forced", "No special consideration", "Higher taxes"], 0, "Nomadic peoples require policies that respect their mobile lifestyle and traditional routes."),
    q("Women's role in desert water management?", ["Often the primary water managers", "Not involved", "Only in wealthy countries", "Minimal"], 0, "In many desert communities, women are the primary collectors and managers of water resources."),
    q("Traditional desert knowledge helps with?", ["Climate adaptation strategies", "Only historical interest", "Nothing practical", "Tourism only"], 0, "Traditional knowledge provides time-tested strategies for surviving in arid environments.")
  ]}},
  "green-belt": { type: "simulation", title: "Green Belt Campaign", emoji: "🌳", config: {
    variables: [si("Belt Length", "🌳", 10), si("Tree Survival", "❤️", 50), si("Community", "👥", 40), si("Funding", "💰", 50)],
    rounds: 12, winText: "Build the Great Green Wall! Length > 60",
    actions: [sa("Mass Plant", "🌱", "Large-scale planting", { "Belt Length": 15, "Tree Survival": -5, Funding: -12 }), sa("Native Species", "🌿", "Plant adapted trees", { "Belt Length": 8, "Tree Survival": 15, Funding: -10 }), sa("Community Nursery", "👥", "Local tree nurseries", { Community: 15, "Tree Survival": 8, "Belt Length": 5, Funding: -5 }), sa("International Aid", "🌍", "Seek global support", { Funding: 18, Community: 3, "Belt Length": 3 })]
  }},
  "data-desert": { type: "quiz", title: "Desert Climate Data Analysis", emoji: "📊", config: { questions: [
    q("How fast is the Sahara expanding?", ["~48 km/year southward", "Not expanding", "Shrinking", "1 km/year"], 0, "The Sahara is expanding approximately 48 km per year into the Sahel region."),
    q("Desertification affects how many people?", ["~2 billion", "~1 million", "~10 million", "~100 million"], 0, "Approximately 2 billion people live in areas affected by or vulnerable to desertification."),
    q("Main human cause of desertification?", ["Overgrazing and deforestation", "Too much irrigation", "Building cities", "Air travel"], 0, "Overgrazing and deforestation remove vegetation that holds soil together."),
    q("The Great Green Wall aims to restore?", ["100 million hectares across Africa", "A single park", "One country's forests", "European meadows"], 0, "The Great Green Wall project spans the entire width of Africa to combat desertification.")
  ]}},
  "sustainability-desert": { type: "simulation", title: "Desert Sustainability Plan", emoji: "🌱", config: {
    variables: [si("Sustainability", "🌱", 20), si("Economy", "💰", 45), si("Environment", "🏜️", 50), si("Society", "👥", 40)],
    rounds: 12, winText: "Achieve desert sustainability!",
    actions: [sa("Green Jobs", "👥", "Create sustainable employment", { Economy: 8, Society: 10, Sustainability: 8 }), sa("Ecosystem Restore", "🌿", "Restore degraded land", { Environment: 15, Sustainability: 10, Economy: -5 }), sa("Education", "📚", "Sustainability training", { Society: 15, Sustainability: 8, Economy: -3 }), sa("Innovation Hub", "🔬", "Desert tech center", { Economy: 10, Sustainability: 12, Society: 5, Environment: 3 })]
  }},
  // === 17-18 ===
  "global-desertification": { type: "simulation", title: "Global Desertification Treaty", emoji: "🌐", config: {
    variables: [si("Agreement", "🤝", 25), si("Action Plans", "📋", 20), si("Funding", "💰", 35), si("Coverage", "🌍", 20)],
    rounds: 10, winText: "Negotiate a global anti-desertification treaty!",
    actions: [sa("UNCCD Summit", "🏛️", "Convention conference", { Agreement: 15, Coverage: 8, Funding: -5 }), sa("National Plans", "📋", "Country action plans", { "Action Plans": 15, Agreement: 5, Funding: -5 }), sa("Global Fund", "💰", "Pool resources", { Funding: 18, Agreement: 5, "Action Plans": 3 }), sa("Monitoring System", "🛰️", "Satellite tracking", { Coverage: 15, "Action Plans": 5, Funding: -10 })]
  }},
  "climate-migration": { type: "simulation", title: "Climate Migration Sim", emoji: "🏃", config: {
    variables: [si("Displaced", "🏃", 60), si("Settlement", "🏠", 20), si("Resources", "📦", 45), si("Social Stability", "🕊️", 40)],
    rounds: 10, winText: "Manage climate migration humanely!",
    actions: [sa("Refugee Camps", "⛺", "Temporary housing", { Settlement: 12, Resources: -10, "Social Stability": 5, Displaced: -8 }), sa("New Cities", "🏗️", "Build new settlements", { Settlement: 15, Displaced: -12, Resources: -15 }), sa("Aid Programs", "🤝", "Humanitarian aid", { Resources: -8, "Social Stability": 12, Displaced: -5 }), sa("Prevention", "🌿", "Address root causes", { Displaced: -10, "Social Stability": 8, Resources: -5, Settlement: 3 })]
  }},
  "ecosystem-restoration": { type: "simulation", title: "Ecosystem Restoration Model", emoji: "🧬", config: {
    variables: [si("Restoration", "🌿", 15), si("Model Accuracy", "🎯", 25), si("Data", "📊", 30), si("Budget", "💰", 55)],
    rounds: 12, winText: "Build a restoration prediction model!",
    actions: [sa("Field Study", "🏕️", "Collect data", { Data: 15, "Model Accuracy": 8, Budget: -10 }), sa("Satellite Data", "🛰️", "Remote sensing", { Data: 12, "Model Accuracy": 5, Budget: -8 }), sa("ML Training", "🤖", "Train AI models", { "Model Accuracy": 15, Restoration: 8, Budget: -12 }), sa("Pilot Restore", "🌱", "Test restoration", { Restoration: 15, "Model Accuracy": 5, Budget: -10, Data: 5 })]
  }},
  "solar-entrepreneurship": { type: "simulation", title: "Solar Entrepreneurship", emoji: "💼", config: {
    variables: [si("Revenue", "💰", 15), si("Customers", "👥", 10), si("Tech", "🔬", 30), si("Impact", "🌍", 15)],
    rounds: 12, winText: "Build a successful solar business!",
    actions: [sa("Product Dev", "🔬", "Improve products", { Tech: 15, Revenue: -8, Impact: 5 }), sa("Sales Push", "📢", "Marketing campaign", { Customers: 15, Revenue: 10, Tech: -3 }), sa("Install Service", "🔧", "Solar installations", { Revenue: 12, Customers: 8, Impact: 10 }), sa("Partnerships", "🤝", "Strategic alliances", { Customers: 10, Revenue: 8, Impact: 8 })]
  }},
  "ai-water": { type: "simulation", title: "AI Water Management", emoji: "🤖", config: {
    variables: [si("AI Accuracy", "🎯", 20), si("Water Saved", "💧", 10), si("Coverage", "🗺️", 15), si("Budget", "💰", 55)],
    rounds: 10, winText: "Create AI-powered water management!",
    actions: [sa("Sensor Network", "📡", "Deploy IoT sensors", { Coverage: 15, "AI Accuracy": 8, Budget: -12 }), sa("Train Models", "🧠", "ML algorithms", { "AI Accuracy": 15, "Water Saved": 8, Budget: -10 }), sa("Auto Distribution", "🔧", "Automated valves", { "Water Saved": 15, Coverage: 5, Budget: -12 }), sa("Data Sharing", "📊", "Open data platform", { "AI Accuracy": 8, Coverage: 10, Budget: -5 })]
  }},
  "land-rights": { type: "quiz", title: "Land Rights Legal Case", emoji: "⚖️", config: { questions: [
    q("UNDRIP protects?", ["Indigenous peoples' rights", "Only animal rights", "Corporate rights", "Government rights"], 0, "The UN Declaration on the Rights of Indigenous Peoples protects their land and cultural rights."),
    q("Land grabbing in deserts often affects?", ["Nomadic pastoralists", "Only city dwellers", "Only wealthy landowners", "Nobody"], 0, "Nomadic communities are disproportionately affected as their traditional grazing lands are taken."),
    q("Free Prior Informed Consent means?", ["Communities must agree before projects", "Government decides alone", "Companies choose freely", "No consent needed"], 0, "FPIC ensures indigenous communities genuinely consent before their land is used."),
    q("Best land tenure system for nomads?", ["Communal land rights", "Individual private titles", "Government ownership only", "No formal rights"], 0, "Communal rights protect the collective grazing patterns essential to nomadic livelihoods.")
  ]}},
  "restoration-master": { type: "simulation", title: "Restoration Master Plan", emoji: "🗺️", config: {
    variables: [si("Planning", "📋", 15), si("Execution", "🏗️", 10), si("Stakeholders", "👥", 35), si("Budget", "💰", 50)],
    rounds: 12, winText: "Complete the desert restoration plan!",
    actions: [sa("Assessment", "🔬", "Scientific study", { Planning: 15, Budget: -8, Stakeholders: 3 }), sa("Consultation", "👥", "Community input", { Stakeholders: 15, Planning: 5, Budget: -5 }), sa("Pilot Zone", "🌱", "Test restoration", { Execution: 12, Planning: 5, Budget: -10, Stakeholders: 3 }), sa("Scale Up", "📈", "National rollout", { Execution: 15, Budget: -15, Planning: -3, Stakeholders: -3 })]
  }},
  "multi-nation-desert": { type: "simulation", title: "Multi-Nation Desert Alliance", emoji: "🌍", config: {
    variables: [si("Cooperation", "🤝", 25), si("Restoration", "🌿", 20), si("Funding", "💰", 40), si("Knowledge", "📚", 30)],
    rounds: 10, winText: "Unite nations against desertification!",
    actions: [sa("Summit", "🏛️", "International conference", { Cooperation: 15, Knowledge: 5, Funding: -8 }), sa("Joint Project", "🏗️", "Shared initiative", { Restoration: 15, Cooperation: 8, Funding: -12 }), sa("Knowledge Exchange", "📚", "Share best practices", { Knowledge: 15, Restoration: 5, Cooperation: 5 }), sa("Pool Resources", "💰", "Combined funding", { Funding: 18, Cooperation: 5, Restoration: 3 })]
  }},
  "impact-desert": { type: "quiz", title: "Environmental Impact Review", emoji: "📋", config: { questions: [
    q("Desert EIA must consider?", ["Water table impacts", "Only visual changes", "Only noise levels", "Just cost"], 0, "Desert EIAs must evaluate impacts on scarce water resources, a critical desert factor."),
    q("Cumulative impacts in deserts include?", ["Multiple projects depleting groundwater", "Only one project's effects", "Visual impacts only", "Noise from construction"], 0, "Multiple projects can collectively deplete limited desert groundwater reserves."),
    q("Strategic Environmental Assessment differs from EIA by?", ["Evaluating policies, not just projects", "Being less detailed", "Ignoring environment", "Only for cities"], 0, "SEA evaluates broader policies and plans, while EIA focuses on individual projects."),
    q("Climate change impact on desert EIAs?", ["Must include future climate scenarios", "Not relevant to deserts", "Only affects coastal EIAs", "Makes EIAs unnecessary"], 0, "EIAs must consider how climate change will affect desert conditions over the project's lifetime.")
  ]}},
  "planetary-desert": { type: "simulation", title: "Planetary Boundary: Deserts", emoji: "🪐", config: {
    variables: [si("Land Boundary", "🏜️", 40), si("Water Boundary", "💧", 35), si("Biodiversity", "🦋", 40), si("Climate", "🌡️", 50)],
    rounds: 12, winText: "Keep desert planetary boundaries safe!",
    actions: [sa("Land Restoration", "🌿", "Restore degraded land", { "Land Boundary": 12, Biodiversity: 8, Climate: -3 }), sa("Water Efficiency", "💧", "Reduce water waste", { "Water Boundary": 15, "Land Boundary": 5, Climate: -3 }), sa("Species Protection", "🦎", "Protect desert species", { Biodiversity: 15, "Land Boundary": 5 }), sa("Integrated Management", "🔄", "Holistic approach", { "Land Boundary": 8, "Water Boundary": 8, Biodiversity: 5, Climate: -5 })]
  }},
};
