// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout pageTitle="Home Page">
        <p>
          I'm creating this website by using Gatsby and ReactJS. It's still a
          work in progress. Besides this I have a Java Spring Boot assessment to
          complete. As with anything new, one must learn the methods and syntax.
          Getting back to programming in Java. Did you hear the gears in my head
          shifting hard. The result is this:
        </p>
        <StaticImage
          alt="Cat tired out dooing coding"
          src="../images/cat_programmer.jpg"
        />
      </Layout>
    </main>
  );
};

// Step 3: Export your component
export default IndexPage;
