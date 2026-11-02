import { useState } from 'react';
import Button from './components/Button/Button';
import InputField from './components/InputField/InputField';
import ProjectCard from './components/ProjectCard/ProjectCard';
import projects from './data/projects';
import avatar from './assets/avatar.svg';
import sendIcon from './assets/send-icon.svg';
import styles from './App.module.css';

function App() {
  // значение поля ввода, которое приходит из InputField через onValueChange
  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    console.log('Значение из поля ввода:', message);
  };

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <img src={avatar} alt="Аватар разработчика" className={styles.avatar} />
        <div>
          <h1 className={styles.name}>Айхан Рахманкулов</h1>
          <p className={styles.role}>Frontend-разработчик · фриланс</p>
          <p className={styles.about}>
            Создаю адаптивные веб-интерфейсы на React: от макета в Figma до готового продукта.
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Мои проекты</h2>
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Связаться со мной</h2>
          <div className={styles.contact}>
            <InputField
              id="message"
              label="Ваше сообщение"
              placeholder="Опишите задачу для проекта"
              onValueChange={setMessage}
            />
            <Button label="Отправить" icon={sendIcon} onClick={handleSendClick} />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>© 2026 Портфолио фриланс-разработчика</footer>
    </div>
  );
}

export default App;
