import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import ErrorView from './ErrorView/ErrorView';
import getApi from './Servise/getApi';

class App extends Component {
  state = {
    searchText: '',
    images: [],
    currentPage: 1,
    loading: false, // spiner
    showModal: false,
    error: null,
    totalPage: null,
  };

  async componentDidUpdate(_, prevState) {
    let { currentPage } = this.state;
    const prevSearchValue = prevState.searchText;
    const nextSearchValue = this.state.searchText;

    // Перевіряємо, чи змінились пропси запиту або state сторінки (currentPage)
    if (
      prevSearchValue !== nextSearchValue ||
      prevState.currentPage !== currentPage
    ) {
      // запуск спінера
      this.setState({ loading: true });

      //  запит на бекенд
      try {
        const response = await getApi(nextSearchValue, currentPage);
        const { hits, totalHits } = response.data;
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalPage: totalHits,
        }));
      } catch (error) {
        this.setState({ error: 'Something wrong. Please try again.' });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  //  запит пошуку в App з Searchbar
  handleSubmit = searchValue => {
    this.setState({
      searchText: searchValue,
      currentPage: 1,
      images: [],
      loading: false,
      showModal: false,
      error: null,
      totalPage: null,
    });
  };

  // кнопка завантаження наступних фото
  onLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  //модалка відкрити
  onOpenModal = (imgUrl, tag) => {
    this.setState({ showModal: true, imgUrl, tag });
  };

  //модалка закрити
  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      images,
      showModal,
      imgUrl,
      tag,
      loading,
      totalPage,
      error,
      currentPage,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery images={images} openModal={this.onOpenModal} />

        {/* модалка  */}
        {showModal && (
          <Modal onClose={this.onCloseModal}>
            <img src={imgUrl} alt={tag} />
          </Modal>
        )}

        {/* спінер */}
        <Loader isLoading={loading} />

        {/* кнопка завантажити ще */}
        {totalPage / 12 > currentPage && <Button loadMore={this.onLoadMore} />}

        {/* нічого не знайшло */}
        {totalPage === 0 && <ErrorView />}

        {/* помилка запиту */}
        {error && <ErrorView>{error}</ErrorView>}
      </>
    );
  }
}

export default App;
