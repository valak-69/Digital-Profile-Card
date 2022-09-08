
export default function Footer(){
    const handleClickInsta = () => {
        window.open("https://www.instagram.com/valak70_1/");
      };
      const handleClickCode = () => {
        window.open("https://codeforces.com/profile/valak_70-1");
      };
      const handleClickChef = () => {
        window.open("https://www.codechef.com/users/valak_69");
      };
      const handleClickGithub = () => {
        window.open("https://github.com/valak-69");
      };
      const handleClickTwitter = () => {
        window.open("https://zoro.to");
      };
    return(
        <div className="footer">
            <nav>
                <button className="insta btn" onClick={handleClickInsta}></button>
                <button className="twitter btn" onClick={handleClickTwitter}></button>
                <button className="github btn" onClick={handleClickGithub}></button>
                <button className="chef btn" onClick={handleClickChef}></button>
                <button className="code btn" onClick={handleClickCode}></button>
            </nav>
        </div>
    )
}