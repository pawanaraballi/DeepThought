/*
Regex operation for +, * and ? Example aab? and aa returns true
*/

/**
 * Function creates 
 * @param {*} s Input string
 * @param {*} p Pattern String
 */
function isMatch(s, p) {
    let i  = 0, j = 0, prev = '';
    while(i < s.length) {
        if (j < p.length) {
            if (s.charAt(i) === p.charAt(j)) {
                i++;
                j++;
                prev = s.charAt(i);
            }
            if (p.charAt(j) === '+'){
                while(prev === s.charAt(i)) {
                    i++;
                }
                j++;
            }
            if (p.charAt(j) === '*'){
                while(prev === s.charAt(i)) {
                    i++;
                }
                j = j+2;
            }
        }
        if ( j >= p.length ) {
            return false;
        }
    }
    if (p.length - j + 1 >= 2 && p.charAt(j+1) === '*') {
        j = j + 2;
    }
    if (p.charAt(j) === '?' || p.charAt(j+1) === '?'){
        return true;
    }

    return  j === p.length;
}

console.log(isMatch('', 'a*b?'));