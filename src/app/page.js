'use client';
import { useState } from "react";
import {
  Home,
  Database,
  Users,
  Paperclip,
  BookOpen,
  Code,
  Bell,
  User,
  ChevronDown,
  Search,
  ExternalLink,
  Box,
  Clock,
  School, 
  MoveVertical,
  FileText,
  GraduationCap,
  BookMarked,
  Coins
} from "lucide-react";

import Image from "next/image";
// import '@fontsource/inter/variable.css'; // or '/400.css', '/700.css', etc.

// Fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';


// Spline 
import Spline from '@splinetool/react-spline';


export default function HomePage() {
  const [theme, setTheme] = useState("dark"); // Dark theme as per dashboard

  // Colors adapted from dashboard's blue/dark theme
  const colors = {
    background: "bg-gradient-to-br from-[#111] via-[#111E4D] to-[#0B1229]",
    cardBg: "bg-[#1B2749]",
    cardShadow:
      "shadow-[0_4px_20px_rgba(17,_45,_70,_0.51),_inset_0_0_2px_rgba(17,_45,_70,_0.94)]",
    primary: "text-[#4CB1F7]", // Bright blue used for active nav etc
    primaryBg: "bg-[#2380F9]",
    textPrimary: "text-[#FFFFFF]",
    textSecondary: "text-[#E4E4E7]",
    hoverBg: "hover:bg-[#2C3C75]",
    buttonSolid:
      "bg-[#2380F9] hover:bg-[#1a5ecf] text-white font-semibold rounded-lg shadow-md transition-colors duration-200",
    buttonOutline:
      "border border-[#2380F9] text-[#2380F9] hover:bg-[#2C3C75] rounded-lg font-semibold transition-colors duration-200",
    buttonGhost:
      "text-[#2380F9] hover:bg-[#2C3C75] rounded-lg font-semibold transition-colors duration-200",
  };

  // Sample features/cards data
  const features = [
    {
      icon: <Database size={24} className="text-[#4CB1F7]" />,
      title: "Real-time Blockchain Data",
      desc: "Explore live transactions, blocks, and market stats updated every second.",
    },
    {
      icon: <Users size={24} className="text-[#4CB1F7]" />,
      title: "Token & NFT Analytics",
      desc: "Track token prices, market caps, and NFT activity seamlessly.",
    },
    {
      icon: <Coins size={24} className="text-[#4CB1F7]" />,
      title: "Smart Contracts",
      desc: "Interact with smart contracts directly from the platform.",
    },
    {
      icon: <School size={24} className="text-[#4CB1F7]" />,
      title: "Learning Hub",
      desc: "Dive into blockchain concepts, tutorials, and best practices.",
    },
  ];

  // How it works steps
  const steps = [
    {
      icon: <User size={24} className="text-[#4CB1F7]" />,
      title: "Register",
      desc: "Create an account to access personalized features and settings.",
    },
    { 
      icon: <MoveVertical size={24} className="text-[#4CB1F7]" />,
      title: "Get Matched",
      desc: "Connect with liquidity providers, traders and mentors based on your preferences.",
    },
    {
      icon: <FileText size={24} className="text-[#4CB1F7]" />,
      title: "Train and Earn",
      desc: "Participate in training sessions, earn rewards, and improve your trading skills.",
    },
    {
      icon: <GraduationCap size={24} className="text-[#4CB1F7]" />,
      title: "Certify",
      desc: "Receive certifications for completed training programs to showcase your skills.",
    },
    {
      icon: <BookMarked size={24} className="text-[#4CB1F7]" />,
      title: "Mentor Others",
      desc: "Share your knowledge and experience by mentoring new users in the community.",
    },
  ];
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background-color: #0b1229;
          color: #a7b0d2;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.5;
        }
        a {
          color: #4cb1f7;
          text-decoration: none;
        }
        a:hover,
        a:focus {
          text-decoration: underline;
        }
        ::selection {
          background-color: #2380f9;
          color: white;
        }
        /* scrollbar for cards */
        ::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #2380f9;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>

      <div
        className={`min-h-screen flex flex-col  gap-20 items-center ${colors.background} p-6 sm:p-12`}
      >
        {/* Navigation */}
        <nav className="w-full max-w-7xl flex items-center justify-between py-4 px-4 sm:px-6 bg-[#131E4D] backdrop-blur-md rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="p-1 bg-[#1174f6] rounded-lg">
              <Image
                src="/img/logo.png"
                alt="Liquidity Chain logo — stylized L letter in blue square on dark background"
                className="w-10 h-10 object-contain"
                width={40}
                height={40}
                priority
              />
            </div>
            <span className="text-white font-extrabold text-xl tracking-wide select-none">
              Liquidity Chain
            </span>
          </div>

          <ul className="hidden md:flex space-x-6 text-sm font-semibold text-[#A7B0D2] items-center relative">
            <li>
              <a
                href="#"
                className={`px-3 py-1 rounded-full ${colors.primaryBg} text-white`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="group relative cursor-pointer flex items-center space-x-1">
              <span>Blockchain</span>
              <ChevronDown size={14} />
              <ul className="absolute top-full left-0 mt-2 w-32 bg-[#131E4D] rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                <li className="px-3 py-2 hover:bg-[#2380F9] hover:text-white rounded-t-md cursor-pointer">
                  Overview
                </li>
                <li className="px-3 py-2 hover:bg-[#2380F9] hover:text-white rounded-b-md cursor-pointer">
                  Validators
                </li>
              </ul>
            </li>
            <li className="group relative cursor-pointer flex items-center space-x-1">
              <span>Tokens</span>
              <ChevronDown size={14} />
            </li>
            <li className="group relative cursor-pointer flex items-center space-x-1">
              <span>NFTs</span>
              <ChevronDown size={14} />
            </li>
            <li className="group relative cursor-pointer flex items-center space-x-1">
              <span>Resources</span>
              <ChevronDown size={14} />
            </li>
            <li className="group relative cursor-pointer flex items-center space-x-1">
              <span>Developers</span>
              <ChevronDown size={14} />
            </li>
            <li className="group relative cursor-pointer flex items-center space-x-1">
              <span>More</span>
              <ChevronDown size={14} />
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <button
              aria-label="Notifications"
              className="p-2 rounded-lg bg-[#1B2749] hover:bg-[#2380F9] transition-colors"
            >
              <Bell size={20} className="text-[#A7B0D2]" />
            </button>
            <button
              aria-label="User profile"
              className="p-2 rounded-lg bg-[#1B2749] hover:bg-[#2380F9] transition-colors"
            >
              <User size={20} className="text-[#A7B0D2]" />
            </button>
          </div>
        </nav>

        {/* Hero Section */}
  <header className="w-full max-w-7xl flex flex-row justify-between items-center mt-40 mb-40 px-4 sm:px-6 text-center sm:text-left">
         <div className="w-1/2 space-y-6 leading-12">
           <h1 className="text-white font-extrabold text-5xl sm:text-5xl max-w-3xl leading-tight">
            Unlock the Power of Blockchain Data with{" "}
            <span className="text-[#2380F9]">Liquidity Chain</span>
          </h1>
          <p className="mt-4 text-[#A7B0D2] max-w-2xl text-lg sm:text-xl leading-relaxed">
            Streamline your decentralized finance (DeFi) decisions with
            real-time analytics, token insights, and seamless blockchain
            exploration.
          </p>
         </div>
         
         <div className="relative h-96 sm:h-80">
           <Spline scene="https://prod.spline.design/GdZOr2jEKIdzoRmI/scene.splinecode" />
         </div>

          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button className={colors.buttonSolid + " px-6 py-3 flex items-center justify-center"}>
              <Home size={18} className="mr-2" />
              Get Started
            </button>
            <button className={colors.buttonOutline + " px-6 py-3 flex items-center justify-center"}>
              <BookOpen size={18} className="mr-2" />
              Learn More
            </button>
          </div> */}
        </header>

        {/* Feature Cards */}
        <section className="w-full mt-20 flex flex-row gap-8 px-4 sm:px-6 items-center justify-center">
          {features.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className={`${colors.cardBg} ${colors.cardShadow} rounded-xl p-6 flex flex-col items-start space-y-4`}
            >
              <div className="p-3 rounded-lg bg-[#2380F9] bg-opacity-20">
                {icon}
              </div>
              <h3 className="text-white font-semibold text-xl">{title}</h3>
              <p className="text-[#A7B0D2] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </section>

        {/* Info / Action Section */}
        <section className="w-full max-w-7xl mt-24 px-4 sm:px-6 flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex justify-center space-y-6 gap-3 items-center">
            <div
            className="relative rounded-xl p-8 flex-1 flex flex-col justify-between"
          >
            <div className="bg-[#2380F925] p-5 border-2 rounded-2xl w-120 relative top-0 left-20 flex items-start gap-3">
              <h2 className="text-white font-extrabold text-5xl mb-2 leading-14">
                Why Choose Liquidity Chain?
              </h2>
              <p className="text-[#A7B0D2] text-base leading-relaxed mb-6">
                Comprehensive blockchain data that helps traders, developers,
                and enthusiasts get actionable insights. Safe, precise, and
                blazing fast.
              </p>
            </div>
          </div>
            <Image
              src="/img/dashboardimg.png"
              alt="Sleek preview image of Liquidity Chain blockchain explorer dashboard with dark theme, blue highlights, and charts"
              className="rounded-lg shadow-lg"
              width={800} // set to your image's width in pixels
              height={450} // set to your image's height in pixels
              priority // optional: for above-the-fold images
              
            />
          </div>
        </section>

        {/* How It Works Section */}
         <section className="w-full max-w-7xl mt-24 px-4 sm:px-6 flex flex-col items-center justify-center gap-8">
           <h1 className="text-4xl font-semibold text-center text-[#FFF]">How It Works</h1>
         <div className="w-full mt-24 px-4 sm:px-6 sm:flex-row flex justify-center items-center gap-8">
         {steps.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className={`${colors.cardBg} ${colors.cardShadow} w-full h-70 rounded-xl p-6 flex flex-col items-start space-y-4`}
            >
              <div className="w-16 h-16 rounded-full bg-[#1a1f2a] flex justify-center items-center border border-[#2a2f3a]">
                {icon}
              </div>
              <h3 className="text-white font-semibold text-xl">{title}</h3>
              <p className="text-[#A7B0D2] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div> 
         </section>

        {/* Footer */}
        <footer className="w-full mt-24 mb-8 px-4 sm:px-6 border-t border-[#2c3c75] text-[#5f6e9e] text-sm flex flex-col sm:flex-row justify-between items-center">
          <span>© 2024 Liquidity Chain. All rights reserved.</span>
          <nav className="flex space-x-6 mt-6 sm:mt-0">
            <a href="#" className="hover:text-[#2380F9]">
              Terms
            </a>
            <a href="#" className="hover:text-[#2380F9]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#2380F9]">
              Contact
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}

