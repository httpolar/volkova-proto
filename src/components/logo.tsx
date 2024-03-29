import { ComponentPropsWithRef, FC } from "react";

const BigLetter: FC<ComponentPropsWithRef<"svg">> = ({
  width = "25",
  height = "23",
  viewBox = "0 0 25 23",
  fill = "none",
  xmlns = "http://www.w3.org/2000/svg",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    xmlns={xmlns}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.7344 22.6562C7.27604 22.6562 4.61979 21.724 2.76562 19.8594C0.921875 17.9948 0 15.1458 0 11.3125C0 7.46875 0.963542 4.625 2.89062 2.78125C4.82812 0.927083 7.72917 0 11.5938 0H15.0781C17.3802 0 19.4531 0.552083 21.2969 1.65625C23.151 2.75 24.5781 4.88542 24.5781 6.53125C24.5781 7.14583 24.6615 8.26042 24.2969 8.53125C23.9323 8.79167 20.1406 8.53125 19.7969 8.53125C18.901 8.53125 20 6.97396 19.4688 5.95312C18.9375 4.93229 16.625 4.42188 14.5312 4.42188H11.75C9.46875 4.42188 7.92188 4.91146 7.10938 5.89062C6.29688 6.86979 5.89062 8.67188 5.89062 11.2969C5.89062 13.9219 6.25521 15.7396 6.98438 16.75C7.71354 17.75 9.01562 18.25 10.8906 18.25H14.0938C15.7708 18.25 16.9688 17.9323 17.6875 17.2969C18.4062 16.651 18.776 15.7292 18.7969 14.5312H15.2656C14.8594 14.5312 8.08854 14.3125 7.79688 14.0312C7.51562 13.7396 7.29688 13.4375 7.29688 13.0312V12.0312C7.29688 11.625 7.51562 11.3125 7.79688 11.0312C8.08854 10.7396 14.8594 10.375 15.2656 10.375H23.1094C23.5156 10.375 23.8594 10.5208 24.1406 10.8125C24.4323 11.0938 24.5781 11.4375 24.5781 11.8438V13.5781C24.5781 16.4948 23.7031 18.7396 21.9531 20.3125C20.2031 21.875 17.6354 22.6562 14.25 22.6562H10.7344Z"
    />
  </svg>
);

type LogoProps = {
  altVer?: boolean;
};

export const Logo: FC<LogoProps> = ({ altVer }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center user-select-none">
      <span className="logo-short">
        <BigLetter />
      </span>
      <span
        style={{
          fontSize: "1.3rem",
          color: altVer === true ? "#4775B1" : "white",
        }}
        className="logo-full fw-bold"
      >
        LNRent
      </span>
    </div>
  );
};
