import Layout from '../src/components/Layout';
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Syom
      </h1>
      <p className={styles.description}>
        Langt liv for klærne
      </p>

    </Layout>
  )
}

export default Home;