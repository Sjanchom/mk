import * as constaints from '../SystemConstaints';



export default store => next => action => {
  const { type, callback } = action;

  switch (type) {

    case `${constaints.POWERPLANT_GET_PROVINCE}_SUCCESS`:
      return next(action);
     default:
      return next(action);
  }
};
