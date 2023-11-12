import Contents from "../Contents";
import Header from "../Header";
function Home() {
  return (
    <div>
      <Header currentPage={"Trang chủ"} username={"Thai Bao Long"} />
      <Contents />
    </div>
  );
}

export default Home;
