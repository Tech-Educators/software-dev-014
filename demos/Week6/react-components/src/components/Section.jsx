export default function (props) {
  return (
    <>
      <h2>{props.subtitle}</h2>
      <h1>{props.mainTitle}</h1>
      <button>Read More</button>
      <img src={props.src}></img>
    </>
  );
}
