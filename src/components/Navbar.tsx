import {useState} from "react";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const copyEmail = () => {
        const emailSpan = document.getElementById("myEmail");
        if (emailSpan) {
            // const email = emailSpan.innerText;
        }
    };
    return (
        <nav className="navbar sticky-top" style={{backgroundColor: "black"}}>
            <div className="container-fluid">
                <div id="self" className="d-flex align-items-center justify-content-start">
                    <a className="navbar-brand" href="/">
                        <img src="dist/me.jpeg" alt="MyImage" className="d-inline-block align-text-center"/>
                        <span className="ms-4">Dhruv Barad</span>
                    </a>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active link-light" aria-current="page" href="/">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/contact">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/education">
                            Education
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/projects">
                            Projects
                        </a>
                    </li>
                </ul>
                <div id="contact" className="d-flex align-items-center justify-content-end">
                    <div className={`email-container position-relative ${isHovered ? 'show-info' : ''}`}
                         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a className="ms-4 d-flex align-items-center" onClick={copyEmail}>
                            <span className="email-info link-light me-2" style={{whiteSpace: 'nowrap'}}>Click to copy my email</span>
                            <span id="myEmail" className="d-none">dbarad302@gmail.com</span>
                            <img src="/dist/email.png" alt="Email" style={{width: "35px", height: "35px"}}/>
                        </a>
                    </div>
                    <a className="ms-4" href='https://linkedin.com/in/dhruv-barad/' target='_blank'>
                        <img src="/dist/linkedin.png" alt="Linkedin" style={{width: "35px", height: "35px"}}/>
                    </a>
                    <a className="ms-4 me-4" href='https://github.com/dhruvbarad' target='_blank'>
                        <img src="/dist/github.png" alt="Github" style={{width: "35px", height: "35px"}}/>
                    </a>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;