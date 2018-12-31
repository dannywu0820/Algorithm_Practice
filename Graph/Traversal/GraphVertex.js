const WHITE = 0;
const GRAY = 1;
const BLACK = 2;

let GraphVertex = function(value){
	this.index = value;
	this.color = WHITE;
	this.predecessor = null;
	this.distance = this.INFINITY;

	this.discover_time = 0;
	this.finish_time = 0;
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

GraphVertex.prototype.getTime = function(){
	return ("Discover:" + this.discover_time + " Finish:" + this.finish_time);
}

GraphVertex.prototype.setTime = function(type='discover', new_time){
	if(type == 'discover'){
		this.discover_time = new_time;
	}
	else{
		this.finish_time = new_time;	
	}
}

module.exports = GraphVertex;