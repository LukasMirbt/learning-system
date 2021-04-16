import { SearchableSection, Section } from "./Media";

const getSearchableSections = (sections: Section[], title: string) => {
  const searchableSections: SearchableSection[] = [];

  sections.forEach(({ sectionName, startTime, endTime, chapters }) => {
    searchableSections.push({
      text: sectionName,
      startTime,
      endTime,
      videoTitle: title,
      isCue: false,
    });

    chapters.forEach(
      ({
        chapterName,
        startTime: startTime2,
        endTime: endTime2,
        paragraphs,
      }) => {
        searchableSections.push({
          text: chapterName,
          startTime: startTime2,
          endTime: endTime2,
          videoTitle: title,
          isCue: false,
        });

        paragraphs.forEach(([name, sTime, eTime]) => {
          searchableSections.push({
            text: name,
            startTime: sTime,
            endTime: eTime,
            videoTitle: title,
            isCue: false,
          });
        });
      }
    );
  });

  return searchableSections;
};

export default getSearchableSections;
