export default function Card(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.clickFunc(props.obj);
      }}
    >
      {props.obj.background}
    </div>
  );
}
