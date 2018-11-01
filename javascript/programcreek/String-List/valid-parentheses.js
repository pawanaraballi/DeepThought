/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * Function reads the input and validates whether the input string is having valid parentheses
 * @param {*} s string with parentheses
 */
function validParentheses(s) {
    const list = s.split('');
    const stack = [];
    // Initiaze the map
    const map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');
    for (let curr of list) {
        if(map.has(curr)) {
            stack.push(curr);
        } else if (Array.from(map.values()).includes(curr)){
            if (stack.length > 0 && map.get(stack[stack.length - 1]) === curr) {
                stack.pop();
            } else  {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validParentheses('[[[]]]{}()'));