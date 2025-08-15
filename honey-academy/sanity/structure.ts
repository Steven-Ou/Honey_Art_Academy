import { CogIcon, UserIcon, ImagesIcon, HomeIcon } from "@sanity/icons";

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      // 1. Add the new Homepage singleton here
      S.listItem()
        .title("Homepage")
        .id("homePage")
        .icon(HomeIcon)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Site Settings")
        .id("settings")
        .icon(CogIcon)
        .child(S.document().schemaType("settings").documentId("settings")),
      S.divider(),
      S.listItem()
        .title("Facilities Page")
        .id("facilitiesPage")
        .icon(ImagesIcon)
        .child(
          S.document().schemaType("facilitiesPage").documentId("facilitiesPage")
        ),
      S.listItem()
        .title("About Page")
        .id("aboutPage")
        .icon(UserIcon)
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.documentTypeListItem("instructor").title("Instructors"),
      S.documentTypeListItem("event").title("Events"),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "aboutPage",
            "instructor",
            "settings",
            "event",
            "facilitiesPage",
            "homePage", // 2. Add "homePage" to this list to exclude it
          ].includes(listItem.getId())
      ),
    ]);
