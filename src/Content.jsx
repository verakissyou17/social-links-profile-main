import avatarImage from "./images/avatar-jessica.jpeg";

function Content() {
  return (
    <header className="header">
      <figure>
        <img src={avatarImage} alt="profile-picture" />
      </figure>
      <h1>Jessica Randall</h1>
      <h2>London, United Kingdom</h2>
      <p>&quot;Front-end developer and avid reader.&quot;</p>
    </header>
  );
}

export default Content;
