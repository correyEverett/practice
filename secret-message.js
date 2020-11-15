let secretMessage = [
    'Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily',
    'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you',
    'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'
];

// REMOVE THE LAST STRING FROM THE ARRAY
secretMessage.pop();

// ADD THE WORDS 'to' AND 'Program' TO THE ARRAY
secretMessage.push('to', 'Program');

// CHANGE THE WORD 'easily' TO THE WORD 'right' BY ACCESSING THE INDEX AND REPLACING IT
secretMessage[7] ='right';

// USE AN ARRAY METHOD TO REMOVE THE FIRST STRING FROM THE ARRAY
secretMessage.shift();