import { useState } from 'react';
import { FaGraduationCap, FaShieldAlt, FaCheckCircle, FaCopy, FaExternalLinkAlt } from 'react-icons/fa';

const DIPLOMA = {
  imagem: '/certs/diploma-ads.png',
  curso: 'Análise e Desenvolvimento de Sistemas',
  grau: 'Tecnólogo',
  instituicao: 'Centro Universitário União das Américas Descomplica',
  modalidade: 'EAD',
  conclusao: 'Julho de 2026',
  colacao: '13 de agosto de 2026',
  reconhecimento: 'Portaria MEC nº 161/2024',
  codigoValidacao: '1716.1716.44e1fe4ca17b',
  urlValidacao: 'https://descomplica.jacad.com.br/academico/diploma-digital/',
};

const TEMPO_AVISO_COPIADO_MS = 2000;

type Props = {
  onAbrirImagem: (src: string) => void;
};

function DiplomaDestaque({ onAbrirImagem }: Props) {
  const [copiado, setCopiado] = useState(false);

  const copiarCodigo = async () => {
    try {
      await navigator.clipboard.writeText(DIPLOMA.codigoValidacao);
      setCopiado(true);
      setTimeout(() => setCopiado(false), TEMPO_AVISO_COPIADO_MS);
    } catch {
      setCopiado(false);
    }
  };

  const detalhes: { rotulo: string; valor: string }[] = [
    { rotulo: 'Instituição', valor: DIPLOMA.instituicao },
    { rotulo: 'Modalidade', valor: DIPLOMA.modalidade },
    { rotulo: 'Conclusão', valor: DIPLOMA.conclusao },
    { rotulo: 'Colação de grau', valor: DIPLOMA.colacao },
    { rotulo: 'Reconhecimento', valor: DIPLOMA.reconhecimento },
  ];

  return (
    <section id="formacao" className="py-20 px-4 bg-gradient-to-b from-[#1E0B36] via-[#2A1B45] to-[#1E0B36]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-amber-300 font-semibold tracking-widest uppercase text-sm mb-3">
          Formação Acadêmica
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Graduado em {DIPLOMA.curso}</h2>
        <p className="text-center text-gray-300 mb-12">
          Diploma digital oficial, emitido conforme o padrão do MEC e assinado com certificado ICP-Brasil.
        </p>

        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-amber-400 via-purple-500 to-emerald-400 shadow-2xl shadow-purple-900/50">
          <div className="rounded-2xl bg-[#1E0B36] p-6 md:p-10 grid lg:grid-cols-5 gap-10 items-center">
            <button
              type="button"
              onClick={() => onAbrirImagem(DIPLOMA.imagem)}
              className="lg:col-span-3 group relative rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-amber-400/60 transition"
              aria-label="Ampliar diploma"
            >
              <img
                src={DIPLOMA.imagem}
                alt={`Diploma de ${DIPLOMA.grau} em ${DIPLOMA.curso}`}
                loading="lazy"
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Clique para ampliar
              </span>
            </button>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
                  <FaGraduationCap size={30} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Título conferido</p>
                  <p className="text-2xl font-bold">{DIPLOMA.grau}</p>
                </div>
              </div>

              <dl className="grid gap-3">
                {detalhes.map((d) => (
                  <div key={d.rotulo} className="flex flex-col border-b border-white/10 pb-2">
                    <dt className="text-xs uppercase tracking-wide text-gray-400">{d.rotulo}</dt>
                    <dd className="text-gray-100">{d.valor}</dd>
                  </div>
                ))}
              </dl>

              <div className="rounded-xl bg-emerald-400/10 border border-emerald-400/30 p-4">
                <p className="flex items-center gap-2 text-emerald-300 font-semibold mb-2">
                  <FaShieldAlt /> Autenticidade verificável
                </p>
                <p className="text-sm text-gray-300 mb-3">
                  Confira no portal da instituição usando o código de validação:
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <code className="flex-1 truncate rounded bg-black/40 px-3 py-2 text-sm text-emerald-200">
                    {DIPLOMA.codigoValidacao}
                  </code>
                  <button
                    type="button"
                    onClick={copiarCodigo}
                    className="rounded bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition-colors"
                    aria-label="Copiar código de validação"
                  >
                    {copiado ? <FaCheckCircle className="text-emerald-300" /> : <FaCopy />}
                  </button>
                </div>
                <a
                  href={DIPLOMA.urlValidacao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 px-4 py-2.5 font-semibold text-[#1E0B36] transition-colors"
                >
                  Validar diploma <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiplomaDestaque;
