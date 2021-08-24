import './App.css';

function App() {
    return (
        <form className="Form">
            <div>
                <label>Nome:</label>
                <input type="text" />
            </div>
            <div>
                <label>Sobrenome:</label>
                <input type="text" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" />
            </div>
        </form>
    );
}

export default App;
