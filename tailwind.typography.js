/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            maxWidth: false,

            "h2, p": {
              fontFamily: theme("fontFamily.sans"),
            },

            "h2, h3, h4": {
              marginTop: "0",
            },

            h2: {
              fontSize: "1.5rem",
              marginBottom: theme("margin.5"),
              color: theme("colors.green"),
            },

            h3: {
              fontSize: "1.25rem",
              marginBottom: theme("margin.3"),
              color: theme("colors.black"),
            },

            h4: {
              fontSize: "1.125rem",
              marginBottom: theme("margin.2"),
              color: theme("colors.black"),
            },

            p: {
              fontSize: "1rem",
              marginBottom: theme("margin.5"),
              marginTop: "0",
              color: theme("colors.black"),

              "&:last": {
                marginBottom: "0",
              },
            },

            "a, a > p": {
              fontWeight: "bold",
              color: theme("colors.mocha"),
            },

            "ol, ul": {
              marginTop: "0",
              marginBottom: theme("margin.5"),

              li: {
                paddingLeft: "0",
                marginTop: theme("margin.1/.5"),
                marginBottom: theme("margin.1/.5"),

                "&::marker": {
                  color: theme("colors.black"),
                },
              },
            },
          },
        },
        md: {
          css: {
            h2: {
              fontSize: "2.25rem",
            },

            h3: {
              fontSize: "1.5rem",
            },

            h4: {
              fontSize: "1.25rem",
            },

            p: {
              fontSize: "1.125rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
