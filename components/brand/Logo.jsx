import React from 'react';

const FILES = {
  primary: { ink: 'mydevices-logo.svg', white: 'mydevices-logo-white.svg', blue: 'mydevices-logo-blue.svg' },
  console: { ink: 'mydevices-console-ink.svg', white: 'mydevices-console-white.svg', blue: 'mydevices-console-ink.svg' },
  mark: { ink: 'mydevices-mark-blue.svg', white: 'mydevices-mark-blue.svg', blue: 'mydevices-mark-blue.svg' }
};

/** The myDevices logotype: primary lockup, Console product lockup, or the square blue mark. */
export function Logo({ variant = 'primary', tone = 'ink', height = 28, basePath = '', alt = 'myDevices', style }) {
  return <img src={basePath + 'assets/logo/' + FILES[variant][tone]} alt={alt} style={{ height, width: 'auto', display: 'block', ...style }} />;
}
