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

// USE AN ARRAY METHOD TO ADD THE STRING 'Programming' TO THE BEGINNING OF THE ARRAY
secretMessage.unshift('Programming');

// USE AN ARRAY METHOD TO REMOVE THE STRINGS 'get', 'right', 'the', 'first', 'time', AND REPLACE THE WITH THE SINGLE STRING 'know'
secretMessage.splice(6, 5, 'know');