import { useEffect, useState, useId } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [isShowBurgerNavBar, setIsShowBurgerNavBar] = useState(false);
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        function onLoad() {
            const currentTheme = sessionStorage.getItem("theme") ?? "light";

            document.documentElement.setAttribute("data-theme", currentTheme);
            setTheme(currentTheme as Theme);
        }

        onLoad();
    }, []);

    const toggleBurgerNavBar = () => {
        setIsShowBurgerNavBar(!isShowBurgerNavBar);
    }

    const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentTheme = event.target.checked ? "light" : "dark";

        const nextTheme = currentTheme == "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", nextTheme);

        sessionStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
    }

    return (
        <div className="nav-bar">
            <Link className="logo" to="/">Kien Ng.</Link>
            <ul className="nav-bar-sections">
                <li><a href="/#profile">Profile</a></li>
                <li><a href="/#experience">Experience</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#blog">Blog</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><DarkModeSwitch theme={theme} toggleTheme={toggleTheme} /></li>
            </ul>
            <button onClick={toggleBurgerNavBar} className="burger-menu" aria-label="burger-menu">
                <BurgerMenuIcon />
            </button>
            {/* !Assume that toggleBurgerNavBar() here will always be called with isShowBurgerNavBar is true! */}
            <BurgerNavBar
                isOpen={isShowBurgerNavBar}
                closeBurgerNavBar={() => toggleBurgerNavBar()}
                theme={theme}
                toggleTheme={toggleTheme} />
        </div>
    )
}

function BurgerNavBar(
    {
        isOpen,
        closeBurgerNavBar,
        theme,
        toggleTheme
    }: {
        isOpen: boolean,
        closeBurgerNavBar: () => void
        theme: Theme,
        toggleTheme: (event: React.ChangeEvent<HTMLInputElement>) => void
    }) {
    return (
        <div className={`burger-nav-bar ${isOpen ? 'display-mobile' : 'hide-mobile'}`}>
            <ul className="burger-nav-bar-sections">
                <li><a onClick={closeBurgerNavBar} href="/#profile">Profile</a></li>
                <li><a onClick={closeBurgerNavBar} href="/#experience">Experience</a></li>
                <li><a onClick={closeBurgerNavBar} href="/#projects">Projects</a></li>
                <li><a onClick={closeBurgerNavBar} href="/#blog">Blog</a></li>
                <li><a onClick={closeBurgerNavBar} href="/#contact">Contact</a></li>
                <li><DarkModeSwitch theme={theme} toggleTheme={toggleTheme} /></li>
            </ul>
        </div>
    );
}

function BurgerMenuIcon() {
    return (
        <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.666672" width="29.3333" height="2.44444" rx="1.22222" />
            <rect x="0.666672" y="19.5555" width="29.3333" height="2.44444" rx="1.22222" />
            <rect x="9.62962" y="9.77777" width="20.3704" height="2.44444" rx="1.22222" />
        </svg>
    );
}

type Theme = "light" | "dark";

// A control that changes the data-theme attribute
// but is coupled with it's parent
function DarkModeSwitch(
    {
        theme,
        toggleTheme
    }: {
        theme: Theme,
        toggleTheme: (event: React.ChangeEvent<HTMLInputElement>) => void
    }) {
    const id = useId();

    return (
        <div>
            <label className="switch" htmlFor={id}>
                <input type="checkbox" id={id}
                    onChange={toggleTheme} checked={theme == "dark"} />
                <span className="slider"></span>
            </label>
        </div>
    );
}



export default NavBar;
