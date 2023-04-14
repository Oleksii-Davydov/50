import React, { useState } from 'react';
import './header.css';
import '../menu/Menu.css';

export default function QuizHeader() {
  const [menuActive, setMenuActive] = useState(false);

  return (
            <header className="header">
                <nav className="nav_menu">
                    <div className="burger_btn" onClick={() => setMenuActive(!menuActive)}>
                        <span/>
                    </div>
                </nav>
                <div className="header_logo">COGNITIVE QUIZ</div>
                <div>
                    <button className="button">CREATE NEW QUIZ</button>
                </div>
            </header>

  );
}
