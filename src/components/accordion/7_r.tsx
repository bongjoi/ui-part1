import { useEffect, useRef, useState } from "react";
import cx from "./cx";
import data from "./data";

const AccordionItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [current, setCurrent] = useState(false);

  const descRef = useRef<HTMLDivElement>(null);

  const toggle = () => setCurrent((prev) => !prev);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.addEventListener("beforematch", toggle);
    }
    return () => {
      if (descRef.current)
        descRef.current.removeEventListener("beforematch", toggle);
    };
  }, [toggle]);

  return (
    <li className={cx("item", "item3", { current })}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      <div
        className={cx("description")}
        ref={descRef}
        HIDDEN={current ? undefined : "until-found"}
      >
        {description}
      </div>
    </li>
  );
};

const Accordion7 = () => {
  return (
    <>
      <h3>
        #7. React
        <sub>여러 개가 펼쳐지는 아코디언 + 검색 가능</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((d) => (
          <AccordionItem {...d} key={d.id} />
        ))}
      </ul>
    </>
  );
};

export default Accordion7;
