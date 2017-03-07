import React from 'react';
import { connect } from 'react-redux';
import { translate } from '../../i18n';

import Prompt from 'react-native-prompt';

import AbstractDialog, { _mapStateToProps } from './AbstractDialog';

/**
 * Native dialog using Prompt.
 */
class Dialog extends AbstractDialog {

    /**
     * Native sialog component's property types.
     *
     * @static
     */
    static propTypes = {
        /**
         * I18n key to put as body title.
         */
        placeholderKey: React.PropTypes.string
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const {
            cancelDisabled,
            cancelTitleKey,
            placeholderKey,
            submitDisabled,
            submitTitleKey,
            t,
            titleKey,
            show } = this.props;

        return (
            <Prompt
                cancelText = { cancelDisabled
                    ? undefined
                    : t(cancelTitleKey ? cancelTitleKey : 'dialog.Cancel') }
                onCancel = { this._onCancel }
                onSubmit = { this._onSubmit }
                placeholder = { t(placeholderKey) }
                submitText = { submitDisabled
                    ? undefined
                    : t(submitTitleKey ? submitTitleKey : 'dialog.Ok') }
                title = { t(titleKey) }
                visible = { show } />
        );
    }
}

export default translate(connect(_mapStateToProps)(Dialog));
