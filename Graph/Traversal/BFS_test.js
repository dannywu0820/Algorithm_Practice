let Graph = require('./Graph.js');

let myGraph = Graph();
for(let i = 1; i < 10; i++){
	myGraph.addVertex(String.fromCharCode(64+i));
}

let edges = [
	['A','B'],
	//['A','C'],
	['A','D'],
	//['B','E'],
	['C','E'],
	['C','H'],
	['C','F'],
	['C','G'],
	//['D','H'],
	['E','F'],
	['H','G'],
	['F','I'],
	['G','I']
];
for(let i = 0; i < edges.length; i++){
	myGraph.addEdge(edges[i][0], edges[i][1]);
	myGraph.addEdge(edges[i][1], edges[i][0]);
}

myGraph.BFS('A');