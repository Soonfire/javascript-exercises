const palindromes = function (string) {
    const savedString = string.toLowerCase()
                            .replace(/[^a-z]/g, "")
        let reversedString = string.split("")
                .reverse()
                .join("")
                .toLowerCase()
                .replace(/[^a-z]/g, "")
            if (savedString === reversedString) return true
            else return false
};

// Do not edit below this line
module.exports = palindromes;
