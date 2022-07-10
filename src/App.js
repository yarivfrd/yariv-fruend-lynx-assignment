import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import './App.scss';

function App() {

  const [data, setData] = useState([]);
  const [navIndex, setNavIndex] = useState(1);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchAlbumData();
  }, []);

  // what is the difference between function declaration vs expression?
  function fetchAlbumData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(resData => {
        // console.log(resData);
        setData(resData);
      }).catch(e => {
        console.error(`Error retriving album data: ${e}`);
      });
  }

  function handleTitleChange(id, val) {
    console.log('updating title...');
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: val
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(resData => {
        console.log('title updated!');
        setData(prevData => {
          const updatedData = [...prevData];
          return updatedData.map(item => {
            if (item.id === resData.id) {
              return {...item, title: resData.title};
            }
            return item;
          });
        });
      });
  }

  function handleNavBack() {
    setNavIndex(navIndex - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function handleNavNext() {
    setNavIndex(navIndex + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function showModal(title, imgUrl) {
    setModalData({ title, imgUrl });
  }

  function hideModal() {
    setModalData(null);
  }

  return (
    <div className="App">
      <button onClick={() => console.log(data)}>print data</button>
      <Header />
      <Content
        albumsData={data}
        navIndex={navIndex}
        handleTitleChange={handleTitleChange}
        handleNavBack={handleNavBack}
        handleNavNext={handleNavNext}
        showModal={showModal}
      />
      <Footer />
      {modalData ? <Modal title={modalData.title} imgUrl={modalData.imgUrl} hideModal={hideModal} /> : ''}
    </div>
  );
}

export default App;
