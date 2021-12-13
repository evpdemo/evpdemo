export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61b27c5ede7b692c8d061ca6",
                  title: "Sanity Studio",
                  name: "everplans-3-studio",
                  apiId: "b8cbe6b9-bcf2-4bbc-b63e-a8efc4675dca",
                },
                {
                  buildHookId: "61b27c5eb345142cea23d6ee",
                  title: "Blog Website",
                  name: "everplans-3",
                  apiId: "490c232b-b9a9-453b-b4ec-c96c0c2d1ed8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/alexanderfountain/everplans3",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://everplans-3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
