import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { MdArrowBack } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa6';
import { Card } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { useLanguage } from '~/hooks/useLanguage';
import { getTranslation } from '~/lib/translations';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function About() {
  const { lang, toggleLang, isLoaded } = useLanguage();
  const translations = getTranslation(lang);
  const t = translations.about;

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 p-4 md:p-8 font-sans selection:bg-purple-500/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-8 flex items-center justify-between"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <MdArrowBack size={20} />
            {t.backBtn}
          </Link>
          
          <Button 
            onClick={toggleLang}
            variant="ghost" 
            size="sm"
            className="text-white/50 hover:text-white hover:bg-white/10"
          >
            <FaGlobe className="mr-2" size={16} /> {lang.toUpperCase()}
          </Button>
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
