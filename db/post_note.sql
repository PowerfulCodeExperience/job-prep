INSERT INTO notes (note, dateCreated, contact_id) VALUES ($1, $2, $3)
RETURNING *;