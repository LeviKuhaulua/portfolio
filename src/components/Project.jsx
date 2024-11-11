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
          className={
            !open
              ? "cursor-pointer w-full h-full grid isolate relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:bg-gradient-to-b after:from-transparent after:from-20% after:to-black after:to-90% "
              : "cursor-pointer w-full h-full grid gap-3 isolate relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:bg-gradient-to-b after:from-black/75 after:from-100% "
          }
          onClick={(evt) => {
            !checkTarget(evt) ? setOpen(!open) : null;
          }}
        >
          {!open ? (
            <>
              <p className="sr-only">
                Click me to learn more about the {props.label} project
              </p>
              <img
                src={props.link}
                role="presentation"
                className="col-span-full row-span-full object-fill"
              />
              <p className="col-span-full row-span-full self-end justify-self-center text-xl font-bold my-6 text-white z-10">
                Learn More
              </p>
            </>
          ) : (
            // Shows project info here.
            <>
              <img
                src={props.link}
                role="presentation"
                className="col-span-full row-span-full object-fill"
              />
              <section className="col-span-full row-span-full my-6 px-3 text-white z-10 flex flex-col gap-4 text-start text-lg text-pretty">
                <p className="text-xl font-bold text-center">{props.label}</p>
                <div>
                  <p>Description:</p>
                  <p>{props.description}</p>
                </div>
                <ul>
                  <p>Built With:</p>
                  <li>{props.frontend}</li>
                  {props.backend ? <li>{props.backend}</li> : null}
                </ul>
                <ul>
                  <li>
                    {/* Github repo link */}
                    <a
                      href={props.github}
                      className="underline"
                      target={"_blank"}
                    >
                      Source Code
                    </a>
                  </li>
                  <li>
                    {/* Website link */}
                    <a
                      href={props.website}
                      className="underline"
                      target={"_blank"}
                    >
                      Preview Site
                    </a>
                  </li>
                </ul>
              </section>
            </>
          )}
        </button>
      </article>
    </>
  );
};

export default Project;
