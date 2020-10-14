import React from 'react'

function Slug(props) {
  return (
    <code>{JSON.stringify(props)}</code>
  )
}

export const getStaticProps = async ({ params }) => {
  return {
    props: { params: params ?? null, hello: 'world' },
    revalidate: 5 * 60, // 5 minutes
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Slug;
