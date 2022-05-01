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

/**
 * Simple model with one operation
 */
function models() {
	// Simple model that adds 2 tensors
	function simpleAdd( d1, d2 ) {
		// Tidy to free up GPU memory when done
		return tf.tidy( () => {
			const x1 = d1;
			const x2 = d2;
			return x1.add( x2 );
		} );
	}

	// Create some tensors
	const t1 = tf.tensor( [1, 4, 3, 5, 11, 13], [3, 2] );
	const t2 = tf.tensor( [2, 1, 9, 24, 2, 8], [3, 2] );

	// Call the model
	simpleAdd( t1, t2 ).print();
}

// Run here
tensors_and_variables();
models();

