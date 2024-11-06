import * as React from "react";
import "../styles/styles.css";

const Experience = (props) => {
  return (
    <>
      <article>
        <hgroup>
          <h4 className="text-primary text-xl font-medium leading-8">
            {props.title}
          </h4>
          <p className="text-accent text-sm font-thin">{props.location}</p>
        </hgroup>
      </article>
    </>
  );
};

export default Experience;
