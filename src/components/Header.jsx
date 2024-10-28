import * as React from "react";
import "../styles/styles.css";

const Header = () => {
  return (
    <>
      <header className="w-screen flex flex-col justify-center items-center gap-4 py-4 md:flex-row md:justify-start md:items-start md:px-4 md:gap-8">
        <section className="space-y-5">
          <h1 className="text-2xl font-medium">Levi Kuhaulua</h1>
          <ul className="flex flex-row gap-8 justify-center items-center md:justify-start">
            <li>
              <a href="https://www.github.com/LeviKuhaulua" target="_blank">
                <p class="sr-only">Take me to my Github page</p>
                {/* Github icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="scale-125"
                >
                  <g clip-path="url(#clip0_1696_1313)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0083 0C4.47396 0 0 4.50694 0 10.0826C0 14.5396 2.86662 18.3123 6.84338 19.6476C7.34058 19.748 7.5227 19.4306 7.5227 19.1637C7.5227 18.93 7.50631 18.1288 7.50631 17.2939C4.72225 17.895 4.14249 16.092 4.14249 16.092C3.69508 14.9235 3.03215 14.6232 3.03215 14.6232C2.12092 14.0055 3.09852 14.0055 3.09852 14.0055C4.1093 14.0723 4.63969 15.0405 4.63969 15.0405C5.53432 16.5761 6.97592 16.1422 7.55588 15.8751C7.63865 15.224 7.90394 14.7733 8.18563 14.523C5.96514 14.2893 3.62891 13.4213 3.62891 9.54836C3.62891 8.44662 4.02634 7.54523 4.65608 6.8442C4.55672 6.59386 4.20866 5.5587 4.75564 4.17322C4.75564 4.17322 5.60069 3.90608 7.5061 5.20818C8.32188 4.98747 9.16317 4.8752 10.0083 4.87426C10.8533 4.87426 11.7148 4.99123 12.5102 5.20818C14.4159 3.90608 15.2609 4.17322 15.2609 4.17322C15.8079 5.5587 15.4596 6.59386 15.3603 6.8442C16.0066 7.54523 16.3876 8.44662 16.3876 9.54836C16.3876 13.4213 14.0514 14.2725 11.8143 14.523C12.179 14.8401 12.4936 15.441 12.4936 16.3926C12.4936 17.7446 12.4773 18.8298 12.4773 19.1635C12.4773 19.4306 12.6596 19.748 13.1566 19.6478C17.1333 18.3121 20 14.5396 20 10.0826C20.0163 4.50694 15.526 0 10.0083 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1696_1313">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/levi-kuhaulua/"
                target="_blank"
              >
                <p class="sr-only">Take me to my LinkedIn Page</p>
                {/* LinkedIn Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="scale-125"
                >
                  <g clip-path="url(#clip0_1696_1277)">
                    <path
                      d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1696_1277">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>

            <li>
              <a href="mailto:levi.kuhaulua@outlook.com">
                <p className="sr-only">Email me a message</p>
                {/* Mail Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  className="scale-125"
                >
                  <path
                    d="M0.00366211 2.512L9.99991 7.84267L19.9962 2.512C19.9592 1.83259 19.68 1.19398 19.2159 0.72697C18.7519 0.259954 18.1379 -0.00012478 17.4999 4.49112e-08H2.49991C1.86189 -0.00012478 1.24797 0.259954 0.783884 0.72697C0.319797 1.19398 0.0406672 1.83259 0.00366211 2.512Z"
                    fill="white"
                  />
                  <path
                    d="M20 5.49072L10 10.8241L0 5.49072V13.3334C0 14.0406 0.263392 14.7189 0.732233 15.219C1.20107 15.7191 1.83696 16.0001 2.5 16.0001H17.5C18.163 16.0001 18.7989 15.7191 19.2678 15.219C19.7366 14.7189 20 14.0406 20 13.3334V5.49072Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </section>
        <p className="text-gray-300/80 text-xs font-extralight text-center md:text-start md:text-pretty md:text-sm md:font-extralight">
          I'm a student at UH Mānoa studying Computer Science. I am passionate
          about web development and currently learning the technologies
          developers use to create websites.{" "}
        </p>
      </header>
    </>
  );
};

export default Header;
