import "./listItem.scss";

const ListItem = () => {
  return (
    <li className="list-item">
      <section className="list-item__info">
        <div className="list-item__name">Suscripción mensual - Netflix</div>
        <div className="list-item__amount">15€</div>
      </section>
      <button className="list-item__button">Details</button>
    </li>
  );
};

export default ListItem;
