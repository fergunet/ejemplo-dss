export enum StateType {
 //ESTADOS POSIBLES
 //Es el panel izquierdo visible?
 //Estamos en el panel principal o en el detail?
}

export enum PanelType {
    Primary,
    Detail
}

export interface IState {
    getPanelType() : PanelType;
    getStateType() : StateType;
    isSideNavVisible() : boolean;
    getPanelButtonClass() : string;
}



export class UN_ESTADO_DE_EJEMPLO //extends State
    implements IState {
    getPanelType() : PanelType { return PanelType.LO_QUE_SEA; }
    getStateType() : StateType { return StateType.LO_QUE_SEA; }
    getPanelButtonClass() : string { return 'fa-chevron-right';} //Devuelve una clase para >
    isSideNavVisible() : boolean { return false; }
}



export interface IMediatorImpl {
    showNavPanel();
    hideNavPanel();
    showDetailPanel();
    hideDetailPanel();
    changeShowHideSideButton(fromClass: string, toClass: string);
}

export class Mediator { //Permite trabajar con los estados
    private _estado1 = new ESTADO1();
    //RESTO DE ESTADOS POSIBLES...

    private _currentState: IState;
    private _currentMainPanelState: IState;
    private _mediatorImpl: IMediatorImpl;

    //Se le inyecta una implementación concreta, independientemente de la UI
    constructor(mediatorImpl: IMediatorImpl) {
        this._mediatorImpl = mediatorImpl;
        this._currentState = this._currentMainPanelState = this._sideNavState;
    }

    getStateImpl(stateType: StateType) : IState {
        var stateImpl : IState;
        switch(stateType) {
            //DEVOLVER ESTADO DE ACUERDO AL ENUM 
            case StateType.estado1:
                stateImpl = this._estado1;
                break;
            //...RESTO
        }
        return stateImpl;
    }

    moveToState(stateType: StateType) {
        var previousState = this._currentState;
        var nextState = this.getStateImpl(stateType);

        //LOGICA PARA MOVERSE ENTRE ESTADOS
    }

    //Abrir y cerrar el sideNav
    showHideSideNavClicked() {
        switch (this._currentState.getStateType()) {
            case StateType.CUAL:
                this.moveToState(StateType.OTRO);
                break;
            case StateType.CUAL:
                this.moveToState(StateType.OTRO);
                break;
        }
    }

    getCurrentMainPanelState() : StateType {
        return this._currentMainPanelState.getStateType();
    }

}

