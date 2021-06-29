import React, { FC } from "react"

import { Box } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

import Image from 'next/image'


interface TextImageBoxProps {
  imageUrl: string;
  imageAltText: string;
  heading: string;
  align?: "left" | "right"
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageBox: {
      width: "200px",
      borderRadius: "50%",
      position: "relative"
    },
    rightAligned: {
      flexDirection: "row-reverse",
      textAlign: "right",
    },
    leftAligned: {
      flexDirection: "row",
      textAlign: "left"
    },
    image: {
      borderRadius: "50%"
    }
  }),
);


export const TextImageBox: FC<TextImageBoxProps> = ({ imageUrl, imageAltText, heading, children, align = "left" }) => {
  const classes = useStyles();

  return (
    <Box
      mb={5}
      display="flex"
      flexDirection="column"
      textAlign={align === "left" ? "left" : "right"}
    >
      <Typography component="h2" variant="h4">{heading}</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={align === "right" ? classes.rightAligned : classes.leftAligned}
      >
        <Box flexBasis="60%">
          {children}
        </Box>

        <Box
          className={classes.imageBox}
          display="flex"
          alignItems="center"
          flexBasis="auto"
        >
          <Image src={imageUrl} alt={imageAltText} width={300} height={300} className={classes.image} />
        </Box>
      </Box>
    </Box>
  )
}