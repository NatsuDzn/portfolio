// From wirtzdan on github

const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

async function getTable(table) {
  const records = await base(table).select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

async function getAllPosts() {
  const records = await base("Blog")
    .select({
      filterByFormula: `OR({status} = "Published", {status} = "Draft")`,
    })
    .all();

  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

async function getAllPostsPaths() {
  const posts = await getAllPosts();

  return posts.map((post) => {
    return {
      params: {
        id: post.id,
        slug: post.fields.slug,
      },
    };
  });
}

async function getPostData(slug) {
  const records = await base("Blog")
    .select({
      maxRecords: 1,
      filterByFormula: `{slug} = "${slug}"`,
    })
    .all();

  const post = await getMinifiedRecords(records);

  return {
    post,
  };
}

export { getTable, getAllPosts, getAllPostsPaths, getPostData };
