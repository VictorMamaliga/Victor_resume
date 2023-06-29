import styles from './myOffers.module.scss';
import pieIcon from '../../assets/icons/chart-pie.svg';
import cubeIcon from '../../assets/icons/cube.svg';
import layerIcon from '../../assets/icons/layer-group.svg';

export default function MyOffers() {
    return (
        <section>
            <div className="container">
                <small>What I Offer.</small>
                <div className={styles.myOffers}>
                    <div>
                        <div className={styles.myOffersImage}>
                            <img src={pieIcon} alt="" />
                        </div>
                        <h3>Niste titlu</h3>
                        <h4>
                            Eram odata cu gandul in alta parte si am mintit ca mi-e foame.
                        </h4>
                    </div>
                    <div>
                        <div className={styles.myOffersImage}>
                            <img src={cubeIcon} alt="" />
                        </div>
                        <h3>Prima mea serbare</h3>
                        <h4>
                            Erau atat de multe persoane incat m-am balbait
                        </h4>
                    </div>
                    <div>
                        <div className={styles.myOffersImage}>
                            <img src={layerIcon} alt="" />
                        </div>
                        <h3>Viata de dupa</h3>
                        <h4>
                            Se zice ca nu o sa mai fii niciodata cum ai fost dupa ce iti aduci aminte de unde ai plecat
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}