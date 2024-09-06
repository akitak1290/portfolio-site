import { useState } from "react";
import { Link } from "react-router-dom";

function BurgerMenuIcon() {
    return (
        <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.666672" width="29.3333" height="2.44444" rx="1.22222" fill="black" />
            <rect x="0.666672" y="19.5555" width="29.3333" height="2.44444" rx="1.22222" fill="black" />
            <rect x="9.62962" y="9.77777" width="20.3704" height="2.44444" rx="1.22222" fill="black" />
        </svg>
    );
}

function BurgerNavBar({ isOpen, closeBurgerNavBar }: { isOpen: boolean, closeBurgerNavBar: () => void }) {
    return (
        <div className={`burger-nav-bar ${isOpen ? 'display' : 'hide'}`}>
            <li className="burger-nav-bar-sections">
                <ul><Link onClick={closeBurgerNavBar} to="/#profile">Profile</Link></ul>
                <ul><Link onClick={closeBurgerNavBar} to="/#experience">Experience</Link></ul>
                <ul><Link onClick={closeBurgerNavBar} to="/#projects">Projects</Link></ul>
                <ul><Link onClick={closeBurgerNavBar} to="/#blog">Blog</Link></ul>
                <ul><Link onClick={closeBurgerNavBar} to="/#contact">Contact</Link></ul>
            </li>
        </div>
    );
}

function NavBar() {
    const [isShowBurgerNavBar, setIsShowBurgerNavBar] = useState(false);

    const toggleBurgerNavBar = () => {
        setIsShowBurgerNavBar(!isShowBurgerNavBar);
    }

    return (
        <div className="nav-bar">
            <Link className="logo" to="/">Kien Ng.</Link>
            <li className="nav-bar-sections">
                <ul><Link to="/#profile">Profile</Link></ul>
                <ul><Link to="/#experience">Experience</Link></ul>
                <ul><Link to="/#projects">Projects</Link></ul>
                <ul><Link to="/#blog">Blog</Link></ul>
                <ul><Link to="/#contact">Contact</Link></ul>
            </li>
            <button onClick={toggleBurgerNavBar} className="burger-menu">
                <BurgerMenuIcon />
            </button>
            {/* !Assume that toggleBurgerNavBar() here will always be called with isShowBurgerNavBar is true! */}
            <BurgerNavBar isOpen={isShowBurgerNavBar} closeBurgerNavBar={() => toggleBurgerNavBar()} />
        </div>
    )
}

export default NavBar;
