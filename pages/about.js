import Link from "next/link";

const About = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>This is about</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas
        laborum inventore assumenda tenetur totam cupiditate fugit impedit
        asperiores culpa!
      </p>
      <img src="/static/JavaScript-Logo.png" alt="" height="200px" />
    </div>
  );
};

export default About;
