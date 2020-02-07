# _Galactic Age Calculator_

#### _Week 5 Independent Friday Assignment for Epicodus, 02.7.2020_

#### By _**Tiffany Siu**_

## Description

_This site is the Week 5 Friday independent assignment for Epicodus' full time Intro to Programming and C#/React course.  It is a site for a user to see how old they would be if their age was calculated using the solar year on other planets._

_In this program the user is able to input a positive integer number for their age and have the option to put in a positive integer number for the life expectancy amount.  The user's age in years on the different planets are then shown, using the information in the table below.  The program will also tell the user that depending on the life expectancy for them, how many years they have until they reach that age or, if they are above that age, how many years they have lived past the life expectancy age._

| Planet   | Equivalent Year on Planet to Earth years |
| :------: | :--------------------------------------: |
| Mercury  | 1 Mercury year = 0.24 Earth years        |
| Venus    | 1 Venus year = 0.62 Earth years          |
| Mars     | 1 Mars year = 1.88 Earth years           |
| Jupiter  | 1 Jupiter year = 11.86 Earth years       |

_This program was created to focus on creating tests and TDD specs before writing code using the Red, Green, Refactor workflow.  As such the UI is currently very minimal.  It also practices using node and npm to test, debug, and run the program._

## Setup/Installation Requirements

### Requirements to Run
* _Web Browser_
* _Node.js_
* _NPM_
* _Webpack_

### Instructions

*This page may be viewed by:*

1. Download and install Node.js from the [official website](https://nodejs.org/en/download/)
2. Clone the [repository](https://github.com/TSiu88/beep-boop.git) from my [GitHub page](https://github.com/TSiu88)
3. Use a command line/Bash to move to the project directory with `cd project-directory-here`
4. Run `npm install` in command line/Bash to get all dependencies. 
5. Run `npm run start` in command line/Bash to start up the program in your browser.

## Other Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _JQuery 3.4.1_
* _Bootstrap 4.4.1_
* _ESLint_
* _Babel_
* _Jest_
* _Markdown_

## Notable Features
_In this program I used ES6 template literals and createElements to dynamically create divs for HTML and insert the planets and the information for the ages into them._

## Specifications

* _The program should create a Calulator object and save the inputted age (required) and life expectancy (with default 78 if not given)._
  * _Example Input: age=30, life expectancy=80_
  * _Example Output: Calculator created with age=30 and life expectancy=80_
* _The program shows an alert that user input of age is required and to please enter a valid number into input._
  * _Example Input: "hi"_
  * _Example Output: alert of "Age required.  Please enter a valid number for age."_
* _The program shows an alert that user input of life expectancy needs to be a valid positive number and to please enter a valid number into input._
  * _Example Input: "hi"_
  * _Example Output: alert of "Please enter a valid number for life expectancy."_
* _The program returns age converted to Mercury years from input._
  * _Example Input: Age=25_
  * _Example Output: "104 Mercury years"_
* _The program returns age converted to Venus years from input._
  * _Example Input: Age=25_
  * _Example Output: "40 Venus years"_
* _The program returns age converted to Mars years from input._
  * _Example Input: Age=25_
  * _Example Output: "13 Mars years"_
* _The program returns age converted to Jupiter years from input._
  * _Example Input: Age=25_
  * _Example Output: "2 Jupiter years"_
* _The program returns an array of ages from the inputted age for all planets including earth._
  * _Example Input: Age=25_
  * _Example Output: [25, 104, 40, 13, 2]_
* _The program subtracts the given age from the given life expectancy and returns the difference in years._
  * _Example Input: age=25, life expectancy=78_
  * _Example Output: "53 years left until reach life expectancy"_
* _The program switches to say "years past life expectancy" and return positive number if calculated life expectancy and age difference is negative_
  * _Example Input: age=84, life expectancy=78_
  * _Example Output: "6 years past life expectancy_

## Screenshots

<!-- _Here is a snippet of what the input looks like:_

![Snippet of input fields](/src/img/snippet1.png)

_Here is a preview of what the output looks like:_

![Snippet of output box](/src/img/snippet2.png) -->

<!-- _{Show pictures using ![alt text](image.jpg), show what library does as concisely as possible but don't need to explain how project solves problem from `code`_ -->

## Test Case Example
_Tests are done through Jest and are run from the command line prompt with `npm test`._

_Some example tests and results:_

![Snippet of an example test](/src/img/tester1.png)

![Snippet of an example result](/src/img/tester2.png)
<!-- _describe and show how to run tests with `code` examples}_ -->

## Known Bugs

_There are currently no known bugs in this program_

## Support and contact details

_If there are any question or concerns please contact me at my [email](mailto:tsiu88@gmail.com). Thank you._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Tiffany Siu_**
