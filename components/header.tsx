import Link from 'next/link';
import styles from './header/header.module.css';
import AuthBar from '@/components/header/authBar';
import Image from 'next/image';
import BeliBookLogo from "@../../../public/logo/beli-book-logo.png";

export default function Header() {
	return (
    <div className={"container"}>
      <header className={styles.header}>
        <AuthBar />
        <div className={styles["logo-container"]}>
          <p className="text-[200px] font-semibold text-black">
            Calendar of Events Yogya 2024
          </p>
        </div>
      </header>
    </div>
  );
}
