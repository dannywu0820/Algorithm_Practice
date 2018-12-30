let GV = require('./GraphVertex.js');
const WHITE = 0;
const GRAY = 1;
const BLACK = 2;

const Graph = function(){
	let num_of_vertex = 0;
	let vertex_list = {};
	let edge_list = {}; //a.k.a. adjacency list

	function addVertex(index){
		try{
			if(vertex_list[index] != null){
				throw new Error("Vertex Exists");
			}
			else{
				let new_vertex = new GV(index);
				vertex_list[index] = new_vertex;
				edge_list[index] = [];
				num_of_vertex++;
			}
		}
		catch(e){
			console.log(e.message);
		}
	}

	function addEdge(from, to){
		try{
			if(!edge_list[from]){
				throw new Error(from + " Doesn't Exist");
			}
			else{
				edge_list[from].push(to);
			}
		}
		catch(e){
			console.log(e.message);
		}
	}

	function breadthFirstSearch(start_index){
		let queue = [];
		let start = start_index;
		console.log(edge_list);

		//since there may exist multiple connected components
		Object.keys(vertex_list).forEach(function(next_start){
			if(vertex_list[start].getColor() == WHITE){
				vertex_list[start].setColor(GRAY);
				vertex_list[start].setDistance(0);
				vertex_list[start].setPredecessor(-1);
				
				queue.push(start);
				while(queue.length != 0){
					let front = queue.shift();
					let neighbors = edge_list[front];
					neighbors.forEach(function(neighbor){
						if(vertex_list[neighbor].getColor() == WHITE){
							vertex_list[neighbor].setColor(GRAY);
							vertex_list[neighbor].setDistance(vertex_list[front].getDistance()+1);
							vertex_list[neighbor].setPredecessor(front);
							
							queue.push(neighbor);
						}
					});

					vertex_list[front].setColor(BLACK);
				}
			}

			start = next_start;
		});
		
		console.log(vertex_list);
	}

	return {
		addVertex: function(index){
			addVertex(index);
		},
		addEdge: function(from, to){
			addEdge(from, to);
		},
		BFS: function(start_index){
			breadthFirstSearch(start_index);
		}
	}
}

module.exports = Graph;