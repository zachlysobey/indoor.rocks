import type { Address, ClimbingGym } from "./dataModel";

// The countries the gym list covers, each with its regions (states, provinces) alphabetical by name.
// Codes are ISO 3166: a country's is its 3166-1 alpha-2 code, and a region's is its 3166-2 code
// without the country prefix, so it is unique only within its country ("WA" is both Washington and
// Western Australia). A gym's address.country and address.region are these codes. A gym in a region
// missing here gets a pin on the map but no place in the list; regions.test.ts checks all of this.
export const countries = [
  {
    code: "US",
    name: "United States",
    regions: [
      { code: "AL", name: "Alabama" },
      { code: "AK", name: "Alaska" },
      { code: "AZ", name: "Arizona" },
      { code: "AR", name: "Arkansas" },
      { code: "CA", name: "California" },
      { code: "CO", name: "Colorado" },
      { code: "CT", name: "Connecticut" },
      { code: "DE", name: "Delaware" },
      { code: "DC", name: "District of Columbia" },
      { code: "FL", name: "Florida" },
      { code: "GA", name: "Georgia" },
      { code: "HI", name: "Hawaii" },
      { code: "ID", name: "Idaho" },
      { code: "IL", name: "Illinois" },
      { code: "IN", name: "Indiana" },
      { code: "IA", name: "Iowa" },
      { code: "KS", name: "Kansas" },
      { code: "KY", name: "Kentucky" },
      { code: "LA", name: "Louisiana" },
      { code: "ME", name: "Maine" },
      { code: "MD", name: "Maryland" },
      { code: "MA", name: "Massachusetts" },
      { code: "MI", name: "Michigan" },
      { code: "MN", name: "Minnesota" },
      { code: "MS", name: "Mississippi" },
      { code: "MO", name: "Missouri" },
      { code: "MT", name: "Montana" },
      { code: "NE", name: "Nebraska" },
      { code: "NV", name: "Nevada" },
      { code: "NH", name: "New Hampshire" },
      { code: "NJ", name: "New Jersey" },
      { code: "NM", name: "New Mexico" },
      { code: "NY", name: "New York" },
      { code: "NC", name: "North Carolina" },
      { code: "ND", name: "North Dakota" },
      { code: "OH", name: "Ohio" },
      { code: "OK", name: "Oklahoma" },
      { code: "OR", name: "Oregon" },
      { code: "PA", name: "Pennsylvania" },
      { code: "RI", name: "Rhode Island" },
      { code: "SC", name: "South Carolina" },
      { code: "SD", name: "South Dakota" },
      { code: "TN", name: "Tennessee" },
      { code: "TX", name: "Texas" },
      { code: "UT", name: "Utah" },
      { code: "VT", name: "Vermont" },
      { code: "VA", name: "Virginia" },
      { code: "WA", name: "Washington" },
      { code: "WV", name: "West Virginia" },
      { code: "WI", name: "Wisconsin" },
      { code: "WY", name: "Wyoming" },
    ],
  },
  {
    code: "CA",
    name: "Canada",
    regions: [
      { code: "AB", name: "Alberta" },
      { code: "BC", name: "British Columbia" },
      { code: "MB", name: "Manitoba" },
      { code: "NB", name: "New Brunswick" },
      { code: "NL", name: "Newfoundland and Labrador" },
      { code: "NS", name: "Nova Scotia" },
      { code: "ON", name: "Ontario" },
      { code: "PE", name: "Prince Edward Island" },
      { code: "QC", name: "Quebec" },
      { code: "SK", name: "Saskatchewan" },
      { code: "YT", name: "Yukon" },
    ],
  },
  {
    code: "MX",
    name: "Mexico",
    regions: [
      { code: "CHP", name: "Chiapas" },
      { code: "COA", name: "Coahuila" },
      { code: "JAL", name: "Jalisco" },
      { code: "CMX", name: "Mexico City" },
      { code: "NLE", name: "Nuevo León" },
      { code: "PUE", name: "Puebla" },
      { code: "QUE", name: "Querétaro" },
      { code: "ROO", name: "Quintana Roo" },
      { code: "MEX", name: "State of Mexico" },
      { code: "YUC", name: "Yucatán" },
    ],
  },
];

// A region's full ISO 3166-2 code, unique across countries: "US-WA", "AU-WA".
export const regionId = ({ country, region }: Pick<Address, "country" | "region">): string =>
  `${country}-${region}`;

// Every region, in country order, keyed by its regionId.
export const regions = countries.flatMap(country =>
  country.regions.map(region => ({ ...region, id: regionId({ country: country.code, region: region.code }) })),
);

// The gyms by country, then region, in the order above, leaving out any place without one.
export const gymsByCountry = (gyms: ClimbingGym[]) =>
  countries
    .map(country => {
      const groups = country.regions
        .map(region => {
          const id = regionId({ country: country.code, region: region.code });
          return { id, name: region.name, gyms: gyms.filter(gym => regionId(gym.address) === id) };
        })
        .filter(group => group.gyms.length > 0);
      const gymCount = groups.reduce((sum, group) => sum + group.gyms.length, 0);
      return { id: country.code, name: country.name, gymCount, regions: groups };
    })
    .filter(country => country.gymCount > 0);
