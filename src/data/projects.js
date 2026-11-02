import shopImage from '../assets/project-shop.svg';
import dashboardImage from '../assets/project-dashboard.svg';
import mobileImage from '../assets/project-mobile.svg';

// Данные проектов портфолио. В компонент ProjectCard передаются через props.
const projects = [
  {
    id: 1,
    title: 'Интернет-магазин одежды',
    description:
      'Адаптивный каталог товаров с фильтрами, корзиной и оформлением заказа. Реализована вёрстка под мобильные устройства и интеграция с платёжным сервисом.',
    image: shopImage,
    tags: ['React', 'CSS Modules', 'REST API'],
  },
  {
    id: 2,
    title: 'Панель аналитики продаж',
    description:
      'Дашборд для малого бизнеса: графики выручки, таблица заказов и экспорт отчётов. Данные обновляются без перезагрузки страницы.',
    image: dashboardImage,
    tags: ['React', 'Chart.js', 'Node.js'],
  },
  {
    id: 3,
    title: 'Мобильное приложение для записи',
    description:
      'Сервис онлайн-записи к мастерам: выбор услуги, свободного времени и напоминания о визите. Интерфейс спроектирован в Figma и сверстан по макету.',
    image: mobileImage,
    tags: ['React Native', 'Figma', 'Firebase'],
  },
];

export default projects;
