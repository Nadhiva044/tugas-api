# 🍹 Tugas API Menus (Minuman Jus)

## 📌 Deskripsi Project

Project ini merupakan pembuatan **REST API sederhana** untuk mengelola data menu minuman, khususnya berbagai jenis jus. API ini dibangun menggunakan **Node.js dengan Express.js** dan terhubung dengan **PostgreSQL** sebagai database.

API ini memungkinkan pengguna untuk melakukan operasi **CRUD (Create, Read, Update, Delete)** terhadap data menu. Selain itu, sistem juga menerapkan konsep **soft delete**, sehingga data yang dihapus tidak benar-benar hilang dari database.

---

## 🗄️ Skema Database (Tabel `menus`)

| Kolom        | Tipe Data | Keterangan                          |
| ------------ | --------- | ----------------------------------- |
| id           | UUID      | Primary Key (auto generate)         |
| name         | TEXT      | Nama menu (wajib diisi)             |
| description  | TEXT      | Deskripsi menu                      |
| price        | INTEGER   | Harga menu (wajib diisi)            |
| is_available | BOOLEAN   | Status ketersediaan (default: TRUE) |
| image_path   | TEXT      | Path gambar                         |
| image_url    | TEXT      | URL gambar                          |
| created_at   | TIMESTAMP | Waktu pembuatan data                |
| is_deleted   | BOOLEAN   | Soft delete (default: FALSE)        |

---

## ⚙️ Instalasi & Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/Nadhiva044/tugas-api.git
```

### 2. Masuk ke Folder Project

```bash
cd tugas-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Jalankan Server

```bash
npx nodemon index.js
```

Server akan berjalan di:

```
http://localhost:5000
```

---

## 🔌 List Endpoint API

| Method | Endpoint       | Deskripsi                       |
| ------ | -------------- | ------------------------------- |
| GET    | /api/menus     | Menampilkan semua menu          |
| GET    | /api/menus/:id | Menampilkan menu berdasarkan ID |
| POST   | /api/menus     | Menambahkan menu baru           |
| PUT    | /api/menus/:id | Mengupdate data menu            |
| DELETE | /api/menus/:id | Menghapus menu (soft delete)    |


## 🎯 Tujuan Project

* Memahami konsep dasar REST API
* Menghubungkan backend dengan database PostgreSQL
* Mengimplementasikan operasi CRUD
* Melatih penggunaan tools testing API


---
