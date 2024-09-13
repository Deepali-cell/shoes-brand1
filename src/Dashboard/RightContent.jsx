import Middle4 from "./Right/Middle4";
import Middle1 from "./Right/Middle1";
import Middle2 from "./Right/Middle2";
import Middle3 from "./Right/Middle3";
import Top from "./Right/Top";

function RightContent() {
  return (
    <>
      <div>
        <Top></Top>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Middle1></Middle1>
          <Middle2></Middle2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Middle3></Middle3>
          <Middle4></Middle4>
        </div>
      </div>
    </>
  );
}
export default RightContent;
