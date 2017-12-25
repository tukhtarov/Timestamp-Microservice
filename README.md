1. The API endpoint is GET /api/timestamp/:date_string?

2. The date string must be in the format: YYYY-MM-DD

3. If the date string is valid the api returns a JSON having the structure
{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

4. If the date string is empty the api returns the current timestamp.

5. If the date string is invalid the api returns a JSON having the structure 
{"error" : "Invalid Date" }