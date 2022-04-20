import Image from 'next/image'
import Link from 'next/link'

const FixedIcons = () => {
	return (
		<div className="fixed-icon">
			<Link href="https://wa.me/5562985836693">
				<a target="_blank">
					<figure className="image mr-3"><Image src="/whatsapp-icon.png" width="64px" height="64px" className="is-rounded" /></figure>
				</a>
			</Link>
			
			<Link href="tel:5562985836693">
				<a className="is-hidden-mobile" href="tel:5562985836693">
					<figure className="image mr-3"><Image src="/phone-icon.png" width="64px" height="64px" className="is-rounded" /></figure>
				</a>
			</Link>
		</div>
	)
}

export default FixedIcons;