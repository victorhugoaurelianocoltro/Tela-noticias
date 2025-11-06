import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: '/blood_img 2.png', alt: 'Doação de Sangue' },
    { image: '/bloodNews 2.png', alt: 'Notícias sobre Sangue' },
    { image: '/bloodScreen 1.png', alt: 'Banco de Sangue', text: '"Banco de sangue registra movimentação de bolsas para atender hospitais".' },
    { image: '/news 2.png', alt: 'Últimas Notícias' },
    { image: '/Captura de Tela 2025-09-09 às 14.49.23 1.png', alt: 'Campanha de Doação' }
  ];

  const recommendedNews = [
    {
      id: 1,
      category: 'Campanha',
      title: 'Junho Vermelho é mês de incentivo à doação de sangue.',
      source: 'sindsaesc.org.br',
      image: '/blood_img 2.png'
    },
    {
      id: 2,
      category: 'Campanha',
      title: 'Ministério da Saúde lança campanha para incentivar doação regular de sangue.',
      source: 'www.gov.br',
      image: '/bloodNews 2.png'
    },
    {
      id: 3,
      category: 'Curiosidade',
      title: 'Mpox deixa de ser emergência de saúde internacional, anuncia OMS.',
      source: 'g1.globo.com',
      image: '/news 2.png'
    }
  ];

  useEffect(() => {
    const maxSlide = slides.length - 3; // 3 slides visíveis por vez
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
              <path d="M25 0C25 0 5 15 5 30C5 42 13 55 25 60C37 55 45 42 45 30C45 15 25 0 25 0Z" fill="white"/>
              <ellipse cx="25" cy="35" rx="10" ry="12" fill="#B91C1C"/>
            </svg>
          </div>
          <h1 className="title">Notícias</h1>
          <nav className="nav">
            <button className="nav-button">Home</button>
            <button className="nav-button active">Notícias</button>
            <button className="nav-button">Profile</button>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className={`slide ${index === 1 ? 'slide-bordered' : ''}`}>
                  <img src={slide.image} alt={slide.alt} />
                  {slide.text && (
                    <div className="slide-text">
                      <p>{slide.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <section className="recommended">
          <h2 className="section-title">Recomendados</h2>
          <div className="news-grid">
            {recommendedNews.map((news) => (
              <div key={news.id} className="news-card">
                <img src={news.image} alt={news.title} className="news-image" />
                <div className="news-content">
                  <span className="news-category">{news.category}</span>
                  <h3 className="news-title">{news.title}</h3>
                  <span className="news-source">{news.source}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="pagination">
          <button className="page-button active">1</button>
          <button className="page-button">2</button>
          <button className="page-button">3</button>
          <button className="page-button">4</button>
          <button className="page-button">5</button>
          <button className="page-button">6</button>
          <button className="page-button">...</button>
          <button className="page-button next">Próximo</button>
        </footer>
      </main>
    </div>
  )
}

export default App
