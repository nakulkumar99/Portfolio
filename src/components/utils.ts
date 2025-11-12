interface Point {
  idx: number;
  position: [number, number, number];
  color: string;
  scale?: number;
}

function generatePoints(count: number, radius: number, yOffset = 0, randomness = 0): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const randomOffset = randomness * (Math.random() - 0.5);
    const x = (Math.cos(angle) * radius) + (randomness ? randomOffset : 0);
    const y = (Math.sin(angle) * radius) + (randomness ? randomOffset : 0);
    const z = randomness ? randomOffset : 0;
    points.push({
      idx: i,
      position: [x, y + yOffset, z],
      color: i % 2 === 0 ? "#8b5cf6" : "#6366f1",
      scale: randomness ? 0.1 + Math.random() * 0.5 : 0.1
    });
  }
  return points;
}

function generateRandomPoints(count: number, bounds: number): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * bounds;
    const y = (Math.random() - 0.5) * bounds;
    const z = (Math.random() - 0.5) * bounds;
    points.push({
      idx: i,
      position: [x, y, z],
      color: Math.random() > 0.5 ? "#8b5cf6" : "#6366f1",
      scale: 0.05 + Math.random() * 0.15
    });
  }
  return points;
}

export const pointsInner = generatePoints(40, 4);
export const pointsMiddle = generatePoints(60, 6, 0, 0.5);
export const pointsOuter = generatePoints(80, 8, 0, 1);
export const pointsScattered = generateRandomPoints(300, 10);