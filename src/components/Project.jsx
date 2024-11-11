import * as React from "react";
import { useState } from "react";

/**
 * Check to see what HTML Element triggered an event.
 * @param {Event} evt - returns user triggered event
 * @returns the element that triggered the event.
 */
function checkTarget(evt) {
  return evt.target.tagName == "LI" || evt.target.tagName == "A";
}

const Project = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="w-[325px] h-[425px]">
        <button
          type="button"
          className="grid isolate gap-3 overflow-hidden"
          onClick={(evt) => (!checkTarget(evt) ? setOpen(!open) : null)}
          aria-label={`Click me to learn more about the ${props.label} project`}
        >
          <img
            src={props.link}
            role="presentation"
            className="col-span-full row-span-full object-fill"
          />

          <section
            className="col-span-full row-span-full w-full h-full px-3 py-6 flex flex-col gap-4 text-start text-lg text-pretty bg-gradient-to-b from-black/75 to-black/60 transition-transform duration-500 ease-in-out motion-reduce:transition-none motion-reduce:duration-0"
            style={
              !open
                ? { transform: "translateY(83%)" }
                : { transform: "translateY(0)" }
            }
            aria-hidden={!open}
          >
            <h2 className="text-xl font-bold text-center">{props.label}</h2>
            {/* Description */}
            <div>
              <p className="font-medium">Description:</p>
              <p>{props.description}</p>
            </div>
            {/* Technologies/Stacks */}
            <ul>
              <p className="font-medium">Built With:</p>
              <li>{props.frontend}</li>
              <li>{props.backend}</li>
            </ul>
            {/* Links  */}
            <ul className="space-y-2 w-max max-w-full">
              {props.github ? (
                <li>
                  <a
                    href={props.github}
                    className="underline"
                    target={"_blank"}
                  >
                    View Source Code
                  </a>
                </li>
              ) : null}

              {props.website ? (
                <li>
                  <a href={props.website} className="underline" target="_blank">
                    Preview Site
                  </a>
                </li>
              ) : null}
            </ul>
          </section>
        </button>
      </article>
    </>
  );
};

export default Project;
