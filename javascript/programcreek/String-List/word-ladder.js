/*
Given two words (start and end), and a dictionary, find the length of shortest transformation sequence from start to end, such that only one letter can be changed at a time and each intermediate word must exist in the dictionary. For example, given:

start = "hit"
end = "cog"
dict = ["hot","dot","dog","lot","log"]
One shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", the program should return its length 5.
*/

/**
 * create a word ladder to tranform into another word by just changing on letter in the word
 * @param {*} beginWord begining word for the ladder
 * @param {*} endWord end word for the ladder
 * @param {*} wordDict Set which acts as a dictionary
 */
function wordLadder(beginWord, endWord, wordDict) {
    const queue = [];
    queue.push({
        word: beginWord,
        len: 1
    });
    wordDict.add(endWord);
    console.log('Path for the ladder');
    while(queue.length > 0) {
        const top = queue.shift();
        console.log(top.word);
        if (top.word === endWord) return top.len;
        const arr = top.word.split('');
        for (let i in arr) {
            for (let ch='a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++) {
                const temp = arr[i];
                if (arr[i] !== String.fromCharCode(ch)) arr[i] = String.fromCharCode(ch);
                const newString = arr.join('');
                if (wordDict.has(newString)) {
                    queue.push({
                        word: newString,
                        len: top.len + 1
                    });
                    wordDict.delete(newString);
                }
                arr[i] = temp;
            }
        }
    }
    return 0;
}

console.log('The length of the ladder:', wordLadder('hit', 'cog', new Set(['hot','dot','dog','lot','log'])));