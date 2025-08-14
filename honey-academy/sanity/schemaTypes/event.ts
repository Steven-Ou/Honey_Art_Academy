import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "datetime",
    }),
    defineField({
      name: "details",
      title: "Event Details",
      type: "blockContent",
    }),
  ],
});
