/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string
  You can assume the key will exist on the object and the value of that key will be a string
  Bonus: make the search case insensitive
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

const people1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "Jojo",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];

const searchFor1 = "jo";
const searchBy1 = "firstName";
const expected1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];

const searchFor2 = "ed";
const searchBy2 = "firstName";
const expected2 = [];
// Tip: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
];

// console.log(people1[0].firstName.toLowerCase().includes(searchFor1));
// console.log(searchFor1);
/* -------------------------------------------------------------------------------------------- */
/**
 * Filters the given items based on the search criteria using a startsWith
 * search method.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchBy The key to search by.
 * @param {string} searchFor The value of the given key to search for.
 * @returns {Array<Objects>} The matched items.
 */
// console.log(people1.map((key) => key.firstName));

//string methods: includes, startsWith, endsWith
function filterByKey(items, searchFor, searchBy, searchMethod) {
  const keys = items.map((item) =>
    Object.keys(item)[0] == searchBy
      ? item.firstName.toLowerCase()
      : Object.keys(item)[1] == searchBy
      ? item.lastName.toLowerCase()
      : "End Of the Line"
  );
  const filtered = keys.filter((item) =>
    searchMethod == "includes" ? item.includes(searchFor) : null
  );

  return filtered;
}

function filterByKey2(items, searchFor, searchBy, searchMethod) {
  const keys = items.map((item) =>
    Object.keys(item)[0] == searchBy
      ? item.firstName.toLowerCase()
      : Object.keys(item)[1] == searchBy
      ? item.lastName.toLowerCase()
      : "End Of the Line"
  );
  const filtered = keys.filter((item) =>
    searchMethod == "startsWith" ? item.startsWith(searchFor) : null
  );
  return filtered;
}

function filterByKey3(items, searchFor, searchBy, searchMethod) {
  const keys = items.map((item) =>
    Object.keys(item)[0] == searchBy
      ? item.firstName.toLowerCase()
      : Object.keys(item)[1] == searchBy
      ? item.lastName.toLowerCase()
      : "End Of the Line"
  );
  const filtered = keys.filter((item) =>
    searchMethod == "endsWith" ? item.endsWith(searchFor) : null
  );
  return filtered;
}

// filterByKey(people1, searchFor1, searchBy1, "includes");
// console.log(filterByKey(people1, searchFor2, searchBy2, "includes"));

// filterByKey(people1, searchFor3, searchBy3, "includes");
// filterByKey(people1, searchFor4, searchBy4, searchMethod4);

// console.log(filterByKey2(people1, searchFor1, searchBy1, "startsWith"));
// console.log(filterByKey2(people1, searchFor2, searchBy2, "startsWith"));
// console.log(filterByKey2(people1, searchFor3, searchBy3, "startsWith"));
// console.log(filterByKey2(people1, searchFor4, searchBy4, searchMethod4));

// console.log(filterByKey3(people1, searchFor1, searchBy1, "endsWith"));
// console.log(filterByKey3(people1, searchFor2, searchBy2, "endsWith"));
// console.log(filterByKey3(people1, searchFor3, searchBy3, "endsWith"));
// console.log(filterByKey3(people1, searchFor4, searchBy4, searchMethod4));
