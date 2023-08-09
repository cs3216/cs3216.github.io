import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <strong>CS3216 Software Product Engineering for Digital Markets</strong>
  ),
  project: {
    link: "https://github.com/cs3216/cs3216.github.io",
  },
  docsRepositoryBase:
    "https://github.com/cs3216/cs3216.github.io/blob/master/website",
  footer: {
    text: "CS3216 Software Product Engineering for Digital Markets",
  },
  primaryHue: {
    light: 196,
    dark: 106,
  },
  useNextSeoProps() {
    return {
      titleTemplate:
        "%s | CS3216 Software Product Engineering for Digital Markets",
    };
  },
};

export default config;
