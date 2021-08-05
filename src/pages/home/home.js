import ListItem from "../../components/listItem";
import "./home.scss";

const Home = ({ list, handleAddItem, handleDeleteAllItems }) => {
  return (
    <section className="home">
      <section className="home__list">
        <section className="home__list-actions">
          <button
            onClick={handleAddItem}
            className="home__list-button home__list-button--primary"
          >
            Add item
          </button>
          <button
            onClick={handleDeleteAllItems}
            className="home__list-button home__list-button--danger"
          >
            Delete all items
          </button>
        </section>
        <ul className="home__list-container">
          {list.length > 0 ? (
            list.map((item, index) => {
              return <ListItem />;
            })
          ) : (
            <p className="home__list-message">We didnt find any register yet</p>
          )}
        </ul>
      </section>
      <aside className="home__profile"></aside>
    </section>
  );
};

export default Home;
