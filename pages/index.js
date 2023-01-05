import styles from '../styles/Home.module.css';
import Dashboard from '../Components/Dashboard_Form';
export default function Home() {
  return (
    <div className={styles.container}>
      <Dashboard
        noQuestions={2}
        Q_1='Lorem ipsum dolor sit amet consectetur. Ultrices vulputate at
              at quis ornare. at at quis ornare.'
        Q_2='Lorem ipsum dolor sit amet consectetur. Ultrices vulputate at
              at quis ornare. at at quis ornare.'
        name="Saurabh"
      />
    </div>
  );
}
