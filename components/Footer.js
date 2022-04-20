import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
	return (
		<div>
			<div className="background">
				<div className="container">
					<section className="section">
						<h1 className="title is-2 has-text-white has-text-centered">Fale conosco ou venha até a nossa loja!</h1>
						{/* Tablet / Desktop */}
						<div className="columns is-hidden-mobile">
							<div className="column mt-6 is-narrow">
								<Link href="https://wa.me/5562985836693"><a target="_blank"><figure className="image mb-6"><Image src="/whatsapp-icon.png" className="footer-icon" width="64px" height="64px" /></figure></a></Link>

								<Link href="https://www.instagram.com/samuelinsulfilm/"><a target="_blank"><figure className="image mt-6"><Image src="/instagram-icon.png" width="64px" height="64px" /></figure></a></Link>
							</div>
							<div className="column mt-6">
								<Link href="https://wa.me/5562985836693">
									<a target="_blank">
										<h1 className="has-text-white title is-4 mb-0">Whatsapp</h1>
										<h1 className="has-text-white title is-5 mt-2 mb-6">(62) 98583-6693</h1>
									</a>
								</Link>

								<Link href="https://www.instagram.com/samuelinsulfilm/">
									<a target="_blank">
										<h1 className="has-text-white title is-4 mb-0 mt-6 pt-3">Instagram</h1>
										<h1 className="has-text-white title is-5 mt-2">@samuelinsulfilm</h1>
									</a>
								</Link>
							</div>
							<div className="column mt-6 is-narrow">
								<Link href="https://g.page/samuel-peliculas?share"><a target="_blank"><figure className="image mb-6"><Image src="/locate-icon.png" width="80px" height="80px" /></figure></a></Link>
							</div>
							<div className="column mt-6">
								<Link href="https://g.page/samuel-peliculas?share">
									<a target="_blank">
										<h1 className="has-text-white title is-4 mb-0">Endereço</h1>
										<h1 className="has-text-white title is-5 mt-2">R. CV 10, quadra 20 lt 26, Center Ville Goiânia-GO</h1>
									</a>
								</Link>
							</div>
								
						</div>
						<div className="is-hidden-mobile">
							<h1 className="title has-text-white mt-6 is-3 has-text-centered">Nossa Localização</h1>
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15283.161810187088!2d-49.3477053!3d-16.7373042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3e4393f7464a957!2sSamuel%20peliculas!5e0!3m2!1spt-BR!2sbr!4v1648662323865!5m2!1spt-BR!2sbr" width="600" height="450" className="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
						{/* Mobile */}
						<div className="columns is-hidden-tablet is-mobile mt-6">
							<div className="column">
								<Link href="https://wa.me/5562985836693">
									<a target="_blank">
										<figure className="image"><Image src="/whatsapp-icon.png" width="64px" height="64px" /></figure>
										<h1 className="has-text-white title is-5 mb-0">Whatsapp</h1>
										<h1 className="has-text-white title is-6 mt-2">(62) 98583-6693</h1>
									</a>
								</Link>

								<Link href="/">
									<a>
										<figure className="image mt-6"><Image src="/instagram-icon.png" width="64px" height="64px" /></figure>
										<h1 className="has-text-white title is-5 mb-0">Instagram</h1>
										<h1 className="has-text-white title is-6 mt-2">@samuelinsulfilm</h1>
									</a>
								</Link>
							</div>
							<div className="column">
								<Link href="https://g.page/samuel-peliculas?share">
									<a>
										<figure className="image"><Image className="locate-icon" src="/locate-icon.png" width="64px" height="64px" /></figure>
										<h1 className="has-text-white title is-5 mb-0">Endereço</h1>
										<h1 className="has-text-white title is-6 mt-2">R. CV 10, quadra 20 lt 26, Center Ville Goiânia-GO</h1>
									</a>
								</Link>
							</div>
						</div>
						{/* Mobile */}
						<div className="has-text-centered is-hidden-tablet">
							<h1 className="title has-text-white mt-6 pt-3 is-3">Nossa Localização</h1>
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15283.161810187088!2d-49.3477053!3d-16.7373042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3e4393f7464a957!2sSamuel%20peliculas!5e0!3m2!1spt-BR!2sbr!4v1648662323865!5m2!1spt-BR!2sbr" width="600" height="450" className="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</section>
				</div>
			</div>
			<footer className="footer">
			<div className="content">
				<p className="has-text-centered"><strong>&copy; Samuel Películas</strong></p>
			</div>
		</footer>
	</div>
	)
}

export default Footer;