import Head from 'next/head'
import { useIntl } from "react-intl"
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import data, { exchanges } from '../db/data'

import Header from '../components/header'
import Card from '../components/card'
import Footer from '../components/footer'


export default function Home() {
    const { formatMessage } = useIntl()
    const f = id => formatMessage({ id })
    const router = useRouter()
    const { locale, locales, defaultLocale } = router


    return (
        <div>
            <Head>
                <title>Cryptoantelope</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossOrigin="anonymous" />
                <script src="https://kit.fontawesome.com/eb082f2eae.js" crossorigin="anonymous"></script>
            </Head>
            <Header />
            
            <main className={`container ${styles.container}`}>
                <div className={styles.title}>
                    <h1>{f("welcomeMessage")}</h1>
                    <p className={styles.description}>
                        {f("shortDescription")}
                    </p>
                </div>

                <section className={`row ${styles.section}`}>
                    <h2 className={styles.h2}>{f("bestcasinos")}</h2>
                    {data.casinos.map((casino, i) => (
                        <Card 
                            key={i}
                            title={casino.name}
                            link={casino.url}
                        >
                            <ul>
                                {casino.attributes?.map((attribute, i) => <li key={i}>{attribute}</li>)}
                            </ul>
                        </Card>
                    ))}
                </section>

                <section className="row">
                    <h2 className={styles.h2}>{f("bestexchanges")}</h2>
                    {data.exchanges.map((exchange, i) => (
                        <Card
                            key={i} 
                            title={exchange.name}
                            link={exchange.url}
                        >

                            <ul>
                                {exchange.attributes?.map((attribute, i) => <li key={i}>{attribute}</li>)}
                            </ul>
                        </Card>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )
}
