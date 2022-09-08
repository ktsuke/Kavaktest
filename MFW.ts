/*
Most frequent word
Given a string named “paragraph” and a list of strings named “forbidden words”, the most frequent word within the paragraph that is not in the forbidden words list should be returned.

Only one word should return and this word can’t be a forbidden word. The words within the paragraph are not case sensitive and the answer must be in lower case.


Example # 1:
Input:

paragraph = “Bob hit a ball, the hit BALL flew long after it was hit.“, forbiddenWords = [“hit”]

Output: “ball”


Explanation:
“hit” shows up 3 times, but it's a forbidden word.

“ball” shows up 2 times (and it's the only word that shows up 2 times), therefore this is the most frequent word.

Have in mind that the words in the paragraph don’t distinguish upper case from lower case and the accentuation is ignored.

For example, “ball” and “BALL” are the same word.

Example # 2:
Input:

paragraph = “a.“, forbiddenWords = []

Output: “a”

Constraints:
1 <= paragraph.length <= 1000

The paragraph has alphabet letters, spaces and these special symbols: “!?’,;.”

0 <= forbiddenWords.length <= 100

1 <= forbiddenWords[i].length <= 10

forbiddenWords[i] is a list of words in lower case that contain only alphabet letters (a-z)
*/

let paragraph = "Bob hit a ball, the hit BALL flew long after it was hit.";
let forbidden_words = ["hit"];
let topSting;
let topStingCont = 0;
let cont = 0;
if(paragraph.length > 1000){
    paragraph = paragraph.slice(0,1000);
}
paragraph = paragraph.toLowerCase();
let change = paragraph.split(' ').join(',').split('!').join(',').split('?').join(',').split("'").join(',').split(',').join(',').split(';').join(',').split('.').join('\n').split('\r');
for(let word of change){
    if(forbidden_words.includes(word)){
        continue;
    }
    else{
       let mach = paragraph.match(word);
       cont = mach.length;
       if (cont>topStingCont){
        topSting = word;
        topStingCont = cont;
       }
    }
    cont = 0;
} 
return topSting;
