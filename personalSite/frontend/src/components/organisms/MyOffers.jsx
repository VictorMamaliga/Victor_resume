import styles from './myOffers.module.scss';
import pieIcon from '../../assets/icons/chart-pie.svg';
import cubeIcon from '../../assets/icons/cube.svg';
import layerIcon from '../../assets/icons/layer-group.svg';

export default function MyOffers() {
    return (
        <section id='my-offers'>
            <div className="container">
                <small>What I Offer.</small>
                <div className={styles.myOffers}>
                    <div>
                        <div className={styles.myOffersImage}>
                            <img src={pieIcon} alt="" />
                        </div>
                        <h3>Niste titlu</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Adipisci.
                        </h4>
                    </div>
                    <div>
                        <div className={styles.myOffersImage}>
                            <img src={cubeIcon} alt="" />
                        </div>
                        <h3>Niste titlu</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Adipisci.
                        </h4>
                    </div>
                    <div>
                        <div className={styles.myOffersImage}>
                            <img src={layerIcon} alt="" />
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