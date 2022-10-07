import styles from "../styles/layout.module.scss";
import Navbar from "../Molecules/Navbar";
import TableOfContents from "../Molecules/TableOfContents";
import BlogContainer from "../Organisms/BlogContainer";


export default function Layout() {
    return (
        <div className={styles.layoutContainer}>
            <header>
                <Navbar />
            </header>
            <main>
                <aside>
                    <TableOfContents />
                </aside>
                <article>
                    <BlogContainer />
                </article>
            </main>
        </div>
    );
}