import React, { Component } from 'react';

import { hideDialog } from '../actions';

/**
 * Abstract dialog to display dialogs.
 */
export default class AbstractDialog extends Component {

    /**
     * Abstract Dialog component's property types.
     *
     * @static
     */
    static propTypes = {
        /**
         * Whether cancel button is disabled. Enabled by default.
         */
        cancelDisabled: React.PropTypes.bool,

        /**
         * Optional i18n key to change the cancel button title.
         */
        cancelTitleKey: React.PropTypes.string,

        /**
         * Used to show hide the dialog on cancel.
         */
        dispatch: React.PropTypes.func,

        /**
         * The handler for onCancel event.
         */
        onCancel: React.PropTypes.func,

        /**
         * The handler for the event when submitting the dialog.
         */
        onSubmit: React.PropTypes.func,

        /**
         * Whether to show/hide the dialog.
         */
        show: React.PropTypes.bool,

        /**
         * Is submit button enabled/disabled. Enabled by default.
         */
        submitDisabled: React.PropTypes.bool,

        /**
         * Optional i18n key to change the submit button title.
         */
        submitTitleKey: React.PropTypes.string,

        /**
         * Used to obtain translations in children classes.
         */
        t: React.PropTypes.func,

        /**
         * Key to use for showing a title.
         */
        titleKey: React.PropTypes.string
    }

    /**
     * Initializes a new Dialog instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props) {
        super(props);

        this._onCancel = this._onCancel.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    /**
     * Dispatches action to hide the dialog.
     *
     * @returns {void}
     */
    _onCancel() {

        let hide = true;

        if (this.props.onCancel) {
            hide = this.props.onCancel();
        }

        if (hide) {
            this.props.dispatch(hideDialog());
        }
    }

    /**
     * Dispatches the action when submitting the dialog.
     *
     * @private
     * @param {string} value - The submitted value if any.
     * @returns {void}
     */
    _onSubmit(value) {
        let hide = true;

        if (this.props.onSubmit) {
            hide = this.props.onSubmit(value);
        }

        if (hide) {
            this.props.dispatch(hideDialog());
        }
    }
}

/**
 * Maps (parts of) the Redux state to the associated Dialog's props.
 *
 * @param {Object} state - Redux state.
 * @protected
 * @returns {{
 *     show: bool
 * }}
 */
export function _mapStateToProps(state) {
    const dialog = state['features/base/dialog'];

    return {
        show: dialog.show
    };
}
