import React, { FC, useEffect, useState } from "react";
import { Theme } from "@material-ui/core/styles";
import { Box, Button, withStyles, WithStyles } from "@material-ui/core";
import { ChevronRightRounded } from '@material-ui/icons';

interface SkipToNextSectionProps extends WithStyles<typeof styles> {
    sectionIds: string[]
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
        display: "block"
    },
    icon: {
        transform: "rotate(90deg);",

        "&:hover": {
            fill: theme.palette.secondary.main,
        }
    }
});


const SkipToNextSection: FC<SkipToNextSectionProps> = ({ classes, sectionIds }) => {
    const getNextSection = () => {
        const bottomOfScreen = window.scrollY + window.innerHeight;
        console.log(sectionIds);
        const nextSectionId = sectionIds.find(sectionId => {
            const section = document.getElementById(sectionId);
            console.log(sectionId);
            return section.getBoundingClientRect().y - window.innerHeight / 5 > bottomOfScreen;
        });
        console.log(nextSectionId);
        return document.getElementById(nextSectionId);
    }

    const skipToNextSection = () => {
        const nextSection = getNextSection();
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Box className={classes.skipToNextSectionWrapper}>
            <Button className={classes.skipToNextSectionButton} onClick={skipToNextSection} aria-label="Hopp til neste">
                <ChevronRightRounded className={classes.icon} />
            </Button>
        </Box>
    );
}

export default withStyles(theme => styles(theme))(SkipToNextSection);