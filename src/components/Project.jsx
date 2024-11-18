import * as React from "react";
import { useState } from "react";

/**
 * Check to see what HTML Element triggered the event.
 * @param {Event} evt - user triggered event
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
          // Prevents card from changing state when a link is clicked.
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
            aria-hidden={`${!open}`}
          >
            <h2 className="text-xl font-bold text-center">{props.label}</h2>
            {/* Description */}
            <section tabIndex={!open ? "-1" : "0"}>
              <h3 className="font-medium">Description:</h3>
              <p>{props.description}</p>
            </section>
            {/* Technologies/Stacks */}
            <ul>
              <h4 className="font-medium">Built With:</h4>
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
                    tabIndex={!open ? "-1" : "0"}
                  >
                    View Source Code
                  </a>
                </li>
              ) : null}

              {props.website ? (
                <li>
                  <a
                    href={props.website}
                    className="underline"
                    target="_blank"
                    tabIndex={!open ? "-1" : "0"}
                  >
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
