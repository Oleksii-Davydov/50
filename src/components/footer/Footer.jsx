import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
        <footer className="footer">
            <div className="footer_box_left_first">
                <p className="address_footer">Kyiv, Mechnikova str., 14/1</p>
                <a className="footer_number_link" href="tel:0800211927">0800 211 927</a>
                <a className="email" href="my-app/src/pages">contact@forstudy.space</a>
            </div>
            <div className="footer_dox_right">
                <p className="conpany">© 2021 HLEGAL Law company, LLC</p>
            </div>
        </footer>
  );
}
