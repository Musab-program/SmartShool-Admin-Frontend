# Header و Sidebar Integration Flow

## مخطط التدفق

```
┌─────────────────────────────────────────────────────────────┐
│                    SidebarProvider                          │
│  ┌─────────────────┐  ┌─────────────────────────────────┐   │
│  │   AppSidebar    │  │        Main Content Area        │   │
│  │                 │  │  ┌─────────────────────────────┐ │   │
│  │  - Dashboard    │  │  │         Header              │ │   │
│  │  - Servers      │  │  │  ┌─────────┐ ┌───────────┐ │ │   │
│  │  - Databases    │  │  │  │ Sidebar │ │   Logo    │ │ │   │
│  │  - Storage      │  │  │  │Trigger  │ │   Text    │ │ │   │
│  │  - Analytics    │  │  │  └─────────┘ └───────────┘ │ │   │
│  │  - Users        │  │  │  ┌─────────────────────────┐ │ │   │
│  │  - Security     │  │  │  │      Search Bar         │ │ │   │
│  │  - Settings     │  │  │  └─────────────────────────┘ │ │   │
│  │  - Help         │  │  │  ┌─────────┐ ┌───────────┐ │ │   │
│  └─────────────────┘  │  │  │ Notify  │ │   User    │ │ │   │
│                       │  │  │ Button  │ │  Dropdown │ │ │   │
│                       │  │  └─────────┘ └───────────┘ │ │   │
│                       │  └─────────────────────────────┘ │   │
│                       │  ┌─────────────────────────────┐ │   │
│                       │  │         Content             │ │   │
│                       │  │                             │ │   │
│                       │  └─────────────────────────────┘ │   │
│                       │  ┌─────────────────────────────┐ │   │
│                       │  │         Footer              │ │   │
│                       │  └─────────────────────────────┘ │   │
│                       └─────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## حالات الـ Header

### 1. Sidebar مفتوح (Expanded)
```
┌─────────────────────────────────────────────────────────────┐
│ [☰] Smart School    [🔍 Search...]           [🔔] [👤]     │
├─────────────────────────────────────────────────────────────┤
│ Sidebar │ Content Area                                      │
│ - Dash  │                                                   │
│ - Serv  │                                                   │
│ - DB    │                                                   │
└─────────────────────────────────────────────────────────────┘
```

### 2. Sidebar مغلق (Collapsed)
```
┌─────────────────────────────────────────────────────────────┐
│ [☰] [🔍 Search]                           [🔔] [👤]         │
├─────────────────────────────────────────────────────────────┤
│ Content Area (Full Width)                                  │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 3. على الهواتف المحمولة
```
┌─────────────────────────────────────────────────────────────┐
│ [☰] Smart School    [🔍 Search...]           [👤]          │
├─────────────────────────────────────────────────────────────┤
│ Content Area (Full Width)                                  │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## منطق التكامل

### useSidebar Hook
```tsx
const { state, isMobile } = useSidebar()
```

### الحالات المدعومة
- `state === "expanded"`: الـ sidebar مفتوح
- `state === "collapsed"`: الـ sidebar مغلق  
- `isMobile`: على الهواتف المحمولة

### التنسيقات المطبقة

#### Header Container
```tsx
<header className={cn(
  "flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-all duration-200",
  !isMobile && state === "collapsed" && "w-full",
  !isMobile && state === "expanded" && "w-full", 
  isMobile && "w-full"
)}>
```

#### Logo Text
```tsx
<span className={cn(
  "transition-all duration-200",
  !isMobile && state === "collapsed" && "hidden",
  (!isMobile && state === "expanded") || isMobile ? "inline-block" : "hidden sm:inline-block"
)}>
  Smart School
</span>
```

#### Search Bar
```tsx
<Input
  placeholder={cn(
    "Search...",
    !isMobile && state === "collapsed" && "Search"
  )}
  className={cn(
    "pl-8 transition-all duration-200",
    !isMobile && state === "collapsed" && "max-w-xs"
  )}
/>
```

#### Notification Button
```tsx
<Button className={cn(
  "h-8 w-8 transition-all duration-200",
  !isMobile && state === "collapsed" && "hidden sm:flex"
)}>
```

## الانتقالات

### Duration
- جميع الانتقالات تستخدم `duration-200` (200ms)
- الانتقالات ناعمة ومريحة للعين

### Properties المتحركة
- `width`: عرض العناصر
- `opacity`: الشفافية
- `transform`: التحويلات
- `padding`: المسافات الداخلية
- `margin`: المسافات الخارجية

## الاستجابة (Responsive)

### Breakpoints
- `sm`: 640px وأكثر
- `md`: 768px وأكثر
- `lg`: 1024px وأكثر

### السلوك على الأجهزة المختلفة
- **Desktop**: تكيف كامل مع حالة الـ sidebar
- **Tablet**: سلوك مشابه للـ desktop
- **Mobile**: عرض كامل دائماً

## الأداء

### التحسينات المطبقة
- استخدام `useMemo` للقيم المحسوبة
- انتقالات CSS بدلاً من JavaScript
- تنسيقات مشروطة فعالة

### الذاكرة
- لا توجد re-renders غير ضرورية
- استخدام Context API بكفاءة
- تحسينات Tailwind CSS

