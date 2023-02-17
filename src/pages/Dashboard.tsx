import PlaceHolder from "../components/PlaceHolder";

function DashBoard() {
    return (<main>
        <section className="dashcol-one">
            <div className="com-name">
                <div className="logo">CN</div>
                <p>COMPANY NAME</p></div>
            <div className="name">
                <p>CEO</p>
                <p>CEONAME</p>
            </div>
            <div>
                <p>CTO</p>
                <p>CTO NAME</p>
            </div>

        </section>
        <section className="dashclo-two">
            <div className="comming-soon">
                <img src="./assets/timer.svg" alt="" /> <span>Coming soon</span>
            </div>

            <div className="placeholders">
                <PlaceHolder emoji="🎉" />
                <PlaceHolder emoji="✨" />
                <PlaceHolder emoji="💥" />
            </div>
            <div>
                <p> 📫Notifications</p>
                <p>Receive notifcations about your rider performance, efficiency reviews and a lot more</p>

            </div>
        </section>
    </main>);
}

export default DashBoard;