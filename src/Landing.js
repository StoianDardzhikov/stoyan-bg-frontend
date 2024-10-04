import "./global.css";
import ctaArrow from './svgs/cta-arrow.svg';

function Landing() {
    return (
        <div className="landing">
            <div className="stoyan">
                <h1 className="stoyan-text">&lt;STOYAN</h1>
                <span className="stoyan-line"></span>
            </div>
            <div className="dard">
                <span className="dard-line"></span>
                <h1 className="dard-text">DARDZHIKOV/&gt;</h1>
            </div>
            <div className="moto">
                <h1 className="moto-text">Crafting code | Pursuing knowledge | Dancing through life</h1>
                <span className="moto-line"></span>
            </div>
            <div className="cta">
                <h2 className="cta-text">FIND OUT ABOUT ME</h2>
                <img className="cta-img" src={ctaArrow} alt="cat arrow"></img>
            </div>
        </div>
    );
}

export default Landing;
