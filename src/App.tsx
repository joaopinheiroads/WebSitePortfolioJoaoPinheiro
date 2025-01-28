import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Mail, FaPhone as Phone } from 'react-icons/fa';
import certificado1 from '../dist/assets/certificado1.png';
import certificado2 from '../dist/assets/certificado2.png';
import certificado3 from '../dist/assets/certificado3.png';
import certificado4 from '../dist/assets/certificado4.png';
import certificado5 from '../dist/assets/certificado5.png';
import certificado6 from '../dist/assets/certificado6.png';
import certificado7 from '../dist/assets/certificado7.png';
import certificado8 from '../dist/assets/certificado8.png';
import imagem1 from '../dist/assets/imagem1.jpg';
import imagem2 from '../dist/assets/imagem2.png';
import imagem3 from '../dist/assets/imagem3.png';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCertificates, setShowCertificates] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);
  const toggleCertificates = () => setShowCertificates(!showCertificates);

  const certificates = [
    { id: 1, src: certificado1, title: "Segurança da Informação", description: "Desenvolvimento seguro, Pentest, Linux, KaliLinux, OWASP, LGPD, Firewall, Redes, intranet, entre outros" },
    { id: 2, src: certificado2, title: "Front-End", description: "JavaScript, Desenvolvimento Web, HTML, CSS, BootStrap, UI e UX" },
    { id: 3, src: certificado3, title: "Programação orientada a objeto", description: "Linguagem de programação Java, algoritmos e lógica de programação" },
    { id: 4, src: certificado4, title: "Programmer", description: "Java, Estruturas de Dados e Design de Software" },
    { id: 5, src: certificado5, title: "Back-End Developer", description: "Desenvolvimento de Aplicações de Banco de Dados, Modelagem de dados, SQL, PL/SQL, PostgreSQL, API, SpringBoot e React" },
    { id: 6, src: certificado6, title: "Carreira em gestão", description: "Excel, Técnicas de gerenciamento de projetos, Metodologias ágeis, SCRUM e Kanban" },
    { id: 7, src: certificado7, title: "Start em programação.", description: "JavaScript, HTML e CSS" },
    { id: 8, src: certificado8, title: "IA", description: "Nocode, Prompts e ferramentas essênciais" },
  ];

  return (
    <div className="min-h-screen bg-[#1E0B36] text-white">
      {/* Hero Section */}
      <section className={`min-h-screen flex flex-col items-center justify-center text-center p-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src={imagem1}
          alt="Profile"
          className="w-44 h-44 rounded-full mb-8 border-4 border-purple-500 object-cover hover:animate-expand"
        />
        <h1 className="text-5xl font-bold mb-2 hover:animate-expand">João Lucas Gomes Pinheiro</h1>
        <h1 className="text-3xl font-bold mb-8 text-white opacity-75 hover:animate-expand">Developer</h1>
        <p className="text-xl text-gray-300 mb-2 hover:animate-expand">Full Stack Developer | CyberSecurity</p>
        <div className="flex gap-10">
          <a href="https://github.com/joaopinheiroads" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/joaopinheiroads/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:joaopinheiro.ads@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://wa.me/5543984931486" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Phone size={24} />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-14">Projetos em Destaque</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#2A1B45] rounded-lg overflow-hidden">
            <img
              src={imagem2}
              alt="PetLife"
              className="w-full h-64 sm:h-72 md:h-80 object-cover object-center hover:animate-expand"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Projeto PetLife</h3>
              <p className="text-gray-300 mb-4">Website desenvolvido a fins acadêmicos.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">CSS</span>
              </div>
              <a href="https://joaopinheiroads.github.io/ProjetoSitePetLife/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver Projeto <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          <div className="bg-[#2A1B45] rounded-lg overflow-hidden">
            <img
              src={imagem3}
              alt="Portfolio"
              className="w-full h-50 sm:h-72 md:h-80 object-cover object-center hover:animate-expand"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Site exemplo de portfolio</h3>
              <p className="text-gray-300 mb-4">Website desenvolvido como exemplo de portfolio para desenvolvedores.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">CSS</span>
              </div>
              <a href="https://joaopinheiroads.github.io/ProjetoExemploPortfolio/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Ver Projeto <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#2A1B45]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800"
              alt="Developer"
              className="rounded-lg"
            />
            <div>
              <p className="text-lg mb-8">
                Sou um Desenvolvedor Full Stack e certificado em Segurança da Informação com conhecimento em
                Desenvolvimento Seguro, Pentest, KaliLinux, Linux, OWASP, Firewall, LGPD, Redes, intranet entre outros.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1E0B36] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <p>ReactJS, TypeScript, CSS e Bootstrap</p>
                </div>
                <div className="bg-[#1E0B36] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <p>Java e JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 bg-[#2A1B45]">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Certificados</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {certificates.slice(0, showCertificates ? certificates.length : 4).map((cert) => (
            <div
              key={cert.id}
              className="bg-[#1E0B36] p-2 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openImage(cert.src)}
            >
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-100 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-4 text-white">{cert.title}</h3>
              <p className="text-gray-300">{cert.description}</p>
              <p className="text-purple-400 mt-4">Ver Certificado</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={toggleCertificates}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
          >
            {showCertificates ? "Ver Menos" : "Ver Certificados"}
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="max-w-md mx-auto flex gap-4 justify-center">
          <a
            href="mailto:joaopinheiro.ads@gmail.com"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center"
          >
            <Mail className="mr-2" /> Envie um email
          </a>
          <a
            href="https://wa.me/5543984931486"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center"
          >
            <Phone className="mr-2" /> WhatsApp
          </a>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Certificado Ampliado"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 bg-gray-800 text-white px-4 py-2 rounded-full"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 João Lucas Gomes Pinheiro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
