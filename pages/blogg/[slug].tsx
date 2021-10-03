import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import client from "../../client";

const Post = (): JSX.Element => {
  const router = useRouter();

  return (
    <article>
      <h1>{router.query.slug}</h1>
    </article>
  );
};

Post.getStaticProps = async function (context): Promise<any> {
  const { slug = "" } = context.query;

  return await client.fetch(`
      *[_type == "post" && slug.current == $slug][0]
    `, { slug });
};

export const getStaticProps: GetStaticProps = async context => {
  // ...
};

export default Post;
