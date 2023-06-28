import Head from 'next/head';
import Menu from './componentes/menu';
import Footer from './componentes/footer';
import styles from '../styles/Container.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <title>SysWoker - Home</title>
    </Head>
    <Menu/>
    {/*Fin de Head y Menu*/}
    <section className={styles.container}>
      <div>
      <h1>Calculadora de Horarios Laborales</h1>
      </div>
    </section>

    <Footer/>
    </>
  )
}
