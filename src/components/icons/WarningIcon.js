import React from 'react';
import { withTheme } from 'styled-components';

const WarningIcon = withTheme(({ width, height }) => {
  return (
    <>
      <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM11 19.7188C6.18594 19.7188 2.28125 15.8141 2.28125 11C2.28125 6.18594 6.18594 2.28125 11 2.28125C15.8141 2.28125 19.7188 6.18594 19.7188 11C19.7188 15.8141 15.8141 19.7188 11 19.7188Z"
          fill="#FAAD14"
        />
        <path
          d="M9.875 15.125C9.875 15.4234 9.99353 15.7095 10.2045 15.9205C10.4155 16.1315 10.7016 16.25 11 16.25C11.2984 16.25 11.5845 16.1315 11.7955 15.9205C12.0065 15.7095 12.125 15.4234 12.125 15.125C12.125 14.8266 12.0065 14.5405 11.7955 14.3295C11.5845 14.1185 11.2984 14 11 14C10.7016 14 10.4155 14.1185 10.2045 14.3295C9.99353 14.5405 9.875 14.8266 9.875 15.125ZM10.4375 12.5H11.5625C11.6656 12.5 11.75 12.4156 11.75 12.3125V5.9375C11.75 5.83437 11.6656 5.75 11.5625 5.75H10.4375C10.3344 5.75 10.25 5.83437 10.25 5.9375V12.3125C10.25 12.4156 10.3344 12.5 10.4375 12.5Z"
          fill="#FAAD14"
        />
      </svg>
    </>
  );
});

export { WarningIcon };
