import { CogIcon, UserIcon, ImagesIcon,HomeIcon } from "@sanity/icons"; // Change CameraIcon to ImagesIcon

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
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
        .icon(ImagesIcon) // Use the correct icon here
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
          ].includes(listItem.getId())
      ),
    ]);
