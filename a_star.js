function initialize(){
	var node_arr = [];
 for (var i = 0; i < col; i++){
    for (var j = 0; j < row; j++){
      node_arr[i][j] = new Node(i, j, null);
    }
  }
var temp_neighbours;

  for (var i = 0; i < col; i++){
    for (var j = 0; j < row; j++){
      temp_neighbours = [];
      if(node_arr[i+1][j] != null)
      	temp_neighbours.push(node_arr[i+1][j])
      if(node_arr[i-1][j] != null)
      	temp_neighbours.push(node_arr[i-1][j])
      if(node_arr[i][j+1] != null)
      	temp_neighbours.push(node_arr[i][j+1])
      if(node_arr[i][j-1] != null)
      	temp_neighbours.push(node_arr[i][j-1])
      node_arr[i][j].set_neighbours(temp_neighbours);
    }
  }

  return node_arr;
}

var node_array_glob = initialize();

function A_star_findPath (node_array) {
    var goal = A_star_findGoal(node_array);
    var start = A_start_findStart(node_array);
    start.score = 0;

    A_star_set_heuristic(goal, node_array);

    var closedset;
    var openset = new Array(start); //openset
    

    var curr_node; //x
    var curr_score;
    var is_curr_better;
    while(openset.length > 0){
        curr_node = A_star_lowestOpenSet(openset);
        if(curr_node == goal){
            return A_star_reconstructPath(curr_node, start);
        }
        closedset.push(curr_node);
        for (var i = 0; i < curr_node.neighbours.lenght; i++){
            if (!A_star_inSet(curr_node.neighbours[i], closedset)) {
                curr_score = curr_node.score + 
                    A_star_distance( curr_node.neighbours[i], curr_node );
                is_curr_better = false;

                if (!A_star_inSet(curr_node.neighbours[i], openset)){
                    openset.push(curr_node.neighbours[i]);
                    is_curr_better = true;
                } else if (curr_score < curr_node.neighbours[i].score){
                    is_curr_better = true;
                }
                if (is_curr_better){
                    curr_node.neighbours[i].prev = curr_node;
                    curr_node.neighbours[i].set_goal_score(curr_score);

                }
            }
        }
    }
    console.log('Error in A* algorithm');
    return 'Error in A* algorithm';
}

function A_star_findGoal(node_array) {
    for(var i =0; i < node_array.lenght; i++){
        for (var y = 0; y < node_array[i].lenght; y++){
            if (node_array[i][y].status === 'end'){
                return node_array[i][y];
            }
        }
    }
    console.log("Error no End Node");
    return "Error no End Node";
}

function A_star_findStart(node_array) {
    for (var i = 0; i < node_array.lenght; i++) {
        for (var y = 0; y < node_array[i].lenght; y++) {
            if (node_array[i][y].status === 'start') {
                return node_array[i][y];
            }
        }
    }
    console.log("Error no Start Node");
    return "Error no Start Node";
}

function A_star_distance(node_x, node_y){
    return Math.sqrt(
        Math.pow(node_x.x - node_y.x, 2) +
        Math.pow(node_x.y - node_y.y, 2));
}

function A_star_set_heuristic(goal, node_array) {
    for(var i = 0; i < node_array.lenght; i++){
        for (var y = 0; y < node_array[i].lenght; y++) {
            if (node_array[i][y].status === 'block'){
                node_array[i][y].set_heuristic_score( Number.MAX_SAFE_INTEGER );
            }
            else{
                node_array[i][y].set_heuristic_score( A_star_distance(node_array[i][y], goal) );
            }
        }
    }
}

function A_star_lowestOpenSet(openset, closedset){
    var lowest = openset[0];
    var index;
    for(var i = 1; i < openset.lenght; i++){
        if (openset[i].heuristic_score < lowest){
            lowest = openset[i];
            index = i;
        }
    }
    openset = openset.splice(index, 1);
    return lowest;
}

function A_star_inSet(node, set) {
    for(var i =0; i < set.lenght; i++){
        if (set[i] == node){
            return true;
        }
    }
    return false;
}

function A_star_reconstructPath(node, start) {
    var path = new Array();
    while(node !== start){
        path.push(node);
        node = node.prev;
    }
    path.push(node);
    return path;
}