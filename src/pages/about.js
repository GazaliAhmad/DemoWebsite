import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <Layout pageTitle="About Me">
        {" "}
        <p>
          This website is created by me, Gazali, to show front end web
          development. I can easily do a website in WordPress. What intrigues me
          about using Gatsby is that I can integrate other CMS like WordPress
          into it.
        </p>
      </Layout>
    </main>
  );
};

export default AboutPage;
