const changeColor = payload => (
 {
    type: 'CHANGE_COLOR',
    payload
});

const changeHeight = payload => ({
    type: 'CHANGE_HEIGHT',
    payload
});

const changeWeight = payload => ({
    type: 'CHANGE_WEIGHT',
    payload
});

const changeRadius = payload => ({
    type: 'CHANGE_RADIUS',
    payload
});

const changeTextColor = payload => ({
    type: 'CHANGE_TEXT_COLOR',
    payload
});

const disableEnableLong = payload => ({
    type: 'ENABLE_DISABLE_LONG',
    payload
});
const buttonActions = {changeColor, changeHeight, changeWeight, changeRadius, changeTextColor, }

export default buttonActions;