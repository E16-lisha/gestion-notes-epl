import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simuler une connexion réussie avec des valeurs factices
        if (identifier === "etudiant" && password === "1234" && cardNumber === "123456") {
            navigate('/accueil'); // Rediriger vers la page d'accueil
        } else {
            alert("Identifiant, mot de passe ou numéro de carte incorrect.");
        }
    };

    return (
        <div className="login-container">
            <h2>Plate forme de Gestion des notes de l’EPL</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Numéro de carte</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Identifiant</label>
                    <input
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Soumettre</button>
            </form>
            <p>NB : Cette plateforme est réservée aux étudiants inscrits à l’Ecole Polytechnique de Lomé-UL.</p>
        </div>
    );
};

export default Login;