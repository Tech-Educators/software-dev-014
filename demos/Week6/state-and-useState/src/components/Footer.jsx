export default function Footer(props) {
  return (
    <>
      <p>Footer</p>
      <p>Count: {props.counter}</p>
      <p>{props.age}</p>
    </>
  );
}

//destructured props
// export default function Footer({counter}) {
//     return (
//       <>
//         <p>Footer</p>
//         <p>Count: {counter}</p>

//       </>
//     );
//   }
