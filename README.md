# Stockket

Collaborators: Brian Park, Edward Lee, Karl Zhu, Sean Huggins

## Setup
Make sure that you have node.js and React Native installed with all the dependicies. 
Type `expo start` in the directory to start the web app to your localhost. To test on your Android or iOS device, please download the Expo client app and scan the QR code through your mobile device's camera. If some errors pop up, `npm audit fix` may fix some of the problems and missing dependencies. 

## Sources
[Database for Grocery Items](https://www.grocery.com/open-grocery-database-project/)
  Can be converted to .csv for ease of access.

[Hackathon Planning Doc](https://docs.google.com/document/d/1e6Xwyi31BSoAuGifOYtR2KkSthuRyubizb3SOB0wPOI/edit)

## Backend Python Documentation
Code is in `main.py`

### `search(query)`
Returns a list of related grocery search result based on the query.

### `get_user_location()`
Get user's current location for map calculations

### `nearest_stores(user_location, radius=20000)`
Returns a list of tuples (name, address, distance). Ex. `('Berkeley Bowl', '2020 Oregon Street, Berkeley', '3.4 km')`. Radius is set to default for 20000 meters which equates to 12.5 miles

Much more metadata can be stored into the tuples for later additional implementations.

### `distance(user_location, destination)`
Returns the distance to destination in km and time according to Google Maps

## APIs Used
* Google Places API
* Google Distance Matrix API
