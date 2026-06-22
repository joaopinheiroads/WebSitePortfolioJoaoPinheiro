import { useState, useEffect } from 'react';
import './index.css';
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaEnvelope as Mail,
  FaPhone as Phone,
} from 'react-icons/fa';
import CredlyBadges from './CredlyBadges';

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  cta: string;
  image?: string;
  emoji?: string;
  gradient?: string;
};

type Certificate = {
  id: string;
  src: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: 'Weather Widgets — TVPlayer/MapMaker',
    description:
      'Telas de previsão do tempo para mídia indoor / digital signage exibidas em TVs. Renderização 100% via query string (cidade, clima, idioma, unidade), dois modelos visuais e variações de 1 e 4 dias em HD e Full-HD.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Digital Signage'],
    href: 'https://github.com/joaopinheiroads/MyProjectsTVPlayer',
    cta: 'Ver código',
    image: '/img/weather.png',
  },
  {
    title: 'Cardápio API — TVPlayer/MapMaker',
    description:
      'Back-end REST de cardápio digital multi-tenant em ASP.NET Core. Autenticação JWT com refresh token, EF Core + SQL Server, upload de imagens no Azure Blob Storage, padrão Repository + Unit of Work e soft delete com auditoria.',
    tags: ['C#', '.NET 5', 'ASP.NET Core', 'EF Core', 'SQL Server', 'JWT', 'Azure'],
    href: 'https://github.com/joaopinheiroads/MyProjectsTVPlayer',
    cta: 'Ver código',
    image: '/img/cardapio-api.png',
  },
  {
    title: 'Site Institucional Escolha.ai',
    description:
      'Site institucional da plataforma Escolha.ai (cardápio digital): landing page responsiva apresentando a ferramenta, seus modelos de cardápio e chamadas de ação para conversão.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Landing Page'],
    href: 'https://escolha.ai',
    cta: 'Ver projeto',
    image: '/img/cardapio.png',
  },
  {
    title: 'Projeto PetLife',
    description: 'Website desenvolvido para fins acadêmicos.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    href: 'https://joaopinheiroads.github.io/ProjetoSitePetLife/',
    cta: 'Ver projeto',
    image: '/img/petlife.png',
  },
];

const skills: { title: string; items: string }[] = [
  { title: 'Frontend', items: 'React, TypeScript, JavaScript, HTML, CSS, Tailwind, Bootstrap' },
  { title: 'Backend', items: 'C#, .NET / ASP.NET Core, Java, Node.js, EF Core, REST APIs' },
  { title: 'Banco de Dados', items: 'SQL Server, PostgreSQL, PL/SQL' },
  { title: 'Cloud & DevOps', items: 'Azure (Blob Storage), Docker, Git / GitLab' },
  { title: 'Segurança & Redes', items: 'Pentest, OWASP, Linux / Kali, Firewall, LGPD, Cisco CCNA' },
  { title: 'Gestão & Métodos', items: 'Scrum, Kanban, Metodologias Ágeis' },
];

const certificates: Certificate[] = [
  { id: 'seg', src: '/certs/seguranca-informacao.png', title: 'Segurança da Informação', description: 'Desenvolvimento seguro, Pentest, Linux/Kali, OWASP, LGPD, Firewall, Redes e protocolos de segurança.' },
  { id: 'fullstack', src: '/certs/desc-fullstack.png', title: 'Full Stack Developer', description: 'JavaScript, Node.js, Next.js, Docker, GitLab, Express, Banco de Dados, API, Dart e Flutter.' },
  { id: 'backend', src: '/certs/desc-backend.png', title: 'Back-End Developer', description: 'Banco de dados, modelagem, SQL, PL/SQL, PostgreSQL, API, Spring Boot e React.' },
  { id: 'frontend', src: '/certs/desc-frontend.png', title: 'Front-End Developer', description: 'Desenvolvimento web avançado, JavaScript, UI/UX e frameworks de interface.' },
  { id: 'devops', src: '/certs/desc-devops.png', title: 'DevOps', description: 'Cultura DevOps, automação, contêineres, CI/CD e infraestrutura.' },
  { id: 'fullcycle', src: '/certs/desc-fullcycle.png', title: 'Full Cycle Developer', description: 'Desenvolvimento ponta a ponta de aplicações e arquitetura de software.' },
  { id: 'poo', src: '/certs/desc-poo.png', title: 'Programação Orientada a Objetos', description: 'Java, algoritmos, estrutura de dados e design de software.' },
  { id: 'basicfront', src: '/certs/desc-basic-frontend.png', title: 'Basic Front-End', description: 'Desenvolvimento web, JavaScript, HTML, CSS, Bootstrap, UI e UX.' },
  { id: 'programmer', src: '/certs/desc-programmer.png', title: 'Programmer', description: 'Java, lógica de programação e empreendedorismo.' },
  { id: 'advtester', src: '/certs/desc-advancedtester.png', title: 'Advanced Tester', description: 'Testes de software, qualidade e validação de aplicações.' },
  { id: 'smartmanager', src: '/certs/desc-smartmanager.png', title: 'Smart Manager', description: 'Gestão de projetos, Excel, metodologias ágeis, Scrum e Kanban.' },
  { id: 'ia', src: '/certs/ia.png', title: 'Inteligência Artificial', description: 'No-code, engenharia de prompts e ferramentas essenciais de IA.' },
  { id: 'start', src: '/certs/start-programacao.png', title: 'Start em Programação', description: 'Fundamentos de JavaScript, HTML e CSS.' },
  { id: 'gestao', src: '/certs/gestao.png', title: 'Carreira em Gestão', description: 'Técnicas de gerenciamento de projetos e metodologias ágeis.' },
];

const ciscoCerts: Certificate[] = [
  { id: 'ccna', src: '/certs/cisco-ccna-intro.png', title: 'CCNA: Introduction to Networks', description: 'Fundamentos de redes, modelo OSI/TCP-IP, IPv4/IPv6, roteamento e switching.' },
  { id: 'netdef', src: '/certs/cisco-network-defense.png', title: 'Network Defense', description: 'Defesa de rede, monitoramento, mitigação de ameaças e segurança de transporte.' },
  { id: 'nettech', src: '/certs/cisco-network-technician.png', title: 'Network Technician Career Path', description: 'Protocolos, comunicação fim a fim, segurança e melhores práticas de rede.' },
  { id: 'learnathon', src: '/certs/cisco-learnathon-2025.png', title: 'Learn-A-Thon 2025', description: 'Participação no Cisco Networking Academy Learn-A-Thon 2025.' },
];

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCertificates, setShowCertificates] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  const visibleCerts = showCertificates ? certificates : certificates.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#1E0B36] text-white">
      {/* Hero */}
      <section
        className={`min-h-screen flex flex-col items-center justify-center text-center p-4 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src="/img/profile.jpg"
          alt="João Lucas Gomes Pinheiro"
          className="w-44 h-44 rounded-full mb-8 border-4 border-purple-500 object-cover hover:animate-expand"
        />
        <h1 className="text-5xl font-bold mb-2 hover:animate-expand">João Lucas Gomes Pinheiro</h1>
        <h2 className="text-3xl font-bold mb-4 text-white opacity-75">Developer</h2>
        <p className="text-xl text-gray-300 mb-8">Full Stack Developer | CyberSecurity &amp; Redes</p>
        <div className="flex gap-10">
          <a href="https://github.com/joaopinheiroads" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-purple-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/joaopinheiroads/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:joaopinheiro.ads@gmail.com" aria-label="E-mail" className="hover:text-purple-400 transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://wa.me/5543984931486" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-purple-400 transition-colors">
            <Phone size={24} />
          </a>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-14">Projetos em Destaque</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-[#2A1B45] rounded-lg overflow-hidden flex flex-col">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover object-center" />
              ) : (
                <div className={`w-full h-48 flex items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                  <span className="text-6xl">{p.emoji}</span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-purple-900 rounded-full text-sm">{t}</span>
                  ))}
                </div>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                  {p.cta} <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 px-4 bg-[#2A1B45]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800"
              alt="Desenvolvimento"
              loading="lazy"
              className="rounded-lg"
            />
            <div>
              <p className="text-lg mb-8">
                Desenvolvedor Full Stack com experiência em projetos para mídia indoor e back-ends REST
                durante minha trajetória na TVPlayer/MapMaker. Atuo do front-end ao back-end (C#/.NET,
                React, JavaScript) e sou certificado em Segurança da Informação e Redes (Cisco CCNA),
                com conhecimento em desenvolvimento seguro, Pentest, OWASP, Linux/Kali, Firewall e LGPD.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((s) => (
                  <div key={s.title} className="bg-[#1E0B36] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-gray-300">{s.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações Cisco / Credly */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Certificações de Redes &amp; Segurança</h2>
        <p className="text-center text-gray-300 mb-12">Badges oficiais e verificáveis no Credly · Cisco Networking Academy</p>
        <div className="max-w-5xl mx-auto bg-[#2A1B45] rounded-lg p-8 mb-12">
          <CredlyBadges />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ciscoCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#2A1B45] p-3 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openImage(cert.src)}
            >
              <img src={cert.src} alt={cert.title} loading="lazy" className="w-full h-44 object-contain rounded mb-3 bg-white/5" />
              <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.description}</p>
              <p className="text-purple-400 mt-3 text-sm">Ver certificado</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificados */}
      <section className="py-20 px-4 bg-[#2A1B45]">
        <h2 className="text-4xl font-bold text-center mb-12">Certificados</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#1E0B36] p-3 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openImage(cert.src)}
            >
              <img src={cert.src} alt={cert.title} loading="lazy" className="w-full h-44 object-cover rounded mb-3" />
              <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.description}</p>
              <p className="text-purple-400 mt-3 text-sm">Ver certificado</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => setShowCertificates((v) => !v)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            {showCertificates ? 'Ver menos' : 'Ver todos os certificados'}
          </button>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="max-w-md mx-auto flex flex-wrap gap-4 justify-center">
          <a href="mailto:joaopinheiro.ads@gmail.com" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors">
            <Mail className="mr-2" /> Envie um e-mail
          </a>
          <a href="https://wa.me/5543984931486" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors">
            <Phone className="mr-2" /> WhatsApp
          </a>
        </div>
      </section>

      {/* Modal de imagem */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={closeImage}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificado ampliado" className="max-w-full max-h-[90vh] rounded-lg" />
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} João Lucas Gomes Pinheiro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
