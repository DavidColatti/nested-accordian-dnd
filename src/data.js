export const taskList = Array.from({ length: 3 }, (v, k) => k).map((k) => ({
  id: `parentTask-${k}`,
  item_name: `Long Item Name Goes Here ${k}`,
  date: "10/31/2020 - 11/15/2020",
  sub_task: [
    {
      id: `subTask-${k}.1`,
      item_name: `Long Item Name Goes Here ${k}`,
      date: "10/31/2020 - 11/15/2020",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
    {
      id: `subTask-${k}.2`,
      item_name: `Long Item Name Goes Here ${k}`,
      date: "10/31/2020 - 11/15/2020",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
}));
