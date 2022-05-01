/**
 * ML5 P5 template
 * @requires p5 https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js
 * @requires ml5 https://unpkg.com/ml5@0.12.2/dist/ml5.min.js
 */
let
	video, posenet, poses = [], skeletons = [];


function setup() {
	createCanvas( window.innerWidth - 20, window.innerHeight - 20 );
	video = createCapture( VIDEO );
	video.hide();

	posenet = ml5.poseNet( video, modelReady );
	posenet.on( 'pose', gotPose );
}

function modelReady() {
	console.log( 'Ready' );
}

function gotPose( pose ) {
	poses = pose.map( p => p.pose.keypoints )
	skeletons = pose.map( p => p.skeleton )
}

function draw() {
	background( 100 );
	stroke( 255 );
	image( video, 0, 0 );
	for ( let i = 0; i < poses.length; i ++ ) {
		const keypoints = poses[i];
		for ( let j = 0; j < keypoints.length; j ++ ) {
			if ( keypoints[j].score > .7 ) {
				const p = keypoints[j].position;
				ellipse( p.x, p.y, 5, 5 );
			}
		}
	}
	for ( let i = 0; i < skeletons.length; i ++ ) {
		const skel = skeletons[i];
		for ( let j = 0; j < skel.length; j ++ ) {
			console.log( skel );
			const bone = skel[j];
			if ( bone[0].score > .7 && bone[1].score > .7 ) {
				line( bone[0].position.x, bone[0].position.y, bone[1].position.x, bone[1].position.y );
			}
		}
	}
}