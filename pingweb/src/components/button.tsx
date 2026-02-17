const Button = ({ className, id, text }: { className?: string; id?: string; text: string }) => {

    return (
        <a className={`cta-wrapper ${className ?? ""}`} id={id}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text"> {text}</p>
                <div className="arrow-wrapper">
                    <img src="https://cdn.discordapp.com/attachments/1015398144135139398/1219517700657643611/pngV3_PingWatermark.png?ex=698f5f1d&is=698e0d9d&hm=70f0d0e71596ceae5065be2a8e4786f70aec4fe478ad981c4cc88c01c6140722&" alt="pic" />
                </div>
            </div>
        </a>
    );

}

export default Button;