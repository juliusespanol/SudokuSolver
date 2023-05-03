## SudokuSolver

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.8.

### Setup

To run this project locally, you need to have Node.js and Angular CLI installed on your machine. Follow the steps below to run the project:

1. Clone this repository to your local machine using `git clone https://github.com/juliusespanol/SudokuSolver.git`.
2. Navigate to the project directory using `cd SudokuSolver`.
3. Install the project dependencies using `npm install`.
4. Start the development server using `ng serve`.
5. Open your web browser and navigate to `http://localhost:4200/`.

### Difficulty Levels

This SudokuSolver supports three difficulty levels: easy, medium, and hard. You can select the difficulty level using the dropdown menu located in the toolbar.

### Algorithm Used

The Sudoku-solving algorithm used in this project is a backtracking algorithm. The algorithm works as follows:

1. Find an empty cell in the puzzle.
2. Attempt to fill the cell with a number between 1 and 9.
3. Check if the number violates any of the Sudoku rules (no repeating numbers in the same row, column, or 3x3 subgrid).
4. If the number is valid, move on to the next empty cell and repeat steps 2-4.
5. If the number is not valid, try the next number between 1 and 9.
6. If all numbers have been tried and none of them are valid, backtrack to the previous cell and try a different number.
7. Repeat steps 2-6 until the puzzle is solved.


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
