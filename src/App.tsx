/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

const links = [
  {
    title: "YouTube",
    description: "Aprenda Kali Linux e fundamentos de segurança",
    icon: <Youtube className="w-6 h-6" />,
    url: "#",
    color: "hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400",
  },
  {
    title: "GitHub",
    description: "Projetos e estudos em programação e pentest",
    icon: <Github className="w-6 h-6" />,
    url: "#",
    color: "hover:bg-zinc-500/10 hover:border-zinc-500/50 hover:text-zinc-300",
  },
  {
    title: "LinkedIn",
    description: "Minha jornada profissional",
    icon: <Linkedin className="w-6 h-6" />,
    url: "#",
    color: "hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400",
  },
  {
    title: "Instagram",
    description: "Conteúdos rápidos e bastidores",
    icon: <Instagram className="w-6 h-6" />,
    url: "#",
    color: "hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400",
  },
];

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-zinc-100 flex items-center justify-center p-4 sm:p-8 font-sans selection:bg-zinc-700 selection:text-white">
      <motion.div
        className="w-full max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-10">
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500 to-zinc-700 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <img
              src="https://picsum.photos/seed/hacker/200/200"
              alt="Lucas Barros"
              referrerPolicy="no-referrer"
              className="relative w-32 h-32 rounded-full object-cover border-2 border-zinc-800 shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">
            Lucas Barros
          </h1>
          
          <p className="text-zinc-400 text-sm sm:text-base max-w-[280px] sm:max-w-sm leading-relaxed">
            Criador de conteúdo sobre tecnologia e segurança digital
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group flex items-center p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl transition-all duration-300 shadow-sm ${link.color}`}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800/50 text-zinc-400 group-hover:text-inherit transition-colors duration-300">
                {link.icon}
              </div>
              
              <div className="ml-4 flex-1 text-left">
                <h2 className="text-base font-semibold text-zinc-200 group-hover:text-inherit transition-colors duration-300">
                  {link.title}
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5 line-clamp-2">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Lucas Barros. Todos os direitos reservados.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
