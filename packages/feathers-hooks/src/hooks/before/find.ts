export async function allowClientPaginationControl(req) {
	if (req.params?.query?.paginate !== undefined) {
		req.params.paginate = req.params.query.paginate
		delete req.params.query.paginate
	}
}
