import React from "react";

import { useStyles } from "./BetaPage/styles.jss";

export const GoogleForm: React.FC = () => {
  const classes = useStyles();

  return (
    <iframe
      className={classes.iframe}
      title="Kontaktskjema"
      src="https://docs.google.com/forms/d/e/1FAIpQLSddrwSLr7wwa6E-nr6ZOIhDm7eS7sDawzULqG1CxQrIhsNJnA/viewform?embedded=true"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
    >
    Loading…
    </iframe>
  );
};

