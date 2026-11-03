# aykhan.dev — портфолио фриланс-разработчика

Лабораторная работа №19 «Создание базовой структуры веб-приложения на React с использованием компонентов, JSX и управления состоянием».
Вариант 1 — «Портфолио фриланс-разработчика».

Выполнил: Рахманкулов А., группа 310101.

Интерфейс реализован по дизайн-системе и прототипу из ЛР №17: цвета, типографика (Manrope, Inter, JetBrains Mono), тени, радиусы и графические ассеты (логотип, иконки, фото специалиста).

## Стек

- React 19 (функциональные компоненты, JSX, хук `useState`)
- Vite
- CSS Modules (`*.module.css`) + дизайн-токены ЛР №17 в CSS-переменных (`src/index.css`)
- PropTypes для проверки типов props

## Запуск проекта

Требуется установленный [Node.js](https://nodejs.org/) (версия 20.19 или новее).

```bash
git clone https://github.com/guncahv/freelance-portfolio.git
cd freelance-portfolio
npm install
npm run dev
```

После запуска откройте в браузере адрес, который покажет терминал (обычно http://localhost:5173).

Сборка production-версии:

```bash
npm run build
npm run preview
```

## Структура проекта

```
src/
├── assets/                     # ассеты из ЛР №17: логотип, иконки, фото, обложки проектов
├── components/
│   ├── Button/                 # Button.jsx + Button.module.css
│   ├── InputField/             # InputField.jsx + InputField.module.css
│   ├── ProjectCard/            # ProjectCard.jsx + ProjectCard.module.css
│   ├── Header/                 # Header.jsx + Header.module.css
│   └── Icon/                   # Icon.jsx — вывод SVG-иконки в цвете текста
├── data/
│   ├── projects.js             # данные карточек проектов
│   └── navigation.js           # пункты меню
├── App.jsx
├── App.module.css
├── index.css                   # дизайн-токены ЛР №17
└── main.jsx
```

## Компоненты

| Компонент | Props | Локальное состояние |
|---|---|---|
| `Button` | `label`, `onClick`, `variant` (`primary`/`secondary`), `icon`, `type`, `disabled` | — |
| `InputField` | `id`, `label`, `placeholder`, `type`, `icon`, `helperText`, `error`, `onValueChange` | `value` — текущее значение поля |
| `ProjectCard` | `title`, `description`, `image`, `tags`, `meta`, `caseUrl` | `isFavorite` — проект в избранном |
| `Header` | `navItems`, `avatar`, `status`, `onContactClick` | `activeId` — активный пункт меню |
| `Icon` | `src`, `size`, `label` | — |

## Как проверить интерактивность

1. Откройте консоль браузера (F12 → Console).
2. Введите email в поле «Email для связи» и нажмите «Отправить» — в консоли появится `Значение из поля ввода: ...`. Если email некорректный, поле перейдёт в состояние ошибки.
3. Нажмите на сердечко на карточке проекта — проект добавится в избранное.
4. Нажмите на пункт меню — он станет активным.
