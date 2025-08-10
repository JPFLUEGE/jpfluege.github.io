import React from 'react';
import "./Impressum.css";

class Impressum extends React.Component {

    render() {
        return (<div className="container-impressum">
            <h3>Impressum</h3>

            <h4>Angaben gemäß § 5 TMG</h4>
            <p>Julian Pflüger<br />
                Am Sportplatz 23<br />
                96487 Dörfles-Esbach</p>

            <h4>Kontakt</h4>
            <p>Telefon: +4915233136064<br />
                E-Mail: pflueger.julian[at]gmail.com</p>

            <p>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer">eRecht24</a></p>



            <h3 className="legal">Legal notice</h3>

            <h4>Information according to § 5 TMG</h4>
            <p>Julian Pflüger<br />
                Am Sportplatz 23<br />
                96487 Dörfles-Esbach</p>

            <h4>Contact</h4>
            <p>Phone: +4915233136064<br />
                E-Mail: pflueger.julian[at]gmail.com</p>

            <p>Source: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer">eRecht24</a></p>
        </div>
        );
    }
}

export default Impressum;