/*
10. Regular Expression Matching
Question:
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.

Example:
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false



/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  for (let i = 0; i < p.length; i++) {
    console.log(i,p[i]);
    if (s.length === 0) {
      console.log('no s')
      return false;
    }
    if (p[i] === '*' && i === 0) {
      continue;
    }
    if (p[i] === '.') {
      if (p[i + 1] && p[i + 1] === '*') {
        if (!p[i + 2]) {
          return true;
        } else {
          let first;
          let last;
          for (j = i + 2; j < p.length; j++) {
            if (p[j] !== '.' || p[j] !== '*') {
              !first && (p[j + 1] && p[j + 1] !== '*') || (!p[j + 1]) ? first = j : '';
              first && !last && j !== first ? last = j : '';
              if (last) {
                break;
              }
            }
          }

          if (!last) {
            s = s.substring(s.lastIndexOf(p[first]));
          } else {
            let search = '';
            for (k = first; k <= last; k++) {
              search = search + p[k];
            }
            s = s.substring(s.search(search));
          }
        }

      } else {
        s = s.slice(1);
      }
    } else {
      console.log(i,p[i]);
      if (p[i + 1] && p[i + 1] === '*') {
        while (s[0] === p[i]) {
          s = s.slice(1);
        }
        i = i + 1;
      } else {
        if (s[0] !== p [i]) {
          console.log('sb')
          return false;
        } else {
          s = s.slice(1);
        }
      }
    }
  }
  console.log('jj',s)
  return s.length === 0;
};
// console.log(isMatch('aa', 'a'));
// console.log(isMatch('aa', 'aa'));
// console.log(isMatch('aa', 'a*'));
// console.log(isMatch('aab', 'c*a*b'));
// console.log(isMatch('mississippi', '*.'));
console.log(isMatch('a', 'a*a')); // true


