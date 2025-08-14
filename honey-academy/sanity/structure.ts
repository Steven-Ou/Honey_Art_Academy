export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      // Add this new list item at the top
      S.listItem()
        .title("Site Settings")
        .id("settings")
        .icon(CogIcon)
        .child(S.document().schemaType("settings").documentId("settings")),
      S.divider(), // Adds a visual separator
      S.listItem()
        .title("About Page")
        .id("aboutPage")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.documentTypeListItem("instructor").title("Instructors"),
      S.documentTypeListItem("event").title("Events"), // Add a link to manage events
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["aboutPage", "instructor", "settings", "event"].includes(
            listItem.getId()
          )
      ),
    ]);
