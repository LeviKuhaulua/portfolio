import * as React from "react";
import "../styles/styles.css";

const Section = (props) => {
  return (
    <>
      <section id={props.name} className="flex flex-col gap-4.5 py-5">
        <div
          className="h-[5px] rounded-md border border-[#CED1A1] content-none"
          role="presentation"
        ></div>
        <p className="text-2xl font-medium text-text capitalize">
          {props.name}
          lorem ipsum
        </p>

        {/* TODO: After creating experience and project section, add the children here and style it */}
        {/* {props.children} */}
      </section>
    </>
  );
};

export default Section;
