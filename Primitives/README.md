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

## Define Polyfills for `Object,is(..)`

---

```jsx
// Polyfill for Object.is

if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    const xNegZero = isNegZero(x);
    const yNegZero = isNegZero(y);
    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isNan(x) && isNan(y)) {
      return true;
    } else {
      return x === y;
    }
    // ********************************
    function isNegZero(v) {
      return v == 0 && 1 / v == -Infinity;
      // If the `v` is Negative zero, `1/v` would return -Infinity
    }
    function isNan() {
      // As NaN === NaN would return `false`
      return v !== 0;
    }
  };
}
```

## Fundamental Objects

---

| Use with New | Do not use with New |
| ------------ | ------------------- |
| Object()     | String()            |
| Array()      | Number()            |
| Function()   | Boolean()           |
| Date()       |                     |
| RegExp()     |                     |
| Error()      |                     |

```jsx
const yesterday = new Date("March 6, 2019");
yesterday.toUTCString();
// 'Tue, 05 Mar 2019 18:30:00 GMT'
const varGPA = String(transcript.GPA);
// '9.61'
```
