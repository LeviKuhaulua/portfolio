import * as React from "react";
import "../styles/styles.css";

const Button = (props) => {
  return (
    <>
      {/* Returns a different type of button if download link is present */}
      {props.download ? (
        <a
          href={props.download}
          download={true}
          className="bg-transparent border border-secondary text-text text-sm font-normal text-center capitalize px-4 py-1.5 rounded-md hover:bg-secondary transition-colors duration-[250ms] lg:text-lg"
        >
          {props.name}
        </a>
      ) : (
        // Link to different sections of webpage
        <a
          href={"#" + props.name}
          className="bg-primary capitalize text-center text-background text-sm font-medium px-4 py-1.5 border-0 rounded-md hover:bg-accent transition-colors duration-[250ms] lg:text-lg"
        >
          {props.name}
        </a>
      )}
    </>
  );
};

export default Button;
