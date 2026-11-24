# Шаблон лендинга

Статический одностраничный сайт на Next.js (App Router, `output: 'export'`), Mantine UI и next-intl.

## Запуск

```bash
yarn            # зависимости
yarn dev        # dev-сервер на http://localhost:3000
yarn pre:build  # копирует ./data в public/static/data
yarn build      # статическая сборка в ./dist
yarn fullcheck  # eslint + prettier + tsc
```

## Структура

```
data/                         контент в JSON (FAQ и т. п.); картинки из JSON доступны по /static/data/...
builder/                      pre-build: копирует data/ → public/static/data
public/                       шрифты, логотипы, robots.txt
src/
  app/page.tsx                редирект на локаль по умолчанию
  app/[locale]/layout.tsx     html, метаданные, хедер (AppShell), футер, Яндекс.Метрика
  app/[locale]/page.tsx       порядок секций страницы
  app/[locale]/_extra/
    content/<Section>/        секции: Hero, Steps, Faq, Footer (компонент + classes.module.css)
    navigation/               меню для десктопа и мобильных
  constants/                  контакты, размеры, env-переменные
  helpers/navigation.ts       пункты меню (якоря на id секций)
  i18n/                       настройка next-intl (локали в routing.ts)
  messages/ru.json            все тексты
  providers/mantine/theme.ts  палитра brand и тема
```

## Как адаптировать под проект

1. Тексты и метаданные: `src/messages/ru.json`.
2. Контакты: `src/constants/app.ts`.
3. Цвета: палитра `brand` в `src/providers/mantine/theme.ts`.
4. Логотипы: `public/logo/logo-light.svg` (хедер) и `logo-dark.svg` (футер); favicon можно положить в `src/app/favicon.ico`.
5. Переменные окружения (`.env.development`, `.env.production`):
    - `NEXT_PUBLIC_BASE_URL`: адрес сайта, нужен для метаданных;
    - `NEXT_PUBLIC_APP_URL`: куда ведёт кнопка на главном экране;
    - `NEXT_PUBLIC_YANDEX_METRIKA_ID`: ID счётчика (если пусто, Метрика не подключается).

## Новая секция

1. Создайте `src/app/[locale]/_extra/content/MySection/MySection.tsx` с корневым `<Box id="my-section">`.
2. Экспортируйте её из `src/app/[locale]/_extra/index.ts` и добавьте в `src/app/[locale]/page.tsx`.
3. Добавьте тексты в `ru.json` и при необходимости пункт меню в `src/helpers/navigation.ts`.
