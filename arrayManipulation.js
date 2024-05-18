
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

function formatArrayStrings(stringsArr, processedArr) {
    return stringsArr.map((str, index) => {
        return processedArr[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

module.exports = {
    processArray,
    formatArrayStrings
};
