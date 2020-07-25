/** @jsx h */
import { Levo, h } from "levo/levo-view.ts";

export type Model = {
  message: string;
};

export const initialModel = (): Model => {
  return {
    message: "click me",
  };
};

export type Action = {
  $: "do nothing";
};

export const view = (
  props: { model: Model; dispatch: Levo.Dispatch<Action> },
): Levo.Element => {
  const { model, dispatch } = props;
  const og = {
    title: "My Levo Page",
    url: "https://mydomain.com",
    description: "This is a page.",
    image: "image.png",
  };
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={og.title} />
        <meta name="description" content={og.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={og.url} />
        <meta property="og:title" content={og.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />

        {/* Open Graph / Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={og.url} />
        <meta property="twitter:title" content={og.title} />
        <meta property="twitter:description" content={og.description} />
        <meta property="twitter:image" content={og.image} />
        <title>My Page</title>
        <link rel="shortcut icon" href="./_assets/favicon.ico" />
        <link rel="stylesheet" href="./_assets/index.css" />
      </head>
      <body>
        <button onclick={dispatch({ $: "do nothing" })}>{model.message}</button>
      </body>
    </html>
  );
};
