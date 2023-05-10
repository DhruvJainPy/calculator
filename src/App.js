import "./App.css";
import Button from "./Components/Button";
import Result from "./Components/Result";
import ValueProvider from "./Context/ValueProvider";

function App() {
  const buttons = [
    { id: 1, title: "AC" },
    { id: 2, title: "+/-" },
    { id: 3, title: "%" },
    { id: 4, title: "/" },
    { id: 5, title: "7" },
    { id: 6, title: "8" },
    { id: 7, title: "9" },
    { id: 8, title: "X" },
    { id: 9, title: "4" },
    { id: 10, title: "5" },
    { id: 11, title: "6" },
    { id: 12, title: "-" },
    { id: 13, title: "1" },
    { id: 14, title: "2" },
    { id: 15, title: "3" },
    { id: 16, title: "+" },
    { id: 17, title: "0" },
    { id: 18, title: "." },
    { id: 20, title: "=" },
  ];
  return (
    <div className="container-fluid">
      <ValueProvider>
        <Result />
        <div className="row">
          {buttons.map((button) => {
            return <Button key={button.id} button={button} />;
          })}
        </div>
      </ValueProvider>
    </div>
  );
}

export default App;
