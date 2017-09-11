UPDATE users_companies
SET applied = $1
WHERE id = $2
RETURNING *;