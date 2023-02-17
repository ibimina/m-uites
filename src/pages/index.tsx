import { useState } from "react";
import Feature from "../components/Feature";
const features = [
    {
        id: "earnings",
        image: "./assets/Frame 8758.svg",
        alt: "earnings",
        feature: "Monitor your Earning",
        description: "Easily see how much your busineses are earning on each transaction and watch your earnings rise. ",
        ticked: false
    },
    {
        id: "businesses",
        image: "./assets/Frame 8757.svg",
        alt: "businesses",
        feature: "Manage your Businesses",
        description: "Easily see how much your businesses are earning on each transaction and watch your earnings rise. ",
        ticked: false
    },
    {
        id: "delegate",
        image: "./assets/Frame 8755.svg",
        alt: "delegate",
        feature: "Delegate to staff",
        description: "Easily see how much your businesses are earning on each transaction and watch your earnings rise. ",
        ticked: false
    }
]
function Home() {
    const [featureslog, setFeatureslog] = useState(features);
    const showPassword = (e: React.MouseEvent) => {
        let passInput =e.currentTarget?.previousElementSibling as HTMLInputElement;
        if(passInput.type === "password"){
            passInput.type = "text";
        }else{
            passInput.type = "password";
        }
    }
    const handleTick = (index: string) => {
        setFeatureslog(featureslog.map((feature) => {
            if (feature.id === index) {
                return { ...feature, ticked: !feature.ticked }
            }
            return feature;
        }))
    }
    
    const handleLoginForTwoMinutes = (e:React.FormEvent) => {
    console.log(e)
    }
    return (
        <main className="home">
            <section className="col-one">
                <div className="ft-wrap">
                    <img src="./assets/money.svg" alt="Money app icon" />
                    <div className="title-wrap">
                        <h1 className="title">Hi there, see what's new</h1>
                        <p className="sub-title">
                            Here’s how Foodcourt helps you manage your daily operations and ensure
                            your riders are efficient
                        </p>
                    </div>

                    {featureslog.map((feature, index) => (<Feature key={index} {...feature} click={handleTick} />))
                    }

                </div>

            </section>
            <section className="col-two">
                <div className="login">
                    <div className="logtext">
                        <p>Login to your dashboard</p>
                        <p>provide details to login to your account</p>
                    </div>
                    <form onSubmit={handleLoginForTwoMinutes}>
                        <label>
                            <span>Email</span>
                            <input type="email" name="email" className="input-box" required/>
                        </label>
                        <label>
                            <span>Password</span>
                            <div className="pass-con">
                                <input type="password" name="password" className="input-box pass" required/>
                                <img src="./assets/eye.svg" alt="" className="eye" onClick={showPassword} />
                            </div>
                        </label>
                        <input type="submit" value="Login" className="submit" />
                    </form>
                </div>

            </section>
        </main>
    );
}

export default Home;
