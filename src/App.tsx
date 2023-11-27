import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './index.css';

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/marcosVFG.png',
          name: 'Marcos Vinícius',
          role: 'Developer'
      },
      content: [
        { type:'paragraph', content:'Fala galeraa 👋'},
        { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifólio. O que vocês acharam?'}, 
        { type:'link', content:'👉 github.com/MarcosVFG'},
      ],
      publishedAt: new Date('2023-11-14 20:00:00'),
  },
  {
    id: 2,
    author: {
        avatarUrl: 'https://s2-galileu.glbimg.com/tzA9_ep4Cb1i_eY0sLjgWnG3eTY=/0x0:675x524/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/y/n/yM5g9dSyeGUu5OtW072g/alan-turing-aged-16.jpeg',
        name: 'Alan Turing',
        role: 'Cientista'
    },
    content: [
      { type:'paragraph', content:'Eu acredito que às vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar'}, 
      { type:'link', content:'👉 github.com/MarcosVFG'},
    ],
    publishedAt: new Date('2023-11-12 20:00:00'),
},
];


function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
