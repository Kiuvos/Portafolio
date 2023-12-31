/* eslint react/no-unescaped-entities */
import Head from 'next/head';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import ProfilePicture from '../public/fotodeperfil.png';
import PC from '../public/pc.jpeg';
import Camera from '../public/camara.jpeg';
import Aptitudes from '../public/birrete.jpeg';
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#Contact"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Jesus Camargo
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web developer and system engeniering.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              System engeniering student, providing services for programming
              with javascript. Folow me!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillInstagram />
              <AiFillLinkedin />
              <AiFillFacebook />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={ProfilePicture}
                alt=" "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About me:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I'm 19 year old and I'm studying system engeniering, 8th semester
              I know languages like
              <span className="text-blue-500"> PHP </span>or
              <span className="text-teal-500"> Java </span>focused on software
              developer but recently I have been working with
              <span className="text-yellow-600"> JavaScript </span>
              for web development.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I also do editing and creative design work.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={Camera} alt=" " width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating designs suited for your needs following the design
                theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={PC} alt=" " width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream
              </h3>
              <p className="py-2">
                Let's make it reality your dream idea for a website or software
              </p>
              <h4 className="py-4 text-teal-600">Languages that I Use</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Php</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">C++</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={Aptitudes} alt=" " width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Personal Aptitudes
              </h3>
              <p className="py-2">
                If you want a great worker, you can work with me.
              </p>
              <h4 className="py-4 text-teal-600">
                Some of my personal skills are:
              </h4>
              <p className="text-gray-800 py-1">Teamwork</p>
              <p className="text-gray-800 py-1">Innovation</p>
              <p className="text-gray-800 py-1">Lidership</p>
              <p className="text-gray-800 py-1">Proactivity</p>
            </div>
          </div>
        </section>
        <section id="Contact" className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Education & Experience
            </h3>
            <p className="gap-8 list-disc text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              <p>
                -Bachiller con profundización en pedagogía 2019, Escuela Normal
                Superior Santa Ana de Baranoa
              </p>
              <p>-Estructura Del Lenguaje C++ (Nivel 1) 14/06/2021, SENA</p>
              <p>
                -Diplomado en programación PHP 17/08/2021, Politécnico de
                Colombia
              </p>
              <p>
                -Programa videojuegos con html 5 y javascript 14/01/2023, Udemy
              </p>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have been working like freelancer for one year, developing
              website projects and some other graphic design projects.
            </p>
          </div>
          <br></br>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Education & Experience
            </h3>
            <form>
              <div class="block">
                <span class="block text-sm font-medium text-slate-700 dark:text-gray-200">
                  Name
                </span>
                <input
                  type="text"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                />
                <span class="block text-sm font-medium text-slate-700 dark:text-gray-200">
                  Email
                </span>
                <input
                  type="email"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                />
                <span class="block text-sm font-medium text-slate-700 dark:text-gray-200">
                  ¿What do you need?
                </span>
                <input
                  type="text"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                />
              </div>
              <br></br>
              <a
                className=" bg-gradient-to-r from-teal-500 text- to-teal-700 text-white px-4 py-2 border-none rounded-md "
                href="#"
              >
                Save changes
              </a>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
