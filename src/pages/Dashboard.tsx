import { useEffect } from "react";
import PlaceHolder from "../components/PlaceHolder";
import { useLogin } from "../context/useLogin";
import "./dashboard.css";

function DashBoard() {
    const { state, dispatch } = useLogin()
    localStorage.setItem("login", JSON.stringify(state))
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    useEffect(() => {
        setInterval(handleLogout, 2 * 60 * 1000)
    }, [])
    return (
        <main className="dash-wrapper">
            <div className="dash-header">
                <img src="./assets/money.svg" alt="Money app icon" />
                <button onClick={handleLogout} className="logout">Logout</button>
            </div>
            <div className="company">
                <section className="dashcol-one">
                    <div className="com-name">
                        <div className="logo">CN</div>
                        <p>COMPANY NAME</p>
                    </div>
                    <div className="name">
                        <p className="name-title">CEO</p>
                        <p className="name-txt">CEONAME</p>
                    </div>
                    <div className="name">
                        <p className="name-title">CTO</p>
                        <p className="name-txt">CTO NAME</p>
                    </div>

                </section>
                <section className="dashclo-two">
                    <div>
                        <div className="coming-soon">
                            <img src="./assets/timer.svg" alt="clock icon" /> <span>Coming soon</span>
                        </div>

                        <div className="placeholders">
                            <PlaceHolder emoji="🎉" />
                            <PlaceHolder emoji="✨" />
                            <PlaceHolder emoji="💥" />
                        </div>
                        <div className="notification">
                            <p className="noti-title"> 📫Notifications</p>
                            <p className="noti-text">Receive notifcations about your rider performance, efficiency reviews and a lot more</p>

                        </div>

                    </div>
                </section>
            </div>

        </main>);
}

export default DashBoard;