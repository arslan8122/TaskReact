import React from "react";

interface IElement {
  label: string;
  renderCount: React.MutableRefObject<number>;
}

const Element = ({ label, renderCount }: IElement) => {
  return (
    <div>
      {label} | renders: {renderCount.current}
    </div>
  );
};

// export default Element;
export default React.memo(Element);
