

### 🧠 **JavaScript Object & JSON Exploration – Example: `student`**

```js
const student = {
  name: "Arjuna",
  age: 20,
  fullName: () => {
    console.log("Hi");
  }
};
```

---

### 🔍 **Understanding the `student` Object**

* `typeof student` → `'object'`
* `student.name` → `'Arjuna'`
* `student.fullName()` → logs `'Hi'` to the console

The `fullName` method is an arrow function and **won't be included** in JSON serialization.

---

### 📦 **JSON.stringify – Serializing an Object**

```js
var data = JSON.stringify(student);
```

* `data` → `'{"name":"Arjuna","age":20}'` ✅
* `typeof data` → `'string'`

📝 `fullName` is a **function** and **excluded** in JSON because JSON supports only **data**, not **behavior** (functions, `undefined`, or symbols).

---

### 🧐 **Accessing Properties**

```js
student.name // 'Arjuna'
data.name    // undefined (because `data` is a string, not an object)
```

---

### 🔄 **Deserializing Back to Object**

```js
JSON.parse(data) 
// { name: 'Arjuna', age: 20 }

JSON.parse(data).name 
// 'Arjuna'
```

---

### 🚨 **Incorrect JSON – Syntax Error Example**

```js
JSON.parse('{name:"Arjuna","age":20}'); 
// ❌ Error: Property keys must be in double quotes
```

✅ Always use **double quotes** around both keys and string values in JSON.

---

### ✅ **Multiline JSON Parse with `null`**

```js
var data1 = JSON.parse(`{
  "name": "Arjuna",
  "age": 20,
  "isRich": null
}`);
```

* `data1.name` → `'Arjuna'`
* `data1.age` → `20`
* `data1.isRich` → `null`

🧪 Note: JSON allows `null` as a valid value.

---

### ⚠️ **JSON Stores All as Strings by Default**

```js
var data1 = JSON.parse(`{
  "name": "Arjuna",
  "age": "20",
  "isRich": null
}`);

data1.age // '20' (string, not number)
```

Be mindful of data types when parsing JSON – strings will **not be auto-converted** into numbers unless you explicitly parse them.

---

### 💡 Bonus Tip: typeof vs JSON.stringify

| Expression                | Result      | Notes                                 |
| ------------------------- | ----------- | ------------------------------------- |
| `typeof student`          | `'object'`  | Plain object                          |
| `typeof data`             | `'string'`  | JSON string                           |
| `JSON.stringify(student)` | JSON string | Removes `function` from the object    |
| `JSON.parse(data)`        | JS object   | Converts string back to usable object |
| `JSON.parse(...).name`    | `'Arjuna'`  | Access data like a regular object     |
