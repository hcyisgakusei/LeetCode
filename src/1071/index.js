/*
1071. Greatest Common Divisor of Strings（easy）

 Question:
 For strings S and T, we say "T divides S" if and only if S = T + ... + T
 (T concatenated with itself 1 or more times)
  Return the largest string X such that X divides str1 and X divides str2.

 Example 1:
 Input: str1 = "ABCABC", str2 = "ABC"
 Output: "ABC"

 Example 2:
 Input: str1 = "ABABAB", str2 = "ABAB"
 Output: "AB"

 Example 3:
 Input: str1 = "LEET", str2 = "CODE"
 Output: ""
 */


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
    const str1Length = str1.length, str2Length = str2.length;
    const commonDivisorLength = gcd(str1Length, str2Length);
    function gcd(num1, num2) {
        if (num1 === num2) {
            return num1;
        }
        if (num1 > num2) {
            return gcd(num1 - num2, num2);
        }
        return gcd(num2 - num1, num1);
    }
    function check(str, common) {
        const times = str.length / common.length;
        let result = '';
        for (let i = 0; i < times; i++) {
            result += common;
        }
        return str === result;
    }
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    let commonDivisor = str1.substring(0, commonDivisorLength);
    return check(str1, commonDivisor) && check(str2, commonDivisor) ? commonDivisor : "";
    // if (str1Length % commonDivisorLength !== 0 || str2Length % commonDivisorLength !== 0) {
    //     return "";
    // }
    // let commonDivisor = str1.substring(0, commonDivisorLength);
    // while (str1 || str2) {
    //     if ((!str1 || str1.substring(0, commonDivisorLength) === commonDivisor) &&
    //         (!str2 || str2.substring(0, commonDivisorLength) === commonDivisor)) {
    //         str1 = str1.substring(commonDivisorLength);
    //         str2 = str2.substring(commonDivisorLength);
    //     } else {
    //         return "";
    //     }
    // }
    // return commonDivisor;
};
console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABCACB", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("ABABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));