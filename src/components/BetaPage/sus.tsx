import { Box, Button, TextField } from "@material-ui/core";
import React from "react";

import { useStyles } from "./styles.jss";

export const GoogleForm: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box pt={3}>
        <TextField
          id="name"
          label="Navn Navnesen"
          type="search"
          variant="filled"
          className={classes.textField}
          InputProps={{
            classes: {
              root: classes.textFieldInput,
              focused: classes.focused
            }
          }}
        />
      </Box>
      <Box>
        <TextField
          error
          id="epostAddress"
          label="navn.navnesen@epost.no"
          type="search"
          variant="filled"
          helperText="Ugyldig epostadresse"
          className={classes.textField}
          InputProps={{
            classes: {
              root: classes.textFieldInput,
              focused: classes.focused
            },
            inputMode: "numeric"
          }}
        />
      </Box>
      <Box pt={5}>
        <Button variant="contained" className={classes.button}>Ja, jeg vil bidra!</Button>
      </Box>
    </>
  );
};

