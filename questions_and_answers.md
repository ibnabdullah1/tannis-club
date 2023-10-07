<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Write your explanation here : This code declares a variable named greeting, assigns an empty object to it, and logs the empty object, which is why the output is {}.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here:
Here the sum function has two parameters named a,b.
The function returns the sum of the values ​​of a+b.
Here value of a is 1 which is a number and value of b is "2" which is a string.
If you add a string to a number in javascript, then they sit side by side. So its answer will be "12" its type is string.So the correct answer is "C"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Write your explanation here:
The food variable is an Array. The favoriteFood food array points to the first index in the Info variable.
Later when a new value is assigned to info.favoriteFood, it does not affect the Food array.
So the food array remains unchanged.
So the correct answer is "A"
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here:
The correct answer is B
because,
In the given code, the sayHi function expects an argument name to be passed when it is called.
sayHi() is called with no arguments, it is undefined when no argument value is provided.
So, the output of console.log(sayHi()) will be "Hi there, undefined"
</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here:
The nums variable contains an array of numbers with four elements. Here the count variable is initialized with 0.
The loop is executed over nums. Adds the value of count by one when the given condition is met. And if it is not met then does not go to the condition. So does not add 1 to count.
The first element of nums is 0
And 0 is a false value so it doesn't pass the condition.
The second element is 1. And 1 is a true value so he evaluates it and increments it by 1

The third element is 2. And 2 is a true value so he evaluates it and increments it by 2

The fourth element is 3. And 3 is a true value so he evaluates it and increments it by 3
After processing all the elements by executing the forEach lookup, the count is incremented three times. resulting in an orphaned final value of "3" .
So the correct answer is "C"
</i>

</p>
</details>
