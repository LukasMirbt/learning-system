export interface Chapter {
  chapterName: string;
  startTime: number;
  endTime: number;
  paragraphs: [paragraphName: string, startTime: number, endTime: number][];
}

export interface Section {
  sectionName: string;
  startTime: number;
  endTime: number;
  chapters: Chapter[];
}

export interface VideoStructure {
  title: string;
  sections: Section[];
}

export interface Searchable {
  startTime: number;
  endTime: number;
  text: string;
  videoTitle: string;
  isCue: boolean;
}

export interface SearchableCue extends Searchable {
  isCue: true;
}

export interface SearchableSection extends Searchable {
  isCue: false;
}
