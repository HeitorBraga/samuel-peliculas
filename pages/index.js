import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  function showWindowblue() {
    if (process.browser) {
      document.querySelector(".windowblue").classList.remove("is-hidden");
      document.querySelector(".windowblue-tab").classList.add("is-active");
      document.querySelector(".windowpremium").classList.add("is-hidden");
      document.querySelector(".windowpremium-tab").classList.remove("is-active");
    }
  }

  function showWindowpremium() {
    if (process.browser) {
      document.querySelector(".windowpremium").classList.remove("is-hidden");
      document.querySelector(".windowpremium-tab").classList.add("is-active");
      document.querySelector(".windowblue").classList.add("is-hidden");
      document.querySelector(".windowblue-tab").classList.remove("is-active");
    }
  }

  function showMore() {
    if (process.browser) {
      document.querySelector(".services-line-2").classList.remove("is-hidden")
      document.querySelector(".services-line-3").classList.remove("is-hidden")
      document.querySelector(".show-more").classList.add("is-hidden")
      document.querySelector(".show-less").classList.remove("is-hidden")
    }
  }

  function showLess(number) {
    if (process.browser) {
      document.querySelector(".services-line-2").classList.add("is-hidden")
      document.querySelector(".services-line-3").classList.add("is-hidden")
      document.querySelector(".show-more").classList.remove("is-hidden")
      document.querySelector(".show-less").classList.add("is-hidden")
    }
  }
  return (
    <>
      <Head>
        <title>Samuel Peliculas</title>
        <meta name="description" content="" />
      </Head>

      {/* Navbar */}
      <nav className="navbar background" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a>
              <figure className="image"><Image src="/logo.png" className="navbar-mobile-image" width="120px" height="93.45px" /></figure>
            </a>
          </Link>
        </div>
      </nav>

      {/* Body */}
      <div className="container">
        <section className="section section-text">
          <div className="content is-medium">
            <h1 className="has-text-centered is-underline mt-3 mbdt-5 mb-0">Instalação de películas com excelência, qualidade e garantia.</h1>
          </div>
        </section>
      </div>
      {/* Mobile */}
      <hr className="is-hidden-tablet mb-0 mt-6 pb-0" />
      {/* Tablet / Desktop */}
      <div className="tabs is-centered is-hidden-mobile mb-0">
        <ul>
          <li className="is-active windowblue-tab">
            <figure className="image"><a onClick={showWindowblue}><Image src="/windowblue.png" width="306px" height="71.05px" /></a></figure>
          </li>
          <li className="windowpremium-tab">
            <figure className="image"><a onClick={showWindowpremium}><Image src="/windowpremium.png" width="306px" height="71.05px" /></a></figure>
          </li>
        </ul>
      </div>
      <div className="container mtdt-6 mbdt-6">
        <section className="section pt-0">
          <div className="content is-medium">
            {/* Mobile */}
            <div className="has-text-centered is-hidden-tablet">
              <figure className="image is-inline-block window-logo mtm-6 mbm-3"><Image src="/windowblue.png" width="306px" height="71.05px" /></figure>
            </div>
            {/* All plataforms */}
            <h1 className="title has-text-centered mbdt-6 mt-0 mb-0 mbm-3">Vantagens</h1>
            <div className="columns benefits windowblue">
              <div className="column has-text-centered">
                <figure className="image"><Image className="is-inline-block" src="/shield-icon.png" width="128px" height="128px" /></figure>
                <h1 className="title is-4">Proteção</h1>
                <p>Fornece uma boa visibilidade ao motorista; Protege contra a projeção de estilhaços de vidro, no caso de acidente; Previne problemas de pele e oculares causados pelo sol.</p>
              </div>
              <div className="column has-text-centered">
                <figure className="image"><Image className="is-inline-block" src="/thermometer-icon.png" width="128px" height="128px" /></figure>
                <h1 className="title is-4">Temperatura</h1>
                <p>Proporciona uma sensação térmica muito agradável ao dirigir.</p>
              </div>
              <div className="column has-text-centered">
                <figure className="image"><Image className="is-inline-block" src="/car-icon.png" width="128px" height="128px" /></figure>
                <h1 className="title is-4">Para seu automóvel</h1>
                <p>Dificulta o superaquecimento do carro; Pode ser aplicado juntamente com uma película comum, caso haja o desejo de escurecimento dos vidros do veículo; Protege o painel e componentes internos do carro contra o ressecamento a longo prazo causados pela irradiação solar direta</p>
              </div>
            </div>
            {/* Tablet / Desktop */}
            <div className="columns benefits windowpremium is-hidden-mobile is-hidden">
              <div className="column has-text-centered">
                <figure className="image"><Image className="is-inline-block" src="/shield-icon.png" width="128px" height="128px" /></figure>
                <h1 className="title is-4">Proteção</h1>
                <p>Protege em até 90% contra os raios infravermelhos. Uma película comum rejeita apenas cerca de 10%.</p>
              </div>
              <div className="column has-text-centered">
                <figure className="image"><Image className="is-inline-block" src="/thermometer-icon.png" width="128px" height="128px" /></figure>
                <h1 className="title is-4">Temperatura</h1>
                <p>A redução de temperatura é sentida imediatamente após a instalação do produto!</p>
              </div>
              <div className="column has-text-centered">
                <figure className="image"><Image className="is-inline-block" src="/lightning-icon.png" width="128px" height="128px" /></figure>
                <h1 className="title is-4">Raios UVA e UVBA</h1>
                <p>Assim como a Window blue, também protege em mais de 99% contra os raios Ultravioleta…</p>
              </div>
            </div>
            {/* Mobile */}
            <div className="has-text-centered is-hidden-tablet">
              <figure className="image is-inline-block window-logo mtm-6 mbm-3"><Image src="/windowpremium.png" width="306px" height="71.05" /></figure>
            </div>
            <div className="columns benefits windowpremium is-hidden-tablet">
              <div className="column has-text-centered">
                <figure className="image"><Image className="is-inline-block" src="/image-example.png" width="128px" height="128px" /></figure>
                <h1 className="title is-4">Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus dignissim libero, et vulputate nisl posuere nec. Suspendisse potenti. Maecenas.</p>
              </div>
              <div className="column has-text-centered">
                <figure className="image"><Image className="is-inline-block" src="/image-example.png" width="128px" height="128px" /></figure>
                <h1 className="title is-4">Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus dignissim libero, et vulputate nisl posuere nec. Suspendisse potenti. Maecenas.</p>
              </div>
              <div className="column has-text-centered">
                <figure className="image"><Image className="is-inline-block" src="/image-example.png" width="128px" height="128px" /></figure>
                <h1 className="title is-4">Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus dignissim libero, et vulputate nisl posuere nec. Suspendisse potenti. Maecenas.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="background has-text-centered">
        <div className="container pt-6 pb-6">
          <section className="section">
            <h1 className="title has-text-white">Aqui você encontra películas e insulfimes de qualidade</h1>
            <Link href="https://wa.me/5562985836693"><a target="_blank" className="button is-medium mt-3 pr-6 pl-6">Solicitar Orçamento</a></Link>
          </section>
        </div>
      </div>

      <div className="container mt-6 mb-6 has-text-centered services-container">
        <section className="section">
          <h1 className="title">Nossos Serviços</h1>
          <div className="columns services-line-1 mb-0">
            <div className="column">
              <figure className="image"><Image src="/services-1.jpeg" width="640px" height="360px" id="image-1" /></figure>
            </div>
            <div className="column">
              <figure className="image"><Image src="/services-2.jpeg" width="640px" height="360px" id="image-2" /></figure>
            </div>
            <div className="column pb-0">
              <figure className="image"><Image src="/services-3.jpeg" width="640px" height="360px" id="image-3" /></figure>
            </div>
          </div>
          <a onClick={() => showMore("1")} className="is-underline show-more">Mostrar mais</a>
          
          <div className="columns services-line-2 mb-0 mt-3 is-hidden">
            <div className="column">
              <figure className="image"><Image src="/services-4.jpeg" width="640px" height="360px" id="image-4" /></figure>
            </div>
            <div className="column">
              <figure className="image"><Image src="/services-5.jpeg" width="640px" height="360px" id="image-5" /></figure>
            </div>
            <div className="column pb-0">
              <figure className="image"><Image src="/services-6.jpeg" width="640px" height="360px" id="image-6" /></figure>
            </div>
          </div>

          <div className="columns services-line-3 mt-3 is-hidden">
            <div className="column">
              <figure className="image"><Image src="/services-7.jpeg" width="640px" height="360px" id="image-7" /></figure>
            </div>
            <div className="column">
              <figure className="image"><Image src="/services-8.jpeg" width="640px" height="360px" id="image-8" /></figure>
            </div>
            <div className="column">
              <figure className="image"><Image src="/services-9.jpeg" width="640px" height="360px" id="image-9" /></figure>
            </div>
          </div>
          <Link href="#warranty" ><a onClick={() => showLess("1")} className="is-underlines show-less is-hidden">Mostrar menos</a></Link>
        </section>
      </div>

      <div className="background">
        <div className="container">
          <section className="section">
            <h1 className="title is-2 has-text-white has-text-centered">Fale conosco ou venha até a nossa loja!</h1>
            {/* Tablet / Desktop */}
            <div className="columns is-hidden-mobile">
              <div className="column mt-6 is-narrow">
                <Link href="/"><a><figure className="image mb-6"><Image src="/whatsapp-icon.png" width="64px" height="64px" /></figure></a></Link>

                <Link href=""><a><figure className="image mt-6"><Image src="/instagram-icon.png" width="64px" height="64px" /></figure></a></Link>

                {/* <figure className="image mt-5"><Image className="locate-icon" src="/locate-icon.png" width="64px" height="64px" /></figure> */}
              </div>
              <div className="column mt-6">
                <h1 className="has-text-white title is-3 mb-0">Whatsapp</h1>
                <h1 className="has-text-white title is-4 mt-2 mb-6">(xx) xxxxx-xxxx</h1>

                <h1 className="has-text-white title is-3 mb-0 mt-6">Instagram</h1>
                <h1 className="has-text-white title is-4 mt-2">@lorem_ipsum</h1>
              </div>
              <div className="column mt-6 is-narrow">
                <Link href=""><a><figure className="image mb-6"><Image src="/locate-icon.png" width="80px" height="80px" /></figure></a></Link>
              </div>
              <div className="column mt-6">
                <h1 className="has-text-white title is-3 mb-0">Endereço</h1>
                <h1 className="has-text-white title is-4 mt-2">R. CV 10, quadra 20 lt 26, Center Ville Goiânia-GO</h1>
              </div>
                
            </div>
            <div className="is-hidden-mobile">
              <h1 className="title has-text-white mt-6 is-3 has-text-centered">Nossa Localização</h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15283.161810187088!2d-49.3477053!3d-16.7373042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3e4393f7464a957!2sSamuel%20peliculas!5e0!3m2!1spt-BR!2sbr!4v1648662323865!5m2!1spt-BR!2sbr" width="600" height="450" className="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* Mobile */}
            <div className="columns is-hidden-tablet is-mobile mt-6">
              <div className="column">
                <Link href="/"><a><figure className="image"><Image src="/whatsapp-icon.png" width="64px" height="64px" /></figure></a></Link>
                <h1 className="has-text-white title is-3 mb-0">Whatsapp</h1>
                <h1 className="has-text-white title is-4 mt-2">(62) 98583-6693</h1>

                <Link href="/"><a><figure className="image mt-6"><Image src="/instagram-icon.png" width="64px" height="64px" /></figure></a></Link>
                <h1 className="has-text-white title is-3 mb-0">Instagram</h1>
                <h1 className="has-text-white title is-4 mt-2">@samuelinsulfilm</h1>
              </div>
              <div className="column">
                <Link href=""><a><figure className="image"><Image className="locate-icon" src="/locate-icon.png" width="64px" height="64px" /></figure></a></Link>
                <h1 className="has-text-white title is-3 mb-0">Endereço</h1>
                <h1 className="has-text-white title is-4 mt-2">R. CV 10, quadra 20 lt 26, Center Ville Goiânia-GO</h1>
              </div>
            </div>
            {/* Mobile */}
            <div className="has-text-centered is-hidden-tablet">
              <h1 className="title has-text-white mt-6 pt-3 is-3">Nossa Localização</h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15283.161810187088!2d-49.3477053!3d-16.7373042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3e4393f7464a957!2sSamuel%20peliculas!5e0!3m2!1spt-BR!2sbr!4v1648662323865!5m2!1spt-BR!2sbr" width="600" height="450" className="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </div>
      </div>

      {/* Fixed Icons */}
      <div className="fixed-icon">
        <Link href="https://wa.me/5562985836693">
          <a target="_blank">
            <figure className="image mr-3"><Image src="/whatsapp-icon.png" width="64px" height="64px" className="is-rounded" /></figure>
          </a>
        </Link>
        {/* Tablet / Desktop */}
        <Link href="tel:5562985836693">
          <a className="is-hidden-mobile" href="tel:5562985836693">
            <figure className="image mr-3"><Image src="/phone-icon.png" width="64px" height="64px" className="is-rounded" /></figure>
          </a>
        </Link>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="content">
          <p className="has-text-centered"><strong>&copy; Samuel Películas</strong></p>
        </div>
      </footer>
    </>
  )
}
