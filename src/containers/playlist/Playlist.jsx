import { Fade } from "react-reveal";


const Playlist = ({ theme }) => {
    return (
        <div className="d-flex justify-content-start container mt-5">
            <Fade top duration={1000} distance="20px">
                <div>
                    <div className="mb-5">
                        <h1
                            style={{ color: theme.titleP, paddingTop: "10%" }}
                            className="playlist-text"
                        >
                            My Playlist
                        </h1>
                        <hr
                            style={{
                                // marginTop: "1rem",
                                // marginBottom: "2rem",
                                // border: "0",
                                borderTop: `5px solid ${theme.titleP}`,
                                //width: "15%",
                                // margin: "0 auto",
                            }}
                        ></hr>
                    </div>
                    <div className="d-flex justify-content-center">
                        <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/6teAERrOF75aXYojWZuPYR?utm_source=generator&theme=0" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Playlist;
