# SudokuSolver

This project is an Angular application that solves Sudoku puzzles. The solver uses a backtracking algorithm to find the solution.

## Setup

To run the application, clone the repository and install the dependencies using `npm install`. Then, start the development server using `ng serve`. Navigate to `http://localhost:4200/` in your web browser to view the application.

## Difficulty Levels

The application has three difficulty levels: easy, medium, and hard. To change the difficulty level, select the desired option from the dropdown menu.

## Algorithm

The solver uses a backtracking algorithm to find the solution to the Sudoku puzzle. Backtracking is a type of brute-force algorithm that incrementally builds solutions and discards them when they are found to be invalid.

The algorithm works by placing a number in an empty cell and checking if it violates any of the Sudoku rules. If the number is valid, the algorithm moves on to the next empty cell and repeats the process. If the number is invalid, the algorithm backtracks to the previous cell and tries a different number.

The algorithm continues until a solution is found or all possible combinations have been tried.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
