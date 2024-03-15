import * as create from './queries/createQueries';
import * as update from './queries/updateQueries';
import * as _delete from './queries/deleteQueries';
import * as get from './queries/createQueries';

export const queries = {
    ...create,
    ...update,
    ..._delete,
    ...get,
};
