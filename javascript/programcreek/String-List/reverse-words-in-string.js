/*
Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

The input string does not contain leading or trailing spaces and the words are always separated by a single space.

For example,
Given s = "the sky is blue",
return "blue is sky the".
*/


/**
 * reverse the word
 * @param {*} str the sentence with space delimiter 
 */
function reverseWords(str) {
    let l = str.trim().split(' ');
    let i = 0, j = l.length -1;
    while(i < j) {
        [l[i], l[j]] = [l[j], l[i]];
        i++;
        j--;
    }
    return l.join(' ');
}

console.log(reverseWords('the sky is blue'));