import { Concept } from "../../Drawer/HeadingNavigation/HeadingNavigation";
import cuesWithPathList from "../../Video/Media/cuesWithPathList";

export interface SearchableHeading {
  value: string;
  path: string;
}

export interface SearchableCue extends SearchableHeading {
  startTime: number;
  endTime: number;
}

const getSearchableItems = (nestedHeadings: Concept[]) => {
  const conceptNames = nestedHeadings.map(
    ({ conceptName, conceptHeadings, startTime, endTime }) => {
      return {
        value: conceptName,
        startTime,
        endTime,
        path: `/${conceptName}/${conceptHeadings[0].heading}`.replace(
          /\s+/g,
          "-"
        ),
      };
    }
  );

  const headings = nestedHeadings
    .map(({ conceptName, conceptHeadings }) => {
      return conceptHeadings.map(({ heading, startTime, endTime }) => {
        return {
          value: heading,
          startTime,
          endTime,
          path: `/${conceptName}/${heading}`.replace(/\s+/g, "-"),
        };
      });
    })
    .flat();

  const subheadings = nestedHeadings
    .map(({ conceptName, conceptHeadings }) => {
      return conceptHeadings.map(({ subheadings, heading }) => {
        return subheadings.map(
          ({ subheading: [subheadingName, startTime, endTime] }) => {
            return {
              value: subheadingName,
              startTime,
              endTime,
              path: `/${conceptName}/${heading}/${subheadingName}`.replace(
                /\s+/g,
                "-"
              ),
            };
          }
        );
      });
    })
    .flat(2);

  const paragraphs = nestedHeadings
    .map(({ conceptName, conceptHeadings }) => {
      return conceptHeadings.map(({ subheadings, heading }) => {
        return subheadings.map(
          ({ subheading: [subheadingName], paragraphs }) => {
            return paragraphs.map(([paragraphName, startTime, endTime]) => {
              return {
                value: paragraphName,
                startTime,
                endTime,
                path: `/${conceptName}/${heading}/${subheadingName}/${paragraphName}`.replace(
                  /\s+/g,
                  "-"
                ),
              };
            });
          }
        );
      });
    })
    .flat(3);

  const items: SearchableCue[] = conceptNames.concat(
    headings,
    subheadings,
    paragraphs
    /*   cuesWithPathList */
  );

  const pathToItem = items.reduce(
    (
      acc: {
        [path: string]: {
          value: string;
          path: string;
          startTime: number;
          endTime: number;
        };
      },
      { value, startTime, endTime, path }
    ) => {
      acc[path] = {
        value,
        path,
        startTime,
        endTime,
      };

      return acc;
    },
    {}
  );

  return pathToItem;
};

export default getSearchableItems;
