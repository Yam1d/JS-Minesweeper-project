//constants

//constant for bomb
const BOMB = 9

//constant for untouched
const UNTOUCHED = 10

//constant for bombmarked 
const B_MARKED = 11

//constant for falsemarked 
const F_MARKED = 12

//function to create the grid 
function create_grid(startgrid, n){
	//create a multidimensional array
	let grid = new Array(n).fill(startgrid)
	//return the multidimensional array
	return grid
}

//function to print out the grid
function print_grid(grid, n, showbombs){
	//for every value in the array
	for(i = 0;i < n; i++){
		//create a preliminary string 
		string = ""
		//for every value in each sub array
		for(j = 0; j< n; j++){
			if (showbombs == true){
				// if the grid is a bomb
				if (grid[i][j] == BOMB){
					string = string + "*"
				}
				else if (grid[i][j] == F_MARKED){
					string = string + ","
				}
				else if (grid[i][j] == B_MARKED){
					string = string + "!"
				}
				else if (grid[i][j] == UNTOUCHED){
					string = string + "."
				}
				else {
					string = string + grid[i][j]	
				}
			}
			else{
				if (grid[i][j] == BOMB){
					string = string + "."
				}
				else if(grid[i][j] == F_MARKED || grid[i][j] == B_MARKED){
					string = string + "!"
				}
				else if (grid[i][j] == UNTOUCHED){
					string = string + "."
				}
				else{
					string = string + grid[i][j]
				}
			}
		}
		console.log(string)
	}
}
//function to place the bombs in the grid
//function to calculate how many bombs there are near a cell
//function to play the game

//test for the print function
//test array
let test_array = [
	[0,0,0,0,0],
	[0,10,0,0,0],
	[11,0,0,0,0],
	[0,0,0,9,0],
	[0,0,0,0,0]
]


print_grid(test_array, test_array.length, true)