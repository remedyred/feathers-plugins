export async function allowClientPaginationControl(hook) {
	if (hook.params?.query?.paginate !== undefined) {
		hook.params.paginate = hook.params.query.paginate
		delete hook.params.query.paginate
	}
}
