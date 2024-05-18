let userId = 1;
function createUserProfiles(namesArr, modifiedNamesArr) {
    const profiles = [];
    namesArr.forEach((name, index) => {
        profiles.push({
            originalName: name,
            modifiedName: modifiedNamesArr[index],
            id: userId++
        });
    });
    return profiles;
}

module.exports = createUserProfiles;
