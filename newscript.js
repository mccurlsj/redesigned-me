//Exercise to return numbers 1-9 as a written word and if a number is larger than 10, return the written statement.  This is all done in the Console.

// actual  conversion code starts here

var ones=['1','2','3','4','5','6','7','8','9'];

var tens=['10'];

var statement=['This number is greater than 10'];


function numberToEnglish( n ) {
        if (n === '0') {
            return 'zero';
        }
        
        if (n > 9) {
            return "This number is greater than 10";
        }
}

function transformToEnglish(numToTransform) { 
    var englishNamesofNumbers = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
        return englishNamesofNumbers[numToTransform];
}

