const WHITE = 0;
const GRAY = 1;
const BLACK = 2;

let GraphVertex = function(value){
	this.index = value;
	this.color = WHITE;
	this.predecessor = null;
	this.distance = this.INFINITY;
}

GraphVertex.prototype.INFINITY = Number.MAX_SAFE_INTEGER;

GraphVertex.prototype.getIndex = function(){
	return this.index;
}

GraphVertex.prototype.getColor = function(){
	return this.color;
}

GraphVertex.prototype.setColor = function(new_color){
	this.color = new_color;
}

GraphVertex.prototype.getPredecessor = function(){
	return this.predecessor;
}

GraphVertex.prototype.setPredecessor = function(new_predecessor){
	this.predecessor = new_predecessor;
}

GraphVertex.prototype.getDistance = function(){
	return this.distance;
}

GraphVertex.prototype.setDistance = function(new_distance){
	this.distance = new_distance;
}

module.exports = GraphVertex;