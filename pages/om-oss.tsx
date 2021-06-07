import Layout from '../src/components/Layout';
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Om oss
      </h1>
      <p className={styles.description}>
        Vi er Syom
      </p>

    </Layout>
  )
}

export default Home;