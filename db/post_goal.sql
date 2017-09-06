INSERT INTO goals (goal, user_id) 
VALUES ($1, $2)
RETURNING *