INSERT INTO users (id, linked, resume, portfolio) 
VALUES ($1, $2, $3, $4)
RETURNING *