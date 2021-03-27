// Node modules.
const _ = require("lodash");
const fetch = require("node-fetch");
const { SiteClient } = require("datocms-client");
// Relative imports.
const ABILITY_FEATURES = require("../data/ABILITY_FEATURES");
const BACKGROUNDS = require("../data/BACKGROUNDS");
const CORE_ABILITIES = require("../data/CORE_ABILITIES");
const CORE_IDENTITIES = require("../data/CORE_IDENTITIES");
const FEATURE_OPTIONS = require("../data/FEATURE_OPTIONS");
const IDENTITY_FEATURES = require("../data/IDENTITY_FEATURES");
const LANGUAGES = require("../data/LANGUAGES");
const PERKS = require("../data/PERKS");
const RACES = require("../data/RACES");
const SUBRACES = require("../data/SUBRACES");
const { DATO_CMS_WRITE_ACCESS_API_KEY } = require("../env");

// Derive the Dato CMS SDK.
const client = new SiteClient(DATO_CMS_WRITE_ACCESS_API_KEY);

async function importAbilityFeatures() {
  for (const abilityFeature of ABILITY_FEATURES) {
    await client.items.create({
      itemType: "625038",
      description: abilityFeature.description,
      level: abilityFeature.level,
      name: abilityFeature.name,
      requirements: abilityFeature.requirements,
    });
  }
}

async function importBackgrounds() {
  for (const background of BACKGROUNDS) {
    await client.items.create({
      itemType: "625039",
      abilityBoostChoice: background.abilityBoostChoice,
      freeAbilityBoost: background.freeAbilityBoost,
      loreAdvantage: background.loreAdvantage,
      name: background.name,
      trainedSkill: background.trainedSkill,
    });
  }
}

async function importCoreAbilities() {
  for (const coreAbility of CORE_ABILITIES) {
    await client.items.create({
      itemType: "624920",
      description: coreAbility.description,
      name: coreAbility.name,
    });
  }
}

async function importCoreIdentities() {
  for (const coreIdentity of CORE_IDENTITIES) {
    await client.items.create({
      itemType: "624917",
      healthAtFirstLevel: coreIdentity.healthAtFirstLevel,
      healthBeyondFirstLevel: coreIdentity.healthBeyondFirstLevel,
      initialProficiencies: coreIdentity.initialProficiencies,
      name: coreIdentity.name,
      startingEquipment: coreIdentity.startingEquipment,
    });
  }
}

async function importFeatureOptions() {
  for (const featureOption of FEATURE_OPTIONS) {
    await client.items.create({
      itemType: "624921",
      description: featureOption.description,
      instanceType: featureOption.instanceType,
      name: featureOption.name,
    });
  }
}

async function importIdentityFeatures() {
  for (const identityFeature of IDENTITY_FEATURES) {
    await client.items.create({
      itemType: "624916",
      name: identityFeature.name,
      identity: identityFeature.identity,
      requirements: identityFeature.requirements,
      description: identityFeature.description,
      firstLevelSpells: identityFeature.firstLevelSpells,
      secondLevelSpells: identityFeature.secondLevelSpells,
      thirdLevelSpells: identityFeature.thirdLevelSpells,
      fourthLevelSpells: identityFeature.fourthLevelSpells,
      fifthLevelSpells: identityFeature.fifthLevelSpells,
    });
  }
}

async function importLanguages() {
  for (const language of LANGUAGES) {
    await client.items.create({
      itemType: "625040",
      name: language.name,
    });
  }
}

async function importPerks() {
  for (const perk of PERKS) {
    await client.items.create({
      itemType: "624919",
      description: perk.description,
      name: perk.name,
      requirements: perk.requirements,
    });
  }
}

async function importRaces() {
  for (const race of RACES) {
    await client.items.create({
      itemType: "624915",
      ability: race.ability,
      burrowSpeed: race.burrowSpeed,
      climbSpeed: race.climbSpeed,
      flySpeed: race.flySpeed,
      hitPoints: race.hitPoints,
      landSpeed: race.landSpeed,
      languages: race.languages.join(", "),
      name: race.name,
      size: race.size,
      swimSpeed: race.swimSpeed,
    });
  }
}

async function importSubraces() {
  for (const subrace of SUBRACES) {
    await client.items.create({
      itemType: "624918",
      description: subrace.description,
      name: subrace.name,
      penalty: subrace.penalty,
      requirements: subrace.requirements,
    });
  }
}

importAbilityFeatures();
importBackgrounds();
importCoreAbilities();
importCoreIdentities();
importFeatureOptions();
importIdentityFeatures();
importLanguages();
importPerks();
importRaces();
importSubraces();
