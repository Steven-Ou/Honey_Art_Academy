export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About Page")
        .id("aboutPage")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.documentTypeListItem("instructor").title("Instructors"),
      ...S.documentTypeListItems().filter(
        (listItem) => !["aboutPage"].includes(listItem.getId())
      ),
    ]);
