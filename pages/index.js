import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import FixedIcons from '../components/FixedIcons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Peliculas</title>
        <meta name="description" content="" />
      </Head>

      <FixedIcons />
      <Navbar />
      
      <div className="container">
        <section className="section">
          <div className="columns has-text-centered is-hidden-mobile">
            <div className="column">
              <figure className="image">
                <Image src="/windowblue-logo.png" width="305px" height="71.05px" />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <Image src="/windowpremium-logo.png" width="306px" height="71.05px" />
              </figure>
            </div>
          </div>

          <div className="columns has-text-centered is-hidden-tablet is-mobile window-logo">
            <div className="column">
              <figure className="image">
                <Image src="/windowblue-logo.png" width="1000px" height="1000px"/>
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <Image src="/windowpremium-logo.png" width="1000px" height="1000px"/>
              </figure>
            </div>
          </div>

          <h1 className="title has-text-centered mt-6">Instalação de películas</h1>
          <div className="content is-large">
            <div className="columns is-hidden-mobile">
              <div className="column">
                <ul>
                  <li>Windowblue</li>
                  <li>Windowpremium</li>
                  <li>Jateado</li>
                  <li>Branco Leitosa</li>
                  <li>Espelhado</li>
                </ul>
              </div>
              <div className="column">
                <ul>
                  <li>Blackout</li>
                  <li>Película Térmica</li>
                  <li>Fumê</li>
                  <li>Decorativo</li>
                  <li>Segurança</li>
                </ul>
              </div>
            </div>
            <div className="is-hidden-tablet">
              <ul>
                <li>Windowblue</li>
                <li>Windowpremium</li>
                <li>Jateado</li>
                <li>Branco Leitosa</li>
                <li>Espelhado</li>
                <li>Blackout</li>
                <li>Película Térmica</li>
                <li>Fumê</li>
                <li>Decorativo</li>
                <li>Segurança</li>
              </ul>
            </div>
            <div className="has-text-centered">
              <p className="mt-5">
                Com as películas instaladas por Samuel Películas téra redução 90% do calor e 99% dos raios ultra violeta prejudiciais, diminuindo o desbotamento dos 
                móveis e tapetes, com economia de energia, reduz os custos de ar condicionado e assim Controle da luz solar melhora o conforto e mantém uma temperatura
                consistente em todos os ambiente, diminui o reflexo da luz solar para a visualização dos monitores de TVs e computadores.
              </p>
              <Link href="https://wa.me/5562985836693">
                <a target="_blank" className="button wpp-color is-large has-text-centered has-text-white mb-6 pr-6 pl-6">
                  <Image src="/whatsapp-icon.png" className="wpp-icon" width="40px" height="40px" />
                  Entre em contato!
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
