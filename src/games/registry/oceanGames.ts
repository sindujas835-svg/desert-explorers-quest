import { GameEntry } from "../types";

const q = (question: string, options: string[], correct: number, explanation: string) => ({ question, options, correct, explanation });
const mp = (id: string, emoji: string, name: string) => ({ id, emoji, name });
const si = (name: string, emoji: string, value: number) => ({ name, emoji, value });
const sa = (name: string, emoji: string, desc: string, effects: Record<string, number>) => ({ name, emoji, desc, effects });
const st = (emoji: string, name: string, points: number, good: boolean) => ({ emoji, name, points, good });
const sc = (name: string, emoji: string) => ({ name, emoji });
const soi = (name: string, emoji: string, category: string) => ({ name, emoji, category });

export const oceanGames: Record<string, GameEntry> = {
  // === 6-8 ===
  "ocean-cleanup": { type: "tap", title: "Ocean Cleanup Catch", emoji: "🧹", config: {
    targets: [st("🗑️", "Trash", 10, true), st("🥤", "Plastic Cup", 10, true), st("🛍️", "Plastic Bag", 10, true), st("🐠", "Fish", -10, false), st("🐢", "Turtle", -15, false)],
    timeLimit: 45, goalScore: 80, spawnInterval: 800
  }},
  "fish-plastic": { type: "sorting", title: "Fish vs Plastic Sorting", emoji: "🐟", config: {
    categories: [sc("Fish", "🐟"), sc("Plastic", "🗑️")],
    items: [soi("Clownfish", "🐠", "Fish"), soi("Tuna", "🐟", "Fish"), soi("Jellyfish", "🪼", "Fish"), soi("Seahorse", "🦈", "Fish"), soi("Bottle", "🍾", "Plastic"), soi("Straw", "🥤", "Plastic"), soi("Bag", "🛍️", "Plastic"), soi("Cup", "🥛", "Plastic")],
    timeLimit: 45
  }},
  "coral-color": { type: "memory", title: "Coral Color Puzzle", emoji: "🪸", config: {
    pairs: [mp("red-coral", "🔴", "Red Coral"), mp("blue-coral", "🔵", "Blue Coral"), mp("green-coral", "🟢", "Green Coral"), mp("yellow-coral", "🟡", "Yellow Coral"), mp("purple-coral", "🟣", "Purple Coral"), mp("orange-coral", "🟠", "Orange Coral")],
    timeLimit: 60
  }},
  "build-reef": { type: "sorting", title: "Build a Healthy Reef", emoji: "🏗️", config: {
    categories: [sc("Reef Builders", "🪸"), sc("Reef Killers", "☠️")],
    items: [soi("Coral Polyp", "🪸", "Reef Builders"), soi("Clean Water", "💧", "Reef Builders"), soi("Algae", "🌿", "Reef Builders"), soi("Clownfish", "🐠", "Reef Builders"), soi("Oil Spill", "🛢️", "Reef Killers"), soi("Plastic", "🛍️", "Reef Killers"), soi("Bleach", "⚗️", "Reef Killers"), soi("Dynamite", "💣", "Reef Killers")],
    timeLimit: 50
  }},
  "sea-creature-match": { type: "memory", title: "Sea Creature Matching", emoji: "🦑", config: {
    pairs: [mp("octopus", "🐙", "Octopus"), mp("whale", "🐋", "Whale"), mp("shark", "🦈", "Shark"), mp("turtle", "🐢", "Turtle"), mp("dolphin", "🐬", "Dolphin"), mp("squid", "🦑", "Squid")],
    timeLimit: 60
  }},
  "turtle-maze": { type: "tap", title: "Save the Turtle Maze", emoji: "🐢", config: {
    targets: [st("🐢", "Turtle", 15, true), st("🥬", "Seagrass", 10, true), st("💧", "Clean Water", 5, true), st("🛍️", "Plastic Bag", -10, false), st("🪤", "Net", -15, false)],
    timeLimit: 50, goalScore: 90, spawnInterval: 900
  }},
  "trash-pop": { type: "tap", title: "Floating Trash Pop", emoji: "💥", config: {
    targets: [st("🗑️", "Trash", 10, true), st("📦", "Box", 8, true), st("🥫", "Can", 10, true), st("🐟", "Fish", -10, false), st("🪸", "Coral", -15, false)],
    timeLimit: 40, goalScore: 100, spawnInterval: 600
  }},
  "ocean-sound": { type: "quiz", title: "Ocean Sound Quiz", emoji: "🔊", config: { questions: [
    q("Which marine mammal sings complex songs?", ["Humpback Whale", "Shark", "Octopus", "Crab"], 0, "Humpback whales sing beautiful, complex songs that can last hours."),
    q("Which animal uses echolocation underwater?", ["Dolphin", "Starfish", "Seahorse", "Jellyfish"], 0, "Dolphins use clicks and echoes to navigate and find food."),
    q("Which crustacean makes a loud snapping sound?", ["Pistol Shrimp", "Lobster", "Crab", "Krill"], 0, "Pistol shrimp snap their claws so fast it creates a shockwave louder than a gunshot!"),
    q("What creates ocean wave sounds?", ["Air trapped in water", "Fish talking", "Sand moving", "Moon pulling"], 0, "Waves crash and trap air bubbles, creating the familiar ocean sound.")
  ]}},
  "water-sorting": { type: "sorting", title: "Healthy vs Dirty Water", emoji: "💧", config: {
    categories: [sc("Clean Water", "💧"), sc("Polluted", "🤢")],
    items: [soi("Spring Water", "💧", "Clean Water"), soi("Rain Water", "🌧️", "Clean Water"), soi("Filtered Water", "🚰", "Clean Water"), soi("Mountain Stream", "🏔️", "Clean Water"), soi("Oil Water", "🛢️", "Polluted"), soi("Sewage", "🚽", "Polluted"), soi("Chemical Runoff", "⚗️", "Polluted"), soi("Algae Bloom", "🟢", "Polluted")],
    timeLimit: 40
  }},
  "submarine": { type: "tap", title: "Mini Submarine Explorer", emoji: "🚢", config: {
    targets: [st("💎", "Diamond", 15, true), st("🏺", "Treasure", 15, true), st("🗝️", "Key", 10, true), st("⭐", "Star", 10, true), st("🪨", "Rock", -5, false)],
    timeLimit: 45, goalScore: 80, spawnInterval: 1000
  }},
  // === 9-11 ===
  "coastal-cleanup": { type: "simulation", title: "Coastal Cleanup Strategy", emoji: "🏖️", config: {
    variables: [si("Beach Clean", "🏖️", 20), si("Volunteers", "👥", 30), si("Budget", "💰", 60), si("Awareness", "📢", 30)],
    rounds: 8, winText: "Clean up the coast! Beach Clean > 70",
    actions: [sa("Recruit Volunteers", "👥", "Get more helpers", { Volunteers: 15, Budget: -5, Awareness: 5 }), sa("Beach Sweep", "🧹", "Organize cleanup day", { "Beach Clean": 15, Volunteers: -8 }), sa("Education", "📚", "Teach waste reduction", { Awareness: 15, "Beach Clean": 5, Budget: -5 }), sa("Recycling Station", "♻️", "Install bins", { "Beach Clean": 10, Budget: -12, Awareness: 5 })]
  }},
  "overfishing": { type: "simulation", title: "Overfishing Balance", emoji: "🐟", config: {
    variables: [si("Fish Pop.", "🐟", 60), si("Revenue", "💰", 40), si("Ecosystem", "🌊", 60), si("Employment", "👥", 50)],
    rounds: 10, winText: "Maintain sustainable fishing!",
    actions: [sa("Set Quotas", "📋", "Limit catch amounts", { "Fish Pop.": 10, Revenue: -8, Ecosystem: 8, Employment: -5 }), sa("Large Harvest", "🎣", "Increase fishing", { Revenue: 15, "Fish Pop.": -15, Employment: 8, Ecosystem: -8 }), sa("Fish Farms", "🏗️", "Build aquaculture", { Revenue: 10, "Fish Pop.": 5, Employment: 8, Ecosystem: -5 }), sa("Marine Reserve", "🌊", "No-take zones", { Ecosystem: 15, "Fish Pop.": 12, Revenue: -5, Employment: -3 })]
  }},
  "coral-bleaching": { type: "simulation", title: "Coral Bleaching Prevention", emoji: "🌡️", config: {
    variables: [si("Coral Health", "🪸", 50), si("Water Temp", "🌡️", 65), si("Pollution", "🏭", 55), si("Budget", "💰", 50)],
    rounds: 10, winText: "Save the coral reef! Health > 60, Temp < 50",
    actions: [sa("Shade Structures", "🌂", "Cool water areas", { "Water Temp": -10, Budget: -10, "Coral Health": 5 }), sa("Reduce Runoff", "🚫", "Stop pollution flow", { Pollution: -12, "Coral Health": 8, Budget: -8 }), sa("Coral Nursery", "🌱", "Grow new coral", { "Coral Health": 12, Budget: -12 }), sa("Research", "🔬", "Study heat-resistant coral", { "Coral Health": 8, "Water Temp": -5, Budget: -10 })]
  }},
  "marine-food-chain": { type: "sorting", title: "Marine Food Chain Builder", emoji: "🔗", config: {
    categories: [sc("Producer", "🌿"), sc("Consumer", "🐟"), sc("Top Predator", "🦈")],
    items: [soi("Phytoplankton", "🌿", "Producer"), soi("Seaweed", "🌊", "Producer"), soi("Kelp", "🌿", "Producer"), soi("Small Fish", "🐟", "Consumer"), soi("Squid", "🦑", "Consumer"), soi("Sea Turtle", "🐢", "Consumer"), soi("Great White Shark", "🦈", "Top Predator"), soi("Orca", "🐋", "Top Predator"), soi("Barracuda", "🐟", "Top Predator")],
    timeLimit: 60
  }},
  "oil-spill": { type: "simulation", title: "Oil Spill Response", emoji: "🛢️", config: {
    variables: [si("Oil Spread", "🛢️", 70), si("Wildlife", "🐟", 50), si("Resources", "📦", 60), si("Cleanup", "✨", 10)],
    rounds: 8, winText: "Clean up the spill! Oil < 20, Wildlife > 40",
    actions: [sa("Deploy Booms", "🚧", "Contain the spread", { "Oil Spread": -12, Resources: -10 }), sa("Skimmers", "🚢", "Skim oil from surface", { Cleanup: 15, "Oil Spread": -8, Resources: -10 }), sa("Wildlife Rescue", "🐧", "Save affected animals", { Wildlife: 12, Resources: -10 }), sa("Dispersants", "⚗️", "Chemical dispersal", { "Oil Spread": -15, Wildlife: -8, Resources: -8 })]
  }},
  "plastic-policy": { type: "quiz", title: "Plastic Production Policy", emoji: "📜", config: { questions: [
    q("How long does plastic take to decompose?", ["400+ years", "10 years", "50 years", "1 year"], 0, "Most plastics take 400+ years to break down, and even then become microplastics."),
    q("Best policy to reduce ocean plastic?", ["Ban single-use plastics", "Increase plastic production", "Only recycle", "Do nothing"], 0, "Banning single-use plastics prevents them from entering the ocean in the first place."),
    q("Microplastics are dangerous because?", ["Enter the food chain", "They're too small to matter", "They dissolve naturally", "They float harmlessly"], 0, "Microplastics are eaten by marine life and accumulate up the food chain, affecting all organisms."),
    q("Which country produces most ocean plastic?", ["China", "USA", "Brazil", "India"], 0, "China is the largest contributor to ocean plastic pollution due to its large population and manufacturing base.")
  ]}},
  "turtle-migration": { type: "simulation", title: "Sea Turtle Migration", emoji: "🐢", config: {
    variables: [si("Distance", "🗺️", 10), si("Energy", "⚡", 80), si("Safety", "🛡️", 60), si("Health", "❤️", 70)],
    rounds: 10, winText: "Guide the turtle home! Distance > 80",
    actions: [sa("Swim Fast", "🏊", "Cover more ground", { Distance: 15, Energy: -15, Health: -3 }), sa("Rest & Feed", "🥬", "Eat seagrass", { Energy: 15, Health: 8, Distance: 3 }), sa("Dive Deep", "⬇️", "Avoid predators", { Safety: 12, Energy: -8, Distance: 8 }), sa("Follow Current", "🌊", "Use ocean currents", { Distance: 12, Energy: -5, Safety: -5 })]
  }},
  "marine-protected": { type: "simulation", title: "Marine Protected Areas", emoji: "🗺️", config: {
    variables: [si("Coverage", "🗺️", 20), si("Biodiversity", "🦋", 50), si("Budget", "💰", 60), si("Compliance", "📋", 30)],
    rounds: 10, winText: "Protect 30% of ocean! Coverage > 60",
    actions: [sa("Designate Zone", "🗺️", "Create new MPA", { Coverage: 12, Budget: -12, Biodiversity: 8 }), sa("Patrol", "🚢", "Enforce boundaries", { Compliance: 15, Budget: -8, Biodiversity: 5 }), sa("Research", "🔬", "Study ecosystems", { Biodiversity: 10, Compliance: 5, Budget: -8 }), sa("Fundraise", "💰", "Seek donations", { Budget: 18, Compliance: -3 })]
  }},
  "tourism-manager": { type: "simulation", title: "Underwater Tourism Manager", emoji: "🏝️", config: {
    variables: [si("Revenue", "💰", 40), si("Reef Health", "🪸", 70), si("Tourist Satisfaction", "😊", 50), si("Sustainability", "🌿", 40)],
    rounds: 10, winText: "Profit while protecting the reef!",
    actions: [sa("Eco Tours", "🤿", "Small group diving", { Revenue: 8, "Reef Health": -3, "Tourist Satisfaction": 10, Sustainability: 8 }), sa("Mass Tourism", "🚢", "Large cruise ships", { Revenue: 15, "Reef Health": -15, "Tourist Satisfaction": 5, Sustainability: -10 }), sa("Education Center", "📚", "Build awareness", { Sustainability: 15, "Tourist Satisfaction": 8, Revenue: -5, "Reef Health": 5 }), sa("Reef Restoration", "🌱", "Repair damaged areas", { "Reef Health": 15, Sustainability: 8, Revenue: -10 })]
  }},
  "storm-defense": { type: "simulation", title: "Ocean Storm Defense", emoji: "🌊", config: {
    variables: [si("Defenses", "🛡️", 30), si("Population Safety", "👥", 50), si("Budget", "💰", 60), si("Environment", "🌿", 60)],
    rounds: 8, winText: "Protect the coast from storms!",
    actions: [sa("Sea Wall", "🧱", "Build barriers", { Defenses: 15, Budget: -15, Environment: -8 }), sa("Mangroves", "🌳", "Plant natural barriers", { Environment: 12, Defenses: 10, Budget: -8 }), sa("Early Warning", "🚨", "Detection systems", { "Population Safety": 15, Budget: -10 }), sa("Evacuate", "🚗", "Prepare evacuation", { "Population Safety": 12, Budget: -5 })]
  }},
  // === 12-14 ===
  "acidification": { type: "simulation", title: "Ocean Acidification Simulator", emoji: "🧪", config: {
    variables: [si("pH Level", "🧪", 50), si("Marine Life", "🐟", 60), si("Coral", "🪸", 55), si("Budget", "💰", 50)],
    rounds: 10, winText: "Stabilize ocean pH! Keep pH > 50 and life > 40",
    actions: [sa("Reduce CO2", "🏭", "Cut emissions", { "pH Level": 10, Budget: -12, "Marine Life": 5 }), sa("Alkaline Addition", "⚗️", "Add buffering agents", { "pH Level": 12, Coral: 5, Budget: -10 }), sa("Seagrass Beds", "🌿", "Natural pH buffers", { "pH Level": 8, "Marine Life": 8, Coral: 5, Budget: -8 }), sa("Monitor", "📊", "Track pH changes", { "pH Level": 3, "Marine Life": 3, Budget: -5 })]
  }},
  "fisheries-mgmt": { type: "simulation", title: "Sustainable Fisheries", emoji: "🎣", config: {
    variables: [si("Fish Stock", "🐟", 50), si("Revenue", "💰", 40), si("Ecosystem", "🌊", 55), si("Compliance", "📋", 30)],
    rounds: 10, winText: "Create sustainable fishing! Stock > 50, Revenue > 30",
    actions: [sa("Seasonal Ban", "🚫", "No fishing in breeding", { "Fish Stock": 15, Revenue: -10, Ecosystem: 8, Compliance: 5 }), sa("Gear Standards", "🎣", "Mandate selective gear", { Ecosystem: 10, Compliance: 10, "Fish Stock": 5, Revenue: -5 }), sa("Subsidize Transition", "💰", "Help fishers adapt", { Revenue: 10, Compliance: 8, "Fish Stock": 3 }), sa("Enforcement", "🚢", "Patrol fishing zones", { Compliance: 15, "Fish Stock": 8, Revenue: -8 })]
  }},
  "carbon-sink": { type: "simulation", title: "Marine Carbon Sink Strategy", emoji: "🌿", config: {
    variables: [si("Carbon Absorbed", "🌿", 20), si("Area", "🗺️", 30), si("Budget", "💰", 60), si("Research", "🔬", 25)],
    rounds: 10, winText: "Maximize blue carbon capture!",
    actions: [sa("Mangrove Planting", "🌳", "Coastal mangroves", { "Carbon Absorbed": 12, Area: 10, Budget: -10 }), sa("Seagrass Restore", "🌿", "Seagrass meadows", { "Carbon Absorbed": 10, Area: 8, Budget: -8 }), sa("Research Project", "🔬", "Study capture rates", { Research: 15, "Carbon Absorbed": 5, Budget: -10 }), sa("Carbon Credits", "💳", "Sell blue carbon", { Budget: 15, "Carbon Absorbed": 3, Area: -3 })]
  }},
  "dead-zone": { type: "simulation", title: "Dead Zone Prevention", emoji: "☠️", config: {
    variables: [si("Oxygen Level", "💨", 35), si("Nutrient Runoff", "🌾", 75), si("Marine Life", "🐟", 40), si("Budget", "💰", 50)],
    rounds: 10, winText: "Restore oxygen! Level > 60, Runoff < 40",
    actions: [sa("Buffer Zones", "🌿", "Riverside vegetation", { "Nutrient Runoff": -12, Budget: -8, "Oxygen Level": 5 }), sa("Farm Standards", "🌾", "Reduce fertilizer use", { "Nutrient Runoff": -15, Budget: -5 }), sa("Aeration", "💨", "Pump oxygen", { "Oxygen Level": 15, Budget: -12, "Marine Life": 8 }), sa("Wetland Restore", "🏞️", "Natural filtration", { "Nutrient Runoff": -10, "Oxygen Level": 10, "Marine Life": 8, Budget: -10 })]
  }},
  "plastic-trade": { type: "simulation", title: "Global Plastic Trade", emoji: "🌐", config: {
    variables: [si("Ocean Plastic", "🌊", 70), si("Trade Revenue", "💰", 50), si("Recycling", "♻️", 20), si("Regulations", "📋", 30)],
    rounds: 10, winText: "Reduce ocean plastic < 30!",
    actions: [sa("Ban Exports", "🚫", "Stop waste shipping", { "Ocean Plastic": -8, "Trade Revenue": -10, Regulations: 12 }), sa("Recycling Tech", "♻️", "Invest in recycling", { Recycling: 15, "Ocean Plastic": -10, "Trade Revenue": 5 }), sa("Treaty", "📜", "International agreement", { Regulations: 15, "Ocean Plastic": -5 }), sa("Innovation", "🔬", "Alternative materials", { "Ocean Plastic": -12, Recycling: 8, "Trade Revenue": -5 })]
  }},
  "offshore-wind": { type: "simulation", title: "Offshore Wind vs Marine Life", emoji: "💨", config: {
    variables: [si("Energy Output", "⚡", 20), si("Marine Impact", "🐟", 60), si("Budget", "💰", 50), si("Approval", "📋", 30)],
    rounds: 10, winText: "Generate energy while protecting marine life!",
    actions: [sa("Build Turbines", "🌬️", "Install wind farms", { "Energy Output": 15, "Marine Impact": -8, Budget: -15, Approval: 5 }), sa("Eco Design", "🌿", "Wildlife-safe design", { "Marine Impact": 10, "Energy Output": 8, Budget: -12, Approval: 8 }), sa("Impact Study", "🔬", "Environmental research", { "Marine Impact": 5, Approval: 15, Budget: -8 }), sa("Community Engage", "👥", "Public consultation", { Approval: 15, Budget: -5 })]
  }},
  "climate-refugee": { type: "simulation", title: "Climate Refugee Coastal", emoji: "🏠", config: {
    variables: [si("Safety", "🛡️", 40), si("Housing", "🏠", 30), si("Budget", "💰", 50), si("Resilience", "💪", 20)],
    rounds: 10, winText: "Protect coastal communities!",
    actions: [sa("Relocate", "🚚", "Move to higher ground", { Safety: 15, Housing: 10, Budget: -15 }), sa("Sea Walls", "🧱", "Build flood defenses", { Resilience: 12, Safety: 8, Budget: -12 }), sa("Flood Insurance", "📋", "Financial protection", { Safety: 8, Budget: -5, Resilience: 5 }), sa("Green Infrastructure", "🌿", "Natural barriers", { Resilience: 15, Safety: 5, Budget: -8 })]
  }},
  "shark-conservation": { type: "quiz", title: "Shark Conservation", emoji: "🦈", config: { questions: [
    q("How many sharks are killed by humans yearly?", ["~100 million", "~1,000", "~10 million", "~500"], 0, "Humans kill approximately 100 million sharks annually, mostly for fins."),
    q("Sharks are important because?", ["Top predators balance ecosystems", "They taste good", "They're not important", "They clean beaches"], 0, "As apex predators, sharks regulate species below them, maintaining ocean health."),
    q("Shark fin soup mainly consumed in?", ["East Asia", "North America", "Europe", "Africa"], 0, "Shark fin soup is a traditional delicacy in East Asian cuisine."),
    q("Most effective shark protection?", ["Marine sanctuaries", "Shark cages everywhere", "Remove all sharks", "Shark feeding programs"], 0, "Marine sanctuaries provide safe zones where sharks can live without human threats.")
  ]}},
  "arctic-ice": { type: "simulation", title: "Arctic Ocean Ice Melt", emoji: "🧊", config: {
    variables: [si("Ice Cover", "🧊", 50), si("Temperature", "🌡️", 60), si("Wildlife", "🐻‍❄️", 55), si("Emissions", "💨", 65)],
    rounds: 10, winText: "Slow Arctic ice melt! Ice > 40, Temp < 50",
    actions: [sa("Cut Emissions", "🏭", "Reduce global CO2", { Emissions: -12, Temperature: -5, "Ice Cover": 5 }), sa("Reflective Cover", "☀️", "Albedo enhancement", { "Ice Cover": 10, Temperature: -8 }), sa("Wildlife Corridors", "🐻‍❄️", "Protect habitats", { Wildlife: 15, "Ice Cover": 3 }), sa("Research", "🔬", "Arctic monitoring", { "Ice Cover": 3, Wildlife: 5, Temperature: -3 })]
  }},
  "marine-treaty": { type: "simulation", title: "International Marine Treaty", emoji: "📝", config: {
    variables: [si("Agreement", "🤝", 25), si("Enforcement", "⚖️", 20), si("Coverage", "🗺️", 30), si("Funding", "💰", 40)],
    rounds: 10, winText: "Negotiate a marine protection treaty!",
    actions: [sa("Summit", "🏛️", "International meeting", { Agreement: 15, Funding: -8, Coverage: 5 }), sa("Patrol Fleet", "🚢", "Joint enforcement", { Enforcement: 15, Funding: -12, Agreement: 5 }), sa("Expand Zones", "🗺️", "More protected areas", { Coverage: 12, Agreement: -5, Funding: -5 }), sa("Climate Fund", "💰", "Pool resources", { Funding: 18, Agreement: 5, Enforcement: 3 })]
  }},
  // === 15-17 ===
  "global-ocean-economy": { type: "simulation", title: "Global Ocean Economy", emoji: "💹", config: {
    variables: [si("GDP", "💰", 40), si("Ocean Health", "🌊", 50), si("Employment", "👥", 40), si("Sustainability", "🌿", 30)],
    rounds: 12, winText: "Build a sustainable ocean economy!",
    actions: [sa("Blue Bonds", "💎", "Ocean finance instruments", { GDP: 10, Sustainability: 8, "Ocean Health": 5 }), sa("Fishing Industry", "🎣", "Expand fishing", { GDP: 12, Employment: 10, "Ocean Health": -12, Sustainability: -5 }), sa("Marine Biotech", "🧬", "Bio-innovation", { GDP: 8, Sustainability: 12, "Ocean Health": 5, Employment: 5 }), sa("Port Development", "🚢", "Expand shipping", { GDP: 15, Employment: 10, "Ocean Health": -10, Sustainability: -5 })]
  }},
  "deep-sea-mining": { type: "simulation", title: "Deep Sea Mining Decisions", emoji: "⛏️", config: {
    variables: [si("Resources", "⛏️", 30), si("Ocean Floor", "🌊", 70), si("Revenue", "💰", 20), si("Regulation", "📋", 30)],
    rounds: 10, winText: "Mine responsibly! Floor > 40, Revenue > 50",
    actions: [sa("Full Mining", "⛏️", "Aggressive extraction", { Resources: 15, Revenue: 15, "Ocean Floor": -20, Regulation: -5 }), sa("Limited Mining", "📏", "Controlled extraction", { Resources: 8, Revenue: 8, "Ocean Floor": -8, Regulation: 5 }), sa("Research First", "🔬", "Study impacts", { Regulation: 15, "Ocean Floor": 5, Revenue: -5 }), sa("Moratorium", "🚫", "Temporary ban", { "Ocean Floor": 12, Regulation: 10, Revenue: -8 })]
  }},
  "fisheries-conflict": { type: "simulation", title: "International Fisheries Conflict", emoji: "⚔️", config: {
    variables: [si("Peace", "🕊️", 40), si("Fish Stocks", "🐟", 50), si("Trade", "💰", 40), si("Compliance", "📋", 30)],
    rounds: 10, winText: "Resolve fisheries disputes peacefully!",
    actions: [sa("Negotiate", "🤝", "Diplomatic talks", { Peace: 15, Compliance: 8, Trade: 5 }), sa("Joint Patrols", "🚢", "Shared enforcement", { Compliance: 15, Peace: 5, "Fish Stocks": 8, Trade: -5 }), sa("Trade Agreement", "📜", "Shared fishing rights", { Trade: 15, Peace: 8, "Fish Stocks": -5 }), sa("Sanctions", "⚠️", "Punish violations", { Compliance: 12, Peace: -8, Trade: -5 })]
  }},
  "ocean-carbon-credit": { type: "simulation", title: "Ocean Carbon Credit Market", emoji: "📈", config: {
    variables: [si("Credits", "💳", 20), si("Integrity", "✅", 40), si("Revenue", "💰", 30), si("Impact", "🌍", 30)],
    rounds: 10, winText: "Build a credible blue carbon market!",
    actions: [sa("Register Projects", "📋", "List blue carbon sinks", { Credits: 15, Impact: 8, Revenue: -5 }), sa("Verify", "✅", "Third-party audits", { Integrity: 15, Credits: 5, Revenue: -8 }), sa("Trade Platform", "💻", "Build exchange", { Revenue: 15, Credits: -3, Integrity: 3 }), sa("Expand Scope", "🌍", "More ecosystems", { Impact: 12, Credits: 8, Revenue: -5 })]
  }},
  "circular-plastic": { type: "simulation", title: "Plastic Circular Economy", emoji: "♻️", config: {
    variables: [si("Circularity", "♻️", 15), si("Waste", "🗑️", 75), si("Innovation", "🔬", 20), si("Budget", "💰", 50)],
    rounds: 10, winText: "Achieve 70% circularity!",
    actions: [sa("Recycling Plants", "🏭", "Build facilities", { Circularity: 12, Waste: -10, Budget: -12 }), sa("Bio-Materials", "🌿", "Plant-based alternatives", { Innovation: 15, Waste: -8, Circularity: 8, Budget: -10 }), sa("EPR Policy", "📜", "Producer responsibility", { Circularity: 10, Waste: -12, Budget: 5 }), sa("Consumer Campaign", "📢", "Change behavior", { Waste: -8, Circularity: 8, Budget: -5, Innovation: 3 })]
  }},
  "marine-heatwave": { type: "simulation", title: "Marine Heatwave Prediction", emoji: "🌡️", config: {
    variables: [si("Prediction Accuracy", "🎯", 30), si("Alert System", "🚨", 20), si("Budget", "💰", 50), si("Response Ready", "🛡️", 25)],
    rounds: 10, winText: "Build a marine heatwave defense system!",
    actions: [sa("Sensor Network", "📡", "Deploy ocean sensors", { "Prediction Accuracy": 15, Budget: -12, "Alert System": 8 }), sa("AI Models", "🤖", "Predictive algorithms", { "Prediction Accuracy": 12, Budget: -10, "Response Ready": 5 }), sa("Alert Protocol", "🚨", "Warning systems", { "Alert System": 15, "Response Ready": 10, Budget: -8 }), sa("Emergency Fund", "💰", "Reserve budget", { Budget: 15, "Response Ready": 8 })]
  }},
  "coastal-megacity": { type: "simulation", title: "Coastal Megacity Adaptation", emoji: "🏙️", config: {
    variables: [si("Resilience", "💪", 25), si("Population Safe", "👥", 50), si("Budget", "💰", 40), si("Green Infra", "🌿", 20)],
    rounds: 12, winText: "Protect the coastal city!",
    actions: [sa("Green Roofs", "🌿", "Urban vegetation", { "Green Infra": 15, Resilience: 8, Budget: -10 }), sa("Flood Barriers", "🧱", "Infrastructure", { Resilience: 15, "Population Safe": 10, Budget: -15 }), sa("Smart City", "💻", "Digital monitoring", { Resilience: 10, "Population Safe": 8, Budget: -12, "Green Infra": 3 }), sa("Community Plan", "👥", "Evacuation planning", { "Population Safe": 15, Budget: -5, Resilience: 5 })]
  }},
  "high-seas-treaty": { type: "simulation", title: "High Seas Biodiversity Treaty", emoji: "📋", config: {
    variables: [si("Consensus", "🤝", 30), si("Protection", "🛡️", 20), si("Enforcement", "⚖️", 15), si("Funding", "💰", 35)],
    rounds: 10, winText: "Secure high seas protection!",
    actions: [sa("Negotiate", "🗣️", "Multi-party talks", { Consensus: 15, Protection: 5, Funding: -5 }), sa("Designate Areas", "🗺️", "Protected zones", { Protection: 15, Consensus: -3, Funding: -8 }), sa("Coast Guard", "🚢", "Joint patrols", { Enforcement: 15, Funding: -12, Consensus: 5 }), sa("Green Fund", "💰", "Pool finances", { Funding: 18, Consensus: 5, Protection: 3 })]
  }},
  "ocean-tech": { type: "simulation", title: "Ocean Tech Innovation Lab", emoji: "🤖", config: {
    variables: [si("R&D", "🔬", 30), si("Products", "📦", 10), si("Funding", "💰", 50), si("Impact", "🌍", 20)],
    rounds: 10, winText: "Launch ocean-saving innovations!",
    actions: [sa("Research", "🔬", "Basic R&D", { "R&D": 15, Funding: -10, Impact: 3 }), sa("Prototype", "🏗️", "Build prototypes", { Products: 12, "R&D": -5, Funding: -10 }), sa("Launch Product", "🚀", "Go to market", { Products: 10, Funding: 10, Impact: 12, "R&D": -5 }), sa("Grant Writing", "📝", "Secure grants", { Funding: 18, "R&D": 5 })]
  }},
  "fisheries-collapse": { type: "simulation", title: "Climate Migration & Fisheries", emoji: "📉", config: {
    variables: [si("Food Security", "🍚", 40), si("Fish Stock", "🐟", 35), si("Migration", "🚶", 60), si("Aid Budget", "💰", 50)],
    rounds: 10, winText: "Prevent fisheries collapse!",
    actions: [sa("Emergency Ban", "🚫", "Stop all fishing", { "Fish Stock": 15, "Food Security": -12, Migration: 8, "Aid Budget": -5 }), sa("Food Aid", "🍚", "Distribute food", { "Food Security": 15, "Aid Budget": -12 }), sa("Aquaculture", "🏗️", "Build fish farms", { "Food Security": 10, "Fish Stock": 5, "Aid Budget": -10 }), sa("Relocate Fishers", "🚢", "New fishing grounds", { Migration: -10, "Food Security": 8, "Fish Stock": 3, "Aid Budget": -8 })]
  }},
  // === 17-18 ===
  "global-governance": { type: "simulation", title: "Global Ocean Governance", emoji: "🌐", config: {
    variables: [si("Governance", "🏛️", 20), si("Ocean Health", "🌊", 40), si("Cooperation", "🤝", 30), si("Funding", "💰", 40)],
    rounds: 12, winText: "Establish global ocean governance!",
    actions: [sa("UN Resolution", "🇺🇳", "Propose resolution", { Governance: 12, Cooperation: 8, Funding: -5 }), sa("Enforcement Body", "⚖️", "Create oversight", { Governance: 15, Cooperation: -5, Funding: -12 }), sa("Research Network", "🔬", "Global science", { "Ocean Health": 10, Cooperation: 10, Funding: -8 }), sa("Green Bonds", "💰", "Ocean finance", { Funding: 18, Governance: 3, "Ocean Health": 5 })]
  }},
  "climate-ocean-feedback": { type: "simulation", title: "Climate–Ocean Feedback Model", emoji: "🔄", config: {
    variables: [si("Temperature", "🌡️", 65), si("Ocean pH", "🧪", 45), si("Ice Cover", "🧊", 40), si("Biodiversity", "🦋", 50)],
    rounds: 12, winText: "Stabilize the climate-ocean system!",
    actions: [sa("Emissions Cut", "🏭", "Reduce greenhouse gases", { Temperature: -8, "Ocean pH": 5, Biodiversity: 5, "Ice Cover": 5 }), sa("Ocean Restore", "🌊", "Blue carbon projects", { "Ocean pH": 8, Biodiversity: 8, Temperature: -3 }), sa("Geo-engineering", "🔬", "Solar radiation mgmt", { Temperature: -12, "Ice Cover": 8, Biodiversity: -5 }), sa("Adaptation", "🛡️", "Build resilience", { Biodiversity: 10, "Ocean pH": 3, "Ice Cover": 3 })]
  }},
  "blue-economy": { type: "simulation", title: "Global Blue Economy Strategy", emoji: "💰", config: {
    variables: [si("Economy", "💰", 30), si("Sustainability", "🌿", 35), si("Innovation", "🔬", 25), si("Employment", "👥", 40)],
    rounds: 12, winText: "Build a sustainable blue economy!",
    actions: [sa("Marine Biotech", "🧬", "Bio-innovation sector", { Innovation: 15, Economy: 8, Sustainability: 8 }), sa("Shipping Reform", "🚢", "Green shipping", { Sustainability: 12, Economy: 5, Employment: 5 }), sa("Ocean Energy", "⚡", "Tidal/wave power", { Economy: 10, Innovation: 10, Sustainability: 10, Employment: 8 }), sa("Traditional Fishing", "🎣", "Support small fishers", { Employment: 15, Sustainability: 5, Economy: 3 })]
  }},
  "carbon-blue-integration": { type: "simulation", title: "Carbon + Blue Carbon Market", emoji: "🌿", config: {
    variables: [si("Integration", "🔗", 20), si("Market Value", "💰", 30), si("Credibility", "✅", 40), si("Coverage", "🗺️", 25)],
    rounds: 10, winText: "Unify carbon and blue carbon markets!",
    actions: [sa("Standards Merge", "📋", "Unified standards", { Integration: 15, Credibility: 8, "Market Value": 5 }), sa("Registry Platform", "💻", "Combined tracking", { Integration: 12, Coverage: 10, "Market Value": 8 }), sa("Verification", "✅", "Joint audits", { Credibility: 15, Integration: 5 }), sa("Expand Markets", "🌍", "New regions", { Coverage: 15, "Market Value": 10, Credibility: -5 })]
  }},
  "high-seas-negotiation": { type: "simulation", title: "High Seas Treaty Negotiation", emoji: "🤝", config: {
    variables: [si("Agreement", "📜", 20), si("Fairness", "⚖️", 40), si("Enforcement", "🛡️", 15), si("Ambition", "🎯", 30)],
    rounds: 10, winText: "Negotiate a fair high seas treaty!",
    actions: [sa("Propose Framework", "📋", "Draft agreement", { Agreement: 12, Ambition: 10, Fairness: -3 }), sa("Equity Clause", "⚖️", "Fair benefit sharing", { Fairness: 15, Agreement: 5, Ambition: -3 }), sa("Enforcement Plan", "⚖️", "Compliance mechanism", { Enforcement: 15, Agreement: -3, Fairness: 5 }), sa("Compromise", "🤝", "Bridge differences", { Agreement: 15, Fairness: 8, Ambition: -5 })]
  }},
  "biodiversity-collapse": { type: "simulation", title: "Biodiversity Collapse Scenario", emoji: "⚠️", config: {
    variables: [si("Biodiversity", "🦋", 30), si("Ecosystem", "🌊", 35), si("Emergency Fund", "💰", 50), si("Action Speed", "⚡", 20)],
    rounds: 8, winText: "Prevent marine biodiversity collapse!",
    actions: [sa("Emergency Reserves", "🗺️", "Emergency protected areas", { Biodiversity: 12, Ecosystem: 8, "Emergency Fund": -15, "Action Speed": 10 }), sa("Species Recovery", "🐋", "Breed endangered species", { Biodiversity: 15, "Emergency Fund": -12, Ecosystem: 5 }), sa("Pollution Halt", "🚫", "Emergency pollution stop", { Ecosystem: 15, "Action Speed": 8, "Emergency Fund": -10 }), sa("Global Alert", "🚨", "International emergency", { "Action Speed": 15, "Emergency Fund": 10, Biodiversity: 3 })]
  }},
  "arctic-strategic": { type: "simulation", title: "Arctic Ocean Strategic Sim", emoji: "🧊", config: {
    variables: [si("Geopolitics", "🌍", 40), si("Environment", "🧊", 45), si("Resources", "⛏️", 30), si("Security", "🛡️", 35)],
    rounds: 10, winText: "Navigate Arctic geopolitics!",
    actions: [sa("Arctic Council", "🤝", "Multilateral cooperation", { Geopolitics: 12, Security: 8, Environment: 5 }), sa("Resource Claim", "⛏️", "Claim Arctic resources", { Resources: 15, Geopolitics: -8, Environment: -8, Security: -5 }), sa("Conservation Zone", "🌿", "Environmental protection", { Environment: 15, Geopolitics: 5, Security: 5 }), sa("Military Presence", "🛡️", "Assert sovereignty", { Security: 15, Geopolitics: -5, Environment: -5, Resources: 5 })]
  }},
  "adaptation-finance": { type: "simulation", title: "Climate Adaptation Finance", emoji: "💵", config: {
    variables: [si("Funds Raised", "💰", 20), si("Distribution", "📊", 25), si("Impact", "🌍", 15), si("Transparency", "🔍", 30)],
    rounds: 10, winText: "Finance climate adaptation effectively!",
    actions: [sa("Green Bonds", "💎", "Issue climate bonds", { "Funds Raised": 15, Transparency: 5, Impact: 3 }), sa("Donor Conference", "🤝", "International pledges", { "Funds Raised": 12, Distribution: 5, Transparency: 8 }), sa("Direct Grants", "💰", "Fund local projects", { Distribution: 15, Impact: 12, "Funds Raised": -8 }), sa("Audit System", "📋", "Track spending", { Transparency: 15, Distribution: 8, "Funds Raised": -3 })]
  }},
  "ai-monitoring": { type: "simulation", title: "AI Ocean Monitoring", emoji: "🛰️", config: {
    variables: [si("Coverage", "🗺️", 20), si("Accuracy", "🎯", 30), si("Budget", "💰", 50), si("Response Time", "⏱️", 25)],
    rounds: 10, winText: "Build AI ocean monitoring network!",
    actions: [sa("Satellite Array", "🛰️", "Deploy satellites", { Coverage: 15, Accuracy: 8, Budget: -15 }), sa("AI Training", "🤖", "Train detection models", { Accuracy: 15, "Response Time": 8, Budget: -10 }), sa("Drone Fleet", "🛩️", "Automated drones", { Coverage: 10, "Response Time": 12, Budget: -12 }), sa("Partner Nations", "🤝", "Share data globally", { Coverage: 8, Budget: 10, Accuracy: 5, "Response Time": 5 })]
  }},
  "planetary-boundary": { type: "simulation", title: "Planetary Boundary Model", emoji: "🌍", config: {
    variables: [si("Ocean Boundary", "🌊", 45), si("Climate Boundary", "🌡️", 40), si("Biodiversity", "🦋", 35), si("Pollution", "🏭", 60)],
    rounds: 12, winText: "Keep all planetary boundaries safe!",
    actions: [sa("Systems Approach", "🔄", "Holistic management", { "Ocean Boundary": 8, "Climate Boundary": 8, Biodiversity: 8, Pollution: -5 }), sa("Emission Targets", "🎯", "Strict limits", { "Climate Boundary": 12, Pollution: -12, "Ocean Boundary": 5 }), sa("Conservation Action", "🌿", "Protect ecosystems", { Biodiversity: 15, "Ocean Boundary": 8, Pollution: -3 }), sa("Pollution Control", "🚫", "Reduce all pollution", { Pollution: -15, "Ocean Boundary": 8, Biodiversity: 5 })]
  }},
};
