// AddImgIcon.jsx
import React from "react";

const AddImage = ({ color = "currentColor", size = 120 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
  >
    <path
      d="M105 55V65C105 83.855 105 93.285 99.14 99.14C93.28 104.995 83.855 105 65 105H55C36.145 105 26.715 105 20.86 99.14C15.005 93.28 15 83.855 15 65V55C15 36.145 15 26.715 20.86 20.86C26.72 15.005 36.145 15 55 15H60"
      stroke={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M94.99 71.45L92.015 68.48L91.965 68.43C91.62 68.085 91.395 67.855 91.195 67.68C89.7359 66.3368 87.9783 65.3601 86.0671 64.8304C84.156 64.3008 82.1463 64.2335 80.204 64.6341C78.2617 65.0346 76.4426 65.8916 74.897 67.1341C73.3514 68.3767 72.1235 69.9691 71.315 71.78L71.28 71.845L71.08 72.245C70.8883 72.5889 70.618 72.8827 70.2912 73.1024C69.9645 73.3222 69.5904 73.4616 69.1995 73.5093C68.8087 73.5571 68.4121 73.5118 68.042 73.3773C67.6719 73.2427 67.3389 73.0226 67.07 72.735L66.78 72.4L41.9 43.37C41.4683 42.8661 40.8542 42.5543 40.1927 42.5032C39.5311 42.4521 38.8764 42.6658 38.3725 43.0975C37.8686 43.5291 37.5568 44.1433 37.5057 44.8048C37.4546 45.4663 37.6683 46.1211 38.1 46.625L62.985 75.655L63.02 75.695C63.1733 75.8816 63.3067 76.035 63.42 76.155C64.2274 77.0175 65.2271 77.6772 66.3378 78.0801C67.4485 78.483 68.6386 78.6178 69.8113 78.4735C70.9839 78.3293 72.1059 77.91 73.0858 77.2499C74.0657 76.5898 74.8757 75.7075 75.45 74.675L75.73 74.13L75.755 74.08C76.015 73.56 76.105 73.375 76.18 73.245C76.7302 72.2525 77.4985 71.3979 78.4269 70.7454C79.3553 70.0929 80.4197 69.6596 81.5399 69.4781C82.6601 69.2966 83.8068 69.3717 84.8938 69.6977C85.9807 70.0236 86.9795 70.592 87.815 71.36L88.48 72.015L94.88 78.415C94.945 76.365 94.975 74.06 94.99 71.45Z"
      fill={color}
    />
    <path
      d="M105 15V12.5H107.5V15H105ZM81.56 36.95C81.3061 37.1735 81.0096 37.3432 80.6882 37.4488C80.3669 37.5543 80.0275 37.5936 79.6905 37.5642C79.3536 37.5348 79.0261 37.4373 78.7279 37.2776C78.4297 37.118 78.167 36.8995 77.9558 36.6354C77.7445 36.3713 77.589 36.067 77.4987 35.7411C77.4084 35.4151 77.3852 35.0742 77.4304 34.739C77.4757 34.4039 77.5885 34.0813 77.762 33.791C77.9356 33.5007 78.1662 33.2486 78.44 33.05L81.56 36.95ZM102.5 40V15H107.5V40H102.5ZM105 17.5H80V12.5H105V17.5ZM106.56 16.95L81.56 36.95L78.44 33.05L103.44 13.05L106.56 16.95Z"
      fill={color}
    />
  </svg>
);

export default AddImage;