import * as React from "react";
import { useState } from "react";

const Project = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="w-[325px]">
        <button
          type="button"
          className="grid isolate relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:bg-gradient-to-b after:from-transparent after:from-20% after:to-black after:to-90%"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <>
              <p className="sr-only">
                Click me to learn more about the {props.project} project
              </p>
              <img
                src={props.link}
                role="presentation"
                className="col-span-full row-span-full object-fill"
              />
              <p className="col-span-full row-span-full self-end text-center text-xl font-bold my-6 text-white z-10">
                Learn More
              </p>
            </>
          ) : (
            // Shows project info here.
            <p>Hello World</p>
          )}
        </button>
      </article>
    </>
  );
};

export default Project;
