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


export { getTable };
