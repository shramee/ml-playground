#!/bin/bash

# guidance from https://www.sslshopper.com/article-most-common-openssl-commands.html
# and https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec

mkdir ssl-cert/
rm ssl-cert/*

CN=localhost
ORG="My company"
P12_PASSWORD=

KEY=ssl-cert/key.pem
CERT=ssl-cert/certificate.pem
P12=ssl-cert/certificate.p12

echo
echo "Private key and public certificate..."
openssl req -newkey rsa:2048 -nodes -keyout $KEY -x509 -days 365 -out $CERT -subj "/CN=$CN/O=$ORG"

echo
echo "Reviewing public certificate.."
openssl x509 -text -noout -in $CERT

echo
echo "Combine your key and certificate in a PKCS#12 (P12) bundle"
openssl pkcs12 -inkey $KEY -in $CERT -export -password pass:$P12_PASSWORD -out $P12

echo
echo "Validating p12 file.."
openssl pkcs12 -in $P12 -noout -info
