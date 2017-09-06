INSERT INTO tasks (task, user_id) 
VALUES ($1, $2)
RETURNING *