import { Section } from "../Media";

const sections: Section[] = [
  {
    sectionName: "Section 1",
    startTime: 0,
    endTime: 400,
    chapters: [
      {
        chapterName: "Proin dui neque",
        startTime: 0,
        endTime: 200,
        paragraphs: [
          ["Placerat iaculis", 11, 50],
          ["Nullam a nibh", 51, 100],
          ["Varius elit", 125, 180],
        ],
      },
      {
        chapterName: "Efficitur sit amet",
        startTime: 201,
        endTime: 399,
        paragraphs: [
          ["Venenatis leo", 201, 220],
          ["Curabitur porta", 240, 300],
          ["Quam a diam", 304, 380],
        ],
      },
    ],
  },
  {
    sectionName: "Section 2",
    startTime: 401,
    endTime: 860,
    chapters: [
      {
        chapterName: "Amet tellus vel",
        startTime: 401,
        endTime: 502,
        paragraphs: [
          ["Lacinia vestibulum", 403, 420],
          ["Suspendisse sollicitudin", 420, 430],
          ["Eget arcu", 440, 450],
          ["Vel convalliss", 450, 460],
          ["Integer feugiat", 460, 470],
          ["Sodales enim", 471, 488],
        ],
      },
      {
        chapterName: "Feugiat faucibus",
        startTime: 503,
        endTime: 860,
        paragraphs: [
          ["Sed fermentum", 550, 603],
          ["Etiam in feugiat", 700, 789],
        ],
      },
    ],
  },
];

const videoStructure = {
  title: "Elephants dream",
  sections,
};

export default videoStructure;
