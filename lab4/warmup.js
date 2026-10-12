
console.log("7" + 3);          // Prediction: "73"
console.log("7" - 3);          // Prediction: 4
console.log(7 + 3 + "1");      // Prediction: "101"
console.log("7" * "2");        // Prediction: 14
console.log(10 / 3);          // Prediction: 3.333...
console.log(typeof null);     // Prediction: "object"
console.log(typeof NaN);      // Prediction: "number"
console.log(Boolean("false"));// Prediction: true
console.log(Boolean("0"));    // Prediction: true
console.log(0 || "fallback"); // Prediction: "fallback"
console.log(0 ?? "fallback"); // Prediction: 0
console.log("" || "empty");   // Prediction: "empty"
console.log("10" == 10);      // Prediction: true
console.log("10" === 10);     // Prediction: false
console.log(Number("12abc")); // Prediction: NaN
console.log(parseInt("12abc"));// Prediction: 12
console.log(" hi ".trim());   // Prediction: "hi"
console.log("cat".includes("a")); // Prediction: true

// Surprising result:
// Boolean("false") is true because any non-empty string is truthy.
