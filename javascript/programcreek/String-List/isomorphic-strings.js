/*
Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if the characters in s can be replaced to get t.

For example,"egg" and "add" are isomorphic, "foo" and "bar" are not.
*/

function isomorphicStrings(s, t) {
    if (s === null || s === '' || t === null || t === '' || s.length !== t.length) return false;

    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        const c1 = s.charAt(i);
        const c2 = t.charAt(i);
        if (map.has(c1)) {
            if(map.get(c1) !== c2) return false;
        } else {
            for (let val of map.values()) {
                if ( val === c2) return false;
            }
            map.set(c1, c2);
        }
    }
    return true;
}

console.log(isomorphicStrings('egg', 'aps'));