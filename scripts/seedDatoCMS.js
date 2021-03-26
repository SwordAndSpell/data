// Node modules.
const _ = require("lodash");
const fetch = require("node-fetch");
const uuidv4 = require("uuid/v4");
const { SiteClient } = require("datocms-client");
// Relative imports.
const { MODELS } = require("../legacy_data");
const { DATO_CMS_WRITE_ACCESS_API_KEY } = require("../env");

// Derive the Dato CMS SDK.
const client = new SiteClient(DATO_CMS_WRITE_ACCESS_API_KEY);

const data = [
  {
    id: 1,
    breed: "Alapaha Blue Blood Bulldog",
    bred_for: "Guarding",
    category: "Mixed",
    description:
      "The Alapaha Blue Blood Bulldog is a well-developed, exaggerated bulldog with a broad head and...",
    life_span: "12 - 13 years",
    image_url: "https://cdn2.thedogapi.com/images/kuvpGHCzm.jpg",
  },
  {
    id: 2,
    breed: "Alaskan Husky",
    bred_for: "Sled pulling",
    category: "Mixed",
    life_span: "10 - 13 years",
    image_url: "https://cdn2.thedogapi.com/images/uEPB98jBS.jpg",
  },
  {
    id: 3,
    breed: "Alaskan Malamute",
    bred_for: "Hauling heavy freight, Sled pulling",
    category: "Working",
    life_span: "12 - 15 years",
    image_url: "https://cdn2.thedogapi.com/images/aREFAmi5H.jpg",
  },
];

async function importDogBreeds() {
  const categories = data.map((dogBreed) => dogBreed.category);
  const uniqueCategories = uniq(categories);
  const categoryNameToRecord = {};
  for (let categoryName of uniqueCategories) {
    categoryNameToRecord[name] = await client.items.create({
      itemType: "<CATEGORY-MODEL-ID>",
      name,
    });
  }
  for (let dogBreed of dogBreeds) {
    const image = await client.uploadFile(dogBreed.image_url, {
      defaultFieldMetadata: {
        en: {
          alt: `${dogBreed} dog`,
        },
      },
      notes: `Imported from external source`,
    });
    categoryNameToRecord[name] = await client.items.create({
      itemType: "<DOG-BREED-MODEL-ID>",
      name: externalData.breed,
      category: categoryNameToRecord[dogBreed.category].id,
      breed_for: externalData.breed_for,
      description: externalData.description,
      image,
    });
  }
}

importDogBreeds();
