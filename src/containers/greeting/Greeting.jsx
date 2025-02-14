import "./Greeting.css";
import { Fade } from "react-reveal";
import { FaWhatsapp } from "react-icons/fa6";
import mainLogoBlack from "../../main_logo_black.png";
import mainLogoWhite from "../../main_logo_white.png";
import { useTheme } from "../../theme";

// const Greeting = forwardRef(({theme}, ref) => {
function Greeting({ theme }) {

    const { isDarkMode } = useTheme();
    return (
        <Fade bottom duration={2000} distance="10px">
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                {/* <div style={{position:"absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)"}}> */}
                <div className="center-container">
                    <div className="row align-items-center container">
                        <div className="col-md-6">
                            <h1 style={{fontFamily:"inter-bold", color: theme.headline}}>
                                An original portofolio website by Renaldy Cahya 🚀
                            </h1>

                            {/* <div
                        className="greeting-image-div"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1.5rem",
                        }}
                    > */}
                            {/* <div className="rounded-circle greeting-card-image"></div> */}
                            {/* </div> */}

                        </div>
                        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6teAERrOF75aXYojWZuPYR?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                        <div className="col-md-6">
                            <div>
                                <h1 style={{ color: theme.headline }} className="greeting-text">
                                    Renaldy Cahya
                                </h1>
                                <h2 style={{ color: theme.titleP }} className="greeting-nickname">
                                    Fullstack Web Developer
                                </h2>
                                {/* <p style={{ color: theme.headline }} className="greeting-text-p">Experienced Web Programmer with a demonstrated history of working in the insurance industry & IT Service/Solution. Skilled in PHP, JavaScript Strong engineering professional graduated from Universitas Tarumanagara.</p> */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "2rem",
                                    }}
                                >
                                    <a
                                        href="https://api.whatsapp.com/send?phone=6282211577756"
                                        style={{
                                            backgroundColor: theme.titleP,
                                            color: theme.headline,
                                            borderColor: theme.headline,
                                            border: "2px solid",
                                        }}
                                        className="btn button-see-experience"
                                    >
                                        <FaWhatsapp size={25} /> Contact Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="greet-main"> */}

                    {/* {isDarkMode ? (
                        <img width={300} height={100} src={mainLogoWhite} alt="Logo" style={{ marginRight: "30rem" }} />
                    ) : (
                        <img width={300} height={100} src={mainLogoBlack} alt="Logo" style={{ marginRight: "30rem" }} />
                    )} */}

                    {/* <div style={{float:"right"}}>
                        
                    </div> */}
                </div>
            </div>
            {/* </div> */}
        </Fade>
    );
};


export default Greeting;