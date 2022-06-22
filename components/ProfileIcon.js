import React from 'react';
import {Icon} from 'native-base';
import {Path} from 'react-native-svg';

const ProfileIcon = ({color}) => {
  return (
    <Icon viewBox="0 0 30 42" fill="none" size="42px">
      <Path
        d="M3.85203 32.4C4.32536 32.4 4.73203 32.4833 5.07203 32.65C5.4187 32.8167 5.6887 33.0533 5.88203 33.36C6.07536 33.6667 6.17203 34.0367 6.17203 34.47C6.17203 34.8967 6.07536 35.2667 5.88203 35.58C5.6887 35.8867 5.4187 36.1233 5.07203 36.29C4.73203 36.4567 4.32536 36.54 3.85203 36.54H2.38203V39H1.31203V32.4H3.85203ZM3.68203 35.62C4.15536 35.62 4.50203 35.5233 4.72203 35.33C4.9487 35.13 5.06203 34.8433 5.06203 34.47C5.06203 34.09 4.9487 33.8033 4.72203 33.61C4.50203 33.41 4.15536 33.31 3.68203 33.31H2.38203V35.62H3.68203ZM6.93156 39V34H7.84156L7.94156 34.9C8.0749 34.5733 8.27156 34.3267 8.53156 34.16C8.79823 33.9867 9.1249 33.9 9.51156 33.9C9.61156 33.9 9.71156 33.91 9.81156 33.93C9.91156 33.9433 9.9949 33.9667 10.0616 34L9.91156 34.94C9.83823 34.9133 9.7549 34.8933 9.66156 34.88C9.5749 34.86 9.4549 34.85 9.30156 34.85C9.0949 34.85 8.89156 34.9067 8.69156 35.02C8.49156 35.1267 8.3249 35.29 8.19156 35.51C8.0649 35.73 8.00156 36.01 8.00156 36.35V39H6.93156ZM12.6152 33.9C13.1019 33.9 13.5319 34.0033 13.9052 34.21C14.2786 34.4167 14.5686 34.7167 14.7752 35.11C14.9886 35.4967 15.0952 35.96 15.0952 36.5C15.0952 37.04 14.9886 37.5067 14.7752 37.9C14.5686 38.2867 14.2786 38.5833 13.9052 38.79C13.5319 38.9967 13.1019 39.1 12.6152 39.1C12.1286 39.1 11.6986 38.9967 11.3252 38.79C10.9519 38.5833 10.6586 38.2867 10.4452 37.9C10.2319 37.5067 10.1252 37.04 10.1252 36.5C10.1252 35.96 10.2319 35.4967 10.4452 35.11C10.6586 34.7167 10.9519 34.4167 11.3252 34.21C11.6986 34.0033 12.1286 33.9 12.6152 33.9ZM12.6152 34.74C12.3152 34.74 12.0586 34.81 11.8452 34.95C11.6386 35.0833 11.4786 35.28 11.3652 35.54C11.2519 35.8 11.1952 36.12 11.1952 36.5C11.1952 36.8733 11.2519 37.1933 11.3652 37.46C11.4786 37.72 11.6386 37.92 11.8452 38.06C12.0586 38.1933 12.3152 38.26 12.6152 38.26C12.9152 38.26 13.1686 38.1933 13.3752 38.06C13.5819 37.92 13.7419 37.72 13.8552 37.46C13.9686 37.1933 14.0252 36.8733 14.0252 36.5C14.0252 36.12 13.9686 35.8 13.8552 35.54C13.7419 35.28 13.5819 35.0833 13.3752 34.95C13.1686 34.81 12.9152 34.74 12.6152 34.74ZM17.993 31.68C18.1996 31.68 18.3863 31.7033 18.553 31.75C18.7263 31.79 18.8563 31.8467 18.943 31.92L18.743 32.69C18.6696 32.6433 18.5863 32.61 18.493 32.59C18.3996 32.5633 18.293 32.55 18.173 32.55C17.8996 32.55 17.683 32.6133 17.523 32.74C17.3696 32.8667 17.293 33.0733 17.293 33.36V34.09L17.323 34.36V39H16.253V33.28C16.253 33.0267 16.2896 32.8 16.363 32.6C16.443 32.4 16.5596 32.2333 16.713 32.1C16.8663 31.96 17.0496 31.8567 17.263 31.79C17.483 31.7167 17.7263 31.68 17.993 31.68ZM18.913 34V34.84H15.313V34H18.913ZM20.413 33.16C20.1796 33.16 19.9996 33.1033 19.873 32.99C19.753 32.87 19.693 32.7033 19.693 32.49C19.693 32.2767 19.753 32.1133 19.873 32C19.9996 31.8867 20.1796 31.83 20.413 31.83C20.6396 31.83 20.813 31.8867 20.933 32C21.0596 32.1133 21.123 32.2767 21.123 32.49C21.123 32.7033 21.0596 32.87 20.933 32.99C20.813 33.1033 20.6396 33.16 20.413 33.16ZM20.943 34V39H19.873V34H20.943ZM23.1415 31.75V37.6C23.1415 37.8467 23.1848 38.0167 23.2715 38.11C23.3582 38.2033 23.5015 38.25 23.7015 38.25C23.8215 38.25 23.9215 38.2433 24.0015 38.23C24.0882 38.21 24.1948 38.1767 24.3215 38.13L24.2015 38.93C24.0882 38.9833 23.9582 39.0233 23.8115 39.05C23.6648 39.0833 23.5182 39.1 23.3715 39.1C22.9248 39.1 22.5948 38.9867 22.3815 38.76C22.1748 38.5267 22.0715 38.17 22.0715 37.69V31.75H23.1415ZM26.9167 39.1C26.4167 39.1 25.9767 38.9967 25.5967 38.79C25.2167 38.5833 24.9201 38.2867 24.7067 37.9C24.5001 37.5067 24.3967 37.04 24.3967 36.5C24.3967 35.96 24.5001 35.4967 24.7067 35.11C24.9201 34.7167 25.2134 34.4167 25.5867 34.21C25.9601 34.0033 26.3834 33.9 26.8567 33.9C27.3434 33.9 27.7567 34 28.0967 34.2C28.4367 34.4 28.6967 34.6733 28.8767 35.02C29.0567 35.3667 29.1467 35.76 29.1467 36.2C29.1467 36.32 29.1434 36.4333 29.1367 36.54C29.1301 36.6467 29.1201 36.74 29.1067 36.82H25.0867V36H28.6367L28.1067 36.16C28.1067 35.7067 27.9934 35.36 27.7667 35.12C27.5401 34.8733 27.2301 34.75 26.8367 34.75C26.5501 34.75 26.3001 34.8167 26.0867 34.95C25.8734 35.0833 25.7101 35.2833 25.5967 35.55C25.4834 35.81 25.4267 36.13 25.4267 36.51C25.4267 36.8833 25.4867 37.2 25.6067 37.46C25.7267 37.72 25.8967 37.9167 26.1167 38.05C26.3367 38.1833 26.5967 38.25 26.8967 38.25C27.2301 38.25 27.5001 38.1867 27.7067 38.06C27.9134 37.9333 28.0767 37.7567 28.1967 37.53L29.0467 37.93C28.9267 38.17 28.7634 38.38 28.5567 38.56C28.3567 38.7333 28.1167 38.8667 27.8367 38.96C27.5567 39.0533 27.2501 39.1 26.9167 39.1Z"
        fill={color}
      />
      <Path
        d="M5.6 25C5.6 25.359 5.89101 25.65 6.25 25.65C6.60899 25.65 6.9 25.359 6.9 25H5.6ZM23.1 25C23.1 25.359 23.391 25.65 23.75 25.65C24.109 25.65 24.4 25.359 24.4 25H23.1ZM6.9 25V23.75H5.6V25H6.9ZM12.5 18.15H17.5V16.85H12.5V18.15ZM23.1 23.75V25H24.4V23.75H23.1ZM19.35 8.75C19.35 11.1524 17.4024 13.1 15 13.1V14.4C18.1204 14.4 20.65 11.8704 20.65 8.75H19.35ZM15 13.1C12.5976 13.1 10.65 11.1524 10.65 8.75H9.35C9.35 11.8704 11.8796 14.4 15 14.4V13.1ZM10.65 8.75C10.65 6.34756 12.5976 4.4 15 4.4V3.1C11.8796 3.1 9.35 5.62959 9.35 8.75H10.65ZM15 4.4C17.4024 4.4 19.35 6.34756 19.35 8.75H20.65C20.65 5.62959 18.1204 3.1 15 3.1V4.4ZM17.5 18.15C20.5928 18.15 23.1 20.6572 23.1 23.75H24.4C24.4 19.9392 21.3108 16.85 17.5 16.85V18.15ZM6.9 23.75C6.9 20.6572 9.40721 18.15 12.5 18.15V16.85C8.68924 16.85 5.6 19.9392 5.6 23.75H6.9Z"
        fill={color}
      />
    </Icon>
  );
};

export default ProfileIcon;
