import { useRef, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Greeting from "../../containers/greeting/Greeting";
import Experience from "../../containers/experience/Experience";
import Skills from "../../containers/skills/Skill";
import Playlist from "../../containers/playlist/Playlist";
import ArrowButton from "../../components/arrow/ArrowButton";
import LeftPanel from "../../components/panel/LeftPanel";
import { useTheme } from "../../theme";
import Loading from "../../components/loading/Loading";

function HomeComponent() {
    const { theme } = useTheme();
    const resultRef = useRef(null);
    const resultRef2 = useRef(null);
    const resultRef3 = useRef(null);
    const resultRef4 = useRef(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulasi loading, bisa diganti dengan async data fetching
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // 2 detik loading
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <Loading />;

    return (
      <div style={{ backgroundColor: theme.bgBody }}>
        <Header
          resultRef={resultRef}
          resultRef2={resultRef2}
          resultRef3={resultRef3}
        />
        <LeftPanel theme={theme} />
        {/* <div className="background-image-div"> */}
        <Greeting theme={theme} />
        <ArrowButton theme={theme} resultRef4={resultRef4} />
        {/* </div> */}
        <Experience ref={resultRef2} theme={theme} />
        <Skills ref={resultRef3} theme={theme} />
        <Playlist theme={theme} />
        <Footer ref={resultRef4} theme={theme} />
      </div>
    );
}

export default HomeComponent;
