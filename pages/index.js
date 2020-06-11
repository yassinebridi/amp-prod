import {useAmp} from 'next/amp'

export const config = {
  amp: 'hybrid',
}

const IndexPage = ({variable}) => {
  const isAmp = useAmp()

  return (
    <>
      {isAmp ? (
        <div>amp</div>
      ) : (
          <div>non-amp</div>
        )}
    </>
  );
}

export const getStaticProps = async () => {
  const variable = "a variable prop"
  return {
    props: {variable},
  };
};

export default IndexPage
