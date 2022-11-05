export default function Card(props) {
  return (
    <div
      onClick={() => {
        props.clickFunc(props.obj);
      }}
      className="card"
      style={{ backgroundImage: `url(${props.obj.bg})` }}
    ></div>
  );
}
