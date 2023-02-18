import { useEffect, useState } from "react";
import PlaceHolder from "../components/PlaceHolder";
import { useLogin } from "../context/useLogin";
import "./dashboard.css";

const baseUrl = "https://spacex-production.up.railway.app/"
const query = `
    {
        company {
            ceo
            cto
            name
        }
    }
`;

type CompanyProps = {
    company: {
        ceo: string
        cto: string
        name: string
    }
}
function DashBoard() {
    const { dispatch } = useLogin()
    const [company, setCompany] = useState<null | CompanyProps>(null)

    useEffect(() => {
        const fetchCompany = async () => {
            const res = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ query })
            })
            const data = await res.json()
            setCompany(data.data)
        }
        fetchCompany()

    }, [baseUrl, query])
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
                        <div className="logo">{company?.company?.name.slice(0, 2).toUpperCase()}</div>
                        <p>{company?.company?.name.toUpperCase()}</p>
                    </div>
                    <div className="name">
                        <p className="name-title">CEO</p>
                        <p className="name-txt">{company?.company?.ceo}</p>

                    </div>
                    <div className="name">
                        <p className="name-title">CTO</p>
                        <p className="name-txt">{company?.company?.cto}</p>
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

