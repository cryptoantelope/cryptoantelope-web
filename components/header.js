import Image from 'next/image'

const styles = {
    strong: {
        paddingLeft: ".5rem"
    }
}

const Header = () => {
    return (
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    {/*<Image src="/textoPlanoReverse.png" height="34" width="27.19" alt="textoPlano logo"/>*/}
                    <strong style={styles.strong}>CryptoAntelope</strong>
                </a>
            </div>
        </div>
    )
}

export default Header             