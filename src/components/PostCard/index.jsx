import './styles.css';
//É possivel passar o post todo com esta comnetado abaixo porem tambem da para passar atributo por atributo
//Quando esta retornando so o componente não a necessidade do return pode ser fieto do modo abaixo
export const PostCard = ({ title, cover, body, id }) => (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );