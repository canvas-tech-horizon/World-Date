[![NPM version][npm-version-image]][npm-url]
[![MIT License][license-image]][license-url]

# world-date

WorldDate library – a powerful and versatile JavaScript library for seamless date and time manipulation. This library offers a comprehensive set of functions designed to handle various aspects of date and time, ensuring accuracy and ease of use in a variety of applications.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcanvas-tech-horizon%2FWorld-Date.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fcanvas-tech-horizon%2FWorld-Date?ref=badge_large&issueType=license)

## Features

1. **Date Manipulation:**
   - Add or subtract milliseconds, seconds, minutes, hours, days, months, and years.
   - Set specific date and time components.

2. **Formatting and Parsing:**
   - Format dates in diverse representations.
   - Parse dates back into WorldDate objects.

3. **Time Zone Handling:**
   - Convert dates between different time zones.
   - Retrieve information about the current time zone.

4. **Duration Handling:**
   - Calculate duration in milliseconds, seconds, minutes, hours, days, months, and years.

5. **Weekday and Weekend Check:**
   - Determine the day of the week.
   - Check if a date falls on a weekend.

6. **Leap Year Check:**
   - Verify if a year is a leap year.

7. **Timestamp Generation:**
   - Retrieve timestamps, Unix timestamps, and other time-related components.

8. **Relative Time:**
   - Express time differentials with the `fromNow` function.

9. **Calendar Functions:**
   - Access information like day of the year, week of the year, days in a month, days in a year, quarter, and weeks in a month.

10. **Validation:**
    - Ensure date validity.
    - Perform checks like before, after, equal, today, tomorrow, and yesterday.

## Getting Started

```typescript
// ts
import WorldDate from 'world-date';

const currentDate = new WorldDate();
const parsedDate = WorldDate.setLocaleDateTimes(20, 3, 2026, 8, 30);

console.log(currentDate.toISOString());
console.log(currentDate.toUTCString());
console.log(currentDate.toLocaleString());

console.log(parsedDate.toISOString());
console.log(parsedDate.toUTCString());
console.log(parsedDate.toLocaleString());
```

### Installation

```bash
npm install world-date
```

[npm-url]: https://www.npmjs.com/package/world-date
[npm-version-image]: https://img.shields.io/npm/v/world-date.svg?style=flat

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[fossa-badge-image]: https://app.fossa.com/api/projects/custom%2B43538%2Fgithub.com%2Fcanvas-tech-horizon%2FWorld-Date.svg?type=small
[fossa-badge-url]: https://app.fossa.com/projects/custom%2B43538%2Fgithub.com%2Fcanvas-tech-horizon%2FWorld-Date?ref=badge_small

</br>

# Document

### Constructor Function: DateInitializer

This TypeScript constructor function initializes a Date object with the current date or a provided date.

#### Parameters

- `date` (optional): The `date` parameter in the constructor is an optional parameter of type `Date`. If a `Date` object is provided when creating an instance of the class, it will be used to initialize the `date` property of the class. If no `Date` object is provided, the current date.

#### Example
```typescript
import WorldDate from 'world-date';

const currentDate = new WorldDate();
console.log(currentDate.toLocaleString());
```

## Function: addMilliseconds

The function `addMilliseconds` adds a specified number of milliseconds to a date object and returns a new `WorldDate` object.

### Parameters

- `milliseconds`: The `milliseconds` parameter represents the number of milliseconds to add to the current date and time.

### Returns

A new `WorldDate` object is being returned, which is created using the `result` Date object.

### Example

```typescript
const newDate = new WorldDate().addMilliseconds(1000);
console.log(newDate);
```


## Function: minusMinutes

The function `minusMinutes` subtracts a specified number of minutes from a date and returns a new `WorldDate` object.

### Parameters

- `minutes`: The `minusMinutes` function takes a parameter `minutes` of type number, which represents the number of minutes to subtract from the current date and time. If the `minutes` value is negative, an error is thrown indicating that minutes cannot be negative. The function then calculates the new date and time.

### Returns

A new `WorldDate` object is being returned, which is created using the modified `Date` object after subtracting the specified number of minutes.

### Example

```typescript
// Usage
const newDate = new WorldDate().minusMinutes(1000);
console.log(newDate);
```

## Function: addMinutes

The function `addMinutes` adds a specified number of minutes to a date and returns a new `WorldDate` object.

### Parameters

- `minutes`: The `addMinutes` function takes a parameter `minutes` of type `number`, which represents the number of minutes to add to the current date and time. If the `minutes` value is negative, an error is thrown indicating that minutes cannot be negative.

### Returns

A new `WorldDate` object is being returned, which is created using the updated date after adding the specified number of minutes.

### Example

```typescript
const newDate = new WorldDate().addMinutes(30);
console.log(newDate);
```

## Function: minusMinutes

The function `minusMinutes` subtracts a specified number of minutes from a date and returns a new `WorldDate` object.

### Parameters

- `minutes`: The `minusMinutes` function takes a parameter `minutes` of type number, which represents the number of minutes to subtract from the current date and time. If the `minutes` value is negative, an error is thrown indicating that minutes cannot be negative.

### Returns

A new `WorldDate` object is being returned, which is created using the modified `Date` object after subtracting the specified number of minutes.

### Example

```typescript
const newDate = new WorldDate().minusMinutes(30);
console.log(newDate); // Assuming WorldDate class is used
```

## Function: addHours

The function `addHours` adds a specified number of hours to a date and returns a new `WorldDate` object.

### Parameters

- `hours`: The `hours` parameter is a number that represents the number of hours to add to the current date and time.

### Returns

A new instance of the `WorldDate` class is being returned, which is created using the modified `Date` object `result`.

### Example

```typescript
const newDate = new WorldDate().addHours(3);
console.log(newDate); // Assuming WorldDate class is used
```

## Function: minusHours

The `minusHours` function subtracts a specified number of hours from a `WorldDate` object.

### Parameters

- `hours`: The `hours` parameter in the `minusHours` function represents the number of hours that you want to subtract from the current date and time.

### Returns

A new instance of the `WorldDate` class is being returned, which is created using the modified `Date` object `result`.

### Example

```typescript
const newDate = new WorldDate().minusHours(2);
console.log(newDate);
```

## Function: addDays

The function `addDays` takes a number of days as input and returns a new `WorldDate` object with the specified number of days added to the original date.

### Parameters

- `days`: The `days` parameter in the `addDays` function represents the number of days to add to the current date. This function takes a number as input, which should be a positive integer representing the number of days to add. If the `days` parameter is negative, an error is thrown.

### Returns

The `addDays` function returns a new `WorldDate` object that represents the date after adding the specified number of days to the original date.

### Example

```typescript
const newDate = new WorldDate().addDays(7);
console.log(newDate);
```

## Function: minusDays

The `minusDays` function subtracts a specified number of days from a date and returns a new date object.

### Parameters

- `days`: The `days` parameter in the `minusDays` function represents the number of days to subtract from the current date. This function is designed to calculate a new date by subtracting the specified number of days from the current date.

### Returns

A new `WorldDate` object is being returned, which is created using the result of subtracting the specified number of days from the original date.

### Example

```typescript
const newDate = new WorldDate().minusDays(3);
console.log(newDate);
```

## Function: addMonths

The function `addMonths` adds a specified number of months to a date and returns a new `WorldDate` object.

### Parameters

- `months`: The `months` parameter in the `addMonths` function represents the number of months to add to the current date. It is a number value that specifies the increment or decrement in months.

### Returns

A new `WorldDate` object is being returned, which is created using the modified date after adding the specified number of months.

### Example

```typescript
const newDate = new WorldDate().addMonths(6);
console.log(newDate);
```

## Function: minusMonths

The `minusMonths` function in TypeScript subtracts a specified number of months from a date and returns a new `WorldDate` object.

### Parameters

- `months`: The `months` parameter in the `minusMonths` function represents the number of months to subtract from the current date.

### Returns

A new `WorldDate` object is being returned with the date value updated by subtracting the specified number of months.

### Example

```typescript
const newDate = new WorldDate().minusMonths(3);
console.log(newDate);
```

## Function: addYears

The function `addYears` adds a specified number of years to a date and returns a new `WorldDate` object.

### Parameters

- `years`: The `years` parameter is a number that represents the number of years to add to the current date in the `WorldDate` object.

### Returns

A new `WorldDate` object with the date increased by the specified number of years.

### Example

```typescript
const newDate = new WorldDate().addYears(5);
console.log(newDate);
```

## Function: minusYears

The `minusYears` function subtracts a specified number of years from a given date and returns a new `WorldDate` object.

### Parameters

- `years`: The `years` parameter in the `minusYears` function represents the number of years that you want to subtract from the current year of a given date.

### Returns

A new `WorldDate` object with the date value decreased by the specified number of years.

### Example

```typescript
const newDate = new WorldDate().minusYears(2);
console.log(newDate);
```

## Function: diffInMilliseconds

The function `diffInMilliseconds` calculates the difference in milliseconds between the date of the `WorldDate` object passed as a parameter and the date of the current object.

### Parameters

- `date`: The `date` parameter in the `diffInMilliseconds` function is of type `WorldDate`, which likely represents a date object specific to your application or system. The function calculates the difference in milliseconds between the `date` passed as an argument and the `this.date` property of the object.

### Returns

The function `diffInMilliseconds` is returning the difference in milliseconds between the `date` passed as a parameter and the `date` property of the current object (`this`).

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate();
const difference = date1.diffInMilliseconds(date2);
console.log(difference);
```

## Function: diffInSeconds

The function `diffInSeconds` calculates the difference in seconds between the current date and a given `WorldDate`.

### Parameters

- `date`: The `date` parameter in the `diffInSeconds` function is of type `WorldDate`, which represents a date and time in the world.

### Returns

The function `diffInSeconds` returns the difference in seconds between the current date and the provided `WorldDate` object. It calculates this difference by first converting the milliseconds difference to seconds using `Math.floor(this.diffInMilliseconds(date) / 1000)`.

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate();
const difference = date1.diffInSeconds(date2);
console.log(difference);
```

## Function: diffInMinutes

The function `diffInMinutes` calculates the difference in minutes between the current date and a given `WorldDate`.

### Parameters

- `date`: The `date` parameter in the `diffInMinutes` function is of type `WorldDate`, which represents a date and time in the world. This parameter is used to calculate the difference in minutes between the current date and the provided `WorldDate` date.

### Returns

The function `diffInMinutes` returns the difference in minutes between the current date and the provided `WorldDate` parameter. It calculates this difference by first getting the difference in seconds using the `diffInSeconds` method and then converting that to minutes by dividing by 60 and flooring the result.

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate().addMinutes(30);
const difference = date1.diffInMinutes(date2);
console.log(difference);
```


## Function: diffInHours

The function `diffInHours` calculates the difference in hours between the current date and a given `WorldDate`.

### Parameters

- `date`: The `date` parameter in the `diffInHours` function is of type `WorldDate`, which represents a date and time in the world. The function calculates the difference in hours between the current date and the provided `WorldDate` object.

### Returns

The function `diffInHours` returns the difference in hours between the current date and the provided `WorldDate` object by first calculating the difference in minutes and then dividing it by 60 to get the hours.

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate().addHours(3);
const difference = date1.diffInHours(date2);
console.log(difference);
```

## Function: diffInDays

The function `diffInDays` calculates the difference in days between the current date and a given date.

### Parameters

- `date`: The `date` parameter in the `diffInDays` function represents a `WorldDate` object, which likely contains information about a specific date and time in the world. This function calculates the difference in days between the current date and the date provided as an argument.

### Returns

The function `diffInDays` returns the difference in days between the current date and the provided `WorldDate` parameter. It calculates this difference by first finding the difference in hours using the `diffInHours` method and then dividing that by 24 to convert it to days. The result is then rounded down using `Math.floor` before being returned.

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate().addDays(5);
const difference = date1.diffInDays(date2);
console.log(difference);
```

## Function: diffInMonths

The function `diffInMonths` calculates the difference in months between two WorldDate objects.

### Parameters

- `date`: The `date` parameter in the `diffInMonths` function is an object of type `WorldDate`. It seems like the function is calculating the difference in months between the `date` property of the current object (`this.date`) and the `date` property of the passed `WorldDate`.

### Returns

The function `diffInMonths(date: WorldDate): number` returns the difference in months between the date stored in the current object (`this.date`) and the date passed as an argument (`date`).

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate().addMonths(6);
const difference = date1.diffInMonths(date2);
console.log(difference);
```

## Function: diffInYears

The function calculates the difference in years between the current date and a given date.

### Parameters

- `date`: The `date` parameter in the `diffInYears` function is of type `WorldDate`, which likely represents a date object in the context of your program. The function calculates the difference in years between the year of the current date (`this.date`) and the year of the provided `WorldDate`.

### Returns

The function `diffInYears` returns the difference in years between the year of the current date (`this.date`) and the year of the input `WorldDate` object (`date.date`).

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate().addYears(2);
const difference = date1.diffInYears(date2);
console.log(difference);
```

## Function: isBefore

The `isBefore` function in TypeScript compares the time of the current date with another date to determine if it is before that date.

### Parameters

- `date`: The `date` parameter in the `isBefore` function is of type `WorldDate`, which seems to be a custom date object. The function compares the time of the current date object (`this.date`) with the time of the `date` parameter to determine if the current date is before the.

### Returns

A boolean value indicating whether the date stored in the current object is before the date passed as a parameter.

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate().addDays(5);
const isBeforeDate = date1.isBefore(date2);
console.log(isBeforeDate);
```

## Function: isAfter

The function `isAfter` compares the date of the current object with the date of another object and returns true if the current date is after the other date.

### Parameters

- `date`: The `date` parameter in the `isAfter` function is of type `WorldDate`, which seems to be a custom date object. The function compares the time of the current date object (`this.date`) with the time of the `date` parameter to determine if the current date is after the.

### Returns

A boolean value indicating whether the date stored in the current object is after the date passed as a parameter.

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate().addDays(5);
const isAfterDate = date1.isAfter(date2);
console.log(isAfterDate);
```


## Function: isEqual

The `isEqual` function in TypeScript compares the time values of two `WorldDate` objects and returns a boolean indicating whether they are equal.

### Parameters

- `date`: The `date` parameter in the `isEqual` function is of type `WorldDate`, which represents a date object in the world. The function compares the time value of the current date object (`this.date`) with the time value of the `date` parameter to determine if they are equal.

### Returns

A boolean value indicating whether the time of the date stored in the current object is equal to the time of the date passed as a parameter.

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate();
const isEqualDate = date1.isEqual(date2);
console.log(isEqualDate);
```

## Function: isSameDay

The `isSameDay` function in TypeScript checks if two WorldDate objects represent the same day.

### Parameters

- `date`: The `isSameDay` function compares the year, month, and date components of two dates to determine if they represent the same day. The function takes a `WorldDate` object named `date` as a parameter for comparison. The `WorldDate` object likely contains information about a specific date.

### Returns

A boolean value indicating whether the year, month, and date of the current date object (`this.date`) are the same as the year, month, and date of the `WorldDate` object passed as a parameter (`date`).

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate();
const isSameDay = date1.isSameDay(date2);
console.log(isSameDay);
```

## Function: isSameMonth

The function `isSameMonth` compares the year and month of two WorldDate objects to determine if they are in the same month.

### Parameters

- `date`: The `isSameMonth` function is checking if the year and month of the current date (`this.date`) are the same as the year and month of the input `WorldDate` object (`date.date`). If both the year and month match, the function returns `true`, indicating that the two.

### Returns

The function `isSameMonth` returns a boolean value, which indicates whether the year and month of the current date object (`this.date`) are the same as the year and month of the date object passed as a parameter (`date.date`).

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate();
const isSameMonth = date1.isSameMonth(date2);
console.log(isSameMonth);
```

## Function: isSameYear

The function `isSameYear` compares the year of the current date with the year of a given `WorldDate` object and returns a boolean indicating whether they are the same.

### Parameters

- `date`: The `date` parameter in the `isSameYear` function is of type `WorldDate`, which contains a property `date` that represents a date object. The function compares the year of the current date with the year of the provided `WorldDate` object to determine if they are the same.

### Returns

A boolean value indicating whether the year of the current date object (`this.date`) is the same as the year of the input `WorldDate` object (`date.date`).

### Example

```typescript
const date1 = new WorldDate();
const date2 = new WorldDate();
const isSameYear = date1.isSameYear(date2);
console.log(isSameYear);
```

## Function: startOfDay

The `startOfDay` function in TypeScript creates a new `WorldDate` object with the time set to midnight (00:00:00.000) in UTC.

### Returns

A new `WorldDate` object with the time set to the start of the day (00:00:00.000) in UTC time zone.

### Example

```typescript
const startOfToday = new WorldDate().startOfDay();
console.log(startOfToday);
```

## Function: endOfDay

The `endOfDay` function in TypeScript creates a new `WorldDate` object with the time set to 23:59:59.999.

### Returns

An instance of the `WorldDate` class with the time set to the end of the day (23:59:59.999) based on the current date.

### Example

```typescript
const endOfToday = new WorldDate().endOfDay();
console.log(endOfToday);
```

## Function: startOfMonth

The `startOfMonth` function in TypeScript creates a new `WorldDate` object set to the first day of the current month with the time set to midnight.

### Returns

An instance of `WorldDate` representing the first day of the month for the given date.

### Example

```typescript
const startOfMonthDate = new WorldDate().startOfMonth();
console.log(startOfMonthDate);
```

## Function: endOfMonth

The `endOfMonth` function in TypeScript returns the last moment of the current month based on the input date.

### Returns

A `WorldDate` object representing the last millisecond of the current month.

### Example

```typescript
const endOfMonthDate = new WorldDate().endOfMonth();
console.log(endOfMonthDate);
```

## Function: startOfYear

The `startOfYear` function in TypeScript creates a new `WorldDate` object representing the start of the year based on the current date.

### Returns

An instance of the `WorldDate` class representing the first day of the year based on the date stored in the current object.

### Example

```typescript
const startOfYearDate = new WorldDate().startOfYear();
console.log(startOfYearDate);
```

## Function: endOfYear

The `endOfYear` function in TypeScript returns a `WorldDate` object representing the last moment of the current year.

### Returns

A `WorldDate` object representing the last moment of the year of the original date.

### Example

```typescript
const endOfYearDate = new WorldDate().endOfYear();
console.log(endOfYearDate);
```

## Function: now

The static `now()` function returns a new instance of the `WorldDate` class.

### Returns

An instance of the `WorldDate` class is being returned.

### Example

```typescript
const currentDate = WorldDate.now();
console.log(currentDate);
```

## Function: tomorrow

The function `tomorrow` returns a `WorldDate` object representing the start of the next day.

### Returns

A new `WorldDate` object representing tomorrow's date at the start of the day.

### Example

```typescript
const tomorrowDate = WorldDate.tomorrow();
console.log(tomorrowDate);
```

## Function: yesterday

The `yesterday` function in TypeScript returns a `WorldDate` object representing the start of the previous day.

### Returns

An instance of the `WorldDate` class representing the date of yesterday.

### Example

```typescript
const yesterdayDate = WorldDate.yesterday();
console.log(yesterdayDate);
```

## Function: fromISOString

The function `fromISOString` creates a new `WorldDate` object from a given ISO date string.

### Parameters

- `dateString`: The `dateString` parameter is a string that represents a date in ISO format, such as "2022-01-01T12:00:00Z". The `fromISOString` function attempts to create a new `WorldDate` object by parsing this string into a JavaScript `Date`.

### Returns

A `WorldDate` object is being returned.

### Example

```typescript
const dateString = "2022-01-01T12:00:00Z";
const worldDate = WorldDate.fromISOString(dateString);
console.log(worldDate);
```

## Function: fromUTCString

The function `fromUTCString` converts a UTC date string into a `WorldDate` object.

### Parameters

- `dateString`: The `dateString` parameter is a string representing a date and time in UTC format. It is used as input to create a new `WorldDate` object by converting the string to a JavaScript `Date` object.

### Returns

An instance of the `WorldDate` class is being returned, created from a `Date` object parsed from the input `dateString`.

### Example

```typescript
const dateString = "2022-01-01T12:00:00Z";
const worldDate = WorldDate.fromUTCString(dateString);
console.log(worldDate);
```

## Function: setLocaleDateTimes

The function `setLocaleDateTimes` in TypeScript sets a custom date and time in a `WorldDate` object.

### Parameters

- `day`: The `day` parameter represents the day of the month.
- `month`: The `month` parameter in the `setLocaleDateTimes` function represents the month of the year. It is a number between 1 and 12, where 1 represents January and 12 represents December.
- `year`: The `year` parameter is the year value for the date you want to set.
- `hours` (optional): The `hours` parameter in the `setLocaleDateTimes` function represents the hour value in a 24-hour format (0-23). It is an optional parameter that allows you to specify the hour component of the date and time you want to set. If provided, it sets the hours component.
- `minutes` (optional): The `minutes` parameter in the `setLocaleDateTimes` function represents the minutes component of the time to be set. It is an optional parameter, meaning it can be provided but is not required. If a value is not provided for `minutes`, it defaults to 0.
- `seconds` (optional): The `seconds` parameter in the `setLocaleDateTimes` function is an optional parameter that represents the seconds component of the time. If a value is provided for the `seconds` parameter, it will be used to set the seconds component of the date and time. If no value is provided, it defaults to 0.
- `milliseconds` (optional): The `milliseconds` parameter in the `setLocaleDateTimes` function is an optional parameter that represents the milliseconds value of the time to be set. If provided, it will set the milliseconds of the date object being created or modified. If not provided, it defaults to 0.

### Returns

An instance of the `WorldDate` class is being returned, which is created using the parsed date values provided as parameters to the `setLocaleDateTimes` function.

### Example

```typescript
const customDate = WorldDate.setLocaleDateTimes(15, 3, 2024, 14, 30, 0, 0);
console.log(customDate.toLocaleString());
```

## Function: getUTCMilliseconds

This function returns the milliseconds component of the date in UTC time.

### Returns

The `getUTCMilliseconds()` method returns the milliseconds (from 0 to 999) of the specified date and time in Coordinated Universal Time (UTC).

### Example

```typescript
const currentDate = new WorldDate();
const milliseconds = currentDate.getUTCMilliseconds();
console.log(milliseconds);
```

## Function: getUTCSeconds

The `getUTCSeconds` function returns the seconds component of a Date object in Coordinated Universal Time (UTC).

### Returns

The `getUTCSeconds()` method is being called on the `date` property of the current object, and it returns the seconds (from 0 to 59) of the specified date and time in Coordinated Universal Time (UTC).

### Example

```typescript
const currentDate = new WorldDate();
const seconds = currentDate.getUTCSeconds();
console.log(seconds);
```

## Function: getUTCMinutes

This function returns the minutes component of the UTC time from a given date.

### Returns

The `getUTCMinutes()` method is being called on the `date` property of the current object, and it returns the minutes (from 0 to 59) of the UTC time of the date stored in the `date` property.

### Example

```typescript
const currentDate = new WorldDate();
const minutes = currentDate.getUTCMinutes();
console.log(minutes);
```

## Function: getUTCHours

This function returns the hour component of a Date object in Coordinated Universal Time (UTC).

### Returns

The `getUTCHours()` method is being called on the `date` object, which returns the hour (0-23) in Coordinated Universal Time (UTC).

### Example

```typescript
const currentDate = new WorldDate();
const hours = currentDate.getUTCHours();
console.log(hours);
```

## Function: getUTCDay

The function `getUTCDay` returns the day of the week (0-6) for a given date in UTC time.

### Returns

The `getUTCDay()` method returns the day of the week (from 0 to 6) for the specified date according to universal time (UTC).

### Example

```typescript
const currentDate = new WorldDate();
const dayOfWeek = currentDate.getUTCDay();
console.log(dayOfWeek);
```

## Function: getUTCDate

The `getUTCDate` function returns the day of the month (1-31) of a Date object in UTC time.

### Returns

The `getUTCDate()` method is returning the day of the month (from 1 to 31) of the date object in Coordinated Universal Time (UTC).

### Example

```typescript
const currentDate = new WorldDate();
const dayOfMonth = currentDate.getUTCDate();
console.log(dayOfMonth);
```

## Function: getUTCMonth

This function returns the month component (0-11) of a Date object in UTC time.

### Returns

The `getUTCMonth()` method is being called on the `date` object to retrieve the month component of the date in UTC time. The method returns a number representing the month, where January is 0 and December is 11.

### Example

```typescript
const currentDate = new WorldDate();
const month = currentDate.getUTCMonth();
console.log(month);
```

## Function: getUTCYear

The function `getUTCYear()` returns the UTC year of a given date.

### Returns

The `getUTCYear()` method returns the year (as a four-digit number) of the specified date according to universal time.

### Example

```typescript
const currentDate = new WorldDate();
const year = currentDate.getUTCYear();
console.log(year);
```

## Function: getTime

The getTime function returns the time in milliseconds of a given date.

### Returns

The `getTime()` method is being called on the `date` property of the current object, and it returns the number of milliseconds since January 1, 1970, 00:00:00 UTC represented by the `Date` object.

### Example

```typescript
const currentDate = new WorldDate();
const timeInMilliseconds = currentDate.getTime();
console.log(timeInMilliseconds);
```

## Function: getTimestamp

The `getTimestamp` function in TypeScript returns the timestamp of a date object.

### Returns

The `getTimestamp` method is returning the timestamp value of the `date` property in milliseconds.

### Example

```typescript
const currentDate = new WorldDate();
const timestamp = currentDate.getTimestamp();
console.log(timestamp);
```

## Function: getUnixTimestamp

The `getUnixTimestamp` function returns the Unix timestamp of a given date.

### Returns

The `getUnixTimestamp` method is returning the Unix timestamp of the current date and time in seconds.

### Example

```typescript
const currentDate = new WorldDate();
const unixTimestamp = currentDate.getUnixTimestamp();
console.log(unixTimestamp);
```

## Function: getDayOfYear

The `getDayOfYear` function calculates the day of the year for a given date.

### Returns

The `getDayOfYear` method is returning the day of the year for the given date. It calculates the day of the year by finding the difference in milliseconds between the given date and the start of the year, then dividing that by the number of milliseconds in a day and rounding down to the nearest whole number.

### Example

```typescript
const currentDate = new WorldDate();
const dayOfYear = currentDate.getDayOfYear();
console.log(dayOfYear);
```


## Function: getWeekOfYear

The function `getWeekOfYear` calculates the week number of a given date within a year.

### Returns

The `getWeekOfYear` function returns the week number of the year for a given date.

### Example

```typescript
const currentDate = new WorldDate();
const weekOfYear = currentDate.getWeekOfYear();
console.log(weekOfYear);
```

## Function: getDaysInMonth

This TypeScript function returns the number of days in the month of a given date.

### Returns

The `getDaysInMonth()` function returns the number of days in the current month of the date object it is called on.

### Example

```typescript
const currentDate = new WorldDate();
const daysInMonth = currentDate.getDaysInMonth();
console.log(daysInMonth);
```

## Function: getDaysInYear

The function `getDaysInYear` returns the number of days in a year based on whether it is a leap year or not.

### Returns

The `getDaysInYear()` method returns the number of days in a year based on whether it is a leap year or not. If the year of the date object is divisible by 4 (leap year condition), it returns 366 (number of days in a leap year), otherwise it returns 365 (number of days in a non-leap year).

### Example

```typescript
const currentDate = new WorldDate();
const daysInYear = currentDate.getDaysInYear();
console.log(daysInYear);
```

## Function: getQuarter

The function `getQuarter()` returns the quarter of the year based on the month of a given date.

### Returns

The `getQuarter()` function returns the current quarter of the year based on the month of the date.

### Example

```typescript
const currentDate = new WorldDate();
const quarter = currentDate.getQuarter();
console.log(quarter);
```

## Function: getWeeksInMonth

The function `getWeeksInMonth` calculates the number of weeks in a month based on the number of days in that month.

### Returns

The function `getWeeksInMonth()` returns the number of weeks in a month based on the number of days in that month. It calculates this by dividing the total number of days in the month by 7 (the number of days in a week) and then flooring the result to get the whole number of weeks.

### Example

```typescript
const currentDate = new WorldDate();
const weeksInMonth = currentDate.getWeeksInMonth();
console.log(weeksInMonth);
```

## Function: getZone

The function `getZone()` returns the time zone offset in hours for the current date.

### Returns

The `getZone()` method returns the time zone offset in hours for the current date. It calculates the time zone offset by dividing the time zone offset in minutes by 60 and returning the result.

### Example

```typescript
const date = new WorldDate();
console.log(date.getZone());
```

## Function: getOffset

The function `getOffset()` returns the time zone offset in minutes for the current date.

### Returns

The `getOffset()` method returns the time zone offset in minutes for the current date.

### Example

```typescript
const date = new WorldDate();
console.log(date.getOffset());
```


## Function: getLocalDay

The function `getLocalDay()` returns the day of the week (0-6) for the current date according to local time.

### Returns

The `getLocalDay()` method returns the day of the week (from 0 to 6) for the current date according to local time.

### Example

```typescript
const date = new WorldDate();
console.log(date.getLocalDay());
```

## Function: getLocalDate

The function `getLocalDate()` returns the day of the month (1-31) for the current date according to local time.

### Returns

The `getLocalDate()` method returns the day of the month (from 1 to 31) for the current date according to local time.

### Example

```typescript
const date = new WorldDate();
console.log(date.getLocalDate());
```

## Function: getLocalMonth

The function `getLocalMonth()` returns the month (0-11) for the current date according to local time.

### Returns

The `getLocalMonth()` method returns the month (from 0 to 11) for the current date according to local time.

### Example

```typescript
const date = new WorldDate();
console.log(date.getLocalMonth()); // 11
```

## Function: getLocalYear

The function `getLocalYear()` returns the year for the current date according to local time.

### Returns

The `getLocalYear()` method returns the year for the current date according to local time.

### Example

```typescript
const date = new WorldDate();
console.log(date.getLocalYear());
```

## Function: getLocalHours

The function `getLocalHours()` returns the hour (0-23) for the current date according to local time.

### Returns

The `getLocalHours()` method returns the hour (from 0 to 23) for the current date according to local time.

### Example

```typescript
const date = new WorldDate();
console.log(date.getLocalHours());
```

## Function: getLocalMinutes

The function `getLocalMinutes()` returns the minutes (0-59) for the current date according to local time.

### Returns

The `getLocalMinutes()` method returns the minutes (from 0 to 59) for the current date according to local time.

### Example

```typescript
const date = new WorldDate();
console.log(date.getLocalMinutes());
```

## Function: getLocalSeconds

The function `getLocalSeconds()` returns the seconds (0-59) for the current date according to local time.

### Returns

The `getLocalSeconds()` method returns the seconds (from 0 to 59) for the current date according to local time.

### Example

```typescript
const date = new WorldDate();
console.log(date.getLocalSeconds());
```

## Function: getLocalMilliseconds

The function `getLocalMilliseconds()` returns the milliseconds (0-999) for the current date according to local time.

### Returns

The `getLocalMilliseconds()` method returns the milliseconds (from 0 to 999) for the current date according to local time.

### Example

```typescript
const date = new WorldDate();
console.log(date.getLocalMilliseconds()); // 500
```

## Function: fromNow

The function `fromNow()` returns a string representing the relative time from the current date to the stored date.

### Returns

The `fromNow()` method returns a string representing the relative time from the current date to the date stored in the `date` property. It calculates the difference in milliseconds between the current date and the stored date and then formats the result as a human-readable string.

### Example

```typescript
const date = new WorldDate();
console.log(date.fromNow()); // just now
```

## Function: setUTCMilliseconds

The function `setUTCMilliseconds` sets the milliseconds component of the date in UTC time.

### Parameters

- `milliseconds` (number): A number representing the milliseconds component of the date in Coordinated Universal Time (UTC).

### Returns

The `setUTCMilliseconds` method returns a new `WorldDate` object with the milliseconds component set to the specified value.

### Example

```typescript
const date = new WorldDate();
const newDate = date.setUTCMilliseconds(500);
console.log(date);
```

## Function: setUTCSeconds

The function `setUTCSeconds` sets the seconds component of the date in UTC time.

### Parameters

- `seconds` (number): A number representing the seconds component of the date in Coordinated Universal Time (UTC).

### Returns

The `setUTCSeconds` method returns a new `WorldDate` object with the seconds component set to the specified value.

### Example

```typescript
const date = new WorldDate();
const newDate = date.setUTCSeconds(30);
console.log(newDate);
```

## Function: setUTCMinutes

The function `setUTCMinutes` sets the minutes component of the date in UTC time.

### Parameters

- `minutes` (number): A number representing the minutes component of the date in Coordinated Universal Time (UTC).

### Returns

The `setUTCMinutes` method returns a new `WorldDate` object with the minutes component set to the specified value.

### Example

```typescript
const date = new WorldDate();
const newDate = date.setUTCMinutes(45);
console.log(newDate);
```
## Function: setUTCHours

The function `setUTCHours` sets the hour component of the date in UTC time.

### Parameters

- `hours` (number): A number representing the hour component of the date in Coordinated Universal Time (UTC).

### Returns

The `setUTCHours` method returns a new `WorldDate` object with the hour component set to the specified value.

### Example

```typescript
const date = new WorldDate();
const newDate = date.setUTCHours(12);
console.log(newDate);
```

## Function: setUTCDate

The function `setUTCDate` sets the day of the month (1-31) of the date in UTC time.

### Parameters

- `date` (number): A number representing the day of the month (from 1 to 31) in Coordinated Universal Time (UTC).

### Returns

The `setUTCDate` method returns a new `WorldDate` object with the day of the month set to the specified value.

### Example

```typescript
const date = new WorldDate();
const newDate = date.setUTCDate(15);
console.log(newDate);
```

## Function: setUTCMonth

The function `setUTCMonth` sets the month (1-12) of the date in UTC time.

### Parameters

- `month` (number): A number representing the month of the year (from 1 to 12) in Coordinated Universal Time (UTC).

### Returns

The `setUTCMonth` method returns a new `WorldDate` object with the month set to the specified value.

### Example

```typescript
const date = new WorldDate();
const newDate = date.setUTCMonth(12);
console.log(newDate);
```

## Function: setUTCYear

The function `setUTCYear` sets the year of the date in UTC time.

### Parameters

- `year` (number): A number representing the year of the date in Coordinated Universal Time (UTC).

### Returns

The `setUTCYear` method returns a new `WorldDate` object with the year set to the specified value.

### Example

```typescript
const date = new WorldDate();
console.log(date.setUTCYear(2023));
```

## Function: setTime

The function `setTime` sets the time of the date in UTC time.

### Parameters

- `time` (number): A number representing the number of milliseconds since January 1, 1970, 00:00:00 UTC.

### Returns

The `setTime` method returns a new `WorldDate` object with the time set to the specified value.

### Example

```typescript
const date = new WorldDate();
console.log(date.setTime(1639569045500));
```

## Function: setUnixTimestamp

The function `setUnixTimestamp` sets the date and time based on a Unix timestamp.

### Parameters

- `timestamp` (number): A number representing the number of seconds since January 1, 1970, 00:00:00 UTC.

### Returns

The `setUnixTimestamp` method returns a new `WorldDate` object with the date and time set to the specified Unix timestamp.

### Example

```typescript
const date = new WorldDate();
console.log(date.setUnixTimestamp(1639569045)); // Output: 2022-12-15T15:30:45.000Z
```

## Function: setLocalMilliseconds

The `setLocalMilliseconds` function sets the milliseconds component of the date in local time.

### Parameters

- `milliseconds` (number): A number representing the milliseconds component of the date in local time.

### Returns

The `setLocalMilliseconds` method returns a new `WorldDate` object with the milliseconds component set to the specified value.

### Example

```typescript
const date = new WorldDate();
console.log(date.setLocalMilliseconds(500));
```

## Function: setLocalSeconds

The `setLocalSeconds` function sets the seconds component of the date in local time.

### Parameters

- `seconds` (number): A number representing the seconds component of the date in local time.

### Returns

The `setLocalSeconds` method returns a new `WorldDate` object with the seconds component set to the specified value.

### Example

```typescript
const date = new WorldDate();
console.log(date.setLocalSeconds(45));
```

## Function: setLocalMinutes

The `setLocalMinutes` function sets the minutes component of the date in local time.

### Parameters

- `minutes` (number): A number representing the minutes component of the date in local time.

### Returns

The `setLocalMinutes` method returns a new `WorldDate` object with the minutes component set to the specified value.

### Example

```typescript
const date = new WorldDate();
console.log(date.setLocalMinutes(30));
```

## Function: setLocalHours

The `setLocalHours` function sets the hour component of the date in local time.

### Parameters

- `hours` (number): A number representing the hour component of the date in local time.

### Returns

The `setLocalHours` method returns a new `WorldDate` object with the hour component set to the specified value.

### Example

```typescript
const date = new WorldDate();
console.log(date.setLocalHours(15));
```

## Function: setLocalDate

The `setLocalDate` function sets the day of the month (1-31) of the date in local time.

### Parameters

- `date` (number): A number representing the day of the month (from 1 to 31) in local time.

### Returns

The `setLocalDate` method returns a new `WorldDate` object with the day of the month set to the specified value.

### Example

```typescript
const date = new WorldDate();
console.log(date.setLocalDate(15));
```

## Function: setLocalMonth

The `setLocalMonth` function sets the month (1-12) of the date in local time.

### Parameters

- `month` (number): A number representing the month of the year (from 1 to 12) in local time.

### Returns

The `setLocalMonth` method returns a new `WorldDate` object with the month set to the specified value.

### Example

```typescript
const date = new WorldDate();
console.log(date.setLocalMonth(12));
```


## Function: setLocalYear

The `setLocalYear` function sets the year of the date in local time.

### Parameters

- `year` (number): A number representing the year of the date in local time.

### Returns

The `setLocalYear` method returns a new `WorldDate` object with the year set to the specified value.

### Example

```typescript
const date = new WorldDate();
console.log(date.setLocalYear(2023));
```

## Function: isValid

The `isValid` function checks if the date is valid.

### Returns

The `isValid` method returns a boolean value indicating whether the date is valid.

### Example

```typescript
const date = new WorldDate();
console.log(date.isValid());
```

## Function: isLeapYear

The `isLeapYear` function checks if the year of the date is a leap year.

### Returns

The `isLeapYear` method returns a boolean value indicating whether the year of the date is a leap year.

### Example

```typescript
const date = new WorldDate();
console.log(date.isLeapYear());
```

## Function: isWeekend

The `isWeekend` function checks if the day of the date is a weekend.

### Returns

The `isWeekend` method returns a boolean value indicating whether the day of the date is a weekend.

### Example

```typescript
const date = new WorldDate();
console.log(date.isWeekend());
```

## Function: isToday

The `isToday` function checks if the date is today.

### Returns

The `isToday` method returns a boolean value indicating whether the date is today.

### Example

```typescript
const date = new WorldDate();
console.log(date.isToday());
```

## Function: isTomorrow

The `isTomorrow` function checks if the date is tomorrow.

### Returns

The `isTomorrow` method returns a boolean value indicating whether the date is tomorrow.

### Example

```typescript
const date = new WorldDate();
console.log(date.isTomorrow()); // Output: false
```

## Function: isYesterday

The `isYesterday` function checks if the date is yesterday.

### Returns

The `isYesterday` method returns a boolean value indicating whether the date is yesterday.

### Example

```typescript
const date = new WorldDate();
console.log(date.isYesterday()); // Output: false
```

## Function: toTimeZone

The `toTimeZone` function converts the date and time to a different time zone.

### Parameters

- `zone`: A number representing the time zone offset in hours.

### Returns

The `toTimeZone` method returns a new `WorldDate` object with the date and time converted to the specified time zone.

### Example

```typescript
const date = new WorldDate();
const newData = date.toTimeZone(-5);
console.log(newData.toLocaleString());
```

## Function: toTimestamp

The `toTimestamp` function returns the timestamp of the date.

### Returns

The `toTimestamp` method returns the timestamp value of the date in milliseconds.

### Example

```typescript
const date = new WorldDate();
console.log(date.toTimestamp());
```

## Function: toUnix

The `toUnix` function returns the Unix timestamp of the date.

### Returns

The `toUnix` method returns the Unix timestamp of the date in seconds.

### Example

```typescript
const date = new WorldDate();
console.log(date.toUnix());
```

## Function: toString

The `toString` function returns a string representing the date and time.

### Returns

The `toString` method returns a string representing the date and time.

### Example

```typescript
const date = new WorldDate();
console.log(date.toString()); // "Wed Mar 15 2024 12:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Function: toDateString

The `toDateString` function returns a string representing the date.

### Returns

The `toDateString` method returns a string representing the date.

### Example

```typescript
const date = new WorldDate();
console.log(date.toDateString()); // "Wed Mar 15 2024"
```

## Function: toTimeString

The `toTimeString` function returns a string representing the time.

### Returns

The `toTimeString` method returns a string representing the time.

### Example

```typescript
const date = new WorldDate();
console.log(date.toTimeString()); // "12:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Function: toLocaleDateString

The `toLocaleDateString` function returns a string representing the date in the current locale.

### Returns

The `toLocaleDateString` method returns a string representing the date in the current locale.

### Example

```typescript
const date = new WorldDate();
console.log(date.toLocaleDateString()); // "3/15/2024"
```

## Function: toLocaleTimeString

The `toLocaleTimeString` function returns a string representing the time in the current locale.

### Returns

The `toLocaleTimeString` method returns a string representing the time in the current locale.

### Example

```typescript
const date = new WorldDate();
console.log(date.toLocaleTimeString()); // "12:00:00 AM"
```

## Function: toLocaleString

The `toLocaleString` function returns a string representing the date and time in the current locale.

### Returns

The `toLocaleString` method returns a string representing the date and time in the current locale.

### Example

```typescript
const date = new WorldDate();
console.log(date.toLocaleString()); // "3/15/2024, 12:00:00 AM"
```

## Function: toLocaleFormat

The `toLocaleFormat` function returns a string representing the date and time in the current locale.

### Parameters

- `options`: An object with properties that control the format of the string.

### Returns

The `toLocaleFormat` method returns a string representing the date and time in the current locale.

### Example

```typescript
const date = new WorldDate();
console.log(date.toLocaleFormat({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // "Wednesday, December 15, 2022"
```

## Function: toISOString

The `toISOString` function returns a string representing the date and time in ISO format.

### Returns

The `toISOString` method returns a string representing the date and time in ISO format.

### Example

```typescript
const date = new WorldDate();
console.log(date.toISOString());
```

## Function: toUTCString

The `toUTCString` function returns a string representing the date and time in Coordinated Universal Time (UTC).

### Returns

The `toUTCString` method returns a string representing the date and time in Coordinated Universal Time (UTC).

### Example

```typescript
const date = new WorldDate();
console.log(date.toUTCString());
```

## Function: getCalendar

The `getCalendar` function returns a calendar layout for the month of the date.

### Returns

The `getCalendar` method returns a two-dimensional array representing the calendar layout for the month of the date. Each element in the array represents a week, and each subarray represents the days of the week.

### Example

```typescript
const date = new WorldDate();
console.log(date.getCalendar());
```

## Function: getCalendarFrom

The `getCalendarFrom` function returns a calendar layout for the month of the date.

### Parameters

- `month`: A number representing the month of the year (from 0 to 11) to start the calendar layout.
- `year`: A number representing the year to start the calendar layout.

### Returns

The `getCalendarFrom` method returns a two-dimensional array representing the calendar layout for the month of the date. Each element in the array represents a week, and each subarray represents the days of the week.

### Example

```typescript
const date = new WorldDate();
console.log(date.getCalendarFrom(0, 11, 2022));
```


## Function: isDST

The `isDST` function checks if the date is in daylight saving time.

### Returns

The `isDST` method returns a boolean value indicating whether the date is in daylight saving time.

### Example

```typescript
const date = new WorldDate();
console.log(date.isDST()); // false
```

## Function: getDaylightSavingTime

The `getDaylightSavingTime` function returns the number of milliseconds in daylight saving time for the date.

### Returns

The `getDaylightSavingTime` method returns the number of milliseconds in daylight saving time for the date.

### Example

```typescript
const date = new WorldDate();
console.log(date.getDaylightSavingTime()); // 3600000
```

