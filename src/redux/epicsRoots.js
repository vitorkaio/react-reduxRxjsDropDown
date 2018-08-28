import 'rxjs-compat';
import { combineEpics } from 'redux-observable'
import { backDropEpic } from './epics/backDropEpic';

const epics = [
    backDropEpic
]

const epicsRoots = combineEpics(...epics);

export default epicsRoots;