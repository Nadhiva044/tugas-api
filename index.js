const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());

const PORT = 5000;



// =======================
// GET ALL MENUS
// =======================
app.get('/api/menus', async (req, res) => {
  const result = await pool.query(
    'SELECT * FROM menus WHERE is_deleted = FALSE'
  );
  res.json(result.rows);
});


// =======================
// GET BY ID
// =======================
app.get('/api/menus/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query(
    'SELECT * FROM menus WHERE id = $1',
    [id]
  );
  res.json(result.rows[0]);
});


// =======================
// POST (TAMBAH MENU)
// =======================
app.post('/api/menus', async (req, res) => {
  const { name, description, price, image_path, image_url } = req.body;

  const result = await pool.query(
    `INSERT INTO menus (name, description, price, image_path, image_url)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, description, price, image_path, image_url]
  );

  res.json(result.rows[0]);
});


// =======================
// PUT (UPDATE MENU)
// =======================
app.put('/api/menus/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  const result = await pool.query(
    `UPDATE menus
     SET name=$1, description=$2, price=$3
     WHERE id=$4
     RETURNING *`,
    [name, description, price, id]
  );

  res.json(result.rows[0]);
});


// =======================
// DELETE (SOFT DELETE)
// =======================
app.delete('/api/menus/:id', async (req, res) => {
  const { id } = req.params;

  await pool.query(
    `UPDATE menus
     SET is_deleted = TRUE
     WHERE id = $1`,
    [id]
  );

  res.json({ message: 'Menu berhasil dihapus' });
});


// =======================
app.listen(5000, () => {
  console.log('Server jalan di http://localhost:5000');
});