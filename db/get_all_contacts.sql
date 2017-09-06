SELECT * FROM users_companies
JOIN contact ON contact.company_id = users_companies.id
WHERE user_id = $1;