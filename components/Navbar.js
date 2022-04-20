import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
	return (
		<div className="background">
			<nav className="navbar background" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link href="/">
						<a>
							<figure className="image"><Image src="/logo.png" width="250px" height="175px" /></figure>
						</a>
					</Link>
				</div>
			</nav>
			<div className="has-text-centered">
				<h1 className="title has-text-white has-text-centered is-4">
					RESIDENCIAL <span className="circle" /> COMERCIAL <span className="circle" /> AUTOMOTIVO <span className="circle" /> ARQUITETURA
				</h1>

				<h1 className="title wpp-color has-text-centered is-4 mb-2">
					Orçamento sem compromisso!
				</h1>
				<h1 className="title is-4 has-text-white has-text-centered mb-2">
					(62) 98583-6693
				</h1>
				<Link href="https://wa.me/5562985836693">
					<a target="_blank" className="button wpp-color is-medium has-text-centered has-text-white mb-6">
						<Image src="/whatsapp-icon.png" className="wpp-icon" width="32px" height="32px" />
						Entre em contato!
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Navbar;