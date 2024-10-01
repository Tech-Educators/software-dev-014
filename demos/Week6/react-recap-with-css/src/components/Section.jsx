import "./Section.css";

export default function Section(props) {
  return (
    <div id={props.divid}>
      <h2 className={props.h2id}>{props.subtitle}</h2>
      <h1 className={props.h1id}>{props.mainTitle}</h1>
      <button id={props.buttonid}>{props.button}</button>
      <img width={props.width} height={props.height} src={props.src}></img>
    </div>
  );
}
