import { collection, config, fields } from "@keystatic/core";

export default config({
    storage: {
        kind: "cloud",
    },
    collections: {
        posts: collection({
            label: "Posts",
            slugField: "title",
            path: "src/content/posts/*",
            format: { contentField: "content" },
            schema: {
                title: fields.slug({ name: { label: "Titulo" } }),
                content: fields.markdoc({
                    label: "Contenido",
                    options: {
                        image: {
                            directory: "src/assets/images/posts",
                            publicPath: "../../assets/images/posts/",
                        },
                    },
                }),
            },
        }),
    },
});
