import {
  CogIcon,
  UserIcon,
  ImagesIcon,
  HomeIcon,
  CalendarIcon,
  BookIcon,
} from "@sanity/icons";

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      // Page Documents
      S.listItem()
        .title("Homepage")
        .id("homePage")
        .icon(HomeIcon)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("About Page")
        .id("aboutPage")
        .icon(UserIcon)
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("Facilities Page")
        .id("facilitiesPage")
        .icon(ImagesIcon)
        .child(
          S.document().schemaType("facilitiesPage").documentId("facilitiesPage")
        ),

      S.divider(),

      // Content Types
      S.documentTypeListItem("program").title("Programs").icon(BookIcon),
      S.documentTypeListItem("instructor").title("Instructors").icon(UserIcon),
      S.documentTypeListItem("event").title("Events").icon(CalendarIcon),
      S.documentTypeListItem("galleryItem").title("Gallery Items"),

      S.divider(),

      // Settings
      S.listItem()
        .title("Site Settings")
        .id("settings")
        .icon(CogIcon)
        .child(S.document().schemaType("settings").documentId("settings")),

      // Filter out all the manually handled items from the default list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "homePage",
            "aboutPage",
            "facilitiesPage",
            "program",
            "instructor",
            "event",
            "galleryItem",
            "settings",
          ].includes(listItem.getId())
      ),
    ]);
