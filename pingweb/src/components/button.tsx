const Button = ({ className, id, text }: { className?: string; id?: string; text: string }) => {

    return (
        <a className={`cta-wrapper ${className ?? ""}`} id={id}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text"> {text}</p>
                <div className="arrow-wrapper">
                    <img src="https://shorturl.ad/FEcbK" alt="pic" />
                </div>
            </div>
        </a>
    );

}

export default Button;