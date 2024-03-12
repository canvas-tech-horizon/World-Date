// src/index.ts
var WorldDate = class _WorldDate {
  date;
  /**
   * This TypeScript constructor function initializes a Date object with the current date or a
   * provided date.
   * @param {Date} [date] - The `date` parameter in the constructor is an optional parameter of type
   * `Date`. If a `Date` object is provided when creating an instance of the class, it will be used
   * to initialize the `date` property of the class. If no `Date` object is provided, the current
   * date
   */
  constructor(date) {
    if (date) {
      this.date = new Date(date);
    } else {
      this.date = /* @__PURE__ */ new Date();
    }
  }
  // Date Manipulation
  /**
   * The function `addMilliseconds` adds a specified number of milliseconds to a date object and
   * returns a new `WorldDate` object.
   * @param {number} milliseconds - The `milliseconds` parameter represents the number of
   * milliseconds to add to the current date and time.
   * @returns A new `WorldDate` object is being returned, which is created using the `result` Date
   * object.
   */
  addMilliseconds(milliseconds) {
    if (milliseconds < 0) {
      throw new Error("Milliseconds cannot be negative");
    }
    const result = new Date(this.date);
    result.setMilliseconds(this.date.getMilliseconds() + milliseconds);
    return new _WorldDate(result);
  }
  /**
   * The function `minusMilliseconds` subtracts a specified number of milliseconds from a `WorldDate`
   * object.
   * @param {number} milliseconds - The `milliseconds` parameter is a number representing the amount
   * of milliseconds to subtract from the current date and time.
   * @returns A new `WorldDate` object is being returned, which is created using the modified `Date`
   * object `result`.
   */
  minusMilliseconds(milliseconds) {
    if (milliseconds < 0) {
      throw new Error("Milliseconds cannot be negative");
    }
    const result = new Date(this.date);
    result.setMilliseconds(result.getMilliseconds() - milliseconds);
    return new _WorldDate(result);
  }
  /**
   * The function `addSeconds` adds a specified number of seconds to a given date and returns a new
   * date object.
   * @param {number} seconds - The `seconds` parameter is a number representing the amount of seconds
   * you want to add to the current date and time.
   * @returns A new `WorldDate` object is being returned, which is created using the updated date
   * after adding the specified number of seconds.
   */
  addSeconds(seconds) {
    if (seconds < 0) {
      throw new Error("Seconds cannot be negative");
    }
    const result = new Date(this.date);
    result.setSeconds(result.getSeconds() + seconds);
    return new _WorldDate(result);
  }
  /**
   * The function `minusSeconds` subtracts a specified number of seconds from a date and returns a
   * new `WorldDate` object.
   * @param {number} seconds - The `seconds` parameter in the `minusSeconds` function represents the
   * number of seconds that you want to subtract from the current date and time. This function is
   * designed to create a new `WorldDate` object with the specified number of seconds subtracted from
   * the current date and time.
   * @returns A new `WorldDate` object is being returned, which is created using the modified `Date`
   * object after subtracting the specified number of seconds.
   */
  minusSeconds(seconds) {
    if (seconds < 0) {
      throw new Error("Seconds cannot be negative");
    }
    const result = new Date(this.date);
    result.setSeconds(result.getSeconds() - seconds);
    return new _WorldDate(result);
  }
  /**
   * The function `addMinutes` adds a specified number of minutes to a date and returns a new
   * `WorldDate` object.
   * @param {number} minutes - The `addMinutes` function takes a parameter `minutes` of type
   * `number`, which represents the number of minutes to add to the current date and time. If the
   * `minutes` value is negative, an error is thrown indicating that minutes cannot be negative. The
   * function then creates a new `Date
   * @returns A new `WorldDate` object is being returned, which is created using the updated date
   * after adding the specified number of minutes.
   */
  addMinutes(minutes) {
    if (minutes < 0) {
      throw new Error("Minutes cannot be negative");
    }
    const result = new Date(this.date);
    result.setMinutes(result.getMinutes() + minutes);
    return new _WorldDate(result);
  }
  /**
   * The function `minusMinutes` subtracts a specified number of minutes from a date and returns a
   * new `WorldDate` object.
   * @param {number} minutes - The `minusMinutes` function takes a parameter `minutes` of type
   * number, which represents the number of minutes to subtract from the current date and time. If
   * the `minutes` value is negative, an error is thrown indicating that minutes cannot be negative.
   * The function then calculates the new date and time
   * @returns A new `WorldDate` object is being returned, which is created using the modified `Date`
   * object after subtracting the specified number of minutes.
   */
  minusMinutes(minutes) {
    if (minutes < 0) {
      throw new Error("Minutes cannot be negative");
    }
    const result = new Date(this.date);
    result.setMinutes(result.getMinutes() - minutes);
    return new _WorldDate(result);
  }
  /**
   * The function `addHours` adds a specified number of hours to a date and returns a new `WorldDate`
   * object.
   * @param {number} hours - The `hours` parameter is a number that represents the number of hours to
   * add to the current date and time.
   * @returns A new instance of the `WorldDate` class is being returned, which is created using the
   * modified `Date` object `result`.
   */
  addHours(hours) {
    if (hours < 0) {
      throw new Error("Hours cannot be negative");
    }
    const result = new Date(this.date);
    result.setHours(result.getHours() + hours);
    return new _WorldDate(result);
  }
  /**
   * The `minusHours` function subtracts a specified number of hours from a `WorldDate` object.
   * @param {number} hours - The `hours` parameter in the `minusHours` function represents the number
   * of hours that you want to subtract from the current date and time.
   * @returns A new instance of the `WorldDate` class is being returned, which is created using the
   * modified `Date` object `result`.
   */
  minusHours(hours) {
    if (hours < 0) {
      throw new Error("Hours cannot be negative");
    }
    const result = new Date(this.date);
    result.setHours(result.getHours() - hours);
    return new _WorldDate(result);
  }
  /**
   * The function `addDays` takes a number of days as input and returns a new `WorldDate` object with
   * the specified number of days added to the original date.
   * @param {number} days - The `days` parameter in the `addDays` function represents the number of
   * days to add to the current date. This function takes a number as input, which should be a
   * positive integer representing the number of days to add. If the `days` parameter is negative, an
   * error is thrown indicating
   * @returns The `addDays` function is returning a new `WorldDate` object that represents the date
   * after adding the specified number of days to the original date.
   */
  addDays(days) {
    if (days < 0) {
      throw new Error("Days cannot be negative");
    }
    const result = new Date(this.date);
    result.setDate(result.getDate() + days);
    return new _WorldDate(result);
  }
  /**
   * The `minusDays` function subtracts a specified number of days from a date and returns a new date
   * object.
   * @param {number} days - The `days` parameter in the `minusDays` function represents the number of
   * days to subtract from the current date. This function is designed to calculate a new date by
   * subtracting the specified number of days from the current date.
   * @returns A new `WorldDate` object is being returned, which is created using the result of
   * subtracting the specified number of days from the original date.
   */
  minusDays(days) {
    if (days < 0) {
      throw new Error("Days cannot be negative");
    }
    const result = new Date(this.date);
    result.setDate(result.getDate() - days);
    return new _WorldDate(result);
  }
  /**
   * The function `addMonths` adds a specified number of months to a date and returns a new
   * `WorldDate` object.
   * @param {number} months - The `months` parameter in the `addMonths` function represents the
   * number of months to add to the current date. It is a number value that specifies the increment
   * or decrement in months.
   * @returns A new `WorldDate` object is being returned, which is created using the modified date
   * after adding the specified number of months.
   */
  addMonths(months) {
    if (months < 0) {
      throw new Error("Months cannot be negative");
    }
    const result = new Date(this.date);
    result.setMonth(result.getMonth() + months);
    return new _WorldDate(result);
  }
  /**
   * The `minusMonths` function in TypeScript subtracts a specified number of months from a date and
   * returns a new `WorldDate` object.
   * @param {number} months - The `months` parameter in the `minusMonths` function represents the
   * number of months to subtract from the current date.
   * @returns A new `WorldDate` object is being returned with the date value updated by subtracting
   * the specified number of months.
   */
  minusMonths(months) {
    if (months < 0) {
      throw new Error("Months cannot be negative");
    }
    const result = new Date(this.date);
    result.setMonth(result.getMonth() - months);
    return new _WorldDate(result);
  }
  /**
   * The function `addYears` adds a specified number of years to a date and returns a new `WorldDate`
   * object.
   * @param {number} years - The `years` parameter is a number that represents the number of years to
   * add to the current date in the `WorldDate` object.
   * @returns A new WorldDate object with the date increased by the specified number of years.
   */
  addYears(years) {
    if (years < 0) {
      throw new Error("Years cannot be negative");
    }
    const result = new Date(this.date);
    result.setFullYear(result.getFullYear() + years);
    return new _WorldDate(result);
  }
  /**
   * The `minusYears` function subtracts a specified number of years from a given date and returns a
   * new `WorldDate` object.
   * @param {number} years - The `years` parameter in the `minusYears` function represents the number
   * of years that you want to subtract from the current year of a given date.
   * @returns A new `WorldDate` object with the date value decreased by the specified number of
   * years.
   */
  minusYears(years) {
    if (years < 0) {
      throw new Error("Years cannot be negative");
    }
    const result = new Date(this.date);
    result.setFullYear(result.getFullYear() - years);
    return new _WorldDate(result);
  }
  /**
   * The function `diffInMilliseconds` calculates the difference in milliseconds between the date of
   * the `WorldDate` object passed as a parameter and the date of the current object.
   * @param {WorldDate} date - The `date` parameter in the `diffInMilliseconds` function is of type
   * `WorldDate`, which likely represents a date object specific to your application or system. The
   * function calculates the difference in milliseconds between the `date` passed as an argument and
   * the `this.date` property of the object where
   * @returns The function `diffInMilliseconds` is returning the difference in milliseconds between
   * the `date` passed as a parameter and the `date` property of the current object (`this`).
   */
  diffInMilliseconds(date) {
    return date.date.getTime() - this.date.getTime();
  }
  /**
   * The function `diffInSeconds` calculates the difference in seconds between the current date and a
   * given `WorldDate`.
   * @param {WorldDate} date - The `date` parameter in the `diffInSeconds` function is of type
   * `WorldDate`, which represents a date and time in the world.
   * @returns The function `diffInSeconds` is returning the difference in seconds between the current
   * date and the provided `WorldDate` object. It calculates this difference by first converting the
   * milliseconds difference to seconds using `Math.floor(this.diffInMilliseconds(date) / 1000)`.
   */
  diffInSeconds(date) {
    return Math.floor(this.diffInMilliseconds(date) / 1e3);
  }
  /**
   * The function `diffInMinutes` calculates the difference in minutes between the current date and a
   * given `WorldDate`.
   * @param {WorldDate} date - The `date` parameter in the `diffInMinutes` function is of type
   * `WorldDate`, which represents a date and time in the world. This parameter is used to calculate
   * the difference in minutes between the current date and the provided `WorldDate` date.
   * @returns The function `diffInMinutes` is returning the difference in minutes between the current
   * date and the provided `WorldDate` parameter. It calculates this difference by first getting the
   * difference in seconds using the `diffInSeconds` method and then converting that to minutes by
   * dividing by 60 and flooring the result.
   */
  diffInMinutes(date) {
    return Math.floor(this.diffInSeconds(date) / 60);
  }
  /**
   * The function `diffInHours` calculates the difference in hours between the current date and a
   * given `WorldDate`.
   * @param {WorldDate} date - The `date` parameter in the `diffInHours` function is of type
   * `WorldDate`, which represents a date and time in the world. The function calculates the
   * difference in hours between the current date and the provided `WorldDate` object.
   * @returns The function `diffInHours` is returning the difference in hours between the current
   * date and the provided `WorldDate` object by first calculating the difference in minutes and then
   * dividing it by 60 to get the hours.
   */
  diffInHours(date) {
    return Math.floor(this.diffInMinutes(date) / 60);
  }
  /**
   * The function `diffInDays` calculates the difference in days between the current date and a given
   * date.
   * @param {WorldDate} date - The `date` parameter in the `diffInDays` function represents a
   * `WorldDate` object, which likely contains information about a specific date and time in the
   * world. This function calculates the difference in days between the current date and the date
   * provided as an argument.
   * @returns The function `diffInDays` is returning the difference in days between the current date
   * and the provided `WorldDate` parameter. It calculates this difference by first finding the
   * difference in hours using the `diffInHours` method and then dividing that by 24 to convert it to
   * days. The result is then rounded down using `Math.floor` before being returned.
   */
  diffInDays(date) {
    return Math.floor(this.diffInHours(date) / 24);
  }
  /**
   * The function `diffInMonths` calculates the difference in months between two WorldDate objects.
   * @param {WorldDate} date - The `date` parameter in the `diffInMonths` function is an object of
   * type `WorldDate`. It seems like the function is calculating the difference in months between the
   * `date` property of the current object (`this.date`) and the `date` property of the passed
   * `WorldDate`
   * @returns The function `diffInMonths(date: WorldDate): number` returns the difference in months
   * between the date stored in the current object (`this.date`) and the date passed as an argument
   * (`date`).
   */
  diffInMonths(date) {
    return (date.date.getFullYear() - this.date.getFullYear()) * 12 + date.date.getMonth() - this.date.getMonth();
  }
  /**
   * The function calculates the difference in years between the current date and a given date.
   * @param {WorldDate} date - The `date` parameter in the `diffInYears` function is of type
   * `WorldDate`, which likely represents a date object in the context of your program. The function
   * calculates the difference in years between the year of the current date (`this.date`) and the
   * year of the provided `WorldDate
   * @returns The function `diffInYears` is returning the difference in years between the year of the
   * current date (`this.date`) and the year of the input `WorldDate` object (`date.date`).
   */
  diffInYears(date) {
    return date.date.getFullYear() - this.date.getFullYear();
  }
  /**
   * The `isBefore` function in TypeScript compares the time of the current date with another date to
   * determine if it is before that date.
   * @param {WorldDate} date - The `date` parameter in the `isBefore` function is of type
   * `WorldDate`, which seems to be a custom date object. The function compares the time of the
   * current date object (`this.date`) with the time of the `date` parameter to determine if the
   * current date is before the
   * @returns A boolean value indicating whether the date stored in the current object is before the
   * date passed as a parameter.
   */
  isBefore(date) {
    return this.date.getTime() < date.date.getTime();
  }
  /**
   * The function `isAfter` compares the date of the current object with the date of another object
   * and returns true if the current date is after the other date.
   * @param {WorldDate} date - The `date` parameter in the `isAfter` function is of type `WorldDate`,
   * which seems to be a custom date object. The function compares the time of the current date
   * object (`this.date`) with the time of the `date` parameter to determine if the current date is
   * after the
   * @returns A boolean value indicating whether the date stored in the current object is after the
   * date passed as a parameter.
   */
  isAfter(date) {
    return this.date.getTime() > date.date.getTime();
  }
  /**
   * The `isEqual` function in TypeScript compares the time values of two `WorldDate` objects and
   * returns a boolean indicating whether they are equal.
   * @param {WorldDate} date - The `date` parameter in the `isEqual` function is of type `WorldDate`,
   * which represents a date object in the world. The function compares the time value of the current
   * date object (`this.date`) with the time value of the `date` parameter to determine if they are
   * equal.
   * @returns A boolean value indicating whether the time of the date stored in the current object is
   * equal to the time of the date passed as a parameter.
   */
  isEqual(date) {
    return this.date.getTime() === date.date.getTime();
  }
  /**
   * The `isSameDay` function in TypeScript checks if two WorldDate objects represent the same day.
   * @param {WorldDate} date - The `isSameDay` function compares the year, month, and date components
   * of two dates to determine if they represent the same day. The function takes a `WorldDate`
   * object named `date` as a parameter for comparison. The `WorldDate` object likely contains
   * information about a specific date
   * @returns A boolean value indicating whether the year, month, and date of the current date object
   * (`this.date`) are the same as the year, month, and date of the `WorldDate` object passed as a
   * parameter (`date`).
   */
  isSameDay(date) {
    return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth() && this.date.getDate() === date.date.getDate();
  }
  /**
   * The function `isSameMonth` compares the year and month of two WorldDate objects to determine if
   * they are in the same month.
   * @param {WorldDate} date - The `isSameMonth` function is checking if the year and month of the
   * current date (`this.date`) are the same as the year and month of the input `WorldDate` object
   * (`date.date`). If both the year and month match, the function returns `true`, indicating that
   * the two
   * @returns The function `isSameMonth` is returning a boolean value, which indicates whether the
   * year and month of the current date object (`this.date`) are the same as the year and month of
   * the date object passed as a parameter (`date.date`).
   */
  isSameMonth(date) {
    return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
  }
  /**
   * The function `isSameYear` compares the year of the current date with the year of a given
   * `WorldDate` object and returns a boolean indicating whether they are the same.
   * @param {WorldDate} date - The `date` parameter in the `isSameYear` function is of type
   * `WorldDate`, which contains a property `date` that represents a date object. The function
   * compares the year of the current date with the year of the provided `WorldDate` object to
   * determine if they are the same
   * @returns A boolean value indicating whether the year of the current date object (`this.date`) is
   * the same as the year of the input `WorldDate` object (`date.date`).
   */
  isSameYear(date) {
    return this.date.getFullYear() === date.date.getFullYear();
  }
  /**
   * The `startOfDay` function in TypeScript creates a new `WorldDate` object with the time set to
   * midnight (00:00:00.000) in UTC.
   * @returns A new `WorldDate` object with the time set to the start of the day (00:00:00.000) in
   * UTC time zone.
   */
  startOfDay() {
    const result = new Date(this.date);
    result.setHours(0, 0, 0, 0);
    return new _WorldDate(result);
  }
  /**
   * The `endOfDay` function in TypeScript creates a new `WorldDate` object with the time set to
   * 23:59:59.999.
   * @returns An instance of the `WorldDate` class with the time set to the end of the day
   * (23:59:59.999) based on the current date.
   */
  endOfDay() {
    const result = new Date(this.date);
    result.setHours(23, 59, 59, 999);
    return new _WorldDate(result);
  }
  /**
   * The `startOfMonth` function in TypeScript creates a new `WorldDate` object set to the first day
   * of the current month with the time set to midnight.
   * @returns An instance of `WorldDate` representing the first day of the month for the given date.
   */
  startOfMonth() {
    const result = new Date(this.date);
    result.setDate(1);
    result.setHours(0, 0, 0, 0);
    return new _WorldDate(result);
  }
  /**
   * The `endOfMonth` function in TypeScript returns the last moment of the current month based on
   * the input date.
   * @returns A WorldDate object representing the last millisecond of the current month.
   */
  endOfMonth() {
    const result = new Date(this.date);
    result.setMonth(result.getMonth() + 1, 0);
    result.setHours(23, 59, 59, 999);
    return new _WorldDate(result);
  }
  /**
   * The `startOfYear` function in TypeScript creates a new `WorldDate` object representing the start
   * of the year based on the current date.
   * @returns An instance of the `WorldDate` class representing the first day of the year based on
   * the date stored in the current object.
   */
  startOfYear() {
    const result = new Date(this.date);
    result.setMonth(0, 1);
    result.setHours(0, 0, 0, 0);
    return new _WorldDate(result);
  }
  /**
   * The `endOfYear` function in TypeScript returns a `WorldDate` object representing the last moment
   * of the current year.
   * @returns A WorldDate object representing the last moment of the year of the original date.
   */
  endOfYear() {
    const result = new Date(this.date);
    result.setMonth(11, 31);
    result.setHours(23, 59, 59, 999);
    return new _WorldDate(result);
  }
  /**
   * The static now() function returns a new instance of the WorldDate class.
   * @returns An instance of the `WorldDate` class is being returned.
   */
  static now() {
    return new _WorldDate();
  }
  /**
   * The function `tomorrow` returns a `WorldDate` object representing the start of the next day.
   * @returns A new `WorldDate` object representing tomorrow's date at the start of the day.
   */
  static tomorrow() {
    return new _WorldDate().startOfDay().addDays(1);
  }
  /**
   * The `yesterday` function in TypeScript returns a `WorldDate` object representing the start of
   * the previous day.
   * @returns An instance of the `WorldDate` class representing the date of yesterday.
   */
  static yesterday() {
    return new _WorldDate().startOfDay().minusDays(1);
  }
  /**
   * The function `fromISOString` creates a new `WorldDate` object from a given ISO date string.
   * @param {string} dateString - The `dateString` parameter is a string that represents a date in
   * ISO format, such as "2022-01-01T12:00:00Z". The `fromISOString` function attempts to create a
   * new `WorldDate` object by parsing this string into a JavaScript `Date`
   * @returns A `WorldDate` object is being returned.
   */
  static fromISOString(dateString) {
    try {
      return new _WorldDate(new Date(dateString));
    } catch (e) {
      throw new Error("Invalid ISO string");
    }
  }
  /**
   * The function `fromUTCString` converts a UTC date string into a `WorldDate` object.
   * @param {string} dateString - The `dateString` parameter is a string representing a date and time
   * in UTC format. It is used as input to create a new `WorldDate` object by converting the string
   * to a JavaScript `Date` object.
   * @returns An instance of the `WorldDate` class is being returned, created from a `Date` object
   * parsed from the input `dateString`.
   */
  static fromUTCString(dateString) {
    try {
      return new _WorldDate(new Date(dateString));
    } catch (e) {
      throw new Error("Invalid date string");
    }
  }
  /**
   * The function `setLocaleDateTimes` in TypeScript sets a custom date and time in a `WorldDate`
   * object.
   * @param {number} day - The `day` parameter represents the day of the month.
   * @param {number} month - The `month` parameter in the `setLocaleDateTimes` function represents
   * the month of the year. It is a number between 1 and 12, where 1 represents January and 12
   * represents December.
   * @param {number} year - The `year` parameter is the year value for the date you want to set.
   * @param {number} [hours] - The `hours` parameter in the `setLocaleDateTimes` function represents
   * the hour value in a 24-hour format (0-23). It is an optional parameter that allows you to
   * specify the hour component of the date and time you want to set. If provided, it sets the hours
   * component
   * @param {number} [minutes] - The `minutes` parameter in the `setLocaleDateTimes` function
   * represents the minutes component of the time to be set. It is an optional parameter, meaning it
   * can be provided but is not required. If a value is not provided for `minutes`, it defaults to 0.
   * @param {number} [seconds] - The `seconds` parameter in the `setLocaleDateTimes` function is an
   * optional parameter that represents the seconds component of the time. If a value is provided for
   * the `seconds` parameter, it will be used to set the seconds component of the date and time. If
   * no value is provided,
   * @param {number} [milliseconds] - The `milliseconds` parameter in the `setLocaleDateTimes`
   * function is an optional parameter that represents the milliseconds value of the time to be set.
   * If provided, it will set the milliseconds of the date object being created or modified. If not
   * provided, it defaults to 0.
   * @returns An instance of the `WorldDate` class is being returned, which is created using the
   * parsed date values provided as parameters to the `setLocaleDateTimes` function.
   */
  static setLocaleDateTimes(day, month, year, hours, minutes, seconds, milliseconds) {
    const parsedDate = /* @__PURE__ */ new Date();
    parsedDate.setFullYear(year, month - 1, day);
    parsedDate.setHours(hours ?? 0, minutes ?? 0, seconds ?? 0, milliseconds ?? 0);
    return new _WorldDate(parsedDate);
  }
  // Getters
  /**
   * This function returns the milliseconds component of the date in UTC time.
   * @returns The `getUTCMilliseconds()` method returns the milliseconds (from 0 to 999) of the
   * specified date and time in Coordinated Universal Time (UTC).
   */
  getUTCMilliseconds() {
    return this.date.getUTCMilliseconds();
  }
  /**
   * The `getUTCSeconds` function returns the seconds component of a Date object in Coordinated
   * Universal Time (UTC).
   * @returns The `getUTCSeconds()` method is being called on the `date` property of the current
   * object, and it returns the seconds (from 0 to 59) of the specified date and time in Coordinated
   * Universal Time (UTC).
   */
  getUTCSeconds() {
    return this.date.getUTCSeconds();
  }
  /**
   * This function returns the minutes component of the UTC time from a given date.
   * @returns The `getUTCMinutes()` method is being called on the `date` property of the current
   * object, and it returns the minutes (from 0 to 59) of the UTC time of the date stored in the
   * `date` property.
   */
  getUTCMinutes() {
    return this.date.getUTCMinutes();
  }
  /**
   * This function returns the hour component of a Date object in Coordinated Universal Time (UTC).
   * @returns The `getUTCHours()` method is being called on the `date` object, which returns the hour
   * (0-23) in Coordinated Universal Time (UTC).
   */
  getUTCHours() {
    return this.date.getUTCHours();
  }
  /**
   * The function `getUTCDay` returns the day of the week (0-6) for a given date in UTC time.
   * @returns The `getUTCDay()` method returns the day of the week (from 0 to 6) for the specified
   * date according to universal time (UTC).
   */
  getUTCDay() {
    return this.date.getUTCDay();
  }
  /**
   * The `getUTCDate` function returns the day of the month (1-31) of a Date object in UTC time.
   * @returns The `getUTCDate()` method is returning the day of the month (from 1 to 31) of the date
   * object in Coordinated Universal Time (UTC).
   */
  getUTCDate() {
    return this.date.getUTCDate();
  }
  /**
   * This function returns the month component (0-11) of a Date object in UTC time.
   * @returns The `getUTCMonth()` method is being called on the `date` object to retrieve the month
   * component of the date in UTC time. The method returns a number representing the month, where
   * January is 0 and December is 11.
   */
  getUTCMonth() {
    return this.date.getUTCMonth();
  }
  /**
   * The function getUTCYear() returns the UTC year of a given date.
   * @returns The `getUTCYear()` method returns the year (as a four-digit number) of the specified
   * date according to universal time.
   */
  getUTCYear() {
    return this.date.getUTCFullYear();
  }
  /**
   * The getTime function returns the time in milliseconds of a given date.
   * @returns The `getTime()` method is being called on the `date` property of the current object,
   * and it returns the number of milliseconds since January 1, 1970, 00:00:00 UTC represented by the
   * `Date` object.
   */
  getTime() {
    return this.date.getTime();
  }
  /**
   * The `getTimestamp` function in TypeScript returns the timestamp of a date object.
   * @returns The `getTimestamp` method is returning the timestamp value of the `date` property in
   * milliseconds.
   */
  getTimestamp() {
    return this.date.getTime();
  }
  /**
   * The `getUnixTimestamp` function returns the Unix timestamp of a given date.
   * @returns The `getUnixTimestamp` method is returning the Unix timestamp of the current date and
   * time in seconds.
   */
  getUnixTimestamp() {
    return Math.floor(this.date.getTime() / 1e3);
  }
  /**
   * The `getDayOfYear` function calculates the day of the year for a given date.
   * @returns The `getDayOfYear` method is returning the day of the year for the given date. It
   * calculates the day of the year by finding the difference in milliseconds between the given date
   * and the start of the year, then dividing that by the number of milliseconds in a day and
   * rounding down to the nearest whole number.
   */
  getDayOfYear() {
    const start = new Date(this.date.getFullYear(), 0, 0);
    const diff = this.date.getTime() - start.getTime();
    const oneDay = 1e3 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  /**
   * The function `getWeekOfYear` calculates the week number of a given date within a year.
   * @returns The `getWeekOfYear` function returns the week number of the year for a given date.
   */
  getWeekOfYear() {
    const date = new Date(this.date);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    const yearStart = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date.getTime() - yearStart.getTime()) / 864e5 + 1) / 7);
  }
  /**
   * This TypeScript function returns the number of days in the month of a given date.
   * @returns The `getDaysInMonth()` function returns the number of days in the current month of the
   * date object it is called on.
   */
  getDaysInMonth() {
    return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
  }
  /**
   * The function `getDaysInYear` returns the number of days in a year based on whether it is a leap
   * year or not.
   * @returns The `getDaysInYear()` method returns the number of days in a year based on whether it
   * is a leap year or not. If the year of the date object is divisible by 4 (leap year condition),
   * it returns 366 (number of days in a leap year), otherwise it returns 365 (number of days in a
   * non-leap year).
   */
  getDaysInYear() {
    return this.date.getFullYear() % 4 === 0 ? 366 : 365;
  }
  /**
   * The function `getQuarter()` returns the quarter of the year based on the month of a given date.
   * @returns The `getQuarter()` function returns the current quarter of the year based on the month
   * of the date.
   */
  getQuarter() {
    return Math.floor(this.date.getMonth() / 3) + 1;
  }
  /**
   * The function `getWeeksInMonth` calculates the number of weeks in a month based on the number of
   * days in that month.
   * @returns The function `getWeeksInMonth()` is returning the number of weeks in a month based on
   * the number of days in that month. It calculates this by dividing the total number of days in the
   * month by 7 (the number of days in a week) and then flooring the result to get the whole number
   * of weeks.
   */
  getWeeksInMonth() {
    return Math.floor(this.getDaysInMonth() / 7);
  }
  /**
   * getZone() returns the time zone offset in hours for the current date.
   * @returns The `getZone()` method returns the time zone offset in hours for the current date.
   * It calculates the time zone offset by dividing the time zone offset in minutes by 60 and
   * returning the result.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getZone()); // -5
  * ```
  */
  getZone() {
    return -this.date.getTimezoneOffset() / 60;
  }
  /**
   * getLocalDay() returns the day of the week (0-6) for the current date.
   * @returns The `getLocalDay()` method returns the day of the week (from 0 to 6) for the current
   * date according to local time.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getLocalDay()); // 3
   * ```
  */
  getLocalDay() {
    return this.date.getDay();
  }
  /**
   * getLocalDate() returns the day of the month (1-31) for the current date.
   * @returns The `getLocalDate()` method returns the day of the month (from 1 to 31) for the current
   * date according to local time.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getLocalDate()); // 15
   * ```
  */
  getLocalDate() {
    return this.date.getDate();
  }
  /**
   * getLocalMonth() returns the month (0-11) for the current date.
   * @returns The `getLocalMonth()` method returns the month (from 0 to 11) for the current date
   * according to local time.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getLocalMonth()); // 11
   * ```
  */
  getLocalMonth() {
    return this.date.getMonth();
  }
  /**
   * getLocalYear() returns the year for the current date.
   * @returns The `getLocalYear()` method returns the year for the current date according to local
   * time.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getLocalYear()); // 2022
   * ```
  */
  getLocalYear() {
    return this.date.getFullYear();
  }
  /**
   * getLocalHours() returns the hour (0-23) for the current date.
   * @returns The `getLocalHours()` method returns the hour (from 0 to 23) for the current date
   * according to local time.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getLocalHours()); // 15
   * ```
  */
  getLocalHours() {
    return this.date.getHours();
  }
  /**
   * getLocalMinutes() returns the minutes (0-59) for the current date.
   * @returns The `getLocalMinutes()` method returns the minutes (from 0 to 59) for the current date
   * according to local time.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getLocalMinutes()); // 30
   * ```
  */
  getLocalMinutes() {
    return this.date.getMinutes();
  }
  /**
   * getLocalSeconds() returns the seconds (0-59) for the current date.
   * @returns The `getLocalSeconds()` method returns the seconds (from 0 to 59) for the current date
   * according to local time.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getLocalSeconds()); // 45
   * ```
  */
  getLocalSeconds() {
    return this.date.getSeconds();
  }
  /**
   * getLocalMilliseconds() returns the milliseconds (0-999) for the current date.
   * @returns The `getLocalMilliseconds()` method returns the milliseconds (from 0 to 999) for the
   * current date according to local time.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getLocalMilliseconds()); // 500
   * ```
  */
  getLocalMilliseconds() {
    return this.date.getMilliseconds();
  }
  /**
   * fromNow() returns a string representing the relative time from the current date to the date
   * @returns The `fromNow()` method returns a string representing the relative time from the current
   * date to the date stored in the `date` property. It calculates the difference in milliseconds
   * between the current date and the stored date and then formats the result as a human-readable
   * string.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.fromNow()); // just now
   * ```
   */
  fromNow() {
    const diff = (/* @__PURE__ */ new Date()).getTime() - this.date.getTime();
    if (diff > 0 && diff < 1e3) {
      return "just now";
    }
    const seconds = Math.floor(Math.abs(diff) / 1e3);
    if (diff < 0 && seconds < 60) {
      return seconds + "s in coming";
    } else if (seconds < 60) {
      return seconds + "s ago";
    }
    const minutes = Math.floor(seconds / 60);
    if (diff < 0 && minutes < 60) {
      return minutes + "m in coming";
    } else if (minutes < 60) {
      return minutes + "m ago";
    }
    const hours = Math.floor(minutes / 60);
    if (diff < 0 && hours < 24) {
      return hours + "h in coming";
    } else if (hours < 24) {
      return hours + "h ago";
    }
    const days = Math.floor(hours / 24);
    if (diff < 0 && days < 30) {
      return days + "d in coming";
    } else if (days < 30) {
      return days + "d ago";
    }
    const months = Math.floor(days / 30);
    if (diff < 0 && months < 12) {
      return months + "mo in coming";
    } else if (months < 12) {
      return months + "mo ago";
    }
    const years = Math.floor(months / 12);
    if (diff < 0 && years < 1) {
      return years + "y in coming";
    } else {
      return years + "y ago";
    }
  }
  // Setters
  /**
   * The `setUTCMilliseconds` function sets the milliseconds component of the date in UTC time.
   * @param {number} milliseconds - The `milliseconds` parameter is a number representing the
   * milliseconds component of the date in Coordinated Universal Time (UTC).
   * @returns The `setUTCMilliseconds` method returns a new `WorldDate` object with the milliseconds
   * component set to the specified value.
   */
  setUTCMilliseconds(milliseconds) {
    if (milliseconds < 0) {
      throw new Error("Milliseconds cannot be negative");
    }
    const result = new Date(this.date);
    result.setUTCMilliseconds(milliseconds);
    return new _WorldDate(result);
  }
  /**
   * The `setUTCSeconds` function sets the seconds component of the date in UTC time.
   * @param {number} seconds - The `seconds` parameter is a number representing the seconds component
   * of the date in Coordinated Universal Time (UTC).
   * @returns The `setUTCSeconds` method returns a new `WorldDate` object with the seconds component
   * set to the specified value.
   */
  setUTCSeconds(seconds) {
    if (seconds < 0) {
      throw new Error("Seconds cannot be negative");
    }
    const result = new Date(this.date);
    result.setUTCSeconds(seconds);
    return new _WorldDate(result);
  }
  /**
   * The `setUTCMinutes` function sets the minutes component of the date in UTC time.
   * @param {number} minutes - The `minutes` parameter is a number representing the minutes component
   * of the date in Coordinated Universal Time (UTC).
   * @returns The `setUTCMinutes` method returns a new `WorldDate` object with the minutes component
   * set to the specified value.
   */
  setUTCMinutes(minutes) {
    if (minutes < 0) {
      throw new Error("Minutes cannot be negative");
    }
    const result = new Date(this.date);
    result.setUTCMinutes(minutes);
    return new _WorldDate(result);
  }
  /**
   * The `setUTCHours` function sets the hour component of the date in UTC time.
   * @param {number} hours - The `hours` parameter is a number representing the hour component of the
   * date in Coordinated Universal Time (UTC).
   * @returns The `setUTCHours` method returns a new `WorldDate` object with the hour component set to
   * the specified value.
   */
  setUTCHours(hours) {
    if (hours < 0) {
      throw new Error("Hours cannot be negative");
    }
    const result = new Date(this.date);
    result.setUTCHours(hours);
    return new _WorldDate(result);
  }
  /**
   * The `setUTCDate` function sets the day of the month (1-31) of the date in UTC time.
   * @param {number} date - The `date` parameter is a number representing the day of the month (from
   * 1 to 31) in Coordinated Universal Time (UTC).
   * @returns The `setUTCDate` method returns a new `WorldDate` object with the day of the month set to
   * the specified value.
   */
  setUTCDate(date) {
    if (date < 1 || date > this.getDaysInMonth()) {
      throw new Error("Invalid date");
    }
    const result = new Date(this.date);
    result.setUTCDate(date);
    return new _WorldDate(result);
  }
  /**
   * The `setUTCMonth` function sets the month (1-12) of the date in UTC time.
   * @param {number} month - The `month` parameter is a number representing the month of the year (from
   * 1 to 12) in Coordinated Universal Time (UTC).
   * @returns The `setUTCMonth` method returns a new `WorldDate` object with the month set to the
   * specified value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setUTCMonth(12)); // 2022-12-15T15:30:45.500Z
   * ```
   */
  setUTCMonth(month) {
    if (month < 1 || month > 12) {
      throw new Error("Invalid month");
    }
    const result = new Date(this.date);
    result.setUTCMonth(month);
    return new _WorldDate(result);
  }
  /**
   * The `setUTCYear` function sets the year of the date in UTC time.
   * @param {number} year - The `year` parameter is a number representing the year of the date in
   * Coordinated Universal Time (UTC).
   * @returns The `setUTCYear` method returns a new `WorldDate` object with the year set to the
   * specified value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setUTCYear(2023)); // 2023-12-15T15:30:45.500Z
   * ```
   */
  setUTCYear(year) {
    if (year < 0) {
      throw new Error("Invalid year");
    }
    const result = new Date(this.date);
    result.setUTCFullYear(year);
    return new _WorldDate(result);
  }
  /**
   * The `setTime` function sets the time of the date in UTC time.
   * @param {number} time - The `time` parameter is a number representing the number of milliseconds
   * since January 1, 1970, 00:00:00 UTC.
   * @returns The `setTime` method returns a new `WorldDate` object with the time set to the specified
   * value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setTime(1639569045500)); // 2022-12-15T15:30:45.500Z
   * ```
   */
  setTime(time) {
    if (time < 0) {
      throw new Error("Invalid time");
    }
    const result = new Date(this.date);
    result.setTime(time);
    return new _WorldDate(result);
  }
  /**
   * The `setUnixTimestamp` function sets the date and time based on a Unix timestamp.
   * @param {number} timestamp - The `timestamp` parameter is a number representing the number of
   * seconds since January 1, 1970, 00:00:00 UTC.
   * @returns The `setUnixTimestamp` method returns a new `WorldDate` object with the date and time set
   * to the specified Unix timestamp.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setUnixTimestamp(1639569045)); // 2022-12-15T15:30:45.000Z
   * ```
   */
  setUnixTimestamp(timestamp) {
    if (isNaN(timestamp) || timestamp < 0) {
      throw new Error("Invalid timestamp");
    }
    return new _WorldDate(new Date(timestamp * 1e3));
  }
  /**
   * setLocalMilliseconds() sets the milliseconds component of the date in local time.
   * @param milliseconds - The `milliseconds` parameter is a number representing the milliseconds
   * component of the date in local time.
   * @returns The `setLocalMilliseconds` method returns a new `WorldDate` object with the milliseconds
   * component set to the specified value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setLocalMilliseconds(500)); // 2022-12-15T15:30:45.500Z
   * ```
   */
  setLocalMilliseconds(milliseconds) {
    if (milliseconds < 0) {
      throw new Error("Milliseconds cannot be negative");
    }
    const result = new Date(this.date);
    result.setMilliseconds(milliseconds);
    return new _WorldDate(result);
  }
  /**
   * setLocalSeconds() sets the seconds component of the date in local time.
   * @param seconds - The `seconds` parameter is a number representing the seconds component of the
   * date in local time.
   * @returns The `setLocalSeconds` method returns a new `WorldDate` object with the seconds component
   * set to the specified value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setLocalSeconds(45)); // 2022-12-15T15:30:45.500Z
   * ```
   */
  setLocalSeconds(seconds) {
    if (seconds < 0) {
      throw new Error("Seconds cannot be negative");
    }
    const result = new Date(this.date);
    result.setSeconds(seconds);
    return new _WorldDate(result);
  }
  /**
   * setLocalMinutes() sets the minutes component of the date in local time.
   * @param minutes - The `minutes` parameter is a number representing the minutes component of the
   * date in local time.
   * @returns The `setLocalMinutes` method returns a new `WorldDate` object with the minutes component
   * set to the specified value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setLocalMinutes(30)); // 2022-12-15T15:30:45.500Z
   * ```
   */
  setLocalMinutes(minutes) {
    if (minutes < 0) {
      throw new Error("Minutes cannot be negative");
    }
    const result = new Date(this.date);
    result.setMinutes(minutes);
    return new _WorldDate(result);
  }
  /**
   * setLocalHours() sets the hour component of the date in local time.
   * @param hours - The `hours` parameter is a number representing the hour component of the date in
   * local time.
   * @returns The `setLocalHours` method returns a new `WorldDate` object with the hour component set
   * to the specified value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setLocalHours(15)); // 2022-12-15T15:30:45.500Z
   * ```
   */
  setLocalHours(hours) {
    if (hours < 0) {
      throw new Error("Hours cannot be negative");
    }
    const result = new Date(this.date);
    result.setHours(hours);
    return new _WorldDate(result);
  }
  /**
   * setLocalDate() sets the day of the month (1-31) of the date in local time.
   * @param date - The `date` parameter is a number representing the day of the month (from 1 to 31) in
   * local time.
   * @returns The `setLocalDate` method returns a new `WorldDate` object with the day of the month set
   * to the specified value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setLocalDate(15)); // 2022-12-15T15:30:45.500Z
   * ```
   */
  setLocalDate(date) {
    if (date < 1 || date > this.getDaysInMonth()) {
      throw new Error("Invalid date");
    }
    const result = new Date(this.date);
    result.setDate(date);
    return new _WorldDate(result);
  }
  /**
   * setLocalMonth() sets the month (1-12) of the date in local time.
   * @param month - The `month` parameter is a number representing the month of the year (from 1 to 12)
   * in local time.
   * @returns The `setLocalMonth` method returns a new `WorldDate` object with the month set to the
   * specified value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setLocalMonth(12)); // 2022-12-15T15:30:45.500Z
   * ```
   */
  setLocalMonth(month) {
    if (month < 1 || month > 12) {
      throw new Error("Invalid month");
    }
    const result = new Date(this.date);
    result.setMonth(month);
    return new _WorldDate(result);
  }
  /**
   * setLocalYear() sets the year of the date in local time.
   * @param year - The `year` parameter is a number representing the year of the date in local time.
   * @returns The `setLocalYear` method returns a new `WorldDate` object with the year set to the
   * specified value.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.setLocalYear(2023)); // 2023-12-15T15:30:45.500Z
   * ```
   */
  setLocalYear(year) {
    if (year < 0) {
      throw new Error("Invalid year");
    }
    const result = new Date(this.date);
    result.setFullYear(year);
    return new _WorldDate(result);
  }
  // Validation
  /**
   * The `isValid` function checks if the date is valid.
   * @returns The `isValid` method returns a boolean value indicating whether the date is valid.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.isValid()); // true
   * ```
   */
  isValid() {
    return !isNaN(this.date.getTime());
  }
  /**
   * The `isLeapYear` function checks if the year of the date is a leap year.
   * @returns The `isLeapYear` method returns a boolean value indicating whether the year of the date
   * is a leap year.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.isLeapYear()); // false
   * ```
   */
  isLeapYear() {
    if (this.date.getFullYear() % 100 === 0) {
      return this.date.getFullYear() % 400 === 0;
    }
    return this.date.getFullYear() % 4 === 0;
  }
  /**
   * isWeekend() checks if the day of the date is a weekend.
   * @returns The `isWeekend` method returns a boolean value indicating whether the day of the date is a
   * weekend.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.isWeekend()); // false
   * ```
   */
  isWeekend() {
    return this.date.getDay() === 0 || this.date.getDay() === 6;
  }
  /**
   * isToday() checks if the date is today.
   * @returns The `isToday` method returns a boolean value indicating whether the date is today.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.isToday()); // true
   * ```
   */
  isToday() {
    return this.isSameDay(_WorldDate.now());
  }
  /**
   * isTomorrow() checks if the date is tomorrow.
   * @returns The `isTomorrow` method returns a boolean value indicating whether the date is tomorrow.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.isTomorrow()); // false
   * ```
   */
  isTomorrow() {
    return this.isSameDay(_WorldDate.tomorrow());
  }
  /**
   * isYesterday() checks if the date is yesterday.
   * @returns The `isYesterday` method returns a boolean value indicating whether the date is yesterday.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.isYesterday()); // false
   * ```
   */
  isYesterday() {
    return this.isSameDay(_WorldDate.yesterday());
  }
  /**
   * toTimeZone() converts the date and time to a different time zone.
   * @param zone - The `zone` parameter is a number representing the time zone offset in hours.
   * @returns The `toTimeZone` method returns a new `WorldDate` object with the date and time converted
   * to the specified time zone.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toTimeZone(-5)); // 2022-12-15T10:30:45.500Z
   * ```
   */
  toTimeZone(zone) {
    if (zone < -12 || zone > 12) {
      throw new Error("Invalid time zone");
    }
    const result = new Date(this.date);
    result.setTime(result.getTime() + (zone - this.getZone()) * 36e5);
    return new _WorldDate(result);
  }
  // Convert a date and time to a timestamp
  /**
   * toTimestamp() returns the timestamp of the date.
   * @returns The `toTimestamp` method returns the timestamp value of the date in milliseconds.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toTimestamp()); // 1639569045500
   * ```
   */
  toTimestamp() {
    return this.date.getTime();
  }
  /**
   * toUnix() returns the Unix timestamp of the date.
   * @returns The `toUnix` method returns the Unix timestamp of the date in seconds.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toUnix()); // 1639569045
   * ```
   */
  toUnix() {
    return Math.floor(this.date.getTime() / 1e3);
  }
  // Convert a date and time to a string
  /**
   * toString() returns a string representing the date and time.
   * @returns The `toString` method returns a string representing the date and time.
   */
  toString() {
    return this.date.toString();
  }
  // Convert a date and time to a human-readable string
  /**
   * toDateString() returns a string representing the date.
   * @returns The `toDateString` method returns a string representing the date.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toDateString());
   * ```
   */
  toDateString() {
    return this.date.toDateString();
  }
  /**
   * toTimeString() returns a string representing the time.
   * @returns The `toTimeString` method returns a string representing the time.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toTimeString());
   * ```
   */
  toTimeString() {
    return this.date.toTimeString();
  }
  /**
   * toLocaleDateString() returns a string representing the date in the current locale.
   * @returns The `toLocaleDateString` method returns a string representing the date in the current
   * locale.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toLocaleDateString());
   * ```
   */
  toLocaleDateString() {
    return this.date.toLocaleDateString();
  }
  /**
   * toLocaleTimeString() returns a string representing the time in the current locale.
   * @returns The `toLocaleTimeString` method returns a string representing the time in the current
   * locale.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toLocaleTimeString());
   * ```
   */
  toLocaleTimeString() {
    return this.date.toLocaleTimeString();
  }
  /**
   * toLocaleString() returns a string representing the date and time in the current locale.
   * @returns The `toLocaleString` method returns a string representing the date and time in the current
   * locale.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toLocaleString());
   * ```
   */
  toLocaleString() {
    return this.date.toLocaleString();
  }
  /**
   * toLocaleFormat() returns a string representing the date and time in the current locale.
   * @param options - The `options` parameter is an object with properties that control the format of
   * the string.
   * @returns The `toLocaleFormat` method returns a string representing the date and time in the current
   * locale.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toLocaleFormat({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // Wednesday, December 15, 2022
   * ```
   */
  toLocaleFormat(options) {
    return this.date.toLocaleString(void 0, options);
  }
  /**
   * toISOString() returns a string representing the date and time in ISO format.
   * @returns The `toISOString` method returns a string representing the date and time in ISO format.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toISOString());
   * ```
   */
  toISOString() {
    return this.date.toISOString();
  }
  /**
   * toUTCString() returns a string representing the date and time in UTC time.
   * @returns The `toUTCString` method returns a string representing the date and time in Coordinated
   * Universal Time (UTC).
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.toUTCString());
   * ```
   */
  toUTCString() {
    return this.date.toUTCString();
  }
  // Calendar Layout
  /**
   * The `getCalendar` function returns a calendar layout for the month of the date.
   * @returns The `getCalendar` method returns a two-dimensional array representing the calendar layout
   * for the month of the date. Each element in the array represents a week, and each subarray represents
   * the days of the week.
   * @example
   * ```typescript
   * const date = new WorldDate();
   * console.log(date.getCalendar());
   * ```
   */
  getCalendar() {
    const calendar = [];
    const daysInMonth = this.getDaysInMonth();
    const firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    let week = [];
    for (let i = 0; i < firstDay; i++) {
      week.push(0);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }
    for (let i = 0; i <= 7 - week.length; i++) {
      week.push(0);
    }
    calendar.push(week);
    return calendar;
  }
};
var src_default = WorldDate;
export {
  src_default as default
};
//# sourceMappingURL=index.mjs.map