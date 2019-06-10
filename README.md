1. First of all were set bounderies to exit the function in cases:

-Number of elements in array is 0(array is empty) or greater than 200
-Break for the row - k is smaller than 1 and greater than 1000000 or k is not an integer or k is greater than the length of array
-If element of array is not an integer or is smaller than 1 and greater than 1000000

2. After that is being checked the element of the array with largest number of digits.

3. Is being created new array subsetArray with elements that are arrays which length is based on k - break.

4. After that is being checked the element of the array with the largest number of digits within a array, in order to define the cell width.

5. Is being defined upper border for each row of the table preview by using + and - sign, inbuilt JS method repeat() and template literals. 

6. Is being defined bottom border for the last row of the table preview by using + and - sign, inbuilt JS method repeat() and template literals, by calculating the length of the last element-subarray of array a.

7. It is being defined the content of the table between upper borders. Looping through double nested 2 for loops for that.
i represents parameter for looping through elements of subsetArray and j represents parameter for looping through subarrays - elements of subsetArray. Defining of content is done by putting it into temporaryContent let variable by using |, using spaces which number is defined by substraction from the element with the greatest number of digits, length of digits of current element. inbuilt JS method repeat() is used to repeat spaces from left border | to right. After second for loop in outputString is being injected upper border, than the content, and after 
exiting double nested for loops is added bottom border to outputString by using template literals.

8. At the end, the function is outputing outputString in console by using process.stdout.write() or console.log() if you uncomment it.
In JSX is being invoked automatically arrayPrinting when added () with input parameters a and k state variables.



