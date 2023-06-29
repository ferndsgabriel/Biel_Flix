import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { ChangeEvent, useState, useEffect } from 'react';
import {AiOutlinePlus} from "react-icons/ai"

export default function Home() {
  const [imagePreview, setImagePreview] = useState('');

  function handleImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
    localStorage.setItem('Preview1', imageURL);
  }
  return (
    <>
      <Head>
        <title>BielFlix - Home</title>
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <div>
            <img src='Logo.png' alt='logo' className={styles.logo}/>
          </div>
        </header>

        <div className={styles.containerusers}>
          <h1>Quem está assistindo?</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <label className={styles.label}>
                <input type='file' accept="image/jpg, image/png" onChange={handleImage} />
                <HiOutlinePhotograph color='gray' size={40} />
               <img src={imagePreview} alt='preview' />
              </label>
              <p>Pessoa 1</p>
            </div>

            <span className={styles.plus}>
              <AiOutlinePlus size={40}></AiOutlinePlus>
            </span>
          </div>
          <button className={styles.button}>
            <p>Gerenciar Perfis</p>
          </button>
        </div>
      </main>
    </>
  );
}
