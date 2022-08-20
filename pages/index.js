import HeadElements from '../components/HeadElements'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <HeadElements />
      <Sidebar />

      <div className='ml-80'>
        <p>Lorem ipsum</p>
      </div>
    </div>
  )
}
