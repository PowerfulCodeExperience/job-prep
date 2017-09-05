UPDATE contact 
SET status = $1, datecontacted = $2
WHERE id = $3
RETURNING *;