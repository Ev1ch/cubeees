import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './parallelepiped.module.scss';

const getInUnits = (amount: number, unit = 'px') => `${amount}${unit}`;

interface ParallelepipedProps {
  width?: number;
  height?: number;
  length?: number;
  className?: string;
  x?: number;
  y?: number;
  z?: number;
  color?: string;
  border?: string;
  style?: CSSProperties;
  top?: ReactNode;
}

const Parallelepiped = ({
  width = 50,
  length = 50,
  height = 50,
  x,
  y,
  z,
  color,
  border,
  top,
  style,
  className,
}: ParallelepipedProps) => {
  return (
    <div
      className={clsx(styles.parallelepiped, className)}
      style={{
        width: getInUnits(width),
        height: getInUnits(height),
        transform: `${x ? `translateX(${getInUnits(x)}) ` : ''}${
          y ? `translateY(${getInUnits(y)}) ` : ''
        }${z ? `translateZ(${getInUnits(z)})` : ''}`,
        ...style,
      }}
    >
      <div
        className={clsx(
          styles.parallelepiped__side,
          styles.parallelepiped__front,
        )}
        style={{
          transform: `translateZ(${getInUnits(length / 2)})`,
          backgroundColor: color,
          border,
        }}
      ></div>
      <div
        className={clsx(
          styles.parallelepiped__side,
          styles.parallelepiped__left,
        )}
        style={{
          transform: `rotateY(-90deg) translateZ(${getInUnits(width / 2)})`,
          backgroundColor: color,
          border,
        }}
      ></div>
      <div
        className={clsx(
          styles.parallelepiped__side,
          styles.parallelepiped__right,
        )}
        style={{
          transform: `rotateY(90deg) translateZ(${getInUnits(width / 2)})`,
          backgroundColor: color,
          border,
        }}
      ></div>
      <div
        className={clsx(
          styles.parallelepiped__side,
          styles.parallelepiped__back,
        )}
        style={{
          transform: `translateZ(-${getInUnits(length / 2)})`,
          backgroundColor: color,
          border,
        }}
      ></div>
      <div
        className={clsx(
          styles.parallelepiped__side,
          styles.parallelepiped__top,
        )}
        style={{
          transform: `rotateX(90deg) translateZ(${getInUnits(height / 2)})`,
          backgroundColor: color,
          border,
        }}
      >
        {top}
      </div>
      <div
        className={clsx(
          styles.parallelepiped__side,
          styles.parallelepiped__bottom,
        )}
        style={{
          transform: `rotateX(-90deg) translateZ(${getInUnits(height / 2)})`,
          backgroundColor: color,
          border,
        }}
      ></div>
    </div>
  );
};

export default Parallelepiped;
