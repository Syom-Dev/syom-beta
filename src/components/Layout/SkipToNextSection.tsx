import React, { FC } from "react";
// eslint-disable-next-line import/named
import { Theme } from "@material-ui/core/styles";
// eslint-disable-next-line import/named
import { Box, Fab, withStyles, WithStyles } from "@material-ui/core";
import { ChevronRightRounded } from "@material-ui/icons";

import { getVisibilityOfElement } from "../../utils/ElementUtils";

interface SkipToNextSectionProps extends WithStyles<typeof styles> {
  sectionIds: string[];
}

const styles = (theme: Theme): any => ({
  skipToNextSectionWrapper: {
    position: "fixed",
    bottom: "1rem",
    left: 0,
    right: 0
  },

  skipToNextSectionButton: {
    margin: "0 auto",
    display: "block",
    background: "white",
    borderRadius: "50%"
  },

  icon: {
    "transform": "rotate(90deg);",
    "vertical-align": "bottom"
  }
});

const SkipToNextSection: FC<SkipToNextSectionProps> = ({ classes, sectionIds }) => {

  const getNextSection = (): HTMLElement => {
    const visibilityOfElements = sectionIds.map(id => getVisibilityOfElement(document.getElementById(id)));

    let indexOfMostVisibleIndex;

    if (visibilityOfElements.every(el => el === 0)) {
      indexOfMostVisibleIndex = 0;
    } else {
      indexOfMostVisibleIndex = visibilityOfElements.findIndex(v => v === Math.max(...visibilityOfElements)) + 1;
    }

    return indexOfMostVisibleIndex <= sectionIds.length - 1 ? document.getElementById(sectionIds[indexOfMostVisibleIndex]) : null;
  };

  const skipToNextSection = (): void => {
    const nextSection = getNextSection();

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className={classes.skipToNextSectionWrapper}>
      <Fab className={classes.skipToNextSectionButton} onClick={skipToNextSection} aria-label="Hopp til neste">
        <ChevronRightRounded className={classes.icon} />
      </Fab>
    </Box>
  );
};

export default withStyles(theme => styles(theme))(SkipToNextSection);
