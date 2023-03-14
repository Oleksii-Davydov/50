import logo from './logo.svg';
import './App.css';
import QuizList from "./pages/QuizList";
import QuizHeader from "./pages/QuizHeader";
import ClippedDrawer from "./pages/QuizDrower";
import QuizFooter from "./pages/QuizFooter";
import QuizMenu from "./pages/QuizMenu";


function App() {

    return (


        <div className="App">
           <ClippedDrawer/>
            <QuizFooter/>
           {/* <QuizMenu/>*/}
        </div>
    );
}

export default App;

// ????????????????????????????????7