import * as AppActions from '../actions/app-core.actions';

export interface IState {
    tabs: any;
}

export const initialState: IState = {
    tabs: [
        {
            tabID: '0',
            tabType: 'fixed',
            tabHeader: 'Add Transaction',
            active: true
        },
        {
            tabID: '1',
            tabType: 'dynamic',
            login: 'test',
            name: 'testtt',
            active: false
        }
    ],
};

export function reducer(state = initialState, action: AppActions.Actions): IState {
    let index;
    switch (action.type) {
        case AppActions.ActionTypes.ADD_TAB:
            const tabs = state.tabs.map((tab) => {
                return { ...tab, active: false }
            })
            return {
                ...state,
                tabs: tabs.concat(action.payload)
            };
        case AppActions.ActionTypes.REMOVE_TAB:
            index = state.tabs.findIndex((tab) => {
                return tab.tabID == action.payload
            });
            return {
                ...state,
                tabs: (index > -1) ?
                    [
                        ...state.tabs.slice(0, index),
                        ...state.tabs.slice(index + 1)
                    ] :
                    [...state.tabs]
            };
        case AppActions.ActionTypes.SELECT_TAB:
            return {
                ...state,
                tabs: state.tabs.map((tab) => {
                    if (tab.tabID == action.payload) {
                        return { ...tab, active: true }
                    } else {
                        return { ...tab, active: false }
                    }
                })
            };
        default: {
            return state;
        }
    }
}