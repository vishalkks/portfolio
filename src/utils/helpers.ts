import { createNoise2D } from "simplex-noise";

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  noiseOffsetX: number;
  noiseOffsetY: number;
}

export const createPoints = (): Point[] => {
  const points: Point[] = [];
  const numPoints = 6;
  const angleStep = (Math.PI * 2) / numPoints;
  const rad = 75;

  for (let i = 1; i <= numPoints; i++) {
    const theta = i * angleStep;
    const x = 100 + Math.cos(theta) * rad;
    const y = 100 + Math.sin(theta) * rad;

    points.push({
      x: x,
      y: y,
      originX: x,
      originY: y,
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000,
    });
  }

  return points;
};

export const map = (
  n: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number
): number => {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
};

export const noise = (x: number, y: number): number => {
  const noiseGenerator = createNoise2D();
  return noiseGenerator(x, y);
};
