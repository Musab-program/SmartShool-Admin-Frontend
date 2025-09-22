# Smart School Admin Frontend

نظام إدارة المدرسة الذكية - واجهة المستخدم الأمامية

## هيكل المشروع

```
project-root/
│── .next/                  # ملفات البناء التلقائي (Auto-generated)
│── node_modules/           # مكتبة الحزم (Packages)
│── public/                 # ملفات ثابتة: صور، أيقونات، ملفات PDF...
│   ├── favicon.ico
│   ├── images/
│   └── logo.png
│
│── src/                    # المجلد الأساسي للمشروع (Best Practice)
│   ├── app/                # نظام Routing (App Router في Next.js 13+)
│   │   ├── layout.tsx      # Layout رئيسي
│   │   ├── page.tsx        # الصفحة الرئيسية
│   │   ├── dashboard/      # صفحات لوحة التحكم
│   │   │   ├── page.tsx
│   │   │   └── students/
│   │   │       ├── page.tsx
│   │   │       └── [id]/   # صفحات ديناميكية
│   │   │           └── page.tsx
│   │   └── auth/           # صفحات الدخول والتسجيل
│   │       ├── login/page.tsx
│   │       ├── register/page.tsx
│   │       └── forgot-password/page.tsx
│   │
│   ├── components/         # جميع الـ UI Components
│   │   ├── common/         # عناصر مشتركة (Button, Modal, Navbar, Sidebar...)
│   │   ├── forms/          # مكونات النماذج (Inputs, Select, DatePicker...)
│   │   ├── dashboard/      # Widgets خاصة باللوحة (Cards, Charts...)
│   │   ├── header/         # مكونات الهيدر
│   │   ├── footer/         # مكونات الفوتر
│   │   └── ui/             # مكونات UI الأساسية
│   │
│   ├── hooks/              # React Hooks مخصصة (useAuth, useFetch...)
│   │   ├── use-mobile.ts
│   │   └── useAuth.ts
│   │
│   ├── lib/                # Utilities عامة (API clients, Helpers, Config)
│   │   ├── api.ts          # Axios instance أو fetch wrapper
│   │   ├── auth.ts         # توابع JWT/Session
│   │   ├── helpers.ts
│   │   └── utils.ts
│   │
│   ├── store/              # State Management (Zustand/Redux)
│   │   └── userStore.ts
│   │
│   ├── services/           # طبقة الاتصال بالـ API
│   │   ├── authService.ts
│   │   ├── studentService.ts
│   │   └── courseService.ts
│   │
│   ├── styles/             # CSS & Tailwind configs
│   │   └── tailwind.css
│   │
│   └── types/              # TypeScript types/interfaces
│       ├── user.d.ts
│       ├── course.d.ts
│       └── api.d.ts
│
│── .env.local              # متغيرات البيئة (API Keys, DB URL...)
│── tailwind.config.js      # إعدادات Tailwind
│── postcss.config.js
│── tsconfig.json           # TypeScript config
│── package.json
│── README.md
```

## الميزات

### ✅ تم تطبيقها:
- **Header ثابت**: لا يتحرك مع الـ scrolling
- **Sidebar متجاوب**: يظهر الأيقونات فقط عند التصغير
- **تصميم متجاوب**: يعمل على جميع الأجهزة
- **صفحات المصادقة**: تسجيل الدخول، التسجيل، استعادة كلمة المرور
- **لوحة التحكم**: إدارة الطلاب مع صفحات تفصيلية
- **هيكل منظم**: مجلدات منفصلة لكل نوع من المكونات

### 🔄 قيد التطوير:
- **إدارة المعلمين**: صفحات إدارة المعلمين
- **إدارة الصفوف**: صفحات إدارة الصفوف والمجموعات
- **الاختبارات**: نظام إدارة الاختبارات
- **التقارير**: تقارير مفصلة عن الأداء

## التقنيات المستخدمة

- **Next.js 14**: إطار العمل الرئيسي
- **TypeScript**: للكتابة الآمنة
- **Tailwind CSS**: للتصميم
- **Lucide React**: للأيقونات
- **React Icons**: لأيقونات إضافية
- **Zustand**: لإدارة الحالة

## كيفية التشغيل

1. **تثبيت الحزم**:
   ```bash
   npm install
   ```

2. **تشغيل المشروع**:
   ```bash
   npm run dev
   ```

3. **فتح المتصفح**:
   ```
   http://localhost:3000
   ```

## الصفحات المتاحة

- `/` - الصفحة الرئيسية
- `/auth/login` - تسجيل الدخول
- `/auth/register` - إنشاء حساب جديد
- `/auth/forgot-password` - استعادة كلمة المرور
- `/dashboard` - لوحة التحكم الرئيسية
- `/dashboard/students` - إدارة الطلاب
- `/dashboard/students/[id]` - تفاصيل الطالب

## المساهمة

1. Fork المشروع
2. إنشاء فرع للميزة الجديدة
3. Commit التغييرات
4. Push إلى الفرع
5. إنشاء Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT.