INSERT INTO portfolio (url, user_id) 
VALUES ($1, $2)
RETURNING *