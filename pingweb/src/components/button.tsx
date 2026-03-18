import icon from "../images/icon.png"

const Button = ({ className, id, text }: { className?: string; id?: string; text: string }) => {

    return (
        <a
            onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('counter')
                if (target && id) {
                    const offset = window.innerHeight * 0.15;

                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' })
                }
            }}
            className={`cta-wrapper ${className ?? ""}`} id={id}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text"> {text}</p>
                <div className="arrow-wrapper">
                    <img src={icon} alt="pic" />
                </div>
            </div>
        </a>
    );

}

export default Button;