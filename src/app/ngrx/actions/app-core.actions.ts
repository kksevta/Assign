import { Action } from '@ngrx/store';
import { type } from '../../core/utils/action-type-check';

export const ActionTypes = {
    ADD_TAB: type('[App] Add Tab'),
    REMOVE_TAB: type('[App] Remove Tab'),
    SELECT_TAB: type('[App] Select Tab')
};

export class AddTabAction implements Action {
    readonly type = ActionTypes.ADD_TAB;
    constructor(public payload?: any) {
        this.payload = payload;
    }
}


export class SelectTabAction implements Action {
    readonly type = ActionTypes.SELECT_TAB;
    constructor(public payload?: any) {
        this.payload = payload;
    }
}

export class RemoveTabAction implements Action {
    readonly type = ActionTypes.REMOVE_TAB;
    constructor(public payload?: any) {
        this.payload = payload;
    }
}

export type Actions = AddTabAction | RemoveTabAction;