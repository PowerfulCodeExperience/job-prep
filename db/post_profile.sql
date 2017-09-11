INSERT INTO profile (linked, resume, portfolio, user_id) 
VALUES ($1, $2, $3)
RETURNING *