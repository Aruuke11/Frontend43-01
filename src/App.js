import './App.css';

function Title() {
    return <h2> HOME WORK 1</h2>;
}

function Text() {
    return <p> Aruuke 43-01</p>;
}

function Header() {
    return (
            <Title/>
    );
}

function Content() {
    return (
        <>
            <Title/>
            <Text/>
        </>
    );
}

function Footer() {
    return <Title/>;
}

function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;

