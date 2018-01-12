export function applyUpdate(updatedComponent, list) {
  let updatedList = list;
  if(updatedComponent && list) {
    updatedList = [].concat(list).map((component) => {
      if(updatedComponent.id===component.id) { 
        return updatedComponent;
      } else {
        return component;
      }
    });
  }
  return updatedList;
}

export function filterComponents(components) {
  let componentsToReturn = components;
  if(components) {
    if(components.constructor === Array) {
      componentsToReturn = components.filter((component) => {
        return component.deleted === false;
      })
    } else {
      if(components.deleted === true) return [];
    }
  }
  return componentsToReturn;
}


export function isEmptyObject(componentToCheck) {
  return !(componentToCheck && Object.keys(componentToCheck).length > 0);
}