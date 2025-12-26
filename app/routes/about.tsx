import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { MdArrowBack } from 'react-icons/md';
import { Card } from '~/components/ui/card';
import Galaxy from '~/components/Galaxy';

const content = {
  es: {
    title: 'Sobre Mí',
    backBtn: 'Volver',
    aboutTitle: 'Quién soy',
    aboutContent: `Soy una desarrolladora full stack apasionada por crear experiencias digitales inmersivas y funcionales. Mi recorrido en la tecnología ha estado marcado por la curiosidad constante y la búsqueda de soluciones innovadoras.

Especializada en el desarrollo web moderno, combino mis habilidades en frontend y backend para construir aplicaciones escalables y mantenibles. Tengo experiencia trabajando con React, TypeScript y herramientas de diseño como Tailwind CSS, permitiéndome crear interfaces intuitivas y atractivas.

Mi interés por el desarrollo de videojuegos me ha llevado a explorar tecnologías como Three.js y a profundizar en optimización de rendimiento y arquitectura de software. Creo en la importancia de escribir código limpio y documentado, facilitando la colaboración y el mantenimiento a largo plazo.

Además del código, me apasiona el diseño atómico y las animaciones fluidas que mejoran la experiencia del usuario. Siempre estoy aprendiendo nuevas tecnologías y metodologías para mantenerme al día en este campo en constante evolución.`,
    skillsTitle: 'Habilidades',
    skills: [
      'Frontend Development',
      'Backend Development',
      'React & TypeScript',
      'Game Development',
      'UI/UX Design',
      'Full Stack Architecture',
      'Performance Optimization',
      'Team Collaboration'
    ]
  },
  en: {
    title: 'About Me',
    backBtn: 'Back',
    aboutTitle: 'Who am I',
    aboutContent: `I'm a full stack developer passionate about creating immersive and functional digital experiences. My journey in technology has been marked by constant curiosity and the search for innovative solutions.

Specialized in modern web development, I combine my frontend and backend skills to build scalable and maintainable applications. I have experience working with React, TypeScript and design tools like Tailwind CSS, allowing me to create intuitive and attractive interfaces.

My interest in game development has led me to explore technologies like Three.js and dive deep into performance optimization and software architecture. I believe in the importance of writing clean and documented code, facilitating collaboration and long-term maintenance.

Beyond code, I'm passionate about atomic design and fluid animations that enhance user experience. I'm always learning new technologies and methodologies to stay up to date in this constantly evolving field.`,
    skillsTitle: 'Skills',
    skills: [
      'Frontend Development',
      'Backend Development',
      'React & TypeScript',
      'Game Development',
      'UI/UX Design',
      'Full Stack Architecture',
      'Performance Optimization',
      'Team Collaboration'
    ]
  },
  ca: {
    title: 'Sobre Mi',
    backBtn: 'Enrere',
    aboutTitle: 'Qui soc',
    aboutContent: `Soc una desenvolupadora full stack appassionada per crear experiències digitals immersives i funcionals. El meu recorregut en la tecnologia ha estat marcat per la curiositat constant i la recerca de solucions innovadores.

Especialitzada en el desenvolupament web modern, combino les meves habilitats en frontend i backend per construir aplicacions escalables i mantenibles. Tinc experiència treballant amb React, TypeScript i eines de disseny com Tailwind CSS, permetent-me crear interfícies intuïtives i atractives.

El meu interès pel desenvolupament de videojocs m'ha portat a explorar tecnologies com Three.js i a aprofundir en l'optimització del rendiment i l'arquitectura del software. Crec en la importància d'escriure codi net i documentat, facilitant la col·laboració i el manteniment a llarg termini.

A més del codi, em passiona el disseny atòmic i les animacions fluides que milloren l'experiència de l'usuari. Sempre estic aprenent noves tecnologies i metodologies per mantenir-me al dia en aquest camp en constant evolució.`,
    skillsTitle: 'Habilitats',
    skills: [
      'Frontend Development',
      'Backend Development',
      'React & TypeScript',
      'Game Development',
      'UI/UX Design',
      'Full Stack Architecture',
      'Performance Optimization',
      'Team Collaboration'
    ]
  }
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function About() {
  const [lang, setLang] = useState<'es' | 'en' | 'ca'>('es');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 p-4 md:p-8 font-sans selection:bg-purple-500/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6"
          >
            <MdArrowBack size={20} />
            {t.backBtn}
          </Link>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-[#0A0A0A] border-white/10 rounded-3xl p-8 md:p-12 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8" />

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t.aboutTitle}
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {t.aboutContent}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t.skillsTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {t.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all"
                    >
                      <p className="font-medium text-white">{skill}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
