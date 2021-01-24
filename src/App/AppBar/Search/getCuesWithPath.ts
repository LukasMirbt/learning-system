type NonEmptyArray<T> = [T, ...T[]];

type SubheadingsType = {
  subheading: [subheadingName: string, startTime: number, endTime: number];
  paragraphs: [paragraphName: string, startTime: number, endTime: number][];
}[];

interface Concept {
  id: number;
  conceptName: string;
  startTime: number;
  endTime: number;
  conceptHeadings: NonEmptyArray<{
    heading: string;
    startTime: number;
    endTime: number;
    subheadings: SubheadingsType;
    questions: [questionName: string, startTime: number, endTime: number][];
  }>;
}

const nestedHeadings: Concept[] = [
  {
    id: 0,
    conceptName: "Lorem ipsum dolor",
    startTime: 5,
    endTime: 860,
    conceptHeadings: [
      {
        heading: "Test 123",
        startTime: 5,
        endTime: 400,
        subheadings: [
          {
            subheading: ["Hello", 10, 200],
            paragraphs: [
              ["Uno", 11, 50],
              ["Dos", 51, 100],
              ["Tres", 125, 180],
            ],
          },
          {
            subheading: ["Another test", 201, 399],
            paragraphs: [
              ["Cuatro", 201, 220],
              ["Cinco", 240, 300],
              ["Seis", 304, 380],
            ],
          },
        ],
        questions: [
          ["What is love?", 100, 125],
          ["Baby, don't hurt me consectetur?", 200, 299],
          ["No more?", 334, 361],
        ],
      },
      {
        heading: "Tit amet",
        startTime: 401,
        endTime: 860,
        subheadings: [
          {
            subheading: ["In voluptate velit", 402, 502],
            paragraphs: [
              ["One", 403, 420],
              ["Another one", 420, 430],
              ["A third one", 440, 450],
              ["Fourth", 450, 460],
              ["The fifth", 460, 470],
              ["And the sixth as well", 471, 488],
            ],
          },
          {
            subheading: ["Esse cillum dolore eu", 503, 860],
            paragraphs: [
              ["Ut enim ad", 550, 603],
              ["Minima veniam", 700, 789],
            ],
          },
        ],
        questions: [
          ["What is love2?", 444, 488],
          ["Baby, don't hurt me consectetur2?", 512, 533],
          ["No more2?", 714, 799],
        ],
      },
    ],
  },
  {
    id: 1,
    conceptName: "Ted do",
    startTime: 861,
    endTime: 1730,
    conceptHeadings: [
      {
        heading: "Eiusmod tempor",
        startTime: 861,
        endTime: 1430,
        subheadings: [],
        questions: [
          ["What is love3?", 890, 1000],
          ["Baby, don't hurt me consectetur3?", 1001, 1111],
        ],
      },
      {
        heading: "Something something",
        startTime: 1431,
        endTime: 1730,
        subheadings: [
          {
            subheading: ["Dark side", 1431, 1600],
            paragraphs: [],
          },
          {
            subheading: ["Jedi side", 1601, 1730],
            paragraphs: [],
          },
        ],
        questions: [
          ["What is love4?", 1500, 1531],
          ["Baby, don't hurt me consectetur4?", 1600, 1622],
          ["Thonk?", 1650, 1700],
        ],
      },
    ],
  },
  {
    id: 2,
    conceptName: "Anim id est",
    startTime: 1745,
    endTime: 2605,
    conceptHeadings: [
      {
        heading: "Incididunt ut",
        startTime: 1750,
        endTime: 2550,
        subheadings: [
          {
            subheading: ["Labore et dolore", 1750, 2000],
            paragraphs: [],
          },
          {
            subheading: ["Magna aliqua", 2100, 2400],
            paragraphs: [],
          },
        ],
        questions: [
          ["What is love5?", 1800, 1841],
          ["Baby, don't hurt me consectetur5?", 1881, 1950],
          ["Thonkers?", 2300, 2349],
        ],
      },
    ],
  },
  {
    id: 3,
    conceptName: "Abra kadabra",
    startTime: 2615,
    endTime: 3480,
    conceptHeadings: [
      {
        heading: "Incididunt ut2",
        startTime: 2630,
        endTime: 3479,
        subheadings: [
          {
            subheading: ["Labore et dolore2", 2700, 3000],
            paragraphs: [],
          },
          {
            subheading: ["Magna aliqua2", 3100, 3300],
            paragraphs: [],
          },
        ],
        questions: [
          ["What is love6?", 2699, 2633],
          ["Baby, don't hurt me consectetur6?", 2800, 2911],
          ["Thonkers6?", 3014, 3222],
        ],
      },
    ],
  },
];

const cueList = [
  {
    startTime: 16.767,
    endTime: 20.187,
    text: "The north shore of the Hawaiian island of Oahu",
  },
  {
    startTime: 20.188,
    endTime: 25.317,
    text: "is just over 2,400 miles from the west coast of North America.",
  },
  {
    startTime: 25.317,
    endTime: 30.147,
    text: "The ocean floor rises five miles to the shores of what people call,",
  },
  {
    startTime: 30.155,
    endTime: 32.025,
    text: '"The Seven Mile Miracle".',
  },
  {
    startTime: 32.032,
    endTime: 36.832,
    text: "It's home to some of the most amazing water and sand in the world.",
  },
  {
    startTime: 36.829,
    endTime: 39.619,
    text: "What would it be like to be born on this island,",
  },
  {
    startTime: 40.624,
    endTime: 42.834,
    text: "to grow up on these shores,",
  },
  {
    startTime: 42.835,
    endTime: 44.875,
    text: "to witness this water everyday?",
  },
  {
    startTime: 46.171,
    endTime: 47.711,
    text: "You're about to meet someone who did.",
  },
  {
    startTime: 341.883,
    endTime: 344.723,
    text: "Here's John Florence and his birth certificate.",
  },
  {
    startTime: 344.72,
    endTime: 347.68,
    text: "He was born in Honolulu, on October 18th 1992.",
  },
  {
    startTime: 349.641,
    endTime: 351.641,
    text: "This is where John grew up,",
  },
  {
    startTime: 351.643,
    endTime: 353.693,
    text: "this is John's office,",
  },
  {
    startTime: 353.687,
    endTime: 356.937,
    text: "and this is a story about John John Florence.",
  },
  {
    startTime: 365.824,
    endTime: 368.994,
    text: "John John Florence or whatever isn't John John anymore.",
  },
  {
    startTime: 368.994,
    endTime: 372.544,
    text: "He's just plain old John.",
  },
  {
    startTime: 372.539,
    endTime: 377.339,
    text:
      "John has a tight-knit group of friends and family living in the north shore of Oahu,",
  },
  {
    startTime: 377.336,
    endTime: 379.206,
    text: "also known as paradise.",
  },
  {
    startTime: 384.217,
    endTime: 387.507,
    text: "Like John, Kelly is a world-class surfer.",
  },
  {
    startTime: 387.512,
    endTime: 391.432,
    text: "He's also John's neighbor and pretty nosy.",
  },
  {
    startTime: 391.433,
    endTime: 395.143,
    text: "I'm thinking about maybe reporting this illegal tree house",
  },
  {
    startTime: 395.145,
    endTime: 398.225,
    text: "to the authorities so it'll get chopped down.",
  },
  {
    startTime: 401.61,
    endTime: 404.86,
    text: "Another world-class surfer neighbor is Jamie.",
  },
  {
    startTime: 404.863,
    endTime: 407.493,
    text: "He and John were best of friends growing up.",
  },
  {
    startTime: 407.491,
    endTime: 409.491,
    text: "Jamie was an asshole.",
  },
  {
    startTime: 409.493,
    endTime: 412.833,
    text: "He tied my board to the top of a coconut tree in his yard one time,",
  },
  {
    startTime: 412.829,
    endTime: 415.829,
    text: "and I was so bummed but Jamie was still laughing the whole time.",
  },
  {
    startTime: 417.501,
    endTime: 419.291,
    text: "Ouch! Rough neighborhood.",
  },
  {
    startTime: 419.294,
    endTime: 420.714,
    text: "Don't let the palm trees fool you.",
  },
  {
    startTime: 430.889,
    endTime: 433.809,
    text: "John surfs from dawn to dusk often into the night,",
  },
  {
    startTime: 433.809,
    endTime: 435.729,
    text: "everyday, ten hours a day.",
  },
  {
    startTime: 435.727,
    endTime: 437.017,
    text: "Or so he claims.",
  },
  {
    startTime: 437.02,
    endTime: 438.85,
    text: "One wonders when he has time to workout.",
  },
  {
    startTime: 438.855,
    endTime: 441.395,
    text: "I do not workout, I just surf.",
  },
  {
    startTime: 441.4,
    endTime: 445.28,
    text: "In 2014, John nabbed the number one spot in the surfer poll",
  },
  {
    startTime: 445.278,
    endTime: 447.858,
    text: "from Kelly Slater after 20 plus years.",
  },
  {
    startTime: 447.864,
    endTime: 450.284,
    text: "How many time has Kelly won now? 22 times?",
  },
  {
    startTime: 450.283,
    endTime: 454.503,
    text: "Like, this is old as I am, yeah.",
  },
  {
    startTime: 460.627,
    endTime: 462.997,
    text: "Here's a wave breaking.",
  },
  {
    startTime: 463.004,
    endTime: 466.514,
    text: "Here's a wave breaking John.",
  },
  {
    startTime: 466.508,
    endTime: 470.548,
    text: "While he was recuperating, he picked up a less dangerous hobby.",
  },
  {
    startTime: 470.554,
    endTime: 472.474,
    text: "So, I originally started flying.",
  },
  {
    startTime: 472.472,
    endTime: 475.682,
    text:
      "I still had my pilot's license long before I had my driver's license.",
  },
  {
    startTime: 475.684,
    endTime: 477.774,
    text: "So John was a world-class surfer",
  },
  {
    startTime: 477.769,
    endTime: 481.149,
    text: "and could fly before he could drive.",
  },
  {
    startTime: 481.148,
    endTime: 483.018,
    text: "Thank god you don't need a license to sail.",
  },
  {
    startTime: 485.318,
    endTime: 488.278,
    text: "This...is not John's boat.",
  },
  {
    startTime: 488.28,
    endTime: 489.7,
    text: "This is.",
  },
  {
    startTime: 489.698,
    endTime: 491.738,
    text: "John also plays the guitar.",
  },
  {
    startTime: 493.785,
    endTime: 495.735,
    text: "Ouch.",
  },
  {
    startTime: 495.745,
    endTime: 498.325,
    text: "This is John's film storage fridge in his dark room.",
  },
  {
    startTime: 498.331,
    endTime: 501.171,
    text: "These are John's favorite cameras.",
  },
  {
    startTime: 501.168,
    endTime: 502.998,
    text: "I'll say I use this one the most.",
  },
  {
    startTime: 510.594,
    endTime: 513.104,
    text: "Already at 22 years old,",
  },
  {
    startTime: 513.096,
    endTime: 517.306,
    text:
      "John has countless stamps to remind him of the many places he has been to,",
  },
  {
    startTime: 517.309,
    endTime: 519.269,
    text: "places that most only dream of.",
  },
  {
    startTime: 519.269,
    endTime: 521.649,
    text: "Um, sometimes I look back on the passport and, yeah,",
  },
  {
    startTime: 521.646,
    endTime: 525.106,
    text: "it does make me reminiscence, rem-remi...remember.",
  },
  {
    startTime: 526.61,
    endTime: 528.57,
    text: "So props to you, John,",
  },
  {
    startTime: 528.57,
    endTime: 532.78,
    text: "for living the dream, living our wildest dreams.",
  },
  {
    startTime: 532.782,
    endTime: 536.742,
    text: "Pipe dreams, wet dreams, sweet dreams, broken dreams.",
  },
  {
    startTime: 536.745,
    endTime: 538.155,
    text: "For you, John, it's not a dream.",
  },
  {
    startTime: 545.17,
    endTime: 546.46,
    text: "Dream on, John.",
  },
  {
    startTime: 1045.086,
    endTime: 1047.046,
    text: "What else do we need?",
  },
  {
    startTime: 1047.046,
    endTime: 1050.466,
    text: "Hurry up and wait, hurry up and wait, hurry up and wait.",
  },
  {
    startTime: 1050.466,
    endTime: 1052.466,
    text: "I wonder if the road's as bumpy as it used to be.",
  },
  {
    startTime: 1053.136,
    endTime: 1054.506,
    text: "Ah! There it is.",
  },
  {
    startTime: 1057.223,
    endTime: 1058.523,
    text: "It's here.",
  },
  {
    startTime: 1058.516,
    endTime: 1060.676,
    text: "- Holy shit. -Enough size for it.",
  },
  {
    startTime: 1060.685,
    endTime: 1062.265,
    text: "-Look at this one. -Look at that one.",
  },
  {
    startTime: 1062.27,
    endTime: 1063.44,
    text: "That's just for one.",
  },
  {
    startTime: 1063.438,
    endTime: 1064.898,
    text: "-That's a nice one. -Oh, damn it.",
  },
  {
    startTime: 2127.918,
    endTime: 2131.298,
    text: "We meet in an hour of change and challenge,",
  },
  {
    startTime: 2133.256,
    endTime: 2135.256,
    text: "in a decade of hope and fear,",
  },
  {
    startTime: 2137.719,
    endTime: 2140.299,
    text: "in an age of both knowledge and ignorance.",
  },
  {
    startTime: 2143.683,
    endTime: 2146.353,
    text: "The greater our knowledge increases,",
  },
  {
    startTime: 2146.353,
    endTime: 2148.983,
    text: "the greater our ignorance unfolds.",
  },
  {
    startTime: 2151.066,
    endTime: 2153.646,
    text: "...that all great and honorable actions",
  },
  {
    startTime: 2153.652,
    endTime: 2156.782,
    text: "are accompanied with great difficulties,",
  },
  {
    startTime: 2156.78,
    endTime: 2161.37,
    text: "and both must be enterprized and overcome",
  },
  {
    startTime: 2161.368,
    endTime: 2163.158,
    text: "with admirable courage.",
  },
  {
    startTime: 2166.123,
    endTime: 2170.503,
    text: "Many years ago, the great British explorer, George Mallory,",
  },
  {
    startTime: 2170.502,
    endTime: 2173.962,
    text: "who was to die on Mount Everest,",
  },
  {
    startTime: 2173.964,
    endTime: 2175.844,
    text: "was asked why did he want to climb it.",
  },
  {
    startTime: 2180.72,
    endTime: 2182.26,
    text: 'He said, "Because it is there."',
  },
  {
    startTime: 2184.766,
    endTime: 2186.726,
    text: "Well, space is there,",
  },
  {
    startTime: 2186.726,
    endTime: 2188.056,
    text: "and we're going to climb it.",
  },
  {
    startTime: 2192.232,
    endTime: 2194.192,
    text: "And the moon and the planets are there,",
  },
  {
    startTime: 2195.944,
    endTime: 2198.824,
    text: "and new hopes for knowledge and peace are there.",
  },
  {
    startTime: 2201.908,
    endTime: 2205.908,
    text: "And, therefore, as we set sail, we ask God's blessing",
  },
  {
    startTime: 2205.912,
    endTime: 2210.002,
    text: "on the most hazardous and dangerous and greatest adventure",
  },
  {
    startTime: 2210,
    endTime: 2212.17,
    text: "on which man has ever embarked.",
  },
  {
    startTime: 2212.169,
    endTime: 2213.039,
    text: "Thank you.",
  },
  {
    startTime: 2812.894,
    endTime: 2814.064,
    text: "Oh, look at the ocean.",
  },
  {
    startTime: 2815.605,
    endTime: 2818.225,
    text: "Oh, imagine some inside cruising.",
  },
  {
    startTime: 2818.858,
    endTime: 2820.028,
    text: "Oh, no hand.",
  },
  {
    startTime: 2820.026,
    endTime: 2821.396,
    text: "Oh, my gosh.",
  },
  {
    startTime: 2822.195,
    endTime: 2823.775,
    text: "See you later.",
  },
  {
    startTime: 2823.78,
    endTime: 2825.36,
    text: "Should we go right here?",
  },
  {
    startTime: 2825.364,
    endTime: 2826.624,
    text: "I'm sure it's pointless to walk all the way down.",
  },
  {
    startTime: 2826.616,
    endTime: 2827.866,
    text: "You end up right here anyway.",
  },
  {
    startTime: 3034.198,
    endTime: 3038.028,
    text: "And so, for now, our time with John comes to an end.",
  },
  {
    startTime: 3039.453,
    endTime: 3040.623,
    text: "Any last words, John?",
  },
  {
    startTime: 3042.456,
    endTime: 3043.536,
    text: "How about a wave?",
  },
  {
    startTime: 3045.209,
    endTime: 3046.789,
    text: "Not that kinda wave, John.",
  },
  {
    startTime: 3049.714,
    endTime: 3050.764,
    text: "That kind.",
  },
  {
    startTime: 3386.091,
    endTime: 3389.721,
    text: "Check one, check two, check three, check four.",
  },
  {
    startTime: 3389.72,
    endTime: 3392.68,
    text: "Check 55, or not.",
  },
  {
    startTime: 3392.681,
    endTime: 3394.561,
    text: "Yeah, well, for, you know, for me...",
  },
  {
    startTime: 3394.558,
    endTime: 3396.678,
    text: "-Oh, shit. Is it still going? - Yeah.",
  },
  {
    startTime: 3396.685,
    endTime: 3399.645,
    text: "Everything I associated with surfing in the ocean,",
  },
  {
    startTime: 3399.646,
    endTime: 3403.016,
    text: "was 100% to do with my brother.",
  },
  {
    startTime: 3403.025,
    endTime: 3407.985,
    text:
      "He was my ultimate influence and I didn't realize that until he was gone.",
  },
  {
    startTime: 3407.988,
    endTime: 3413.658,
    text: "A lot of drive, insight for surfing kinda went with him.",
  },
  {
    startTime: 3413.66,
    endTime: 3416.91,
    text: "It took years for me to find that love for surfing again.",
  },
  {
    startTime: 3416.914,
    endTime: 3419.044,
    text: "It's through guys like John,",
  },
  {
    startTime: 3419.041,
    endTime: 3422.381,
    text:
      "seeing how he's evolved from a kid to a man, to what he's doing now...",
  },
  {
    startTime: 3422.378,
    endTime: 3426.758,
    text:
      "That's what got me psyched, it made me wanna reevaluate my whole surfing life.",
  },
  {
    startTime: 3427.841,
    endTime: 3430.131,
    text: "I can't wait to see what's next.",
  },
  {
    startTime: 3511.3,
    endTime: 3514.51,
    text:
      "Every session I go out with him, it's exciting, it's already the future,",
  },
  {
    startTime: 3514.511,
    endTime: 3516.511,
    text: "I see progressing with what he's doing.",
  },
  {
    startTime: 3516.513,
    endTime: 3520.273,
    text: "For me, it's nice to be around that psyche, that energy,",
  },
  {
    startTime: 3520.267,
    endTime: 3523.637,
    text: "and how damn good he surfs.",
  },
  {
    startTime: 3523.645,
    endTime: 3526.105,
    text: "I think that's why I think why he is where he is at,",
  },
  {
    startTime: 3526.106,
    endTime: 3531.436,
    text:
      "'cause the way he surfs and he draws these lines that no one else draws.",
  },
  {
    startTime: 3531.445,
    endTime: 3534.235,
    text: "It's explosive, it's wild, it's unorthodox and it's...",
  },
  {
    startTime: 3535.449,
    endTime: 3536.369,
    text: "It's John John.",
  },
];

const getCuesWithPath = (
  cues: typeof cueList,
  headings: typeof nestedHeadings
) => {
  const cuesWithPath = cues.map(
    ({ startTime: cueStartTime, endTime: cueEndTime, text }) => {
      const [conceptName, conceptIndex] = nestedHeadings.reduce(
        (
          acc: [name: string, index: number],
          { conceptName, startTime, endTime },
          index
        ) => {
          if (cueStartTime >= startTime && cueEndTime <= endTime) {
            return [conceptName, index];
          }
          return acc;
        },
        ["", 0]
      );

      const [heading, headingIndex] = nestedHeadings[
        conceptIndex
      ].conceptHeadings.reduce(
        (
          acc: [name: string, index: number],
          { heading: headingName, startTime, endTime },
          index
        ) => {
          if (cueStartTime >= startTime && cueEndTime <= endTime) {
            return [headingName, index];
          }

          return acc;
        },
        ["", 0]
      );

      let subheadingName: string | null = null;
      let subheadingIndex: number | null = null;

      if (
        nestedHeadings[conceptIndex].conceptHeadings[headingIndex].subheadings
          .length !== 0
      ) {
        const [subheadingInner, subheadingIndexInner] = nestedHeadings[
          conceptIndex
        ].conceptHeadings[headingIndex].subheadings.reduce(
          (
            acc: [name: string | null, index: number | null],
            { subheading },
            index
          ) => {
            const name = subheading[0];
            const startTime = subheading[1];
            const endTime = subheading[2];

            if (cueStartTime >= startTime && cueEndTime <= endTime) {
              return [name, index];
            }

            return acc;
          },
          [null, null]
        );

        subheadingName = subheadingInner;
        subheadingIndex = subheadingIndexInner;
      }

      let paragraphName: string | null = null;
      let paragraphIndex: number | null = null;

      if (
        subheadingIndex !== null &&
        nestedHeadings[conceptIndex].conceptHeadings[headingIndex].subheadings[
          subheadingIndex
        ].paragraphs.length !== 0
      ) {
        const [paragraphNameInner, paragraphIndexInner] = nestedHeadings[
          conceptIndex
        ].conceptHeadings[headingIndex].subheadings[
          subheadingIndex
        ].paragraphs.reduce(
          (
            acc: [name: string | null, index: number | null],
            [name, startTime, endTime],
            index
          ) => {
            if (cueStartTime >= startTime && cueEndTime <= endTime) {
              return [name, index];
            }

            return acc;
          },
          [null, null]
        );

        paragraphName = paragraphNameInner;
        paragraphIndex = paragraphIndexInner;
      }

      let path = `/${conceptName}/${heading}`;

      if (subheadingName !== null) {
        path += `/${subheadingName}`;
      }

      if (paragraphName !== null) {
        path += `/${paragraphName}`;
      }

      path = path.replace(/\s+/g, "-");

      return { startTime: cueStartTime, endTime: cueEndTime, text, path };
    }
  );

  return cuesWithPath;
};

export default getCuesWithPath;
