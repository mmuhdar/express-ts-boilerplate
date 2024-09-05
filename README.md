# Express TypeScript Boilerplate

Boilerplate ini adalah titik awal untuk membangun aplikasi backend menggunakan Express dan TypeScript. Didesain dengan struktur yang modular dan terorganisir, boilerplate ini memudahkan pengembangan, pemeliharaan, dan skalabilitas aplikasi Express.

## 🚀 Fitur

- **TypeScript**: Menyediakan dukungan penuh untuk TypeScript, memberikan keamanan tipe dan pengembangan yang lebih baik.
- **Express**: Framework web minimalis dan cepat untuk Node.js.
- **Modular Architecture**: Struktur proyek yang bersih dan terorganisir untuk memisahkan logika bisnis, routing, middleware, dan konfigurasi.
- **Error Handling**: Middleware untuk menangani error dengan baik dan mengembalikan pesan yang jelas ke klien.
- **Environment Configuration**: Menggunakan `dotenv` untuk manajemen variabel lingkungan.

## 🛠️ Teknologi yang Digunakan

- **Node.js**: Runtime JavaScript untuk server-side.
- **Express**: Framework web minimalis untuk membangun API dan aplikasi web.
- **TypeScript**: Superset JavaScript yang menyediakan tipe statis.
- **dotenv**: Mengelola variabel lingkungan dari file .env.

## ⚙️ Instalasi dan Menjalankan Proyek

### 1. Clone Repository
```bash
git clone https://github.com/mmuhdar/express-ts-boilerplate.git
cd express-ts-boilerplate
```
### 2. Install Dependensi
```bash
npm install
```
### 3. Buat file `.env`
**Buat file `.env` di root proyek dan tambahkan konfigurasi variabel lingkungan:**
```plaintext
PORT=3000
```
### 4. Jalankan Aplikasi dalam Mode Development
```bash
npm run dev
```
### 5. Build dan Jalankan Aplikasi untuk Production
```bash
npm run build
npm start
```

## 🗂️ Struktur Proyek

```plaintext
my-express-ts-app/
│
├── src/
│   ├── controllers/        # Menyimpan file controller
│   ├── middlewares/        # Menyimpan file middleware
│   ├── models/             # Menyimpan file model (jika menggunakan database)
│   ├── routes/             # Menyimpan file routing
│   ├── services/           # Menyimpan file service (logic bisnis)
│   ├── utils/              # Menyimpan utilitas umum
│   ├── config/             # Konfigurasi aplikasi (seperti konfigurasi database, env)
│   ├── interfaces/         # Menyimpan interface TypeScript
│   ├── enums/              # Menyimpan enum TypeScript
│   ├── app.ts              # Inisialisasi Express app, middleware, dll.
│   └── index.ts            # Entry point utama, menjalankan server
│
├── dist/                   # Folder output untuk file yang sudah di-compile
├── .env                    # File environment untuk variabel lingkungan
├── .gitignore              # Mengabaikan file atau folder tertentu dalam version control
├── tsconfig.json           # Konfigurasi TypeScript
├── package.json            # Konfigurasi npm
└── README.md               # Dokumentasi proyek
```

## 📝 Lisensi

Proyek ini menggunakan lisensi [MIT](LICENSE).