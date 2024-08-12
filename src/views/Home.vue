<template>
    <div class="home">
      <header class="hero">
        <h1>Bem-vindo</h1>
        <p>Explore a popularidade dos nomes no Brasil por década.</p>
        <p>Ou <br/> Visualize os grafícos gerados através da API</p>
      </header>
  
      <section class="features">
        <div class="feature">
          <h2>Análise Interativa</h2>
          <p>Visualize os dados com gráficos interativos e filtre por década para obter insights detalhados sobre a popularidade dos nomes.</p>
        </div>
        <div class="feature">
          <h2>Dados Confiáveis</h2>
          <p>Os dados são obtidos diretamente das fontes oficiais, garantindo precisão e atualidade.</p>
        </div>
        <div class="feature">
          <h2>Fácil Navegação</h2>
          <p>Interface amigável que facilita a navegação e a visualização dos dados que você procura.</p>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  .home {
    font-family: Arial, sans-serif;
    text-align: center;
    color: #333;
  }
  
  .hero {
    background-color: #32b46e;
    color: white;
    padding: 2rem;
    border-radius: 8px;
    margin: 2rem;
  }
  
  .hero h1 {
    margin: 0;
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.25rem;
    margin: 1rem 0;
  }
  
  .button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #28a65c;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #1e8e47;
  }
  
  .features {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem;
  }
  
  .feature {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1rem;
    flex: 1;
    max-width: 300px;
  }
  
  .feature h2 {
    margin-top: 0;
    color: #32b46e;
  }
  
  .feature p {
    font-size: 1rem;
  }
  </style>
  