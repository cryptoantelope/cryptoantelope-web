import styles from '../styles/card.module.css'

const Card = props => {
    const {children, link, linkLabel, subtitle, title} = props

    return (
        <div className={`col-sm-12 col-md-4 ${styles.container}`}>
            <div className={`card h-100`}>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    {subtitle? <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>:''}
                    {children}
                </div>
                <div className={`card-footer bg-transparent text-end ${styles.footer}`}>
                    {link? 
                        <a 
                            className="card-link" 
                            href={link}
                            rel="nofollow"
                        >
                            {linkLabel? linkLabel:"visit this site"}
                        </a>
                        :""
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
