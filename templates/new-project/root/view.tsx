/** @jsx h */
import { Levo, h } from "levo/levo-view.ts";
import { Model, Action } from "./types.ts";

export const view = (
  props: { model: Model; dispatch: Levo.Dispatch<Action> },
): Levo.Element => {
  const { model, dispatch } = props;
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="My Levo Page" />
        <meta name="description" content="This is a Levo page." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mydomain.com" />
        <meta property="og:title" content="My Levo Page" />
        <meta property="og:description" content="This is a page." />
        <meta property="og:image" content="image.png" />

        {/* Open Graph / Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mydomain.com" />
        <meta property="twitter:title" content="My Levo Page" />
        <meta property="twitter:description" content="A page" />
        <meta property="twitter:image" content="image.png" />
        <title>My Page</title>
        <link rel="shortcut icon" href="./_assets/favicon.ico" />
        <link rel="stylesheet" href="./_assets/index.css" />
      </head>
      <body>
        <div
          style={{
            display: "grid",
            placeContent: "center",
            placeItems: "center",
            height: "100vh",
            gridGap: "8px",
          }}
        >
          <img
            src="./_assets/favicon.svg"
            alt="icon"
            style={{
              height: "88px",
              transform: `rotate(${model.rotation}deg)`,
            }}
          />
          <h1 style={{ color: model.color }}>This is a Levo page</h1>
          <button onclick={dispatch({ $: "rotate" })}>Rotate</button>
          <button onclick={dispatch({ $: "change_color", color: "green" })}>
            Change to green
          </button>
          <button onclick={dispatch({ $: "change_color", color: "black" })}>
            Change to black
          </button>
        </div>
      </body>
    </html>
  );
};
