import React from 'react';
import './Accueil.css'; // Importe le fichier CSS
import logo from './logo.png'; // Importe l'image (remplace 'logo.png' par le chemin de ton image)

const Accueil = () => {
    return (
        <div className="accueil-container">
            <header className="header">
                <div className="logo-container">
                    <img src={logo} alt="Logo EPL" className="logo" />
                    <h1>Plate forme de Gestion des notes de l’EPL</h1>
                </div>
                <nav className="nav">
                    <div className="nav-item"><a href="/">Accueil</a></div>
                    <div className="nav-item"><a href="/actualites">Actualités</a></div>
                    <div className="nav-item"><a href="/reglages">Réglages</a></div>
                    <div className="nav-item"><a href="/mon-compte">Mon compte</a></div>
                </nav>
            </header>

            <main className="main-content">
                <section className="section">
                    <h2>Ecole Polytechnique de Lomé - UL</h2>
                    <div className="content">
                        <h3>UEs et Infos</h3>
                        <p>Contenu des UEs et informations...</p>
                    </div>
                </section>

                <section className="section">
                    <div className="content">
                        <h3>Notes</h3>
                        <p>Contenu des notes...</p>
                    </div>
                </section>

                <section className="section">
                    <div className="content">
                        <h3>Relevés de Notes</h3>
                        <p>Contenu des relevés de notes...</p>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>Ecole Polytechnique de Lomé – UL | Plate forme de gestion des notes Copyright @ 2025</p>
            </footer>
        </div>
    );
};

export default Accueil;