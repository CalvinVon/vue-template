import * as userConsts from '../../consts/user.const';

export function gender(value) {
    return userConsts.gender[value];
}