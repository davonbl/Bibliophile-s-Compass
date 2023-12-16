# TKH-Bibliophile's Compass


This application called Bibliophile's Compass assists users in finding bookstores in New York, and surronding neighborhoods.

Tools needed: Google Maps API Key & Yelp Fusion API Key, Visual Studio Code (VSC; recommended)/ simliar code editors, git bash (recommended), Vite, and this Github repo


1) Before git cloning this repo, it is required that you get an Google Maps API Key and a Yelp Fusion API key
in order for their services to operate on this application. Here are the websites to sign up for your api keys: 
- Google Cloud: https://developers.google.com/maps/documentation/javascript/cloud-setup 
- Yelp Fusion: https://docs.developer.yelp.com/docs/fusion-authentication


   Take Note: If getting a Google Maps and/or a Yelp Fusion API key becomes tendious for whatever reason, you can
reach out to me. Considering that the google cloud account requires billing information, I can provide a key with restrictions as an alterative.

2) After satisying the pre-requisites, you can then git clone the repo to your code editor. 

3) In the git bash terminal, and assuming you are on the right path, type 'npm i' or 'npm install' to ensure that are you downloading the necessary node modules needed.

4) On your code editor's interface, go to the API_KEYS.js file and input your Google Maps and Yelp Fusion API key to its designated variables.  

5) In the git bash terminal, type the command "npm run dev". This will run the Vite server. Copy the url link and paste it on your browser.

6) When you launch the application, you will be prompt with this: " CORS needs to be enabled for this application to work. Click 'OK' to enable it. If you already done that, then click "Cancel.' If this is your first time using the application, it is recommended to enable the CORS remote server. This is needed because the Yelp API in the fron-end is restrictive: if you decide to cancel, then you will very likely come across CORS related errors. 
   - By clicking on the link to the cors-anywhere, and enabling its remote server, you can then bypass front-end restrictions that the yelp dev team imposed on their API. 

7) After enabling the remote cors everywhere server, you can now do some search queries of bookstores. 

Enjoy and cheers!
