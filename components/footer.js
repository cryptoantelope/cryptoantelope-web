import styles from '../styles/footer.module.css'

const Footer = () => {
    return <footer className={`container ${styles.footer}`}>
        made with <i className={`fas fa-heart ${styles.heart}`}> </i> 
        {' '}by <a href="https://twitter.com/cryptoAntelope">@cryptoantelope</a>
    </footer>
}


export default Footer