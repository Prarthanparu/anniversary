import "./App.css";
import styled from "styled-components";
import { ImHeart } from "react-icons/im";

function App() {
  return (
    <MainBody>
      <Title>
        <img
          src="https://c.tenor.com/we09_DMQrZgAAAAC/wedding-anniversary.gif"
          alt=""
        />
      </Title>
      <Header>
        <h1>Ravi Chandra</h1>
        <h2>
          <ImHeart />
        </h2>
        <h1>Pratima</h1>
      </Header>
    </MainBody>
  );
}

export default App;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;

  > h1 {
    font-size: 100px;
    display: flex;
    align-items: center;
    font-family: "Lobster", cursive;
  }
  > h2 {
    display: flex;
    align-items: center;
    font-size: 80px;
    padding: 20px;
    color: #d82148;
  }
  @media (max-width: 500px) {
    MainBody {
      display: flex;
      flex-direction: column;
    }
    > h2 {
      display: flex;
      align-items: center;
      font-size: 30px;
      padding: 10px;
      color: #d82148;
    }
    > h1 {
      font-size: 40px;
    }
  }
`;
