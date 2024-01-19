import { approachContenttwo } from "../../data/service";

const Approach2 = () => {
  return (
    <ul className="ptf-process-steps">
      {approachContenttwo.map((val, i) => (
        <li
          className="ptf-process-item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <h6 className="ptf-process-item__title">{val.title}</h6>
          <p className="ptf-process-item__text">{val.descriptions}</p>
        </li>
      ))}
    </ul>
  );
};

export default Approach2;
