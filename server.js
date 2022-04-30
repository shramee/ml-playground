const express = require( 'express' );
const path = require( 'path' );

const port = 3250;
const app = express();

app.use( '/', express.static( path.join( __dirname, 'public' ) ) );
app.use( '/', ( req, res ) => {
	res.send( 'Nothing to see here...' );
} );

app.listen( port, () => console.log( `Serving files on ${port}.` ) );
