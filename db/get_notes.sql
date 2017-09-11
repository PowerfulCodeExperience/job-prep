SELECT * FROM contact
JOIN notes ON contact.id = notes.contact_id 
where contact_id = $1