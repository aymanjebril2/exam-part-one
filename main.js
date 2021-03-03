/*

Part 1: 30%, you must create a repo for part 1, separate from part 2
 
Why does React utilize the virtual-dom?
In React every UI piece is a component, and each component has a state.
 React follows the observable pattern and listens for state changes. 
 When the state of a component changes, React updates the virtual DOM tree.
  Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. 
  This process is called “diffing”.
Once React knows which virtual DOM objects have changed, 
then React updates only those objects, in the real DOM. 
This makes the performance far better when compared to manipulating the real DOM directly. 
This makes React standout as a high performance JavaScript library.
 
 
2a How is data flowed in React? 2b. Why is React architected this way?
 data flow  from (top to bottom / parent to child)
 - Pass data in using default props
 -Pass data down from parent to child components
 - Map state to props using react-redux
 2b-  to make sure you are following a clean data flow architecture. 
 The major benefit of this approach is that data flows throughout
  your app in a single direction and you have better control over it 
 
3. What is the purpose for lifting state up in React? Give an example of this

by Lifting up the state we make the state of the parent component as a single source of truth 
and pass the data of the parent in its children
 for 
 Example if we have A , and B  and C components 
  and B have data and want share it with C we have to lifting state to A  can be have share the data 
        A
       / \
      B   C
 
4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.
it make cheaper for startup in server to not make a lot of request and save them money 
in react router make one request and save it on the clints 
 
5. Can browsers read JSX? Why?
web browsers cant read it directly 
 if JavaScript files contains JSX, that that file will have to be transpiled. That means that before the file gets to the web browser,
  a JSX compiler will translate any JSX into regular JavaScript
  render on react 
 
6. What is the significance of keys in React? 
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
 
7. What is the difference between Props and State?
Image result for What is the difference between Props and State?
Image result for What is the difference between Props and State?
Image result for What is the difference between Props and State?
Image result for What is the difference between Props and State?
View all
"props" (short for "properties") is an object of arbitrary inputs a React function component accepts as the first argument. "state" is data that changes over the lifetime of a specific instance of a React component.
 
8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 
 
Babel Input: ES2015 arrow function
[1, 2, 3].map( n => n + 1 )
 
Babel Output: ES5 equivalent
[1,2,3].map(function(n) {
Return n + 1;
})
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
 
9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map() 
Show 3 test runs, with at least 2 edge cases. 
*/
function captelName(names) {
  return names.map((name) => name.toUpperCase());
}
console.log(captelName("ayman"));

/*
10. Given an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
Show 3 test runs, with at least 2 edge cases. 
Function smallWordsOnly(arr) {
    return arr.filter(function(name) { 
    return name.length < 6;
 
} 



*/

function smallWordsOnly(arr) {
  return arr.filter((name) => {
    name.length < 6;
  });
}
