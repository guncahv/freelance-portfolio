import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './ProjectCard.module.css';

/**
 * Карточка проекта. Все данные (заголовок, описание, изображение, теги)
 * приходят через props. Локальное состояние isExpanded раскрывает описание.
 */
function ProjectCard({ title, description, image, tags = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={styles.card}>
      <img src={image} alt={`Превью проекта «${title}»`} className={styles.image} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        <p className={isExpanded ? styles.description : `${styles.description} ${styles.collapsed}`}>
          {description}
        </p>
        <div className={styles.actions}>
          <Button
            label={isExpanded ? 'Свернуть' : 'Подробнее'}
            variant="secondary"
            onClick={() => setIsExpanded((prev) => !prev)}
          />
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
