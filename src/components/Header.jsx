import React, {useState} from "react";

export default function QuizHeader() {

    let [showModal, setShowModal] = useState(false)

const hadleClick = () => {
    setShowModal(!showModal);
}
    return (
        <header className="header">
            <nav className="nav_menu">
                <div className="burger_btn">

                    <span/>
                </div>
            </nav>
            <div className="header_logo" >COGNITIVE QUIZ</div>
            <div>
               <button className="button">CREATE NEW QUIZ</button>
            </div>
        </header>

    )


}
