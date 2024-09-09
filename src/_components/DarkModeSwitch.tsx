
function DarkModeSwitch() {

    const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextTheme = event.target.checked ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", nextTheme);
    }

    return (
        <div>
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme}/>
                    <span className="slider"></span>
            </label>
        </div>
    );
}

export default DarkModeSwitch;