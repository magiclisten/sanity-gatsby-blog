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
                    "60593c8dc3acce008513ec81",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-e7b14i5m",
                  apiId: "d6178bf3-b978-4c1d-8105-f6f3f9656ae1",
                },
                {
                  buildHookId: "60593c8d330a3800813211d8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-id9q4ecu",
                  apiId: "6b25f616-390c-455c-8187-7a84aa2f006a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/magiclisten/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-id9q4ecu.netlify.app",
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
