import Link from 'next/link';
import styles from './header/header.module.css';
import AuthBar from '@/components/header/authBar';
import Image from 'next/image';
import BeliBookLogo from "@../../../public/logo/beli-book-logo.png";

export default function Header() {
	return (
		<div className={'container'}>
			<header className={styles.header}>
				<AuthBar />
				<div className={styles['logo-container']}>
					<Link href={'/'} className={styles.logo}>
						<Image 
						src={BeliBookLogo}
						width={500}
						height={500}
						alt=""
						className='w-[400px] h-auto'
						/>
					</Link>
				</div>
			</header>
		</div>
	);
}
