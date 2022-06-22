import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import Parallelepiped from './components/parallelepiped';
import styles from './loader.module.scss';

interface ParallelepipedOptions {
  number: number;
  x: number;
  z: number;
  size: number;
}

const parallelepipeds: ParallelepipedOptions[] = [
  { number: 1, size: 50, z: -50, x: 0 },
  { number: 2, size: 50, z: -50, x: 50 },
  { number: 3, size: 50, z: -50, x: 100 },
  { number: 4, size: 50, z: 0, x: 0 },
  { number: 5, size: 50, z: 0, x: 50 },
  { number: 6, size: 50, z: 0, x: 100 },
  { number: 7, size: 50, z: 50, x: 0 },
  { number: 8, size: 50, z: 50, x: 50 },
  { number: 9, size: 50, z: 50, x: 100 },
];

const Loader = () => {
  const interval = useRef<ReturnType<typeof setTimeout>>();
  const [isPlaneVisible, setIsPlaneVisible] = useState(true);

  useEffect(() => {
    interval.current = setTimeout(
      () => {
        setIsPlaneVisible((prevState) => !prevState);
      },
      isPlaneVisible ? (parallelepipeds.length + 1.1) * 1000 : 100,
    );

    return () => {
      clearTimeout(interval.current);
    };
  }, [isPlaneVisible]);

  return (
    <div className={styles.loader}>
      <div className={styles.loader__container}>
        <div
          className={clsx(
            styles.loader__plane,
            isPlaneVisible && styles.loader__plane_visible,
          )}
        >
          {parallelepipeds.map(({ number, size, x, z }) => (
            <Parallelepiped
              width={size}
              height={size}
              length={size}
              top={
                <div className={styles.loader__number}>
                  <span>{number}</span>
                </div>
              }
              color="blue"
              className={styles.loader__cube}
              style={
                {
                  '--x': `${x}px`,
                  '--z': `${z}px`,
                  '--delay': `${number * 1}s`,
                } as CSSProperties
              }
              key={number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
