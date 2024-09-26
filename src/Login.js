import React, { useState } from 'react';
import './Login.css'; // We'll create the CSS file next

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorMessage('Please fill in all fields.');
    } else {
      setErrorMessage('');
      // Add your login logic here (API call, authentication, etc.)
      console.log('Logged in with:', { email, password });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Otomat Dünyasına Hoş Geldiniz</h2>

        <label>E-Postanız:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Posta Adresinizi giriniz"
        />

        <label>Şifreniz:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifrenizi giriniz"
        />
        Yeni misiniz?<a href='#'>Kayıt Olun</a>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="login-btn">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
