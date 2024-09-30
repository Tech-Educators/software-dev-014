export default function Navbar() {
  let username = "Joe";

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/580px-The_Blue_Marble_%28remastered%29.jpg"></img>
      </div>
      <p>Welcome {username}</p>
      <div className="links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}
