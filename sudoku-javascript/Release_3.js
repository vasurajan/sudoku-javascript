var nextIndex = function(board){
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board.length; j++){    // taking one of the rows(say first row)( having width of the board over here)
          if(board[i][j] === '0'){
              return [i,j];        // this gives us the row(=i) and the column(=j) index
          }
      }
    }
  return false;      // if we have reached the end(no i,j remaining in whole board/Sudoku)
  };
  
  var isValidNum = function(board, row, col, num){
      num = num + '';
  // check in same row if num is there
    for( let j = 0; j < board.length; j++){  // checking in columns(j) of same row
        if(board[row][j] === num && j !== col){ // if we encounter the same no. in the row
            return false;    // then it's not a valid no. over there
        }
    }
    //
    for( let i = 0; i < board.length; i++){   // checking in rows(j) of same column
      if(board[i][col] === num && i !== row){
          return false;
      }
  }
  // sub-grid
  let boxRow = parseInt(row / 3) * 3;
  let boxCol = parseInt(col / 3) * 3;
  for(let i = boxRow; i < boxRow + 3; i++){
      for(let j = boxCol; j < boxCol + 3; j++){
          if(board[i][j] === num && (i !== row && j !== col)){
              return false;
          }
      }
  }
      return true;
  }
  
  // main function
  var solveSudoku = function(board){
      //base condition
      if(!nextIndex(board)){         //If there is no next index inside the board
            return true;
      }
      //  But if there are some empty cells in the board
      let boardIndexes[0,1] = nextIndex(board)  //  If there are, finding their indexes(eg [0,2])  
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
                                
  let matrix = [['0','0','0','2','6','0','7','0','1'],
               ['6','8','0','0','7','0','0','9','0'],
               ['1','9','0','0','0','4','5','0','0'],
               ['8','2','0','1','0','0','0','4','0'],
               ['0','0','4','6','0','2','9','0','0'],
               ['0','5','0','0','0','3','0','2','8'],
               ['0','0','9','3','0','0','0','7','4'],
               ['0','4','0','0','5','0','0','3','6'],
               ['7','0','3','0','1','8','0','0','0']];
  
  console.log(solveSudoku(matrix));
  console.log(matrix);


