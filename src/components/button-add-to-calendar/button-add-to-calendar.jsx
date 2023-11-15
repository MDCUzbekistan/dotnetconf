import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";

function ButtonAddToCalendar({ children, ...props }) {
  return (
    <AddToCalendarButton
      {...props}
      options={[
        "Apple",
        "Google",
        "Microsoft365",
        "MicrosoftTeams",
        "Outlook.com",
        "Yahoo",
        "iCal",
      ]}
      timeZone="Asia/Tashkent"
    >
      {children}
    </AddToCalendarButton>
  );
}

export default ButtonAddToCalendar;
