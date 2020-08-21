Apparently, If we are going to do backtracking and Recursion here, the Basics of Validation will be-
1) No Column in the same row should containm same number.
2) No row in the same same column should contain the same number.
3) The sub-grid( sub-boxes of 3x3) shouldn't have the same number.
.
Basic Idea is once we go to the empty cell( here considering in the first row) and we try a number(1-9)
a) The no. written may be valid but is it a solution or not.
b) To get that, we have to move to the next cell in the row and do the same thing overthere
   We have to see what is the next index and after finding the next Index we need to iterate from (1-9) i.e what all nos. can be there
Once we are inside this row, check if no. is valid at a particular index.If yes, populate that Index with same number
But we have to check if Sudoku can be solved recursively at the Index next to same Index.If not, we backtrack and omit the number from that index.
    So, if a no. isn't going to produce a valid solution in the end then, we cant have that no. over there and we make make an empty cell over there and it iterates the whole loop again and then next no.
.
.
//Here, finding the indexes of the cell where program finds an empty cell(containing '0')

var nextIndex = function(board){
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board.length; j++){    // taking one of the rows(say first row)( having width of the board over here)
          if(board[i][j] === '0'){
              return [i,j];         // this gives us the row(=i) and the column(=j) index
          }
      }
    }
  return false;      // if we have reached the end(no i,j remaining in whole board/Sudoku)
  };

//Here, checking the validity of the number(1-9) we iterated to fill the empty cell  
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