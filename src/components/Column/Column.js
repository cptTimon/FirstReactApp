import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

const Column = ({title,cards,icon,addCard}) => (
  <section className={styles.component}>
    <h3 className={styles.title}>{title}
      <span className={styles.icon}>
        <Icon name={icon} />
      </span>
    </h3>
    <div className={styles.cards}>
      {cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </div>
    <div className={styles.creator}>
      <Creator text={settings.cardCreatorText} action={addCard}/>
    </div>
  </section>
);
Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

Column.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  icon: PropTypes.string,
  addCard: PropTypes.func,
};

export default Column;