const { processArray, formatArrayStrings } = require('./arrayManipulation');
const createUserProfiles = require('./userInfo');

const numbers = [1, 2, 3, 4, 5];
const strings = ['red', 'orange', 'yellow', 'green', 'blue'];

const processedArray = processArray(numbers);
console.log('Processed Array:', processedArray);

const formattedStrings = formatArrayStrings(strings, processedArray);
console.log('Formatted Strings:', formattedStrings);

const names = ['Ama', 'Akosua', 'Adwoa', 'Abena', 'Akua'];
const profiles = createUserProfiles(names, formattedStrings);

console.log('User Profiles:', profiles);
