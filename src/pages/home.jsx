import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, CardBody } from 'react-bootstrap';
import { signOut } from 'firebase/auth';

import { database } from '../firebaseConfig';
import { Gallery } from '../components/gallery/gallery.jsx';
import ToggleColumnsBtn from '../components/toggle-columns-btn/toggle-columns-btn.jsx';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'jMGVI76tTHA7uU5dJnJ-vBkU1oP1ipLO16OjkcZWG74';
const IMAGES_PER_PAGES = 20;
// console.log('REACT_APP_API_KEY:', process.env.REACT_APP_API_KEY);

const Home = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [tag, setTag] = useState(location?.state?.tag);
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [columns, setColumns] = useState(true);

  const handleSignOut = () => {
    signOut(database).then(val => {
      nav('/');
    });
  };

  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        setErrorMsg('');
        const { data } = await axios.get(
          `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGES_PER_PAGES}&client_id=${API_KEY}`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      setErrorMsg('Error fething images. Try again later ');
      console.log('error:', error.massege);
    }
  }, [page]);

  // useEffect(() => {
  //   fetchImages();
  // }, [fetchImages]);

  const resetSerch = useCallback(() => {
    setPage(1);
    fetchImages();
  }, [fetchImages]);

  const handleSerch = e => {
    e.preventDefault();
    resetSerch();
  };

  const handleSelection = selection => {
    searchInput.current.value = selection;
    resetSerch();
  };

  useEffect(() => {
    if (tag) {
      searchInput.current.value = tag;
      resetSerch();
      setTag('');
    }
  }, [resetSerch, tag]);

  return (
    <div className="container">
      <div className="mb-2 gap-2" style={{ display: 'flex' }}>
        <h1 className="title">Image Search</h1>
        <ToggleColumnsBtn callBack={setColumns} />
        <Button className="m-1" onClick={handleSignOut}>
          SignOut
        </Button>
      </div>

      {errorMsg && (
        <p className="" error-msg>
          {errorMsg}
        </p>
      )}

      <div className="search-section">
        <Form onSubmit={handleSerch}>
          <Form.Control
            type="search"
            placeholder="search"
            className="search-input"
            ref={searchInput}
          />
        </Form>
      </div>

      <CardBody className="m-2">
        <Button className="m-1" onClick={() => handleSelection('nature')}>
          Nature
        </Button>
        <Button className="m-1" onClick={() => handleSelection('birds')}>
          Birds
        </Button>
        <Button className="m-1" onClick={() => handleSelection('cats')}>
          Cats
        </Button>
        <Button className="m-1" onClick={() => handleSelection('Shoes')}>
          Shoes
        </Button>
      </CardBody>

      <Gallery data={images} columns={columns} />

      <CardBody className="m-2">
        {page > 1 && (
          <Button className="m-1" onClick={() => setPage(page - 1)}>
            Previos
          </Button>
        )}
        {page < totalPages && (
          <Button className="m-1" onClick={() => setPage(page + 1)}>
            Next
          </Button>
        )}
      </CardBody>
    </div>
  );
};

export default Home;
