import main from "../assets/images/main.svg";
import Wrapper from '../assets/Wrapper/LandingPage'
import { Logo } from "../components";
import { Link } from "react-router-dom";
function Landing() {
    return (
        <>
            <Wrapper>
                <nav>
                    <Logo/>
                </nav>
                <div className="container page">
                    {/* info */}
                    <div className="info">
                        <h1>
                            job <span>tracking</span>app
                        </h1>
                        <p>
                            Listicle bitters offal, trust fund food truck yes plz live-edge pabst cray yuccie. Flexitarian
                            marfa letterpress fanny pack, sustainable ascot shaman meditation banjo activated charcoal
                            try-hard shabby chic cornhole.
                        </p>
                        <Link to="/register" className="btn btn-hero">Login/Register</Link>
                    </div>

                    <img src={main} alt="job hunt" className="img main-img" />
                </div>
            </Wrapper>
        </>
    );
}



export default Landing;
