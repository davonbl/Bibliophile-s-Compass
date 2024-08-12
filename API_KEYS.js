/*

This is the file where you place your Google Maps and Yelp Fusion API Keys. 

*/

const googleAPIKey = import.meta.env.VITE_GOOGLE_KEY;

const yelpAPIKey = import.meta.env.VITE_YELP_KEY ;

export const GOOGLE_API_KEY = `${googleAPIKey}`;

export const YELP_API_KEY = `${yelpAPIKey}`