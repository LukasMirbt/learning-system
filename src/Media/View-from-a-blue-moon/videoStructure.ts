import { Section } from "../Media";

const sections: Section[] = [
  {
    sectionName: "Section 1",
    startTime: 0,
    endTime: 400,
    chapters: [
      {
        chapterName: "Lorem ipsum",
        startTime: 0,
        endTime: 200,
        paragraphs: [
          ["Curabitur at", 11, 50],
          ["Lectus massa", 51, 100],
          ["Sed accumsan", 125, 180],
        ],
      },
      {
        chapterName: "Dolor sit amet",
        startTime: 201,
        endTime: 399,
        paragraphs: [
          ["Posuere massa", 201, 220],
          ["Vel dictum", 240, 300],
          ["Ut a mi id", 304, 380],
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
        chapterName: "Consectetur",
        startTime: 401,
        endTime: 502,
        paragraphs: [
          ["Elit venenatis", 403, 420],
          ["Accumsan eu", 420, 430],
          ["Eu orci", 440, 450],
          ["Aliquam vel", 450, 460],
          ["Sem consectetur", 460, 470],
          ["Porttitor lorem sed", 471, 488],
        ],
      },
      {
        chapterName: "Adipiscing elit",
        startTime: 503,
        endTime: 860,
        paragraphs: [
          ["Tristique purus", 550, 603],
          ["Ut euismod", 700, 789],
        ],
      },
    ],
  },
];

const videoStructure = {
  title: "View from a blue moon",
  sections,
};

export default videoStructure;
