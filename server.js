const express = require( 'express' );
const fs = require( 'fs' );
const https = require( 'https' );
const path = require( 'path' );

const port = 3250;
const app = express();

app.use( '/', express.static( path.join( __dirname, 'public' ) ) );
app.use( '/', ( req, res ) => {
	res.send( 'Nothing to see here...' );
} );


const httpsOptions = {
	cert: fs.readFileSync( path.join( __dirname, 'ssl-cert', 'certificate.pem' ) ),
	key: fs.readFileSync( path.join( __dirname, 'ssl-cert', 'key.pem' ) ),
};

https.createServer( httpsOptions, app )
		 .listen( port, () => console.log( `Serving files on ${port} with https.` ) );
