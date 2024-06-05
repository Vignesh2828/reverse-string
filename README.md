
# Route ID Encoder/Decoder

This npm package provides utility functions to encode and decode route IDs. These functions are useful for generating encoded route IDs to be used in routing and decoding them back for internal application logic.

# Installation
To install the package, use npm:
>> npm install route-id-encoder
>> npm install@types/node--save-dev

# Usage
Importing the Functions
First, import the encode and decode functions from the package:

>> import { encode, decode } from 'route-id-encoder';


# Encoding Route IDs
The encode function takes a numeric ID and returns a base64-encoded string. This is useful for converting route IDs into a secure, encoded format.

>> const routeId = 12345;
const encodedId = encode(routeId);
console.log(encodedId); // Output: the base64-encoded string of the ID


# Decoding Route IDs
The decode function takes a base64-encoded string and returns the original numeric ID. This is useful for decoding the incoming encoded route ID back to its original form for further processing.

>> const encodedId = 'MTIzNDU=';
const decodedId = decode(encodedId);
console.log(decodedId); // Output: '12345'

# Example Usage in a Router
Below is an example of how these functions can be integrated into a routing system:

>>import express from 'express';
>>import { encode, decode } from 'route-id-encoder';

>>const app = express();

>>app.get('/route/:id', (req, res) => {
  >>  const encodedId = req.params.id;
    >>const decodedId = decode(encodedId);
    >>// Use the decodedId for your application logic
    >>res.send(`Decoded ID: ${decodedId}`);
>>});

>>app.listen(3000, () => {
    >>console.log('Server is running on port 3000');
>>});

# API
# encode(id: number): string
id: A numeric ID to encode.
>>returns: A base64-encoded string representing the input ID.

# decode(id: string): string
id: A base64-encoded string to decode.
>>returns: The original numeric ID as a string.
