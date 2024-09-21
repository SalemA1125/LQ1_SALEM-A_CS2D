// Persona 1 Data
const persona1 = {
  name: "Maria Delos Santos Las Marias",
  age: 25,
  address: "Upper Session Road, Baguio City, Benguet"
};

// Persona 2 Data
const persona2 = {
  name: "Juan Gamosso Dela Cruz",
  age: 28,
  address: "San Nicolas, Candon City, Ilocos Sur"
};

// Rearrange Name Sequence
function rearrangeName(name) {
  const nameParts = name.split(" ");
  return `${nameParts[nameParts.length - 1]} ${nameParts[0]} ${nameParts[1]}`;
}

const persona1RearrangedName = rearrangeName(persona1.name);
const persona2RearrangedName = rearrangeName(persona2.name);

// Console Log Output
console.log(`Name: ${persona1RearrangedName}, Age: ${persona1.age}, Address: ${persona1.address}`);
console.log(`Name: ${persona2RearrangedName}, Age: ${persona2.age}, Address: ${persona2.address}`);

// Variable Manipulations
const persona1NameLength = persona1.name.length;
const persona2NameLength = persona2.name.length;
const persona1AddressLength = persona1.address.length;
const persona2AddressLength = persona2.address.length;

// Operations
const sumOfAges = persona1.age + persona2.age;
const differenceNameLengths = persona1NameLength - persona2NameLength;
const productNameLengthAndAddressLength = persona1NameLength * persona2AddressLength;
const powerOfAddress = Math.pow(persona1AddressLength, persona2AddressLength);

// Print Results
console.log(`Sum of ages: ${sumOfAges}`);
console.log(`Difference of name lengths: ${differenceNameLengths}`);
console.log(`Product of name length and address length: ${productNameLengthAndAddressLength}`);
console.log(`Persona 1's address length raised to the power of Persona 2's address length: ${powerOfAddress}`);
