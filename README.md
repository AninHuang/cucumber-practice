# cucumber-practice
> Use Cucumber to develop a small library that can figure out whether it’s Friday yet.

## Pre-requisites
* [Node.js/npm](https://nodejs.org/en/)

## Build Setup

```bash
# install dependencies
npm install

# run cucumber
npm test
```

## Cucumber Gherkin template feature file

```bash
Feature: <title>
  <brief description>
  In order to <do something>
  As a <user>
  I want to <achieve some goal>

  Scenario: <title>
    Given <pre-conditions to the test>
    When <action behavior>
    Then <expectation>

# Using variables and examples
Feature: <title>
  <brief description>

  Scenario Outline: <title>
    Given <pre-conditions to the test>
    When <action behavior>
    Then <expectation>
    
  Examples:
    | variable_name1 | variable_value1 |
    | variable_name2 | variable_value2 |
    | anything else! | other_value     |
```
