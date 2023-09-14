// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
const findMatching = (drivers, nameToMatch) => {
  const result = drivers.filter(
    (driver) => driver.toLowerCase() === nameToMatch.toLowerCase()
  );
  return result;
};
const fuzzyMatch = (drivers, letters) =>
  drivers.filter((driver) => driver.startsWith(letters));

const matchName = (drivers, name) =>
  drivers.filter((driver) => driver.name === name);

matchName();
