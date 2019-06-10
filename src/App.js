import React from 'react';

const a = [4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], k = 4;

const arrayPrinting = (a, k) => {
    //Setting bounderies
    //N is an integer within the range [1..200] - length of array and if no exiting the function
    if(a.length === 0 || a.length > 200) {
        console.log("Array has no elements or more than 200 elements");
        return;
    }

    //k is not an integer within the range [1..1,000,000,000] - break, or k is not an integer, or k is greater than the length of array exiting the function
    if( k < 1 || k > 10000000 || !Number.isInteger(k) || k > a.length) {
        console.log("Break - k is smaller than 1 or has value greater than 1000000, or k is not an integer, or k is greater than the length of array, therefore array cannot be divided into rows");
        return;
    } 

    //Element of array a is an integer within the range [0..1,000,000,000], if no exiting the function
    for(let i = 0; i < a.length; i++){
        if(a[i] < 0 || a[i] > 1000000  || !Number.isInteger(a[i])){
            console.log("There are other types of elements other than integer within array, or are smaller than 1 or are greater than 1000000");
            return;
        }
    }

    //Creating subsetArray
    let subsetArray = [];
    let temparray;

    const chunk = k;
    //Looping through a array and injecting chunks-temparray into subsetArray
    for (let i = 0;  i < a.length; i += chunk) {
        temparray = a.slice(i, i + chunk);
        subsetArray.push(temparray);
    }
    console.log(subsetArray);
}

const App = () => {
    return (
        <div>
            {arrayPrinting(a, k)}
        </div>
    );
}

export default App;
