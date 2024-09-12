import Review from "./Review";
import Header from "../components/Header";
function Customerreview() {
  // const arr = ["Geeta", "Meena", "Submam", "Kartik", "Mehul", "Deepika"];
  const arr = [
    {
      name: "Geeta",
      star: 4,
    },
    {
      name: "Submam",
      star: 3,
    },
    {
      name: "Kartik",
      star: 2,
    },
    {
      name: "Mehul",
      star: 5,
    },
    {
      name: "Deepika",
      star: 3,
    },
    {
      name: "Renu",
      star: 3,
    },
  ];

  return (
    <>
      <Header></Header>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {arr.map((detail, index) => (
          <Review key={index} Name={detail.name} Star={detail.star}></Review>
        ))}
      </div>
    </>
  );
}
export default Customerreview;
