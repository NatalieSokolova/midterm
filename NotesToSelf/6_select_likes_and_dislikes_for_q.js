const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});
const queryString = `
SELECT quiz_id, name, created_by_id, SUM(is_like::int) as likes, SUM((NOT is_like)::int) as dislikes 
FROM quizzes
JOIN likes ON quizzes.id = quiz_id
WHERE quiz_id = 1
GROUP BY name, created_by_id, quiz_id;
`;
const queryParams = [];

pool.query(queryString, queryParams)
.then(res => {
  const expectedResult = res.rows;
  console.log(expectedResult);
  pool.end();
});