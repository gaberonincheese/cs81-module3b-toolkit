RESULTS

function double -- The result, when tested through the console, is that the given number was doubled. I also tested numbers like 0 and words. The former returned 0 and the latter returned NaN.

function square -- The result is that the given number was squared. There didn't seem to be any issues with larger numbers or negatives. When I mixed numbers and letters together, NaN was returned.

function isEven -- After testing, I determined that the function accurately determines if a number is even.

function isOdd -- The function accurately determines if a number is odd. Interestingly, I found that inputting letters instead of a number into the prompt leads to the function outputting "true". I think this is because so long as the value is not 0, the returned response will be true. I would need to take into consideration that numbers should be the only acceptable input received from the prompt.

function multiply -- Numbers were multiplied together as intended. When providing at least one invalid input, the function returned NaN. If one invalid input is given, I should consider catching it right from the get-go and reprompting the user until they give me a valid input.