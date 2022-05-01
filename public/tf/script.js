/**
 * ML5 P5 template
 * @requires p5 https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js
 * @requires tf https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js
 */

/**
 * Tensor basic and basic operations
 */
function tensors_and_variables() {
	// Tensor
	const data = tf.tensor( [4, 6, 5, 9, 13, 25, 1, 7], [4, 2] );
	data.print();

	// Variable
	const data2 = tf.variable( tf.zeros( [4, 2] ) );
	data2.print();
	data2.assign( tf.tensor2d( [3, 45, 766, 34, 2, 65, 7, 2], [4, 2] ) );
	data2.print();

	// Two new tensors
	const d3 = tf.tensor( [4, 6, 5, 9, 13, 25, 1, 7], [4, 2] );
	const d4 = tf.tensor( [2, 4, 9, 4, 23, 24, 2, 8], [4, 2] );

	// Addition and multiplication with tensors
	d3.add( d4 ).print();
	d3.mul( d4 ).print();
}

// Run here
tensors_and_variables();

