import { useState } from "react";
// counter
function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <>
      <div style={{
        background: theme === "light" ? "#ffff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px"
      }}>
        <p>Current Theme: {theme}</p>

        <button onClick={toggleTheme}>
          Toggle Theme
        </button>

      </div>

    </>
  )

}
// conditionl rendering

export default App


// is it possible to change value in prop...no..prop immutable we cant change the value