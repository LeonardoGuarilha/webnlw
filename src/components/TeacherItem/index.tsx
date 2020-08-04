import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/39388688?s=460&u=3476f0244eb92639f1e5fa7c0f14f0086bd272d8&v=4"
          alt="Leonardo Guarilha"
        />
        <div>
          <strong>Leonardo Guarilha</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et veritatis
        eligendi nesciunt ratione accusantium laborum quas <br />
        <br />
        officiis sint in eius similique numquam voluptatem, odio, facere
        consequatur suscipit, dolorem labore neque.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
