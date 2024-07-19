type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  alternates?: {
    languages?: {
      en: string;
    };
  };
}>;

export default function sitemap(): Sitemap {
  return [
    {
      url: "https://harrys-menu.uz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: "https://harrys-menu.uz",
        },
      },
    },
    {
      url: "https://harrys-menu.uz/burgers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://harrys-menu.uz/burgers",
        },
      },
    },
    {
      url: "https://harrys-menu.uz/hot-dogs",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          en: "https://harrys-menu.uz/hot-dogs",
        },
      },
    },
    {
      url: "https://harrys-menu.uz/drinks",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          en: "https://harrys-menu.uz/drinks",
        },
      },
    },
    {
      url: "https://harrys-menu.uz/side-dishes",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          en: "https://harrys-menu.uz/side-dishes",
        },
      },
    },
  ];
}
