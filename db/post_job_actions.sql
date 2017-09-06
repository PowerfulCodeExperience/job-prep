INSERT INTO application_actions (job_action, user_id) 
VALUES ($1, $2)
RETURNING *