import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Peliculas</title>
        <meta name="description" content="" />
      </Head>

      <nav class="navbar" id="navbar">
        <div id="my-navbar-menu" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
            </div>
            <div class="navbar-item">
            </div>
            <div class="navbar-item">
            </div>
          </div>
          <div class="my-navbar-center" id="my-navbar-center">
            <div class="navbar-item" id="navbar-item"><a href="/"><img src="logo.png" alt="" /></a>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
            </div>
            <div class="navbar-item">
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
