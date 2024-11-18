import * as React from "react";
import "../styles/styles.css";

const Section = (props) => {
  return (
    <>
      <section
        id={props.name}
        className="flex flex-col gap-7 py-5 px-4 md:px-7 md:w-fit"
      >
        <div
          className="h-[5px] rounded-md border border-[#CED1A1] content-none"
          role="presentation"
        ></div>
        <p className="text-2xl font-medium text-text capitalize">
          {props.name}
        </p>

        {/* Child Components */}

        {props.sidescroll ? (
          <section className="grid grid-flow-col gap-3 overflow-x-auto snap-x snap-mandatory *:snap-always *:snap-center md:gap-5 lg:max-xl:grid-flow-row md:max-xl:grid-cols-2">
            {props.children}
          </section>
        ) : (
          <section>{props.children}</section>
        )}
      </section>
    </>
  );
};

export default Section;
