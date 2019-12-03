import dataset from "./dataset";

const 소분류slugize = text => text.split("/")[0].split("(")[0];

export const 소분류 = Array.from(
  new Set(dataset.map(item => 소분류slugize(item["소분류"])))
);

export const 대분류 = Array.from(new Set(dataset.map(item => item["대분류"])));

export const isInCategory = 소분류slug =>
  dataset.filter(item => 소분류slugize(item["소분류"]) === 소분류slug);
