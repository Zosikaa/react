import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import {MojPierwszykomponent} from './0_PrzykladJsx_przyklad'
import Zadanie from './0_PropsyPrzyklad_przyklad'

import LicznikObecnosci from './0_Obecnosci_przyklad'
import FormularzUcznia from './0_Dane_przyklad'
import ListaUczniow from './0_Uczniowie_przyklad'

import Zadanie1 from './03_zadanie-1'
import {PersonCard} from './03_zadanie-2'
import {MovieList} from './03_zadanie-3'

import TrybKoloru from './04_ZmianaKolor'
import OcenyUcznia from './04_Oceny'
import ListaObecnosci from './04_SrednieObecnosci'

import PrzykladTablicaPusta from './06_test'
import ZegarCyfrowy from './06_Zegar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    // ZADANIA 06 <br></br> <br></br>
    
    <ZegarCyfrowy />

    <PrzykladTablicaPusta />

    // ZADANIA 04 <br></br> <br></br>

    <TrybKoloru />

    <OcenyUcznia />

    <ListaObecnosci />

    // PRZYKLADY HOOK 04 <br></br> <br></br>

    <LicznikObecnosci />

    <FormularzUcznia  />

    <ListaUczniow />

    // ZADANIA 03 <br></br> <br></br>

    <Zadanie1 />

    <PersonCard firstName = "Zosia" lastName = "Biel" age = "16" occupation = "Nic"/>

    <MovieList movies={[
      {id: 1, title: "Inception", year: 2010, rating: 8.8},
      {id: 2, title: "Avatar", year: 2009, rating: 8.5}]} />

    // PRZYKLADY 00 <br></br> <br></br>

    <Zadanie />
    
    <MojPierwszykomponent />

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
