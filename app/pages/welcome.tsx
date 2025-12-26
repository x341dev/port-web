import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { 
  FaGithub, 
  FaLinkedin, 
  FaDiscord, 
  FaGlobe, 
  FaJava,
  FaJs,
  FaCode
} from "react-icons/fa6";
import { MdEmail, MdArrowOutward, MdTerminal } from "react-icons/md";
import { 
  SiBluesky, 
  SiTypescript, 
  SiTailwindcss, 
  SiKotlin, 
  SiLua 
} from "react-icons/si";
import { BiWorld } from "react-icons/bi";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import Galaxy from "~/components/Galaxy";
import { useLanguage } from "~/hooks/useLanguage";
import { getTranslation } from "~/lib/translations"; 

const contactLinks = {
  github: 'https://github.com/x341dev',
  linkedin: 'https://www.linkedin.com/in/x341dev/',
  bluesky: 'https://bsky.app/profile/x341dev.bsky.social',
  discord: 'discord://users/842762249978511380',
  email: 'mailto:contact@x341.dev'
};

const repos: GithubRepo[] = [
  { owner: 'aonbas', repo: 'aonbas-service-fetch', description: '', language: '', link: 'https://github.com/aonbas/aonbas-service-fetch' },
  { owner: 'x341dev', repo: 'port-web', description: '', language: '', link: 'https://github.com/x341dev/port-web' },
  { owner: 'x341dev', repo: 'aonbas', description: '', language: '', link: 'https://github.com/x341dev/aonbas' },
];

interface GithubRepo {
  owner: string;
  repo: string;
  description: string;
  language: string;
  link: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Portfolio() {
  const { lang, toggleLang, isLoaded } = useLanguage();
  const [reposData, setReposData] = React.useState<GithubRepo[]>(repos);
  const translations = getTranslation(lang);
  const t = translations.welcome;

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const updatedRepos = await Promise.all(
          repos.map(async (repo) => {
            const response = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.repo}`);
            const data = await response.json();
            return {
              ...repo,
              description: data.description || '',
              language: data.language || ''
            };
          })
        );
        setReposData(updatedRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepoData();
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 p-4 md:p-8 font-sans selection:bg-purple-500/30">
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

        <motion.div 
          className="col-span-1 md:col-span-2 h-80 relative overflow-hidden rounded-3xl border border-white/10 bg-black group"
          initial="initial" animate="animate" variants={fadeIn}
        >
          <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
            <Galaxy 
              mouseRepulsion={true}
              mouseInteraction={true}
              density={0.7}
              glowIntensity={0.8}
              saturation={0.9}
              hueShift={160} 
              starSpeed={0.15} 
            />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8 bg-linear-to-t from-black/90 via-transparent to-black/20">
            <Badge variant="outline" className="mb-4 border-purple-500/50 text-purple-300 bg-purple-500/10 backdrop-blur-md px-4 py-1">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              {t.status}
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-2 drop-shadow-2xl">
              K<span className="text-purple-500">ira</span>
            </h1>
            <p className="text-xl text-indigo-200 font-light tracking-wide">
              {t.role} <span className="text-purple-500">•</span> {t.subrole}
            </p>
            <Button 
                onClick={toggleLang}
                variant="ghost" 
                size="sm"
                className="absolute top-4 right-4 text-white/50 hover:text-white hover:bg-white/10"
              >
                <FaGlobe className="mr-2" /> {lang.toUpperCase()}
              </Button>
          </div>
        </motion.div>

        <motion.div 
          className="col-span-1 md:col-span-2 h-20"
          initial="initial" animate="animate" variants={fadeIn} transition={{ delay: 0.1 }}
        >
          <Card className="h-full bg-linear-to-r from-[#0a0a0a] to-[#111] border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center md:justify-between px-8">
            <div className="flex items-center gap-8 md:gap-10">
              <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all hover:scale-110">
                <FaGithub size={28} />
              </a>
              <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-all hover:scale-110">
                <FaLinkedin size={28} />
              </a>
              <a href={contactLinks.bluesky} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0560ff] transition-all hover:scale-110">
                <SiBluesky size={26} />
              </a>
              <a href={contactLinks.discord} className="text-slate-500 hover:text-[#5865F2] transition-all hover:scale-110">
                <FaDiscord size={28} />
              </a>
              <a href={contactLinks.email} className="text-slate-500 hover:text-red-400 transition-all hover:scale-110">
                <MdEmail size={30} />
              </a>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="col-span-1 md:col-span-2 min-h-45"
          initial="initial" animate="animate" variants={fadeIn} transition={{ delay: 0.2 }}
        >
          <Link to="/about" className="block h-full">
            <Card className="h-full bg-[#0A0A0A] border-white/10 rounded-3xl p-6 flex flex-col justify-center hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-3 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <MdTerminal size={24} />
                <h2 className="text-xl font-bold tracking-tight">{t.aboutTitle}</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed group-hover:text-slate-200 transition-colors">
                {t.aboutText}
              </p>
            </Card>
          </Link>
        </motion.div>

        <motion.div 
          className="col-span-1 min-h-87.5"
          initial="initial" animate="animate" variants={fadeIn} transition={{ delay: 0.3 }}
        >
          <Card className="h-full bg-[#0A0A0A] border-white/10 rounded-3xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3 text-pink-400">
                <FaGithub size={22} />
                <h2 className="text-xl font-bold">{t.projectsTitle}</h2>
              </div>
            </div>
            
            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {reposData.map((repo, i) => (
                <a href={repo.link} target="_blank" rel="noopener noreferrer" key={i} className="block">
                  <div className="group p-4 rounded-xl bg-white/5 hover:bg-linear-to-br hover:from-purple-900/40 hover:to-pink-900/40 border border-transparent hover:border-pink-500/20 cursor-pointer transition-all">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-slate-200 group-hover:text-white">{repo.repo}</h3>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{repo.description}</p>
                      </div>
                      <MdArrowOutward className="opacity-0 group-hover:opacity-100 transition-opacity text-pink-400"/>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-500" />
                      <span className="text-xs text-slate-400">{repo.language || 'Code'}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="col-span-1 min-h-87.5"
          initial="initial" animate="animate" variants={fadeIn} transition={{ delay: 0.35 }}
        >
           <Card className="h-full bg-[#0A0A0A] border-white/10 rounded-3xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-6 text-blue-400">
                <FaCode size={22} />
                <h2 className="text-xl font-bold">{t.techTitle}</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3 border border-white/5 hover:border-yellow-400/30 transition-colors group">
                  <FaJs className="text-white group-hover:text-yellow-400 group-hover:scale-110 transition-all" size={24} />
                  <span className="text-sm font-medium text-white group-hover:text-yellow-400 transition-colors">JavaScript</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3 border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <SiTypescript className="text-white group-hover:text-[#3178C6] group-hover:scale-110 transition-all" size={24} />
                  <span className="text-sm font-medium text-white group-hover:text-[#3178C6] transition-colors">TypeScript</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3 border border-white/5 hover:border-cyan-400/30 transition-colors group">
                  <SiTailwindcss className="text-white group-hover:text-[#06B6D4] group-hover:scale-110 transition-all" size={24} />
                  <span className="text-sm font-medium text-white group-hover:text-[#06B6D4] transition-colors">Tailwind</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3 border border-white/5 hover:border-red-500/30 transition-colors group">
                  <FaJava className="text-white group-hover:text-red-500 group-hover:scale-110 transition-all" size={24} />
                  <span className="text-sm font-medium text-white group-hover:text-red-500 transition-colors">Java</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3 border border-white/5 hover:border-purple-400/30 transition-colors group">
                  <SiKotlin className="text-white group-hover:text-[#7F52FF] group-hover:scale-110 transition-all" size={24} />
                  <span className="text-sm font-medium text-white group-hover:text-[#7F52FF] transition-colors">Kotlin</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3 border border-white/5 hover:border-blue-800/30 transition-colors group">
                  <SiLua className="text-white dark:text-white group-hover:text-blue-300 group-hover:scale-110 transition-all" size={24} />
                  <span className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">Lua</span>
                </div>
                
                <div className="col-span-2 p-3 rounded-lg bg-white/5 border border-dashed border-white/10 flex items-center justify-center text-slate-500 text-xs uppercase tracking-widest mt-2">
                  {t.moreToCome}
                </div>
              </div>
           </Card>
        </motion.div>

        <motion.div 
          className="col-span-1 md:col-span-2 h-30"
          initial="initial" animate="animate" variants={fadeIn} transition={{ delay: 0.4 }}
        >
          <Card className="h-full bg-linear-to-br from-purple-950 to-black border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none" />
             
            <div className="relative z-10 text-center md:text-left mb-2 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-1">x341<span className="text-purple-500">dev</span></h3>
              <p className="text-slate-400 text-xs">{t.footerText}</p>
            </div>

            <Button size="lg" className="relative z-10 bg-white text-black hover:bg-slate-200 rounded-full px-8 font-semibold">
              <Link to={"mailto:contact@x341.dev"}>{t.contactBtn}</Link>
            </Button>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}