import React from 'react';
import {Icon} from 'native-base';
import {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const HomeIcon = ({color}) => {
  return (
    <Icon viewBox="0 0 30 42" fill="none" size="42px">
      <Path
        d="M7.85777 32.4V39H6.77777V32.4H7.85777ZM3.51777 32.4V39H2.44777V32.4H3.51777ZM7.31777 35.2V36.12H2.98777V35.2H7.31777ZM11.2627 33.9C11.7494 33.9 12.1794 34.0033 12.5527 34.21C12.926 34.4167 13.216 34.7167 13.4227 35.11C13.636 35.4967 13.7427 35.96 13.7427 36.5C13.7427 37.04 13.636 37.5067 13.4227 37.9C13.216 38.2867 12.926 38.5833 12.5527 38.79C12.1794 38.9967 11.7494 39.1 11.2627 39.1C10.776 39.1 10.346 38.9967 9.9727 38.79C9.59936 38.5833 9.30603 38.2867 9.0927 37.9C8.87936 37.5067 8.7727 37.04 8.7727 36.5C8.7727 35.96 8.87936 35.4967 9.0927 35.11C9.30603 34.7167 9.59936 34.4167 9.9727 34.21C10.346 34.0033 10.776 33.9 11.2627 33.9ZM11.2627 34.74C10.9627 34.74 10.706 34.81 10.4927 34.95C10.286 35.0833 10.126 35.28 10.0127 35.54C9.89936 35.8 9.8427 36.12 9.8427 36.5C9.8427 36.8733 9.89936 37.1933 10.0127 37.46C10.126 37.72 10.286 37.92 10.4927 38.06C10.706 38.1933 10.9627 38.26 11.2627 38.26C11.5627 38.26 11.816 38.1933 12.0227 38.06C12.2294 37.92 12.3894 37.72 12.5027 37.46C12.616 37.1933 12.6727 36.8733 12.6727 36.5C12.6727 36.12 12.616 35.8 12.5027 35.54C12.3894 35.28 12.2294 35.0833 12.0227 34.95C11.816 34.81 11.5627 34.74 11.2627 34.74ZM14.5888 39V34H15.5388L15.5888 34.84C15.7621 34.52 15.9921 34.2833 16.2788 34.13C16.5721 33.9767 16.8821 33.9 17.2088 33.9C17.5688 33.9 17.8988 33.9833 18.1988 34.15C18.5055 34.31 18.7355 34.5533 18.8888 34.88C18.9955 34.66 19.1421 34.4767 19.3288 34.33C19.5155 34.1833 19.7221 34.0767 19.9488 34.01C20.1755 33.9367 20.3988 33.9 20.6188 33.9C20.9388 33.9 21.2388 33.9667 21.5188 34.1C21.7988 34.2333 22.0255 34.4367 22.1988 34.71C22.3721 34.9833 22.4588 35.3333 22.4588 35.76V39H21.3888V35.93C21.3888 35.5233 21.2921 35.23 21.0988 35.05C20.9055 34.87 20.6588 34.78 20.3588 34.78C20.1255 34.78 19.9088 34.8367 19.7088 34.95C19.5155 35.0633 19.3588 35.2333 19.2388 35.46C19.1188 35.68 19.0588 35.9533 19.0588 36.28V39H17.9888V35.93C17.9888 35.5233 17.8921 35.23 17.6988 35.05C17.5055 34.87 17.2588 34.78 16.9588 34.78C16.7588 34.78 16.5588 34.8333 16.3588 34.94C16.1588 35.0467 15.9921 35.2133 15.8588 35.44C15.7255 35.6667 15.6588 35.9667 15.6588 36.34V39H14.5888ZM25.781 39.1C25.281 39.1 24.841 38.9967 24.461 38.79C24.081 38.5833 23.7843 38.2867 23.571 37.9C23.3643 37.5067 23.261 37.04 23.261 36.5C23.261 35.96 23.3643 35.4967 23.571 35.11C23.7843 34.7167 24.0776 34.4167 24.451 34.21C24.8243 34.0033 25.2476 33.9 25.721 33.9C26.2076 33.9 26.621 34 26.961 34.2C27.301 34.4 27.561 34.6733 27.741 35.02C27.921 35.3667 28.011 35.76 28.011 36.2C28.011 36.32 28.0076 36.4333 28.001 36.54C27.9943 36.6467 27.9843 36.74 27.971 36.82H23.951V36H27.501L26.971 36.16C26.971 35.7067 26.8576 35.36 26.631 35.12C26.4043 34.8733 26.0943 34.75 25.701 34.75C25.4143 34.75 25.1643 34.8167 24.951 34.95C24.7376 35.0833 24.5743 35.2833 24.461 35.55C24.3476 35.81 24.291 36.13 24.291 36.51C24.291 36.8833 24.351 37.2 24.471 37.46C24.591 37.72 24.761 37.9167 24.981 38.05C25.201 38.1833 25.461 38.25 25.761 38.25C26.0943 38.25 26.3643 38.1867 26.571 38.06C26.7776 37.9333 26.941 37.7567 27.061 37.53L27.911 37.93C27.791 38.17 27.6276 38.38 27.421 38.56C27.221 38.7333 26.981 38.8667 26.701 38.96C26.421 39.0533 26.1143 39.1 25.781 39.1Z"
        fill={color}
      />
      <Path
        d="M21.0014 25H8.99862C8.46807 25 7.95924 24.784 7.58409 24.3996C7.20893 24.0152 6.99816 23.4938 6.99816 22.9501V14.7507H5.66453C5.53097 14.7503 5.40062 14.7087 5.29038 14.6314C5.18014 14.5542 5.09508 14.4448 5.04622 14.3174C4.99736 14.19 4.98696 14.0506 5.01635 13.9171C5.04575 13.7836 5.11359 13.6622 5.21109 13.5686L13.6664 5.54688C14.0363 5.19534 14.5222 5 15.0267 5C15.5312 5 16.0171 5.19534 16.387 5.54688L24.7889 13.5686C24.8864 13.6622 24.9543 13.7836 24.9836 13.9171C25.013 14.0506 25.0026 14.19 24.9538 14.3174C24.9049 14.4448 24.8199 14.5542 24.7096 14.6314C24.5994 14.7087 24.469 14.7503 24.3355 14.7507H23.0018V22.9501C23.0018 23.4938 22.7911 24.0152 22.4159 24.3996C22.0408 24.784 21.5319 25 21.0014 25ZM7.36492 13.3842H7.66498C7.84184 13.3842 8.01144 13.4561 8.1365 13.5843C8.26155 13.7124 8.3318 13.8862 8.3318 14.0674V22.9501C8.3318 23.1314 8.40206 23.3052 8.52711 23.4333C8.65216 23.5614 8.82177 23.6334 8.99862 23.6334H21.0014C21.1782 23.6334 21.3478 23.5614 21.4729 23.4333C21.5979 23.3052 21.6682 23.1314 21.6682 22.9501V14.0674C21.6682 13.8862 21.7384 13.7124 21.8635 13.5843C21.9886 13.4561 22.1582 13.3842 22.335 13.3842H22.6351L15.4534 6.55131C15.3301 6.43413 15.1682 6.36901 15 6.36901C14.8318 6.36901 14.6699 6.43413 14.5466 6.55131L7.36492 13.3842Z"
        fill={color}
      />
    </Icon>
  );
};

export default HomeIcon;
