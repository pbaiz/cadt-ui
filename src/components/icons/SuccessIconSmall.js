import React from 'react';
import { withTheme } from 'styled-components';
import theme from '../../theme';

const SuccessIconSmall = withTheme(({ width, height }) => {
  return (
    <>
      <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM10.0234 4.71406L6.73281 9.27656C6.68682 9.34076 6.62619 9.39306 6.55595 9.42914C6.48571 9.46523 6.40787 9.48405 6.32891 9.48405C6.24994 9.48405 6.17211 9.46523 6.10186 9.42914C6.03162 9.39306 5.97099 9.34076 5.925 9.27656L3.97656 6.57656C3.91719 6.49375 3.97656 6.37813 4.07812 6.37813H4.81094C4.97031 6.37813 5.12187 6.45469 5.21562 6.58594L6.32812 8.12969L8.78438 4.72344C8.87813 4.59375 9.02812 4.51562 9.18906 4.51562H9.92188C10.0234 4.51562 10.0828 4.63125 10.0234 4.71406Z"
          fill={theme.colors.default.status.ok.primary}
        />
      </svg>
    </>
  );
});

export { SuccessIconSmall };