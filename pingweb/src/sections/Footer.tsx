import { socialImage } from "../constants"


const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container items-center flex flex-col">
                {/* <div className="flex flex-col justify-center">
                    <a href="/">Test</a>
                </div> */}
                <div className="socials ">
                    {socialImage.map((img) => (
                        <a className="icon" target={img.target} href={img.url} key={img.url}>
                            <img src={img.imgPath} />
                        </a>
                    ))}
                </div>

            </div>
            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end">
                    © {new Date().getFullYear()} Ping7731. All rights reserved.
                </p>
            </div>
        </footer>
    )

}
export default Footer