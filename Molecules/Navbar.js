import styles from '../styles/navbar.module.scss'
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <Link href="#">
                <a>
                    The Coolest Blog Ever
                </a>
            </Link>
        </nav>
    );
}