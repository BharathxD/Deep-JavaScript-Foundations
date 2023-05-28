# Types

### Typeof Operator

---

```jsx
var v = null;
console.log(typeof v); // 'object'

var v = [1, 2, 3];
console.log(typeof v); // 'object'

v = function () {};
console.log(typeof v); // 'function'
```

### Bigint

---

```jsx
var v = 42n;
// or: Bigint(42)
console.log(typeof v); // 'bigint'
```

### Nan & isNan

---

```jsx
var myAge = Number("0o46"); // 38
var myNextAge = Number("39"); // 39
var myCatsAge = Number("n/a"); // NaN
```

```jsx
myAge - "My Acutal Age"; // NaN
```

The JavaScript changes `“My Actual Age”` into a number, as `-` operator is only performed on a number, so `“My Actual Age”` would return a `NaN`, as it is not a number

```jsx
myCatsAge === myCatsAge; // false
```

IEEE says that `NaNs` are not equal to each other, Lol I still can’t get my head around it

```jsx
// ES6
Number.isNaN(myAge); // false
Number.isNaN("A random string"); // false
```

ES6 way to check if a given value is NaN or not

### Negative Zero

---

```jsx
var negativeZero = -0;
negativeZero === -0; // true
negativeZero === 0; // true
negativeZero.toString(); // '0'
```

```jsx
// ES6
Object.is(negativeZero, -0); // true
Object.is(negativeZero, 0); // false
```

ES6 way to check if value is Negative zero or not
