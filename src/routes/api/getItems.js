import { mysqlconn } from '../../dbConfig';

export async function GET() {
	const categories = await mysqlconn
		.query('SELECT * FROM oc_category WHERE parent_id = 458 AND status = 1 AND image != ""')
		.then(function ([rows, fields]) {
			return rows;
		});

	const ids = categories.map((item) => item.category_id);

	const catNames = await mysqlconn
		.query(`SELECT name, category_id FROM oc_category_description WHERE category_id in (${ids.join(',')})`)
		.then(function ([rows, fields]) {
			return rows;
		});

	const result = categories.map((item) => {
		const catName = catNames.find((_item) => _item.category_id == item.category_id);

		return { ...item, name: catName.name };
	});

	return {
		body: result,
	};
}
