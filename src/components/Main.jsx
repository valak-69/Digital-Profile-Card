export default function Main(){
    const handleClickEmail = () => {
        <a href="mailto:amileleft@gmail.com"></a>
      };
      const handleClickLinked = () => {
        window.open("https://www.linkedin.com/in/valak70/");
      };
    return(
    <div><div className="mid">
    <div className="main-body">
        <div className="div-name"><span className="name">Aryan Agrahari</span></div>
        <div className="div-sub"><span className="sub">Competetive Programmer</span></div>
        <div className="div-web"><a className="web" href="https://github.com/valak-69?tab=repositories">aryanagrahari.website</a></div>
        <div className="div-links">
            <button className="email button" onClick={handleClickEmail}>Email</button>
            <button className="linked button" onClick={handleClickLinked}>LinkedIn</button>
        </div>
    </div>
    </div>
    <div className="div-content">
    <div className="content">
        <h3>About</h3> 
        <p>I am a competetive programmer and did a little of frontend developement with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>   
        <h3>Skills</h3>
        <p>HTML, CSS, Javascript, JQuery, React, Node, C++, JAVA, Python</p>
        <h3>Intrests</h3>
        <p>Food expert. Electronics scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Hip Hop. Coffee fanatic.</p>
    </div></div></div>
    )
}