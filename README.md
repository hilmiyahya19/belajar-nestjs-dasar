# **Belajar NestJS Dasar**

Repository ini berisi latihan dan implementasi konsep dasar **NestJS** yang saya pelajari berdasarkan materi *NestJS Dasar* dari **Programmer Zaman Now (Eko Kurniawan Khannedy)**.
Project ini saya gunakan untuk memahami fondasi NestJS mulai dari module, controller, routing, provider, dependency injection, middleware, hingga fitur lanjutan seperti guard, interceptor, pipe, dan dynamic module.

---

## 📌 **Apa Itu NestJS?**

**NestJS** adalah framework Node.js berbasis **TypeScript** untuk membangun aplikasi server yang modular, scalable, dan terstruktur.
NestJS memanfaatkan konsep **decorator**, **dependency injection**, dan **module architecture**, sehingga memberikan struktur kerja yang rapi dan mudah dikembangkan.

Website resmi: [https://nestjs.com](https://nestjs.com)

---

## 🎯 **Tujuan Pembelajaran**

Dalam project ini, saya mempelajari:

* Cara membuat dan menjalankan project NestJS
* Struktur folder NestJS
* Penggunaan decorator (`@Controller`, `@Get`, `@Post`, dll.)
* Module dan arsitektur modular
* Routing dan HTTP Method
* Request & Response handling
* Middleware
* Exception Filter
* Provider & Service
* Dependency Injection
* Custom Provider (Factory, Value, Class, Alias)
* Guard (authentication & authorization)
* Pipe (validation & transform)
* Interceptor (response transform)
* Custom Decorator
* Integrasi database menggunakan Prisma
* Penggunaan Logger (Nest Logger & Winston)
* Global Provider (Global Guard, Global Filter, dll.)
* Lifecycle events & shutdown hook

---

## 🚀 **Cara Menginstall dan Menjalankan Project**

### **1. Install NestJS CLI**

```bash
npm install -g @nestjs/cli
```

### **2. Install Dependency**

```bash
npm install
```

### **3. Menjalankan Aplikasi**

Mode development:

```bash
npm run start:dev
```

Mode production:

```bash
npm run build
npm run start:prod
```

### **4. Menjalankan Test**

Unit test:

```bash
npm run test
```

E2E test:

```bash
npm run test:e2e
```

---

## 🧱 **Struktur Folder Dasar**

```
src/
 ├── app.module.ts      # Root module
 ├── main.ts            # Entry point aplikasi
 ├── controllers/       # Semua controller
 ├── services/          # Semua provider/service
 ├── middleware/        # Custom middleware
 ├── interceptors/      # Custom interceptor
 ├── guards/            # Guard (authorization)
 ├── pipes/             # Pipe (validation/transform)
 ├── filters/           # Exception filters
 └── modules/           # Module tambahan
test/
 ├── unit test
 └── e2e test
```

---

## 🧩 **Konsep Dasar NestJS yang Saya Pelajari**

### 🔹 **1. Module**

NestJS sangat mengandalkan modularitas.
Saya biasa membuat module sesuai fitur.

```ts
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

---

### 🔹 **2. Controller**

Controller menangani request dan mengembalikan response.

```ts
@Controller('/api/users')
export class UserController {
  @Get()
  findAll(): string {
    return 'Get all users';
  }

  @Post()
  create(): string {
    return 'Create user';
  }
}
```

---

### 🔹 **3. Routing dengan Decorator**

Nest menyediakan decorator routing:

* `@Get()`
* `@Post()`
* `@Put()`
* `@Delete()`
* `@Patch()`
* `@Options()`
* `@Head()`
* `@All()`

---

### 🔹 **4. Request Handling**

Mengambil data request dengan decorator:

* `@Param()`
* `@Body()`
* `@Query()`
* `@Headers()`
* `@Req()`
* `@Ip()`

---

### 🔹 **5. Response Handling**

Default return → response body.
Jika butuh kontrol lebih:

* `@Res()`
* `@HttpCode()`
* `@Header()`
* `@Redirect()`

---

### 🔹 **6. Provider & Service**

Tempat untuk business logic.

```ts
@Injectable()
export class UserService {
  findAll() {
    return ['eko', 'budi'];
  }
}
```

---

### 🔹 **7. Dependency Injection**

NestJS mendukung constructor-based DI.

```ts
constructor(private userService: UserService) {}
```

---

### 🔹 **8. Middleware**

```ts
@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request logged');
    next();
  }
}
```

---

### 🔹 **9. Exception Filter**

Untuk menangani error dengan format custom.

---

### 🔹 **10. Pipe**

Digunakan untuk transformasi dan validasi input.

---

### 🔹 **11. Guard**

Digunakan untuk authorization (misalnya role-guard).

---

### 🔹 **12. Interceptor**

Modifikasi response sebelum dikembalikan ke client.

---

### 🔹 **13. Custom Decorator**

Untuk mengambil data tertentu dari request (misalnya user).

---

### 🔹 **14. Integrasi Prisma**

NestJS sangat mudah digunakan bersama Prisma.

---

### 🔹 **15. Logging**

Saya bisa mengganti logger default Nest ke **Winston**.

---

### 🔹 **16. Global Provider**

Bisa membuat Guard/Pipe/Filter/Interceptor menjadi global.

---

### 🔹 **17. Lifecycle Hook**

Seperti:

* `OnModuleInit`
* `OnModuleDestroy`
* `BeforeApplicationShutdown`
* `OnApplicationShutdown`

---

## 📚 **Referensi**

* [https://nestjs.com](https://nestjs.com)
* [https://github.com/nestjs/nest](https://github.com/nestjs/nest)
* Programmer Zaman Now (YouTube & Website)

---

## 🏁 **Penutup**

Repository ini saya buat untuk mendokumentasikan proses belajar saya dalam memahami konsep–konsep dasar hingga menengah di NestJS.
Dengan memahami fondasi ini, saya berharap bisa membangun aplikasi backend yang lebih terstruktur, scalable, dan mudah dirawat menggunakan NestJS.

---
