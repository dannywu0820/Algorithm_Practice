function printArray(array){
	console.log(array.join());
}

function swap(array, index1, index2){
	var tmp = array[index1];
	array[index1] = array[index2];
	array[index2] = tmp;
}

function genRandomInt(lower_bound, higher_bound){ //[lower_bound, higher_bound]
	return Math.floor(Math.random()*(higher_bound-lower_bound+1) + lower_bound);
}

function genRandomIntList(length, lower_bound, higher_bound){
	var random_number_list = [];
	
	for(var i = 0; i < length; i++){
		var random_number = genRandomInt(lower_bound, higher_bound);
		random_number_list.push(random_number);
	}
	
	return random_number_list;
}

/*
Time Complexity
Best Case: O(n)
Worst Case: O(n^2)
Average Case: O(n^2)
*/
function bubbleSort(array){
	var SWAP_HAPPENED = true;
	
	for(var i = 0; i < array.length-1 && SWAP_HAPPENED; i++){
		SWAP_HAPPENED = false; //if no swap happend, it means array has been sorted
		
		for(var j = 0; j < array.length-1-i; j++){
			if(array[j] > array[j+1]){
				swap(array, j, j+1);
				SWAP_HAPPENED = true;
			}
		}
		
		printArray(array);
	}
}

/*
Time Complexity
Best Case: O(n^2)
Worst Case: O(n^2)
Average Case: O(n^2)
*/
function selectionSort(array){
	for(var i = 0; i < array.length-1; i++){
		var min_index = i;
		
		for(var j = i+1; j < array.length; j++){
			if(array[min_index] > array[j]){
				min_index = j;
			}
		}
		
		if(min_index != i){
			swap(array, min_index, i);
		}
	}
}

/*
Time Complexity
Best Case: O(n)
Worst Case: O(n^2)
Average Case: O(n^2)
*/
function insertionSort(array){
	for(var i = 1; i < array.length; i++){
		var element_to_insert = array[i];
		var j = i-1;
		
		while(element_to_insert < array[j] && j>=0){
			array[j+1] = array[j];
			j--;
		}
		
		array[j+1] = element_to_insert;
		
		/*var j;
		for(j = i-1; j >= 0; j--){
			if(element_to_insert < array[j]){
				array[j+1] = array[j];
			}
			else break;
		}
		array[j+1] = element_to_insert;*/
		
	}
}

/*
Time Complexity
Best Case: O(nlog(n))
Worst Case: O(n^2)
Average Case: O(nlog(n))
*/
function quickSort(array, front_index, end_index){
	if(front_index < end_index){
		var pivot_index = partition_v1(array, front_index, end_index);
		quickSort(array, front_index, pivot_index-1);
		quickSort(array, pivot_index+1, end_index);
	}
}

const END_AS_PIVOT = 0;
const FRONT_AS_PIVOT = 1;
const MIDDLE_AS_PIVOT = 2;

function partition_v1(array, front, end){
	var settings = [];
	settings[END_AS_PIVOT] = {p_index: end, l_index: front, r_index: end-1};
	settings[FRONT_AS_PIVOT] = {p_index: front, l_index: front+1, r_index: end};
	settings[MIDDLE_AS_PIVOT] = {p_index: Math.floor((front+end)/2), l_index: front, r_index: end};
	
	var choice = FRONT_AS_PIVOT;
	var pivot_index = settings[choice].p_index;
	//var pivot = array[pivot_index];
	var left_index = settings[choice].l_index;
	var right_index = settings[choice].r_index;
	
	while(left_index <= right_index){
		while(array[left_index] < array[pivot_index]) left_index++;
		while(array[right_index] > array[pivot_index]) right_index--;
		
		if(left_index <= right_index){
			swap(array, left_index, right_index);
			left_index++;
			right_index--;
		}
	}
	
	//In the end, left_index(value > pivot) > right_index(value < pivot)
	if(choice == END_AS_PIVOT){
		swap(array, left_index, pivot_index);
		pivot_index = left_index;
	}
	else if(choice == FRONT_AS_PIVOT){
		swap(array, right_index, pivot_index);
		pivot_index = right_index;
	}
	else{
		pivot_index = left_index-1;
	}
	
	return pivot_index;	
}

function partition_v2(array, front, end){
	var i = front-1; //largest index of element that is larger than pivot
	var pivot = array[end];
	
	for(var j = front; j < end; j++){
		if(array[j] < pivot){
			i++;
			swap(array, i, j);
		}
	}
	
	i++;
	swap(array, i, end);
	
	return i;
}

/*
Time Complexity
Best Case: O(nlog(n))
Worst Case: O(nlog(n))
Average Case: O(nlog(n))
*/
function mergeSort(array, front, end){
	if(front < end){
		var mid = Math.floor((front+end)/2);
		//console.log("ms("+front+","+end+")" + " mid:" +mid);
		mergeSort(array, front, mid);
		mergeSort(array, mid+1, end);
		merge(array, front, mid, end);
	}
}

function merge(array, front, mid, end){
	var sub_left = array.slice(front, mid+1); //front~mid
	var sub_right = array.slice(mid+1, end+1); //mid+1~end
	var idx_left = 0;
	var idx_right = 0;
	var idx_array = front;
	
	while(idx_left < sub_left.length && idx_right < sub_right.length){
		if(sub_left[idx_left] < sub_right[idx_right]){
			array[idx_array] = sub_left[idx_left];
			idx_left++;
		}
		else{
			array[idx_array] = sub_right[idx_right];
			idx_right++;
		}
		idx_array++;
	}
	
	while(idx_left < sub_left.length){
		array[idx_array] = sub_left[idx_left];
		idx_left++;
		idx_array++;
	}
	
	while(idx_right < sub_right.length){
		array[idx_array] = sub_right[idx_right];
		idx_right++;
		idx_array++;
	}
}

/*
Time Complexity
Best Case: O(nlog(n))
Worst Case: O(nlog(n))
Average Case: O(nlog(n))
*/
function heapSort(array){
	array.unshift(-1);
	buildMaxHeap(array);
	
	var heap_size = array.length-1;
	for(var last = heap_size; last > 1; last--){
		swap(array, 1, last);
		heap_size--;
		maxHeapify(array, 1, heap_size);
	}
	
	array.shift();
}

function maxHeapify(array, root_index, heap_size){
	var left_child_index = 2*root_index;
	var right_child_index = 2*root_index+1;
	var largest = root_index;
	
	if(left_child_index <= heap_size && 
	array[left_child_index] > array[largest]){
		largest = left_child_index;
	}
	
	if(right_child_index <= heap_size && 
	array[right_child_index] > array[largest]){
		largest = right_child_index;
	}
	
	if(largest != root_index){
		swap(array, largest, root_index);
		maxHeapify(array, largest, heap_size);
		//why doing this? since node going down may not be the largerst in subtree
	}
}

function buildMaxHeap(array){
	//run maxHeapify on every node with children
	//heap size is length-1 since an additional element to let start index be 1
	for(var root_index = Math.floor(array.length/2); root_index >= 1; root_index--){
		maxHeapify(array, root_index, array.length-1);
	}
}

var unsorted_array = genRandomIntList(25, 1, 25);
printArray(unsorted_array);
//bubbleSort(unsorted_array);
//selectionSort(unsorted_array);
//insertionSort(unsorted_array);
//quickSort(unsorted_array, 0, unsorted_array.length-1);
//mergeSort(unsorted_array, 0, unsorted_array.length-1);
heapSort(unsorted_array);
printArray(unsorted_array);