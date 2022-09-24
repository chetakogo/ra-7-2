import { useState } from 'react';
import wrapping from './components/wrapping';
import nextId from 'react-id-generator';
import './App.css';

export function New(props) {
  return (
    <div className='wrap-item wrap-item-new'>
      <span className='label'>New!</span>
      {props.children}
    </div>
  );
}

export function Popular(props) {
  return (
    <div className='wrap-item wrap-item-popular'>
      <span className='label'>Popular!</span>
      {props.children}
    </div>
  );
}

function Article(props) {
  return (
    <div className='item item-article'>
      <h3>
        <a href='/'>{props.title}</a>
      </h3>
      <p className='views'>Прочтений: {props.views}</p>
    </div>
  );
}

function Video(props) {
  return (
    <div className='item item-video'>
      <iframe
        src={props.url}
        title={props.url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
      <p className='views'>Просмотров: {props.views}</p>
    </div>
  );
}

const ArticleWrapped = wrapping(Article);
const VideoWrapped = wrapping(Video);

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return <VideoWrapped key={nextId()} {...item} />;

      case 'article':
        return <ArticleWrapped key={nextId()} {...item} />;

      default:
        return null;
    }
  });
}

function App() {
  const [list] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12,
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175,
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253,
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return <List list={list} />;
}

export default App;