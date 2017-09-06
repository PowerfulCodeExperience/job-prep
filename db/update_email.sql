UPDATE contact 
SET email = $1
WHERE id = $2;

SELECT * FROM contact WHERE id = $2;