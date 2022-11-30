import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi there!</h2>
                    <h1 className="i-name">I'm Ela Garcia</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Information Technology</div>
                            <div className="i-title-item">Leader</div>
                        </div>
                    </div>
                    <p className="i-dec">
                        I'm currently an IT Manager who wants to grow in Technology.
                        This year, the challenge was to become a developer, and luckily, I will be achieving that goal before the year ends.
                        I want to merge my technical talent, developement, and the printer my dad manages.
                        Web development is the next thing!
                    </p>
                </div>            
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt=""className="i-img" />
            </div>
        </div>
    )
}

export default Intro