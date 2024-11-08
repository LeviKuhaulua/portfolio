import * as React from "react";
import "../styles/styles.css";

const Experience = (props) => {
  return (
    <>
      <article>
        <hgroup className="mb-6">
          <h4 className="text-primary text-sm font-medium leading-8 md:text-xl">
            {props.title}
          </h4>
          <p className="text-accent text-xs font-thin md:text-sm">
            {props.location}
          </p>
        </hgroup>

        <ul className="list-disc list-inside">
          {props.duties
            ? props.duties.split(",").map((value, index) => (
                <li
                  key={index}
                  className="font-extralight text-xs text-pretty md:text-lg"
                >
                  {value}
                </li>
              ))
            : null}
        </ul>
      </article>
    </>
  );
};

export default Experience;
