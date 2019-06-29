import React, {useEffect, useRef} from 'react';

const Bunny = ({comment}) => {
  const bunnyRef = useRef();
  useEffect(() => {
    bunnyRef.current.outerHtml = `<!-- ${comment} -->`;
    return () => {};
  }, []);
  return <span ref={bunnyRef}
    dangerouslySetInnerHTML={{__html: `<!-- ${comment} -->`}}/>;
};

export default Bunny;
