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
                        <div className='icon-container'>
                            <img src={pieIcon} />
                        </div>
                        <h3>Performance Benchmarking</h3>
                        <p>
                            Tracking and Enhancing Software Performance Metrics
                        </p>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <img src={cubeIcon} />
                        </div>
                        <h3>Optimizing Speed</h3>
                        <p>
                            Measuring and Improving Performance Metrics
                        </p>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <img src={layerIcon} />
                        </div>
                        <h3>Efficiency Matters</h3>
                        <p>
                            Key Performance Metrics for Software Performance Evaluation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}