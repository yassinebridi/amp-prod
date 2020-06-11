import {useAmp} from 'next/amp'

export const config = {
  amp: 'hybrid',
}

const IndexPage = () => {
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

export default IndexPage
