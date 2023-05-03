import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {
  constructor() { }

  solveSudoku(board: number[][], steps: { row: number, col: number, num: number }[] = []) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (this.isValid(board, row, col, num)) {
              board[row][col] = num;
              steps.push({ row, col, num });
  
              if (this.solveSudoku(board, steps)) {
                return true;
              }
  
              board[row][col] = 0;
              steps.push({ row, col, num: 0 });
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  
  
  isValid(board: number[][], row: number, col: number, num: number): boolean {
    // Check the row
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }
    // Check the column
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }
    // Check the box
    let startRow = row - row % 3, startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i + startRow][j + startCol] === num) {
          return false;
        }
      }
    }
    return true;
  }

  generatePuzzle(difficulty: string) {
    // First, create a solved Sudoku puzzle
    let puzzle = Array.from({ length: 9 }, () => Array(9).fill(0));
    this.solveSudoku(puzzle);

    // Then, remove some numbers to create a puzzle
    let cellsToClear = 0;
    switch (difficulty) {
      case 'easy':
        cellsToClear = 40;
        break;
      case 'medium':
        cellsToClear = 50;
        break;
      case 'hard':
        cellsToClear = 60;
        break;
      default:
        cellsToClear = 40; // Default to 'easy' difficulty
    }
    let clearedCells = 0;
    while (clearedCells < cellsToClear) {
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);
      if (puzzle[row][col] !== 0) {
        puzzle[row][col] = 0;
        clearedCells++;
      }
    }

    return puzzle;
}

  
  
}
