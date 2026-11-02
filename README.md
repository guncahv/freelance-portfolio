# Портфолио фриланс-разработчика

Лабораторная работа №19 «Создание базовой структуры веб-приложения на React с использованием компонентов, JSX и управления состоянием».
Вариант 1 — «Портфолио фриланс-разработчика».

Выполнил: Рахманкулов А., группа 310101.

## Стек

- React 19 (функциональные компоненты, JSX, хук `useState`)
- Vite
- CSS Modules (`*.module.css`)
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
├── assets/                 # SVG-иконки и изображения
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.module.css
│   ├── InputField/
│   │   ├── InputField.jsx
│   │   └── InputField.module.css
│   └── ProjectCard/
│       ├── ProjectCard.jsx
│       └── ProjectCard.module.css
├── data/
│   └── projects.js         # данные карточек проектов
├── App.jsx
├── App.module.css
├── index.css
└── main.jsx
```

## Компоненты

| Компонент | Props | Локальное состояние |
|---|---|---|
| `Button` | `label`, `onClick`, `variant` (`primary`/`secondary`), `icon`, `type`, `disabled` | — |
| `InputField` | `id`, `label`, `placeholder`, `type`, `maxLength`, `onValueChange` | `value` — текущее значение поля |
| `ProjectCard` | `title`, `description`, `image`, `tags` | `isExpanded` — раскрыто ли описание |

## Как проверить интерактивность

1. Введите текст в поле «Ваше сообщение» — под полем меняется счётчик символов.
2. Нажмите «Отправить» и откройте консоль браузера (F12 → Console): там появится строка `Значение из поля ввода: ...`.
3. Нажмите «Подробнее» на карточке проекта — описание раскроется, кнопка сменится на «Свернуть».
