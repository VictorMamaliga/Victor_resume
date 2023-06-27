import styles from './myOffers.module.scss';

export default function MyOffers() {
    return (
        <section id='my-offers'>
            <div className="container">
                <small>My offers.</small>
                <div className={styles.myOffers}>
                    <div>
                        <div className="image">
                            imagine
                            <img src="" alt="" />
                        </div>
                        <h3>Niste titlu</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Adipisci.
                        </h4>
                    </div>
                    <div>
                        <div className="image">
                            imagine
                            <img src="" alt="" />
                        </div>
                        <h3>Niste titlu</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Adipisci.
                        </h4>
                    </div>
                    <div>
                        <div className="image">
                            imagine
                            <img src="" alt="" />
                        </div>
                        <h3>Niste titlu</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Adipisci.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}