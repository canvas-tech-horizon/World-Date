[![NPM version][npm-version-image]][npm-url]
[![MIT License][license-image]][license-url]
[![FOSSA Status][fossa-badge-image]][fossa-badge-url]

# WorldDate

Welcome to the WorldDate library – a powerful and versatile JavaScript library for seamless date and time manipulation. This library offers a comprehensive set of functions designed to handle various aspects of date and time, ensuring accuracy and ease of use in a variety of applications.

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

