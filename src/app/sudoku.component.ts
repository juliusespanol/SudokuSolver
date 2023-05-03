import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SudokuService } from './sudoku.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
    selector: 'app-sudoku',
    templateUrl: './sudoku.component.html',
    styleUrls: ['./sudoku.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush // Add this line to set the change detection strategy
})
export class SudokuComponent {
    selectedDifficulty = 'easy'; // Default difficulty level
    sudokuGrid: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
    rowIndex(row: number[]): number {
        return this.sudokuGrid.indexOf(row);
      }
    
      colIndex(row: number[], cell: number): number {
        return row.indexOf(cell);
      }

    constructor(private sudokuService: SudokuService, private changeDetectorRef: ChangeDetectorRef) { }


  // Implement methods to handle the UI events here
  solve() {
    let steps: { row: number, col: number, num: number }[] = [];
    if (this.sudokuService.solveSudoku(this.sudokuGrid, steps)) {
      console.log('Sudoku solved!');
      this.animateSteps(steps);
    } else {
      console.log('No solution found.');
      alert('This Sudoku puzzle is unsolvable!');
    }
  }
  
  
  private async animateSteps(steps: { row: number, col: number, num: number }[]) {
    const delay = 100; // Set the delay between each step in milliseconds
  
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      this.sudokuGrid[step.row][step.col] = step.num;
      this.changeDetectorRef.detectChanges();
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  
  

  validateInput(row: number, col: number) {
    const value = this.sudokuGrid[row][col];
    if (value < 1 || value > 9 || isNaN(value)) {
      this.sudokuGrid[row][col] = 0;
    }
  }
  
  generate() {
    this.sudokuGrid = this.sudokuService.generatePuzzle(this.selectedDifficulty);
    this.changeDetectorRef.detectChanges();
  }
  
  
}
