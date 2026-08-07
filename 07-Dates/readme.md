# JavaScript Dates

## What is Date?

JavaScript uses the **Date** object to work with:

- Date
- Time
- Year
- Month
- Day

---

## Create Current Date

```js
let today = new Date();
```

---

## Common Methods

| Method | Description |
|---------|-------------|
| toString() | Full date and time |
| toDateString() | Date only |
| toTimeString() | Time only |
| toLocaleString() | Local date and time |
| toLocaleDateString() | Local date |
| toLocaleTimeString() | Local time |

---

## Get Methods

| Method | Returns |
|---------|----------|
| getFullYear() | Year |
| getMonth() | Month (0-11) |
| getDate() | Day of month |
| getDay() | Day of week (0-6) |
| getHours() | Hours |
| getMinutes() | Minutes |
| getSeconds() | Seconds |

---

## Important Notes

### Month starts from **0**

| Value | Month |
|------|-------|
| 0 | January |
| 1 | February |
| 2 | March |
| ... | ... |
| 11 | December |

---

### Day starts from **0**

| Value | Day |
|------|-----|
| 0 | Sunday |
| 1 | Monday |
| 2 | Tuesday |
| ... | ... |
| 6 | Saturday |

---

## Timestamp

```js
Date.now();
```

Returns the number of milliseconds since **January 1, 1970**.

Convert to seconds:

```js
Math.floor(Date.now() / 1000);
```

---

## Interview Questions

1. How do you create the current date?
2. Why does `getMonth()` return `0` for January?
3. What is a timestamp?
4. Difference between `toString()` and `toLocaleString()`?
5. How do you get the current year?