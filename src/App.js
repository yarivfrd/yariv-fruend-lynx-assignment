import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Modal from './components/Modal/Modal';
import './App.scss';

function App() {

  const [data, setData] = useState([]);
  const [navIndex, setNavIndex] = useState(1);
  const [navIndexModifier, setNavIndexModifier] = useState(0);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchAlbumData();
  }, []);

  // what is the difference between function declaration vs expression?
  function fetchAlbumData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(resData => {
        setData(resData);
      }).catch(e => {
        console.error(`Error retriving album data: ${e}`);
      });
  }

  function handlePhotoAdd() {
    fetch(`https://jsonplaceholder.typicode.com/photos`, {
      method: 'POST',
      body: JSON.stringify({
        albumId: 101,
        title: "New Photo",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(resData => {
        setData(prevData => [...prevData, {...resData}]);
      });
  }

  function handleTitleChange(id, val) {
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
        setData(prevData => {
          return prevData.map(item => {
            if (item.id === resData.id) {
              return { ...item, title: resData.title };
            }
            return item;
          });
        });
      });
  }

  function handlePhotoDelete(id) {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setData(prevData => {
          return prevData.filter(item => item.id !== id);
        });
      });
  }

  function handleNavBack() {
    setNavIndexModifier(navIndexModifier - 1);
    setNavIndex(navIndex - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function handleNavNext() {
    setNavIndexModifier(navIndexModifier + 1);
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
      {/* <button onClick={() => console.log(data)}>print data</button> */}
      <Header handlePhotoAdd={handlePhotoAdd}/>
      <Content
        albumsData={data}
        navIndex={navIndex}
        navIndexModifier={navIndexModifier}
        handleTitleChange={handleTitleChange}
        handlePhotoDelete={handlePhotoDelete}
        handleNavBack={handleNavBack}
        handleNavNext={handleNavNext}
        showModal={showModal}
      />
      {modalData ? <Modal title={modalData.title} imgUrl={modalData.imgUrl} hideModal={hideModal} /> : ''}
    </div>
  );
}

export default App;
