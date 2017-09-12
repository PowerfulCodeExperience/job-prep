UPDATE users 
set linked = $2, resume = $3, portfolio = $4
WHERE id = $1
RETURNING *