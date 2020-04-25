# COVID-19-Hackathon

Collaborators: Brian Park, Edward Lee, Karl Zhu, Sean Huggins

## Sources

[Database for Grocery Items](https://www.grocery.com/open-grocery-database-project/)

[Hackathon Planning Doc](https://docs.google.com/document/d/1e6Xwyi31BSoAuGifOYtR2KkSthuRyubizb3SOB0wPOI/edit)

## Backend Python Documentation
Code is in `main.py`

### `search(query)`
Returns a list of related grocery search result based on the query.

### `get_user_location()`
Get user's current location for map calculations

### `nearest_stores(user_location, radius=20000)`
Returns a list of tuples (name, address). Ex. `('Berkeley Bowl', '2020 Oregon Street, Berkeley')` Radius is set to default for 20000 meters which equates to 12.5 miles

Much more metadata can be stored into the tuples for later additional implementations.
