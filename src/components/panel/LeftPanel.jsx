function LeftPanel({ theme }) {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100px',
                paddingTop: "15%",
                display: 'flex',
                // justifyContent: 'space-between',
                alignItems: 'center',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                fontSize: '0.75rem',
                color: '#333',
                zIndex: 1000,
            }}
        >

            <div id="line" style={{ marginBottom: "40px", transform: "rotate(180deg)", letterSpacing: "3px", color: theme.headline }} className="header-text">
                PORTOFOLIO
            </div>
            <div style={{ height: '100px', borderLeft: '1px solid', transform: "rotate(180deg)", color: theme.headline }}></div>
            <div id="copyright" style={{ position: "absolute", top: "auto", bottom: "3vh", transform: "rotate(180deg)", color: theme.headline }} className="header-text">
                © 2025 Renaldy Cahya
            </div>
        </div>
    );
}

export default LeftPanel;
