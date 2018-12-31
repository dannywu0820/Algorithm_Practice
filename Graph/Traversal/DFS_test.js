let Graph = require('./Graph.js');

let myGraph = Graph();
for(let i = 1; i < 9; i++){
	myGraph.addVertex(String.fromCharCode(64+i));
}

let edges = [
	['A','B'],
	['A','C'],
	['B','D'],
	['C','B'],
	['C','F'],
	['D','E'],
	['D','F'],
	['F','B'],
	['G','E'],
	['G','H'],
	['H','G']
];
for(let i = 0; i < edges.length; i++){
	myGraph.addEdge(edges[i][0], edges[i][1]);
}

myGraph.DFS('A');