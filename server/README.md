# Mebel Server (Backend)

Express + Mongoose backend for products, categories, news and gallery.

## Установка

```bash
cd server
npm install
```

Создай файл `.env` на основе `.env.example` и подставь свой Mongo URL:

```env
MONGODB_URI=ТВОЙ_MONGO_URL
PORT=5000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=supersecretpassword
```

## Скрипты

- `npm run dev` — запуск в режиме разработки (nodemon, TypeScript через ts-node)
- `npm run build` — сборка в `dist`
- `npm start` — запуск собранной версии

## Основные эндпоинты (base: `/api`)

- `GET /api/health` — проверка, что сервер жив

### Продукты (`/api/products`)

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

### Категории (`/api/categories`)

- `GET /api/categories`
- `GET /api/categories/:id`
- `POST /api/categories`
- `PUT /api/categories/:id`
- `DELETE /api/categories/:id`

### Новости (`/api/news`)

- `GET /api/news`
- `GET /api/news/:id`
- `POST /api/news`
- `PUT /api/news/:id`
- `DELETE /api/news/:id`

### Галерея (`/api/gallery`)

- `GET /api/gallery`
- `GET /api/gallery/:id`
- `POST /api/gallery`
- `PUT /api/gallery/:id`
- `DELETE /api/gallery/:id`

### Проверка админа (`/api/admin`)

- `POST /api/admin/check` — тело: `{ "username": "admin", "password": "..." }`  
  Возвращает `{ ok: true }` при правильных данных или `401` при ошибке.

