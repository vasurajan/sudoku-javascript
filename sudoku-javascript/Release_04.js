# Optimize the solver function for better time complexity


  // main function
  var solveSudoku = function(board){
      //base condition
      if(!nextIndex(board)){         //If there is no next index inside the board
            return true;
      }
      //  But if there are some empty cells in the board
      let boardIndexes = nextIndex(board)  //  If there are, finding their indexes(eg [0,2])  
      let row = boardIndexes[0];
      let col = boardIndexes[1];
      for(let num = 1; num < 10; num++){
          if(isValidNum(board, row, col, num)){
              // populate with the num 
             board[row][col] = num +'';   // this has to be a string
             // recursively calling the same function(solveSudoku) to check the board
             if(solveSudoku(board)){    //true(i.e this whole sudoku can be solved in the first place, it is a valid sudoku)
                 return true;
             }
             //backtrack
             board[row][col] = '0';
          }
      }
        return false;
  };